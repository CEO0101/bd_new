import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Droplets, Info, Landmark, Leaf, Minus, Plus, Recycle } from "lucide-react";
import Navbar from "@/components/Navbar";

type CalculatorCardProps = {
  icon: LucideIcon;
  title: string;
  value: string;
  unit: string;
  subtitle: string;
};

type LogicItem = {
  id: "carbon" | "water" | "land";
  title: string;
  label: string;
  content: string;
};

type ContextualCard = {
  id: "carbon" | "water" | "land";
  icon: LucideIcon;
  title: string;
  value: string;
  gauge: number;
  context: string;
};

const CalculatorCard = ({ icon: Icon, title, value, unit, subtitle }: CalculatorCardProps) => (
  <div className="rounded-xl border border-white/10 bg-gradient-to-br from-zinc-900/40 to-black p-6 shadow-xl transition-all duration-500 hover:border-white/30 hover:shadow-[0_15px_30px_rgba(255,255,255,0.1)]">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/20 bg-gradient-to-br from-white/5 to-transparent text-white/40 transition-colors">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mb-1 text-xs font-mono font-bold uppercase tracking-widest text-white/40">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-display font-black tracking-tighter text-white">{value}</span>
      <span className="text-xs font-mono text-white/40">{unit}</span>
    </div>
    <p className="mt-4 border-t border-white/10 pt-3 text-xs leading-relaxed text-white/40">{subtitle}</p>
  </div>
);

