import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, Info, ShieldAlert } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | NV Wealth",
  description:
    "Disclaimer page covering mandatory risk disclosures, limitations, and regulatory notices for NV Wealth.",
};

const sections = [
  {
    id: 1,
    title: "Mandatory Risk Disclosure",
    text: "Mutual Fund investments are subject to market risks. Please read all scheme-related documents carefully before investing.",
    highlight: true,
  },
  {
    id: 2,
    title: "General Risk Statement",
    text: "Investments in equity, mutual funds, IPOs, and other financial instruments are subject to market risks, including possible loss of principal.",
  },
  {
    id: 3,
    title: "No Guarantee of Returns",
    text: "NV WEALTH does not assure or guarantee any returns, performance, or capital protection.",
  },
  {
    id: 4,
    title: "No Personalized Investment Advice",
    text: "The information provided on this website is general in nature and should not be construed as investment advice or recommendation.",
  },
  {
    id: 5,
    title: "Accuracy & Completeness",
    text: "While efforts are made to ensure accuracy, NV WEALTH does not warrant that all information is complete, reliable, or up-to-date.",
  },
  {
    id: 6,
    title: "Third-Party Content",
    text: "We are not responsible for any third-party content, services, or external links provided on the website.",
  },
  {
    id: 7,
    title: "Limitation of Liability",
    text: "NV WEALTH shall not be held liable for any loss or damages arising from reliance on information provided on this website or from investment decisions.",
  },
  {
    id: 8,
    title: "Regulatory Compliance",
    text: "Investors are advised to consult qualified financial advisors and comply with applicable laws before making investment decisions.",
  },
];

export default function DisclaimerPage() {
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
              Disclaimer
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-2">
              NV WEALTH provides financial services and information through its website, subject to market risks, regulatory requirements, and investor due diligence.
            </p>

            {/* Overview highlight */}
            <div className="mt-8 rounded-2xl border border-primary/30 bg-primary/5 p-5">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <p className="text-muted-foreground leading-relaxed">
                  NV WEALTH (AMFI Registered Mutual Fund Distributor – ARN 351007) provides financial services and information through its website https://www.nvwealth.in/.
                </p>
              </div>
            </div>

            {/* Quick stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Sections</p>
                <p className="text-sm font-semibold text-foreground">8 Disclosures</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Key Notice</p>
                <p className="text-sm font-semibold text-foreground">Subject to Market Risk</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-primary/10 text-primary">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Registration</p>
                <p className="text-sm font-semibold text-foreground">ARN 351007</p>
              </div>
            </div>
          </div>

          {/* Content Sections */}
          <div className="space-y-6">
            {sections.map((section) => (
              <div
                key={section.id}
                className={`rounded-2xl border p-6 md:p-7 ${
                  section.highlight
                    ? "border-primary/40 bg-primary/5"
                    : "border-border/60 bg-card/55"
                }`}
              >
                <div className="flex items-start gap-4">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border text-sm font-display font-bold ${
                      section.highlight
                        ? "border-primary/30 bg-primary/10 text-primary"
                        : "border-border/60 bg-background/80 text-primary"
                    }`}
                  >
                    {String(section.id).padStart(2, "0")}
                  </span>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <p className="text-muted-foreground leading-relaxed">{section.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Consent block */}
          <div
            className="mt-8 rounded-2xl p-8 md:p-10 text-center"
            style={{
              background: "linear-gradient(135deg, rgba(42,125,181,0.08), rgba(132,177,53,0.08))",
              border: "1px solid hsl(var(--border))",
            }}
          >
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">Consent</h3>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto mb-6">
              By accessing this website, you acknowledge that you have read, understood, and agreed to this disclaimer.
            </p>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:brightness-110 transition-all"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
