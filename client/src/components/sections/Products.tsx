import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "01",
      name: "M-SAND",
      tagline: "MANUFACTURED SAND",
      desc: "Engineered for consistency and strength in high-grade concrete applications."
    },
    {
      id: "02",
      name: "P-SAND",
      tagline: "PLASTERING SAND",
      desc: "Optimised for smooth finishes and superior workability for plastering."
    },
    {
      id: "03",
      name: "AGGREGATES",
      tagline: "STRUCTURAL SUPPORT",
      desc: "Reliable crushed stone materials for robust building foundations."
    },
    {
      id: "04",
      name: "PAVERS",
      tagline: "RECYCLED GRANITE",
      desc: "Heavy-duty durable pavers crafted from recovered granite slurry."
    }
  ];

  return (
    <section id="products" className="py-32 bg-black text-white relative border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-6 block text-white/40">Output Catalogue</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
              RECOVERED <br/> <span className="text-white/20">MATERIALS.</span>
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-zinc-900/50 p-12 flex flex-col md:flex-row items-center gap-12 border border-white/5 hover:border-white/20 transition-all duration-500 rounded-2xl"
            >
              <div className="w-full md:w-1/3 aspect-square bg-black grayscale transition-all duration-700 group-hover:grayscale-0 overflow-hidden border border-white/5 rounded-xl">
                <img src="/materials.png" alt={product.name} className="w-full h-full object-cover opacity-60" />
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-white/40">{product.id}</span>
                  <ArrowUpRight className="w-4 h-4 text-white/20 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-4xl font-display font-black tracking-tight text-white">{product.name}</h3>
                <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-white/20">{product.tagline}</p>
                <p className="text-sm text-white/60 leading-relaxed">{product.desc}</p>
                <div className="pt-4 border-t border-white/5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 group-hover:text-white group-hover:underline cursor-pointer transition-colors">View Technical Specs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}