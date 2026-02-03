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
    <section id="products" className="py-32 bg-zinc-50 relative border-t border-border">
      <div className="container px-6 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start mb-24">
          <div className="max-w-3xl">
            <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-6 block">Output Catalogue</span>
            <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter">
              RECOVERED <br/> <span className="text-zinc-400">MATERIALS.</span>
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
              className="group bg-white p-12 flex flex-col md:flex-row items-center gap-12 border border-border hover:border-foreground transition-all duration-500"
            >
              <div className="w-full md:w-1/3 aspect-square bg-zinc-100 grayscale transition-all duration-700 group-hover:grayscale-0 overflow-hidden">
                <img src="/materials.png" alt={product.name} className="w-full h-full object-cover opacity-80" />
              </div>
              
              <div className="flex-1 space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-[10px] font-mono font-black text-muted-foreground">{product.id}</span>
                  <ArrowUpRight className="w-4 h-4 text-zinc-300 group-hover:text-foreground transition-colors" />
                </div>
                <h3 className="text-4xl font-display font-black tracking-tight">{product.name}</h3>
                <p className="text-xs font-mono uppercase tracking-[0.2em] font-bold text-zinc-400">{product.tagline}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{product.desc}</p>
                <div className="pt-4 border-t border-zinc-100">
                  <span className="text-[10px] font-mono uppercase tracking-widest group-hover:underline cursor-pointer">View Technical Specs</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}