import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
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
          <Link href="/impact-calculator" className="hover:text-emerald-300 transition-colors bg-emerald-500/10 px-4 py-2 rounded-full border border-emerald-400/30 hover:bg-emerald-500/20 hover:border-emerald-400/60">
            🌱 Impact Calculator
          </Link>
        </div>

        <button className="px-6 py-2 bg-white/5 hover:bg-primary hover:text-black border border-white/10 rounded-sm text-sm font-medium transition-all duration-300">
          Contact Us
        </button>
      </div>
    </motion.header>
  );
}