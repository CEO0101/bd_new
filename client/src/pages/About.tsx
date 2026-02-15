import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import aboutBackgroundVideo from "@assets/6010532_Nature_Rock_1280x720compresseddamed.mp4";

type StoryStep = {
  id: string;
  section: string;
  title: string;
  paragraphs: string[];
  blocks?: string[];
  bullets?: string[];
};

type MilestoneStep = {
  period: string;
  title: string;
  paragraphs: string[];
  question?: string;
  lead?: string;
  bullets?: string[];
  emphasis?: string;
};

type ValuePoint = {
  title: string;
  detail: string;
};

const aboutStory: StoryStep[] = [
  {
    id: "1",
    section: "How It Started",
    title: "A System Built Before It Was Scaled",
    paragraphs: [
      "Begur Sands Private Limited did not begin as a company trying to grow quickly. It began as work that needed to be done properly.",
      "India's construction materials sector has long relied on availability over reliability. Materials arrive, projects move forward - but the systems behind them are inconsistent, opaque, and hard on land and water.",
      "This platform was built to take a different approach: slow first, correct first, then scale.",
    ],
  },
  {
    id: "2.2",
    section: "What We Chose to Do Differently",
    title: "A New Operating Logic",
    blocks: ["Compliance-first", "System-led operations", "Centralised expertise", "No shortcuts"],
    paragraphs: [
      "The problem was not demand. The problem was how that demand was being served.",
      "Across the industry, the same patterns repeated: material behaviour that changed batch to batch, processes that depended on operator intuition, and systems that worked locally but broke under scale.",
      "Incremental fixes could not solve structural weakness. A new operating logic was required.",
    ],
  },
  {
    id: "2.3",
    section: "How We Built the System",
    title: "Research Before Revenue (2016)",
    paragraphs: [
      "The earliest work began in 2016, without factories, branding, or commercial pressure. The focus was basic and technical.",
      "This phase produced no output worth selling. What it produced was clarity about what would not work if consistency and accountability were taken seriously.",
    ],
    bullets: [
      "how weathered, already-disturbed stone behaves under crushing",
      "why conventional flows struggle to control gradation",
      "where variability enters the system and compounds downstream",
    ],
  },
];

const growthMilestones: MilestoneStep[] = [
  {
    period: "2018",
    title: "When Reality Removed All Doubt",
    paragraphs: [
      "In August 2018, Kerala faced catastrophic flooding, widely described as the disaster of the century.",
      "483 lives were lost, along with farmland, homes, infrastructure, and ecological balance.",
      "For a farmer from Wayanad, this was not a statistic. It was soil that could no longer hold water, fields that had fed families for generations buried overnight, and land that had been weakened long before the rain arrived.",
      "The flooding did not feel sudden. It felt accumulated.",
    ],
    emphasis:
      "When land systems are pushed beyond recovery, development stops being progress and starts becoming risk. From this point on, the work stopped being exploratory. It became deliberate.",
  },
  {
    period: "2018-2023",
    title: "Engineering by Elimination",
    paragraphs: [
      "An experimental facility was set up, not to produce material, but to reject systems honestly.",
      "Most could not.",
      "Some delivered volume but drifted in quality. Others held consistency briefly, then collapsed under longer runs.",
    ],
    question: "Can this repeat under constraint?",
    lead: "Focus areas included:",
    bullets: [
      "super-primary crushing behaviour",
      "simultaneous size segregation",
      "fines control as an engineered outcome",
      "stability across variable inputs",
    ],
    emphasis: "Anything that depended on adjustment instead of design was removed.",
  },
  {
    period: "2020-2023",
    title: "From Machines to Discipline",
    paragraphs: [
      "As the system matured, attention moved away from equipment and toward operating discipline.",
    ],
    lead: "This phase focused on:",
    bullets: [
      "writing SOPs that could survive operator change",
      "embedding traceability into material flow, not paperwork",
      "integrating water reuse and dust control as core layers",
      "preparing the system to be copied without dilution",
    ],
    emphasis: "If a process could not be governed, audited, and taught, it did not move forward.",
  },
  {
    period: "2024",
    title: "Formalising the Backbone",
    paragraphs: [
      "By 2024, the system had reached stability.",
      "Only then was Begur Sands Private Limited formalised, deliberately structured to hold:",
    ],
    bullets: ["operational knowledge", "process ownership", "governance and control"],
    emphasis: "The order mattered. The system came first. The company followed.",
  },
  {
    period: "2025",
    title: "First Commercial Validation",
    paragraphs: [
      "In 2025, the platform entered its first operational pilot under commercial conditions.",
    ],
    bullets: ["~400,000 tonnes produced", "full SOP execution", "consistency validated under load"],
    lead: "This phase confirmed something important:",
    emphasis: "the system worked not just on paper, but under pressure.",
  },
  {
    period: "Structure",
    title: "Brand Architecture",
    paragraphs: [
      "The operating structure is intentionally simple.",
      "Begur Sands Private Limited owns the system, the discipline, and the operating logic.",
      "BlackDiamond Granites is the execution and expansion brand, carrying that system into the market.",
    ],
    emphasis: "Scale is allowed. Compromise is not.",
  },
];

