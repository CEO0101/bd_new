import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

/* ─── Page palette (matches Technology) ─────────────────────────────── */
const PAGE_BG = "#0B141A";
const CREAM = "237,232,223";
const ACCENT = "143,182,204";

/* ─── Engineered output catalogue ───────────────────────────────────── */
type Output = {
  code: string;
  name: string;
  subtitle: string;
  size: string;
  standard: string;
  key: { label: string; value: string }[];
  apps: string[];
};

const OUTPUTS: Output[] = [
  {
    code: "M-01",
    name: "M-Sand",
    subtitle: "Manufactured Sand · Concrete Grade",
    size: "0.075 – 4.75 mm",
    standard: "IS 383:2016 · Zone II",
    key: [
      { label: "Fineness modulus", value: "2.6 – 2.9" },
      { label: "Silt content", value: "≤ 2.0%" },
      { label: "Bulk density", value: "1,650 – 1,750 kg/m³" },
      { label: "Particle shape", value: "Cubical, low-flake" },
    ],
    apps: ["Ready-mix concrete", "RCC / PCC structural pours", "Pre-cast manufacturing"],
  },
  {
    code: "P-02",
    name: "P-Sand",
    subtitle: "Plastering Sand · Finishing Grade",
    size: "0.075 – 2.36 mm",
    standard: "IS 1542:1992",
    key: [
      { label: "Fineness modulus", value: "1.4 – 2.2" },
      { label: "Silt content", value: "≤ 1.5%" },
      { label: "Moisture (as-dispatched)", value: "≤ 4%" },
      { label: "Shape consistency", value: "Smooth finish" },
    ],
    apps: ["Wall & ceiling plaster", "Masonry mortars", "Tile-bedding mixes"],
  },
  {
    code: "A-03",
    name: "Graded Aggregates",
    subtitle: "Structural · 6 / 10 / 20 mm fractions",
    size: "Single-sized & blended",
    standard: "IS 383:2016 · Coarse Aggregate",
    key: [
      { label: "Crushing value", value: "≤ 25%" },
      { label: "Flakiness index", value: "≤ 25%" },
      { label: "Water absorption", value: "≤ 1.0%" },
      { label: "Specific gravity", value: "2.6 – 2.8" },
    ],
    apps: ["Road bases & sub-bases", "Foundations & RCC pours", "Railway ballast"],
  },
  {
    code: "F-04",
    name: "Granite Fines",
    subtitle: "Filler · Sub-grade Stabiliser",
    size: "< 0.075 mm",
    standard: "IS 73 · IS 2720 compatibility",
    key: [
      { label: "Passing 75µ", value: "≥ 95%" },
      { label: "Plasticity index", value: "Non-plastic" },
      { label: "Reactive silica", value: "Low" },
      { label: "Output form", value: "Dry, dust-controlled" },
    ],
    apps: ["Asphalt mineral filler", "Soil stabilisation", "Industrial block fill"],
  },
];

/* ─── Use-case fit matrix ───────────────────────────────────────────── */
const FIT_MATRIX = [
  { product: "M-Sand",            primary: "Structural concrete",      secondary: "Plaster mortar",        ref: "IS 456 · IS 383" },
  { product: "P-Sand",            primary: "Plaster & finish",          secondary: "Tile-bedding",          ref: "IS 1542" },
  { product: "Graded Aggregates", primary: "Roads & foundations",       secondary: "Railway & heavy civils", ref: "IS 383 · MORTH" },
  { product: "Granite Fines",     primary: "Asphalt filler",            secondary: "Soil stabilisation",     ref: "MORTH 5th rev." },
];

/* ─── Operating signals ─────────────────────────────────────────────── */
const SIGNALS = [
  { k: "Traceability",   v: "Batch-stamped",     d: "Every dispatch carries an intake-to-exit batch record." },
  { k: "Compliance",     v: "BIS · MORTH",        d: "Outputs spec'd to IS 383, IS 1542, IS 2720 — referenced, not assumed." },
  { k: "Water",          v: "Zero discharge",     d: "Process water clarified and recirculated; no slurry pond, no effluent." },
  { k: "Variability",    v: "Engineered, not corrected", d: "Fines ratio and gradation are designed outputs, not back-end fixes." },
];

