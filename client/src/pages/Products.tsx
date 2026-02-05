import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";

export default function Products() {
  const stats = [
    { label: "Purity Guarantee", value: "99.9%", icon: ShieldCheck },
    { label: "Quality Certified", value: "ISO 9001", icon: ShieldCheck },
    { label: "Quality Monitoring", value: "24/7", icon: Clock },
    { label: "Traceability", value: "100%", icon: CheckCircle2 },
  ];

  const facilityStats = [
    { label: "Total Processing Capacity", value: "800+ TPH" },
    { label: "Production Facility", value: "6 Acres" },
    { label: "Material Recovery", value: "95%" },
    { label: "Landfill Waste", value: "0%" },
  ];

  const products = [
    {
      name: "Granite Aggregates",
      badge: "Premium",
      size: "10-20mm",
      features: ["Precise Sizing", "Moisture Control"],
      uses: ["Construction", "Road Building", "Railway Ballast"],
      img: "/products/aggregates.png"
    },
    {
      name: "Granite Sand",
      badge: "Fine",
      size: "0.5-2mm",
      features: ["Precise Sizing", "Moisture Control"],
      uses: ["Concrete Mix", "Mortar", "Plastering"],
      img: "/products/sand.png"
    },
    {
      name: "Granite Fines",
      badge: "Ultra-Fine",
      size: "0.075-0.5mm",
      features: ["Precise Sizing", "Moisture Control"],
      uses: ["Filler Material", "Asphalt", "Industrial Applications"],
      img: "/products/fines.png"
    },
    {
      name: "Granite Dust",
      badge: "Micro",
      size: "<0.075mm",
      features: ["Precise Sizing", "Moisture Control"],
      uses: ["Soil Stabilization", "Agriculture", "Manufacturing"],
      img: "/products/dust.png"
    }
  ];

  const catalogueProducts = [
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
    <div className="bg-black min-h-screen text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          {/* Hero Section */}
          <div className="mb-24">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-display font-black mb-6"
            >
              Premium Recycled <br /> Products
            </motion.h1>
            <p className="text-white/60 text-lg max-w-2xl">
              High-quality construction materials derived from sustainable granite recycling processes.
            </p>
          </div>

          {/* Quality Section */}
          <div className="grid lg:grid-cols-2 gap-20 mb-32">
            <div>
              <h2 className="text-4xl font-display font-black mb-8">Quality You Can Trust</h2>
              <p className="text-white/60 mb-12 leading-relaxed">
                Every product from Black Diamond Granites undergoes rigorous quality control to ensure it meets or exceeds industry standards. Our recycled materials offer the same performance characteristics as virgin materials while providing significant environmental benefits.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="p-6 bg-zinc-900/50 rounded-xl border border-white/5">
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facilityStats.map((stat, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5 flex flex-col justify-center">
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
            {products.map((product, i) => (
              <div key={i} className="bg-zinc-900/40 rounded-2xl border border-white/5 overflow-hidden group hover:border-white/20 transition-all duration-500">
                <div className="aspect-[4/3] bg-black relative p-6">
                  <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/5">
                    <span className="text-[10px] font-mono font-bold text-white/60">{product.badge}</span>
                  </div>
                  <div className="w-full h-full flex items-center justify-center grayscale group-hover:grayscale-0 transition-all duration-700">
                    <div className="w-24 h-24 bg-white/5 rounded-full animate-pulse" />
                  </div>
                </div>
                
                <div className="p-8 space-y-6">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{product.name}</h3>
                    <p className="text-xs text-white/40 font-mono">Size: {product.size}</p>
                  </div>
                  
                  <div className="flex gap-4">
                    {product.features.map((f, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                         <div className="w-1 h-1 bg-white/40 rounded-full" />
                         <span className="text-[10px] text-white/60 font-mono">{f}</span>
                      </div>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {product.uses.map((use, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-xs text-white/40">
                        <div className="w-1 h-1 bg-white/20 rounded-full" />
                        {use}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Output Catalogue Section (Moved from Landing Page) */}
          <div className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-start mb-24">
              <div className="max-w-3xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-6 block text-white/40">Output Catalogue</span>
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter text-white">
                  RECOVERED <br/> <span className="text-white/20">MATERIALS.</span>
                </h2>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {catalogueProducts.map((product, i) => (
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

          {/* Custom Solutions */}
          <div className="text-center max-w-4xl mx-auto mb-32">
            <h2 className="text-4xl font-display font-black mb-8">Custom Solutions Available</h2>
            <p className="text-white/60 mb-12">
              We understand that every project has unique requirements. Our team works closely with clients to develop customized product specifications and delivery schedules that meet your exact needs.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { title: "Custom Blending", desc: "Tailored material mixes for specific applications" },
                { title: "Bulk Packaging", desc: "Flexible packaging options for any volume" },
                { title: "Just-in-Time Delivery", desc: "Optimized logistics for project efficiency" }
              ].map((item, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 rounded-2xl border border-white/5">
                  <h4 className="text-sm font-bold mb-2 uppercase tracking-widest">{item.title}</h4>
                  <p className="text-xs text-white/40">{item.desc}</p>
                </div>
              ))}
            </div>

            <button className="px-10 py-4 bg-[#A8C3B1] text-black font-bold rounded-full hover:bg-[#97b2a0] transition-colors">
              Request Product Catalog
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

