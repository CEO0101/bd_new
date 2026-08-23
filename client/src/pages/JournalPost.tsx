import { useEffect, useRef, useMemo } from "react";
import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import AudioNarration from "@/components/AudioNarration";
import FaqSection from "@/components/FaqSection";
import NotFound from "@/pages/not-found";
import { POSTS_BY_SLUG, type Section, type Post } from "@/content/journal";
import {
  useSeo,
  SITE_ORIGIN,
  faqJsonLd,
  breadcrumbJsonLd,
  articleJsonLd,
} from "@/lib/useSeo";
import { track } from "@/lib/analytics";

const PAGE_BG = "#FFFFFF";
const CREAM = "20,19,15";
// Brand green, matching Technology/Products/About. This was a neutral gray,
// which made journal posts read as a different site than every other page.
const ACCENT = "46,111,87";

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.4vw, 32px)",
            lineHeight: 1.25,
            letterSpacing: "-0.018em",
            textTransform: "none",
            color: `rgba(${CREAM},0.92)`,
            marginTop: "44px",
            marginBottom: "14px",
          }}
        >
          {s.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          key={i}
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontWeight: 400,
            fontSize: "18px",
            lineHeight: 1.3,
            letterSpacing: "-0.018em",
            textTransform: "none",
            color: `rgba(${CREAM},0.88)`,
            marginTop: "28px",
            marginBottom: "10px",
          }}
        >
          {s.text}
        </h3>
      );
    case "p":
      return (
        <p
          key={i}
          style={{
            fontFamily: "'DM Sans',sans-serif",
            fontSize: "15px",
            fontWeight: 400,
            lineHeight: 1.7,
            color: `rgba(${CREAM},0.85)`,
            marginBottom: "18px",
          }}
        >
          {s.text}
        </p>
      );
    case "blockquote":
      return (
        <blockquote
          key={i}
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontStyle: "italic",
            fontSize: "clamp(22px, 2.4vw, 32px)",
            lineHeight: 1.35,
            letterSpacing: "-0.018em",
            color: `rgba(${CREAM},0.88)`,
            borderLeft: `2px solid rgba(${ACCENT},0.55)`,
            padding: "8px 0 8px 24px",
            margin: "32px 0",
          }}
        >
          {s.text}
        </blockquote>
      );
    case "ul":
      return (
        <ul key={i} style={{ listStyle: "none", padding: 0, margin: "0 0 22px 0" }}>
          {s.items.map((item, ii) => (
            <li
              key={ii}
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "15px",
                lineHeight: 1.7,
                color: `rgba(${CREAM},0.65)`,
                paddingLeft: "20px",
                position: "relative",
                marginBottom: "8px",
              }}
            >
              <span style={{
                position: "absolute", left: 0, top: "11px",
                width: "8px", height: "1px",
                background: `rgba(${ACCENT},0.6)`,
              }} />
              {item}
            </li>
          ))}
        </ul>
      );
    case "hr":
      return (
        <div
          key={i}
          style={{
            height: "1px",
            background: `rgba(${ACCENT},0.18)`,
            margin: "44px 0",
            maxWidth: "120px",
          }}
        />
      );
  }
}

