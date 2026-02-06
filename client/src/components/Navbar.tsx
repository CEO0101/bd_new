import { Link, useLocation } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();

  const isImpact = location === "/impact-calculator";

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-sm transform rotate-45" />
          <span className="font-display font-bold text-xl tracking-tight text-white uppercase">
            BLACK DIAMOND
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <Link href="/about" className="hover:text-white transition-colors">About</Link>
          <Link href="/technology" className="hover:text-white transition-colors">Technology</Link>
          <Link href="/products" className="hover:text-white transition-colors">Products</Link>

          {/* Make Impact Calculator the primary, high-visibility CTA in the sticky header */}
          <Link
            href="/impact-calculator"
            className={
              "relative px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 " +
              (isImpact
                ? "bg-[#A8C3B1] text-black"
                : "bg-[#A8C3B1]/15 text-[#A8C3B1] border border-[#A8C3B1]/35 hover:bg-[#A8C3B1] hover:text-black")
            }
          >
            Impact Calculator
            {!isImpact && (
              <span className="ml-2 inline-flex items-center rounded-full bg-black/40 px-2 py-0.5 text-[10px] font-mono font-black tracking-wider text-white/70 border border-white/10">
                Try it
              </span>
            )}
          </Link>
        </div>

        <Link
          href="/impact-calculator"
          className={
            "px-6 py-2 rounded-sm text-sm font-medium transition-all duration-300 " +
            (isImpact
              ? "bg-[#A8C3B1] text-black"
              : "bg-white/5 hover:bg-[#A8C3B1] hover:text-black border border-white/10")
          }
        >
          Calculate Impact
        </Link>
      </div>
    </motion.nav>
  );
}