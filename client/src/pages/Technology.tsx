import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, CircleDot, SlidersHorizontal, Waves, Workflow } from "lucide-react";
import Navbar from "@/components/Navbar";
import industryProductionVideo from "@assets/6000286_Industry_Production_1280x720.mov";

type ProcessingStep = {
  title: string;
  detail: string;
  icon: LucideIcon;
};

export default function Technology() {
  const systemOutputs = ["Manufactured sand", "Graded aggregates", "Controlled secondary materials"];

  const processingSteps: ProcessingStep[] = [
    {
      title: "super-primary control",
      detail: "Stabilises break behaviour early so downstream variability is reduced.",
      icon: CircleDot,
    },
    {
      title: "simultaneous size segregation",
      detail: "Separates size bands in parallel to keep throughput and sizing control aligned.",
      icon: Workflow,
    },
    {
      title: "fines and shape management",
      detail: "Manages fines ratio and particle form as engineered outcomes, not manual correction.",
      icon: SlidersHorizontal,
    },
    {
      title: "environmental control layers (water & dust)",
      detail: "Integrates water reuse and dust control as core process layers.",
      icon: Waves,
    },
  ];

  return (
    <div className="min-h-screen bg-[#EEF1F2] text-[#1b1b1b]">
      <Navbar />

      <main className="pb-20 pt-32">
        <div className="container mx-auto px-6">
          <section className="relative mb-20 min-h-[360px] overflow-hidden rounded-3xl border border-[#6B6B6B]/20 md:min-h-[430px]">
            <div className="absolute inset-0 z-0">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
              >
                <source src={industryProductionVideo} type="video/quicktime" />
                <source src={industryProductionVideo} />
              </video>
            </div>
            <div className="absolute inset-0 z-10 bg-[#EEF1F2]/75" />

            <div className="relative z-20 p-8 md:p-12">
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-4xl font-display font-black tracking-tight text-[#2F4858] md:text-6xl"
              >
                Engineered Materials from a Designed System
              </motion.h1>
              <p className="max-w-3xl text-base leading-relaxed text-[#4E4E4E] md:text-lg">
                Materials produced by a disciplined, traceable system - not sourced by extraction, but engineered
                from already-disturbed stone.
              </p>
            </div>
          </section>

          <section className="mb-16 grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#2F4858]/70">
                3.1 System Overview
              </span>
              <h2 className="mt-4 text-4xl font-display font-black tracking-tight text-[#2F4858] md:text-5xl">
                Integrated Flow,
                <br />
                Defined Outputs
              </h2>
              <p className="mt-6 text-sm leading-relaxed text-[#6B6B6B] md:text-base">
                BlackDiamond's platform integrates sourcing, processing, control, and output into one engineered
                flow. Inputs are stabilised early, processing behaviour is managed via design, and outputs are
                defined by performance by use-case.
              </p>

              <p className="mt-7 text-xs font-mono uppercase tracking-[0.2em] text-[#2F4858]/70">This system produces:</p>
              <ul className="mt-3 space-y-2">
                {systemOutputs.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-[#6B6B6B] md:text-base">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#2F4858]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-2xl border border-[#6B6B6B]/20 bg-white/80 p-6 premium-blur-light">
                <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#6B6B6B]">
                  Abstract Flow Graphic
                </p>
                <p className="mt-2 text-xs font-mono uppercase tracking-[0.22em] text-[#2F4858]/70">
                  Input - Processing - Outputs
                </p>

                <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="flex-1 rounded-xl border border-[#6B6B6B]/20 bg-[#F4F6F7] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B]">Input</p>
                    <p className="mt-2 text-sm font-semibold text-[#2F4858]">Already-disturbed stone feed</p>
                  </div>

                  <ArrowRight className="mx-auto h-5 w-5 text-[#2F4858]/60 md:mx-0" />

                  <div className="flex-1 rounded-xl border border-[#6B6B6B]/20 bg-[#F4F6F7] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B]">Processing</p>
                    <p className="mt-2 text-sm font-semibold text-[#2F4858]">Designed control architecture</p>
                  </div>

                  <ArrowRight className="mx-auto h-5 w-5 text-[#2F4858]/60 md:mx-0" />

                  <div className="flex-1 rounded-xl border border-[#6B6B6B]/20 bg-[#F4F6F7] p-4">
                    <p className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B]">Outputs</p>
                    <p className="mt-2 text-sm font-semibold text-[#2F4858]">Use-case engineered materials</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16 rounded-2xl border border-[#6B6B6B]/20 bg-[#F4F6F7] p-8 premium-blur-light md:p-10">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#2F4858]/70">
              3.2 Circular, Controlled Inputs
            </span>
            <p className="mt-5 max-w-5xl text-sm leading-relaxed text-[#6B6B6B] md:text-base">
              The system begins with already-disturbed stone, including weathered material and legacy quarry waste.
              This stabilises input behaviour and avoids fresh extraction. Inputs are recorded and calibrated before
              entering the processing flow to ensure consistency from the start.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {[
                "Already-disturbed stone",
                "Weathered material",
                "Legacy quarry waste",
                "Recorded and calibrated intake",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-[#6B6B6B]/20 bg-white p-4">
                  <p className="text-xs font-mono uppercase tracking-[0.16em] text-[#2F4858]">{item}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-28">
            <span className="text-[10px] font-mono font-bold uppercase tracking-[0.28em] text-[#2F4858]/70">
              3.3 Core Processing Architecture
            </span>
            <p className="mt-5 text-sm leading-relaxed text-[#6B6B6B] md:text-base">Processing is divided into:</p>
            <ul className="mt-3 space-y-2">
              {processingSteps.map((step) => (
                <li key={step.title} className="flex items-center gap-3 text-sm text-[#6B6B6B] md:text-base">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#2F4858]" />
                  {step.title}
                </li>
              ))}
            </ul>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {processingSteps.map((step, index) => (
                <motion.article
                  key={step.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  className="rounded-2xl border border-[#6B6B6B]/20 bg-white p-6 premium-blur-light"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#6B6B6B]">
                      Step {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#6B6B6B]/20 bg-[#F4F6F7] text-[#2F4858]">
                      <step.icon className="h-4 w-4" />
                    </div>
                  </div>
                  <h3 className="text-xl font-display font-black tracking-tight text-[#2F4858]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[#6B6B6B]">{step.detail}</p>
                </motion.article>
              ))}
            </div>

            <p className="mt-8 rounded-xl border border-[#6B6B6B]/20 bg-[#F4F6F7] p-5 text-sm font-semibold leading-relaxed text-[#2F4858]">
              Each stage is governed by SOPs that guarantee repeatability.
            </p>
          </section>
        </div>
      </main>

      <footer className="border-t border-[#6B6B6B]/20 bg-[#F4F6F7] py-32 text-[#1b1b1b]">
        <div className="container mx-auto px-6">
          <div className="grid gap-12 lg:grid-cols-4">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8 flex items-center gap-3">
                <div className="h-8 w-8 rotate-45 transform rounded-sm bg-[#2F4858]" />
                <span className="font-display text-lg font-bold tracking-tight text-[#2F4858] uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-[#6B6B6B]">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B6B6B]/30 transition-colors hover:bg-[#2F4858]/10">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-4 w-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-[#6B6B6B]/30 transition-colors hover:bg-[#2F4858]/10">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-4 w-4 text-[#6B6B6B]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B]">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">M-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">P-Sand</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">Aggregates</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B]">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">About</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">Technology</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">Impact</a></li>
                <li><a href="#" className="text-sm text-[#6B6B6B] transition-colors hover:text-[#2F4858]">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-[#6B6B6B]">Stay Updated</h3>
              <p className="mb-4 text-sm text-[#6B6B6B]">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full rounded-sm border border-[#6B6B6B]/30 bg-white px-4 py-3 text-sm text-[#1b1b1b] placeholder-[#6B6B6B]/70 transition-colors focus:border-[#2F4858] focus:outline-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full rounded-sm border-2 border-[#2F4858] px-4 py-3 text-sm font-bold tracking-widest text-[#2F4858] uppercase transition-colors hover:bg-[#2F4858] hover:text-white"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 border-t border-[#6B6B6B]/20 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
              <p className="text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-[#6B6B6B]">
                <a href="#" className="transition-colors hover:text-[#2F4858]">Privacy Policy</a>
                <a href="#" className="transition-colors hover:text-[#2F4858]">Terms of Service</a>
                <a href="#" className="transition-colors hover:text-[#2F4858]">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
