import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { 
      id: "01", 
      title: "Material Intake", 
      desc: "Granite waste is collected and assessed for recovery potential using high-precision sorting systems.",
      details: "Stage 1: Bulk screening and initial categorization."
    },
    { 
      id: "02", 
      title: "Precision Recovery", 
      desc: "Waste is processed through controlled multi-stage systems to maximize material recovery.",
      details: "Stage 2: Advanced crushing and washing cycles."
    },
    { 
      id: "03", 
      title: "Closed-Loop Washing", 
      desc: "Internal water management systems ensure zero liquid discharge and maximum purity.",
      details: "Stage 3: High-pressure filtration and recycling."
    },
    { 
      id: "04", 
      title: "Output Calibration", 
      desc: "Final materials are graded to industry-specific construction standards (M-Sand, P-Sand).",
      details: "Stage 4: Automated sizing and quality certification."
    }
  ];

  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="container px-6 mx-auto">
        <div className="max-w-3xl mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-mono text-sm uppercase tracking-widest block mb-4"
          >
            Operational Flow
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
            Closed-Loop <span className="text-primary">Recycling System</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our recovery system transforms granite waste into usable construction materials through a tightly controlled, multi-stage process.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-border">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-8 border-r border-b border-border hover:bg-muted group transition-colors duration-500 min-h-[400px] flex flex-col"
            >
              <div className="mb-8">
                <span className="text-6xl font-display font-black text-border group-hover:text-primary/20 transition-colors">
                  {step.id}
                </span>
              </div>
              
              <h3 className="text-xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground mb-8 flex-grow leading-relaxed">
                {step.desc}
              </p>
              
              <div className="pt-6 border-t border-border mt-auto">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                  {step.details}
                </span>
              </div>

              {/* Animated motion graphic element */}
              <motion.div 
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-4 right-4 w-12 h-12 bg-primary/10 rounded-full blur-xl group-hover:bg-primary/30 transition-colors"
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-8 bg-foreground text-background flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 border-2 border-primary animate-spin" style={{ animationDuration: '10s' }} />
            <p className="text-sm font-mono tracking-wide uppercase">
              System Health: Optimal • Precision Recovery Active
            </p>
          </div>
          <p className="text-xs text-background/60 max-w-md text-right">
            Each phase is designed to minimise disturbance, maximise recovery, and maintain material consistency.
          </p>
        </div>
      </div>
    </section>
  );
}