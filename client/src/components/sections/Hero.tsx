import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[800px] flex items-center bg-white overflow-hidden">
      {/* Structural Background Lines */}
      <div className="absolute inset-0 z-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-foreground" />
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-foreground" />
        <div className="absolute top-2/3 left-0 w-full h-[1px] bg-foreground" />
      </div>

      <div className="container relative z-10 px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-10">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-4"
            >
              <div className="h-[2px] w-12 bg-primary" />
              <span className="text-primary text-xs font-mono uppercase tracking-[0.3em] font-bold">
                Precision Granite Recovery
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-display font-bold leading-[0.85] text-foreground tracking-tighter"
            >
              TRANSFORM <br />
              <span className="text-primary">WASTE</span> <br />
              TO VALUE
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl leading-tight font-light"
            >
              Transforming granite waste into high-quality construction materials through controlled, closed-loop recovery systems.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-x-12 gap-y-6 pt-8"
            >
              {['Compliant', 'Scalable', 'Future-ready'].map((item) => (
                <div key={item} className="group cursor-default">
                  <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground group-hover:text-primary transition-colors">
                    {item}
                  </span>
                  <div className="h-[1px] w-0 group-hover:w-full bg-primary transition-all duration-300" />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="aspect-[3/4] bg-muted border border-border relative group overflow-hidden"
            >
              <img 
                src="/hero-bg.png" 
                alt="Granite Texture" 
                className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay" />
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/90 backdrop-blur border border-border">
                <span className="text-[10px] font-mono uppercase tracking-widest text-primary block mb-2">Core Statement</span>
                <p className="text-sm font-bold text-foreground">Built for scale. Designed for responsibility.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}