const coreValues: ValuePoint[] = [
  {
    title: "Systems over shortcuts",
    detail: "We design processes that work consistently, independent of individuals.",
  },
  {
    title: "Discipline before scale",
    detail: "We scale only what can be governed, audited, and repeated.",
  },
  {
    title: "Data for improvement",
    detail: "We use data to reduce variance and improve performance - not for optics.",
  },
  {
    title: "Accountability as standard",
    detail: "Traceability and compliance are treated as operating infrastructure.",
  },
  {
    title: "Respect for land and water",
    detail: "Land and water stability are essential to long-term infrastructure.",
  },
];

export default function About() {
  const storyRef = useRef<HTMLElement | null>(null);
  const isStoryInView = useInView(storyRef, { once: true, margin: "-100px" });
  const { scrollYProgress: storyProgress } = useScroll({
    target: storyRef,
    offset: ["start end", "end start"],
  });
  const storyLineHeight = useTransform(storyProgress, [0.1, 0.9], ["0%", "100%"]);
  const growthRef = useRef<HTMLElement | null>(null);
  const isGrowthInView = useInView(growthRef, { once: true, margin: "-120px" });
  const { scrollYProgress: growthProgress } = useScroll({
    target: growthRef,
    offset: ["start end", "end start"],
  });
  const growthLineHeight = useTransform(growthProgress, [0.08, 0.92], ["0%", "100%"]);

  const rawProgress = useMotionValue(0);
  const smoothProgress = useSpring(rawProgress, {
    stiffness: 110,
    damping: 24,
    mass: 0.32,
  });
  const cueOpacity = useTransform(smoothProgress, [0, 0.18], [1, 0]);
  const cueY = useTransform(smoothProgress, [0, 0.18], [0, -16]);
  const markerY = useTransform(smoothProgress, [0, 1], [162, 0]);
  const sidebarLift = useTransform(smoothProgress, [0, 1], [0, -22]);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY || window.pageYOffset;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const next = scrollable > 0 ? Math.min(Math.max(scrollTop / scrollable, 0), 1) : 0;
      rawProgress.set(next);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [rawProgress]);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-[#1b1b1b]">
      <div className="fixed inset-0 -z-30">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        >
          <source src={aboutBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="fixed inset-0 -z-20 bg-[#F7F7F7]/76" />

      <Navbar />
      <style>{`
        @keyframes scrollNudge {
          0%, 100% { transform: translateY(0); opacity: 0.8; }
          50% { transform: translateY(10px); opacity: 0.25; }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(46,111,87,0.32); }
          70% { box-shadow: 0 0 0 14px rgba(46,111,87,0); }
        }
      `}</style>

      <motion.div
        aria-hidden="true"
        className="fixed bottom-7 left-1/2 z-30 hidden -translate-x-1/2 md:flex"
        style={{ opacity: cueOpacity, y: cueY }}
      >
        <div className="flex items-center gap-3 rounded-full border border-[#6B6B6B]/20 bg-[#F7F7F7]/80 px-4 py-2">
          <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#343434]">
            Scroll
          </span>
          <div className="h-7 w-4 rounded-full border border-[#6B6B6B]/45 p-1">
            <span
              className="block h-1.5 w-1.5 rounded-full bg-[#2E6F57]"
              style={{ animation: "scrollNudge 1.6s ease-in-out infinite" }}
            />
          </div>
        </div>
      </motion.div>
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto xl:grid xl:grid-cols-[minmax(0,4fr)_320px] xl:gap-14">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl xl:max-w-none"
          >
            <span className="mb-8 block text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-[#343434]">
              About The Platform
            </span>
            <h1 className="mb-12 text-5xl font-display font-black tracking-tighter text-[#2E6F57] md:text-7xl xl:text-8xl">
              A SYSTEM BUILT <br /> <span className="text-[#2E6F57]/35">BEFORE IT WAS SCALED.</span>
            </h1>

            <p className="max-w-3xl text-lg font-normal leading-relaxed text-[#343434] md:text-2xl">
              BlackDiamond Granites operates under Begur Sands Private Limited as an industrial mineral
              recycling platform for manufactured sand and aggregates. The operating system was designed
              to prioritise compliance, consistency, and traceability before scale.
            </p>

            <section ref={storyRef} className="relative mt-16">
              <div className="absolute bottom-0 left-7 top-0 w-px bg-[#6B6B6B]/30 md:left-1/2 md:-translate-x-1/2">
                <motion.div
                  style={{ height: storyLineHeight }}
                  className="w-full bg-gradient-to-b from-[#2E6F57] via-[#2E6F57]/80 to-[#6B6B6B]"
                />
              </div>

              <div className="space-y-16 md:space-y-24">
                {aboutStory.map((step, index) => {
                  const isEven = index % 2 === 0;

                  return (
                    <motion.article
                      key={step.id}
                      initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                      animate={isStoryInView ? { opacity: 1, x: 0 } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 0.2 + index * 0.14,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`relative flex items-start gap-8 ${isEven ? "md:flex-row" : "md:flex-row-reverse"}`}
                    >
                      <div className="absolute left-7 top-2 h-4 w-4 -translate-x-1/2 md:left-1/2">
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={isStoryInView ? { scale: 1 } : {}}
                          transition={{ delay: 0.4 + index * 0.15, duration: 0.45, type: "spring" }}
                          className="h-4 w-4 rounded-full border-4 border-[#EFEAE3] bg-[#2E6F57]"
                        />
                        <motion.div
                          animate={isStoryInView ? { scale: [1, 1.6, 1], opacity: [0.45, 0, 0.45] } : {}}
                          transition={{ duration: 2.2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.25 }}
                          className="absolute inset-0 rounded-full bg-[#2E6F57]/40"
                        />
                      </div>

                      <div className={`flex-1 pl-16 md:pl-0 ${isEven ? "md:pr-16" : "md:pl-16"}`}>
                        <div
                          className={`inline-block max-w-xl rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3]/68 p-6 shadow-[0_14px_32px_rgba(17,24,39,0.12)] md:p-8 ${
                            isEven ? "md:ml-auto" : ""
                          }`}
                        >
                          <span className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">
                            {step.id} {step.section}
                          </span>
                          <h2 className="mt-3 text-2xl font-display font-black tracking-tight text-[#1b1b1b] md:text-3xl">
                            {step.title}
                          </h2>

                          {step.blocks ? (
                            <div className="mt-5">
                              <p className="mb-2 text-[10px] font-mono uppercase tracking-[0.24em] text-[#343434]/80">
                                Narrative blocks:
                              </p>
                              <div className="flex flex-wrap gap-2">
                              {step.blocks.map((block) => (
                                <span
                                  key={block}
                                  className="rounded-full border border-[#2E6F57]/30 bg-[#2E6F57]/10 px-3 py-1.5 text-[10px] font-mono uppercase tracking-[0.18em] text-[#2E6F57]"
                                >
                                  {block}
                                </span>
                              ))}
                              </div>
                            </div>
                          ) : null}

                          <div className="mt-5 space-y-4">
                            {step.paragraphs.map((paragraph, paragraphIndex) => (
                              <p key={`${step.id}-${paragraphIndex}`} className="text-sm leading-relaxed text-[#343434] md:text-base">
                                {paragraph}
                              </p>
                            ))}
                          </div>

                          {step.bullets ? (
                            <ul className="mt-5 space-y-2">
                              {step.bullets.map((bullet) => (
                                <li
                                  key={bullet}
                                  className="flex items-start gap-3 text-sm leading-relaxed text-[#343434] md:text-base"
                                >
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#2E6F57]" />
                                  <span>{bullet}</span>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      </div>

                      <div className="hidden flex-1 md:block" />
                    </motion.article>
                  );
                })}
              </div>
            </section>

            <section
              ref={growthRef}
              className="relative mt-24 overflow-hidden rounded-[28px] border border-[#244636]/60 bg-[#112118]/92 text-[#F2EEE6]"
            >
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(46,111,87,0.24),transparent_44%),linear-gradient(140deg,rgba(255,255,255,0.06),rgba(255,255,255,0)_38%)]" />
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-white/20" />

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="relative z-10 px-6 py-14 md:px-10 md:py-16"
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.34em] text-[#9DD9B8]/90">
                  SYSTEM EVOLUTION
                </span>
                <h2 className="mt-3 max-w-3xl text-4xl font-display font-black tracking-tight text-[#F8F5EE] md:text-5xl">
                  2018 TO COMMERCIAL VALIDATION
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-relaxed text-[#DDD7CA]/90 md:text-base">
                  After the initial research phase, the platform moved through failure, discipline, and then governed scale.
                </p>

                <div className="relative mt-12">
                  <div className="absolute bottom-0 left-5 top-0 w-px bg-white/20 md:left-[11rem]">
                    <motion.div
                      style={{ height: growthLineHeight }}
                      className="w-full bg-gradient-to-b from-[#9DD9B8] via-[#2E6F57] to-[#9DD9B8]/30"
                    />
                  </div>

                  <div className="space-y-8 md:space-y-10">
                    {growthMilestones.map((step, index) => (
                      <motion.article
                        key={`${step.period}-${step.title}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={isGrowthInView ? { opacity: 1, y: 0 } : {}}
                        transition={{
                          duration: 0.7,
                          delay: 0.18 + index * 0.1,
                          ease: [0.16, 1, 0.3, 1],
                        }}
                        className="relative md:grid md:grid-cols-[9rem_minmax(0,1fr)] md:gap-8"
                      >
                        <div className="pb-3 pl-12 md:pb-0 md:pl-0 md:pt-1">
                          <p className="text-xs font-mono uppercase tracking-[0.24em] text-[#9DD9B8]">
                            {step.period}
                          </p>
                        </div>

                        <div className="relative pl-12 md:pl-8">
                          <div className="absolute left-5 top-2 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#9DD9B8]/55 bg-[#9DD9B8] md:left-0" />

                          <div className="rounded-2xl border border-white/12 bg-[#0B150F]/72 p-5 shadow-[0_18px_32px_rgba(0,0,0,0.28)] md:p-6">
                            <h3 className="text-2xl font-display font-black tracking-tight text-[#F8F5EE] md:text-3xl">
                              {step.title}
                            </h3>

                            <div className="mt-4 space-y-3">
                              {step.paragraphs.map((paragraph, paragraphIndex) => (
                                <p
                                  key={`${step.period}-${paragraphIndex}`}
                                  className="text-sm leading-relaxed text-[#DDD7CA]/92 md:text-base"
                                >
                                  {paragraph}
                                </p>
                              ))}
                            </div>

                            {step.question ? (
                              <p className="mt-4 rounded-xl border border-[#9DD9B8]/30 bg-[#9DD9B8]/8 px-4 py-3 text-sm font-semibold text-[#D8F3E3] md:text-base">
                                Each configuration was tested against one question: {step.question}
                              </p>
                            ) : null}

                            {step.lead ? (
                              <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.24em] text-[#9DD9B8]/92">
                                {step.lead}
                              </p>
                            ) : null}

                            {step.bullets ? (
                              <ul className="mt-3 space-y-2">
                                {step.bullets.map((bullet) => (
                                  <li
                                    key={bullet}
                                    className="flex items-start gap-3 text-sm leading-relaxed text-[#DDD7CA]/92 md:text-base"
                                  >
                                    <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-[2px] bg-[#9DD9B8]" />
                                    <span>{bullet}</span>
                                  </li>
                                ))}
                              </ul>
                            ) : null}

                            {step.emphasis ? (
                              <p className="mt-4 border-l border-[#9DD9B8]/45 pl-4 text-sm font-semibold leading-relaxed text-[#E9E4D8] md:text-base">
                                {step.emphasis}
                              </p>
                            ) : null}
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </div>
              </motion.div>
            </section>

            <section className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#343434]">
                  Mission / Vision / Values
                </span>
                <h2 className="mt-3 text-4xl font-display font-black tracking-tight text-[#1b1b1b] md:text-5xl">
                  Operating Principles In Practice
                </h2>
              </motion.div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55 }}
                  className="rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3]/74 p-7 shadow-[0_14px_30px_rgba(17,24,39,0.12)] md:p-8"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">Mission</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#343434] md:text-base">
                    Build India's infrastructure using system-driven, circular construction materials that deliver
                    reliability at scale while protecting land and water systems.
                  </p>
                </motion.article>

                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: 0.08 }}
                  className="rounded-2xl border border-[#6B6B6B]/25 bg-[#F7F7F7]/70 p-7 shadow-[0_14px_30px_rgba(17,24,39,0.1)] md:p-8"
                >
                  <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">Vision</p>
                  <p className="mt-4 text-sm leading-relaxed text-[#343434] md:text-base">
                    A construction materials ecosystem where quality, compliance, and environmental balance are
                    built into the system, not managed as exceptions.
                  </p>
                </motion.article>
              </div>

              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.6, delay: 0.06 }}
                className="mt-6 rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3]/72 p-7 shadow-[0_14px_34px_rgba(17,24,39,0.13)] md:p-8"
              >
                <p className="text-[10px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">Values</p>

                <div className="mt-5 grid gap-4 md:grid-cols-2">
                  {coreValues.map((value) => (
                    <div
                      key={value.title}
                      className="rounded-xl border border-[#6B6B6B]/20 bg-white/55 p-4"
                    >
                      <h3 className="text-lg font-display font-black tracking-tight text-[#1b1b1b]">
                        {value.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-[#343434]">{value.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.article>
            </section>
          </motion.div>

          <motion.aside
            className="fixed right-8 top-32 z-20 hidden w-[320px] xl:block"
            style={{ y: sidebarLift }}
            initial={{ opacity: 0, x: 18 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.15 }}
          >
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-2xl border border-white/55 bg-white/30 p-6 backdrop-blur-2xl shadow-[0_14px_38px_rgba(17,24,39,0.18),inset_0_1px_0_rgba(255,255,255,0.82)]">
                <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(130deg,rgba(255,255,255,0.52)_0%,rgba(255,255,255,0.18)_42%,rgba(255,255,255,0.04)_100%)]" />
                <p className="relative text-[10px] font-mono uppercase tracking-[0.32em] text-[#343434]">
                  Scroll Assistant
                </p>
                <div className="relative mt-5 flex items-center gap-5">
                  <div className="relative h-44 w-[7px] overflow-hidden rounded-full bg-[#6B6B6B]/20">
                    <motion.div
                      className="absolute inset-x-0 bottom-0 h-full origin-bottom rounded-full bg-gradient-to-t from-[#2E6F57] via-[#2E6F57]/80 to-[#2E6F57]/30"
                      style={{ scaleY: smoothProgress }}
                    />
                    <motion.div
                      className="absolute left-1/2 top-0 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[#2E6F57]/45 bg-[#F7F7F7]"
                      style={{ y: markerY, animation: "pulseGlow 2.4s ease-in-out infinite" }}
                    />
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-semibold text-[#2E6F57]">Scroll Down</p>
                    <p className="text-sm text-[#343434] leading-relaxed">
                      Follow your progress as you move through the platform's build journey.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.aside>
        </div>
      </main>

      <footer className="border-t border-[#6B6B6B]/20 bg-[#EFEAE3]/56 py-32 text-[#1b1b1b]">
        <div className="container px-6 mx-auto">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 bg-[#2E6F57] rounded-sm transform rotate-45" />
                <span className="font-display font-bold text-lg tracking-tight text-[#2E6F57] uppercase">
                  BLACK DIAMOND
                </span>
              </div>
              <p className="text-sm text-[#343434] leading-relaxed max-w-sm">
                Building without borrowing from its future. A cleaner way for India to grow.
              </p>
              <div className="mt-8 flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2E6F57]/10 transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-4 h-4 text-[#343434]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-[#6B6B6B]/30 flex items-center justify-center hover:bg-[#2E6F57]/10 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-4 h-4 text-[#343434]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Solutions Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#343434] mb-6">Solutions</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">M-Sand</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">P-Sand</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">Aggregates</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">Pavers</a></li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#343434] mb-6">Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">About</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">Technology</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">Impact</a></li>
                <li><a href="#" className="text-sm text-[#343434] hover:text-[#2E6F57] transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Newsletter Section */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-mono font-bold uppercase tracking-widest text-[#343434] mb-6">Stay Updated</h3>
              <p className="text-sm text-[#343434] mb-4">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
              <form className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 bg-[#F7F7F7] border border-[#6B6B6B]/30 rounded-sm text-sm text-[#1b1b1b] placeholder-[#6B6B6B]/70 focus:outline-none focus:border-[#2E6F57] transition-colors"
                  required
                />
                <button 
                  type="submit"
                  className="w-full px-4 py-3 bg-[#2E6F57] text-white font-bold text-sm uppercase tracking-widest rounded-sm hover:bg-[#295f4b] transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>

          {/* Divider */}
          <div className="mt-16 pt-8 border-t border-[#6B6B6B]/20">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-xs font-mono uppercase tracking-widest text-[#343434]">
                © {new Date().getFullYear()} Precision Granite Recovery
              </p>
              <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-[#343434]">
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-[#2E6F57] transition-colors">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
