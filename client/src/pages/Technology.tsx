import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Process from "@/components/sections/Process";
import FaqSection from "@/components/FaqSection";
import { useSeo, faqJsonLd, breadcrumbJsonLd } from "@/lib/useSeo";
import miningVideo from "@/assets/videos/mining-extraction.mp4";
import processVideo from "@/assets/videos/process-equipment.mp4";

const TECH_FAQS = [
  {
    q: "How does Greenrock's closed-loop process work?",
    a: "Six engineered systems running in a single closed loop: super-primary jaw crushing (intake), multi-deck vibrating screen segregation, vertical shaft impactor (VSI) shaping, closed-loop hydrocyclone classification with water reuse, PLC-governed auto-feeders for traceability, and a high-frequency dewatering screen for spec-moisture output. Every stage is governed by SOPs and PLC supervision, making the line audit-ready by design.",
  },
  {
    q: "What is a Vertical Shaft Impactor (VSI) and why does it matter?",
    a: "A VSI is a rock-on-rock crushing chamber that engineers cubical, low-flake particle shape — critical for M-Sand performance in structural concrete and for graded aggregate meeting IS 383:2016 flakiness and elongation limits. Aggregate from VSI circuits consistently shows lower flakiness than aggregate from jaw-crusher-only circuits because impact (rather than compression) produces a more cubical particle.",
  },
  {
    q: "Is the production line zero liquid discharge (ZLD)?",
    a: "Yes. Process water is clarified and recirculated through a closed-loop hydrocyclone array with thickener feedback. No slurry pond, no discharge to ground or surface water. The fines recovered from the water stream become a saleable output (granite fines), not a disposal liability.",
  },
  {
    q: "What is a Waste Rock Royalty Recycle Permit?",
    a: "A Karnataka government authorisation that allows an operator to process waste rock and weathered rock from existing quarrying operations into commercial construction materials. Greenrock Innovations operates under the first such permit issued in the state. It legally distinguishes the material as a resource to be processed rather than a disposal liability — and removes the need for any new mining permit.",
  },
  {
    q: "Why use weathered rock instead of fresh quarried stone?",
    a: "Weathered rock is granite that has already been broken down by time and partially extracted by existing quarrying operations. Processing it requires no new drilling, no blasting, no new land disturbance, and no permit for fresh extraction. Calibrated correctly, the output meets the same IS 383:2016 specifications as primary-extraction manufactured sand — at roughly 70% lower carbon per tonne.",
  },
  {
    q: "How is each batch traced?",
    a: "Every load is stamped at intake through the PLC/SCADA-supervised feeder system, with VFD-controlled apron and pan feeders metering throughput. The batch ID flows through processing, classification, dewatering, and dispatch — so any tonne delivered to site can be traced back to its intake record and the laboratory tests that accompanied it.",
  },
];

/* ─── Page palette ────────────────────────────────────────────────────
   Distinct from the homepage's pure black. Deep slate-blue base
   with a muted sky-blue accent. Cream typography is preserved.
─────────────────────────────────────────────────────────────────────── */
const PAGE_BG = "#0B141A";
const PAGE_BG_RGB = "11,20,26";
const ACCENT = "143,182,204"; // sky-blue, used as rgba()
const CREAM = "237,232,223";

