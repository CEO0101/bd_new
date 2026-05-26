import Hero, { CustomCursor } from "@/components/sections/Hero";
import Navbar from "@/components/Navbar";
import { useSeo, SITE_ORIGIN } from "@/lib/useSeo";

export default function Home() {
  useSeo({
    title: "Greenrock Innovations — Engineered Materials from Reclaimed Weathered Rock",
    description:
      "IS 383:2016 compliant manufactured sand and aggregates engineered from reclaimed, weathered rock. ~70% lower carbon than primary extraction. Operating Begur Sands Pvt. Ltd. and affiliated facilities in Karnataka under the state's first Waste Rock Royalty Recycle Permit.",
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
