import { motion } from "framer-motion";
import { Cpu, Zap, Wind, BarChart3, Target, Leaf, RefreshCw, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Technology() {
  const features = [
    {
      title: "Automated Sorting",
      desc: "AI-powered optical sorting systems that identify and separate different material types with 99.5% accuracy, ensuring optimal material recovery.",
      icon: Cpu
    },
    {
      title: "Energy Efficiency",
      desc: "Advanced motor systems and optimized processing flows reduce energy consumption by 40% compared to traditional granite processing methods.",
      icon: Zap
    },
    {
      title: "Dust Control",
      desc: "Multi-stage dust collection systems capture 99.9% of particulates, maintaining air quality and protecting worker health.",
      icon: Wind
    },
    {
      title: "Quality Monitoring",
      desc: "Real-time quality analysis systems ensure consistent product specifications and immediate process adjustments when needed.",
      icon: BarChart3
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          {/* Hero Section */}
          <div className="mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black mb-6"
            >
              Advanced <br /> Processing <br /> Technology
            </motion.h1>
            <p className="text-white/60 text-lg max-w-2xl">
              Cutting-edge systems designed for maximum efficiency and minimal environmental impact.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {features.map((feature, i) => (
              <div key={i} className="p-8 bg-zinc-900/40 rounded-2xl border border-white/5 hover:border-white/20 transition-all duration-500 group">
                <div className="w-12 h-12 bg-black border border-white/10 rounded-xl flex items-center justify-center mb-8 group-hover:border-white/30 transition-colors">
                  <feature.icon className="w-6 h-6 text-white/40 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* TPH Line Section */}
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
            <div>
              <h2 className="text-4xl font-display font-black mb-8 italic">550 TPH Super Primary Line</h2>
              <p className="text-white/60 mb-12 leading-relaxed">
                Our super primary line handles 550 tons per hour with precision engineering and intelligent automation. With 800+ TPH total capacity across the facility, every component is designed for maximum throughput while maintaining strict product consistency.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Primary crushing with variable speed control",
                  "Secondary processing with particle size optimization",
                  "Tertiary refinement for premium product quality",
                  "Automated packaging and distribution systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-white/60">
                    <div className="w-1.5 h-1.5 bg-[#A8C3B1] rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Sorting Accuracy", value: "99.5%" },
                { label: "Energy Reduction", value: "40%" },
                { label: "Dust Capture", value: "99.9%" },
                { label: "Automated Operation", value: "24/7" }
              ].map((stat, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
                  <p className="text-2xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xs text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Ready Section */}
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-4xl font-display font-black mb-8">Future-Ready Technology</h2>
            <p className="text-white/60 mb-12">
              Our technology platform is designed for continuous improvement and adaptation. We invest heavily in R&D to ensure our systems remain at the forefront of sustainable processing technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "IoT Integration", desc: "Real-time monitoring and predictive maintenance", icon: RefreshCw },
                { title: "AI Optimization", desc: "Machine learning for process efficiency", icon: Target },
                { title: "Remote Management", desc: "Cloud-based system control and analytics", icon: Layers }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 flex flex-col items-center">
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-[#A8C3B1] text-black font-bold rounded-full hover:bg-[#97b2a0] transition-colors">
              Request Technical Specifications
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
