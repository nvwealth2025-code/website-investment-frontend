"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { ArrowRight } from "lucide-react";
import { servicesData } from "@/lib/services-data";

export default function Services() {
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
            Explore every service directly and open dedicated pages for full
            details.
          </p>
        </div>

        <motion.div
          variants={cardContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5"
        >
          {servicesData.map((service) => (
              <motion.div
                key={service.slug}
                variants={cardItem}
                whileHover={reduceMotion ? undefined : { y: -8, scale: 1.015 }}
                whileTap={{ scale: 0.995 }}
                className="h-full"
              >
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative h-full min-h-[24rem] overflow-hidden rounded-2xl border border-border/60 bg-card/60 p-6 hover:border-primary/40 hover:bg-card transition-all flex flex-col"
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

                  <div className="relative z-10 flex h-full flex-col">
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

                    <span className="inline-flex items-center gap-1 mt-auto pt-5 text-sm font-semibold text-primary">
                      Learn more{" "}
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

