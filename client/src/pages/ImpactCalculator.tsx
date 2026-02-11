import { useState, useEffect } from "react";
import { Droplets, Landmark, Recycle, ShieldAlert, ArrowRight, Info } from "lucide-react";
import Navbar from "@/components/Navbar";

const CalculatorCard = ({ icon: Icon, title, value, unit, subtitle }: { icon: any, title: string, value: string, unit: string, subtitle: string }) => (
  <div className="bg-gradient-to-br from-zinc-900/40 to-black border border-white/10 p-6 rounded-xl space-y-3 hover:border-white/30 transition-all duration-500 group shadow-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]">
    <div className="w-10 h-10 bg-gradient-to-br from-white/5 to-transparent border border-white/20 rounded-lg flex items-center justify-center text-white/40 group-hover:bg-white/10 transition-colors">
      <Icon className="w-5 h-5" />
    </div>
    <div>
      <h3 className="text-white/40 text-xs font-mono font-bold uppercase tracking-widest mb-1">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-display font-black text-white tracking-tighter">{value}</span>
        <span className="text-xs text-white/40 font-mono">{unit}</span>
      </div>
    </div>
    <p className="text-xs text-white/40 leading-relaxed pt-3 border-t border-white/10 group-hover:border-white/20 transition-colors">
      {subtitle}
    </p>
  </div>
);

