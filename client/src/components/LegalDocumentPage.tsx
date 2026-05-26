import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

type LegalSection = {
  title: string;
  paragraphs: string[];
};

type LegalDocumentPageProps = {
  eyebrow: string;
  title: string;
  summary: string;
  effectiveDate: string;
  sections: LegalSection[];
};

export default function LegalDocumentPage({
  eyebrow,
  title,
  summary,
  effectiveDate,
  sections,
}: LegalDocumentPageProps) {
  return (
    <div className="min-h-screen bg-[#FFFFFF] text-[#1b1b1b]">
      <Navbar />

      <main className="pt-28">
        <section className="border-b border-black/10 px-6 pb-14">
          <div className="mx-auto max-w-4xl">
            <p className="text-[11px] font-mono uppercase tracking-[0.28em] text-[#2E6F57]">{eyebrow}</p>
            <h1 className="mt-5 max-w-3xl text-balance font-sans text-3xl font-semibold leading-[1.04] tracking-[0.01em] text-[#1b1b1b] md:text-5xl">
              {title}
            </h1>
            <div className="mt-8 grid gap-6 md:grid-cols-[minmax(0,1fr)_220px] md:items-end">
              <p className="max-w-2xl text-[15px] leading-8 text-[#1b1b1b]/72 md:text-[18px]">
                {summary}
              </p>
              <div className="border border-black/10 bg-black/[0.02] px-5 py-4">
                <p className="text-[11px] font-mono uppercase tracking-[0.24em] text-black/45">Effective Date</p>
                <p className="mt-2 text-[15px] text-[#1b1b1b]/72">{effectiveDate}</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6 py-14 md:py-20">
          <div className="mx-auto max-w-4xl space-y-10">
            {sections.map((section) => (
              <article key={section.title} className="border-t border-black/10 pt-8 first:border-t-0 first:pt-0">
                <h2 className="text-[24px] font-medium tracking-[0.01em] text-[#1b1b1b] md:text-[29px]">{section.title}</h2>
                <div className="mt-5 space-y-4">
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="max-w-3xl text-[15px] leading-8 text-[#1b1b1b]/72 md:text-[16px]">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter tone="light" />
    </div>
  );
}
