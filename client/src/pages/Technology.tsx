import { motion } from "framer-motion";
import { Cpu, Zap, Wind, BarChart3, Target, Leaf, RefreshCw, Layers } from "lucide-react";
import Navbar from "@/components/Navbar";
import industryProductionVideo from "@assets/6000286_Industry_Production_1280x720.mov";

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
    <div className="bg-[#EEF1F2] min-h-screen text-[#1b1b1b]">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          {/* Hero Section */}
          <div className="relative mb-24 overflow-hidden rounded-3xl border border-[#6B6B6B]/20 min-h-[360px] md:min-h-[420px]">
            <div className="absolute inset-0 z-0">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              >
                <source src={industryProductionVideo} type="video/quicktime" />
                <source src={industryProductionVideo} />
              </video>
            </div>
            <div className="absolute inset-0 z-10 bg-[#EEF1F2]/72" />

            <div className="relative z-20 p-8 md:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-7xl font-display font-black mb-6 text-[#2F4858]"
              >
                Advanced <br /> Processing <br /> Technology
              </motion.h1>
              <p className="text-[#4E4E4E] text-lg max-w-2xl">
                Cutting-edge systems designed for maximum efficiency and minimal environmental impact.
              </p>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {features.map((feature, i) => (
              <div key={i} className="p-8 bg-[#F4F6F7] rounded-2xl border border-[#6B6B6B]/20 hover:border-[#2F4858]/40 transition-all duration-500 group">
                <div className="w-12 h-12 bg-white border border-[#6B6B6B]/30 rounded-xl flex items-center justify-center mb-8 group-hover:border-[#2F4858]/50 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#2F4858]/70 group-hover:text-[#2F4858] transition-colors" />
                </div>
                <h3 className="text-xl font-bold mb-4 text-[#2F4858]">{feature.title}</h3>
                <p className="text-sm text-[#6B6B6B] leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>

          {/* TPH Line Section */}
          <div className="grid lg:grid-cols-2 gap-20 mb-32 items-center">
            <div>
              <h2 className="text-4xl font-display font-black mb-8 italic text-[#2F4858]">550 TPH Super Primary Line</h2>
              <p className="text-[#6B6B6B] mb-12 leading-relaxed">
                Our super primary line handles 550 tons per hour with precision engineering and intelligent automation. With 800+ TPH total capacity across the facility, every component is designed for maximum throughput while maintaining strict product consistency.
              </p>
              
              <ul className="space-y-6">
                {[
                  "Primary crushing with variable speed control",
                  "Secondary processing with particle size optimization",
                  "Tertiary refinement for premium product quality",
                  "Automated packaging and distribution systems"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-sm text-[#6B6B6B]">
                    <div className="w-1.5 h-1.5 bg-[#2F4858] rounded-full" />
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
                <div key={i} className="p-8 bg-white rounded-2xl border border-[#6B6B6B]/20">
                  <p
                    className={
                      "text-2xl font-bold mb-2 " +
                      (stat.label === "Energy Reduction" || stat.label === "Dust Capture"
                        ? "text-[#4C7A67]"
                        : "text-[#2F4858]")
                    }
                  >
                    {stat.value}
                  </p>
                  <p className="text-xs text-[#6B6B6B]">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Future Ready Section */}
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-4xl font-display font-black mb-8 text-[#2F4858]">Future-Ready Technology</h2>
            <p className="text-[#6B6B6B] mb-12">
              Our technology platform is designed for continuous improvement and adaptation. We invest heavily in R&D to ensure our systems remain at the forefront of sustainable processing technology.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "IoT Integration", desc: "Real-time monitoring and predictive maintenance", icon: RefreshCw },
                { title: "AI Optimization", desc: "Machine learning for process efficiency", icon: Target },
                { title: "Remote Management", desc: "Cloud-based system control and analytics", icon: Layers }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-[#F4F6F7] rounded-2xl border border-[#6B6B6B]/20 flex flex-col items-center">
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-widest text-[#2F4858]">{item.title}</h4>
                  <p className="text-xs text-[#6B6B6B]">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 border-2 border-[#2F4858] text-[#2F4858] font-bold rounded-full hover:bg-[#2F4858] hover:text-white transition-colors">
              Request Technical Specifications
            </button>
          </div>
        </div>
      </main>

      <footer className="py-32 bg-[#F4F6F7] text-[#1b1b1b] border-t border-[#6B6B6B]/20">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#2F4858] rounded-sm transform rotate-45" />
                <span className="font-display font-bold text-lg tracking-tight text-[#2F4858] uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="text-sm text-[#6B6B6B] leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2F4858]/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2F4858]/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">M-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">P-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">Aggregates</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">Technology</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">Impact</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] hover:text-[#2F4858] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B] mb-6">Stay Updated</h3>
              <p className="text-sm text-[#6B6B6B] mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white border border-[#6B6B6B]/30 rounded-sm text-sm text-[#1b1b1b] placeholder-[#6B6B6B]/70 focus:outline-none focus:border-[#2F4858] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 border-2 border-[#2F4858] text-[#2F4858] font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#2F4858] hover:text-white transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-[#6B6B6B]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                <a href="#" className="hover:text-[#2F4858] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#2F4858] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#2F4858] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
