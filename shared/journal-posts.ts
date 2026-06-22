/** Lightweight post manifest shared by both client (journal content) and server (sitemap). */
export type PostMeta = {
  slug: string;
  datePublished: string; // ISO date, used for sitemap <lastmod>
};

export const POST_META: PostMeta[] = [
  { slug: "the-hidden-cost-of-river-sand",                       datePublished: "2026-01-15" },
  { slug: "manufactured-sand-types-complete-guide",              datePublished: "2026-04-08" },
  { slug: "embodied-carbon-construction-materials",              datePublished: "2026-04-22" },
  { slug: "western-ghats-construction-biodiversity",             datePublished: "2026-05-04" },
  { slug: "recycled-construction-materials-2026-manual",         datePublished: "2026-06-03" },
  { slug: "karnataka-mineral-dispatch-permit-rule-3c4",          datePublished: "2026-06-03" },
  { slug: "scaling-recycled-construction-platform",             datePublished: "2026-07-05" },
];
