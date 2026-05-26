import { Link, useRoute } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import NotFound from "@/pages/not-found";
import { POSTS_BY_SLUG, type Section, type Post } from "@/content/journal";
import {
  useSeo,
  SITE_ORIGIN,
  faqJsonLd,
  breadcrumbJsonLd,
  articleJsonLd,
} from "@/lib/useSeo";

const PAGE_BG = "#FFFFFF";
const CREAM = "20,19,15";
const ACCENT = "85,85,85";

function renderSection(s: Section, i: number) {
  switch (s.type) {
    case "h2":
      return (
        <h2
          key={i}
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.6vw, 34px)",
            lineHeight: 1.15,
            letterSpacing: "-0.025em",
            color: `rgba(${CREAM},0.95)`,
            marginTop: "48px",
            marginBottom: "16px",
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
            fontSize: "22px",
            letterSpacing: "-0.02em",
            color: `rgba(${CREAM},0.92)`,
            marginTop: "32px",
            marginBottom: "12px",
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
            fontSize: "16px",
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
            fontSize: "clamp(20px, 2.2vw, 26px)",
            lineHeight: 1.35,
            letterSpacing: "-0.015em",
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
              letterSpacing: "0.32em",
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
              fontSize: "clamp(34px, 4.6vw, 60px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
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
              letterSpacing: "-0.012em",
              color: `rgba(${CREAM},0.78)`,
              marginBottom: "48px",
              paddingBottom: "32px",
              borderBottom: `1px solid rgba(${ACCENT},0.18)`,
            }}
          >
            {post.dek}
          </motion.p>

          {/* Body */}
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 0.25 }}
          >
            {post.sections.map(renderSection)}
          </motion.div>

          {/* FAQ — visible + structured */}
          <section style={{ marginTop: "80px" }} aria-labelledby="faq-heading">
            <div style={{
              borderTop: `1px solid rgba(${ACCENT},0.32)`,
              paddingTop: "32px",
              marginBottom: "24px",
            }}>
              <span style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "9px",
                letterSpacing: "0.32em",
                textTransform: "uppercase" as const,
                color: `rgba(${ACCENT},0.78)`,
              }}>
                Frequently asked questions
              </span>
              <h2 id="faq-heading" style={{
                fontFamily: "'DM Serif Display',serif",
                fontWeight: 400,
                fontSize: "clamp(24px, 2.6vw, 36px)",
                letterSpacing: "-0.025em",
                color: `rgba(${CREAM},0.94)`,
                marginTop: "12px",
              }}>
                What you'll likely be asked next.
              </h2>
            </div>
            {post.faqs.map((f, fi) => (
              <details
                key={fi}
                style={{
                  borderBottom: `1px solid rgba(${CREAM},0.08)`,
                  padding: "20px 0",
                }}
              >
                <summary style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "16px",
                  fontWeight: 500,
                  color: `rgba(${CREAM},0.9)`,
                  cursor: "pointer",
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "16px",
                }}>
                  <span>{f.q}</span>
                  <span style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "14px",
                    color: `rgba(${ACCENT},0.85)`,
                  }}>+</span>
                </summary>
                <p style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: `rgba(${CREAM},0.8)`,
                  marginTop: "12px",
                }}>
                  {f.a}
                </p>
              </details>
            ))}
          </section>

          {/* Sign-off */}
          <section style={{ marginTop: "80px", paddingTop: "32px", borderTop: `1px solid rgba(${ACCENT},0.18)` }}>
            <p style={{
              fontFamily: "'DM Mono',monospace",
              fontSize: "9px",
              letterSpacing: "0.32em",
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
              Greenrock Innovations processes waste rock and weathered rock into IS 383:2016 compliant manufactured sand and aggregates from its facility in Gundlupet, Karnataka, under the state's first Waste Rock Royalty Recycle Permit of its kind. Production generates approximately 70–82% less carbon than conventional manufactured sand from primary extraction.
            </p>
            <div className="mt-8 flex items-center gap-6 flex-wrap">
              <Link href="/journal">
                <a style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
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
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "10px",
                  letterSpacing: "0.24em",
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
