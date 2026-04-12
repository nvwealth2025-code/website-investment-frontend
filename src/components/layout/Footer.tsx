"use client";

import Link from "next/link";
import { ChevronRight, Mail, MapPin } from "lucide-react";
import { servicesData } from "@/lib/services-data";

function GooglePlayIcon() {
  return (
    <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3.1 2.2l11 9.8L3.1 21.8c-.4-.4-.6-.9-.6-1.5V3.7c0-.6.2-1.1.6-1.5z" fill="#00C4FF" />
      <path d="M14.1 12l2.8-2.5 3.6 2.1c.7.4.7 1.4 0 1.8l-3.6 2.1-2.8-2.5z" fill="#FFD400" />
      <path d="M4.9 1.2L16.9 8 14.1 12 3.1 2.2c.5-.5 1.2-.6 1.8-1z" fill="#00E676" />
      <path d="M4.9 22.8c-.6-.3-1.3-.5-1.8-1L14.1 12l2.8 4-12 6.8z" fill="#FF5252" />
    </svg>
  );
}

function AppleStoreIcon() {
  return (
    <svg className="h-5 w-5 text-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16.4 12.8c0-2.1 1.7-3.1 1.8-3.2-1-1.4-2.5-1.6-3.1-1.6-1.3-.1-2.5.8-3.2.8-.7 0-1.7-.8-2.8-.8-1.5 0-2.8.9-3.6 2.2-1.5 2.6-.4 6.4 1.1 8.5.8 1 1.7 2.1 2.9 2 .9 0 1.3-.6 2.4-.6 1.2 0 1.5.6 2.5.6 1.3 0 2.1-1.1 2.9-2.1.9-1.1 1.2-2.3 1.3-2.3 0 0-2.2-.8-2.2-3.5zM14.3 6.7c.6-.7 1-1.7.9-2.7-.9 0-1.9.6-2.6 1.3-.6.7-1.1 1.7-1 2.7 1 .1 2-.5 2.7-1.3z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg className="h-5 w-5 flex-shrink-0 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zm-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884zm8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Footer() {
  const featuredServices = servicesData;

  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-primary/10 bg-background pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-14 mb-16">
          <div>
            <Link
              href="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 mb-6"
            >
              <img
                src="/assets/nvwebsite_logo-removebg.png"
                alt="NV Investments"
                className="h-12 md:h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Smart Investing,Stronger Futures
            </p>

            <div className="mb-7">
              <h4 className="text-foreground font-bold mb-3 uppercase tracking-wide">Group of Companies</h4>
              <a
                href="https://www.nvwealth.in/"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <ChevronRight className="h-4 w-4 text-primary shrink-0 group-hover:translate-x-0.5 transition-transform" />
                <span className="font-medium">NV Wealth</span>
              </a>
            </div>

            <h4 className="text-foreground font-bold mb-3 uppercase tracking-wide">Download App</h4>
            <div className="flex flex-wrap items-center gap-2.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.jainam.space&hl=en_IN"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/8"
              >
                <GooglePlayIcon />
                Google Play
              </a>
              <a
                href="https://apps.apple.com/in/app/jplus-by-jainam-stocks-mf-ipo/id1536402914"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-border/60 bg-card/60 px-4 py-2.5 text-sm font-semibold text-foreground transition-all hover:border-primary/40 hover:bg-primary/8"
              >
                <AppleStoreIcon />
                App Store
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="font-semibold text-foreground">NV INVESTMENTS</li>
              <li>Smart Investing,Stronger Futures</li>
              <li>
                <Link
                  href="/#services"
                  className="hover:text-foreground transition-colors"
                >
                  Explore Services
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="hover:text-foreground transition-colors"
                >
                  Contact Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                    <span>{service.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="inline-flex mt-6 text-sm font-semibold text-primary hover:text-foreground transition-colors"
            >
              View all services
            </Link>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Useful Links</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://www.nseindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>NSE</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.bseindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>BSE</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>SEBI</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cdslindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>CDSL</span>
                </a>
              </li>
              <li>
                <a
                  href="https://scores.sebi.gov.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>SCORES</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.nsekra.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>NSE KYC Status</span>
                </a>
              </li>
              <li>
                <a
                  href="https://eportal.incometax.gov.in/iec/foservices/#/pre-login/link-aadhaar-status"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>PAN-Aadhaar Status</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.cvlindia.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>CVL-KRA Validation</span>
                </a>
              </li>
              <li>
                <a
                  href="https://kra.ndml.in/kra/ckyc/#/initiate/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ChevronRight className="h-4 w-4 text-primary shrink-0 mt-0.5 group-hover:translate-x-0.5 transition-transform" />
                  <span>NSDL KRA Validation</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-sm text-foreground font-semibold">
                NV Investments Team
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="inline-flex h-5 w-5 items-center justify-center">
                  <WhatsAppIcon />
                </span>
                <a
                  href="https://wa.me/919081270913"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-foreground hover:text-emerald-400 transition-colors"
                >
                  +91 90812 70913
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-[#1890ff] shrink-0 mt-0.5" />
                <a
                  href="mailto:info@nvwealth.in"
                  className="font-semibold text-foreground hover:text-foreground transition-colors"
                >
                  info@nvwealth.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  Cabin No. 14, Office No. B-802,
                  <br />
                  Gopal Palace, Opp. Choice Restaurant,
                  <br />
                  Nehru Nagar, Ahmedabad - 380015 (Gujarat)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} NV INVESTMENTS. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground md:text-center">
            Design &amp; Developed by{" "}
            <a
              href="https://codexor.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold bg-linear-to-r from-cyan-300 via-sky-400 to-fuchsia-500 bg-clip-text text-transparent"
            >
              CodeXOR
            </a>
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground md:justify-end">
            <Link
              href="/privacy-policy"
              className="hover:text-foreground transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-foreground transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/disclaimer"
              className="hover:text-foreground transition-colors"
            >
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

