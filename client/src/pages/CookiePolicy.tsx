import LegalDocumentPage from "@/components/LegalDocumentPage";

export default function CookiePolicy() {
  return (
    <LegalDocumentPage
      eyebrow="Cookie Policy"
      title="How the Black Diamond website uses cookies and similar technologies."
      summary="This policy explains the role of cookies, local storage, and related technologies in supporting site delivery, performance, measurement, and user experience."
      effectiveDate="18 February 2026"
      sections={[
        {
          title: "What Cookies Are",
          paragraphs: [
            "Cookies are small text files or similar browser-based technologies used to recognise a session, maintain preferences, improve performance, and support security or measurement functions.",
            "Depending on the browser and service configuration, similar functions may also be delivered through local storage, session storage, server logs, or embedded third-party tools.",
          ],
        },
        {
          title: "Why We Use Them",
          paragraphs: [
            "We may use strictly necessary technologies to support core website functionality, navigation integrity, security monitoring, and basic service continuity.",
            "We may also use limited performance or measurement tools to understand how pages are used, identify friction points, and improve information quality, responsiveness, and reliability.",
          ],
        },
        {
          title: "Categories",
          paragraphs: [
            "Essential cookies support operational functions such as page delivery, session continuity, and abuse prevention. Preference technologies may remember display or interaction choices. Performance tools may help us understand aggregate usage patterns.",
            "We do not use this policy to suggest blanket deployment of every category at all times. Actual technologies in use may vary depending on the site environment, hosting configuration, and enabled services.",
          ],
        },
        {
          title: "Managing Preferences",
          paragraphs: [
            "Most browsers allow you to review, block, delete, or limit cookies through browser settings. Restricting essential cookies may affect how parts of the site perform.",
            "If consent or preference controls are made available on the site, those controls should be used alongside browser settings for a more precise outcome.",
          ],
        },
        {
          title: "Third-Party Services",
          paragraphs: [
            "Some site functions may rely on third-party infrastructure, embedded media, or analytics tools. Where those services are enabled, they may set or read their own cookies subject to their own policies and technical controls.",
            "We aim to use third-party tools selectively and with commercial discipline, particularly where they affect performance, privacy expectations, or data visibility.",
          ],
        },
        {
          title: "Further Information",
          paragraphs: [
            "Questions about this policy or about website data practices more generally may be directed to hello@blackdiamondgranites.com.",
          ],
        },
      ]}
    />
  );
}
