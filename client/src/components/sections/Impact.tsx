import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section id="impact" className="py-32 bg-white relative">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-24">
          <div className="lg:col-span-7">
            <div className="space-y-16">
              <div className="max-w-2xl">
                <span className="text-[10px] font-mono uppercase tracking-[0.3em] font-bold mb-8 block">Environmental Logic</span>
                <h2 className="text-6xl md:text-8xl font-display font-black tracking-tighter leading-[0.85] mb-12">
                  FOOTPRINT <br/> REFINED.
                </h2>
                <p className="text-2xl font-light text-foreground leading-tight">
                  India does not need to choose between development and responsibility. It needs systems that allow both to exist together—quietly, consistently, and at scale.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-px bg-border border border-border">
                {[
                  { label: "Material Usage", value: "100%" },
                  { label: "External Waste", value: "ZERO" },
                  { label: "Recovery Rate", value: "MAX" },
                  { label: "Disruption", value: "MIN" }
                ].map((stat) => (
                  <div key={stat.label} className="bg-white p-10">
                    <p className="text-[10px] font-mono uppercase tracking-widest text-muted-foreground mb-4">{stat.label}</p>
                    <p className="text-5xl font-display font-black tracking-tighter">{stat.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="h-full flex flex-col justify-between border-l border-border pl-12 py-4">
              <div className="space-y-12">
                <div>
                  <h4 className="text-xs font-mono font-black uppercase mb-4 tracking-widest italic text-zinc-400">Cumulative Nature</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed italic">
                    "Environmental impact is cumulative by nature. What enters shared systems continues to move—through air that circulates freely, through land that supports more than buildings."
                  </p>
                </div>
                
                <div className="p-10 bg-zinc-900 text-white space-y-6">
                  <h4 className="text-2xl font-display font-bold uppercase tracking-tight">Slowing the movement.</h4>
                  <p className="text-xs text-white/50 leading-relaxed uppercase tracking-widest">
                    When materials are produced with greater control and fewer disturbances, this movement begins to slow. Not abruptly. But decisively.
                  </p>
                </div>
              </div>

              <div className="mt-20">
                <p className="text-xs font-mono uppercase tracking-[0.4em] font-bold mb-4">Long Term Value</p>
                <div className="h-[1px] w-full bg-foreground mb-8" />
                <p className="text-sm font-bold leading-relaxed uppercase">
                  This is infrastructure thinking—applied at the material level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}