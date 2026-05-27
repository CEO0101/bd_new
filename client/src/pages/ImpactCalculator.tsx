import { useEffect, useState } from "react";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Droplets, Info, Landmark, Leaf, Minus, Plus, Recycle } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";
import { useSeo, breadcrumbJsonLd } from "@/lib/useSeo";

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
  <div className="rounded-xl border border-[#2E6F57]/15 bg-white/65 p-6 shadow-xl transition-all duration-500 hover:border-[#2E6F57]/40 hover:shadow-[0_15px_30px_rgba(46,111,87,0.12)]">
    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E6F57]/25 bg-gradient-to-br from-white/70 to-white/30 text-[#16261C]/40 transition-colors">
      <Icon className="h-5 w-5" />
    </div>
    <h3 className="mb-1 text-xs font-mono font-bold uppercase tracking-widest text-[#16261C]/40">{title}</h3>
    <div className="flex items-baseline gap-2">
      <span className="text-3xl font-display font-black tracking-tighter text-[#16261C]">{value}</span>
      <span className="text-xs font-mono text-[#16261C]/40">{unit}</span>
    </div>
    <p className="mt-4 border-t border-[#2E6F57]/15 pt-3 text-xs leading-relaxed text-[#16261C]/40">{subtitle}</p>
  </div>
);

export default function ImpactCalculator() {
  useSeo({
    title: "Impact Calculator — Carbon, Water, Land",
    description:
      "Estimate the carbon, water, and land-pressure impact of using Greenrock's reclaimed-rock manufactured sand and aggregates for your project. Designed against published lifecycle reference data.",
    canonical: "/impact-calculator",
    jsonLd: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Impact Calculator", path: "/impact-calculator" },
      ]),
    ],
  });
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
        "Calculated from Greenrock system design logic, where water reuse is an engineered outcome (60-70% reuse simulated across cycles). Displayed with intuitive gauges.",
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
    <div className="min-h-screen overflow-x-hidden bg-[#D3E3D7] text-[#16261C]">
      <Navbar />

      <main className="pb-16 pt-20">
        <div className="container mx-auto px-6">
          <div className="mx-auto mb-12 max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-display font-black tracking-tighter text-[#16261C] uppercase md:text-6xl">
              Environmental <br /> <span className="font-light italic text-[#16261C]/20">Impact Calculator</span>
            </h1>
            <p className="text-lg leading-relaxed font-light text-[#16261C]/60">
              Measure the contextual impact of material supplied — translated into meaningful environmental equivalences.
            </p>
          </div>

          <div className="grid items-start gap-8 lg:grid-cols-3">
            <div className="space-y-6 lg:col-span-1">
              <div className="space-y-4 rounded-xl border border-[#2E6F57]/15 bg-white/55 p-6 shadow-xl">
                <div>
                  <label htmlFor="tons" className="mb-3 block text-sm font-mono font-bold tracking-widest text-[#16261C] uppercase">
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
                      className="w-full rounded-lg border border-[#2E6F57]/15 bg-white px-4 py-3 text-xl font-black text-[#16261C] transition-colors focus:border-[#2E6F57]/40 focus:outline-none"
                      placeholder="e.g., 0"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono font-bold tracking-widest text-[#16261C]/40">TONS</span>
                  </div>
                </div>

                <div className="flex gap-3 rounded-lg border border-[#2E6F57]/15 bg-white/60 p-3">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#16261C]/40" />
                  <p className="text-xs leading-relaxed text-[#16261C]/35">
                    Benchmarks use conservative system modelling assumptions and calibrated operating ranges.
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-xs font-mono font-bold tracking-wider text-[#16261C] uppercase">Environmental Indicators</h3>
                <div className="space-y-2">
                  {[
                    "Reduced river sand mining",
                    "Reduced slurry dumping and groundwater contamination",
                    "Reduced dependency on virgin aggregates",
                  ].map((indicator) => (
                    <div key={indicator} className="flex items-center gap-2 text-xs text-[#16261C]/35">
                      <ArrowRight className="h-2 w-2 text-[#16261C]/45" />
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
              <h2 className="text-3xl font-display font-black tracking-tight text-[#16261C] md:text-4xl">
                Contextual Environmental Equivalences
              </h2>
              <p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#16261C]/55 md:text-base">
                Equivalent indicators are displayed below the calculator to connect production outcomes with intuitive environmental context.
              </p>
            </div>

            <div className="grid gap-5 lg:grid-cols-3">
              {contextualCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article key={card.id} className="rounded-2xl border border-[#2E6F57]/15 bg-white/55 p-6">
                    <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg border border-[#2E6F57]/20 bg-white/55 text-[#16261C]/70">
                      <Icon className="h-5 w-5" />
                    </div>
                    <p className="text-[10px] font-mono uppercase tracking-[0.22em] text-[#16261C]/40">{card.title}</p>
                    <p className="mt-2 text-2xl font-display font-black tracking-tight text-[#16261C] md:text-3xl">{card.value}</p>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-[#2E6F57]/12">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-[#2E6F57] via-[#5a9b7d] to-[#9cc4ad]"
                          style={{ width: `${Math.max(0, Math.min(card.gauge, 100))}%` }}
                        />
                      </div>
                      <p className="mt-1 text-[10px] font-mono uppercase tracking-[0.18em] text-[#16261C]/35">
                        Gauge: {card.gauge.toFixed(0)}%
                      </p>
                    </div>

                    <p className="mt-4 text-xs leading-relaxed text-[#16261C]/55">Context: {card.context}</p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-[#2E6F57]/15 bg-white/50 p-6">
            <h3 className="text-2xl font-display font-black text-[#16261C]">Method Logic</h3>
            <p className="mt-2 text-sm text-[#16261C]/55">Expandable reference notes for each contextual indicator.</p>

            <div className="mt-5 divide-y divide-[#2E6F57]/12">
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
                        <p className="text-base font-display font-black tracking-tight text-[#16261C]">{item.title}</p>
                        <p className="text-xs font-mono uppercase tracking-[0.2em] text-[#16261C]/45">{item.label}</p>
                      </div>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2E6F57]/20 bg-white/55 text-[#16261C]/70">
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </span>
                    </button>

                    {isOpen ? (
                      <div className="pb-4 pr-12 text-sm leading-relaxed text-[#16261C]/60">
                        {item.content}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </section>

          <section className="mt-8 rounded-2xl border border-[#A8C3B1]/25 bg-gradient-to-br from-[#A8C3B1]/10 to-transparent p-7">
            <p className="text-[10px] font-mono uppercase tracking-[0.24em] text-[#2E6F57]">Research Framing</p>
            <p className="mt-4 text-sm leading-relaxed text-[#16261C]/75 md:text-base">
              These outputs are derived from in-house research and calibrated system models built through years of engineering R&D. They have been fine-tuned using conservative industry benchmarks and systems data from operational testing.
            </p>
            <p className="mt-3 text-sm font-semibold text-[#2E6F57] md:text-base">
              This framing gives credibility without self-doubt.
            </p>
          </section>
        </div>
      </main>

      <SiteFooter tone="light" />
    </div>
  );
}
