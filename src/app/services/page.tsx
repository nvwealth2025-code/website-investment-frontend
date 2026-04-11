import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { servicesData } from "@/lib/services-data";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Explore NV Investments's full range of financial services including mutual funds, equity advisory, SIP, IPO advisory, tax planning, NRI investments, PMS/AIF, term insurance, and more.",
  alternates: {
    canonical: "https://www.investment.nvwealth.in/services",
  },
  openGraph: {
    title: "All Financial Services | NV Investments",
    description:
      "Mutual funds, equity advisory, SIP, tax planning, NRI investments, PMS/AIF and more – explore all services offered by NV Investments.",
    url: "https://www.investment.nvwealth.in/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-4">
              Our Services
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-6">
              Complete Services
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore every service directly and open dedicated pages for full
              details.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {servicesData.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 hover:bg-card transition-all"
              >
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.shortDescription}
                </p>

                <div className="mt-4 rounded-xl border border-border/60 bg-background/60 p-3">
                  <p className="text-xs font-semibold text-foreground mb-1">
                    Ideal for
                  </p>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {service.idealFor}
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-xs font-semibold text-foreground mb-2">
                    What this service covers
                  </p>
                  <ul className="space-y-1.5">
                    {service.keyOfferings.slice(0, 2).map((point) => (
                      <li
                        key={point}
                        className="text-xs text-muted-foreground flex gap-2"
                      >
                        <span className="text-primary">•</span>
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <span className="inline-flex items-center mt-5 text-sm font-semibold text-primary">
                  Learn more
                </span>
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
