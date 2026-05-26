import { useEffect } from "react";

export const SITE_ORIGIN = "https://greenrockinnovations.earth";
export const SITE_NAME = "Greenrock Innovations";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/opengraph.jpg`;

export type Faq = { q: string; a: string };

type SeoInput = {
  /** Page-specific title. Site name is appended automatically. */
  title: string;
  /** ~150-char meta description. */
  description: string;
  /** Absolute or path canonical. Defaults to current location. */
  canonical?: string;
  /** OG/Twitter image. Defaults to site og image. */
  image?: string;
  /** Optional JSON-LD payloads to inject (Article, FAQPage, BreadcrumbList, etc.). */
  jsonLd?: Record<string, unknown>[];
};

const STAMP = "data-seo-managed";

function upsertMeta(selector: string, attrs: Record<string, string>) {
  let el = document.head.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(STAMP, "1");
    document.head.appendChild(el);
  }
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
}

function upsertLink(rel: string, href: string) {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    el.setAttribute(STAMP, "1");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSeo({ title, description, canonical, image, jsonLd }: SeoInput) {
  useEffect(() => {
    const fullTitle = title.includes(SITE_NAME) ? title : `${title} — ${SITE_NAME}`;
    document.title = fullTitle;

    const canonicalHref = canonical
      ? (canonical.startsWith("http") ? canonical : `${SITE_ORIGIN}${canonical}`)
      : window.location.href.split("#")[0];

    const ogImage = image || DEFAULT_OG_IMAGE;

    upsertMeta('meta[name="description"]', { name: "description", content: description });
    upsertMeta('meta[property="og:title"]', { property: "og:title", content: fullTitle });
    upsertMeta('meta[property="og:description"]', { property: "og:description", content: description });
    upsertMeta('meta[property="og:url"]', { property: "og:url", content: canonicalHref });
    upsertMeta('meta[property="og:image"]', { property: "og:image", content: ogImage });
    upsertMeta('meta[name="twitter:title"]', { name: "twitter:title", content: fullTitle });
    upsertMeta('meta[name="twitter:description"]', { name: "twitter:description", content: description });
    upsertMeta('meta[name="twitter:image"]', { name: "twitter:image", content: ogImage });

    upsertLink("canonical", canonicalHref);

    // Inject JSON-LD blocks (tagged for cleanup)
    const tag = "data-seo-jsonld";
    document.head.querySelectorAll(`script[${tag}]`).forEach((s) => s.remove());
    if (jsonLd && jsonLd.length) {
      for (const payload of jsonLd) {
        const script = document.createElement("script");
        script.type = "application/ld+json";
        script.setAttribute(tag, "1");
        script.text = JSON.stringify(payload);
        document.head.appendChild(script);
      }
    }
  }, [title, description, canonical, image, JSON.stringify(jsonLd)]);
}

/** Build a FAQPage JSON-LD payload from a list of Q/A entries. */
export function faqJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Build a BreadcrumbList JSON-LD payload. */
export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: `${SITE_ORIGIN}${it.path}`,
    })),
  };
}

/** Build an Article/BlogPosting JSON-LD payload. */
export function articleJsonLd(opts: {
  headline: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  image?: string;
  author?: string;
  keywords?: string[];
  wordCount?: number;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": opts.url },
    datePublished: opts.datePublished,
    dateModified: opts.dateModified || opts.datePublished,
    image: opts.image || DEFAULT_OG_IMAGE,
    keywords: opts.keywords?.join(", "),
    wordCount: opts.wordCount,
    author: { "@type": "Organization", name: opts.author || SITE_NAME, url: SITE_ORIGIN },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      url: SITE_ORIGIN,
      logo: { "@type": "ImageObject", url: `${SITE_ORIGIN}/favicon.png` },
    },
  };
}
