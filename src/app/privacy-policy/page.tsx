import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Mail, MapPin, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | NV Wealth",
  description:
    "Privacy Policy for NV Wealth — how personal information is collected, used, shared, and protected.",
};

const sections = [
  {
    id: 1,
    title: "Information We Collect",
    items: [
      "Personal details such as Name, Email Address, and Contact Number",
      "Financial and KYC-related information required for providing services",
      "Technical and usage-related information necessary for system administration and security",
    ],
  },
  {
    id: 2,
    title: "Purpose of Data Collection",
    intro:
      "Your information is collected and used for the following purposes:",
    items: [
      "To provide financial products and services",
      "To facilitate onboarding and transaction processing",
      "To comply with regulatory requirements including KYC and AML guidelines",
      "To communicate important updates, notifications, and service-related information",
      "To improve service quality and operational efficiency",
    ],
  },
  {
    id: 3,
    title: "Data Sharing & Disclosure",
    intro:
      "NV WEALTH does not sell, rent, or trade your personal information. Your data may be shared only in the following circumstances:",
    items: [
      "With regulatory authorities such as SEBI, AMFI, or other governing bodies, as required by law",
      "With authorized financial institutions and service providers for operational purposes",
      "With legal authorities in compliance with applicable laws and regulations",
    ],
  },
  {
    id: 4,
    title: "Data Security",
    text: "We adopt appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.",
  },
  {
    id: 5,
    title: "User Rights",
    intro: "You have the right to:",
    items: [
      "Access and review your personal information",
      "Request correction of inaccurate or incomplete data",
      "Request deletion of your data, subject to legal and regulatory obligations",
      "Withdraw consent where applicable",
    ],
  },
  {
    id: 6,
    title: "Data Retention",
    text: "Your information will be retained only for as long as necessary to fulfill legal, regulatory, and business requirements.",
  },
  {
    id: 7,
    title: "Third-Party Links",
    text: "Our website may contain links to third-party websites or services. NV WEALTH is not responsible for the privacy practices or content of such external platforms.",
  },
  {
    id: 8,
    title: "Policy Updates",
    text: "We reserve the right to update or modify this Privacy Policy at any time. Updates will be reflected on this page with the revised effective date.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 -left-20 w-115 h-115 rounded-full bg-[#2A7DB5]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-105 h-105 rounded-full bg-[#84B135]/10 blur-[120px]" />
      </div>

      <main className="pt-32 pb-24">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Card */}
          <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-md p-8 md:p-12 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-12" style={{ backgroundColor: "#2A7DB5" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#2A7DB5" }}>
                Legal
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#2A7DB5" }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Privacy Policy
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              NV WEALTH is committed to safeguarding your personal information and maintaining transparency in how your data is collected, used, and protected.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <Shield className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Effective Date</p>
                <p className="text-sm font-semibold text-foreground">March 18, 2026</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Contact</p>
                <p className="text-sm font-semibold text-foreground">invest@nvwealth.in</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Company</p>
                <p className="text-sm font-semibold text-foreground">NV WEALTH</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className="rounded-2xl border border-border/60 bg-card/55 p-6 md:p-7"
              >
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-sm font-display font-bold text-primary">
                    {String(section.id).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-4">
                      {section.title}
                    </h2>
                    {section.intro && (
                      <p className="text-muted-foreground mb-3">{section.intro}</p>
                    )}
                    {section.text && (
                      <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                    )}
                    {section.items && (
                      <ul className="space-y-2.5">
                        {section.items.map((item) => (
                          <li key={item} className="flex gap-2 text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-linear-to-r from-primary/15 to-secondary/15 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Questions about your data?
                </h3>
                <p className="text-muted-foreground">
                  Cabin No. 14, B-802 Gopal Palace, Nehru Nagar, Ahmedabad – 380015
                </p>
              </div>
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
