import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

/* ── Animated counter ───────────────────────────────────────────────── */
function Counter({ to, suffix = "", duration = 1.8 }: { to: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-20% 0px" });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        onUpdate={() => {}}
      >
        {inView ? (
          <CountUp to={to} suffix={suffix} duration={duration} />
        ) : "0"}
      </motion.span>
    </motion.span>
  );
}

function CountUp({ to, suffix, duration }: { to: number; suffix: string; duration: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onAnimationComplete={() => {
        if (ref.current) {
          let start = 0;
          const step = to / (duration * 60);
          const tick = () => {
            start = Math.min(start + step, to);
            if (ref.current) ref.current.textContent = Math.round(start) + suffix;
            if (start < to) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      }}
    >
      0{suffix}
    </motion.span>
  );
}

/* ── Reveal line ────────────────────────────────────────────────────── */
function RevealLine({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10% 0px" });
  return (
    <div ref={ref} className={"overflow-hidden " + className}>
      <motion.div
        initial={{ y: "105%" }}
        animate={inView ? { y: "0%" } : {}}
        transition={{ delay, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default function Philosophy() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const numScale = useTransform(scrollYProgress, [0, 1], [0.85, 1.1]);

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden" style={{ background: "#F2EDE4" }}>

      {/* ── Giant background numeral ── */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        style={{ scale: numScale }}
      >
        <span
          className="font-display font-black"
          style={{
            fontSize: "clamp(20rem, 55vw, 70rem)",
            lineHeight: 1,
            color: "transparent",
            WebkitTextStroke: "1px rgba(0,0,0,0.06)",
          }}
        >
          02
        </span>
      </motion.div>

      {/* ── Content grid ── */}
      <div className="relative z-10 grid md:grid-cols-12 min-h-screen">

        {/* LEFT — sticky label column */}
        <div className="md:col-span-1 flex items-start justify-center pt-16 md:pt-24">
          <motion.div
            className="flex flex-col items-center gap-2"
            style={{ y: bgY }}
          >
            <div className="w-[1px] h-16 bg-black/20" />
            <span
              className="text-[8px] font-mono uppercase tracking-[0.5em] text-black/30"
              style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
            >
              Industrial Context
            </span>
          </motion.div>
        </div>

        {/* CENTER — main text */}
        <div className="md:col-span-7 px-6 md:px-0 py-24 md:py-36 flex flex-col justify-center">
          <RevealLine delay={0.05}>
            <h2
              className="font-display font-black uppercase leading-[0.87] tracking-[-0.03em] text-black"
              style={{ fontSize: "clamp(3.2rem, 9vw, 9.5rem)" }}
            >
              India is
            </h2>
          </RevealLine>
          <RevealLine delay={0.15}>
            <h2
              className="font-display font-black uppercase leading-[0.87] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 9.5rem)",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(0,0,0,0.8)",
              }}
            >
              building
            </h2>
          </RevealLine>
          <RevealLine delay={0.25}>
            <h2
              className="font-display font-black uppercase leading-[0.87] tracking-[-0.03em] text-black"
              style={{ fontSize: "clamp(3.2rem, 9vw, 9.5rem)" }}
            >
              faster than
            </h2>
          </RevealLine>
          <RevealLine delay={0.35}>
            <h2
              className="font-display font-black uppercase leading-[0.87] tracking-[-0.03em]"
              style={{
                fontSize: "clamp(3.2rem, 9vw, 9.5rem)",
                color: "transparent",
                WebkitTextStroke: "1.5px rgba(0,0,0,0.8)",
              }}
            >
              ever.
            </h2>
          </RevealLine>

          {/* divider */}
          <motion.div
            className="my-10 h-[1px] bg-black/20"
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          />

          <motion.p
            className="text-lg md:text-xl text-black/60 font-light leading-relaxed max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.55, duration: 0.8 }}
          >
            As India expands, its cities rise higher and its infrastructure stretches wider.
            Homes, hospitals, institutions, and industries are being built at an unprecedented
            pace—reshaping landscapes faster than they can recover.
          </motion.p>

          <motion.div
            className="mt-10 flex gap-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-black/35 mb-2">History</p>
              <p className="text-sm text-black/50 leading-relaxed max-w-xs">
                The consequences weren't immediate. They accumulated quietly—spreading far beyond their origin.
              </p>
            </div>
            <div>
              <p className="text-[9px] font-mono uppercase tracking-widest text-black/35 mb-2">Transition</p>
              <p className="text-sm text-black/50 leading-relaxed max-w-xs">
                Development was never the problem. The absence of alternatives was.
              </p>
            </div>
          </motion.div>
        </div>

        {/* RIGHT — shock stats */}
        <div className="md:col-span-4 border-l border-black/10 flex flex-col justify-center px-8 md:px-12 py-24 gap-14">
          {[
            { num: 400, suffix: "+", unit: "Million Tonnes", label: "granite waste generated in India annually" },
            { num: 60, suffix: "%", unit: "of River Sand", label: "demand can be replaced by manufactured alternatives" },
            { num: 0, suffix: "", unit: "Liquid Discharge", label: "in our closed-loop water recovery system" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="group"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className="text-[5.5rem] font-display font-black leading-none tracking-tighter mb-1"
                style={{ color: "var(--stone)" }}
              >
                <CountUp to={stat.num} suffix={stat.suffix} duration={1.6 + i * 0.2} />
              </div>
              <p className="text-xs font-mono uppercase tracking-widest text-black/40 mb-1">{stat.unit}</p>
              <p className="text-sm text-black/50 leading-relaxed">{stat.label}</p>
              <div className="mt-4 h-[1px] bg-black/10 w-0 group-hover:w-full transition-all duration-700" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
