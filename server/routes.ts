import type { Express } from "express";
import { type Server } from "http";
import { POST_META } from "@shared/journal-posts";

const ORIGIN = "https://greenrockinnovations.earth";
const TODAY = new Date().toISOString().split("T")[0];

const STATIC_PAGES = [
  { path: "/",                  priority: "1.0", changefreq: "weekly",  lastmod: TODAY },
  { path: "/about",             priority: "0.9", changefreq: "monthly", lastmod: TODAY },
  { path: "/technology",        priority: "0.9", changefreq: "monthly", lastmod: TODAY },
  { path: "/products",          priority: "0.9", changefreq: "monthly", lastmod: TODAY },
  { path: "/invest",            priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { path: "/impact-calculator", priority: "0.7", changefreq: "monthly", lastmod: TODAY },
  { path: "/journal",           priority: "0.95",changefreq: "weekly",  lastmod: TODAY },
  { path: "/privacy-policy",    priority: "0.3", changefreq: "yearly",  lastmod: "2026-02-11" },
  { path: "/terms-of-service",  priority: "0.3", changefreq: "yearly",  lastmod: "2026-02-14" },
  { path: "/cookie-policy",     priority: "0.3", changefreq: "yearly",  lastmod: "2026-02-18" },
];

function buildSitemap(): string {
  const urls = [
    ...STATIC_PAGES.map(
      (p) =>
        `  <url>\n    <loc>${ORIGIN}${p.path}</loc>\n    <lastmod>${p.lastmod}</lastmod>\n    <changefreq>${p.changefreq}</changefreq>\n    <priority>${p.priority}</priority>\n  </url>`
    ),
    ...POST_META.map(
      (p) =>
        `  <url>\n    <loc>${ORIGIN}/journal/${p.slug}</loc>\n    <lastmod>${p.datePublished}</lastmod>\n    <changefreq>yearly</changefreq>\n    <priority>0.85</priority>\n  </url>`
    ),
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>`;
}

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // ---------------------------------------------------------------------------
  // SEO — dynamic sitemap (auto-updates when new journal posts are added)
  // ---------------------------------------------------------------------------
  app.get("/sitemap.xml", (_req: any, res: any) => {
    res.setHeader("Content-Type", "application/xml; charset=utf-8");
    res.setHeader("Cache-Control", "public, max-age=3600");
    res.send(buildSitemap());
  });

  // ---------------------------------------------------------------------------
  // Investor access (server-side session auth)
  // ---------------------------------------------------------------------------
  // NOTE: This is intentionally lightweight (no DB/passport) since it's a
  // private investor gate.

  const INVESTOR_USERNAME = process.env.INVESTOR_USERNAME ?? "invester";
  const INVESTOR_PASSWORD = process.env.INVESTOR_PASSWORD;

  const isInvestorAuthed = (req: any): boolean => {
    return Boolean(req.session?.isInvestor);
  };

  app.get("/api/investor/me", (req: any, res) => {
    return res.json({ ok: true, authenticated: isInvestorAuthed(req) });
  });

  app.post("/api/investor/login", (req: any, res) => {
    const username = String(req.body?.username ?? "");
    const password = String(req.body?.password ?? "");

    // If password isn't configured, don't allow login.
    if (!INVESTOR_PASSWORD) {
      return res.status(503).json({ message: "Investor login is not configured" });
    }

    if (username !== INVESTOR_USERNAME || password !== INVESTOR_PASSWORD) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    req.session.isInvestor = true;
    return res.json({ ok: true });
  });

  app.post("/api/investor/logout", (req: any, res) => {
    if (!req.session) return res.json({ ok: true });
    req.session.destroy((err: any) => {
      if (err) return res.status(500).json({ message: "Failed to logout" });
      res.clearCookie("bd_session");
      return res.json({ ok: true });
    });
  });

  app.get("/api/investor/stats", (req: any, res) => {
    if (!isInvestorAuthed(req)) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    // Placeholder stats (you said you’ll provide business stats later)
    return res.json({
      ok: true,
      stats: [
        { label: "Total Processing Capacity", value: "800+ TPH" },
        { label: "Operational Footprint", value: "6 Acres" },
        { label: "Material Recovery", value: "95%" },
        { label: "Regulatory Compliance", value: "Fully Auditable" },
      ],
    });
  });

  return httpServer;
}
