import { motion } from "framer-motion";
import roadJunctionVideo from "@assets/458388_Road_Junction_1280x720.mov";
import miningVideo from "@/assets/videos/mining-extraction.mp4";

export default function Philosophy() {
  return (
    <section id="about" className="relative z-0 overflow-hidden py-32 text-white">
      <div className="absolute inset-0 z-0">
        <video
          className="h-full w-full object-cover opacity-55"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={roadJunctionVideo} type="video/quicktime" />
          <source src={roadJunctionVideo} />
          <source src={miningVideo} type="video/mp4" />
        </video>
      </div>
      <div className="absolute inset-0 z-10 bg-black/62" />

      <div className="container relative z-20 px-6 mx-auto">
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
                As India expands, its cities rise higher and its infrastructure stretches wider. Homes, hospitals, institutions, and industries are being built at an unprecedented pace—reshaping landscapes faster than they can recover.
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
              Every structure stands on materials that are rarely questioned. For decades, construction relied on what was available—not because it was ideal, but because it was the only viable choice at scale.
            </motion.p>
            
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest font-black text-white/60">History</span>
                <p className="text-sm text-white/40 leading-relaxed">The consequences weren't immediate. They accumulated quietly—spreading far beyond their point of origin.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-mono uppercase tracking-widest font-black text-white/60">Transition</span>
                <p className="text-sm text-white/40 leading-relaxed">Development was never the problem. The absence of alternatives was. And India could not afford to slow down.</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
