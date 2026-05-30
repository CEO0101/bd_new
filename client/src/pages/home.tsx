import Hero, { CustomCursor } from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import { useSeo, faqJsonLd, SITE_ORIGIN } from "@/lib/useSeo";

// Site-wide FAQs — used to live in index.html as a global FAQPage block,
// moved here so they emit on / only. Per-page FAQs on About/Technology/
// Products avoid the "Duplicate field 'FAQPage'" critical error.
const HOME_FAQS = [
  {
    q: "What is manufactured sand (M-Sand)?",
    a: "Manufactured sand (M-Sand) is produced by crushing hard rock through a Vertical Shaft Impactor (VSI), then classifying particles by size using hydrocyclones. Unlike river sand, M-Sand has consistent grading, zero organic impurities, and ~82% lower embodied carbon. Greenrock Innovations produces IS 383:2016 Zone II and Zone III compliant M-Sand from waste and weathered rock at its Gundlupet, Karnataka facility.",
  },
  {
    q: "Is M-Sand better than river sand for construction?",
    a: "Yes. M-Sand offers several advantages over river sand: consistent IS 383:2016 grading (unlike variable river sand), zero silt or organic contamination, stronger concrete bond due to angular particle shape, and significantly lower embodied carbon (~82% less than primary-extraction river sand). It is also legal, as river sand extraction is restricted or banned across most Indian states.",
  },
  {
    q: "What is the difference between M-Sand and P-Sand?",
    a: "M-Sand (Manufactured Sand) meets IS 383:2016 for concrete work — it has coarser grading (Zone II/III) suitable for structural concrete mixes. P-Sand (Plastering Sand) meets IS 1542:1992 — it has finer particle size (below 2.36mm) and a smoother texture ideal for plastering, tiling, and wall finishes. Both are produced from crushed rock and are compliant alternatives to river sand.",
  },
  {
    q: "Why is river sand extraction banned in Karnataka and other Indian states?",
    a: "River sand extraction causes irreversible riverbed erosion, lowers water tables, destabilises bridges and river banks, and destroys aquatic habitats. The Western Ghats rivers — including the Cauvery, Kabini, and their tributaries — are especially sensitive. Karnataka, Tamil Nadu, Kerala, and several other states have imposed strict extraction bans or quotas under the Sustainable Sand Mining Management Guidelines 2016 and subsequent state-level orders.",
  },
  {
    q: "What does IS 383:2016 compliant mean for aggregates?",
    a: "IS 383:2016 is the Bureau of Indian Standards specification for coarse and fine aggregates used in concrete. Compliance means the aggregate meets defined grading zones (Zone I to Zone IV for fine aggregates), limits on harmful substances (clay, silt, organic impurities), and physical requirements (flakiness index, crushing value, water absorption). Greenrock Innovations' M-Sand is independently tested to IS 383:2016 Zone II and Zone III.",
  },
  {
    q: "What is embodied carbon in construction materials?",
    a: "Embodied carbon is the total CO₂ equivalent emitted during extraction, processing, transportation, and manufacturing of a construction material — before it is ever installed. Sand and aggregates account for a significant share of a building's embodied carbon through dredging, washing, and long-haul transport. Greenrock Innovations' process uses reclaimed waste rock (no new extraction), closed-loop water recycling, and local sourcing to achieve ~82% lower embodied carbon compared to primary-extraction alternatives.",
  },
  {
    q: "Where does Greenrock Innovations supply M-Sand and aggregates?",
    a: "Greenrock Innovations manufactures at its Gundlupet, Karnataka facility and supplies across South India including Karnataka, Tamil Nadu, Kerala, Andhra Pradesh, Telangana, and Goa. The company also operates affiliated facilities that extend supply reach across India for bulk construction and infrastructure projects.",
  },
  {
    q: "What is a Waste Rock Royalty Recycle Permit?",
    a: "A Waste Rock Royalty Recycle Permit is a government-issued license in Karnataka allowing companies to process existing waste rock and overburden from quarry sites without paying primary extraction royalties. Greenrock Innovations operates under Karnataka's first such permit, enabling it to reclaim material that would otherwise be discarded, eliminating the need for new rock extraction and dramatically reducing environmental impact.",
  },
];

export default function Home() {
  useSeo({
    title: "Greenrock Innovations — Engineered Materials from Reclaimed Weathered Rock",
    description:
      "IS 383:2016 compliant manufactured sand and aggregates engineered from reclaimed, weathered rock. ~82% lower carbon than primary extraction. Operating Begur Sands Pvt. Ltd. and affiliated facilities in Karnataka under the state's first Waste Rock Royalty Recycle Permit.",
    canonical: "/",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        url: SITE_ORIGIN + "/",
        name: "Greenrock Innovations",
        description: "Engineered construction materials from reclaimed weathered rock.",
        primaryImageOfPage: `${SITE_ORIGIN}/opengraph.jpg`,
        isPartOf: { "@type": "WebSite", name: "Greenrock Innovations", url: SITE_ORIGIN },
      },
      faqJsonLd(HOME_FAQS),
    ],
  });

  return (
    <div
      className="bg-[#09080A] text-[#EDE8DF] overflow-hidden"
      style={{ height: "100dvh", maxHeight: "100dvh", cursor: "none" }}
    >
      <CustomCursor />
      <Navbar />
      <Hero />
    </div>
  );
}
