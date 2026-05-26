import { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import CustomerLogos from "@/components/CustomerLogos";

/* ─── Custom cursor ─────────────────────────────────────────────────── */
export function CustomCursor() {
  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const sx = useSpring(x, { stiffness: 120, damping: 20 });
  const sy = useSpring(y, { stiffness: 120, damping: 20 });
  useEffect(() => {
    const m = (e: MouseEvent) => { x.set(e.clientX); y.set(e.clientY); };
    window.addEventListener("mousemove", m);
    return () => window.removeEventListener("mousemove", m);
  }, [x, y]);
  return (
    <>
      <motion.div className="fixed z-[9999] pointer-events-none top-0 left-0"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%", mixBlendMode: "difference" }}>
        <div className="w-6 h-6 rounded-full border border-[#EDE8DF] opacity-40" />
      </motion.div>
      <motion.div className="fixed z-[9999] pointer-events-none top-0 left-0"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}>
        <div className="w-[4px] h-[4px] rounded-full bg-[#EDE8DF]" />
      </motion.div>
    </>
  );
}

/* ─── Credential ticker ─────────────────────────────────────────────── */
const TOP_TICKS = [
  { label: "IS 383:2016 Sand Standard",      green: true  },
  { label: "Bureau Veritas Certified",        green: true  },
  { label: "Karnataka Mining Permit",         green: true  },
  { label: "BIS Hallmarked Output",           green: true  },
  { label: "Zero Liquid Discharge",           green: false },
  { label: "DPIIT Startup India",             green: false },
  { label: "Enclosed Processing",             green: false },
  { label: "Gundlupet · Est. 2015",           green: false },
];