const Footer = () => (
  <footer className="py-32 bg-black text-white border-t border-white/10">
    <div className="container px-6 mx-auto">
      <div className="grid lg:grid-cols-4 gap-12">
        {/* Brand Section */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-8 bg-white rounded-sm transform rotate-45" />
            <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
              BLACK DIAMOND
            </span>
          </div>
          <p className="text-sm text-white/60 leading-relaxed max-w-sm">
            Building without borrowing from its future. A cleaner way for India to grow.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
              <span className="sr-only">Twitter</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Solutions Section */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Solutions</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">M-Sand</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">P-Sand</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Aggregates</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pavers</a></li>
          </ul>
        </div>

        {/* Company Section */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Technology</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Impact</a></li>
            <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter Section */}
        <div className="lg:col-span-1">
          <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Stay Updated</h3>
          <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
          <form className="space-y-3">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
              required
            />
            <button 
              type="submit"
              className="w-full px-4 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-16 pt-8 border-t border-white/10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Precision Granite Recovery
          </p>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-white/40">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function ImpactCalculator() {
  const [tons, setTons] = useState<number>(0);
  const [results, setResults] = useState({
    sandSaved: 0,
    wasteDiverted: 0,
    waterSaved: 0,
    treesSaved: 0
  });

  useEffect(() => {
    const sandSaved = tons * 0.75;
    const wasteDiverted = tons;
    const waterSaved = (tons * 1.5) * 0.9;
    // Framework: 1 ton of production = 5 trees saved per year
    const treesSaved = tons * 5;
    
    setResults({
      sandSaved,
      wasteDiverted,
      waterSaved,
      treesSaved
    });
  }, [tons]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />
      <style>{`
        @keyframes sproutGrow {
          0% { transform: translateY(18px) scale(0.6); opacity: 0; }
          35% { opacity: 0.4; }
          100% { transform: translateY(0) scale(1); opacity: 1; }
        }
        @keyframes sproutSway {
          0% { transform: rotate(-4deg); }
          50% { transform: rotate(4deg); }
          100% { transform: rotate(-4deg); }
        }
        @keyframes sproutPulse {
          0% { opacity: 0.25; transform: scale(0.8); }
          60% { opacity: 0.55; transform: scale(1.08); }
          100% { opacity: 0.25; transform: scale(0.8); }
        }
      `}</style>
      
      <main className="pt-20 pb-16">
        <div className="container px-6 mx-auto">
          <div className="max-w-4xl mx-auto mb-12 text-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-display font-black text-white mb-6 uppercase tracking-tighter">
                Environmental <br/> <span className="text-white/20 italic font-light">Impact Calculator</span>
              </h1>
              <p className="text-lg font-light text-white/60 leading-relaxed">
                Translate industrial recycling operations into measurable environmental preservation metrics. 
                Quantify the impact of every ton of granite waste diverted from dumping and recycled into construction-grade material.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 items-start">
            {/* Input Section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="premium-blur-dark bg-zinc-900/40 border border-white/10 p-6 rounded-xl space-y-4 shadow-xl">
                <div>
                  <label htmlFor="tons" className="block text-sm font-mono font-bold text-white uppercase tracking-widest mb-3">
                    Granite Waste Processed
                  </label>
                  <div className="relative">
                    <input
                      id="tons"
                      type="text"
                      inputMode="numeric"
                      value={tons.toString()}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setTons(val === "" ? 0 : parseInt(val));
                      }}
                      className="w-full bg-black border border-white/10 rounded-lg px-4 py-3 text-white text-xl font-black focus:outline-none focus:border-white/30 transition-colors"
                      placeholder="e.g., 0"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white/40 font-mono font-bold text-xs tracking-widest">TONS</span>
                  </div>
                </div>

                <div className="p-3 bg-zinc-800/50 rounded-lg border border-white/10 flex gap-3">
                  <Info className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                  <p className="text-xs text-white/30 leading-relaxed">
                    Based on BlackDiamondGranites operational data and an 800+ TPH total capacity benchmark (including a 550 TPH super primary processing unit).
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-white font-mono font-bold uppercase tracking-wider text-xs">Environmental Indicators</h3>
                <div className="space-y-2">
                  {[
                    "Reduced river sand mining",
                    "Reduced slurry dumping and groundwater contamination",
                    "Reduced dependency on virgin aggregates"
                  ].map((indicator, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-white/30">
                      <ArrowRight className="w-2 h-2 text-white/40" />
                      {indicator}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="lg:col-span-2 grid md:grid-cols-2 gap-4">
              <CalculatorCard 
                icon={Landmark}
                title="River Sand Saved"
                value={results.sandSaved.toLocaleString()}
                unit="TONS"
                subtitle="Replaces natural river sand, preserving riparian ecosystems and preventing riverbed erosion."
              />
              <CalculatorCard 
                icon={Recycle}
                title="Waste Diverted"
                value={results.wasteDiverted.toLocaleString()}
                unit="TONS"
                subtitle="Diverts industrial slurry and stone waste from dumping sites, preventing groundwater contamination."
              />
              <CalculatorCard 
                icon={Droplets}
                title="Fresh Water Saved"
                value={results.waterSaved.toLocaleString()}
                unit="KL"
                subtitle="Total fresh water intake avoided through high-efficiency closed-loop filtration and recovery."
              />
              <div className="bg-gradient-to-br from-zinc-900/40 to-black border border-white/10 p-6 rounded-xl flex flex-col justify-center text-center shadow-xl hover:shadow-[0_15px_30px_rgba(255,255,255,0.15)] relative overflow-hidden">
                <div
                  className="absolute left-6 top-6 w-10 h-10"
                  style={{ animation: "sproutGrow 0.7s ease-out 0.1s both" }}
                  aria-hidden="true"
                >
                  <div
                    className="w-10 h-10"
                    style={{ animation: "sproutSway 1.2s ease-in-out 0.2s infinite" }}
                  >
                    <svg viewBox="0 0 48 48" className="w-full h-full" fill="none">
                      <path d="M24 42V20" stroke="rgba(168,195,177,0.7)" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M24 28c-8 0-14-6-14-14 8 0 14 6 14 14Z" fill="rgba(168,195,177,0.18)" stroke="rgba(168,195,177,0.5)" strokeWidth="1.5"/>
                      <path d="M24 28c8 0 14-6 14-14-8 0-14 6-14 14Z" fill="rgba(168,195,177,0.12)" stroke="rgba(168,195,177,0.45)" strokeWidth="1.5"/>
                      <circle cx="24" cy="36" r="2.5" fill="rgba(168,195,177,0.65)"/>
                    </svg>
                  </div>
                  <div
                    className="absolute inset-0 rounded-full border border-white/10"
                    style={{ animation: "sproutPulse 1.6s ease-in-out infinite" }}
                  />
                </div>
                {/* Primary metric (top) */}
                <div className="space-y-3">
                  <div>
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-base text-white/40 font-mono font-semibold relative -top-1">
                        ≈
                      </span>
                      <span className="text-5xl md:text-6xl font-display font-black text-white tracking-tighter">
                        {results.treesSaved.toLocaleString()}
                      </span>
                      <span className="text-base md:text-lg text-white font-black">Trees Saved</span>
                    </div>
                    <p className="text-xs text-white/30 leading-relaxed mt-3 max-w-[320px] mx-auto">
                      Equivalent annual CO₂ absorption of mature trees through reduced quarrying and waste dumping.
                    </p>
                  </div>
                </div>

                {/* Secondary tier (bottom) */}
                <div className="pt-5 mt-6 border-t border-white/10">
                  <div className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-white/40 mx-auto mb-2">
                    <ShieldAlert className="w-4 h-4" />
                  </div>
                  <h4 className="text-white/40 font-mono font-bold uppercase tracking-wider text-xs mb-1">Preservation Index</h4>
                  <p className="text-xs text-white/40">
                    Significant reduction in regional water stress and illegal mining activities.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto mt-12 p-6 border-t border-white/10">
            <p className="text-[10px] text-white/30 leading-relaxed text-center italic font-light">
              Disclaimer: Figures are indicative estimates based on industry averages and plant recovery efficiencies. 
              Actual results may vary depending on material characteristics and operating conditions. 
              Environmental protection achieved through precision engineering.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
