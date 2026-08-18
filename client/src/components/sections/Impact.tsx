import { useRef, useEffect, useState } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

/* ── Rolling number counter ─────────────────────────────────────────── */
function RollCounter({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [display, setDisplay] = useState("—");

  useEffect(() => {
    if (!inView) return;
    // For numeric values animate up, for text just reveal
    const num = parseFloat(value);
    if (!isNaN(num)) {
      let start = 0;
      const frames = duration * 60;
      const step = num / frames;
      let frame = 0;
      const suffix = value.replace(/[0-9.]/g, "");
      const tick = () => {
        frame++;
        start = Math.min(start + step, num);
        setDisplay(Math.round(start) + suffix);
        if (frame < frames) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    } else {
      setTimeout(() => setDisplay(value), 200);
    }
  }, [inView, value, duration]);

  return <div ref={ref}>{display}</div>;
}

/* ── Stat item (each gets full screen on desktop) ───────────────────── */
const STATS = [
  {
    value: "100%",
    label: "Material Usage",
    body: "Every tonne of granite waste that enters our facility exits as a certified product. Nothing is landfilled. Nothing is lost.",
    index: "01",
  },
  {
    value: "ZERO",
    label: "External Waste",
    body: "Slurry that once poisoned groundwater is now processed, clarified, and reintegrated into the production cycle.",
    index: "02",
  },
  {
    value: "MAX",
    label: "Recovery Rate",
    body: "Multi-deck screening and high-efficiency washing recover every usable fraction—from coarse aggregates to fine M-sand.",
    index: "03",
  },
  {
    value: "MIN",
    label: "Disruption",
    body: "Enclosed systems, zero liquid discharge, and dust suppression mean the environment outside the gate stays untouched.",
    index: "04",
  },
];

export default function Impact() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section ref={sectionRef} id="impact" className="bg-black text-white overflow-hidden">

      {/* ── Section header ── */}
      <div className="border-b border-white/8 px-6 md:px-14 py-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <div>
          <motion.p
            className="text-[9px] font-mono uppercase tracking-[0.5em] text-white/30 mb-5"
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          >
            Environmental Logic — 04
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display font-black uppercase leading-[0.85] tracking-[-0.03em] text-white"
              style={{ fontSize: "clamp(3.2rem, 9vw, 9.5rem)" }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              Footprint
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              className="font-display font-black uppercase leading-[0.85] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 9.5rem)",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(255,255,255,0.8)",
              }}
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true }}
              transition={{ delay: 0.12, duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              Refined.
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-base md:text-lg text-white/45 font-light leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          India does not need to choose between development and responsibility.
          It needs systems that allow both to exist together—quietly, consistently,
          and at scale.
        </motion.p>
      </div>

      {/* ── 4 stats — full-bleed horizontal rows ── */}
      <div className="divide-y divide-white/8">
        {STATS.map((stat, i) => (
          <StatRow key={stat.index} stat={stat} i={i} />
        ))}
      </div>

      {/* ── Closing manifesto band ── */}
      <motion.div
        className="px-6 md:px-14 py-20 md:py-28 border-t border-white/8 flex flex-col md:flex-row md:items-center justify-between gap-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-2xl">
          <p className="text-2xl md:text-3xl font-light text-white/70 leading-snug italic">
            "Environmental impact is cumulative by nature. What enters shared systems
            continues to move—through air, through land, through water."
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-white/40">
            Slowing the movement. Not abruptly. But decisively.
          </p>
        </div>
        <div className="shrink-0 text-right">
          <p className="text-[9px] font-mono uppercase tracking-widest text-white/25 mb-3">Long Term Value</p>
          <div className="h-[1px] w-32 ml-auto mb-4" style={{ background: "var(--stone)" }} />
          <p className="text-sm font-bold uppercase tracking-widest text-white/60 max-w-xs text-right">
            Infrastructure thinking—<br />applied at the material level.
          </p>
        </div>
      </motion.div>
    </section>
  );
}

function StatRow({ stat, i }: { stat: typeof STATS[0]; i: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });

  return (
    <motion.div
      ref={ref}
      className="group relative px-6 md:px-14 py-14 md:py-20 flex flex-col md:flex-row md:items-center gap-8 md:gap-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 0.6 }}
    >
      {/* hover fill */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--stone-dim)" }}
        initial={{ scaleX: 0, transformOrigin: "left" }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* index */}
      <div className="relative md:w-20 shrink-0">
        <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-white/20">{stat.index}</span>
      </div>

      {/* giant value */}
      <div
        className="relative font-display font-black uppercase leading-none tracking-tighter select-none md:w-72 shrink-0"
        style={{
          fontSize: "clamp(3.2rem, 9vw, 9.5rem)",
          color: i % 2 === 0 ? "white" : "transparent",
          WebkitTextStroke: i % 2 === 0 ? "none" : "1.5px rgba(255,255,255,0.85)",
        }}
      >
        <motion.div
          initial={{ y: "60%", opacity: 0 }}
          animate={inView ? { y: "0%", opacity: 1 } : {}}
          transition={{ delay: 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <RollCounter value={stat.value} duration={1.2 + i * 0.15} />
        </motion.div>
      </div>

      {/* label + body */}
      <div className="relative flex-1 md:pl-16 md:border-l border-white/10">
        <motion.p
          className="text-[9px] font-mono uppercase tracking-[0.45em] text-white/30 mb-3"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.25 }}
        >
          {stat.label}
        </motion.p>
        <motion.p
          className="text-base text-white/55 leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.35, duration: 0.7 }}
        >
          {stat.body}
        </motion.p>
      </div>

      {/* right accent line */}
      <motion.div
        className="relative shrink-0 hidden md:block"
        initial={{ scaleY: 0, transformOrigin: "bottom" }}
        animate={inView ? { scaleY: 1 } : {}}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <div className="w-[1px] h-20" style={{ background: "var(--stone)", opacity: 0.5 }} />
      </motion.div>
    </motion.div>
  );
}
