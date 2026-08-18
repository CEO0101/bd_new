import { useState, useRef, useEffect, useMemo } from "react";

type Lang = { code: "en" | "hi" | "ml"; label: string; native: string; bcp47: string[] };

const LANGS: Lang[] = [
  { code: "en", label: "English",   native: "English",     bcp47: ["en-IN", "en-GB", "en-US", "en-AU"] },
  { code: "hi", label: "Hindi",     native: "हिन्दी",        bcp47: ["hi-IN", "hi"] },
  { code: "ml", label: "Malayalam", native: "മലയാളം",     bcp47: ["ml-IN", "ml"] },
];

const SPEEDS = [0.75, 1, 1.25, 1.5, 1.75, 2];

const PREMIUM = [/neural/i, /premium/i, /enhanced/i, /natural/i];
const WARM = [/samantha/i, /serena/i, /karen/i, /moira/i, /tessa/i, /fiona/i, /lekha/i, /veena/i, /rishi/i];

const CREAM = "20,19,15";
const SAGE = "46,111,87";

type Mode = "static" | "synth" | "unknown";

type Props = {
  text: string;
  /** Slug of the post — used to look for /audio/<slug>/<lang>.mp3 */
  slug?: string;
};

export default function AudioNarration({ text, slug }: Props) {
  const [lang, setLang] = useState<Lang>(LANGS[0]);
  const [speed, setSpeed] = useState(1);
  const [state, setState] = useState<"idle" | "playing" | "paused">("idle");
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState<Mode>("unknown");
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [supported, setSupported] = useState(true);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const utterRef = useRef<SpeechSynthesisUtterance | null>(null);
  const offsetRef = useRef(0);
  const lastPosRef = useRef(0);

  const mp3Url = slug ? `/audio/${slug}/${lang.code}.mp3` : null;

  // Probe whether a pre-generated MP3 exists for this slug+lang
  useEffect(() => {
    let cancelled = false;
    setMode("unknown");
    if (!mp3Url) { setMode("synth"); return; }
    fetch(mp3Url, { method: "HEAD" })
      .then((r) => { if (!cancelled) setMode(r.ok ? "static" : "synth"); })
      .catch(() => { if (!cancelled) setMode("synth"); });
    return () => { cancelled = true; };
  }, [mp3Url]);

  // Load Web Speech voices for fallback mode
  useEffect(() => {
    if (typeof window === "undefined" || !window.speechSynthesis) { setSupported(false); return; }
    const load = () => setVoices(window.speechSynthesis.getVoices());
    load();
    window.speechSynthesis.addEventListener("voiceschanged", load);
    return () => {
      window.speechSynthesis.removeEventListener("voiceschanged", load);
      window.speechSynthesis.cancel();
      if (audioRef.current) { audioRef.current.pause(); audioRef.current.src = ""; }
    };
  }, []);

  const { voice, matched } = useMemo(() => {
    if (!voices.length) return { voice: undefined as SpeechSynthesisVoice | undefined, matched: false };
    for (const code of lang.bcp47) {
      const pool = voices.filter(v => v.lang === code || v.lang.startsWith(code.split("-")[0]));
      if (!pool.length) continue;
      const premium = pool.find(v => PREMIUM.some(re => re.test(v.name)));
      if (premium) return { voice: premium, matched: true };
      const warm = pool.find(v => WARM.some(re => re.test(v.name)));
      if (warm) return { voice: warm, matched: true };
      return { voice: pool[0], matched: true };
    }
    const fb = voices.find(v => v.lang.startsWith("en"));
    return { voice: fb, matched: false };
  }, [voices, lang]);

  // ── Static MP3 controls ──
  function playStatic() {
    if (!audioRef.current) return;
    audioRef.current.playbackRate = speed;
    audioRef.current.play().then(() => setState("playing")).catch(() => setState("idle"));
  }
  function pauseStatic() { audioRef.current?.pause(); setState("paused"); }
  function stopStatic() {
    if (audioRef.current) { audioRef.current.pause(); audioRef.current.currentTime = 0; }
    setState("idle"); setProgress(0);
  }

  // ── Web Speech fallback controls ──
  function synthSpeakFrom(absStart: number) {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const remaining = text.slice(absStart);
    if (!remaining) { setState("idle"); setProgress(0); offsetRef.current = 0; lastPosRef.current = 0; return; }
    offsetRef.current = absStart;
    const u = new SpeechSynthesisUtterance(remaining);
    if (voice) u.voice = voice;
    u.lang = voice?.lang || lang.bcp47[0];
    u.rate = speed * 0.9;
    u.pitch = 0.95;
    u.volume = 1.0;
    u.onstart = () => setState("playing");
    u.onend = () => { setState("idle"); setProgress(0); offsetRef.current = 0; lastPosRef.current = 0; };
    u.onerror = () => setState("idle");
    u.onboundary = (e) => {
      if (e.name === "word") {
        const abs = offsetRef.current + e.charIndex;
        lastPosRef.current = abs;
        setProgress(Math.min(100, (abs / text.length) * 100));
      }
    };
    utterRef.current = u;
    window.speechSynthesis.speak(u);
  }
  function synthPlay() {
    if (state === "paused") { window.speechSynthesis.resume(); setState("playing"); return; }
    lastPosRef.current = 0; offsetRef.current = 0; synthSpeakFrom(0);
  }
  function synthPause() { if (window.speechSynthesis) { window.speechSynthesis.pause(); setState("paused"); } }
  function synthStop() {
    if (window.speechSynthesis) window.speechSynthesis.cancel();
    setState("idle"); setProgress(0); offsetRef.current = 0; lastPosRef.current = 0;
  }

  // ── Unified controls ──
  function play() { return mode === "static" ? playStatic() : synthPlay(); }
  function pause() { return mode === "static" ? pauseStatic() : synthPause(); }
  function stop() { return mode === "static" ? stopStatic() : synthStop(); }
  function changeSpeed(s: number) {
    setSpeed(s);
    if (mode === "static") {
      if (audioRef.current) audioRef.current.playbackRate = s;
    } else if (state === "playing" || state === "paused") {
      synthSpeakFrom(lastPosRef.current);
    }
  }
  function changeLang(next: Lang) { stop(); setLang(next); }

  if (!supported && mode !== "static") return null;
  const active = state === "playing" || state === "paused";

  let status = "";
  if (mode === "static") {
    status = state === "playing"
      ? `Playing in ${lang.label} · ${speed}× · native voice`
      : state === "paused" ? "Paused. Tap play to resume."
      : `Tap play. Narrated in ${lang.native} by a native voice.`;
  } else {
    if (state === "playing") status = `Playing in ${voice?.name || lang.label} · ${speed}×`;
    else if (state === "paused") status = "Paused. Tap play to resume.";
    else if (!matched && lang.code !== "en") status = `No native ${lang.label} voice on this device. Will use the best available.`;
    else status = `Tap play. ${voice?.name ? `Narrated by ${voice.name}.` : ""} Take it on a walk.`;
  }

  return (
    <div style={{
      border: `1px solid rgba(${SAGE},0.16)`,
      background: `linear-gradient(180deg, rgba(${SAGE},0.04) 0%, rgba(${SAGE},0.015) 100%)`,
      padding: "20px 22px",
      borderRadius: "14px",
      marginBottom: "36px",
    }}>
      {mp3Url && (
        <audio
          ref={audioRef}
          src={mode === "static" ? mp3Url : undefined}
          preload="none"
          onPlay={() => setState("playing")}
          onPause={() => { if (audioRef.current && !audioRef.current.ended) setState("paused"); }}
          onEnded={() => { setState("idle"); setProgress(0); }}
          onTimeUpdate={() => {
            const a = audioRef.current;
            if (a && a.duration) setProgress(Math.min(100, (a.currentTime / a.duration) * 100));
          }}
        />
      )}

      <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
        <button
          onClick={state === "playing" ? pause : play}
          aria-label={state === "playing" ? "Pause" : "Play"}
          style={{
            width: "48px", height: "48px", borderRadius: "50%",
            background: `rgba(${SAGE},0.95)`, border: "none", color: "#FFFFFF",
            cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0, boxShadow: `0 4px 14px rgba(${SAGE},0.22)`,
          }}
        >
          {state === "playing" ? (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <rect width="4" height="16" rx="1"/><rect x="10" width="4" height="16" rx="1"/>
            </svg>
          ) : (
            <svg width="14" height="16" viewBox="0 0 14 16" fill="currentColor">
              <path d="M2 1 L2 15 L13 8 Z"/>
            </svg>
          )}
        </button>

        <div style={{ flex: 1, minWidth: "160px" }}>
          <div style={{
            fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.22em",
            textTransform: "uppercase", color: `rgba(${SAGE},0.85)`, marginBottom: "5px",
          }}>
            {state === "playing" ? "Now playing" : state === "paused" ? "Paused" : "Listen to this dispatch"}
            {mode === "static" && " · native"}
          </div>
          <div style={{
            fontFamily: "'DM Serif Display',serif", fontSize: "15px",
            color: `rgba(${CREAM},0.85)`, lineHeight: 1.35,
          }}>
            {lang.native}{lang.code !== "en" ? ` · ${lang.label}` : ""}
          </div>
        </div>

        <select
          value={lang.code}
          onChange={(e) => {
            const next = LANGS.find(l => l.code === e.target.value);
            if (next) changeLang(next);
          }}
          aria-label="Narration language"
          style={{
            fontFamily: "'DM Mono',monospace", fontSize: "10px", letterSpacing: "0.16em",
            textTransform: "uppercase", padding: "9px 14px",
            border: `1px solid rgba(${SAGE},0.25)`, background: "rgba(255,255,255,0.75)",
            color: `rgba(${CREAM},0.78)`, borderRadius: "8px", cursor: "pointer", flexShrink: 0,
          }}
        >
          {LANGS.map((l) => (
            <option key={l.code} value={l.code}>{l.label}</option>
          ))}
        </select>

        {active && (
          <button
            onClick={stop}
            aria-label="Stop"
            style={{
              fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.22em",
              textTransform: "uppercase", padding: "9px 14px",
              border: `1px solid rgba(${CREAM},0.18)`, background: "transparent",
              color: `rgba(${CREAM},0.6)`, borderRadius: "8px", cursor: "pointer",
            }}
          >
            Stop
          </button>
        )}
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "16px", flexWrap: "wrap" }}>
        <span style={{
          fontFamily: "'DM Mono',monospace", fontSize: "9px", letterSpacing: "0.22em",
          textTransform: "uppercase", color: `rgba(${CREAM},0.45)`, marginRight: "4px",
        }}>Speed</span>
        {SPEEDS.map((s) => {
          const isOn = speed === s;
          return (
            <button
              key={s}
              onClick={() => changeSpeed(s)}
              style={{
                fontFamily: "'DM Mono',monospace", fontSize: "10px",
                padding: "5px 10px", borderRadius: "999px", cursor: "pointer",
                border: isOn ? `1px solid rgba(${SAGE},0.6)` : `1px solid rgba(${CREAM},0.12)`,
                background: isOn ? `rgba(${SAGE},0.92)` : "rgba(255,255,255,0.6)",
                color: isOn ? "#FFFFFF" : `rgba(${CREAM},0.6)`,
              }}
              aria-pressed={isOn}
            >
              {s}×
            </button>
          );
        })}
      </div>

      {active && (
        <div style={{
          marginTop: "16px", height: "3px", background: `rgba(${SAGE},0.1)`,
          borderRadius: "2px", overflow: "hidden",
        }}>
          <div style={{
            width: `${progress}%`, height: "100%", background: `rgba(${SAGE},0.85)`,
            transition: "width 0.3s ease", borderRadius: "2px",
          }} />
        </div>
      )}

      <div style={{
        marginTop: "14px", fontFamily: "'DM Sans',sans-serif", fontSize: "13px",
        color: `rgba(${CREAM},0.62)`, lineHeight: 1.5,
      }}>
        {status}
      </div>
    </div>
  );
}
