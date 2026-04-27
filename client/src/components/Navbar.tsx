import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/technology", label: "Technology" },
  { href: "/products", label: "Products" },
  { href: "/invest", label: "Invest" },
];

/* Diamond SVG logo mark */
function DiamondMark() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <polygon points="11,1 21,9 11,21 1,9"
        fill="rgba(46,111,87,0.15)" stroke="#2E6F57" strokeWidth="1.2"/>
      <polygon points="11,5 17,10 11,18 5,10"
        fill="rgba(46,111,87,0.2)" stroke="rgba(46,111,87,0.5)" strokeWidth="0.6"/>
    </svg>
  );
}

export default function Navbar() {
  const [location] = useLocation();
  const isActive = (href: string) => location === href;
  const isImpact = location === "/impact-calculator";

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50"
      style={{ height: "56px" }}
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Fully transparent — no background, no border, no blur */}
      <div className="mx-auto h-full flex items-center justify-between px-8 md:px-12">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] no-underline">
          <DiamondMark />
          <span style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "12px",
            fontWeight: 500,
            letterSpacing: "0.12em",
            color: "rgba(237,232,223,0.9)",
            textTransform: "uppercase",
          }}>
            Black Diamond
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-7">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: isActive(item.href) ? 500 : 400,
                letterSpacing: "0.01em",
                color: isActive(item.href)
                  ? "rgba(237,232,223,0.9)"
                  : "rgba(237,232,223,0.38)",
                textDecoration: "none",
                transition: "color 0.15s",
              }}
              onMouseEnter={(e) => {
                if (!isActive(item.href))
                  (e.target as HTMLElement).style.color = "rgba(237,232,223,0.7)";
              }}
              onMouseLeave={(e) => {
                if (!isActive(item.href))
                  (e.target as HTMLElement).style.color = "rgba(237,232,223,0.38)";
              }}
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
              letterSpacing: "0.14em",
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
              style={{ background: "rgba(237,232,223,0.05)", border: "1px solid rgba(237,232,223,0.08)" }}>
              <Menu className="h-4 w-4" style={{ color: "rgba(237,232,223,0.6)" }} />
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
                    letterSpacing: "0.14em", textTransform: "uppercase",
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
