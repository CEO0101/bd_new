import { motion } from "framer-motion";
import miningVideo from "@/assets/videos/mining-extraction.mp4";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] flex items-center bg-black overflow-hidden pt-20">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-40 grayscale"
        >
          <source src={miningVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-linear-to-b from-black/60 via-transparent to-black" />
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-[1px] w-16 bg-white" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white">
              Precision Granite Recovery
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-8xl font-display font-black leading-[1.1] mb-12 tracking-[-0.04em] text-white"
          >
            India can now build without <br className="hidden md:block" /> destroying its land.
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-2xl">
                South India’s only super primary granite processing unit (800+ TPH total capacity) on a 6-acre integrated site. Built for a circular economy, it converts granite waste into high-quality construction materials through a closed-loop process. Reducing landfill impact, conserving natural resources, and meeting environmental standards.
              </p>
              
              <div className="flex gap-12 pt-8 border-t border-white/20">
                {['Compliant', 'Scalable', 'Future-ready'].map((item) => (
                  <div key={item} className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 block">Standard</span>
                    <span className="text-sm font-bold uppercase text-white">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="relative group"
            >
              <div className="aspect-[16/9] bg-zinc-900 overflow-hidden border border-white/10 rounded-lg">
                <img 
                  src="/hero-bg.png" 
                  alt="Granite Texture" 
                  className="w-full h-full object-cover opacity-60 transition-transform duration-2000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-10 bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl max-w-xs rounded-lg">
                <p className="text-sm font-bold leading-relaxed italic text-white">
                  "Built for scale. Designed for responsibility."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-widest rotate-90 origin-right translate-x-12 translate-y-4 text-white/40">Scroll to explore</span>
        <div className="w-[1px] h-32 bg-white/20" />
      </div>
    </section>
  );
}
