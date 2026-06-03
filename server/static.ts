import express, { type Express, type Request, type Response } from "express";
import fs from "fs";
import path from "path";

const ORIGIN = "https://greenrockinnovations.earth";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  // index: false — disable auto-serving of index.html for /, so our
  // catch-all below handles ALL routes including the homepage and
  // injects the correct canonical everywhere.
  app.use(express.static(distPath, { index: false }));

  // Serve index.html for all SPA routes, injecting the correct canonical URL
  // so crawlers (SE Ranking, AhrefBot, etc.) that don't execute JS still see
  // the right canonical — prevents "non-canonical page in sitemap" audit errors.
  app.use("/{*path}", (req: Request, res: Response) => {
    const indexPath = path.resolve(distPath, "index.html");
    let html = fs.readFileSync(indexPath, "utf-8");
    // Use req.originalUrl — req.path is relative to the wildcard mount
    // point in Express 5 and returns "/" even on /about etc.
    const rawPath = req.originalUrl.split("?")[0];
    const canonicalUrl = rawPath === "/" || rawPath === "" ? `${ORIGIN}/` : `${ORIGIN}${rawPath}`;
    html = html.replace(
      /<link rel="canonical" href="[^"]*"\s*\/>/,
      `<link rel="canonical" href="${canonicalUrl}" />`
    );
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.send(html);
  });
}
