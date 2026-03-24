"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  BadgeHelp,
  Calculator,
  ChevronDown,
  Contact,
  Lightbulb,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { servicesData } from "@/lib/services-data";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { scrollY } = useScroll();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  const navLinks = [
    { name: "Philosophy", href: "/#approach", icon: Lightbulb },
    { name: "Calculator", href: "/#calculator", icon: Calculator },
    { name: "FAQ", href: "/#faq", icon: BadgeHelp },
    { name: "Contact", href: "/#contact", icon: Contact },
  ];

  const serviceGroups = [
    {
      label: "Investment Solutions",
      items: servicesData.filter((s) => s.category === "Investment Solutions"),
    },
    {
      label: "Wealth Management",
      items: servicesData.filter((s) => s.category === "Wealth Management"),
    },
    {
      label: "Specialized Services",
      items: servicesData.filter((s) => s.category === "Specialized Services"),
    },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60 py-3.5 shadow-[0_12px_40px_rgba(15,23,42,0.08)]"
          : "bg-transparent py-5",
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={scrollToTop}
            className="flex items-center gap-2 group"
          >
            <img
              src="/assets/nvwebsite_logo-removebg.png"
              alt="NV Wealth"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-2 w-190 -translate-x-1/2 rounded-2xl border border-border/60 bg-background/95 p-6 opacity-0 shadow-[0_30px_80px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100">
                <div className="grid grid-cols-3 gap-6">
                  {serviceGroups.map((group) => (
                    <div key={group.label}>
                      <p className="mb-3 text-xs font-bold uppercase tracking-widest text-primary/90">
                        {group.label}
                      </p>
                      <div className="space-y-2.5">
                        {group.items.map((service) => (
                          <Link
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            className="block rounded-lg px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground transition-colors"
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) =>
              (() => {
                const Icon = link.icon;
                return link.href.startsWith("/") ? (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {link.name}
                  </Link>
                ) : (
                  <a
                    key={link.name}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Icon className="h-3.5 w-3.5" />
                    {link.name}
                  </a>
                );
              })(),
            )}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={() =>
                setTheme(resolvedTheme === "dark" ? "light" : "dark")
              }
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-card/70 text-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </button>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-foreground p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-background/95 border-b border-border/60 px-4 pt-2 pb-6 space-y-4"
        >
          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="w-full flex items-center justify-between text-base font-medium text-muted-foreground hover:text-foreground py-2"
          >
            <span>Services</span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                mobileServicesOpen && "rotate-180",
              )}
            />
          </button>

          {mobileServicesOpen && (
            <div className="rounded-xl border border-border/60 bg-card/50 p-3 space-y-3">
              {serviceGroups.map((group) => (
                <div key={group.label}>
                  <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-primary/90">
                    {group.label}
                  </p>
                  <div className="space-y-1">
                    {group.items.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                        className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {navLinks.map((link) =>
            (() => {
              const Icon = link.icon;
              return link.href.startsWith("/") ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </Link>
              ) : (
                <a
                  key={link.name}
                  href={link.href}
                  className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Icon className="h-4 w-4" />
                  {link.name}
                </a>
              );
            })(),
          )}
          <button
            type="button"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="w-full flex items-center justify-center gap-2 rounded-xl border border-border/60 bg-card/70 px-5 py-3 text-foreground font-semibold transition-all hover:border-primary/40 hover:text-primary"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
            {mounted && resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </motion.div>
      )}
    </motion.nav>
  );
}
