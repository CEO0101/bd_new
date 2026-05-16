import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container px-6 mx-auto">
          <div className="max-w-md mx-auto">
            <Card className="bg-black border-white/10">
              <CardContent className="pt-6">
                <div className="flex mb-4 gap-2">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                  <h1 className="text-2xl font-bold text-white">404 Page Not Found</h1>
                </div>

                <p className="mt-4 text-sm text-white/60">
                  The page you're looking for doesn't exist. Please check the URL or return to our homepage.
                </p>

                <div className="mt-6 flex gap-4">
                  <a href="/" className="px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-colors">
                    Return Home
                  </a>
                  <a href="/about" className="px-6 py-2 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-colors">
                    Contact Us
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <SiteFooter tone="dark" />
    </div>
  );
}
