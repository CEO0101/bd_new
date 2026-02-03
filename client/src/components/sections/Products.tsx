import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Products() {
  const products = [
    {
      id: "01",
      name: "M-Sand",
      tagline: "Engineered for consistency and strength",
      desc: "High-grade manufactured sand designed to replace river sand in concrete and masonry work."
    },
    {
      id: "02",
      name: "P-Sand",
      tagline: "Optimised for plastering applications",
      desc: "Fine-grained sand ensuring smooth finishes and superior workability for plastering."
    },
    {
      id: "03",
      name: "CSB & Aggregates",
      tagline: "Reliable structural support materials",
      desc: "Crushed stone base and graded aggregates for robust road and building foundations."
    },
    {
      id: "04",
      name: "Recycled Tiles & Pavers",
      tagline: "Durable, purpose-driven reuse",
      desc: "Heavy-duty pavers crafted from recovered granite slurry and fines."
    }
  ];

  return (
    <section id="products" className="py-24 bg-background relative">
      <div className="container px-6 mx-auto">
        <div className="mb-16 md:flex justify-between items-end border-b border-white/10 pb-8">
          <div>
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-2 block">Output</span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white">
              Recycled Construction <br/> Materials
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md mt-6 md:mt-0">
            High-quality materials recovered through controlled granite processing, suitable for large-scale construction use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-card hover:bg-white/5 border border-white/5 hover:border-primary/50 transition-all duration-500 p-6 flex flex-col h-full"
            >
              <div className="mb-6 overflow-hidden h-48 w-full bg-black/50 rounded-sm relative">
                <img 
                  src="/materials.png" 
                  alt={product.name} 
                  className="w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 text-xs font-mono text-white border border-white/10">
                  {product.id}
                </div>
              </div>
              
              <h3 className="text-xl font-display font-bold text-white mb-2 group-hover:text-primary transition-colors">
                {product.name}
              </h3>
              <p className="text-xs text-primary font-mono uppercase tracking-wider mb-4 border-l-2 border-primary pl-2">
                {product.tagline}
              </p>
              <p className="text-sm text-muted-foreground mb-6 flex-grow leading-relaxed">
                {product.desc}
              </p>
              
              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-xs text-gray-400 group-hover:text-white transition-colors">
                <span>View Specs</span>
                <ArrowUpRight className="w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            "Each output is designed to meet functional requirements without extending further into natural landscapes."
          </p>
        </div>
      </div>
    </section>
  );
}