export default function Products() {
  return (
    <div className="min-h-screen" style={{ background: PAGE_BG, color: `rgb(${CREAM})` }}>
      <Navbar />

      <main style={{ padding: "160px 52px 80px" }}>
        <div className="max-w-7xl mx-auto">

          {/* ── Page kicker ──────────────────────────────────────────── */}
          <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-3" style={{ background: `rgba(${ACCENT},0.5)` }} />
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.32em", textTransform: "uppercase",
                color: `rgba(${ACCENT},0.7)`,
              }}>
                Section 003 / 006 · Engineered outputs · BIS / MORTH referenced
              </span>
            </div>
            <span style={{
              fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
              color: `rgba(${CREAM},0.16)`, letterSpacing: "0.1em"
            }}>003 / 006</span>
          </div>

          {/* ── Headline ─────────────────────────────────────────────── */}
          <div className="mb-20 max-w-4xl">
            {[
              { text: "Engineered outputs.",        delay: 0.08, opacity: 1.0,  italic: false },
              { text: "Spec'd by use-case.",        delay: 0.18, opacity: 0.68, italic: false },
              { text: "not a catalog.",             delay: 0.28, opacity: 0.10, italic: true  },
            ].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div initial={{ y: "106%" }} animate={{ y: "0%" }}
                  transition={{ delay: line.delay, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                  <p style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontStyle: line.italic ? "italic" : "normal",
                    fontWeight: 400,
                    fontSize: "clamp(36px, 5.6vw, 78px)",
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
                marginTop: "28px", maxWidth: "640px",
              }}
            >
              Every fraction is a design output, governed by one closed-loop system. What
              ships is what was specified — by grade, by gradation, by application — with
              an audit trail attached.
            </motion.p>
          </div>

          {/* ── B.01  Output spec sheet ─────────────────────────────── */}
          <section style={{ marginBottom: "120px" }}>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.32em", textTransform: "uppercase",
                color: `rgba(${ACCENT},0.7)`,
              }}>
                B.01 — Output spec sheet
              </span>
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "7px",
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: `rgba(${CREAM},0.32)`,
              }}>
                Four output classes · Single closed loop
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-12">
              {OUTPUTS.map((o, oi) => (
                <motion.article
                  key={o.code}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, delay: (oi % 2) * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    borderTop: `1px solid rgba(${ACCENT},0.25)`,
                    paddingTop: "20px",
                  }}
                >
                  {/* Row 1: code + name + size */}
                  <div className="flex items-baseline justify-between gap-4 mb-3 flex-wrap">
                    <div className="flex items-baseline gap-4">
                      <span style={{
                        fontFamily: "'DM Mono',monospace", fontSize: "10px",
                        letterSpacing: "0.22em", color: `rgba(${ACCENT},0.85)`,
                      }}>
                        {o.code}
                      </span>
                      <h2 style={{
                        fontFamily: "'DM Serif Display',serif", fontWeight: 400,
                        fontSize: "30px", letterSpacing: "-0.024em",
                        color: `rgba(${CREAM},0.95)`, lineHeight: 1.1,
                      }}>
                        {o.name}
                      </h2>
                    </div>
                    <span style={{
                      fontFamily: "'DM Mono',monospace", fontSize: "9px",
                      letterSpacing: "0.22em", textTransform: "uppercase" as const,
                      color: `rgba(${CREAM},0.55)`,
                      borderBottom: `1px solid rgba(${ACCENT},0.3)`,
                      paddingBottom: "2px",
                    }}>
                      {o.size}
                    </span>
                  </div>

                  <p style={{
                    fontFamily: "'DM Mono',monospace", fontSize: "9px",
                    letterSpacing: "0.22em", textTransform: "uppercase" as const,
                    color: `rgba(${ACCENT},0.7)`,
                    marginBottom: "20px",
                  }}>
                    {o.subtitle} · {o.standard}
                  </p>

                  {/* Spec rows */}
                  <dl style={{ marginBottom: "20px" }}>
                    {o.key.map((k, ki) => (
                      <div
                        key={k.label}
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "baseline",
                          padding: "10px 0",
                          borderTop: ki === 0 ? "none" : `1px solid rgba(${CREAM},0.06)`,
                        }}
                      >
                        <dt style={{
                          fontFamily: "'DM Sans',sans-serif", fontSize: "12px",
                          color: `rgba(${CREAM},0.5)`,
                        }}>
                          {k.label}
                        </dt>
                        <dd style={{
                          fontFamily: "'DM Mono',monospace", fontSize: "11.5px",
                          color: `rgba(${CREAM},0.88)`, letterSpacing: "0.02em",
                        }}>
                          {k.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {/* Applications */}
                  <div style={{
                    borderTop: `1px solid rgba(${ACCENT},0.18)`,
                    paddingTop: "14px",
                  }}>
                    <p style={{
                      fontFamily: "'DM Mono',monospace", fontSize: "8px",
                      letterSpacing: "0.32em", textTransform: "uppercase" as const,
                      color: `rgba(${ACCENT},0.6)`,
                      marginBottom: "8px",
                    }}>
                      Applications
                    </p>
                    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {o.apps.map((app) => (
                        <li key={app} style={{
                          fontFamily: "'DM Sans',sans-serif", fontSize: "12.5px",
                          color: `rgba(${CREAM},0.7)`, lineHeight: 1.7,
                        }}>
                          — {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          {/* ── B.02  Use-case fit matrix ───────────────────────────── */}
          <section style={{ marginBottom: "120px" }}>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.32em", textTransform: "uppercase",
                color: `rgba(${ACCENT},0.7)`,
              }}>
                B.02 — Use-case fit
              </span>
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "7px",
                letterSpacing: "0.24em", textTransform: "uppercase",
                color: `rgba(${CREAM},0.32)`,
              }}>
                Primary · Secondary · Reference standard
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px]" style={{ borderCollapse: "collapse" }}>
                <thead>
                  <tr style={{ borderBottom: `1px solid rgba(${ACCENT},0.35)` }}>
                    {["Product", "Primary use", "Secondary use", "Reference"].map((h) => (
                      <th
                        key={h}
                        style={{
                          textAlign: "left",
                          padding: "12px 16px 12px 0",
                          fontFamily: "'DM Mono',monospace",
                          fontSize: "9px",
                          letterSpacing: "0.28em",
                          textTransform: "uppercase",
                          color: `rgba(${ACCENT},0.7)`,
                        }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {FIT_MATRIX.map((row) => (
                    <tr key={row.product} style={{ borderBottom: `1px solid rgba(${CREAM},0.06)` }}>
                      <td style={{
                        padding: "16px 16px 16px 0",
                        fontFamily: "'DM Serif Display',serif",
                        fontSize: "18px",
                        color: `rgba(${CREAM},0.92)`,
                      }}>{row.product}</td>
                      <td style={{
                        padding: "16px 16px 16px 0",
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "13px",
                        color: `rgba(${CREAM},0.72)`,
                      }}>{row.primary}</td>
                      <td style={{
                        padding: "16px 16px 16px 0",
                        fontFamily: "'DM Sans',sans-serif",
                        fontSize: "13px",
                        color: `rgba(${CREAM},0.55)`,
                      }}>{row.secondary}</td>
                      <td style={{
                        padding: "16px 0",
                        fontFamily: "'DM Mono',monospace",
                        fontSize: "11px",
                        letterSpacing: "0.04em",
                        color: `rgba(${ACCENT},0.8)`,
                      }}>{row.ref}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ── B.03  Operating signals ──────────────────────────────── */}
          <section style={{ marginBottom: "120px" }}>
            <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
              <span style={{
                fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.32em", textTransform: "uppercase",
                color: `rgba(${ACCENT},0.7)`,
              }}>
                B.03 — Operating signals
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-10">
              {SIGNALS.map((s) => (
                <div
                  key={s.k}
                  style={{
                    borderTop: `1px solid rgba(${ACCENT},0.25)`,
                    paddingTop: "16px",
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Mono',monospace", fontSize: "8px",
                    letterSpacing: "0.32em", textTransform: "uppercase" as const,
                    color: `rgba(${ACCENT},0.7)`,
                  }}>
                    {s.k}
                  </span>
                  <p style={{
                    fontFamily: "'DM Serif Display',serif", fontSize: "22px",
                    letterSpacing: "-0.02em", color: `rgba(${CREAM},0.92)`,
                    marginTop: "8px", lineHeight: 1.1,
                  }}>
                    {s.v}
                  </p>
                  <p style={{
                    fontFamily: "'DM Sans',sans-serif", fontSize: "12px",
                    color: `rgba(${CREAM},0.5)`, lineHeight: 1.6,
                    marginTop: "8px",
                  }}>
                    {s.d}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* ── Closing ──────────────────────────────────────────────── */}
          <section style={{ marginBottom: "60px", textAlign: "center" }}>
            <span style={{
              fontFamily: "'DM Mono',monospace", fontSize: "7px",
              letterSpacing: "0.36em", textTransform: "uppercase",
              color: `rgba(${ACCENT},0.7)`,
            }}>
              Enquiries
            </span>
            <p style={{
              fontFamily: "'DM Serif Display',serif", fontStyle: "italic",
              fontSize: "clamp(22px, 3vw, 36px)", lineHeight: 1.3,
              color: `rgba(${CREAM},0.82)`,
              marginTop: "16px", maxWidth: "640px",
              marginLeft: "auto", marginRight: "auto",
            }}>
              Project-specific gradation, sampling, and dispatch terms on request.
            </p>
            <a
              href="mailto:hello@greenrockinnovations.earth"
              style={{
                display: "inline-block",
                fontFamily: "'DM Mono',monospace",
                fontSize: "10px",
                letterSpacing: "0.24em",
                textTransform: "uppercase" as const,
                color: `rgba(${CREAM},0.92)`,
                background: `rgba(${ACCENT},0.06)`,
                border: `1px solid rgba(${ACCENT},0.32)`,
                padding: "12px 26px",
                marginTop: "24px",
                textDecoration: "none",
                borderRadius: "2px",
              }}
            >
              hello@greenrockinnovations.earth →
            </a>
          </section>
        </div>
      </main>

      <SiteFooter tone="dark" />
    </div>
  );
}
