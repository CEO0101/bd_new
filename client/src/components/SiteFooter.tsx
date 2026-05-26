import { Link } from "wouter";

type FooterTone = "dark" | "light";

type SiteFooterProps = {
  tone?: FooterTone;
};

const EMAIL = "hello@greenrockinnovations.earth";

/* Greenrock mark — faceted gem with regeneration arrow */
function GreenrockMark({ tone }: { tone: FooterTone }) {
  const stroke = tone === "dark" ? "#9DD9B8" : "#2E6F57";
  const fill = tone === "dark" ? "rgba(157,217,184,0.16)" : "rgba(46,111,87,0.16)";
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <polygon points="16,3 28,16 16,29 4,16"
        fill={fill} stroke={stroke} strokeWidth="1.5" strokeLinejoin="round" />
      <polygon points="16,7 24,16 16,25 8,16"
        fill="none" stroke={stroke} strokeWidth="0.7" strokeOpacity="0.55" />
      <path d="M16 21 L16 12 M12 16 L16 12 L20 16"
        fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const toneStyles = {
  dark: {
    footer: "border-white/10 bg-black text-white",
    brandMark: "bg-white",
    brandText: "text-white",
    bodyText: "text-white/60",
    headingText: "text-white/40",
    socialBorder: "border-white/20",
    socialHover: "hover:bg-white/10",
    linkText: "text-white/60 hover:text-white",
    input: "bg-white/5 border-white/20 text-white placeholder-white/40 focus:border-white",
    button: "bg-white text-black hover:bg-white/90",
    divider: "border-white/10",
    legalText: "text-white/40",
    legalHover: "hover:text-white",
  },
  light: {
    footer: "border-[#6B6B6B]/20 bg-[#EFEAE3]/56 text-[#1b1b1b]",
    brandMark: "bg-[#2E6F57]",
    brandText: "text-[#2E6F57]",
    bodyText: "text-[#343434]",
    headingText: "text-[#343434]",
    socialBorder: "border-[#6B6B6B]/30",
    socialHover: "hover:bg-[#2E6F57]/10",
    linkText: "text-[#343434] hover:text-[#2E6F57]",
    input:
      "bg-[#F7F7F7] border-[#6B6B6B]/30 text-[#1b1b1b] placeholder-[#6B6B6B]/70 focus:border-[#2E6F57]",
    button: "bg-[#2E6F57] text-white hover:bg-[#295f4b]",
    divider: "border-[#6B6B6B]/20",
    legalText: "text-[#343434]",
    legalHover: "hover:text-[#2E6F57]",
  },
} as const;

function SocialIcon({ label, path, tone }: { label: string; path: string; tone: FooterTone }) {
  const style = toneStyles[tone];

  return (
    <a
      href="#"
      className={`flex h-10 w-10 items-center justify-center rounded-full border transition-colors ${style.socialBorder} ${style.socialHover}`}
    >
      <span className="sr-only">{label}</span>
      <svg className={`h-4 w-4 ${tone === "light" ? "text-[#343434]" : ""}`} fill="currentColor" viewBox="0 0 24 24">
        <path d={path} />
      </svg>
    </a>
  );
}

export default function SiteFooter({ tone = "dark" }: SiteFooterProps) {
  const style = toneStyles[tone];

  return (
    <footer className={`border-t py-32 ${style.footer}`}>
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-8 flex items-center gap-3">
              <GreenrockMark tone={tone} />
              <span className={`font-display text-lg font-bold tracking-tight uppercase ${style.brandText}`}>
                GREENROCK
                <span className="opacity-60 ml-2 text-sm font-mono tracking-[0.18em]">Innovations</span>
              </span>
            </div>
            <p className={`max-w-sm text-sm leading-relaxed ${style.bodyText}`}>
              Engineered construction materials from reclaimed, weathered rock. Built without borrowing from the river, the forest, or the future.
            </p>
            <div className="mt-8 flex gap-4">
              <SocialIcon
                tone={tone}
                label="LinkedIn"
                path="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
              />
              <SocialIcon
                tone={tone}
                label="Twitter"
                path="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"
              />
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className={`mb-6 text-sm font-mono font-bold uppercase tracking-widest ${style.headingText}`}>Solutions</h3>
            <ul className="space-y-3">
              <li><Link href="/products" className={`text-sm transition-colors ${style.linkText}`}>M-Sand</Link></li>
              <li><Link href="/products" className={`text-sm transition-colors ${style.linkText}`}>P-Sand</Link></li>
              <li><Link href="/products" className={`text-sm transition-colors ${style.linkText}`}>Aggregates</Link></li>
              <li><Link href="/products" className={`text-sm transition-colors ${style.linkText}`}>Pavers</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h3 className={`mb-6 text-sm font-mono font-bold uppercase tracking-widest ${style.headingText}`}>Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className={`text-sm transition-colors ${style.linkText}`}>About</Link></li>
              <li><Link href="/technology" className={`text-sm transition-colors ${style.linkText}`}>Technology</Link></li>
              <li><Link href="/impact-calculator" className={`text-sm transition-colors ${style.linkText}`}>Impact</Link></li>
            </ul>
            <div className={`mt-6 border-t pt-5 ${style.divider}`}>
              <p className={`text-[11px] font-mono uppercase tracking-[0.22em] ${style.headingText}`}>Contact</p>
              <a href={`mailto:${EMAIL}`} className={`mt-3 block break-all text-sm transition-colors ${style.linkText}`}>
                {EMAIL}
              </a>
            </div>
          </div>

          <div className="lg:col-span-1">
            <h3 className={`mb-6 text-sm font-mono font-bold uppercase tracking-widest ${style.headingText}`}>Stay Updated</h3>
            <p className={`mb-4 text-sm ${style.bodyText}`}>
              Subscribe to our newsletter for the latest updates on sustainable construction.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className={`w-full rounded-sm border px-4 py-3 text-sm transition-colors focus:outline-none ${style.input}`}
                required
              />
              <button
                type="submit"
                className={`w-full rounded-sm px-4 py-3 text-sm font-bold uppercase tracking-widest transition-colors ${style.button}`}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className={`mt-16 border-t pt-8 ${style.divider}`}>
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className={`text-center text-xs font-mono uppercase tracking-[0.22em] ${style.legalText}`}>
              © {new Date().getFullYear()} Greenrock Innovations
              <span className="opacity-50 mx-3">·</span>
              <span className="opacity-70">Operating Begur Sands Pvt. Ltd. & affiliated facilities</span>
            </p>
            <div className={`flex flex-wrap justify-center gap-4 text-xs font-mono uppercase tracking-widest md:gap-8 ${style.legalText}`}>
              <Link href="/privacy-policy" className={`transition-colors ${style.legalHover}`}>Privacy Policy</Link>
              <Link href="/terms-of-service" className={`transition-colors ${style.legalHover}`}>Terms of Service</Link>
              <Link href="/cookie-policy" className={`transition-colors ${style.legalHover}`}>Cookie Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
