import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="about" className="py-32 bg-black text-white">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-6">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-white/40">Industrial Context</span>
              <h2 className="text-6xl md:text-7xl font-display font-black leading-[0.9] tracking-tighter text-white">
                INDIA IS BUILDING <br/> <span className="text-white/20 italic">FASTER THAN EVER.</span>
              </h2>
              <div className="h-[1px] w-24 bg-white/20" />
              <p className="text-2xl font-light leading-tight text-white/80 max-w-xl">
                As India expands, its cities rise higher and its infrastructure stretches wider. Homes, hospitals, institutions, and industries are being created at an unprecedented pace.
              </p>
            </motion.div>
          </div>
          
          <div className="lg:col-span-6 flex flex-col justify-end space-y-12">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xl text-white/40 leading-relaxed"
            >
              Every structure rests on materials that are rarely questioned. For decades, construction depended on what was available—not because it was ideal, but because it was necessary.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest font-black text-white/60">History</span>
                <p className="text-sm text-white/40 leading-relaxed">The consequences of this approach were not immediate. They moved slowly, dispersing beyond their point of origin.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest font-black text-white/60">Transition</span>
                <p className="text-sm text-white/40 leading-relaxed">Development was never the issue. The absence of alternatives was. India could not slow down.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-40 p-20 bg-zinc-900/40 border border-white/5 relative group overflow-hidden rounded-2xl">
          <div className="relative z-10 max-w-4xl">
            <h3 className="text-4xl md:text-5xl font-display font-black mb-8 tracking-tighter uppercase text-white">
              The question was never whether construction should happen—but whether it could happen <span className="text-white/20">differently.</span>
            </h3>
            <div className="flex items-center gap-6">
              <div className="w-12 h-[1px] bg-white/20" />
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold text-white/40">Strategic Redesign</span>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-black border-l border-white/10 transition-transform duration-1000 group-hover:translate-x-full" />
        </div>
      </div>
    </section>
  );
}