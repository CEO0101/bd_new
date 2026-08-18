import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/products", label: "Products" },
  { href: "/journal", label: "Journal" },
  { href: "/invest", label: "Invest" },
];

/* Greenrock mark — faceted gem with regeneration arrow */
function GreenrockMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="16,3 28,16 16,29 4,16"
        fill="rgba(46,111,87,0.18)" stroke="#2E6F57" strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="16,7 24,16 16,25 8,16"
        fill="none" stroke="#2E6F57" strokeWidth="0.7" strokeOpacity="0.55" />
      <path d="M16 21 L16 12 M12 16 L16 12 L20 16"
        fill="none" stroke="#2E6F57" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const isActive = (href: string) => location === href;
  const isImpact = location === "/impact-calculator";

  // Light pages (white background) need dark nav text instead of cream.
  const light =
    location === "/about" ||
    location === "/products" ||
    location === "/technology" ||
    location === "/impact-calculator" ||
    location === "/privacy-policy" ||
    location === "/terms-of-service" ||
    location === "/cookie-policy" ||
    location.startsWith("/journal");
  const TXT = light ? "20,19,15" : "237,232,223";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        height: "56px",
        // Light pages (white bg): a real glass tint is required, otherwise
        // dark nav text has nothing reliable to sit on against a busy
        // photo — that was the original invisible-nav bug.
        // Dark pages (video hero — Home, Invest): NO background color at
        // all. Any black tint, even at low opacity, reads as "the nav has
        // a black bar" — which is exactly the complaint. Pure
        // backdrop-blur with zero fill still softens the video enough for
        // text-shadow to carry legibility, without ever adding black.
        background: light ? "rgba(255,255,255,0.6)" : "transparent",
        backdropFilter: light ? "blur(20px) saturate(1.6)" : "blur(6px)",
        WebkitBackdropFilter: light ? "blur(20px) saturate(1.6)" : "blur(6px)",
        borderBottom: light ? `1px solid rgba(${TXT},0.06)` : "none",
      }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="mx-auto h-full flex items-center justify-between px-8 md:px-12">

        {/* Logo — text-shadow (dark pages only) is what carries legibility
            now that there's no background tint to lean on. */}
        <Link href="/" className="flex items-center gap-[10px] no-underline">
          <GreenrockMark />
          {/* Wordmark — single ink color, hierarchy by WEIGHT not COLOR.
              The old version colored "INNOVATIONS" brand-green against a
              cream "GREENROCK", which is the classic tell of a generated
              logo: two competing colors at the same optical size, no
              clear primary. Premium marks (Stripe, Linear, Vercel) hold
              one color and separate the words with weight/opacity only. */}
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "13px",
            letterSpacing: "0.16em",
            color: `rgba(${TXT},0.95)`,
            textTransform: "uppercase",
            textShadow: light ? "none" : "0 1px 6px rgba(0,0,0,0.55)",
          }}>
            <span style={{ fontWeight: 500 }}>Greenrock</span>
            <span style={{ fontWeight: 400, opacity: 0.55, marginLeft: "6px" }}>Innovations</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              data-active={isActive(item.href) ? "true" : undefined}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: isActive(item.href) ? 500 : 400,
                letterSpacing: "0.004em",
                color: isActive(item.href)
                  ? `rgba(${TXT},0.95)`
                  : `rgba(${TXT},0.62)`,
                textDecoration: "none",
                transition: "color 0.15s",
                textShadow: light ? "none" : "0 1px 6px rgba(0,0,0,0.55)",
              }}
              className="nav-link"
            >
              {item.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href="/impact-calculator"
            style={{
              fontFamily: "'DM Mono', monospace",
              fontSize: "9px",
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: isImpact ? "#09080A" : "#2E6F57",
              background: isImpact ? "#2E6F57" : "transparent",
              border: "1px solid rgba(46,111,87,0.45)",
              padding: "7px 16px",
              textDecoration: "none",
              transition: "all 0.2s",
            }}
          >
            Impact Calculator
          </Link>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger className="inline-flex h-9 w-9 items-center justify-center"
              aria-label="Open navigation menu"
              style={{ background: `rgba(${TXT},0.1)`, border: `1px solid rgba(${TXT},0.22)` }}>
              <Menu className="h-4 w-4" style={{ color: `rgba(${TXT},0.85)` }} />
            </SheetTrigger>
            <SheetContent style={{ background: "rgba(9,8,10,0.97)", borderColor: "rgba(237,232,223,0.07)" }}>
              <div className="flex flex-col gap-4 pt-10">
                {NAV_ITEMS.map((item) => (
                  <Link key={item.href} href={item.href}
                    style={{ fontFamily: "'DM Sans',sans-serif", fontSize: "15px",
                      color: "rgba(237,232,223,0.7)", textDecoration: "none" }}>
                    {item.label}
                  </Link>
                ))}
                <Link href="/impact-calculator"
                  style={{ fontFamily: "'DM Mono',monospace", fontSize: "9px",
                    letterSpacing: "0.16em", textTransform: "uppercase",
                    color: "#2E6F57", textDecoration: "none", marginTop: "8px" }}>
                  Impact Calculator
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
}
