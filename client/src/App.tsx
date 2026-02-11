import { Suspense, lazy } from "react";
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

const NotFound = lazy(() => import("@/pages/not-found"));
const Home = lazy(() => import("@/pages/home"));
const About = lazy(() => import("@/pages/About"));
const Technology = lazy(() => import("@/pages/Technology"));
const ProductsPage = lazy(() => import("@/pages/Products"));
const ImpactCalculator = lazy(() => import("@/pages/ImpactCalculator"));
const Invest = lazy(() => import("@/pages/Invest"));
const InvestorStats = lazy(() => import("@/pages/InvestorStats"));

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
              <div className="flex min-h-screen items-center justify-center bg-black text-white/60">
                Loading...
              </div>
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