/* ─── Equipment & control spec ───────────────────────────────────────── */
const EQUIPMENT = [
  {
    n: "01",
    stage: "Primary · Intake",
    name: "Super-primary Jaw Crusher",
    desc: "Hydraulic-toggle jaw with reinforced manganese liners. First-stage compression of weathered rock and quarry-waste boulders — break behaviour is stabilised at intake, before screening sees it.",
  },
  {
    n: "02",
    stage: "Segregation",
    name: "Multi-deck Vibrating Screen",
    desc: "Triple-deck elliptical-motion screen. Three size fractions are resolved in parallel — throughput and sizing accuracy are held simultaneously, never traded for each other.",
  },
  {
    n: "03",
    stage: "Shaping",
    name: "Vertical Shaft Impactor",
    desc: "Rock-on-rock crushing chamber. Engineers cubical, low-flake particle form for M-sand and aggregate. Fines ratio is a designed output, not a back-end correction.",
  },
  {
    n: "04",
    stage: "Classification · Water",
    name: "Closed-loop Hydrocyclone Array",
    desc: "Density-driven cyclones with thickener feedback. Fines recovered, silt rejected, process water clarified and reused. Zero liquid discharge to ground or surface.",
  },
  {
    n: "05",
    stage: "Control",
    name: "Auto-feeder & PLC Governance",
    desc: "VFD apron and pan feeders under PLC/SCADA supervision. Throughput is metered, batches are stamped, every load is traceable from intake to dispatch.",
  },
  {
    n: "06",
    stage: "Output",
    name: "High-frequency Dewatering Screen",
    desc: "Final dewatering to spec moisture. Sand exits stockpile-ready — no slurry pond, no thermal dryer, no concession on grade.",
  },
];

