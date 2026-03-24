"use client";

import Link from "next/link";
import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { servicesData } from "@/lib/services-data";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-14 mb-16">
          <div>
            <Link
              href="/"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 mb-6"
            >
              <img
                src="/assets/nvwebsite_logo-removebg.png"
                alt="NV Wealth"
                className="h-12 md:h-14 w-auto"
              />
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              Smart Investing for a Better Tomorrow
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-muted-foreground">
              <li className="font-semibold text-foreground">NV WEALTH</li>
              <li>Smart Investing for a Better Tomorrow</li>
              <li className="text-xs">
                AMFI Registered Mutual Fund Distributor - ARN 351007
              </li>
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
            <h4 className="text-foreground font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="text-sm text-foreground font-semibold">
                NV Wealth Team
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="mailto:invest@nvwealth.in"
                  className="hover:text-foreground transition-colors"
                >
                  invest@nvwealth.in
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <a
                  href="tel:+919081270913"
                  className="hover:text-foreground transition-colors"
                >
                  +91 90812 70913
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
            © {new Date().getFullYear()} NV WEALTH. All rights reserved.
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