function Article({ post }: { post: Post }) {
  const url = `${SITE_ORIGIN}/journal/${post.slug}`;
  const wordCount = post.sections.reduce((sum, s) => {
    const txt = "text" in s ? s.text : "items" in s ? s.items.join(" ") : "";
    return sum + (txt ? txt.split(/\s+/).length : 0);
  }, 0);

  // Flatten article into a single narrated text body. Headers become
  // pause-and-emphasis points; list items are joined by short pauses.
  const narrationText = useMemo(() => {
    const parts: string[] = [post.title, post.dek];
    for (const s of post.sections) {
      if (s.type === "p" || s.type === "h2" || s.type === "h3" || s.type === "blockquote") parts.push(s.text);
      else if (s.type === "ul") parts.push(s.items.join(". "));
    }
    return parts.filter(Boolean).join(". ");
  }, [post]);

  // Fire a journal_read event once when reader scrolls past 80% of the
  // page. Strong engagement signal — distinguishes skim-and-bounce
  // visitors from real readers.
  const readReported = useRef(false);
  useEffect(() => {
    readReported.current = false;
    const onScroll = () => {
      if (readReported.current) return;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollable <= 0) return;
      const pct = (window.scrollY / scrollable) * 100;
      if (pct >= 80) {
        readReported.current = true;
        track.journalRead(post.slug, 80);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [post.slug]);

  useSeo({
    title: post.title,
    description: post.description,
    canonical: `/journal/${post.slug}`,
    jsonLd: [
      articleJsonLd({
        headline: post.title,
        description: post.description,
        url,
        datePublished: post.datePublished,
        keywords: post.keywords,
        wordCount,
      }),
      faqJsonLd(post.faqs),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/journal" },
        { name: post.title, path: `/journal/${post.slug}` },
      ]),
    ],
  });

  return (
    <div className="min-h-screen" style={{ background: PAGE_BG, color: `rgb(${CREAM})` }}>
      <Navbar />

      <main style={{ padding: "140px 52px 80px" }}>
        <div className="max-w-3xl mx-auto">
          {/* Back link */}
          <div className="mb-12">
            <Link href="/journal">
              <a style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "9px",
                letterSpacing: "0.28em",
                textTransform: "uppercase" as const,
                color: `rgba(${ACCENT},0.85)`,
                textDecoration: "none",
              }}>
                ← Journal
              </a>
            </Link>
          </div>

          {/* Eyebrow + meta */}
          <motion.div
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-4 mb-8 flex-wrap"
          >
            <span style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase" as const,
              color: `rgba(${ACCENT},0.78)`,
            }}>
              {post.eyebrow}
            </span>
            <span style={{ color: `rgba(${ACCENT},0.64)` }}>·</span>
            <span style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: `rgba(${CREAM},0.7)`,
            }}>
              <time dateTime={post.datePublished}>{post.dateDisplay}</time>
            </span>
            <span style={{ color: `rgba(${ACCENT},0.64)` }}>·</span>
            <span style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.22em",
              textTransform: "uppercase" as const,
              color: `rgba(${CREAM},0.64)`,
            }}>
              {post.readTime}
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontWeight: 400,
              fontSize: "clamp(28px, 4vw, 52px)",
              lineHeight: 1.05,
              letterSpacing: "-0.026em",
              color: `rgba(${CREAM},0.96)`,
              marginBottom: "20px",
            }}
          >
            {post.title}
          </motion.h1>

          {/* Dek */}
          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            style={{
              fontFamily: "'DM Serif Display',serif",
              fontStyle: "italic",
              fontSize: "20px",
              lineHeight: 1.5,
              letterSpacing: "-0.018em",
              color: `rgba(${CREAM},0.78)`,
              marginBottom: "48px",
              paddingBottom: "32px",
              borderBottom: `1px solid rgba(${ACCENT},0.18)`,
            }}
          >
            {post.dek}
          </motion.p>

          {/* Audio narration — calm voice, multi-language */}
          <motion.div
            initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            <AudioNarration text={narrationText} slug={post.slug} />
          </motion.div>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {post.sections.map(renderSection)}
          </motion.div>

          {/* FAQ — visible + structured. Was a hand-rolled copy of FaqSection
              that had already drifted (its own borders, its own open-state
              behaviour, a static "+"). Using the shared component means the
              accordion behaves identically here and on About/Products/
              Technology, and only has to be fixed in one place. */}
          <div style={{ marginTop: "80px" }}>
            <FaqSection
              eyebrow="Frequently asked questions"
              title="What you'll likely be asked next."
              faqs={post.faqs}
              tone="light"
              idPrefix="post-faq"
            />
          </div>

          {/* Sign-off */}
          <section style={{ marginTop: "80px", paddingTop: "32px", borderTop: `1px solid rgba(${ACCENT},0.18)` }}>
            <p style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.28em",
              textTransform: "uppercase" as const,
              color: `rgba(${ACCENT},0.85)`,
            }}>
              Greenrock Innovations · Sustainable Construction Intelligence
            </p>
            <p style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "13px",
              fontStyle: "italic",
              color: `rgba(${CREAM},0.7)`,
              lineHeight: 1.65,
              marginTop: "12px",
              maxWidth: "640px",
            }}>
              Greenrock Innovations processes waste rock and weathered rock into IS 383:2016 compliant manufactured sand and aggregates. With an extensive manufacturing footprint across Southern Karnataka, we operate high-capacity processing hubs in Chamarajanagar and Mysuru, anchored by the licensed Begur Sands Pvt. Ltd. facility in Begur (Gundlupete taluk) under the state's first Waste Rock Royalty Recycle Permit of its kind. Production generates approximately 70 to 82 percent less carbon than conventional manufactured sand from primary extraction.
            </p>
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <Link href="/journal">
                <a style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${CREAM},0.92)`,
                  background: `rgba(${ACCENT},0.06)`,
                  border: `1px solid rgba(${ACCENT},0.32)`,
                  padding: "10px 22px",
                  textDecoration: "none",
                }}>
                  ← All dispatches
                </a>
              </Link>
              <a
                href="mailto:hello@greenrockinnovations.earth"
                onClick={() => track.emailClick("journal_post")}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.22em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${CREAM},0.7)`,
                  textDecoration: "none",
                }}
              >
                hello@greenrockinnovations.earth →
              </a>
            </div>
          </section>
        </div>
      </main>

      <SiteFooter tone="light" />
    </div>
  );
}

export default function JournalPost() {
  const [, params] = useRoute("/journal/:slug");
  const slug = params?.slug;
  const post = slug ? POSTS_BY_SLUG[slug] : undefined;
  if (!post) return <NotFound />;
  return <Article post={post} />;
}
