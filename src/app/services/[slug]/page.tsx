import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Layers,
  Sparkles,
  Target,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { getServiceBySlug, servicesData } from "@/lib/services-data";

type RouteParams = {
  slug: string;
};

type Props = {
  params: Promise<RouteParams>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return { title: "Service Not Found" };
  }

  const canonicalUrl = `https://www.investment.nvwealth.in/services/${slug}`;

  return {
    title: `${service.title} | Financial Services`,
    description: `${service.shortDescription} NV Wealth \u2013 AMFI Registered Mutual Fund Distributor, ARN 351007, Ahmedabad.`,
    keywords: [
      service.title,
      service.category,
      "NV Wealth",
      "AMFI registered distributor",
      "Ahmedabad wealth management",
      "mutual fund Ahmedabad",
      ...service.keyOfferings.slice(0, 3),
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${service.title} | NV Wealth`,
      description: service.shortDescription,
      url: canonicalUrl,
      type: "article",
      siteName: "NV Wealth",
      images: [
        {
          url: "/opengraph.jpg",
          width: 1200,
          height: 630,
          alt: `${service.title} \u2013 NV Wealth`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | NV Wealth`,
      description: service.shortDescription,
      images: ["/opengraph.jpg"],
    },
  };
}

export function generateStaticParams() {
  return servicesData.map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = servicesData
    .filter(
      (item) =>
        item.category === service.category && item.slug !== service.slug,
    )
    .slice(0, 3);

  const outcomePoints = [
    "Clear strategy aligned to your risk profile",
    "Documented process with transparent communication",
    "Regular review support to stay on track",
  ];

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-20 w-115 h-115 rounded-full bg-[#2A7DB5]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-105 h-105 rounded-full bg-[#84B135]/10 blur-[120px]" />
      </div>

      <main className="pt-32 pb-24">
        <article className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-4 flex-wrap">
            <Link
              href="/services"
              className="inline-flex items-center text-sm font-semibold text-primary"
            >
              Back to all services
            </Link>
            <p className="text-xs text-muted-foreground uppercase tracking-wider">
              {service.category}
            </p>
          </div>

          <section className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-md p-8 md:p-12 mb-8">
            <div className="max-w-4xl">
              <p className="text-sm font-bold tracking-wider uppercase text-primary mb-4">
                Dedicated Service
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
                {service.title}
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {service.shortDescription}
              </p>
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                {service.overview}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <Target className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Category
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {service.category}
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <Layers className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Coverage
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {service.keyOfferings.length}+ focus areas
                </p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                  Approach
                </p>
                <p className="text-sm font-semibold text-foreground">
                  Research-led and disciplined
                </p>
              </div>
            </div>
          </section>

          <div className="grid lg:grid-cols-3 gap-6 mb-6">
            <section className="lg:col-span-2 rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Ideal For
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {service.idealFor}
              </p>
            </section>

            <section className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Why NV Wealth
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {service.whyNvWealth.map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <div className="grid lg:grid-cols-2 gap-6 mb-6">
            <section className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Key Offerings
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {service.keyOfferings.map((point) => (
                  <li key={point} className="flex gap-2">
                    <span className="text-primary mt-0.5">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7">
              <h2 className="text-xl font-bold text-foreground mb-4">
                Expected Outcomes
              </h2>
              <ul className="space-y-3 text-muted-foreground">
                {outcomePoints.map((point) => (
                  <li key={point} className="flex gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <section className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7 mb-6">
            <h2 className="text-xl font-bold text-foreground mb-5">
              How This Service Works
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {service.approach.map((step, index) => (
                <div
                  key={step}
                  className="rounded-xl border border-border/60 bg-background/60 p-4"
                >
                  <p className="text-xs uppercase tracking-widest text-primary mb-2">
                    Step {index + 1}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {relatedServices.length > 0 && (
            <section className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7 mb-6">
              <h2 className="text-xl font-bold text-foreground mb-5">
                Related Services
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {relatedServices.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/services/${item.slug}`}
                    className="rounded-xl border border-border/60 bg-background/60 p-4 hover:border-primary/40 transition-colors"
                  >
                    <p className="font-semibold text-foreground mb-2">
                      {item.title}
                    </p>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {item.shortDescription}
                    </p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs font-semibold text-primary">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}

          <section className="rounded-2xl border border-primary/30 bg-linear-to-r from-primary/15 to-secondary/15 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Need personalized guidance for this service?
                </h3>
                <p className="text-muted-foreground">
                  Book a consultation and we will align this service to your
                  goals, timeline, and risk comfort.
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
              >
                Book Consultation
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </section>
        </article>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
