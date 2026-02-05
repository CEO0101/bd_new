import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Droplets, Landmark, Recycle, ShieldAlert, ArrowRight, Info, Calculator, TrendingUp } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const CalculatorCard = ({ icon: Icon, title, value, unit, subtitle, index }: { icon: any, title: string, value: string, unit: string, subtitle: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 border border-white/15 rounded-xl p-6 hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(168,195,177,0.3)] transition-all duration-500 group h-full relative overflow-hidden"
  >
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-emerald-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    
    <div className="flex items-center justify-between mb-4 relative z-10">
      <div className="w-12 h-12 bg-gradient-to-br from-emerald-500/20 to-emerald-600/20 border border-emerald-400/30 rounded-xl flex items-center justify-center text-emerald-300 group-hover:text-emerald-100 group-hover:border-emerald-400/60 transition-all duration-500 shadow-lg">
        <Icon className="w-6 h-6 drop-shadow-lg" />
      </div>
      <div className="text-right">
        <div className="text-[10px] text-emerald-300/80 font-medium uppercase tracking-wider">Metric</div>
        <div className="text-[10px] font-bold text-emerald-200 bg-emerald-500/20 px-2 py-1 rounded-full border border-emerald-400/30">
          {index + 1}
        </div>
      </div>
    </div>
    
    <div className="space-y-2 relative z-10">
      <h3 className="text-[10px] font-semibold text-white/90 uppercase tracking-wider bg-gradient-to-r from-emerald-300 to-white bg-clip-text text-transparent">{title}</h3>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl md:text-3xl font-display font-black text-white tracking-tighter drop-shadow-[0_0_10px_rgba(168,195,177,0.5)]">{value}</span>
        <span className="text-[10px] text-emerald-300 font-medium">{unit}</span>
      </div>
    </div>
    
    <div className="mt-4 pt-3 border-t border-white/15 relative z-10">
      <p className="text-[10px] text-white/50 leading-relaxed">
        {subtitle}
      </p>
    </div>
    
    {/* Bottom accent bar */}
    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 to-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </motion.div>
);

const InputField = ({ label, value, onChange, unit, placeholder }: { label: string, value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, unit: string, placeholder: string }) => (
  <div className="space-y-3">
    <label className="block text-[10px] font-semibold text-white/80 uppercase tracking-wider">{label}</label>
    <div className="relative group">
      <input
        type="text"
        inputMode="numeric"
        value={value}
        onChange={onChange}
        className="w-full bg-zinc-900/50 border border-white/15 rounded-lg px-4 py-3 text-white font-medium text-lg focus:outline-none focus:border-white/30 transition-all duration-200 placeholder:text-white/30 group-hover:border-white/25"
        placeholder={placeholder}
      />
      <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/40 font-medium tracking-wider">{unit}</span>
    </div>
  </div>
);

