import LegalDocumentPage from "@/components/LegalDocumentPage";

export default function PrivacyPolicy() {
  return (
    <LegalDocumentPage
      eyebrow="Privacy Policy"
      title="How Greenrock Innovations handles information shared through its website and commercial channels."
      summary="This policy explains what information we collect, why we collect it, how we use it, and the standards we apply when handling enquiries, subscriptions, and commercial communications relating to our materials platform."
      effectiveDate="11 February 2026"
      sections={[
        {
          title: "Scope",
          paragraphs: [
            "This policy applies to information collected through the Greenrock Innovations website, product enquiry channels, newsletter forms, and related commercial communications. It is intended to describe our current operating position in a clear and practical way.",
            "The policy covers personal information that can identify an individual directly or indirectly, as well as technical data associated with website usage, device access, and form submissions.",
          ],
        },
        {
          title: "Information We Collect",
          paragraphs: [
            "We may collect information you choose to provide, including your name, company, role, email address, phone number, project details, procurement requirements, and any supporting information you include in a message or enquiry.",
            "We may also collect technical and usage information such as browser type, device characteristics, approximate location data, referring pages, session activity, and operational logs generated for security, diagnostics, and site performance.",
          ],
        },
        {
          title: "How We Use Information",
          paragraphs: [
            "We use information to respond to enquiries, evaluate supply requirements, assess project fit, provide product or technical information, manage investor or partner outreach, maintain service reliability, and improve the clarity and usefulness of the site.",
            "Where appropriate, we may also use information for internal analysis, fraud prevention, recordkeeping, compliance administration, and to communicate material updates about our products, operations, or commercial availability.",
          ],
        },
        {
          title: "Commercial Communications",
          paragraphs: [
            "If you subscribe to updates or engage with us through an enquiry form, we may contact you regarding relevant company, product, or operational developments. We aim to keep that communication measured and commercially relevant.",
            "You may opt out of non-essential communications at any time using the contact details provided in this policy or any unsubscribe mechanism made available in the communication itself.",
          ],
        },
        {
          title: "Disclosure and Service Providers",
          paragraphs: [
            "We do not sell personal information. We may share information with service providers and advisors who support website hosting, communications, analytics, security, legal compliance, or operational administration, provided they are engaged on appropriate confidentiality and processing terms.",
            "Information may also be disclosed where reasonably necessary to protect rights, investigate misuse, comply with legal obligations, or support a corporate transaction involving restructuring, financing, or business transfer.",
          ],
        },
        {
          title: "Retention and Security",
          paragraphs: [
            "We retain information only for as long as reasonably required for the purpose for which it was collected, including commercial follow-up, contract preparation, compliance, dispute management, and internal recordkeeping.",
            "We apply administrative, technical, and organisational safeguards designed to protect information against unauthorised access, misuse, loss, or alteration. No internet transmission or storage system can be guaranteed to be fully secure, but we aim to operate to a prudent industrial standard.",
          ],
        },
        {
          title: "Your Choices",
          paragraphs: [
            "Subject to applicable law, you may request access to, correction of, or deletion of personal information held by us, or ask questions about how that information is handled.",
            "Requests may be sent to hello@greenrockinnovations.earth. We may need to verify identity and the scope of the request before acting on it.",
          ],
        },
      ]}
    />
  );
}
