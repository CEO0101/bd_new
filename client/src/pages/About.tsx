import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import FaqSection from "@/components/FaqSection";
import { useSeo, faqJsonLd, breadcrumbJsonLd, SITE_ORIGIN } from "@/lib/useSeo";
import aboutBackgroundVideo from "@assets/6010532_Nature_Rock_1280x720compresseddamed.mp4";

const ABOUT_FAQS = [
  {
    q: "Who is Greenrock Innovations?",
    a: "Greenrock Innovations is a climate technology company built around the recycling of waste rock and weathered rock — feedstock that would otherwise be discarded — into engineered, IS 383:2016 compliant manufactured sand and construction aggregates. The recycling-led process is MORTH certified for use on National Highway projects, Bureau Veritas audited, and supplies top-tier industrial infrastructure, PSU construction, ready-mix concrete plants, and large-scale developer projects across South India. The company operates a network of recycling-based manufacturing facilities, the largest being Begur Sands Pvt. Ltd. in Gundlupet, Karnataka — the original site where the closed-loop recycling system was engineered under Karnataka's first Waste Rock Royalty Recycle Permit.",
  },
  {
    q: "Who is the CEO of Greenrock Innovations?",
    a: "The Chief Executive Officer of Greenrock Innovations is Vivek Singh. He leads strategy, investor relations, and institutional market expansion for the ecosystem's multi-site recycling-led scaling phase. Vivek's background is management consulting — Founder of Velaeva AI, ex-Bain M&A, and ex-Oracle Data Systems. He works alongside founder Faisal P.K., who authored the closed-loop recycling process specification and secured Karnataka's first Waste Rock Royalty Recycle Permit. Sukumaran serves as Co-Founder and Managing Director leading operational expansion, with Abdulla MK as Chairperson and Naveen S. leading institutional business relations and legal.",
  },
  {
    q: "What is the relationship between Greenrock Innovations and Begur Sands Pvt. Ltd.?",
    a: "Greenrock Innovations is the operating ecosystem that holds the recycling system, the discipline, and the operating logic. Begur Sands Pvt. Ltd. is its largest manufacturing facility and the original engineering site, located in Gundlupet, Karnataka. Additional facilities are added under the Greenrock ecosystem only after they can meet the same recycling and operating standard.",
  },
  {
    q: "When did Greenrock Innovations begin operations?",
    a: "R&D work began in 2016 at what would become Begur Sands — focused on the technical questions of how weathered rock behaves under crushing and why conventional flows struggle to control gradation. The system reached operational stability and vintage in 2024. First commercial validation (above ~400,000 tonnes produced under full ESG compliant SOP execution) took place in 2025.",
  },
  {
    q: "Where are Greenrock's facilities located?",
    a: "The flagship facility is in Gundlupet, Chamarajanagar district, Karnataka — the southern corridor of the Western Ghats. The location is deliberate: it sits within the quarrying geography that has supplied South India's construction material for decades, putting Greenrock at the point where the residual waste streams of primary quarrying can be converted into engineered output.",
  },
  {
    q: "What certifications and permits does Greenrock operate under?",
    a: "Karnataka state Waste Rock Royalty Recycle Permit (first of its kind in the state), Bureau Veritas certified, BIS-hallmarked output, IS 383:2016 / IS 1542:1992 compliant, Zero Liquid Discharge operations, DPIIT Startup India recognised.",
  },
  {
    q: "What does Greenrock produce?",
    a: "Four engineered output classes: M-Sand (manufactured sand for structural concrete, IS 383 Zone II), P-Sand (plastering sand, IS 1542), Graded Aggregates (coarse, IS 383 — 6/12/20/40 mm fractions), and Crusher Dust (sub-grade stabiliser and asphalt filler).",
  },
];

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
      "Greenrock Innovations did not begin as a company trying to grow quickly. It began as work that needed to be done properly — at a single facility, Begur Sands, in Karnataka.",
      "India's construction materials sector has long relied on availability over reliability. Materials arrive, projects move forward — but the systems behind them are inconsistent, opaque, and hard on land and water.",
      "This ecosystem was built to take a different approach: slow first, correct first, then scale.",
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
      "Begur Sands Pvt. Ltd. was formalised as the first operating facility under what would become Greenrock Innovations — deliberately structured to hold:",
    ],
    bullets: ["operational knowledge", "process ownership", "governance and control"],
    emphasis: "The order mattered. The system came first. The company followed.",
  },
  {
    period: "2025",
    title: "First Commercial Validation",
    paragraphs: [
      "In 2025, the ecosystem entered its first operational pilot under commercial conditions.",
    ],
    bullets: ["~400,000 tonnes produced", "full SOP execution", "consistency validated under load"],
    lead: "This phase confirmed something important:",
    emphasis: "the system worked not just on paper, but under pressure.",
  },
  {
    period: "Structure",
    title: "Operating Architecture",
    paragraphs: [
      "The operating structure is intentionally simple.",
      "Greenrock Innovations holds the system, the discipline, and the operating logic — and operates a growing network of manufacturing facilities under it.",
      "Begur Sands Pvt. Ltd. is the largest of those facilities and the original site where the system was engineered. Additional sites are added only after they can meet the same operating standard.",
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

type TeamMember = {
  name: string;
  role: string;
  credentials: string;
  bio: string;
};

const TEAM: TeamMember[] = [
  {
    name: "Faisal P.K.",
    role: "Founder & Managing Director",
    credentials: "19 years · Cement manufacturing · Commercial real estate · Landmark infrastructure",
    bio: "Authored the closed-loop process specification through a decade of engineering work — 2016 research to 2025 commercial validation. Secured Karnataka's first Waste Rock Royalty Recycle Permit, a regulatory outcome with no prior precedent in the state.",
  },
  {
    name: "Sukumaran",
    role: "Co-Founder & Managing Director — Strategic Expansion & Operations",
    credentials: "40+ years · Mining & mineral processing · Regional projects across South India",
    bio: "Operational anchor of the ecosystem's multi-site expansion. Leads plant setup, feedstock control, and mineral-processing execution across every node — bringing four decades of field-built authority to deployment, yield optimisation, and regional growth.",
  },
  {
    name: "Vivek Singh",
    role: "Chief Executive Officer",
    credentials: "Founder, Velaeva AI (velaeva.com) · Ex-Bain M&A · Ex-Oracle Data Systems",
    bio: "Leads strategy, investor relations, and institutional market expansion for Greenrock's recycling-led scaling phase. Concurrently founder of Velaeva AI — building enterprise voice and operations infrastructure. Brings the operating discipline of management consulting to the multi-site build, converting a proven engineering achievement into a replicable operating standard.",
  },
  {
    name: "Abdulla MK",
    role: "Chairperson",
    credentials: "35+ years · Lulu Group · ADNOC Drilling · Abu Dhabi Ports (KIZAD) · CIA & CISA Certified",
    bio: "Provides board governance and institutional oversight. Anchors the ecosystem's compliance posture, audit discipline, and structural integrity across the multi-site build.",
  },
  {
    name: "Naveen S.",
    role: "Operations · Business Relations · Legal",
    credentials: "20 years · GCC institutional environments",
    bio: "Leads institutional business relations, legal advisory, PSU contracting, and large-scale operational management. The ecosystem's interface to government, large-buyer procurement, and statutory compliance.",
  },
];

export default function About() {
  useSeo({
    title: "About — Greenrock Innovations & Begur Sands Pvt. Ltd.",
    description:
      "Greenrock Innovations operates a network of manufacturing facilities producing engineered sand and aggregates from reclaimed weathered rock — the largest being Begur Sands Pvt. Ltd. in Karnataka. The operating system was designed for compliance, consistency, and traceability before scale.",
    canonical: "/about",
    jsonLd: [
      faqJsonLd(ABOUT_FAQS),
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
      ]),
      {
        "@context": "https://schema.org",
        "@type": "AboutPage",
        url: `${SITE_ORIGIN}/about`,
        mainEntity: {
          "@type": "Organization",
          name: "Greenrock Innovations",
          subOrganization: {
            "@type": "Organization",
            name: "Begur Sands Pvt. Ltd.",
            description: "Largest of Greenrock Innovations' manufacturing facilities and the original engineering site, located in Gundlupet, Karnataka.",
          },
          foundingDate: "2024",
          description: "Climate technology company processing waste rock and weathered rock into IS 383:2016 compliant manufactured sand and aggregates.",
        },
      },
    ],
  });
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
    <div className="relative min-h-screen overflow-x-hidden bg-[#F7F7F7] text-[#1b1b1b]">
      <div className="fixed inset-0 -z-30 bg-[#F7F7F7]">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        >
          <source src={aboutBackgroundVideo} type="video/mp4" />
        </video>
      </div>
      <div className="fixed inset-0 -z-20 bg-[#F7F7F7]/55" />

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
              Greenrock Innovations operates a network of manufacturing facilities producing
              engineered sand and aggregates from reclaimed, weathered rock — the largest being
              Begur Sands Pvt. Ltd. in Karnataka. The operating system was designed to prioritise
              compliance, consistency, and traceability before scale.
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
                  After the initial research phase, the ecosystem moved through failure, discipline, and then governed scale.
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

            <section className="mt-20">
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              >
                <span className="text-[10px] font-mono uppercase tracking-[0.32em] text-[#343434]">
                  Core Team
                </span>
                <h2 className="mt-3 text-4xl font-display font-black tracking-tight text-[#1b1b1b] md:text-5xl">
                  Track record built in the field.{" "}
                  <span className="italic font-normal">Not on paper.</span>
                </h2>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#343434] md:text-base">
                  Five operators with one hundred and fifty four cumulative years across cement, mining,
                  institutional governance, and large-scale industrial deployment — building the ecosystem
                  with the discipline the next decade of construction procurement will be measured against.
                </p>
              </motion.div>

              <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {TEAM.map((member, i) => (
                  <motion.article
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.55, delay: i * 0.06 }}
                    className="rounded-2xl border border-[#6B6B6B]/25 bg-[#EFEAE3]/74 p-7 shadow-[0_14px_30px_rgba(17,24,39,0.12)] md:p-8"
                  >
                    <h3 className="text-xl font-display font-black tracking-tight text-[#1b1b1b] md:text-2xl">
                      {member.name}
                    </h3>
                    <p className="mt-2 text-[10px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">
                      {member.role}
                    </p>
                    <p className="mt-4 text-[11px] font-mono italic leading-relaxed text-[#6B6B6B]">
                      {member.credentials}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-[#343434] md:text-[15px]">
                      {member.bio}
                    </p>
                  </motion.article>
                ))}
              </div>
            </section>

            <section className="mt-20 max-w-3xl">
              <FaqSection
                tone="light"
                eyebrow="FAQ — About Greenrock"
                title="What people most often ask."
                faqs={ABOUT_FAQS}
              />
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
                      Follow your progress as you move through the ecosystem's build journey.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </motion.aside>
        </div>
      </main>

      <SiteFooter tone="light" />
    </div>
  );
}
