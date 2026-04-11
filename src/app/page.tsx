import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";

export const metadata: Metadata = {
  title: "NV Investments | Smart Investing for a Better Tomorrow",
  description:
    "NV Investments is an AMFI Registered Mutual Fund Distributor (ARN 351007) in Ahmedabad. We offer mutual funds, SIP planning, equity advisory, tax planning, and comprehensive wealth management services.",
  alternates: {
    canonical: "https://www.investment.nvwealth.in",
  },
  openGraph: {
    title: "NV Investments | Smart Investing for a Better Tomorrow",
    description:
      "AMFI Registered Mutual Fund Distributor in Ahmedabad. Expert SIP, equity, tax and wealth planning advisory.",
    url: "https://www.investment.nvwealth.in",
    type: "website",
  },
};
import TrustStrip from "@/components/sections/TrustStrip";
import Approach from "@/components/sections/Approach";
import SipCalculator from "@/components/sections/SipCalculator";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function HomePage() {
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
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
