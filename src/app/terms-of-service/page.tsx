import type { Metadata } from "next";
import Link from "next/link";
import { Building2, CheckCircle2, FileText, Scale } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "Terms of Service | NV Wealth",
  description:
    "Terms and Conditions governing use of NV Wealth website and services.",
};

const sections = [
  {
    id: 1,
    title: "Company Details",
    details: [
      { label: "Company", value: "NV WEALTH" },
      { label: "Address", value: "Cabin No. 14, B-802 Gopal Palace, Nehru Nagar, Ahmedabad – 380015" },
      { label: "Registration", value: "AMFI Registered Mutual Fund Distributor – ARN 351007" },
    ],
  },
  {
    id: 2,
    title: "Scope of Services",
    intro:
      "NV WEALTH offers financial distribution and support services including but not limited to:",
    items: [
      "Mutual Fund Distribution",
      "Equity & IPO Assistance",
      "Financial Planning Services",
      "Wealth Management Solutions",
    ],
    footer: "All services are subject to applicable laws and market risks.",
  },
  {
    id: 3,
    title: "Eligibility",
    intro: "By using this website, you confirm that:",
    items: [
      "You are legally competent to enter into a binding agreement",
      "All information provided by you is accurate and complete",
    ],
  },
  {
    id: 4,
    title: "No Investment Advice",
    text: "The content on this website is for informational purposes only and does not constitute investment advice, research, or recommendation.",
  },
  {
    id: 5,
    title: "User Obligations",
    intro: "You agree not to:",
    items: [
      "Use the website for unlawful purposes",
      "Misrepresent your identity",
      "Attempt to breach security or disrupt services",
    ],
  },
  {
    id: 6,
    title: "Intellectual Property Rights",
    text: "All website content, including text, design, graphics, logos, and software, is the exclusive property of NV WEALTH and is protected under applicable intellectual property laws.",
  },
  {
    id: 7,
    title: "Third-Party Services",
    text: "We may provide access to third-party platforms or services. NV WEALTH is not responsible for their content, policies, or performance.",
  },
  {
    id: 8,
    title: "Limitation of Liability",
    intro:
      "NV WEALTH shall not be liable for any direct, indirect, incidental, or consequential damages arising from:",
    items: [
      "Use of the website",
      "Investment decisions made by users",
    ],
  },
  {
    id: 9,
    title: "Indemnity",
    text: "You agree to indemnify and hold harmless NV WEALTH against any claims, losses, or damages arising from your use of the website or violation of these terms.",
  },
  {
    id: 10,
    title: "Modifications",
    text: "We reserve the right to modify these Terms at any time. Continued use of the website constitutes acceptance of updated terms.",
  },
  {
    id: 11,
    title: "Governing Law & Jurisdiction",
    text: "These Terms shall be governed by the laws of India. Any disputes shall fall under the jurisdiction of Ahmedabad, Gujarat.",
  },
];

export default function TermsOfServicePage() {
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
              <div className="h-px w-12" style={{ backgroundColor: "#84B135" }} />
              <span className="text-sm font-bold tracking-widest uppercase" style={{ color: "#84B135" }}>
                Legal
              </span>
              <div className="h-px w-12" style={{ backgroundColor: "#84B135" }} />
            </div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              By accessing or using the NV WEALTH website, you agree to be bound by these Terms &amp; Conditions.
            </p>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-secondary/10 text-secondary">
                  <FileText className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Effective Date</p>
                <p className="text-sm font-semibold text-foreground">March 18, 2026</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Building2 className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Registration</p>
                <p className="text-sm font-semibold text-foreground">ARN 351007</p>
              </div>
              <div className="rounded-2xl border border-border/60 bg-background/60 p-4">
                <div className="inline-flex mb-3 p-2 rounded-lg bg-secondary/10 text-secondary">
                  <Scale className="w-5 h-5" />
                </div>
                <p className="text-xs uppercase tracking-wide text-muted-foreground mb-1">Jurisdiction</p>
                <p className="text-sm font-semibold text-foreground">Ahmedabad, Gujarat</p>
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

                    {/* Details grid (for Company Details) */}
                    {"details" in section && section.details && (
                      <div className="space-y-3">
                        {section.details.map((d) => (
                          <div key={d.label}>
                            <span className="text-xs uppercase tracking-wide text-muted-foreground">{d.label}</span>
                            <p className="text-sm font-semibold text-foreground">{d.value}</p>
                          </div>
                        ))}
                      </div>
                    )}

                    {section.intro && (
                      <p className="text-muted-foreground mb-3">{section.intro}</p>
                    )}
                    {"text" in section && section.text && (
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
                    {"footer" in section && section.footer && (
                      <p className="mt-3 text-sm text-muted-foreground italic">{section.footer}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 rounded-2xl border border-primary/30 bg-linear-to-r from-primary/15 to-secondary/15 p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Need clarification?
                </h3>
                <p className="text-muted-foreground">
                  Reach out to us for any questions regarding these terms.
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
