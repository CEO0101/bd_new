import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[850px] flex items-center bg-white overflow-hidden pt-20">
      <div className="absolute inset-0 grid-pattern pointer-events-none" />
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="max-w-6xl">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-4 mb-12"
          >
            <div className="h-[1px] w-16 bg-foreground" />
            <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold">
              Precision Granite Recovery
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-7xl md:text-9xl lg:text-[11rem] font-display font-black leading-[0.8] mb-12 tracking-[-0.04em]"
          >
            PRECISION <br />
            RECOVERY.
          </motion.h1>

          <div className="grid lg:grid-cols-2 gap-20 items-end">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              <p className="text-2xl md:text-3xl text-foreground font-light leading-tight max-w-xl">
                Transforming granite waste into high-quality construction materials through controlled, closed-loop recovery systems.
              </p>
              
              <div className="flex gap-12 pt-8 border-t border-border">
                {['Compliant', 'Scalable', 'Future-ready'].map((item) => (
                  <div key={item} className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground block">Standard</span>
                    <span className="text-sm font-bold uppercase">{item}</span>
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
              <div className="aspect-[16/9] bg-muted grayscale overflow-hidden">
                <img 
                  src="/hero-bg.png" 
                  alt="Granite Texture" 
                  className="w-full h-full object-cover opacity-90 transition-transform duration-2000 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 p-10 bg-white border border-border shadow-2xl max-w-xs">
                <p className="text-sm font-bold leading-relaxed italic">
                  "Built for scale. Designed for responsibility."
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-12 right-12 flex items-center gap-4">
        <span className="text-[10px] font-mono uppercase tracking-widest rotate-90 origin-right translate-x-12 translate-y-4">Scroll to explore</span>
        <div className="w-[1px] h-32 bg-border" />
      </div>
    </section>
  );
}