import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-bg.png" 
          alt="Granite Texture" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      </div>

      <div className="container relative z-10 px-6 pt-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-4 py-1.5 border border-primary/30 bg-primary/10 rounded-full"
          >
            <span className="text-primary text-xs font-mono uppercase tracking-widest">
              Precision Granite Recovery
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.9] text-white tracking-tight"
          >
            TRANSFORMING <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
              GRANITE WASTE
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Into high-quality construction materials through controlled, closed-loop recovery systems.
            <span className="block mt-4 text-white font-medium">
              Built for scale. Designed for responsibility.
            </span>
          </motion.p>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-12 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          >
            {['Compliant', 'Scalable', 'Future-ready'].map((item, i) => (
              <div key={item} className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm font-mono uppercase tracking-wider text-gray-400">
                  {item}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
}