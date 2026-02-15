import Navbar from "@/components/Navbar";
import miningVideo from "@/assets/videos/mining-extraction.mp4";

export default function Invest() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Navbar />

      <main className="pt-20">
        <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
          <video
            className="absolute inset-0 h-full w-full object-cover opacity-35"
            autoPlay
            muted
            loop
            playsInline
            preload="none"
          >
            <source src={miningVideo} type="video/mp4" />
          </video>
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
