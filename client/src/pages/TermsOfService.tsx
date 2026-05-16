import LegalDocumentPage from "@/components/LegalDocumentPage";

export default function TermsOfService() {
  return (
    <LegalDocumentPage
      eyebrow="Terms of Service"
      title="Terms governing access to the Black Diamond website, materials information, and digital tools."
      summary="These terms are intended to set a clear and commercially sensible framework for website use. They apply to informational content, product pages, calculators, and any materials made available through the site."
      effectiveDate="14 February 2026"
      sections={[
        {
          title: "Acceptance and Purpose",
          paragraphs: [
            "By accessing or using this website, you agree to these terms. If you do not agree, you should not use the site.",
            "The website is intended to provide information about Black Diamond, its operating model, product categories, technical positioning, and related commercial opportunities. Nothing on the site is intended to create a binding supply commitment unless expressly confirmed in writing.",
          ],
        },
        {
          title: "Use of Site Content",
          paragraphs: [
            "You may use the website for legitimate business, research, procurement, technical review, or investor evaluation purposes. You may not misuse the site, interfere with its operation, attempt unauthorised access, or use its content in a misleading, unlawful, or defamatory manner.",
            "All text, design, graphics, layouts, marks, product descriptions, process representations, and supporting media remain the property of Black Diamond or its licensors unless stated otherwise.",
          ],
        },
        {
          title: "Product and Technical Information",
          paragraphs: [
            "Product descriptions, performance references, certifications, process diagrams, and sustainability framing are provided for general informational purposes. They do not replace project-specific testing, engineering review, statutory approvals, or formal technical submittals.",
            "Availability, gradation, specifications, logistics, and suitability may vary by project, geography, operating conditions, and contract terms. Final commercial positions should always be confirmed through direct engagement and written documentation.",
          ],
        },
        {
          title: "Calculators and Forward-Looking Statements",
          paragraphs: [
            "Any calculator, benchmark, comparison model, carbon framing, or contextual environmental indicator on the site is illustrative in nature unless expressly identified as a contractual or certified deliverable.",
            "Such outputs are designed to assist understanding and early-stage evaluation. They should not be treated as engineering guarantees, audited disclosures, or a substitute for professional advice.",
          ],
        },
        {
          title: "Third-Party Content and Links",
          paragraphs: [
            "The site may reference third-party standards, certifications, counterparties, or external resources. Those references are provided for context and do not amount to a continuing endorsement of any third-party website, service, or statement.",
            "Where external links are provided, access is at your own discretion and subject to the terms and policies of the relevant third party.",
          ],
        },
        {
          title: "Liability Position",
          paragraphs: [
            "To the maximum extent permitted by law, the website is provided on an as-available basis. We do not warrant uninterrupted availability, absolute accuracy, or fitness for every intended purpose.",
            "Black Diamond will not be liable for indirect, incidental, consequential, or business interruption losses arising from use of the website or reliance on general informational content, except where liability cannot lawfully be excluded.",
          ],
        },
        {
          title: "Contact",
          paragraphs: [
            "Questions regarding these terms, website use, or commercial reliance on site materials may be directed to hello@blackdiamondgranites.com.",
          ],
        },
      ]}
    />
  );
}
