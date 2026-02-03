import { motion, Variants } from "framer-motion";

export default function Philosophy() {
  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section id="philosophy" className="py-24 md:py-32 relative overflow-hidden">
      <div className="container px-6 mx-auto">
        
        {/* Intro Context */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-24 mb-32">
          <div className="md:col-span-5">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="sticky top-32"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                India is building <span className="text-primary">faster than ever.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                How it builds now matters more than ever before. As India expands, its cities rise higher and its infrastructure stretches wider.
              </p>
              <div className="h-1 w-20 bg-primary/50" />
            </motion.div>
          </div>
          <div className="md:col-span-7 space-y-12">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="pl-8 border-l border-white/10"
            >
              <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
                "Every structure rests on materials that are rarely questioned. For decades, construction depended on what was available—not because it was ideal, but because it was necessary."
              </p>
            </motion.div>
            
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="prose prose-invert prose-lg text-muted-foreground"
            >
              <p>
                The consequences of this approach were not immediate. They moved slowly, dispersing beyond their point of origin, settling into systems far removed from the construction site itself. Over time, this became the background of growth.
              </p>
              <p className="font-mono text-sm uppercase tracking-wider text-primary pt-4">
                Familiar. Unexamined. Accepted.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Problem Section */}
        <div className="relative py-24 border-t border-white/5">
          <div className="absolute inset-0 industrial-grid opacity-30 pointer-events-none" />
          
          <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="inline-block text-primary font-mono text-sm uppercase tracking-widest mb-4"
            >
              The Hidden Cost
            </motion.span>
            
            <motion.h3 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-3xl md:text-5xl font-display font-bold text-white"
            >
              Some impacts are not loud.<br/>They are pervasive.
            </motion.h3>

            <motion.p 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Material extraction does not occur in isolation. It takes place within landscapes that support agriculture, water systems, and communities. When disruption occurs at this depth, its effects do not remain contained.
            </motion.p>
          </div>
        </div>

        {/* Transition & Core Idea */}
        <div className="grid md:grid-cols-2 gap-0 border border-white/10 bg-card/30 mt-24">
          <div className="p-12 md:p-16 border-b md:border-b-0 md:border-r border-white/10 flex flex-col justify-center">
            <h3 className="text-2xl font-display font-bold text-white mb-4">The Old Way</h3>
            <p className="text-muted-foreground mb-8">
              Development was never the issue. The absence of alternatives was. India could not slow down. Infrastructure had to be built.
            </p>
            <div className="mt-auto">
              <span className="block text-4xl font-display font-bold text-white/10">PAST</span>
            </div>
          </div>
          
          <div className="p-12 md:p-16 bg-primary/5 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 transition-all duration-700 group-hover:bg-primary/30" />
            
            <h3 className="text-2xl font-display font-bold text-white mb-4">The New Standard</h3>
            <p className="text-gray-300 mb-8 font-medium">
              Change does not begin with restraint. It begins with redesign. By working with what already exists rather than extending further into sensitive landscapes.
            </p>
            <div className="mt-auto">
              <span className="block text-4xl font-display font-bold text-primary/40">FUTURE</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}