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
      name: "Tiles & Pavers",
      tagline: "Durable, purpose-driven reuse",
      desc: "Heavy-duty pavers crafted from recovered granite slurry and fines."
    }
  ];

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-12 mb-20 items-end">
          <div className="lg:col-span-8">
            <span className="text-primary font-mono text-sm uppercase tracking-widest mb-4 block">Product Suite</span>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-foreground tracking-tight">
              Recycled <br/> <span className="text-gray-400">Construction Materials</span>
            </h2>
          </div>
          <div className="lg:col-span-4 border-l border-border pl-8 py-2">
            <p className="text-muted-foreground text-sm">
              High-quality materials recovered through controlled granite processing, suitable for large-scale construction use.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-border border border-border">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              whileHover={{ x: 10 }}
              className="bg-white p-10 group relative transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-8">
                <span className="text-xs font-mono text-primary font-bold">CATALOGUE_{product.id}</span>
                <div className="w-10 h-10 border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                  <ArrowUpRight className="w-4 h-4 group-hover:text-white transition-colors" />
                </div>
              </div>
              
              <h3 className="text-3xl font-display font-bold mb-4">
                {product.name}
              </h3>
              
              <p className="text-sm font-bold text-primary mb-6 uppercase tracking-wider">
                {product.tagline}
              </p>
              
              <p className="text-muted-foreground leading-relaxed max-w-sm">
                {product.desc}
              </p>

              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-b border-border pb-8">
          <p className="text-sm font-mono text-muted-foreground">Each output is designed to meet functional requirements.</p>
          <div className="flex gap-4 mt-6 md:mt-0">
            <div className="px-4 py-2 bg-muted text-[10px] font-mono border border-border">ISO CERTIFIED</div>
            <div className="px-4 py-2 bg-muted text-[10px] font-mono border border-border">LAB TESTED</div>
          </div>
        </div>
      </div>
    </section>
  );
}