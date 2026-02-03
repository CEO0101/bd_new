import { motion } from "framer-motion";

export default function Process() {
  return (
    <section id="process" className="py-24 bg-black relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container px-6 mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto lg:mx-0">
              <div className="absolute inset-0 border border-primary/20 rounded-full animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-8 border border-white/5 rounded-full animate-[spin_40s_linear_infinite_reverse]" />
              <img 
                src="/process-loop.png" 
                alt="Closed Loop Process" 
                className="w-full h-full object-contain relative z-10 drop-shadow-2xl"
              />
              
              {/* Floating tech badges */}
              <div className="absolute top-0 right-10 bg-card border border-white/10 px-3 py-1 text-xs font-mono text-primary backdrop-blur-md">
                RECOVERY: 98%
              </div>
              <div className="absolute bottom-10 left-0 bg-card border border-white/10 px-3 py-1 text-xs font-mono text-primary backdrop-blur-md">
                WASTE: 0%
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 border border-white/10 rounded-full bg-white/5">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-widest text-white/70">
                System Architecture
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Closed-Loop <br/>
              <span className="text-gray-500">Recycling Process</span>
            </h2>

            <p className="text-lg text-muted-foreground leading-relaxed">
              Our recovery system transforms granite waste into usable construction materials through a tightly controlled, multi-stage process.
            </p>

            <div className="space-y-6 pt-4">
              {[
                { title: "Intake & Assessment", desc: "Rigorous quality check of raw granite waste." },
                { title: "Precision Crushing", desc: "Multi-stage breakdown to exact specifications." },
                { title: "Washing & Screening", desc: "Removing impurities for construction-grade purity." },
                { title: "Recovery & Reuse", desc: "100% material utilization with zero discharge." }
              ].map((step, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 font-mono text-xs text-primary group-hover:bg-primary group-hover:text-black transition-colors">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="text-white font-medium mb-1 group-hover:text-primary transition-colors">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}