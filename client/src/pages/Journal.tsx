import { Link } from "wouter";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { POSTS } from "@/content/journal";
import { useSeo, SITE_ORIGIN, breadcrumbJsonLd } from "@/lib/useSeo";

const PAGE_BG = "#0B141A";
const CREAM = "237,232,223";
const ACCENT = "143,182,204";

export default function Journal() {
  useSeo({
    title: "Journal — Sustainable Construction Intelligence",
    description:
      "Long-form intelligence on manufactured sand, embodied carbon, river-sand depletion, and Western Ghats biodiversity — published by Greenrock Innovations.",
    canonical: "/journal",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Greenrock Innovations Journal",
        description: "Sustainable Construction Intelligence — long-form analysis from Greenrock Innovations.",
        url: `${SITE_ORIGIN}/journal`,
        publisher: { "@type": "Organization", name: "Greenrock Innovations", url: SITE_ORIGIN },
        blogPost: POSTS.map((p) => ({
          "@type": "BlogPosting",
          headline: p.title,
          datePublished: p.datePublished,
          url: `${SITE_ORIGIN}/journal/${p.slug}`,
          description: p.description,
          keywords: p.keywords.join(", "),
          author: { "@type": "Organization", name: "Greenrock Innovations" },
        })),
      },
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Journal", path: "/journal" },
      ]),
    ],
  });

  return (
    <div className="min-h-screen" style={{ background: PAGE_BG, color: `rgb(${CREAM})` }}>
      <Navbar />

      <main style={{ padding: "160px 52px 80px" }}>
        <div className="max-w-6xl mx-auto">
          {/* Kicker */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-3" style={{ background: `rgba(${ACCENT},0.5)` }} />
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.32em", textTransform: "uppercase",
                color: `rgba(${ACCENT},0.7)`,
              }}>
                Journal · Sustainable Construction Intelligence · Greenrock
              </span>
            </div>
            <span style={{
              fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
              color: `rgba(${CREAM},0.16)`, letterSpacing: "0.1em"
            }}>
              {POSTS.length.toString().padStart(2, "0")} dispatches
            </span>
          </div>

          {/* Headline */}
          <div className="mb-20 max-w-4xl">
            {[
              { text: "Sustainable construction",  delay: 0.08, opacity: 1.0,  italic: false },
              { text: "intelligence.",             delay: 0.18, opacity: 0.68, italic: false },
              { text: "field notes from the ground.", delay: 0.28, opacity: 0.10, italic: true },
            ].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div initial={{ y: "106%" }} animate={{ y: "0%" }}
                  transition={{ delay: line.delay, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                  <p style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontStyle: line.italic ? "italic" : "normal",
                    fontWeight: 400,
                    fontSize: "clamp(34px, 5.2vw, 72px)",
                    lineHeight: 0.95,
                    letterSpacing: "-0.035em",
                    color: `rgba(${CREAM},${line.opacity})`,
                  }}>
                    {line.text}
                  </p>
                </motion.div>
              </div>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.9 }}
              style={{
                fontFamily: "'DM Sans',sans-serif", fontSize: "15px",
                color: `rgba(${CREAM},0.55)`, lineHeight: 1.6,
                marginTop: "28px", maxWidth: "620px",
              }}>
              Long-form analysis on the questions the construction industry has not yet learned to ask out loud — material provenance, hidden carbon, riverine collapse, the slow tightening of regulation around extraction.
            </motion.p>
          </div>

          {/* Post list */}
          <div className="space-y-0">
            {POSTS.map((p, i) => (
              <motion.article
                key={p.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  borderTop: `1px solid rgba(${ACCENT},0.18)`,
                  padding: "32px 0",
                }}
              >
                <Link href={`/journal/${p.slug}`}>
                  <a className="block group" style={{ textDecoration: "none", cursor: "pointer" }}>
                    <div className="grid md:grid-cols-[160px_1fr_auto] gap-8 items-baseline">
                      {/* Date */}
                      <div>
                        <p style={{
                          fontFamily: "'DM Mono',monospace", fontSize: "10px",
                          letterSpacing: "0.22em", textTransform: "uppercase" as const,
                          color: `rgba(${ACCENT},0.78)`,
                        }}>
                          <time dateTime={p.datePublished}>{p.dateDisplay}</time>
                        </p>
                        <p style={{
                          fontFamily: "'DM Mono',monospace", fontSize: "8px",
                          letterSpacing: "0.28em", textTransform: "uppercase" as const,
                          color: `rgba(${CREAM},0.32)`,
                          marginTop: "8px",
                        }}>
                          {p.readTime}
                        </p>
                      </div>

                      {/* Title + dek */}
                      <div>
                        <p style={{
                          fontFamily: "'DM Mono',monospace", fontSize: "9px",
                          letterSpacing: "0.28em", textTransform: "uppercase" as const,
                          color: `rgba(${ACCENT},0.6)`,
                          marginBottom: "10px",
                        }}>
                          {p.eyebrow}
                        </p>
                        <h2 style={{
                          fontFamily: "'DM Serif Display',serif", fontWeight: 400,
                          fontSize: "clamp(22px, 2.4vw, 32px)",
                          lineHeight: 1.12,
                          letterSpacing: "-0.025em",
                          color: `rgba(${CREAM},0.94)`,
                          transition: "color 0.2s",
                        }}>
                          {p.title}
                        </h2>
                        <p style={{
                          fontFamily: "'DM Sans',sans-serif", fontSize: "14px",
                          color: `rgba(${CREAM},0.55)`, lineHeight: 1.6,
                          marginTop: "10px",
                          maxWidth: "640px",
                        }}>
                          {p.dek}
                        </p>
                      </div>

                      {/* Arrow */}
                      <div className="hidden md:block">
                        <span style={{
                          fontFamily: "'DM Mono',monospace", fontSize: "11px",
                          color: `rgba(${ACCENT},0.7)`,
                          letterSpacing: "0.1em",
                        }}>
                          Read →
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </motion.article>
            ))}
            <div style={{ borderTop: `1px solid rgba(${ACCENT},0.18)` }} />
          </div>
        </div>
      </main>

      <SiteFooter tone="dark" />
    </div>
  );
}