const Footer = () => (
  <footer className="border-t border-white/10 bg-black py-32 text-white">
    <div className="container mx-auto px-6">
      <div className="grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="mb-8 flex items-center gap-3">
            <div className="h-8 w-8 rotate-45 transform rounded-sm bg-white" />
            <span className="font-display text-lg font-bold tracking-tight uppercase text-white">
              BLACK DIAMOND
            </span>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/60">
            Building without borrowing from its future. A cleaner way for India to grow.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-colors hover:bg-white/10">
              <span className="sr-only">Twitter</span>
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-white/40">Solutions</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">M-Sand</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">P-Sand</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Aggregates</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Pavers</a></li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-white/40">Company</h3>
          <ul className="space-y-3">
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">About</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Technology</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Impact</a></li>
            <li><a href="#" className="text-sm text-white/60 transition-colors hover:text-white">Contact</a></li>
          </ul>
        </div>

        <div className="lg:col-span-1">
          <h3 className="mb-6 text-sm font-mono font-bold uppercase tracking-widest text-white/40">Stay Updated</h3>
          <p className="mb-4 text-sm text-white/60">Subscribe to our newsletter for the latest updates on sustainable construction.</p>
          <form className="space-y-3">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full rounded-sm border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder-white/40 transition-colors focus:border-white focus:outline-none"
              required
            />
            <button
              type="submit"
              className="w-full rounded-sm bg-white px-4 py-3 text-sm font-bold tracking-widest text-black uppercase transition-colors hover:bg-white/90"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className="mt-16 border-t border-white/10 pt-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs font-mono uppercase tracking-widest text-white/40">
            © {new Date().getFullYear()} Precision Granite Recovery
          </p>
          <div className="flex gap-8 text-xs font-mono uppercase tracking-widest text-white/40">
            <a href="#" className="transition-colors hover:text-white">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-white">Terms of Service</a>
            <a href="#" className="transition-colors hover:text-white">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default function ImpactCalculator() {
  const [tons, setTons] = useState<number>(0);
  const [openLogicId, setOpenLogicId] = useState<LogicItem["id"] | null>("carbon");

  const [results, setResults] = useState({
    sandSaved: 0,
    wasteDiverted: 0,
    waterSavedKL: 0,
    waterReuseLitres: 0,
    carbonTreeYears: 0,
    landPressureReductionPct: 0,
    waterReuseRatePct: 0,
  });

  useEffect(() => {
    const sandSaved = tons * 0.75;
    const wasteDiverted = tons;

    const conventionalWaterLitresPerTon = 2100;
    const waterReuseRate = 0.65;
    const waterReuseLitres = tons * conventionalWaterLitresPerTon * waterReuseRate;
    const waterSavedKL = waterReuseLitres / 1000;

    const modeledAvoidedCo2KgPerTon = 70;
    const totalAvoidedCo2Kg = tons * modeledAvoidedCo2KgPerTon;
    const carbonTreeYears = totalAvoidedCo2Kg / 22.5;

    const landPressureReductionPct = tons === 0 ? 0 : Math.min(75, (sandSaved / tons) * 100);

    setResults({
      sandSaved,
      wasteDiverted,
      waterSavedKL,
      waterReuseLitres,
      carbonTreeYears,
      landPressureReductionPct,
      waterReuseRatePct: waterReuseRate * 100,
    });
  }, [tons]);

  const logicItems: LogicItem[] = [
    {
      id: "carbon",
      title: "Carbon Logic",
      label: "Why this number?",
      content:
        "This number uses industry-accepted carbon uptake proxies (~20-25 kg CO2 per mature tree per year) to contextualise avoided emissions for material supplied. Outputs represent directional equivalence, not claims of planting or carbon credits.",
    },
    {
      id: "water",
      title: "Water Logic",
      label: "Water reuse explained",
      content:
        "Our system's water reuse is based on internal system modelling and iterative R&D. The output range reflects average reuse behaviour compared with conventional single-pass processing.",
    },
    {
      id: "land",
      title: "Land Pressure Logic",
      label: "Land & extraction context",
      content:
        "This indicator reflects a directional reduction in pressure on river sand and fresh extraction zones based on circular processing of already-disturbed stone. This is a contextual comparative, not a quantified absolute.",
    },
  ];

  const contextualCards: ContextualCard[] = [
    {
      id: "carbon",
      icon: Leaf,
      title: "Carbon Contextual Equivalent",
      value: `~${Math.round(results.carbonTreeYears).toLocaleString()} tree-years`,
      gauge: tons === 0 ? 0 : Math.min(100, 28 + Math.log10(tons + 1) * 22),
      context:
        "Based on conservative benchmarks from material modelling and standard carbon uptake proxies (~20-25 kg CO2 per mature tree / year). This is a contextual equivalence, not a claim of planting, removal, or offsets.",
    },
    {
      id: "water",
      icon: Droplets,
      title: "Fresh Water Reuse Equivalent",
      value: `~${Math.round(results.waterReuseLitres).toLocaleString()} litres`,
      gauge: results.waterReuseRatePct,
      context:
        "Calculated from BlackDiamond system design logic, where water reuse is an engineered outcome (60-70% reuse simulated across cycles). Displayed with intuitive gauges.",
    },
    {
      id: "land",
      icon: Landmark,
      title: "Land & Extraction Pressure",
      value: `~${results.landPressureReductionPct.toFixed(0)}% reduced pressure`,
      gauge: results.landPressureReductionPct,
      context:
        "Contextual indicator based on reduced reliance on river sand and new extraction. Expressed as a percentage relative to conventional baseline.",
    },
  ];

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="pb-16 pt-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-display font-black tracking-tighter text-white uppercase md:text-6xl">
              Environmental <br /> <span className="font-light italic text-white/20">Impact Calculator</span>
            </h1>
            <p className="text-lg leading-relaxed font-light text-white/60">
              Measure the contextual impact of material supplied — translated into meaningful environmental equivalences.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <div className="space-y-4 rounded-xl border border-white/10 bg-zinc-900/40 p-6 shadow-xl premium-blur-dark">
                <div>
                  <label htmlFor="tons" className="mb-3 block text-sm font-mono font-bold tracking-widest text-white uppercase">
                    Material Supplied
                  </label>
                  <div className="relative">
                    <input
                      id="tons"
                      type="text"
                      inputMode="numeric"
                      value={tons.toString()}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        setTons(val === "" ? 0 : parseInt(val, 10));
                      }}
                      className="w-full rounded-lg border border-white/10 bg-black px-4 py-3 text-xl font-black text-white transition-colors focus:border-white/30 focus:outline-none"
                      placeholder="e.g., 0"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold tracking-widest text-white/40">TONS</span>
                  </div>
                </div>

                <div className="flex gap-3 rounded-lg border border-white/10 bg-zinc-800/50 p-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                  <p className="text-xs leading-relaxed text-white/35">
                    Benchmarks use conservative system modelling assumptions and calibrated operating ranges.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-wider text-white uppercase">Environmental Indicators</h3>
                <div className="space-y-2">
                  {[
                    "Reduced river sand mining",
                    "Reduced slurry dumping and groundwater contamination",
                    "Reduced dependency on virgin aggregates",
                  ].map((indicator) => (
                    <div key={indicator} className="flex items-center gap-2 text-xs text-white/35">
                      <ArrowRight className="h-2 w-2 text-white/45" />
                      {indicator}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:col-span-2">
              <CalculatorCard
                icon={Landmark}
                title="River Sand Saved"
                value={results.sandSaved.toLocaleString()}
                unit="tons"
                subtitle="Contextual replacement of conventional river sand demand through circular material supply."
              />
              <CalculatorCard
                icon={Recycle}
                title="Waste Diverted"
                value={results.wasteDiverted.toLocaleString()}
                unit="tons"
                subtitle="Industrial stone waste redirected from dumping pathways into usable construction outputs."
              />
              <CalculatorCard
                icon={Droplets}
                title="Fresh Water Intake Avoided"
                value={results.waterSavedKL.toLocaleString(undefined, { maximumFractionDigits: 1 })}
                unit="KL"
                subtitle="Water demand reduced through looped reuse logic compared with conventional single-pass handling."
              />
              <CalculatorCard
                icon={Leaf}
                title="Land Pressure Reduction"
                value={results.landPressureReductionPct.toFixed(0)}
                unit="%"
                subtitle="Directional reduction in extraction pressure relative to conventional baseline dependency."
              />
            </div>
          </div>

          <section className="mt-14">
            <div className="mb-6">
              <h2 className="text-3xl font-display font-black tracking-tight text-white md:text-4xl">
                Contextual Environmental Equivalences
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-white/55 md:text-base">
                Equivalent indicators are displayed below the calculator to connect production outcomes with intuitive environmental context.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {contextualCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.id} className="rounded-2xl border border-white/12 bg-zinc-900/45 p-6 premium-blur-dark">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white/70">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-white/40">{card.title}</p>
                    <p className="mt-2 text-2xl font-display font-black tracking-tight text-white md:text-3xl">{card.value}</p>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#A8C3B1] via-[#cfe2d6] to-[#f1f5f2]"
                          style={{ width: `${Math.max(0, Math.min(card.gauge, 100))}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-white/35">
                        Gauge: {card.gauge.toFixed(0)}%
                      </p>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-white/55">Context: {card.context}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-white/10 bg-zinc-900/35 p-6 premium-blur-dark">
            <h3 className="text-2xl font-display font-black text-white">Method Logic</h3>
            <p className="mt-2 text-sm text-white/55">Expandable reference notes for each contextual indicator.</p>

            <div className="mt-5 divide-y divide-white/10">
              {logicItems.map((item) => {
                const isOpen = openLogicId === item.id;
                return (
                  <div key={item.id} className="py-1">
                    <button
                      type="button"
                      onClick={() => setOpenLogicId(isOpen ? null : item.id)}
                      className="flex w-full items-center justify-between gap-4 py-4 text-left"
                    >
                      <div>
                        <p className="text-base font-display font-black tracking-tight text-white">{item.title}</p>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/45">{item.label}</p>
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/70">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="pb-4 pr-12 text-sm leading-relaxed text-white/60">
                        {item.content}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-[#A8C3B1]/25 bg-gradient-to-br from-[#A8C3B1]/10 to-transparent p-7">
            <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#c9dacd]">Research Framing</p>
            <p className="mt-4 text-sm leading-relaxed text-white/75 md:text-base">
              These outputs are derived from in-house research and calibrated system models built through years of engineering R&D. They have been fine-tuned using conservative industry benchmarks and systems data from operational testing.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#dce8e0] md:text-base">
              This framing gives credibility without self-doubt.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
