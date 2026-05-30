import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

// Home is eager — it's the landing page, lazy-loading it adds an
// unnecessary chunk fetch and causes a visible "Loading..." flash on
// first paint. All secondary pages stay lazy to keep initial JS small.
import Home from "@/pages/home";

const NotFound = lazy(() => import("@/pages/not-found"));
const About = lazy(() => import("@/pages/About"));
const Technology = lazy(() => import("@/pages/Technology"));
const ProductsPage = lazy(() => import("@/pages/Products"));
const ImpactCalculator = lazy(() => import("@/pages/ImpactCalculator"));
const Invest = lazy(() => import("@/pages/Invest"));
const InvestorStats = lazy(() => import("@/pages/InvestorStats"));
const PrivacyPolicy = lazy(() => import("@/pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("@/pages/TermsOfService"));
const CookiePolicy = lazy(() => import("@/pages/CookiePolicy"));
const Journal = lazy(() => import("@/pages/Journal"));
const JournalPost = lazy(() => import("@/pages/JournalPost"));

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/technology" component={Technology} />
      <Route path="/products" component={ProductsPage} />
      <Route path="/invest" component={Invest} />
      <Route path="/impact-calculator" component={ImpactCalculator} />
      <Route path="/investor-stats" component={InvestorStats} />
      <Route path="/journal" component={Journal} />
      <Route path="/journal/:slug" component={JournalPost} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms-of-service" component={TermsOfService} />
      <Route path="/cookie-policy" component={CookiePolicy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <div className="relative">
          <Toaster />
          <Suspense
            fallback={
              // Invisible dark fallback — matches page bg so route-change
              // chunk fetches don't flash a "Loading..." screen.
              <div style={{ minHeight: "100vh", background: "#09080A" }} />
            }
          >
            <Router />
          </Suspense>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
