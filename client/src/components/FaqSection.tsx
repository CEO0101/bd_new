import { useState } from "react";
import type { Faq } from "@/lib/useSeo";

type Tone = "dark-slate" | "dark-pure" | "light";

const TONES = {
  "dark-slate": {
    cream: "237,232,223",
    accent: "143,182,204",
    answer: "rgba(237,232,223,0.6)",
    question: "rgba(237,232,223,0.9)",
    border: "rgba(237,232,223,0.08)",
    accentBorder: "rgba(143,182,204,0.32)",
  },
  "dark-pure": {
    cream: "237,232,223",
    accent: "46,111,87",
    answer: "rgba(237,232,223,0.6)",
    question: "rgba(237,232,223,0.9)",
    border: "rgba(237,232,223,0.08)",
    accentBorder: "rgba(46,111,87,0.32)",
  },
  light: {
    cream: "27,27,27",
    accent: "46,111,87",
    answer: "rgba(52,52,52,0.78)",
    question: "rgba(27,27,27,0.92)",
    border: "rgba(107,107,107,0.18)",
    accentBorder: "rgba(46,111,87,0.32)",
  },
};

// Same curve the navbar and hero already animate on — keeping one easing
// across the site is most of what makes motion feel deliberate.
const EASE = "cubic-bezier(0.16, 1, 0.3, 1)";

/* Plus that becomes a minus by collapsing its vertical stroke.
   A rotating chevron turns to mush at 12px; a stroke scaling to zero stays
   crisp. transformBox: fill-box is required — without it an SVG child
   transforms about the viewport origin rather than its own centre, and the
   stroke slides away sideways instead of closing in place. */
function PlusMinus({ open, color }: { open: boolean; color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true" style={{ flexShrink: 0 }}>
      <line x1="0.5" y1="6" x2="11.5" y2="6" stroke={color} strokeWidth="1.2" />
      <line
        x1="6"
        y1="0.5"
        x2="6"
        y2="11.5"
        stroke={color}
        strokeWidth="1.2"
        style={{
          transformBox: "fill-box",
          transformOrigin: "center",
          transform: open ? "scaleY(0)" : "scaleY(1)",
          transition: `transform 0.36s ${EASE}`,
        }}
      />
    </svg>
  );
}

export default function FaqSection({
  eyebrow,
  title,
  faqs,
  tone = "dark-slate",
  idPrefix = "faq",
}: {
  eyebrow: string;
  title: string;
  faqs: Faq[];
  tone?: Tone;
  /* Only needed when two FAQ blocks share a page — ids and the
     aria-labelledby wiring must stay unique. */
  idPrefix?: string;
}) {
  const t = TONES[tone];

  /* One answer open at a time. Every item used to be an independent
     <details>, so nothing ever closed anything else — open five and the
     question list disappears under a wall of body copy, which is exactly
     what the About page looked like in use. Clicking the open item closes
     it, so "everything collapsed" is still reachable. */
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
      aria-labelledby={`${idPrefix}-heading`}
      style={{ paddingTop: "16px", paddingBottom: "16px" }}
    >
      <div
        style={{
          borderTop: `1px solid ${t.accentBorder}`,
          paddingTop: "28px",
          marginBottom: "20px",
        }}
      >
        <span
          style={{
            fontFamily: "'DM Mono',monospace",
            fontSize: "9px",
            letterSpacing: "0.28em",
            textTransform: "uppercase",
            color: `rgba(${t.accent},0.78)`,
          }}
        >
          {eyebrow}
        </span>
        <h2
          id={`${idPrefix}-heading`}
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.4vw, 32px)",
            letterSpacing: "-0.026em",
            color: t.question,
            marginTop: "10px",
          }}
        >
          {title}
        </h2>
      </div>

      {faqs.map((f, fi) => {
        const open = openIndex === fi;
        const btnId = `${idPrefix}-q-${fi}`;
        const panelId = `${idPrefix}-a-${fi}`;

        return (
          <div key={fi} style={{ borderBottom: `1px solid ${t.border}` }}>
            <button
              id={btnId}
              type="button"
              aria-expanded={open}
              aria-controls={panelId}
              onClick={() => setOpenIndex(open ? null : fi)}
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "16px",
                padding: "16px 0",
                background: "none",
                border: "none",
                textAlign: "left",
                cursor: "pointer",
                fontFamily: "'DM Sans',sans-serif",
                fontSize: "15px",
                fontWeight: 500,
                lineHeight: 1.45,
                color: t.question,
              }}
            >
              <span>{f.q}</span>
              <PlusMinus open={open} color={`rgba(${t.accent},0.78)`} />
            </button>

            {/* The answer stays mounted whether or not it is open. Collapsing
                via grid-template-rows instead of unmounting keeps every answer
                in the DOM for crawlers — these FAQs exist to be read by Google
                and AI assistants, so unmounting them would quietly undo the
                reason the block is on the page. It is also the only way to
                transition to an auto height without measuring in JS. */}
            <div
              id={panelId}
              role="region"
              aria-labelledby={btnId}
              style={{
                display: "grid",
                gridTemplateRows: open ? "1fr" : "0fr",
                transition: `grid-template-rows 0.4s ${EASE}`,
              }}
            >
              <div style={{ overflow: "hidden" }}>
                <p
                  style={{
                    fontFamily: "'DM Sans',sans-serif",
                    fontSize: "15px",
                    lineHeight: 1.65,
                    color: t.answer,
                    maxWidth: "740px",
                    paddingBottom: "18px",
                    opacity: open ? 1 : 0,
                    transition: `opacity 0.3s ${EASE}`,
                  }}
                >
                  {f.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
