import { motion } from "framer-motion";

export default function Impact() {
  return (
    <section id="impact" className="py-24 bg-zinc-950 border-t border-white/10">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-20">
          
          {/* Left Column: Why It Matters */}
          <div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why the way we build <br/>
                <span className="text-gray-600">now matters.</span>
              </h2>
              <p className="text-lg text-gray-400 leading-relaxed mb-8">
                India does not need to choose between development and responsibility. It needs systems that allow both to exist together—quietly, consistently, and at scale.
              </p>
              <div className="p-6 bg-white/5 border-l-4 border-primary rounded-r-sm">
                <p className="text-white font-medium italic">
                  "Some of the most important changes happen beneath the surface. They shape everything built above it."
                </p>
              </div>
            </motion.div>

            <div className="space-y-8">
              <h3 className="text-sm font-mono uppercase tracking-widest text-primary">Technical Impact</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 border border-white/10 bg-card rounded-sm">
                  <div className="text-3xl font-display font-bold text-white mb-1">100%</div>
                  <div className="text-xs text-muted-foreground uppercase">Material Usage</div>
                </div>
                <div className="p-4 border border-white/10 bg-card rounded-sm">
                  <div className="text-3xl font-display font-bold text-white mb-1">Zero</div>
                  <div className="text-xs text-muted-foreground uppercase">External Waste</div>
                </div>
                <div className="p-4 border border-white/10 bg-card rounded-sm">
                  <div className="text-3xl font-display font-bold text-white mb-1">Scale</div>
                  <div className="text-xs text-muted-foreground uppercase">Industrial Ready</div>
                </div>
                <div className="p-4 border border-white/10 bg-card rounded-sm">
                  <div className="text-3xl font-display font-bold text-white mb-1">Future</div>
                  <div className="text-xs text-muted-foreground uppercase">Sustainable Growth</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Environmental Logic */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-lg opacity-20" />
            
            <div className="h-full border border-white/10 p-8 md:p-12 rounded-lg bg-card/50 backdrop-blur-sm relative z-10">
              <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-mono mb-8 rounded-full">
                ENVIRONMENTAL LOGIC
              </span>
              
              <div className="space-y-12">
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Cumulative Impact</h4>
                  <p className="text-muted-foreground">
                    Environmental impact is cumulative by nature. What enters shared systems continues to move—through air that circulates freely, through land that supports more than buildings.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Slowing the Movement</h4>
                  <p className="text-muted-foreground">
                    When materials are produced with greater control and fewer disturbances, this movement begins to slow. Not abruptly. But decisively.
                  </p>
                </div>
                
                <div>
                  <h4 className="text-xl font-bold text-white mb-3">Refined Progress</h4>
                  <p className="text-muted-foreground">
                    Growth continues. Its footprint simply stops expanding outward. This is not a pause in progress. It is a refinement of it.
                  </p>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10 text-center md:text-left">
                <h3 className="text-2xl font-display font-bold text-white mb-2">Designed for Long-Term Value</h3>
                <p className="text-sm text-gray-500">
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