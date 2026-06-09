// Thin wrapper around window.gtag for typed GA4 event tracking.
// Falls back to a no-op when gtag isn't loaded (SSR / consent denied),
// so callers don't need to null-check.

type GtagParams = Record<string, string | number | boolean | undefined>;

function fire(eventName: string, params: GtagParams = {}) {
  if (typeof window === "undefined") return;
  const gtag = window.gtag;
  if (!gtag) return;
  gtag("event", eventName, params);
}

export const track = {
  emailClick(location: string) {
    fire("email_click", {
      email_address: "hello@greenrockinnovations.earth",
      click_location: location,
    });
  },

  newsletterSignup(location: string) {
    fire("newsletter_signup", { signup_location: location });
  },

  impactCalculatorEngaged(tons: number) {
    fire("impact_calculator_engaged", { tons_value: tons });
  },

  journalRead(slug: string, percent: number) {
    fire("journal_read", {
      post_slug: slug,
      scroll_percent: percent,
    });
  },

  externalLinkClick(href: string) {
    fire("external_link_click", { destination_url: href });
  },

  investorAccessRequest() {
    fire("investor_access_request");
  },
};
