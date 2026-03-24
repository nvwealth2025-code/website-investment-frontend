import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import TrustStrip from "@/components/sections/TrustStrip";
import Services from "@/components/sections/Services";
import Approach from "@/components/sections/Approach";
import SipCalculator from "@/components/sections/SipCalculator";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Footer from "@/components/layout/Footer";
import { cn } from "@/lib/utils";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TrustStrip />
        <Approach />
        <SipCalculator />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />

      <button
        type="button"
        aria-label="Scroll to top"
        onClick={scrollToTop}
        className={cn(
          "fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full border border-primary/30 bg-black/60 text-primary shadow-lg shadow-black/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:bg-primary hover:text-primary-foreground",
          showScrollTop
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-4 opacity-0",
        )}
      >
        <ChevronUp className="mx-auto h-5 w-5" />
      </button>
    </div>
  );
}