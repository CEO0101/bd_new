import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Clock, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

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

  const engineeredOutputs = [
    {
      id: "01",
      name: "M-Sand",
      subtitle: "Manufactured Sand",
      size: "0.5-2mm",
      keyAttributes: [
        "Fine fraction engineered for mix performance",
        "Consistent grading and shape",
        "Designed for concrete, mortars, plaster",
      ],
      useCases: ["Ready-mix concrete", "Masonry mortars", "Plaster & finishing"],
    },
    {
      id: "02",
      name: "G-Sand",
      subtitle: "Graded Aggregates",
      size: "10-20mm (controlled fractions)",
      keyAttributes: [
        "Controlled size fractions (e.g., 10-20mm)",
        "Engineered shape",
        "Consistent interlock performance",
      ],
      useCases: ["Heavy construction", "Road bases", "Railway ballast"],
    },
    {
      id: "03",
      name: "Granite Fines",
      subtitle: "Specialised Fine Fractions",
      size: "0.075-0.5mm",
      keyAttributes: [
        "Ultrafinely controlled fractions",
        "Designed for fillers and specialised mixes",
      ],
      useCases: ["Asphalt fillers", "Industrial blocks", "High-density layers"],
    },
    {
      id: "04",
      name: "Granite Dust / Micro",
      subtitle: "Micro Fraction Output",
      size: "<0.075mm",
      keyAttributes: [
        "Micro fractions",
        "Applied where fine particle integration improves stability",
      ],
      useCases: ["Soil stabilisation", "Specialised manufacturing inputs"],
    },
  ];

  const useCaseMatrix = [
    {
      product: "Manufactured Sand",
      primaryUse: "Concrete",
      secondaryUse: "Plaster mortar",
    },
    {
      product: "Graded Aggregates",
      primaryUse: "Roads & foundations",
      secondaryUse: "Railway & heavy civils",
    },
    {
      product: "Granite Fines",
      primaryUse: "Asphalt filler",
      secondaryUse: "Industrial blends",
    },
    {
      product: "Granite Dust",
      primaryUse: "Soil stabilisation",
      secondaryUse: "Secondary mixes",
    },
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
                  <div key={i} className="p-6 premium-blur-dark bg-zinc-900/50 rounded-xl border border-white/5">
                    <p className="text-2xl font-bold mb-1">{stat.value}</p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {facilityStats.map((stat, i) => (
                <div key={i} className="p-8 premium-blur-dark bg-zinc-900/50 rounded-2xl border border-white/5 flex flex-col justify-center">
                  <p className="text-3xl font-bold mb-2">{stat.value}</p>
                  <p className="text-sm text-white/40">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Engineered Outputs */}
          <div className="mb-32">
            <div className="mb-12 max-w-3xl">
              <span className="mb-5 block text-[10px] font-mono font-bold uppercase tracking-[0.3em] text-white/40">
                Engineered Outputs
              </span>
              <h2 className="text-5xl font-display font-black tracking-tighter text-white md:text-7xl">
                USE-CASE BASED <br /> <span className="text-white/25">MATERIALS.</span>
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-white/60 md:text-base">
                Use-case based outputs, not a generic product catalog. Each material profile is engineered
                for repeatable field performance.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {engineeredOutputs.map((output, i) => (
                <motion.article
                  key={output.name}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-white/10 bg-zinc-900/45 p-8 premium-blur-dark"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-white/40">
                        {output.id}
                      </span>
                      <h3 className="mt-2 text-3xl font-display font-black tracking-tight text-white">
                        {output.name}
                      </h3>
                      <p className="mt-2 text-xs font-mono uppercase tracking-[0.18em] text-[#A8C3B1]">
                        {output.subtitle}
                      </p>
                    </div>
                    <span className="rounded-full border border-white/15 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.18em] text-white/50">
                      {output.size}
                    </span>
                  </div>

                  <div className="mt-7 grid gap-6 lg:grid-cols-2">
                    <div>
                      <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                        Key attributes
                      </p>
                      <ul className="space-y-2">
                        {output.keyAttributes.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A8C3B1]" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="mb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">
                        Use-cases
                      </p>
                      <ul className="space-y-2">
                        {output.useCases.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm leading-relaxed text-white/70">
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-white/45" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-white/10 bg-zinc-900/35 p-8 premium-blur-dark">
              <h3 className="text-2xl font-display font-black text-white">Why These Outputs Matter</h3>
              <p className="mt-4 max-w-5xl text-sm leading-relaxed text-white/65 md:text-base">
                The BlackDiamond system does more than crush stone. It manages fragmentation, flow
                behaviour, fines control, and sizing precision so each product performs exactly as intended
                in its application. This is how engineering logic translates into real infrastructure reliability.
              </p>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/35 p-8 premium-blur-dark">
              <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
                <h3 className="text-2xl font-display font-black text-white">Material & Use-Case Matrix</h3>
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-white/40">
                  Primary vs Secondary Fit
                </p>
              </div>

              <div className="mt-6 overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse">
                  <thead>
                    <tr className="border-b border-white/10 text-left">
                      <th className="pb-3 pr-4 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">Product</th>
                      <th className="pb-3 pr-4 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">Primary Use</th>
                      <th className="pb-3 text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">Secondary Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {useCaseMatrix.map((row) => (
                      <tr key={row.product} className="border-b border-white/5 last:border-0">
                        <td className="py-4 pr-4 text-sm font-semibold text-white">{row.product}</td>
                        <td className="py-4 pr-4 text-sm text-white/70">{row.primaryUse}</td>
                        <td className="py-4 text-sm text-white/70">{row.secondaryUse}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
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
                  className="group premium-blur-dark bg-zinc-900/50 p-12 flex flex-col md:flex-row items-center gap-12 border border-white/5 hover:border-white/20 transition-all duration-500 rounded-2xl"
                >
                  <div className="w-full md:w-1/3 aspect-square bg-black grayscale transition-all duration-700 group-hover:grayscale-0 overflow-hidden border border-white/5 rounded-xl">
                    <img
                      src="/materials.png"
                      alt={product.name}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover opacity-60"
                    />
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
                <div key={i} className="p-8 premium-blur-dark bg-zinc-900/50 rounded-2xl border border-white/5">
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

      <SiteFooter tone="dark" />
    </div>
  );
}
