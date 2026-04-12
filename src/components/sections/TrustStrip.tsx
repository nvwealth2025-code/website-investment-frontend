"use client";

import { motion } from "framer-motion";

export default function TrustStrip() {
  const trustEase = [0.22, 1, 0.36, 1] as const;

  const container = {
    hidden: { opacity: 0, y: 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: trustEase,
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: trustEase } },
  };

  const stats = [
    { value: "₹1Cr+", label: "AUM" },
    { value: "270+", label: "Clients" },
    { value: "10+", label: "Years Exp." },
  ];

  return (
    <div className="w-full bg-background border-y border-border/60 py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-0 divide-x-0 md:divide-x divide-border/60"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={item}
              className="flex flex-col items-center justify-center text-center px-4"
            >
              <span className="text-4xl md:text-5xl font-display font-bold text-primary mb-2 tracking-tight">
                {stat.value}
              </span>
              <span className="text-sm md:text-base font-medium text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
