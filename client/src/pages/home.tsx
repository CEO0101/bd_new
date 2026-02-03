import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Impact from "@/components/sections/Impact";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      
      <main>
        <Hero />
        <Philosophy />
        <Process />
        <Impact />
        <Products />
        
        {/* Footer / Closing */}
        <footer className="py-24 bg-black border-t border-white/10 text-center">
          <div className="container px-6 mx-auto max-w-4xl">
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-8 tracking-tight">
              BlackDiamond Granites is <br/> building that foundation.
            </h2>
            
            <div className="space-y-6 text-xl text-gray-400 font-light mb-16">
              <p>India can now build without destroying its land.</p>
              <p>Building without borrowing from its future.</p>
              <p className="text-white">A cleaner way for India to grow.</p>
            </div>
            
            <div className="inline-block px-8 py-4 border border-white/10 rounded-sm bg-white/5 hover:bg-primary hover:text-black hover:border-primary transition-all duration-300 cursor-pointer">
              <span className="text-sm font-mono uppercase tracking-widest">
                From Extraction to Intention
              </span>
            </div>

            <div className="mt-24 text-xs text-gray-600 font-mono">
              © {new Date().getFullYear()} Precision Granite Recovery. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}