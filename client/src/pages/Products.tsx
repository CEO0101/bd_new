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

      <footer className="py-32 bg-black text-white border-t border-white/10">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-white rounded-sm transform rotate-45" />
                <span className="font-display font-bold text-lg tracking-tight text-white uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="text-sm text-white/60 leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">M-Sand</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">P-Sand</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Aggregates</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Technology</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Impact</a></li>
                <li><a href="#" className="text-sm text-white/60 hover:text-white transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-white/40 mb-6">Stay Updated</h3>
              <p className="text-sm text-white/60 mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-sm text-sm text-white placeholder-white/40 focus:outline-none focus:border-white transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-white text-black font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-white/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-white/40">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-white/40">
                <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
