import Navbar from "@/components/Navbar";
// Real drone footage of land recovery at the Mysuru facility, not stock.
import landRecoveryVideo from "@/assets/videos/mysuru-land-recovery.mp4";
import { useSeo, breadcrumbJsonLd } from "@/lib/useSeo";

export default function Invest() {
  useSeo({
    title: "Invest — Greenrock Innovations",
    description:
      "Investment thesis: a circular climate-aligned construction materials platform built on Karnataka's first Waste Rock Royalty Recycle Permit. ~82% lower-carbon engineered aggregate at IS 383:2016 spec, governed by SOPs and PLC traceability.",
    canonical: "/invest",
    jsonLd: [
      breadcrumbJsonLd([
        { name: "Home", path: "/" },
        { name: "Invest", path: "/invest" },
      ]),
    ],
  });
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
          {/* preload="none" with a static <source> still lets some browsers
              begin a byte-range fetch once autoplay needs metadata.
              Omitting src until idle guarantees zero network activity
              until the page is actually interactive. */}
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            ref={(el: HTMLVideoElement | null) => {
              if (!el) return;
              if ("requestIdleCallback" in window) {
                requestIdleCallback(() => { el.src = landRecoveryVideo; el.load(); });
              } else {
                setTimeout(() => { el.src = landRecoveryVideo; el.load(); }, 2000);
              }
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/78 via-black/62 to-black/78" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(168,195,177,0.2),transparent_42%),radial-gradient(circle_at_80%_75%,rgba(255,255,255,0.1),transparent_35%)]" />

          <div className="relative z-10 flex min-h-[calc(100vh-5rem)] flex-col items-center justify-center px-6 text-center">
            <h1 className="text-4xl font-display font-black tracking-tight text-white uppercase md:text-6xl">
              INVESTOR PANEL
            </h1>
            <p className="mt-2 text-lg font-mono uppercase tracking-[0.26em] text-[#A8C3B1]">Coming Soon</p>
            <p className="mt-4 max-w-3xl text-xs leading-relaxed text-white/50 md:text-sm">
              This is not a full page yet - this is a premium coming-soon section that sits where the Investor Panel will eventually be.
            </p>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-white/65 md:text-base">
              For strategic capital and institutional partners with a disciplined, long-term horizon.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
