import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const [location] = useLocation();
  const [scrollY, setScrollY] = useState(0);

  const isImpact = location === "/impact-calculator";
  const isActive = (href: string) => location === href;

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/technology", label: "Technology" },
    { href: "/products", label: "Products" },
    { href: "/invest", label: "Invest" },
  ];

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || 0);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const theme = useMemo(() => {
    const themes: Record<string, { tint: string; accent: string; bg: string }> = {
      "/": {
        tint: "rgba(168, 195, 177, 0.06)",
        accent: "#A8C3B1",
        bg: "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(0,0,0,0.35), rgba(255,255,255,0.08))",
      },
      "/about": {
        tint: "rgba(46, 111, 87, 0.08)",
        accent: "#2E6F57",
        bg: "linear-gradient(120deg, rgba(46,111,87,0.16), rgba(239,234,227,0.4), rgba(46,111,87,0.12))",
      },
      "/technology": {
        tint: "rgba(107, 107, 107, 0.08)",
        accent: "#6B6B6B",
        bg: "linear-gradient(120deg, rgba(107,107,107,0.22), rgba(20,20,20,0.4), rgba(107,107,107,0.18))",
      },
      "/products": {
        tint: "rgba(239, 234, 227, 0.14)",
        accent: "#7C6F63",
        bg: "linear-gradient(120deg, rgba(239,234,227,0.3), rgba(60,60,60,0.35), rgba(239,234,227,0.2))",
      },
      "/invest": {
        tint: "rgba(168, 195, 177, 0.08)",
        accent: "#86A78F",
        bg: "linear-gradient(120deg, rgba(134,167,143,0.2), rgba(10,10,10,0.35), rgba(134,167,143,0.14))",
      },
      "/impact-calculator": {
        tint: "rgba(168, 195, 177, 0.1)",
        accent: "#A8C3B1",
        bg: "linear-gradient(120deg, rgba(168,195,177,0.2), rgba(10,10,10,0.35), rgba(168,195,177,0.14))",
      },
    };

    return themes[location] ?? themes["/"];
  }, [location]);

  const depthFactor = Math.min(scrollY / 420, 1);
  const glassBlur = 12 + depthFactor * 8;
  const glassAlpha = 0.55 + depthFactor * 0.18;

  return (
    <>
      <style>{`
        @keyframes navShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }
        @keyframes navShimmer {
          0% { transform: translateX(-60%); opacity: 0.05; }
          40% { opacity: 0.22; }
          100% { transform: translateX(60%); opacity: 0.05; }
        }
        @keyframes navTexture {
          0% { background-position: 0 0; }
          100% { background-position: 180px 120px; }
        }
      `}</style>
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        backgroundColor: `rgba(0,0,0,${glassAlpha})`,
        backdropFilter: `blur(${glassBlur}px)`,
        WebkitBackdropFilter: `blur(${glassBlur}px)`,
        ["--glass-tint" as never]: theme.tint,
        ["--glass-accent" as never]: theme.accent,
        ["--glass-bg" as never]: theme.bg,
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "var(--glass-bg), repeating-linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.06) 2px, transparent 2px, transparent 8px)",
          backgroundSize: "200% 100%, 160px 140px",
          opacity: 0.5,
          animation: "navShift 18s ease-in-out infinite, navTexture 28s linear infinite",
          mixBlendMode: "screen",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "var(--glass-tint)",
          opacity: 0.7,
        }}
      />
      <div
        className="absolute inset-y-0 left-0 right-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, transparent 0%, rgba(255,255,255,0.22) 45%, rgba(255,255,255,0.08) 55%, transparent 100%)",
          animation: "navShimmer 16s ease-in-out infinite",
        }}
      />
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm transform rotate-45" style={{ backgroundColor: "var(--glass-accent)" }} />
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
            BLACK DIAMOND
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={
                "transition-colors " +
                (isActive(item.href) ? "text-white" : "text-white/60 hover:text-white")
              }
              style={isActive(item.href) ? { color: "var(--glass-accent)" } : undefined}
            >
              {item.label}
            </Link>
          ))}

          {/* Make Impact Calculator the primary, high-visibility CTA in the sticky header */}
          <Link
            href="/impact-calculator"
            className={
              "relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 " +
              (isImpact
                ? "text-black"
                : "text-white border hover:text-black")
            }
            style={
              isImpact
                ? { backgroundColor: "var(--glass-accent)" }
                : {
                    borderColor: "color-mix(in srgb, var(--glass-accent) 40%, transparent)",
                    backgroundColor: "color-mix(in srgb, var(--glass-accent) 12%, transparent)",
                  }
            }
          >
            Impact Calculator
            {!isImpact && (
              <span className="ml-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-mono font-black tracking-wider text-white/70 border border-white/10 bg-black/40">
                Try it
              </span>
            )}
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {/* Mobile Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 transition-colors">
                <Menu className="h-5 w-5 text-white" />
                <span className="sr-only">Open menu</span>
              </SheetTrigger>
              <SheetContent
                className="border-white/10"
                style={{
                  backgroundColor: "rgba(0,0,0,0.92)",
                }}
              >
                <div className="space-y-6 pt-8">
                  <div className="space-y-1">
                    <p className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30">
                      Navigation
                    </p>
                    <div className="h-[1px] w-16 bg-white/10" />
                  </div>

                  <div className="flex flex-col gap-3">
                    {navItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={
                          "rounded-sm px-3 py-2 text-sm font-medium border transition-colors " +
                          (isActive(item.href)
                            ? "bg-white/10 text-white border-white/20"
                            : "bg-transparent text-white/70 border-white/10 hover:bg-white/5 hover:text-white")
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>

                  <Link
                    href="/impact-calculator"
                    className={
                      "w-full inline-flex items-center justify-center px-6 py-3 rounded-sm text-sm font-medium transition-all duration-300 border " +
                      (isImpact
                        ? "text-black"
                        : "text-white hover:text-black")
                    }
                    style={
                      isImpact
                        ? { backgroundColor: "var(--glass-accent)", borderColor: "var(--glass-accent)" }
                        : {
                            borderColor: "color-mix(in srgb, var(--glass-accent) 40%, transparent)",
                            backgroundColor: "color-mix(in srgb, var(--glass-accent) 12%, transparent)",
                          }
                    }
                  >
                    Impact Calculator
                  </Link>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </motion.nav>
    </>
  );
}
