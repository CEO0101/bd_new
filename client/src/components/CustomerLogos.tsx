import { motion } from "framer-motion";

/* ── SVG logo components ─────────────────────────────────────────────── */

const KNR = () => (
  <svg width="96" height="28" viewBox="0 0 96 28" fill="none">
    <text x="0" y="19" fontFamily="'DM Sans',sans-serif" fontWeight="700"
      fontSize="20" letterSpacing="-0.5" fill="currentColor">KNR</text>
    <line x1="58" y1="3" x2="58" y2="25" stroke="currentColor" strokeWidth="0.8" opacity="0.25"/>
    <text x="62" y="13" fontFamily="'DM Mono',monospace" fontWeight="400"
      fontSize="6" letterSpacing="1.4" fill="currentColor" opacity="0.55">CONSTRUCTIONS</text>
    <text x="62" y="22" fontFamily="'DM Mono',monospace" fontWeight="400"
      fontSize="6" letterSpacing="1.4" fill="currentColor" opacity="0.35">LIMITED</text>
  </svg>
);

const Malabar = () => (
  <svg width="112" height="28" viewBox="0 0 112 28" fill="none">
    <circle cx="10" cy="12" r="7.5" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
    <text x="10" y="16" fontFamily="'DM Serif Display',serif"
      fontSize="8" fill="currentColor" opacity="0.6" textAnchor="middle">M</text>
    <text x="22" y="15" fontFamily="'DM Sans',sans-serif" fontWeight="600"
      fontSize="11" letterSpacing="0.5" fill="currentColor">MALABAR</text>
    <text x="22" y="25" fontFamily="'DM Mono',monospace" fontWeight="400"
      fontSize="6" letterSpacing="1.8" fill="currentColor" opacity="0.45">CEMENTS LTD</text>
  </svg>
);

const ULCCS = () => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
    <rect x="0" y="3" width="18" height="20" rx="1" stroke="currentColor" strokeWidth="0.9" opacity="0.28"/>
    <text x="9" y="16" fontFamily="'DM Sans',sans-serif" fontWeight="700"
      fontSize="9" fill="currentColor" textAnchor="middle">UL</text>
    <text x="23" y="14" fontFamily="'DM Sans',sans-serif" fontWeight="700"
      fontSize="12" letterSpacing="-0.2" fill="currentColor">ULCCS</text>
    <text x="23" y="24" fontFamily="'DM Mono',monospace"
      fontSize="5.5" letterSpacing="0.6" fill="currentColor" opacity="0.42">CO-OPERATIVE SOC.</text>
  </svg>
);

const Geomix = () => (
  <svg width="80" height="28" viewBox="0 0 80 28" fill="none">
    <circle cx="7" cy="8" r="4.5" fill="currentColor" opacity="0.18"/>
    <circle cx="7" cy="8" r="2.5" fill="currentColor" opacity="0.45"/>
    <text x="16" y="14" fontFamily="'DM Serif Display',serif" fontStyle="italic"
      fontWeight="400" fontSize="13" letterSpacing="-0.3" fill="currentColor">Geo</text>
    <text x="42" y="14" fontFamily="'DM Sans',sans-serif" fontWeight="700"
      fontSize="13" letterSpacing="-0.3" fill="currentColor">'mix</text>
    <text x="16" y="24" fontFamily="'DM Mono',monospace"
      fontSize="5.5" letterSpacing="1.2" fill="currentColor" opacity="0.42">CONCRETE</text>
  </svg>
);

const GlobalSands = () => (
  <svg width="110" height="28" viewBox="0 0 110 28" fill="none">
    <path d="M2 12 A8 8 0 1 1 8 19" stroke="currentColor" strokeWidth="1"
      strokeLinecap="round" opacity="0.4"/>
    <line x1="2" y1="12" x2="10" y2="12" stroke="currentColor" strokeWidth="0.9" opacity="0.35"/>
    <text x="18" y="15" fontFamily="'DM Sans',sans-serif" fontWeight="600"
      fontSize="10.5" letterSpacing="0.3" fill="currentColor">GLOBAL SANDS</text>
    <text x="18" y="25" fontFamily="'DM Mono',monospace"
      fontSize="5.5" letterSpacing="1.4" fill="currentColor" opacity="0.42">CONSORTIUM</text>
  </svg>
);

