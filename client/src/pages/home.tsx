import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <main className="bg-black">
        <Hero />
        <div className="h-[1px] w-full bg-white/10" />
        <Philosophy />
        <div className="h-[1px] w-full bg-white/10" />
        <Process />
        <div className="h-[1px] w-full bg-white/10" />
        <Impact />
        <div className="h-[1px] w-full bg-white/10" />
        <Products />
        
        <footer className="py-40 bg-foreground text-white overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-white/10" />
          <div className="container px-6 mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-32">
              <div className="space-y-12">
                <h2 className="text-7xl md:text-9xl font-display font-black leading-[0.8] tracking-tighter">
                  BLACK <br/> DIAMOND.
                </h2>
                <div className="space-y-6 text-white/50 text-2xl font-light max-w-lg leading-tight">
                  <p>Building without borrowing from its future.</p>
                  <p className="text-white italic">A cleaner way for India to grow.</p>
                </div>
              </div>
              
              <div className="flex flex-col justify-end space-y-12">
                <div className="p-12 border border-white/20 hover:border-white transition-colors group cursor-pointer">
                  <span className="text-[10px] font-mono uppercase tracking-[0.4em] mb-8 block text-white/50 group-hover:text-white">Initiative</span>
                  <p className="text-4xl font-display font-black mb-12">LET'S REDEFINE <br/> THE FOUNDATION.</p>
                  <div className="flex items-center gap-4">
                    <div className="h-[1px] w-12 bg-white" />
                    <span className="text-xs font-mono uppercase tracking-widest">Get in touch</span>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-12 border-t border-white/10">
                  <span className="text-[10px] font-mono uppercase tracking-widest opacity-40">© {new Date().getFullYear()} Precision Granite Recovery</span>
                  <div className="flex gap-8 text-[10px] font-mono uppercase tracking-widest opacity-40">
                    <span className="hover:opacity-100 cursor-pointer">Privacy</span>
                    <span className="hover:opacity-100 cursor-pointer">Terms</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Large background watermark */}
          <div className="absolute -bottom-20 -right-20 text-[25rem] font-display font-black text-white/[0.03] leading-none pointer-events-none">
            BDG
          </div>
        </footer>
      </main>
    </div>
  );
}

import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Impact from "@/components/sections/Impact";
import Products from "@/components/sections/Products";