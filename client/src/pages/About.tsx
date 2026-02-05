import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";

export default function About() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl"
        >
          <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/30 mb-8 block">Our Identity</span>
          <h1 className="text-6xl md:text-8xl font-display font-black tracking-tighter mb-12">
            BLACK <br/> <span className="text-white/20">DIAMOND.</span>
          </h1>
          
          <div className="space-y-12 text-xl md:text-2xl font-light text-white/80 leading-relaxed">
            <p>
              Black Diamond is South India’s premier granite recovery and processing facility. Operating on a 6-acre integrated site, we represent a shift in how industrial waste is managed and valued.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white">Our Mission</h3>
                <p className="text-base text-white/40">To eliminate granite waste by converting it into high-value construction materials, fostering a true circular economy in the building industry.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white">Our Vision</h3>
                <p className="text-base text-white/40">To set the gold standard for resource recovery in India, ensuring that growth does not come at the cost of environmental integrity.</p>
              </div>
            </div>

            <div className="pt-20">
               <div className="p-12 bg-zinc-900 border border-white/5 rounded-2xl">
                 <h2 className="text-3xl font-display font-bold mb-6 italic">"Waste is only waste if we fail to see its potential."</h2>
                 <p className="text-sm font-mono uppercase tracking-widest text-white/20">— Precision Granite Recovery Leadership</p>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
      </main>
    </div>
  );
}