export function CredentialTicker() {
  const all = [...TOP_TICKS, ...TOP_TICKS];
  return (
    <div className="fixed z-[99] left-0 right-0 overflow-hidden flex items-center"
      style={{ top: "56px", height: "22px", borderBottom: "1px solid rgba(237,232,223,0.04)",
        /* liquid glass */
        background: "rgba(9,8,10,0.45)",
        backdropFilter: "blur(12px) saturate(1.4)",
        WebkitBackdropFilter: "blur(12px) saturate(1.4)",
      }}>
      <motion.div className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, ease: "linear", repeat: Infinity, repeatType: "loop" }}>
        {all.map((t, i) => (
          <div key={i} className="inline-flex items-center gap-2 shrink-0 px-5"
            style={{ borderRight: "1px solid rgba(237,232,223,0.04)" }}>
            <div className="w-[3px] h-[3px] rounded-full shrink-0"
              style={{ background: t.green ? "rgba(237,232,223,0.5)" : "rgba(237,232,223,0.15)" }} />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
              letterSpacing: "0.22em", textTransform: "uppercase" as const,
              color: t.green ? "rgba(237,232,223,0.35)" : "rgba(237,232,223,0.14)" }}>
              {t.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}


/* ─── Hero ──────────────────────────────────────────────────────────── */
export default function Hero() {
  return (
    <>
      <CredentialTicker />

      <div className="relative w-full overflow-hidden"
        style={{ height: "calc(100dvh - 56px)", marginTop: "56px" }}>

        {/* ── Video ── */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.42, mixBlendMode: "luminosity" }}
            src="/161071-822582138-loop.mp4"
          />
          <div className="absolute inset-0" style={{
            background: "linear-gradient(130deg, rgba(9,8,10,0.94) 0%, rgba(9,8,10,0.6) 46%, rgba(9,8,10,0.15) 100%)"
          }} />
          <div className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(to top, rgba(7,6,8,1), transparent)" }} />
        </div>

        {/* ── Grid ── */}
        <div className="absolute inset-0 z-[1] pointer-events-none" style={{
          background: "repeating-linear-gradient(90deg,rgba(237,232,223,0.01) 0,rgba(237,232,223,0.01) 1px,transparent 1px,transparent 80px),repeating-linear-gradient(0deg,rgba(237,232,223,0.01) 0,rgba(237,232,223,0.01) 1px,transparent 1px,transparent 80px)"
        }} />

        {/* ── Side label ── */}
        <div className="absolute left-3 top-1/2 z-20 pointer-events-none hidden lg:block"
          style={{ transform: "translateY(-50%) rotate(180deg)", fontFamily: "'DM Mono',monospace",
            fontSize: "6px", color: "rgba(237,232,223,0.07)", letterSpacing: "0.28em",
            textTransform: "uppercase", writingMode: "vertical-rl" }}>
          Construction Materials · Karnataka · India
        </div>

        {/* ── 3-zone layout ── */}
        <div className="absolute inset-0 z-20 flex flex-col" style={{ padding: "0 52px" }}>

          {/* Zone 1 — Kicker */}
          <motion.div className="flex items-center justify-between" style={{ paddingTop: "22px" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.8 }}>
            <div className="flex items-center gap-3">
              <div className="h-[1px] w-3" style={{ background: "rgba(237,232,223,0.2)" }} />
              <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
                letterSpacing: "0.28em", textTransform: "uppercase" as const,
                color: "rgba(237,232,223,0.16)" }}>
                Reclaimed Rock
                <span style={{ color: "rgba(237,232,223,0.2)", margin: "0 7px" }}>·</span>
                Zero Waste
                <span style={{ color: "rgba(237,232,223,0.2)", margin: "0 7px" }}>·</span>
                Karnataka
              </span>
            </div>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: "6.5px",
              color: "rgba(237,232,223,0.08)", letterSpacing: "0.1em" }}>001 / 006</span>
          </motion.div>

          {/* Zone 2 — Headline + body */}
          <div className="flex-1 flex flex-col justify-center">

            {/* Headline — all cream, no colour on display text */}
            {[
              { text: "82% lower carbon.",         delay: 0.25, opacity: 1.0,   italic: false },
              { text: "MORTH certified construction.", delay: 0.39, opacity: 0.68,  italic: false },
              { text: "ancient rocks.",                delay: 0.52, opacity: 0.10,  italic: true  },
            ].map((line, li) => (
              <div key={li} className="overflow-hidden">
                <motion.div initial={{ y: "106%" }} animate={{ y: "0%" }}
                  transition={{ delay: line.delay, duration: 1.05, ease: [0.16, 1, 0.3, 1] }}>
                  <p style={{
                    fontFamily: "'DM Serif Display',serif",
                    fontStyle: line.italic ? "italic" : "normal",
                    fontWeight: 400,
                    fontSize: "clamp(32px, 5.2vw, 74px)",
                    lineHeight: 0.93,
                    letterSpacing: "-0.035em",
                    color: `rgba(237,232,223,${line.opacity})`,
                  }}>
                    {line.text}
                  </p>
                </motion.div>
              </div>
            ))}

            {/* Body copy — no MORTH prefix, no redundancy */}
            <motion.div style={{ marginTop: "22px", maxWidth: "480px" }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.78, duration: 0.9 }}>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "13px",
                fontWeight: 400, color: "rgba(237,232,223,0.52)", lineHeight: 1.62,
                letterSpacing: "0.005em" }}>
                Construction material made from reclaimed geological deposits.
              </p>
              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "11.5px",
                fontWeight: 300, color: "rgba(237,232,223,0.28)", lineHeight: 1.65,
                marginTop: "6px" }}>
                Built from long-settled, weathered rock deposits in agricultural land.
                <br />No new extraction. No new damage.
              </p>
            </motion.div>

            {/* Action row — two liquid glass buttons, no MORTH badge */}
            <motion.div className="flex items-center gap-3 flex-wrap" style={{ marginTop: "24px" }}
              initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.92, duration: 0.8 }}>

              {/* Primary — liquid glass, cream fill, no screaming green */}
              <motion.button
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "8px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "#09080A",
                  background: "rgba(237,232,223,0.88)",
                  border: "1px solid rgba(237,232,223,0.15)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "12px 26px",
                  borderRadius: "3px",
                  cursor: "pointer",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.3)",
                }}
                whileHover={{ background: "rgba(237,232,223,1)", scale: 1.02 }}
                transition={{ duration: 0.15 }}
                onClick={() => (window.location.href = "/products")}>
                Explore Products
              </motion.button>

              {/* Secondary — ghost glass */}
              <motion.button
                onClick={() => (window.location.href = "/about")}
                style={{
                  fontFamily: "'DM Mono',monospace",
                  fontSize: "8px",
                  letterSpacing: "0.18em",
                  textTransform: "uppercase" as const,
                  color: "rgba(237,232,223,0.5)",
                  background: "rgba(237,232,223,0.04)",
                  border: "1px solid rgba(237,232,223,0.09)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  padding: "11px 24px",
                  borderRadius: "3px",
                  cursor: "pointer",
                }}
                whileHover={{ color: "rgba(237,232,223,0.8)", borderColor: "rgba(237,232,223,0.2)" }}
                transition={{ duration: 0.2 }}>
                Our Ecosystem →
              </motion.button>
            </motion.div>
          </div>

          {/* Zone 3 — Customer logos */}
          <motion.div style={{ paddingBottom: "24px" }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.9 }}>
            <CustomerLogos />
          </motion.div>
        </div>
      </div>
    </>
  );
}
