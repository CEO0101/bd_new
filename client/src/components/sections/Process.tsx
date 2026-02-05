import { motion } from "framer-motion";
import { 
  Truck, 
  Layers, 
  Hammer, 
  Filter, 
  Settings, 
  Droplets, 
  Activity, 
  Pipette, 
  RefreshCw, 
  PackageCheck,
  ChevronRight,
  ChevronDown,
  ChevronLeft
} from "lucide-react";
import { cn } from "../../lib/utils";
import { useState } from "react";

const MachineAnimation = ({ type }: { type: string }) => {
  switch (type) {
    case 'intake':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ x: [-20, 20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="flex gap-2"
          >
            {[...Array(3)].map((_, i) => (
              <div key={i} className="w-4 h-4 bg-secondary/40 rounded-sm rotate-45" />
            ))}
          </motion.div>
        </div>
      );
    case 'sorting':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ x: [-15, 15] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-2 bg-white/20 rounded-full relative"
          >
            <motion.div 
              animate={{ opacity: [0, 1, 0], x: [0, 10] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="absolute -top-4 left-4 w-4 h-4 bg-secondary/40 rounded-sm" 
            />
          </motion.div>
        </div>
      );
    case 'crushing':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div 
            animate={{ scaleY: [1, 0.5, 1], y: [0, 8, 0] }}
            transition={{ duration: 0.6, repeat: Infinity, ease: "easeInOut" }}
            className="w-12 h-8 bg-secondary/40 rounded-t-lg border-x border-white/20"
          />
          <div className="absolute bottom-4 w-14 h-2 bg-white/20 rounded-full" />
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 0 }}
              animate={{ opacity: [0, 1, 0], y: [0, 20], x: (i - 2.5) * 6 }}
              transition={{ duration: 0.4, repeat: Infinity, delay: i * 0.1 }}
              className="absolute bottom-6 w-1.5 h-1.5 bg-secondary rounded-full"
            />
          ))}
        </div>
      );
    case 'screening':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: [-2, 2, -2], y: [-1, 1, -1] }}
            transition={{ duration: 0.05, repeat: Infinity }}
            className="w-16 h-1.5 bg-white/20 rounded-full rotate-12"
          />
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [0, 25], opacity: [0, 1, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, delay: i * 0.15 }}
              className="absolute top-1/2 w-1 h-1 bg-secondary/40 rounded-full"
              style={{ left: `${15 + i * 10}%` }}
            />
          ))}
        </div>
      );
    case 'washing':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-14 h-14 border-2 border-dashed border-accent/30 rounded-full flex items-center justify-center"
          >
             <div className="w-4 h-4 bg-accent/40 rounded-full animate-pulse" />
          </motion.div>
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ 
                scale: [0, 1.2, 0],
                x: Math.cos(i * 30) * 20,
                y: Math.sin(i * 30) * 20
              }}
              transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.05 }}
              className="absolute w-1.5 h-1.5 bg-accent/50 rounded-full"
            />
          ))}
        </div>
      );
    case 'filter':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <div className="w-12 h-12 border border-white/10 rounded-lg flex flex-col overflow-hidden">
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ x: [-40, 40] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                className="h-1/4 w-full bg-secondary/20 border-b border-white/5"
              />
            ))}
          </div>
          <motion.div
            animate={{ opacity: [0.2, 0.8, 0.2] }}
            transition={{ duration: 1, repeat: Infinity }}
            className="absolute bottom-0 w-8 h-1 bg-accent/40 blur-sm"
          />
        </div>
      );
    case 'water':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative w-12 h-12"
          >
            <RefreshCw className="w-full h-full text-tertiary/40" />
          </motion.div>
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute inset-0 bg-accent/5 rounded-full blur-xl"
          />
        </div>
      );
    case 'stockpile':
      return (
        <div className="relative w-full h-full flex items-center justify-center">
          <motion.path
            d="M 10 90 L 50 10 L 90 90 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-tertiary/20"
          />
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ y: [-20, 0], opacity: [0, 1] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.4 }}
              className="absolute top-4 w-2 h-2 bg-secondary/40 rounded-full"
            />
          ))}
          <div className="absolute bottom-4 w-16 h-12 bg-secondary/10 rounded-t-full blur-md" />
        </div>
      );
    default:
      return null;
  }
};

