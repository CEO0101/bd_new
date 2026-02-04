import { motion } from "framer-motion";
import { 
  ArrowRight, 
  ArrowDown, 
  ArrowLeft,
  Circle,
  Database,
  Filter,
  Layers,
  Waves,
  RefreshCw,
  Box,
  Truck,
  ClipboardCheck,
  Zap,
  Hammer,
  Settings
} from "lucide-react";

const steps = [
  { id: "01", title: "GRANITE WASTE INTAKE", desc: "Inbound inspection", details: "Pre-feed staging", icon: Database },
  { id: "02", title: "PRE-SORTING", desc: "Remove contaminants", details: "Grade by size", icon: Layers },
  { id: "03", title: "PRIMARY CRUSHING", desc: "JAW CRUSHER", details: "Output: 40-60 mm", icon: Hammer },
  { id: "04", title: "CRUSHER SCREEN", desc: "Fine material", details: "Oversize", icon: Filter },
  { id: "05", title: "SCREENING", desc: "Size cut control", details: "Recirculation gate", icon: Settings },
  { id: "06", title: "SAND WASHING", desc: "PRIMARY", details: "Hydraulic classification", icon: Waves },
  { id: "07", title: "VIBRATING SCREEN", desc: "Tight size tolerance", details: "Split by grade", icon: Zap },
  { id: "08", title: "SAND WASHING", desc: "FINAL", details: "Ultra-pure fines", icon: Waves },
  { id: "09", title: "SALEABLE PRODUCTS", desc: "Certified grading", details: "Packed / bulk", icon: Box },
  { id: "10", title: "FILTER PRESS", desc: "Slurry dewatered", details: "Fines recovered", icon: Filter },
  { id: "11", title: "WATER RECYCLING", desc: "CLOSED LOOP", details: "Settling + filtration", icon: RefreshCw },
  { id: "12", title: "STOCKPILE", desc: "Batch tracking", details: "Dispatch queue", icon: Truck }
];

export default function Process() {
  return (
    <section id="technology" className="py-40 bg-black relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold mb-8 block text-white/30">Process Architecture</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
              CLOSED-LOOP <br/> <span className="text-white/20">RECYCLING.</span>
            </h2>
          </div>
          <p className="text-xl font-light text-white/40 max-w-sm border-l border-white/10 pl-8 py-4">
            A precise, multi-stage recovery system designed for maximum material efficiency.
          </p>
        </div>

        <div className="relative">
          {/* Main Grid for Sequential Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-20">
            {steps.map((step, idx) => {
              const row = Math.floor(idx / 4);
              const isEvenRow = row % 2 === 0;
              // On even rows (0, 2), they go left to right
              // On odd rows (1), they go right to left (simulated by flex-row-reverse in the grid items if needed, but grid is better)
              
              // For a simple implementation that matches the "snake" look in a 4-column grid:
              // Row 1: 0, 1, 2, 3 (L->R)
              // Row 2: 7, 6, 5, 4 (R->L)
              // Row 3: 8, 9, 10, 11 (L->R)
              
              let displayIdx = idx;
              if (row === 1) {
                displayIdx = (row * 4) + (3 - (idx % 4));
              }
              const currentStep = steps[displayIdx];

              return (
                <div key={currentStep.id} className="relative group">
                  <div className="p-10 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col items-center text-center space-y-8 hover:border-white/20 transition-all duration-500 relative z-10">
                    <div className="relative">
                      <div className="w-20 h-20 bg-black border border-white/10 rounded-2xl flex items-center justify-center group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                        <currentStep.icon className={`w-8 h-8 ${currentStep.id === "11" ? "animate-spin-slow text-white" : "text-white/40 group-hover:text-white"} transition-colors`} />
                      </div>
                      <span className="absolute -top-3 -right-3 w-8 h-8 bg-black border border-white/10 rounded-lg flex items-center justify-center text-[10px] font-mono font-bold text-white/40">
                        {currentStep.id}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <h3 className="text-xs font-mono font-bold tracking-[0.2em] text-white uppercase">
                        {currentStep.title}
                      </h3>
                      <div className="space-y-1">
                        <p className="text-[10px] uppercase text-white/40 font-bold tracking-wider">
                          {currentStep.desc}
                        </p>
                        <p className="text-[10px] uppercase text-white/20 font-mono italic">
                          {currentStep.details}
                        </p>
                      </div>
                    </div>
                    
                    {currentStep.id === "11" && (
                      <div className="absolute -bottom-4 bg-white/10 px-3 py-1 rounded-full border border-white/5 backdrop-blur-md">
                        <span className="text-[8px] font-mono font-bold text-white uppercase tracking-widest">Active</span>
                      </div>
                    )}
                  </div>

                  {/* Connecting Arrows */}
                  {idx < steps.length - 1 && (
                    <div className="hidden lg:block absolute z-0 pointer-events-none">
                      {/* Horizontal Arrows */}
                      {(idx % 4 !== 3) ? (
                        <div className={`absolute top-1/2 -translate-y-1/2 ${isEvenRow ? "left-[100%] w-8" : "right-[100%] w-8"} h-px bg-white/10 flex items-center justify-center`}>
                           {isEvenRow ? <ArrowRight className="w-4 h-4 text-white/20" /> : <ArrowLeft className="w-4 h-4 text-white/20" />}
                        </div>
                      ) : (
                        /* Vertical Down Arrows at the end of rows */
                        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 h-20 w-px bg-white/10 flex items-center justify-center">
                          <ArrowDown className="w-4 h-4 text-white/20" />
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-40 bg-zinc-900/20 border border-white/5 rounded-3xl p-12 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-10">
            <div className="w-20 h-20 bg-black border border-white/10 flex items-center justify-center rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-white/5 animate-pulse" />
              <div className="w-3 h-3 bg-white animate-ping z-10" />
              <RefreshCw className="w-8 h-8 text-white/10 absolute animate-spin-slow" />
            </div>
            <div>
              <p className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-2">Operation Status</p>
              <p className="text-3xl font-display font-black text-white tracking-widest uppercase">Closed Loop Active</p>
            </div>
          </div>
          <div className="max-w-md md:text-right border-l md:border-l-0 md:border-r border-white/10 pl-8 md:pl-0 md:pr-8 py-2">
            <p className="text-xs font-mono uppercase tracking-widest text-white/20 leading-relaxed italic">
              System operating at peak efficiency. All recovery parameters within specified tolerances for Grade-A certification.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
