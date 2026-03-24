"use client";

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData, type ServiceContent } from "@/lib/services-data";

const categoryTabs: ServiceContent["category"][] = [
  "Investment Solutions",
  "Wealth Management",
  "Specialized Services",
];

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceContent["category"]>(
    "Investment Solutions",
  );
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const bgParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [-18, 18],
  );
  const contentParallaxY = useTransform(
    scrollYProgress,
    [0, 1],
    reduceMotion ? [0, 0] : [10, -10],
  );

  const filteredServices = useMemo(
    () => servicesData.filter((service) => service.category === activeTab),
    [activeTab],
  );

  const cardContainer = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
        staggerChildren: reduceMotion ? 0 : 0.06,
      },
    },
    exit: {
      opacity: 0,
      y: reduceMotion ? 0 : -8,
      transition: { duration: 0.22 },
    },
  };

  const cardItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ y: bgParallaxY }}
      >
        <motion.div
          className="absolute -top-20 -left-24 w-96 h-96 rounded-full bg-[#2A7DB5]/10 blur-3xl"
          animate={
            reduceMotion
              ? { x: 0, y: 0 }
              : { x: [0, 24, -10, 0], y: [0, -12, 14, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 14, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute -bottom-16 -right-20 w-80 h-80 rounded-full bg-[#84B135]/12 blur-3xl"
          animate={
            reduceMotion
              ? { x: 0, y: 0 }
              : { x: [0, -20, 12, 0], y: [0, 10, -10, 0] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }
          }
        />
      </motion.div>

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        style={{ y: contentParallaxY }}
      >
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
            Our Services
          </p>
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-5">
            Complete Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Choose a category tab to explore service cards and open each
            dedicated page.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {categoryTabs.map((tab) => (
            <motion.button
              key={tab}
              type="button"
              onClick={() => setActiveTab(tab)}
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all border ${
                activeTab === tab
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20"
                  : "border-border/60 bg-card/60 text-muted-foreground hover:text-foreground hover:border-primary/40"
              }`}
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            variants={cardContainer}
            initial="hidden"
            animate="show"
            exit="exit"
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
          >
            {filteredServices.map((service) => (
              <motion.div
                key={service.slug}
                variants={cardItem}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.995 }}
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group block relative overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 hover:bg-card transition-all"
                >
                  <motion.div
                    className="pointer-events-none absolute -inset-x-6 -top-10 h-24 bg-linear-to-r from-transparent via-primary/15 to-transparent opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100"
                    animate={reduceMotion ? undefined : { x: [0, 30, 0] }}
                    transition={
                      reduceMotion
                        ? undefined
                        : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
                    }
                  />

                  <div className="relative z-10">
                    <h3 className="text-xl font-bold text-foreground mb-3">
                      {service.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="rounded-xl border border-border/60 bg-background/60 p-3">
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

                    <span className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-primary">
                      Learn more{" "}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

