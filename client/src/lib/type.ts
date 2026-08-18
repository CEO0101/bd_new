/**
 * Canonical type scale.
 *
 * Before this existed the site had 37 distinct font sizes, including
 * near-duplicates doing the same job (6 / 6.5 / 7 / 8 / 8.5px for
 * eyebrow labels; 11 / 11.5 / 12 / 12.5 / 13 / 14 / 15 / 16px for body)
 * and 13 separate clamp() ramps for headings. Sizes that close together
 * don't read as intentional hierarchy — they read as drift, which is
 * what makes a layout feel unresolved even when nothing is obviously
 * "wrong."
 *
 * Reference systems (Apple HIG, Stripe, Linear) run ~7-9 steps total.
 * This is 9: 3 label sizes, 3 body sizes, 3 display ramps.
 *
 * Letter-spacing is bound to the size here rather than set ad hoc,
 * because the correct tracking is a function of size: small uppercase
 * text needs wide tracking to stay legible, large display text needs
 * negative tracking to avoid looking gappy.
 */

/* ── Micro labels — uppercase mono eyebrows, section markers, tags ──
   Was: 6px, 6.5px, 7px, 8px, 8.5px (five sizes, no discernible system) */
export const LABEL_XS = {
  fontFamily: "'DM Mono',monospace",
  fontSize: "9px",
  letterSpacing: "0.28em",
  textTransform: "uppercase" as const,
} as const;

export const LABEL_SM = {
  fontFamily: "'DM Mono',monospace",
  fontSize: "10px",
  letterSpacing: "0.24em",
  textTransform: "uppercase" as const,
} as const;

/* Buttons / CTAs — slightly tighter tracking than labels so the word
   still reads as a unit you can click, not a spaced-out caption. */
export const LABEL_BTN = {
  fontFamily: "'DM Mono',monospace",
  fontSize: "10px",
  letterSpacing: "0.16em",
  textTransform: "uppercase" as const,
} as const;

/* ── Body — sans, sentence case ──
   Was: 11, 11.5, 12, 12.5, 13, 14, 15, 16px (eight sizes) */
export const BODY_SM = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "13px",
  lineHeight: 1.65,
  letterSpacing: "0.005em",
} as const;

export const BODY = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "15px",
  lineHeight: 1.7,
  letterSpacing: "0.005em",
} as const;

export const BODY_LG = {
  fontFamily: "'DM Sans',sans-serif",
  fontSize: "17px",
  lineHeight: 1.65,
  letterSpacing: "0.004em",
} as const;

/* ── Display — serif headings ──
   Was: 13 different clamp() ramps. Now 3, each a clear step apart so
   page-level hierarchy is obvious at a glance. Negative tracking scales
   with size, as it should. */
export const DISPLAY_SM = {
  fontFamily: "'DM Serif Display',serif",
  fontWeight: 400,
  fontSize: "clamp(22px, 2.4vw, 32px)",
  lineHeight: 1.2,
  letterSpacing: "-0.018em",
} as const;

export const DISPLAY_MD = {
  fontFamily: "'DM Serif Display',serif",
  fontWeight: 400,
  fontSize: "clamp(28px, 4vw, 52px)",
  lineHeight: 1.1,
  letterSpacing: "-0.026em",
} as const;

export const DISPLAY_LG = {
  fontFamily: "'DM Serif Display',serif",
  fontWeight: 400,
  fontSize: "clamp(38px, 7.4vw, 128px)",
  lineHeight: 0.95,
  letterSpacing: "-0.035em",
} as const;