export default function Technology() {
  useSeo({
    title: "Technology — Closed-Loop Process & Equipment",
    description:
      "Six engineered systems in one closed loop: super-primary jaw, multi-deck screen, VSI shaping, hydrocyclone classification, PLC governance, dewatering. Zero liquid discharge. Batch-stamped, audit-ready.",
    canonical: "/technology",
    jsonLd: [
      faqJsonLd(TECH_FAQS),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Technology", path: "/technology" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "HowTo",
        name: "Greenrock Innovations closed-loop processing architecture",
        description:
          "Six-stage process converting waste rock and weathered rock into IS 383:2016 compliant manufactured sand and aggregates with closed-loop water reuse.",
        step: EQUIPMENT.map((e, i) => ({
          "@type": "HowToStep",
          position: i + 1,
          name: e.name,
          text: e.desc,
        })),
      },
    ],
  });

  return (
    <div
      className="min-h-screen"
      style={{ background: PAGE_BG, color: `rgb(${CREAM})` }}
    >
      <Navbar />

      {/* ── Hero ───────────────────────────────────────────────────────── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ height: "calc(100dvh - 56px)", marginTop: "56px" }}
      >
        {/* Video */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.34, mixBlendMode: "luminosity" }}
          >
            <source src={miningVideo} type="video/mp4" />
          </video>
          <div
            className="absolute inset-0"
            style={{
              background: `linear-gradient(130deg, rgba(${PAGE_BG_RGB},0.94) 0%, rgba(${PAGE_BG_RGB},0.62) 48%, rgba(${PAGE_BG_RGB},0.2) 100%)`,
            }}
          />
          {/* Bottom fade into the page bg so the next section blends seamlessly */}
          <div
            className="absolute inset-x-0 bottom-0 h-44"
            style={{
              background: `linear-gradient(to top, ${PAGE_BG}, transparent)`,
            }}
          />
        </div>

        {/* Sky-blue ambient glow — quiet differentiator from the homepage */}
        <div
          aria-hidden
          className="absolute z-[1] pointer-events-none"
          style={{
            top: "30%",
            right: "-10%",
            width: "55%",
            height: "70%",
            background: `radial-gradient(ellipse at center, rgba(${ACCENT},0.10), transparent 65%)`,
            filter: "blur(40px)",
          }}
        />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 z-[1] pointer-events-none"
          style={{
            background:
              `repeating-linear-gradient(90deg,rgba(${CREAM},0.012) 0,rgba(${CREAM},0.012) 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,rgba(${CREAM},0.012) 0,rgba(${CREAM},0.012) 1px,transparent 1px,transparent 80px)`,
          }}
        />

        {/* Side label */}
        <div
          className="absolute left-3 top-1/2 z-20 pointer-events-none hidden lg:block"
          style={{
            transform: "translateY(-50%) rotate(180deg)",
            fontFamily: "'DM Mono',monospace",
            fontSize: "6px",
            color: `rgba(${CREAM},0.08)`,
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            writingMode: "vertical-rl",
          }}
        >
          Engineered Recovery · Karnataka · India
        </div>

        {/* 3-zone layout — same rhythm as Hero */}
        <div
          className="absolute inset-0 z-20 flex flex-col"
          style={{ padding: "22px 52px 24px" }}
        >
          {/* Kicker */}
          <motion.div
            className="flex items-center justify-between"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <div className="flex items-center gap-3">
              <div
                className="h-[1px] w-3"
                style={{ background: `rgba(${ACCENT},0.4)` }}
              />
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "6.5px",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${CREAM},0.18)`,
                }}
              >
                Six Systems
                <span style={{ color: `rgba(${ACCENT},0.45)`, margin: "0 7px" }}>·</span>
                Closed Loop
                <span style={{ color: `rgba(${ACCENT},0.45)`, margin: "0 7px" }}>·</span>
                PLC-Governed
              </span>
            </div>
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "6.5px",
                color: `rgba(${CREAM},0.1)`,
                letterSpacing: "0.1em",
              }}
            >
              002 / 006
            </span>
          </motion.div>

          {/* Headline + body */}
          <div className="flex-1 flex flex-col justify-center">
            {[
              { text: "Engineered hardware.",  delay: 0.25, opacity: 1.0,  italic: false },
              { text: "Designed control.",     delay: 0.39, opacity: 0.68, italic: false },
              { text: "no extraction.",        delay: 0.52, opacity: 0.10, italic: true  },
            ].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div
                  initial={{ y: "106%" }}
                  animate={{ y: "0%" }}
                  transition={{ delay: line.delay, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontStyle: line.italic ? "italic" : "normal",
                      fontWeight: 400,
                      fontSize: "clamp(32px, 5.2vw, 74px)",
                      lineHeight: 0.93,
                      letterSpacing: "-0.035em",
                      color: `rgba(${CREAM},${line.opacity})`,
                    }}
                  >
                    {line.text}
                  </p>
                </motion.div>
              </div>
            ))}

            <motion.div
              style={{ marginTop: "22px", maxWidth: "520px" }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.9 }}
            >
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "13px",
                  fontWeight: 400,
                  color: `rgba(${CREAM},0.55)`,
                  lineHeight: 1.62,
                  letterSpacing: "0.005em",
                }}
              >
                Six purpose-built systems running in a single closed loop — super-primary crushing,
                multi-deck segregation, VSI shaping, hydrocyclone classification, PLC-governed feeders.
              </p>
              <p
                style={{
                  fontFamily: "'DM Sans',sans-serif",
                  fontSize: "11.5px",
                  fontWeight: 300,
                  color: `rgba(${CREAM},0.32)`,
                  lineHeight: 1.65,
                  marginTop: "6px",
                }}
              >
                Input: weathered rock, legacy quarry waste.
                <br />
                Output: BIS-graded M-sand, P-sand, aggregates.
              </p>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 flex-wrap"
              style={{ marginTop: "24px" }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92, duration: 0.8 }}
            >
              <motion.button
                onClick={() =>
                  document
                    .getElementById("equipment")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "8px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: PAGE_BG,
                  background: `rgba(${CREAM},0.88)`,
                  border: `1px solid rgba(${CREAM},0.15)`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "12px 26px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  boxShadow:
                    "0 2px 16px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
                whileHover={{ background: `rgba(${CREAM},1)`, scale: 1.02 }}
                transition={{ duration: 0.15 }}
              >
                See the equipment
              </motion.button>

              <motion.button
                onClick={() =>
                  document
                    .getElementById("process")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "8px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${ACCENT},0.85)`,
                  background: `rgba(${ACCENT},0.05)`,
                  border: `1px solid rgba(${ACCENT},0.18)`,
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "11px 24px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                whileHover={{
                  color: `rgba(${ACCENT},1)`,
                  borderColor: `rgba(${ACCENT},0.35)`,
                }}
                transition={{ duration: 0.2 }}
              >
                Process flow →
              </motion.button>
            </motion.div>
          </div>

          {/* Scroll cue */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.9 }}
            className="flex items-center justify-between"
          >
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "6.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase" as const,
                color: `rgba(${CREAM},0.22)`,
              }}
            >
              Scroll · Hardware · Process · In-operation
            </span>
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "10px",
                color: `rgba(${ACCENT},0.45)`,
              }}
            >
              ↓
            </motion.span>
          </motion.div>
        </div>
      </section>

      {/* ── B.01  Equipment & Control Architecture ─────────────────────── */}
      <section
        id="equipment"
        style={{ padding: "140px 52px 100px", position: "relative" }}
      >
        {/* Quiet sky-blue ambient at the seam */}
        <div
          aria-hidden
          className="pointer-events-none"
          style={{
            position: "absolute",
            top: 0,
            left: "20%",
            width: "60%",
            height: "320px",
            background: `radial-gradient(ellipse at center, rgba(${ACCENT},0.06), transparent 70%)`,
          }}
        />

        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "6.5px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${ACCENT},0.62)`,
                }}
              >
                B.01 — Equipment & control architecture
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontWeight: 400,
                  fontSize: "clamp(28px, 4vw, 52px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: `rgba(${CREAM},0.95)`,
                  marginTop: "12px",
                  maxWidth: "680px",
                }}
              >
                Six systems.{" "}
                <span style={{ color: `rgba(${CREAM},0.34)`, fontStyle: "italic" }}>
                  One closed loop.
                </span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "13px",
                color: `rgba(${CREAM},0.45)`,
                lineHeight: 1.62,
                maxWidth: "340px",
              }}
            >
              Spec'd for stability, traceability, and zero-discharge operation. Each unit performs one job
              without compromising another — that is the architecture.
            </p>
          </div>

          {/* Equipment grid — 3 × 2 */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {EQUIPMENT.map((eq, ei) => (
              <motion.article
                key={eq.n}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{
                  duration: 0.7,
                  delay: (ei % 3) * 0.06,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ borderColor: `rgba(${ACCENT},0.32)` }}
                style={{
                  border: `1px solid rgba(${ACCENT},0.10)`,
                  background: `rgba(${ACCENT},0.025)`,
                  padding: "30px 28px 32px",
                  position: "relative",
                  transition: "border-color 0.25s ease",
                }}
              >
                <div className="flex items-start justify-between mb-7">
                  <span
                    style={{
                      fontFamily: "'DM Mono',monospace",
                      fontSize: "7px",
                      letterSpacing: "0.3em",
                      textTransform: "uppercase" as const,
                      color: `rgba(${ACCENT},0.78)`,
                      paddingTop: "6px",
                    }}
                  >
                    {eq.stage}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Serif Display',serif",
                      fontSize: "32px",
                      color: `rgba(${ACCENT},0.18)`,
                      letterSpacing: "-0.02em",
                      lineHeight: 1,
                    }}
                  >
                    {eq.n}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontWeight: 400,
                    fontSize: "22px",
                    lineHeight: 1.18,
                    letterSpacing: "-0.022em",
                    color: `rgba(${CREAM},0.94)`,
                    marginBottom: "14px",
                  }}
                >
                  {eq.name}
                </h3>

                <div
                  style={{
                    height: "1px",
                    width: "32px",
                    background: `rgba(${ACCENT},0.4)`,
                    marginBottom: "16px",
                  }}
                />

                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12.5px",
                    color: `rgba(${CREAM},0.55)`,
                    lineHeight: 1.65,
                    fontWeight: 400,
                  }}
                >
                  {eq.desc}
                </p>
              </motion.article>
            ))}
          </div>

          {/* Footnote */}
          <div className="mt-12 flex items-center gap-3">
            <div
              style={{
                width: "20px",
                height: "1px",
                background: `rgba(${ACCENT},0.4)`,
              }}
            />
            <p
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "8.5px",
                letterSpacing: "0.28em",
                textTransform: "uppercase" as const,
                color: `rgba(${CREAM},0.4)`,
              }}
            >
              Every stage governed by SOP · Every batch stamped · Audit-ready by design
            </p>
          </div>
        </div>
      </section>

      {/* ── B.02  Process — horizontal scroll ──────────────────────────── */}
      <div id="process">
        <Process />
      </div>

      {/* ── B.03  In operation — video showcase ────────────────────────── */}
      <section style={{ padding: "120px 52px 140px", position: "relative" }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
            <div>
              <span
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "6.5px",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase" as const,
                  color: `rgba(${ACCENT},0.62)`,
                }}
              >
                B.03 — In operation
              </span>
              <h2
                style={{
                  fontFamily: "'DM Serif Display',serif",
                  fontWeight: 400,
                  fontSize: "clamp(26px, 3.6vw, 46px)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.03em",
                  color: `rgba(${CREAM},0.94)`,
                  marginTop: "12px",
                  maxWidth: "640px",
                }}
              >
                The line, running.{" "}
                <span style={{ color: `rgba(${CREAM},0.32)`, fontStyle: "italic" }}>
                  Unstaged.
                </span>
              </h2>
            </div>
            <p
              style={{
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "13px",
                color: `rgba(${CREAM},0.45)`,
                lineHeight: 1.62,
                maxWidth: "320px",
              }}
            >
              Filmed on the Gundlupet line — equipment-driven footage, no re-cuts. What you see is the
              system doing its job.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            style={{
              position: "relative",
              border: `1px solid rgba(${ACCENT},0.14)`,
              background: `rgba(${ACCENT},0.025)`,
              padding: "12px",
            }}
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              className="w-full h-auto block"
              style={{ display: "block" }}
            >
              <source src={processVideo} type="video/mp4" />
            </video>
          </motion.div>

          {/* Caption row */}
          <div className="mt-8 grid md:grid-cols-3 gap-8">
            {[
              {
                k: "Throughput",
                v: "Continuous",
                d: "Closed-loop, uninterrupted by manual handling.",
              },
              {
                k: "Water",
                v: "Recirculated",
                d: "Hydrocyclones return process water to the line — no slurry pond.",
              },
              {
                k: "Output",
                v: "BIS-graded",
                d: "Sand and aggregate exit stockpile-ready, batch-stamped.",
              },
            ].map((c) => (
              <div
                key={c.k}
                style={{
                  borderTop: `1px solid rgba(${ACCENT},0.18)`,
                  paddingTop: "16px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'DM Mono',monospace",
                    fontSize: "7px",
                    letterSpacing: "0.32em",
                    textTransform: "uppercase" as const,
                    color: `rgba(${ACCENT},0.7)`,
                  }}
                >
                  {c.k}
                </span>
                <p
                  style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontSize: "22px",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: `rgba(${CREAM},0.92)`,
                    marginTop: "8px",
                  }}
                >
                  {c.v}
                </p>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "12px",
                    color: `rgba(${CREAM},0.5)`,
                    lineHeight: 1.6,
                    marginTop: "8px",
                  }}
                >
                  {c.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── B.04  FAQ ──────────────────────────────────────────────── */}
      <section style={{ padding: "0 52px 140px" }}>
        <div className="max-w-3xl mx-auto">
          <FaqSection
            tone="dark-slate"
            eyebrow="B.04 — Frequently asked"
            title="Process, equipment, governance."
            faqs={TECH_FAQS}
          />
        </div>
      </section>
    </div>
  );
}