const steps = [
  { id: 1, title: "Granite Waste Intake", icon: Truck, desc: "Raw material collection and initial quality check", animation: 'intake' },
  { id: 2, title: "Pre-Sorting", icon: Layers, desc: "Separation of large contaminants and grading", animation: 'sorting' },
  { id: 3, title: "Primary Crushing", subtitle: "(Jaw Crusher)", icon: Hammer, desc: "Size reduction for controlled material grading", animation: 'crushing' },
  { id: 4, title: "Crusher Screen", icon: Filter, desc: "Initial separation of material by size", animation: 'screening' },
  { id: 5, title: "Screening", icon: Settings, desc: "Refined crushing for specific aggregate sizes", animation: 'screening' },
  { id: 6, title: "Sand Washing", icon: Droplets, desc: "Washing removes impurities and recovers fines", animation: 'washing' },
  { id: 7, title: "Vibratin Screen", icon: Activity, desc: "Final precise sizing of aggregates and sand", animation: 'screening' },
  { id: 8, title: "Sand Washing", icon: Droplets, desc: "Additional washing phase for ultra-pure fines", animation: 'washing' },
  { id: 9, title: "Saleable Products", icon: PackageCheck, desc: "Final certified products ready for dispatch", animation: 'stockpile' },
  { id: 10, title: "Filter Press", icon: Pipette, desc: "Solid-liquid separation for waste management", animation: 'filter' },
  { id: 11, title: "Water Recycling", subtitle: "(Closed Loop)", icon: RefreshCw, desc: "Clarified water reused in washing cycle", animation: 'water' },
  { id: 12, title: "Stockpile", icon: Layers, desc: "Organized storage of processed materials", animation: 'stockpile' },
];

// Helper function to get SVG path for icons
const getIconSVG = (IconComponent: any) => {
  // This is a simplified approach - in a real implementation, you'd want to properly extract the SVG
  return '<path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>';
};

