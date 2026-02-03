import { Link } from "wouter";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-sm transform rotate-45" />
          <span className="font-display font-bold text-xl tracking-tight text-white">
            BLACKDIAMOND
          </span>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#philosophy" className="hover:text-primary transition-colors">Philosophy</a>
          <a href="#process" className="hover:text-primary transition-colors">Process</a>
          <a href="#products" className="hover:text-primary transition-colors">Products</a>
          <a href="#impact" className="hover:text-primary transition-colors">Impact</a>
        </div>

        <button className="px-6 py-2 bg-white/5 hover:bg-primary hover:text-black border border-white/10 rounded-sm text-sm font-medium transition-all duration-300">
          Contact Us
        </button>
      </div>
    </motion.nav>
  );
}