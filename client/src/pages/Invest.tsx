import { motion } from "framer-motion";
import { TrendingUp, CheckCircle, Scaling, Globe } from "lucide-react";
import Navbar from "@/components/Navbar";
import investorStock from "@assets/image_1770206124057.png";

const ACCENT = "#A8C3B1";

export default function Invest() {
  const values = [
    { icon: Globe, text: "Reduced dependency on natural sand and quarrying" },
    { icon: CheckCircle, text: "Strong regulatory positioning and approval readiness" },
    { icon: Scaling, text: "Scalable operations on large land parcel" },
    { icon: TrendingUp, text: "Consistent demand from regional infrastructure development" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <Navbar />

      <main className="pt-32 pb-20">
        <section className="relative">
          {/* subtle background glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-[420px] w-[820px] -translate-x-1/2 rounded-full blur-3xl opacity-25"
            style={{ background: `radial-gradient(circle at center, ${ACCENT}, transparent 60%)` }}
          />

          <div className="container mx-auto px-6">
            {/* Page header */}
            <div className="mb-16 max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4 mb-8"
              >
                <div className="h-[1px] w-16 bg-white/60" />
                <span className="text-[10px] font-mono uppercase tracking-[0.4em] font-bold text-white/40">
                  Investor Overview
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-5xl md:text-7xl font-display font-black tracking-tighter mb-6"
              >
                Designed for <br />
                <span className="text-white/20 italic font-light">Long-Term Value</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-lg text-white/60 leading-relaxed"
              >
                This facility represents a future-ready industrial model aligned with circular economy principles,
                regulatory frameworks, and sustainable infrastructure growth.
              </motion.p>
            </div>

            {/* Main content */}
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left column */}
              <div className="space-y-8">
                <div className="rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/30 shadow-xl">
                  <img
                    src={investorStock}
                    alt="Investor Site Visit"
                    loading="lazy"
                    decoding="async"
                    className="w-full h-72 md:h-80 object-cover opacity-90 grayscale"
                  />
                  <div className="p-6 border-t border-white/10">
                    <p className="text-xs text-white/40 font-mono uppercase tracking-widest">
                      Operational Site • Scalable Recovery Infrastructure
                    </p>
                  </div>
                </div>

                <p className="text-lg text-white/60 leading-relaxed">
                  We bridge the gap between industrial waste management and the growing demand for sustainable
                  construction materials.
                </p>

                <div className="p-6 premium-blur-dark bg-zinc-900/40 border border-white/10 rounded-xl">
                  <p className="text-sm text-white/60 leading-relaxed">
                    With regional infrastructure growth accelerating and regulations tightening, recycled outputs
                    become a defensible, compliant, and high-demand supply layer.
                  </p>
                </div>
              </div>

              {/* Right column */}
              <div className="space-y-12">
                <div className="grid sm:grid-cols-2 gap-4">
                  {values.map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="premium-blur-dark bg-zinc-900/40 border border-white/10 p-6 rounded-xl flex flex-col gap-4 hover:border-white/30 transition-colors"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center border"
                        style={{ borderColor: `${ACCENT}33`, background: `${ACCENT}0D`, color: ACCENT }}
                      >
                        <item.icon className="w-6 h-6" />
                      </div>
                      <p className="text-white font-semibold leading-snug">{item.text}</p>
                    </motion.div>
                  ))}

                  <div
                    className="col-span-1 sm:col-span-2 border p-6 rounded-xl flex items-center justify-center text-center"
                    style={{ borderColor: `${ACCENT}33`, background: `${ACCENT}0D` }}
                  >
                    <p className="font-mono font-bold uppercase tracking-widest text-xs" style={{ color: ACCENT }}>
                      Environmentally responsible revenue generation
                    </p>
                  </div>
                </div>

                {/* Content Enrichment */}
                <div className="space-y-8">
                  <h2 className="text-2xl md:text-3xl font-display font-black uppercase tracking-tight">
                    Strategic Investment Rationale
                  </h2>

                  <div className="grid gap-6">
                    <div className="premium-blur-dark bg-zinc-900/40 p-8 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="font-mono font-bold uppercase tracking-widest text-xs" style={{ color: ACCENT }}>
                        Resource Efficiency & Scale
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        The project leverages an existing 250 TPH crusher unit, significantly reducing initial capital
                        expenditure while enabling large-scale recycling operations immediately. The facility sits on a
                        strategic 6-acre land parcel, providing ample space for optimized stockyard management,
                        high-volume water treatment systems, and future modular capacity expansion.
                      </p>
                    </div>

                    <div className="premium-blur-dark bg-zinc-900/40 p-8 rounded-2xl border border-white/10 space-y-4">
                      <h3 className="font-mono font-bold uppercase tracking-widest text-xs" style={{ color: ACCENT }}>
                        Regulatory Advantage & Market Gap
                      </h3>
                      <p className="text-sm text-white/60 leading-relaxed">
                        With rapid urbanization in the region and increasing state-level restrictions on natural river sand
                        mining, BlackDiamondGranites occupies a critical market gap. Our certified recycled materials
                        provide a sustainable, compliant, and cost-effective alternative for Tier-1 infrastructure developers,
                        ensuring consistent off-take and revenue stability.
                      </p>
                    </div>

                    <div className="premium-blur-dark bg-zinc-900/40 p-8 rounded-2xl border border-white/10">
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                          <h4 className="text-white font-mono font-bold text-[10px] uppercase tracking-widest">
                            CAPEX Advantage
                          </h4>
                          <p className="text-[11px] text-white/50 leading-relaxed">
                            Leveraging existing infrastructure to minimize entry costs and maximize ROI.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white font-mono font-bold text-[10px] uppercase tracking-widest">
                            Operational Stability
                          </h4>
                          <p className="text-[11px] text-white/50 leading-relaxed">
                            Scalable process logic with redundant safety and environmental systems.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    className="border-l-4 pl-6 py-3 rounded-xl"
                    style={{ borderColor: ACCENT, background: `${ACCENT}0A` }}
                  >
                    <p className="text-base md:text-lg font-display font-black uppercase tracking-tight text-white">
                      Designed for long-term operational stability, regulatory readiness, and sustainable revenue generation
                      in the circular economy.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
