import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Truck,
  Factory,
  Filter,
  Droplets,
  Layers,
  PackageCheck,
} from "lucide-react";

type Step = {
  title: string;
  desc: string;
  Icon: React.ComponentType<{ className?: string }>;
  tag: string;
};

function useViewportWidth() {
  const [width, setWidth] = useState<number>(() =>
    typeof window === "undefined" ? 1200 : window.innerWidth,
  );

  useEffect(() => {
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return width;
}

function useViewportHeight() {
  const [height, setHeight] = useState<number>(() =>
    typeof window === "undefined" ? 800 : window.innerHeight,
  );

  useEffect(() => {
    const onResize = () => setHeight(window.innerHeight);
    window.addEventListener("resize", onResize, { passive: true });
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return height;
}

function useElementWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  fallback: number,
) {
  const [width, setWidth] = useState<number>(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ro = new ResizeObserver((entries) => {
      const next = entries[0]?.contentRect?.width;
      if (typeof next === "number") setWidth(next);
    });

    ro.observe(el);
    return () => ro.disconnect();
  }, [ref]);

  return width;
}

function useElementScrollWidth<T extends HTMLElement>(
  ref: React.RefObject<T | null>,
  fallback: number,
) {
  const [width, setWidth] = useState<number>(fallback);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => setWidth(el.scrollWidth);
    update();

    const ro = new ResizeObserver(() => update());
    ro.observe(el);

    // If fonts/images change layout after load.
    window.addEventListener("load", update);
    return () => {
      window.removeEventListener("load", update);
      ro.disconnect();
    };
  }, [ref]);

  return width;
}

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