const ExcelTraders = () => (
  <svg width="86" height="28" viewBox="0 0 86 28" fill="none">
    <path d="M2 5 L9 13 L2 21 M8 5 L15 13 L8 21"
      stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" opacity="0.4"/>
    <text x="20" y="15" fontFamily="'DM Sans',sans-serif" fontWeight="600"
      fontSize="11" letterSpacing="0.3" fill="currentColor">EXCEL</text>
    <text x="20" y="25" fontFamily="'DM Mono',monospace"
      fontSize="5.5" letterSpacing="1.2" fill="currentColor" opacity="0.42">TRADERS</text>
  </svg>
);

const AlphaSands = () => (
  <svg width="92" height="28" viewBox="0 0 92 28" fill="none">
    {/* Triangle mark like Alpha's logo */}
    <polygon points="9,2 17,18 1,18"
      fill="rgba(237,232,223,0.08)" stroke="currentColor" strokeWidth="0.9" opacity="0.5"/>
    <text x="9" y="15" fontFamily="'DM Sans',sans-serif" fontWeight="800"
      fontSize="7" fill="currentColor" textAnchor="middle" opacity="0.7">A</text>
    <text x="22" y="14" fontFamily="'DM Sans',sans-serif" fontWeight="700"
      fontSize="12" letterSpacing="-0.2" fill="currentColor">ALPHA</text>
    <text x="22" y="25" fontFamily="'DM Mono',monospace"
      fontSize="5.5" letterSpacing="1.4" fill="currentColor" opacity="0.42">SANDS</text>
  </svg>
);

/* ── Logo list — no Begur Sands ──────────────────────────────────────── */
const LOGOS = [
  { id: "knr",    C: KNR          },
  { id: "mal",    C: Malabar      },
  { id: "ulccs",  C: ULCCS        },
  { id: "alpha",  C: AlphaSands   },
  { id: "geo",    C: Geomix       },
  { id: "global", C: GlobalSands  },
  { id: "excel",  C: ExcelTraders },
];

/* ── Seamless infinite ticker ──────────────────────────────────────────
   Double the array. Animate 0% → -50%. At -50% the view is identical
   to 0%, so the snap-back is invisible.
─────────────────────────────────────────────────────────────────────── */
export default function CustomerLogos() {
  const doubled = [...LOGOS, ...LOGOS];

  return (
    <div className="w-full">
      {/* "Trusted by" — subtle green glow behind the label */}
      <div className="flex items-center gap-5 mb-3" style={{ padding: "0 52px" }}>
        <div className="h-[1px] flex-1" style={{ background: "rgba(237,232,223,0.06)" }} />
        <div style={{ position: "relative", display: "flex", alignItems: "center", padding: "4px 14px" }}>
          {/* radial glow */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(46,111,87,0.15), transparent 70%)",
            pointerEvents: "none",
            borderRadius: "2px",
          }} />
          <span style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "9px",
            letterSpacing: "0.28em",
            textTransform: "uppercase" as const,
            color: "rgba(237,232,223,0.35)",
            position: "relative",
          }}>
            Trusted by
          </span>
        </div>
        <div className="h-[1px] flex-1" style={{ background: "rgba(237,232,223,0.06)" }} />
      </div>

      {/* Logo strip */}
      <div className="overflow-hidden"
        style={{ borderTop: "1px solid rgba(237,232,223,0.05)", borderBottom: "1px solid rgba(237,232,223,0.05)" }}>
        <motion.div
          className="flex items-center"
          style={{ padding: "12px 0", width: "max-content" }}
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 48, ease: "linear", repeat: Infinity, repeatType: "loop" }}
        >
          {doubled.map((logo, i) => (
            <motion.div
              key={i}
              className="inline-flex items-center justify-center shrink-0"
              style={{
                padding: "0 40px",
                borderRight: "1px solid rgba(237,232,223,0.05)",
                color: "rgba(237,232,223,0.25)",
              }}
              whileHover={{ color: "rgba(237,232,223,0.6)" }}
              transition={{ duration: 0.18 }}
            >
              <logo.C />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
