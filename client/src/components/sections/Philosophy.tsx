import { motion } from "framer-motion";

export default function Philosophy() {
  return (
    <section id="philosophy" className="py-24 bg-white">
      <div className="container px-6 mx-auto">
        <div className="grid lg:grid-cols-12 gap-16">
          <div className="lg:col-span-5 border-r border-border pr-12">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-4xl font-display font-bold leading-tight mb-8"
            >
              India is building <br/> <span className="text-primary italic">faster than ever.</span>
            </motion.h2>
            <p className="text-muted-foreground leading-relaxed">
              As India expands, its cities rise higher and its infrastructure stretches wider. Homes, hospitals, institutions, and industries are being created at an unprecedented pace.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-12">
            <p className="text-2xl font-light text-foreground leading-snug">
              Every structure rests on materials that are rarely questioned. For decades, construction depended on what was available—not because it was ideal, but because it was necessary.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-6 bg-muted">
                <span className="text-xs font-mono text-primary mb-2 block tracking-widest">CONTEXT</span>
                <p className="text-sm text-muted-foreground">The consequences of this approach were not immediate. They moved slowly, dispersing beyond their point of origin.</p>
              </div>
              <div className="p-6 bg-muted">
                <span className="text-xs font-mono text-primary mb-2 block tracking-widest">REALITY</span>
                <p className="text-sm text-muted-foreground">Over time, this became the background of growth. Familiar. Unexamined. Accepted.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-24 p-12 bg-foreground text-background relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 blur-[100px]" />
          <div className="relative z-10 max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">Development was never the issue. <br/> <span className="text-primary">The absence of alternatives was.</span></h3>
            <p className="text-background/70 text-lg leading-relaxed">
              India could not slow down. Infrastructure had to be built. Materials had to come from somewhere. The question was never whether construction should happen—but whether it could happen differently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}