function ProcessStepCard({
  step,
  index,
  position,
}: {
  step: Step;
  index: number;
  position: import("framer-motion").MotionValue<number>;
}) {
  const dist = useTransform(position, (p) => Math.abs(p - index));

  const scale = useTransform(dist, [0, 1], [1.03, 1]);
  // Keep cards visible at all times (never fade to 0).
  const opacity = useTransform(dist, [0, 0.9, 2.2], [1, 0.75, 0.45]);
  const brightness = useTransform(dist, [0, 1.2], [1.05, 0.95]);
  const brightnessFilter = useTransform(brightness, (b: number) =>
    `brightness(${b})`,
  );

  const iconOpacity = useTransform(dist, [0, 0.8, 2], [1, 0.55, 0.25]);

  const descOpacity = useTransform(dist, [0, 0.8, 2], [1, 0.6, 0.25]);

  return (
    <motion.div
      style={{ scale, opacity, filter: brightnessFilter }}
      className="relative shrink-0 w-[min(520px,85vw)] min-h-[320px] overflow-hidden rounded-2xl border border-white/10 premium-blur-dark bg-black/40 transition-colors"
      aria-label={`Step ${index + 1}: ${step.title}`}
    >
      {/* Decorative glow, stronger on active */}
      <motion.div
        aria-hidden
        style={{ opacity: useTransform(dist, [0, 1.4], [1, 0]) }}
        className="absolute inset-0 pointer-events-none transition-opacity duration-500"
      >
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
      </motion.div>

      <div className="relative p-8 flex flex-col h-full">
        <div className="flex items-start justify-between gap-4">
          <motion.div
            style={{ opacity: iconOpacity }}
            className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60"
          >
            <step.Icon className="w-6 h-6" />
          </motion.div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
            {step.tag}
          </div>
        </div>

        <h3 className="mt-6 text-xl font-bold text-white leading-tight">
          <span className="text-white/50 mr-2">0{index + 1}</span>
          {step.title}
        </h3>
        <motion.p
          style={{ opacity: descOpacity }}
          className="mt-3 text-sm text-white/60 leading-relaxed"
        >
          {step.desc}
        </motion.p>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-[11px] text-white/40">
            Designed for operational stability, quality consistency, and regulatory audit readiness.
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Process() {
  const shouldReduceMotion = useReducedMotion();
  const pinRef = useRef<HTMLDivElement | null>(null);
  const trackViewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const viewportWidth = useViewportWidth();
  const viewportHeight = useViewportHeight();
  const trackWidth = useElementWidth(trackViewportRef, viewportWidth);
  const trackScrollWidth = useElementScrollWidth(trackRef, trackWidth);

  const steps: Step[] = [
    {
      title: "Waste Intake & Segregation",
      desc: "Granite slurry, dust, and rejected blocks are received, logged, and segregated for controlled processing.",
      Icon: Truck,
      tag: "Input Control",
    },
    {
      title: "Crushing & Screening",
      desc: "Enclosed crushing and multi-deck screening convert oversize waste into consistent feed fractions.",
      Icon: Factory,
      tag: "Size Reduction",
    },
    {
      title: "Washing & Fines Recovery",
      desc: "High-efficiency washing removes silt and recovers valuable fines for engineered sand outputs.",
      Icon: Filter,
      tag: "Material Quality",
    },
    {
      title: "Closed-Loop Water Recycling",
      desc: "Process water is clarified and reused, reducing freshwater demand and preventing discharge to the environment.",
      Icon: Droplets,
      tag: "Zero Liquid Discharge",
    },
    {
      title: "Grading & Stockyard Management",
      desc: "Products are graded (M-sand, P-sand, aggregates) and managed in dedicated bays to ensure compliance.",
      Icon: Layers,
      tag: "Consistency",
    },
    {
      title: "Dispatch & Traceability",
      desc: "Certified outputs are dispatched with batch traceability to support infrastructure-grade usage and audits.",
      Icon: PackageCheck,
      tag: "Compliance",
    },
  ];

  const { scrollYProgress } = useScroll({
    target: pinRef,
    offset: ["start start", "end end"],
  });

  // IMPORTANT:
  // Horizontal motion MUST be 1:1 tied to scroll progress (no lag), otherwise the
  // pinned section can end while the animation is still catching up on fast scroll.
  // So we use raw scrollYProgress for the track translation.
  // We keep a separate spring for secondary visuals (parallax/soft state changes).
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    mass: 0.9,
  });

  // Create a smoother version of scroll progress for the horizontal track movement
  const smoothTrackProgress = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
    mass: 1.2,
  });

  // UX tuning:
  // Classic scroll pinning uses 1:1 mapping (vertical distance == horizontal distance).
  // That can feel like the page is "stuck" immediately after the hero.
  // We speed it up by shortening the pin height (less vertical scroll needed),
  // while keeping the animation mapped to the full 0..1 scroll progress.
  const scrollSpeed = 1.8; // higher = faster overall (less vertical pin time)

  const position = useTransform(scrollYProgress, (p) => p * (steps.length - 1));

  const cardWidth = useMemo(() => {
    // Matches tailwind w-[min(520px,85vw)] above (relative to the visible track viewport)
    return Math.min(520, Math.floor(trackWidth * 0.85));
  }, [trackWidth]);
  const gap = 24;
  const side = useMemo(
    () => Math.max(16, Math.floor((trackWidth - cardWidth) / 2)),
    [trackWidth, cardWidth],
  );

  // Scroll math constraint:
  // section height = (total horizontal content width − viewport width) + viewport height
  // Here: trackScrollWidth already includes left/right spacer widths.
  const measuredHorizontalDistance = useMemo(
    () => Math.max(0, trackScrollWidth - trackWidth),
    [trackScrollWidth, trackWidth],
  );

  // Provide a stable (non-zero) fallback distance immediately so the pinned section
  // never collapses while ResizeObserver / fonts settle.
  const estimatedScrollWidth = useMemo(() => {
    const cards = steps.length * cardWidth;
    const gaps = Math.max(0, steps.length - 1) * gap;
    const spacers = side * 2;
    return cards + gaps + spacers;
  }, [steps.length, cardWidth, gap, side]);

  const estimatedHorizontalDistance = useMemo(
    () => Math.max(0, estimatedScrollWidth - trackWidth),
    [estimatedScrollWidth, trackWidth],
  );

  // Never allow the required horizontal distance to shrink mid-interaction.
  const [lockedHorizontalDistance, setLockedHorizontalDistance] = useState<number>(() =>
    Math.max(estimatedHorizontalDistance, measuredHorizontalDistance),
  );

  useEffect(() => {
    setLockedHorizontalDistance((prev) =>
      Math.max(prev, estimatedHorizontalDistance, measuredHorizontalDistance),
    );
  }, [estimatedHorizontalDistance, measuredHorizontalDistance]);

  const cardsX = useTransform(smoothTrackProgress, [0, 1], [0, -lockedHorizontalDistance]);
  const gridX = useTransform(smoothProgress, [0, 1], [0, -lockedHorizontalDistance * 0.25]);

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(position, "change", (p) => {
    const i = clamp(Math.round(p), 0, steps.length - 1);
    setActiveIndex(i);
  });

  const pinHeightPx = useMemo(() => {
    const pinDistance = lockedHorizontalDistance / scrollSpeed;
    return viewportHeight + pinDistance;
  }, [viewportHeight, lockedHorizontalDistance]);

  return (
    <section id="technology" className="relative bg-black border-y border-white/5 overflow-visible">
      {/* Desktop cinematic scroll-driven narrative (pinned until the horizontal travel completes) */}
      <div
        ref={pinRef}
        className={shouldReduceMotion ? "hidden" : "hidden md:block"}
        style={{ height: `${pinHeightPx}px` }}
      >
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <motion.div aria-hidden style={{ x: gridX }} className="absolute inset-0 opacity-60">
              <div
                className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:56px_56px]"
                style={{ maskImage: "radial-gradient(circle at 50% 55%, black 0%, transparent 72%)" }}
              />
            </motion.div>
          </div>

          <div className="container mx-auto px-6 h-full flex flex-col">
            <div className="pt-24 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
                Process Architecture
              </div>
              <h2 className="mt-6 text-4xl font-display font-black text-white">
                CLOSED-LOOP <br />
                <span className="text-white/20">RECYCLING.</span>
              </h2>
              <p className="mt-6 text-lg text-white/60 leading-relaxed">
                A controlled, enclosed, and traceable workflow engineered to prevent environmental damage—eliminating
                slurry dumping, reducing river sand mining dependency, and protecting groundwater through closed-loop
                recovery systems.
              </p>

              <div className="mt-8 flex items-center gap-4">
                <a
                  href="#process-outcome"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-2 text-[11px] font-black uppercase tracking-widest text-white/80 hover:text-white hover:bg-white/10 transition-colors"
                >
                  Skip process
                </a>
                <div className="text-[11px] text-white/40">
                  Scroll to advance steps
                </div>
              </div>
            </div>

            <div ref={trackViewportRef} className="relative flex-1 flex items-center overflow-hidden">
              {/* Step counter */}
              <div className="absolute top-6 right-0 text-right">
                <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
                  Active Step
                </div>
                <div className="mt-2 h-10 overflow-hidden">
                  <AnimatePresence mode="popLayout" initial={false}>
                    <motion.div
                      key={activeIndex}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.25 }}
                      className="text-4xl font-display font-black text-white tracking-tighter"
                    >
                      0{activeIndex + 1}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Progress line */}
              <div className="absolute left-0 right-0 bottom-10">
                <div className="h-[1px] w-full bg-white/10" />
                <motion.div
                  aria-hidden
                  style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
                  className="h-[1px] w-full bg-gradient-to-r from-white/40 via-white/60 to-white/40"
                />
              </div>

              <motion.div
                ref={trackRef}
                style={{ x: cardsX }}
                className="flex items-stretch gap-6 will-change-transform"
              >
                {/* Spacer ensures first card can be centered at start */}
                <div aria-hidden className="shrink-0" style={{ width: side }} />

                {steps.map((step, i) => (
                  <ProcessStepCard key={step.title} step={step} index={i} position={position} />
                ))}

                {/* Spacer ensures last card can be centered at end */}
                <div aria-hidden className="shrink-0" style={{ width: side }} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      {/* Reduced-motion and mobile fallback (swipe/drag horizontal carousel) */}
      <div className={shouldReduceMotion ? "block" : "block md:hidden"}>
        <div className="container mx-auto px-6 py-24">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-[0.3em] text-white/40 font-bold">
              Process Architecture
            </div>
            <h2 className="mt-6 text-4xl font-display font-black text-white">
              CLOSED-LOOP <br />
              <span className="text-white/20">RECYCLING.</span>
            </h2>
            <p className="mt-6 text-lg text-white/60 leading-relaxed">
              A controlled, enclosed, and traceable workflow engineered to prevent environmental damage—eliminating
              slurry dumping, reducing river sand mining dependency, and protecting groundwater through closed-loop
              recovery systems.
            </p>
          </div>

          <div className="mt-12 -mx-6 px-6 overflow-x-auto">
            <div className="flex gap-6 snap-x snap-mandatory">
              {steps.map((step, i) => (
                <div key={step.title} className="snap-center">
                  {/* In fallback mode, render the same card design without scroll-lock logic */}
                  <div className="relative shrink-0 w-[min(520px,85vw)] overflow-hidden rounded-2xl border border-white/10 premium-blur-dark bg-black/40">
                    <div className="absolute inset-0 pointer-events-none">
                      <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
                    </div>
                    <div className="relative p-8 flex flex-col h-full">
                      <div className="flex items-start justify-between gap-4">
                        <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-white/60">
                          <step.Icon className="w-6 h-6" />
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-white/40 font-bold">
                          {step.tag}
                        </div>
                      </div>

                      <h3 className="mt-6 text-xl font-bold text-white leading-tight">
                        <span className="text-white/50 mr-2">0{i + 1}</span>
                        {step.title}
                      </h3>
                      <p className="mt-3 text-sm text-white/60 leading-relaxed">{step.desc}</p>
                      <div className="mt-8 pt-8 border-t border-white/10">
                        <p className="text-[11px] text-white/40">
                          Designed for operational stability, quality consistency, and regulatory audit readiness.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Outcome (normal vertical flow resumes after horizontal narrative) */}
      <div id="process-outcome" className="container mx-auto px-6 pb-24">
        <div className="rounded-2xl border border-white/20 bg-white/5 p-8">
          <p className="text-white/40 font-bold uppercase tracking-[0.2em] text-center text-sm">
            Outcome: engineered material recovery with closed-loop water reuse—preventing contamination while
            delivering certified M-sand, P-sand, aggregates, and value-added products.
          </p>
        </div>
      </div>
    </section>
  );
}