export default function ImpactCalculator() {
  const [tons, setTons] = useState<number>(1000);
  const [results, setResults] = useState({
    sandSaved: 0,
    wasteDiverted: 0,
    waterSaved: 0,
    treesSaved: 0
  });

  useEffect(() => {
    // CO₂ Intensity per Tonne calculation
    // Hourly production = 150 tonnes
    // CO₂ intensity = 655 ÷ 150 = 4.37 kg CO₂/tonne
    // For conservative ESG reporting, buffers are applied for auxiliary loads and variability.
    // Final reported CO₂ intensity: ~7 kg CO₂ per tonne.
    
    const co2PerTonne = 7; // kg CO₂ per tonne
    const totalCo2Avoided = tons * co2PerTonne;
    
    const sandSaved = tons * 0.75;
    const wasteDiverted = tons;
    const waterSaved = (tons * 1.5) * 0.9;
    // 1 ton of production = 5 trees saved per year
    const treesSaved = Math.round(tons * 5);
    
    setResults({
      sandSaved,
      wasteDiverted,
      waterSaved,
      treesSaved
    });
  }, [tons]);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          <div className="max-w-5xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-4">
                <Calculator className="w-8 h-8 text-white/40" />
                <div className="w-px h-8 bg-white/20" />
                <TrendingUp className="w-8 h-8 text-white/40" />
              </div>
              <h1 className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-tighter">
                Environmental <span className="text-white/20 italic font-light">Impact Calculator</span>
              </h1>
              <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-3xl mx-auto">
                Translate industrial recycling operations into measurable environmental preservation metrics. 
                Quantify the impact of every ton of granite waste diverted from dumping and recycled into construction-grade material.
              </p>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Input Section */}
            <motion.div 
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-4 space-y-6"
            >
              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <div className="space-y-6">
                  <InputField
                    label="Granite Waste Processed"
                    value={tons === 0 ? "" : tons.toString()}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      setTons(val === "" ? 0 : parseInt(val));
                    }}
                    unit="TONS"
                    placeholder="e.g., 1000"
                  />
                  
              <div className="p-4 bg-zinc-800/50 rounded-lg border border-white/20 flex gap-3">
                <Info className="w-4 h-4 text-white/40 shrink-0 mt-0.5" />
                <div className="text-[10px] text-white/40 leading-relaxed space-y-2">
                  <div>
                    <strong>CO₂ Intensity Calculation:</strong>
                  </div>
                  <div className="space-y-1 text-[10px]">
                    <div>• Hourly production = 150 tonnes</div>
                    <div>• Base CO₂ intensity = 655 ÷ 150 = 4.37 kg CO₂/tonne</div>
                    <div>• Conservative ESG buffer applied for auxiliary loads</div>
                    <div>• Final reported CO₂ intensity: ~7 kg CO₂ per tonne</div>
                  </div>
                  <div className="pt-2 border-t border-white/20">
                    Based on BlackDiamondGranites operational data and an 800+ TPH total capacity benchmark (including a 550 TPH super primary processing unit).
                  </div>
                </div>
              </div>
                </div>
              </div>

              <div className="bg-zinc-900/50 border border-white/10 rounded-xl p-6">
                <h3 className="text-[10px] font-semibold text-white/80 uppercase tracking-wider mb-4">Environmental Indicators</h3>
                <div className="space-y-2">
                  {[
                    "Reduced river sand mining",
                    "Reduced slurry dumping and groundwater contamination",
                    "Reduced dependency on virgin aggregates"
                  ].map((indicator, i) => (
                    <div key={i} className="flex items-center gap-2 text-[10px] text-white/40">
                      <ArrowRight className="w-3 h-3 text-white/40" />
                      <span>{indicator}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Results Section */}
            <div className="lg:col-span-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <CalculatorCard 
                  icon={Landmark}
                  title="River Sand Saved"
                  value={results.sandSaved.toLocaleString()}
                  unit="TONS"
                  subtitle="Replaces natural river sand, preserving riparian ecosystems and preventing riverbed erosion."
                  index={0}
                />
                <CalculatorCard 
                  icon={Recycle}
                  title="Waste Diverted"
                  value={results.wasteDiverted.toLocaleString()}
                  unit="TONS"
                  subtitle="Diverts industrial slurry and stone waste from dumping sites, preventing groundwater contamination."
                  index={1}
                />
                <CalculatorCard 
                  icon={Droplets}
                  title="Fresh Water Saved"
                  value={results.waterSaved.toLocaleString()}
                  unit="KL"
                  subtitle="Total fresh water intake avoided through high-efficiency closed-loop filtration and recovery."
                  index={2}
                />
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-gradient-to-br from-emerald-500/10 to-emerald-600/5 border border-emerald-500/20 rounded-xl p-6 flex flex-col justify-center text-center h-full"
                >
                  <div className="space-y-3">
                    <div className="flex items-baseline justify-center gap-2">
                      <span className="text-[10px] text-emerald-300/70 font-semibold">
                        ≈
                      </span>
                      <span className="text-3xl md:text-4xl font-display font-black text-white tracking-tighter">
                        {results.treesSaved.toLocaleString()}
                      </span>
                      <span className="text-sm text-white font-medium">Trees Saved</span>
                    </div>
                    <div className="text-[10px] text-emerald-300/60 font-medium">
                      1 ton of production = 5 trees saved per year
                    </div>
                    <p className="text-[10px] text-white/40 leading-relaxed">
                      Equivalent annual CO₂ absorption of mature trees through reduced quarrying and waste dumping.
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-white/10">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center text-emerald-300">
                        <ShieldAlert className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-[10px] text-white/80 font-semibold uppercase tracking-wider">Preservation Index</h4>
                        <p className="text-[10px] text-white/40">
                          Significant reduction in regional water stress and illegal mining activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>

          <div className="max-w-5xl mx-auto mt-12 p-6 border-t border-white/10">
            <p className="text-[10px] text-white/40 leading-relaxed text-center">
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