#!/usr/bin/env python3
"""
Generate native-language audio narration for every journal post.

Reads client/src/content/journal.ts, extracts each post's text, translates
into Hindi and Malayalam via deep-translator (Google's free public endpoint,
no API key required), then generates MP3s via edge-tts (Microsoft Neural
voices, free, no API key required).

Outputs to client/public/audio/<slug>/<lang>.mp3
Runs in ~2-5 minutes for the full journal.

Usage:
    pip3 install --break-system-packages edge-tts deep-translator
    python3 scripts/generate-audio.py [<slug>]   # optional: one post only
"""
import asyncio
import os
import re
import sys
from pathlib import Path

import edge_tts
from deep_translator import GoogleTranslator

ROOT = Path(__file__).resolve().parent.parent
JOURNAL = ROOT / "client/src/content/journal.ts"
OUT = ROOT / "client/public/audio"

# Microsoft Neural voices — warm, native pronunciation in each language.
VOICES = {
    "en": "en-IN-NeerjaExpressiveNeural",   # Indian English, warm
    "hi": "hi-IN-SwaraNeural",              # Hindi, female, expressive
    "ml": "ml-IN-SobhanaNeural",            # Malayalam, female
}

LANGS = ["en", "hi", "ml"]


def extract_posts():
    """Pull slug + concatenated narration text out of each post."""
    src = JOURNAL.read_text(encoding="utf-8")
    posts = []

    # Match each post block: { slug: "...", title: "...", ... },
    slug_re = re.compile(r'slug:\s*"([^"]+)"')
    title_re = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)"')
    dek_re = re.compile(r'dek:\s*"((?:[^"\\]|\\.)*)"')
    text_field_re = re.compile(r'text:\s*"((?:[^"\\]|\\.)*)"')
    items_re = re.compile(r'items:\s*\[((?:[^\[\]]|\[[^\]]*\])*?)\]', re.DOTALL)
    item_str_re = re.compile(r'"((?:[^"\\]|\\.)*)"')

    # Split file into post blocks by slug position
    slug_positions = [(m.start(), m.group(1)) for m in slug_re.finditer(src)]
    for i, (start, slug) in enumerate(slug_positions):
        end = slug_positions[i + 1][0] if i + 1 < len(slug_positions) else len(src)
        block = src[start:end]

        title_m = title_re.search(block)
        dek_m = dek_re.search(block)
        title = (title_m.group(1) if title_m else "").replace('\\"', '"').replace("\\'", "'")
        dek = (dek_m.group(1) if dek_m else "").replace('\\"', '"').replace("\\'", "'")

        # All text fields + list items (in source order)
        parts = []
        if title:
            parts.append(title)
        if dek:
            parts.append(dek)

        # Walk in source order: text fields and list items
        for m in re.finditer(r'(text:\s*"((?:[^"\\]|\\.)*)")|(items:\s*\[((?:[^\[\]]|\[[^\]]*\])*?)\])',
                             block, re.DOTALL):
            if m.group(2) is not None:
                t = m.group(2).replace('\\"', '"').replace("\\'", "'")
                if t:
                    parts.append(t)
            elif m.group(4) is not None:
                for im in item_str_re.finditer(m.group(4)):
                    t = im.group(1).replace('\\"', '"').replace("\\'", "'")
                    if t:
                        parts.append(t)

        text = ". ".join(parts)
        # Clean up doubled punctuation from joining
        text = re.sub(r'\.{2,}', '.', text)
        text = re.sub(r'\s+', ' ', text).strip()

        if text:
            posts.append({"slug": slug, "text": text, "title": title})

    return posts


def chunk_text(text, max_chars=4000):
    """Translate API rate limits long inputs. Split on sentence boundaries."""
    if len(text) <= max_chars:
        return [text]
    sentences = re.split(r'(?<=[.!?])\s+', text)
    chunks, cur = [], ""
    for s in sentences:
        if len(cur) + len(s) + 1 > max_chars:
            if cur:
                chunks.append(cur)
            cur = s
        else:
            cur = (cur + " " + s) if cur else s
    if cur:
        chunks.append(cur)
    return chunks


def translate(text, target_lang):
    """Translate via deep-translator's Google endpoint (free, no key)."""
    if target_lang == "en":
        return text
    tr = GoogleTranslator(source="en", target=target_lang)
    chunks = chunk_text(text, max_chars=4000)
    out = []
    for c in chunks:
        try:
            out.append(tr.translate(c) or c)
        except Exception as e:
            print(f"    translate error on chunk: {e}", file=sys.stderr)
            out.append(c)  # fall back to source
    return " ".join(out)


async def synthesize(text, voice, out_path):
    """Generate MP3 with edge-tts neural voice."""
    out_path.parent.mkdir(parents=True, exist_ok=True)
    communicate = edge_tts.Communicate(text, voice, rate="-8%", pitch="-2Hz")
    await communicate.save(str(out_path))


async def main():
    only_slug = sys.argv[1] if len(sys.argv) > 1 else None

    posts = extract_posts()
    if only_slug:
        posts = [p for p in posts if p["slug"] == only_slug]
        if not posts:
            print(f"No post matches slug '{only_slug}'", file=sys.stderr)
            sys.exit(1)

    print(f"Generating audio for {len(posts)} post(s) × {len(LANGS)} languages\n")

    for p in posts:
        print(f"▶ {p['slug']}")
        print(f"  ({len(p['text'])} chars)")
        for lang in LANGS:
            out_path = OUT / p["slug"] / f"{lang}.mp3"
            if out_path.exists() and not only_slug:
                print(f"    {lang}: already exists, skipping")
                continue
            try:
                if lang == "en":
                    txt = p["text"]
                else:
                    print(f"    {lang}: translating...", end=" ", flush=True)
                    txt = translate(p["text"], lang)
                    print(f"({len(txt)} chars)")
                print(f"    {lang}: synthesising...", end=" ", flush=True)
                await synthesize(txt, VOICES[lang], out_path)
                size_kb = out_path.stat().st_size / 1024
                print(f"saved {size_kb:.0f} KB")
            except Exception as e:
                print(f"\n    {lang} FAILED: {e}", file=sys.stderr)
        print()

    print(f"✓ Output in {OUT}")


if __name__ == "__main__":
    asyncio.run(main())
