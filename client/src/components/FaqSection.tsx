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

export default function FaqSection({
  eyebrow,
  title,
  faqs,
  tone = "dark-slate",
}: {
  eyebrow: string;
  title: string;
  faqs: Faq[];
  tone?: Tone;
}) {
  const t = TONES[tone];

  return (
    <section
      aria-labelledby="faq-heading"
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
            letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: `rgba(${t.accent},0.78)`,
          }}
        >
          {eyebrow}
        </span>
        <h2
          id="faq-heading"
          style={{
            fontFamily: "'DM Serif Display',serif",
            fontWeight: 400,
            fontSize: "clamp(22px, 2.4vw, 32px)",
            letterSpacing: "-0.025em",
            color: t.question,
            marginTop: "10px",
          }}
        >
          {title}
        </h2>
      </div>

      {faqs.map((f, fi) => (
        <details
          key={fi}
          style={{
            borderBottom: `1px solid ${t.border}`,
            padding: "16px 0",
          }}
        >
          <summary
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              color: t.question,
              cursor: "pointer",
              listStyle: "none",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
            }}
          >
            <span>{f.q}</span>
            <span
              style={{
                fontFamily: "'DM Mono',monospace",
                fontSize: "14px",
                color: `rgba(${t.accent},0.78)`,
                flexShrink: 0,
              }}
            >
              +
            </span>
          </summary>
          <p
            style={{
              fontFamily: "'DM Sans',sans-serif",
              fontSize: "14px",
              lineHeight: 1.65,
              color: t.answer,
              marginTop: "10px",
              maxWidth: "740px",
            }}
          >
            {f.a}
          </p>
        </details>
      ))}
    </section>
  );
}
