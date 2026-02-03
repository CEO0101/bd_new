import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Philosophy from "@/components/sections/Philosophy";
import Process from "@/components/sections/Process";
import Products from "@/components/sections/Products";
import Impact from "@/components/sections/Impact";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-foreground selection:bg-primary selection:text-white">
      <Navbar />
      
      <main>
        <Hero />
        <div className="h-[1px] w-full bg-border" />
        <Philosophy />
        <div className="h-[1px] w-full bg-border" />
        <Process />
        <Impact />
        <Products />
        
        <footer className="py-24 bg-foreground text-background">
          <div className="container px-6 mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-display font-bold mb-8">
                  BlackDiamond Granites <br/>
                  <span className="text-primary">The Foundation.</span>
                </h2>
                <div className="space-y-4 text-background/60 text-lg">
                  <p>India can now build without destroying its land.</p>
                  <p>Building without borrowing from its future.</p>
                  <p className="text-white">A cleaner way for India to grow.</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-12">
                <div className="w-full max-w-sm p-8 border border-white/10 bg-white/5">
                  <span className="text-xs font-mono text-primary mb-4 block tracking-widest uppercase">Contact</span>
                  <p className="text-2xl font-display font-bold mb-8">Let's build with intention.</p>
                  <button className="w-full py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm hover:bg-primary/90 transition-colors">
                    Get in touch
                  </button>
                </div>
                <div className="text-xs font-mono text-background/40 uppercase tracking-widest">
                  © {new Date().getFullYear()} Precision Granite Recovery
                </div>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}