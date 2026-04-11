"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import {
  Briefcase,
  BarChart3,
  BadgeHelp,
  ChevronDown,
  Contact,
  House,
  Lightbulb,
  Menu,
  Moon,
  TrendingUp,
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
  const [mobileCalculatorOpen, setMobileCalculatorOpen] = useState(false);
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
    { name: "FAQ", href: "/#faq", icon: BadgeHelp },
    { name: "Contact", href: "/#contact", icon: Contact }
  ];

  const allServices = servicesData;
  const calculatorLinks = [
    {
      name: "SIP Calculator",
      href: "/#calculator",
      description: "Project long-term wealth growth.",
      icon: TrendingUp,
    },
    {
      name: "Equities - F&O",
      href: "/calculator",
      description: "Estimate brokerage and charges.",
      icon: BarChart3,
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
              alt="NV Investments"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              <House className="h-3.5 w-3.5" />
              Home
            </Link>

            <div className="relative group">
              <Link
                href="/#services"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <Briefcase className="h-3.5 w-3.5" />
                Services
                <ChevronDown className="h-4 w-4" />
              </Link>

              <div className="pointer-events-none absolute left-0 top-full z-50 mt-2 w-[18rem] rounded-2xl border border-[#2A7DB5]/20 bg-background/95 p-3 opacity-0 shadow-[0_24px_64px_rgba(15,23,42,0.16)] backdrop-blur-xl transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] group-hover:pointer-events-auto group-hover:opacity-100">
                <p className="mb-1 text-[11px] font-bold uppercase tracking-[0.28em] text-[#2A7DB5]/90">
                  All Services
                </p>
                <p className="mb-2 text-[11px] text-muted-foreground">
                  Explore our complete advisory offerings.
                </p>
                <div className="grid grid-cols-1 gap-1">
                  {allServices.map((service) => (
                    <Link
                      key={service.slug}
                      href={`/services/${service.slug}`}
                      className="group/item flex items-center justify-between rounded-xl border border-transparent px-3 py-2 transition-all hover:border-[#2A7DB5]/30 hover:bg-[#2A7DB5]/10"
                    >
                      <p className="truncate text-sm font-medium text-foreground/90 group-hover/item:text-foreground">
                        {service.title}
                      </p>
                      <span className="ml-3 text-base leading-none text-[#2A7DB5]/70 opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100">
                        →
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="relative group">
              <button
                type="button"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Calculator
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-80 -translate-x-1/2 translate-y-2 overflow-hidden rounded-2xl border border-primary/15 bg-background/95 p-3 opacity-0 shadow-[0_24px_64px_rgba(15,23,42,0.18)] backdrop-blur-2xl transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-950/95">
                <div className="absolute inset-x-0 top-0 h-20 bg-[linear-gradient(135deg,rgba(42,125,181,0.14),rgba(121,197,106,0.08),transparent_72%)]" />
                <div className="relative z-10 mb-3 rounded-xl border border-primary/10 bg-background/80 px-4 py-3 dark:bg-white/[0.03]">
                  <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary/90">
                    Calculators
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Pick the tool you want to open.
                  </p>
                </div>
                <div className="relative z-10 space-y-2">
                  {calculatorLinks.map((item) => {
                    const Icon = item.icon;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="group/item flex items-start gap-3 rounded-xl border border-border/60 bg-background/80 px-4 py-3 transition-all hover:border-primary/25 hover:bg-primary/5 dark:bg-white/[0.03]"
                      >
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-foreground">
                            {item.name}
                          </span>
                          <span className="mt-0.5 block text-xs text-muted-foreground">
                            {item.description}
                          </span>
                        </span>
                        <span className="pt-1 text-primary/70 opacity-0 transition-all duration-200 group-hover/item:translate-x-0.5 group-hover/item:opacity-100">
                          →
                        </span>
                      </Link>
                    );
                  })}
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
            <div className="relative group">
              <button
                type="button"
                className="inline-flex h-11 items-center gap-2 rounded-xl border border-border/60 bg-card/70 px-4 text-sm font-semibold text-foreground shadow-sm transition-all hover:border-primary/40 hover:text-primary"
              >
                Login
                <ChevronDown className="h-4 w-4" />
              </button>

              <div className="pointer-events-none absolute left-1/2 top-full z-50 mt-3 w-52 -translate-x-1/2 translate-y-2 rounded-2xl border border-border/70 bg-background p-2 opacity-0 shadow-[0_18px_40px_rgba(15,23,42,0.18)] transition-all duration-200 before:absolute before:-top-3 before:left-0 before:right-0 before:h-3 before:content-[''] group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-950">
                <div className="space-y-1">
                <a
                  href="https://protrade.jainam.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
                >
                  Trade Online
                </a>
                <a
                  href="https://jplus.jainam.in/"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
                >
                  Report Login
                </a>
                     <a
                  href="/open-demat-account"
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-xl px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-primary/8 hover:text-foreground"
                >
                  Open Demat Account
                </a>
                </div>
              </div>
            </div>

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
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-base font-medium text-muted-foreground hover:text-foreground py-2"
            onClick={() => setMobileMenuOpen(false)}
          >
            <House className="h-4 w-4" />
            Home
          </Link>

          <button
            type="button"
            onClick={() => setMobileServicesOpen((prev) => !prev)}
            className="w-full flex items-center justify-between text-base font-medium text-muted-foreground hover:text-foreground py-2"
          >
            <span className="inline-flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Services
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                mobileServicesOpen && "rotate-180",
              )}
            />
          </button>

          {mobileServicesOpen && (
            <div className="rounded-xl border border-border/60 bg-card/50 p-3">
              <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary/90">
                All Services
              </p>
              <div className="space-y-1 max-h-64 overflow-y-auto pr-1">
                {allServices.map((service) => (
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
          )}

          <button
            type="button"
            onClick={() => setMobileCalculatorOpen((prev) => !prev)}
            className="w-full flex items-center justify-between text-base font-medium text-muted-foreground hover:text-foreground py-2"
          >
            <span className="inline-flex items-center gap-2">
              <BarChart3 className="h-4 w-4" />
              Calculator
            </span>
            <ChevronDown
              className={cn(
                "h-4 w-4 transition-transform",
                mobileCalculatorOpen && "rotate-180",
              )}
            />
          </button>

          {mobileCalculatorOpen && (
            <div className="overflow-hidden rounded-2xl border border-primary/15 bg-background/95 p-3 shadow-[0_18px_44px_rgba(15,23,42,0.14)] backdrop-blur-xl dark:bg-slate-950/95">
              <div className="mb-3 rounded-xl border border-primary/10 bg-background/80 px-4 py-3 dark:bg-white/[0.03]">
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-primary/90">
                  Calculators
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  Pick the tool you want to open.
                </p>
              </div>
              <div className="space-y-2">
                {calculatorLinks.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="flex items-start gap-3 rounded-xl border border-border/60 bg-background/80 px-4 py-3 text-sm text-muted-foreground transition-all hover:border-primary/25 hover:bg-primary/5 hover:text-foreground dark:bg-white/[0.03]"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/15 bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                        <Icon className="h-4 w-4" />
                      </span>
                      <span>
                        <span className="block font-semibold text-foreground">
                          {item.name}
                        </span>
                        <span className="mt-0.5 block text-xs text-muted-foreground">
                          {item.description}
                        </span>
                      </span>
                    </Link>
                  );
                })}
              </div>
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

          <div className="rounded-xl border border-border/60 bg-card/50 p-3">
            <p className="mb-2 text-[11px] font-bold uppercase tracking-widest text-primary/90">
              Login
            </p>
            <div className="space-y-1">
              <a
                href="https://protrade.jainam.in/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trade Online
              </a>
              <a
                href="https://jplus.jainam.in/"
                target="_blank"
                rel="noreferrer"
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Report Login
              </a>
                     <a
                href="/open-demat-account"
                target="_blank"
                rel="noreferrer"
                className="block rounded-md px-2 py-1.5 text-sm text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                Open Demat Account
              </a>
            </div>
          </div>

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
