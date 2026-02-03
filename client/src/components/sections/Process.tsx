import { motion } from "framer-motion";

export default function Process() {
  const steps = [
    { 
      id: "01", 
      title: "Intake", 
      desc: "Granite waste collection and digital assessment.",
      details: "Stage 1: Bulk screening"
    },
    { 
      id: "02", 
      title: "Recovery", 
      desc: "Multi-stage crushing and washing cycles.",
      details: "Stage 2: Precision breaking"
    },
    { 
      id: "03", 
      title: "Washing", 
      desc: "Zero liquid discharge filtration systems.",
      details: "Stage 3: High-pressure purification"
    },
    { 
      id: "04", 
      title: "Grading", 
      desc: "Industry-standard material certification.",
      details: "Stage 4: Quality grading"
    }
  ];

  return (
    <section id="process" className="py-32 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-24 gap-12">
          <div className="max-w-2xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-6 block">System Architecture</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter">
              CLOSED-LOOP <br/> <span className="text-muted-foreground">RECYCLING.</span>
            </h2>
          </div>
          <p className="text-xl font-light text-muted-foreground max-w-sm border-l border-border pl-8 py-4">
            Our recovery system transforms granite waste into usable construction materials through engineering discipline.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
          {steps.map((step, idx) => (
            <motion.div 
              key={step.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="p-12 bg-white hover:bg-zinc-50 transition-colors duration-500 group relative overflow-hidden"
            >
              <div className="mb-12 flex justify-between items-center">
                <span className="text-4xl font-display font-black text-border group-hover:text-foreground transition-colors">
                  {step.id}
                </span>
                <div className="w-8 h-8 rounded-full border border-border group-hover:border-foreground flex items-center justify-center transition-colors">
                  <div className="w-1.5 h-1.5 bg-foreground scale-0 group-hover:scale-100 transition-transform" />
                </div>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-6 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-12 leading-relaxed">
                {step.desc}
              </p>
              
              <div className="mt-auto">
                <span className="text-[10px] font-mono uppercase tracking-widest font-bold opacity-40 group-hover:opacity-100 transition-opacity">
                  {step.details}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-border pb-12">
          <div className="flex items-center gap-8">
            <div className="w-16 h-16 border border-border flex items-center justify-center">
              <div className="w-2 h-2 bg-foreground animate-ping" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest font-bold">System Status</p>
              <p className="text-xl font-display font-bold">OPTIMAL RECOVERY ACTIVE</p>
            </div>
          </div>
          <div className="max-w-md text-right">
            <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground leading-relaxed">
              OPERATING WITHIN CONTROLLED PARAMETERS TO ENSURE MAXIMUM MATERIAL CONSISTENCY AND ENVIRONMENTAL INTEGRITY.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}