// Popup component for step details
const StepPopup = ({ step, isOpen, onClose }: { step: any; isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-card border border-white/20 rounded-2xl shadow-2xl shadow-accent/20 max-w-md w-full transform transition-all duration-300 scale-95 opacity-0 animate-in fade-in-0 zoom-in-95 slide-up-2">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-bold text-white">{step.title}</h3>
            {step.subtitle && <span className="text-[10px] font-mono font-bold text-secondary/60">{step.subtitle}</span>}
          </div>
          <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-white/10 to-white/5 border border-white/20 rounded-2xl flex items-center justify-center">
            <step.icon className="w-12 h-12 text-white/70" />
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
          <div className="mt-4 flex justify-end">
            <button onClick={onClose} className="px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-sm font-medium hover:bg-white/20 transition-colors">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function ProcessFlow() {
  const [selectedStep, setSelectedStep] = useState<any>(null);

  const handleStepClick = (step: any) => {
    setSelectedStep(step);
  };

  const handleClosePopup = () => {
    setSelectedStep(null);
  };

  return (
    <section className="py-24 bg-background relative overflow-hidden bg-grid-white">
      <div className="absolute inset-0 bg-linear-to-b from-background via-transparent to-background pointer-events-none" />
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-end mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3"
          >
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-black text-white mb-6 uppercase tracking-tighter relative">
              <span className="bg-gradient-to-r from-white via-secondary to-white bg-clip-text text-transparent animate-[gradient_6s_ease-in-out_infinite]">Closed-Loop</span>
              <span className="block text-2xl md:text-3xl font-light text-muted-foreground mt-2 tracking-widest">Recycling Process</span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Recreated exact industrial workflow: a fully integrated, zero-waste model where granite waste is converted into certified construction materials.
            </p>
          </motion.div>
          <div className="lg:w-1/3 rounded-xl overflow-hidden border border-white/5 h-32 w-full hidden lg:block relative group bg-card/50">
            <div className="w-full h-full object-cover grayscale opacity-50 group-hover:opacity-100 transition-all duration-700 bg-gradient-to-br from-zinc-800 to-zinc-900" />
            <div className="absolute inset-0 bg-linear-to-t from-background to-transparent" />
          </div>
        </div>

        {/* Desktop Process Flow - Exact Layout as per Image */}
        <div className="hidden lg:grid grid-cols-4 gap-y-32 gap-x-16 relative py-12">
          {steps.map((step, index) => {
            const row = Math.floor(index / 4);
            const isEvenRow = row % 2 === 0;
            const colIndex = index % 4;
            
            // Snake layout logic:
            // Row 0: 0, 1, 2, 3 (L -> R)
            // Row 1: 7, 6, 5, 4 (R -> L visually) -> But the provided UI is slightly different.
            // Let's follow the provided UI image logic:
            // Row 1: 4, 5, 6, 7 (L -> R)
            // Row 2: 8, 9, 10, 11 (L -> R)
            // Actually the image shows:
            // Step 1 -> 2 -> 3 -> 4
            //                     |
            // Step 8 <- 7 <- 6 <- 5
            // |
            // Step 9 -> 10 -> 11 -> 12
            
            let gridCol = isEvenRow ? colIndex + 1 : 4 - colIndex;
            let gridRow = row + 1;
            
            let arrowType = null;
            if (index < steps.length - 1) {
              if (colIndex < 3) {
                 arrowType = isEvenRow ? 'right' : 'left';
              } else {
                 arrowType = 'down';
              }
            }
            
            return (
              <motion.div
                key={step.id}
                className="relative group"
                style={{ 
                  gridColumn: gridCol,
                  gridRow: gridRow
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                  <div className="relative z-10 flex flex-col items-center text-center">
                    {/* Step Card */}
                    <div className="relative w-32 h-32 mb-8 cursor-pointer group" onClick={() => handleStepClick(step)}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-white/10 to-white/5 border border-white/10 group-hover:border-accent/40 transition-all duration-500 shadow-2xl shadow-accent/30 group-hover:shadow-[0_0_30px_hsl(var(--color-accent)/0.3)] overflow-hidden">
                         <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-pulse" />
                         <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>

                      {/* Animation Core */}
                      <div className="absolute inset-0 flex items-center justify-center p-4">
                        <MachineAnimation type={step.animation || ''} />
                      </div>
                      
                      {/* Step Number Badge */}
                      <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-background border border-white/10 flex items-center justify-center text-[10px] font-bold text-secondary z-20 shadow-lg shadow-black/50">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      
                      {/* Hover Glow Effect */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl scale-110" />
                    </div>

                    <h3 className="text-base font-bold text-white mb-1 uppercase tracking-wider group-hover:text-tertiary transition-colors cursor-pointer" onClick={() => handleStepClick(step)}>{step.title}</h3>
                    {step.subtitle && <span className="text-[10px] text-secondary/60 uppercase tracking-widest block mb-3 font-medium cursor-pointer" onClick={() => handleStepClick(step)}>{step.subtitle}</span>}
                    
                    <div className="max-w-[180px] cursor-pointer" onClick={() => handleStepClick(step)}>
                      <p className="text-[11px] text-muted-foreground leading-relaxed opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                        {step.desc}
                      </p>
                    </div>
                  </div>

                {/* Animated Connectors */}
                {index < steps.length - 1 && (
                  <div className={cn(
                    "absolute pointer-events-none z-0 flex items-center justify-center",
                    arrowType === 'right' && "top-16 -right-[75%] w-full h-1",
                    arrowType === 'left' && "top-16 -left-[75%] w-full h-1",
                    arrowType === 'down' && "top-32 left-1/2 -translate-x-1/2 w-1 h-32"
                  )}>
                    <div className={cn(
                      "relative bg-white/[0.03]",
                      (arrowType === 'right' || arrowType === 'left') ? "w-32 h-[1px]" : "w-[1px] h-32"
                    )}>
                      {/* Flow Pulse */}
                      <motion.div
                        initial={{ 
                          x: arrowType === 'right' ? "-100%" : arrowType === 'left' ? "100%" : 0,
                          y: arrowType === 'down' ? "-100%" : 0
                        }}
                        animate={{ 
                          x: arrowType === 'right' ? "200%" : arrowType === 'left' ? "-200%" : 0,
                          y: arrowType === 'down' ? "200%" : 0
                        }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                        className={cn(
                          "absolute bg-accent/40 shadow-[0_0_15px_hsl(var(--color-accent))]",
                          (arrowType === 'right' || arrowType === 'left') ? "h-full w-16" : "w-full h-16"
                        )}
                      />
                      
                      {/* Arrow Head */}
                      <div className={cn(
                        "absolute text-tertiary/60",
                        arrowType === 'right' && "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",
                        arrowType === 'left' && "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",
                        arrowType === 'down' && "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2"
                      )}>
                        {arrowType === 'right' && <ChevronRight className="w-4 h-4" />}
                        {arrowType === 'left' && <ChevronLeft className="w-4 h-4" />}
                        {arrowType === 'down' && <ChevronDown className="w-4 h-4" />}
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>


        {/* Mobile View - Simplified Timeline */}
        <div className="lg:hidden relative border-l border-white/10 ml-6 space-y-16 py-8">
          {steps.map((step, index) => (
            <motion.div 
              key={step.id} 
              className="relative pl-12 group"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="absolute -left-[5px] top-4 w-2.5 h-2.5 rounded-full bg-card border border-white/20 group-hover:bg-accent transition-colors" />
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-card border border-white/5 flex items-center justify-center">
                    <MachineAnimation type={step.animation || ''} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-tertiary mb-1 block">STEP {index + 1}</span>
                    <h3 className="text-lg font-bold text-white leading-tight">{step.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Step Popup */}
        <StepPopup step={selectedStep} isOpen={!!selectedStep} onClose={handleClosePopup} />
      </div>
    </section>
  );
}
