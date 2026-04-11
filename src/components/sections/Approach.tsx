"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Database, Hourglass, Layers } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Approach() {
  const pillars = [
    {
      id: "01",
      icon: <BrainCircuit className="w-8 h-8" style={{ color: "#2A7DB5" }} />,
      color: "#2A7DB5",
      title: "Discipline over hype",
      desc: "We ignore market noise. Every portfolio decision follows a defined process — not sentiment, not trends.",
      highlight: "Process-driven. Always.",
      wide: true,
    },
    {
      id: "02",
      icon: <Database className="w-8 h-8" style={{ color: "#84B135" }} />,
      color: "#84B135",
      title: "Data over emotions",
      desc: "Investment decisions backed by rigorous quantitative analysis. Numbers guide us, never gut feel.",
      highlight: "Numbers don't lie.",
      wide: false,
    },
    {
      id: "03",
      icon: <Hourglass className="w-8 h-8" style={{ color: "#84B135" }} />,
      color: "#84B135",
      title: "Long-term over quick wins",
      desc: "Compounding is our strategy. Patience is our edge. We build wealth over years, not weeks.",
      highlight: "Time is the asset.",
      wide: false,
    },
    {
      id: "04",
      icon: <Layers className="w-8 h-8" style={{ color: "#2A7DB5" }} />,
      color: "#2A7DB5",
      title: "Simplicity over complexity",
      desc: "Clear portfolios. Plain language. No jargon. You always know exactly where your money is and why.",
      highlight: "Clarity in every rupee.",
      wide: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section
      id="approach"
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-[1px]"
              style={{ backgroundColor: "#2A7DB5" }}
            ></div>
            <span
              className="text-sm font-bold tracking-widest"
              style={{ color: "#2A7DB5" }}
            >
              HOW WE THINK
            </span>
            <div
              className="w-12 h-[1px]"
              style={{ backgroundColor: "#2A7DB5" }}
            ></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Four principles that guide every decision we make for our clients.
          </p>
        </div>

        {/* BENTO GRID */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 relative mb-16"
        >
          {pillars.map((pillar) => (
            <motion.div
              key={pillar.id}
              variants={itemVariants}
              className={cn(
                "group relative p-10 rounded-3xl overflow-hidden transition-all duration-500",
                "bg-card/60 border border-border/60 backdrop-blur-md",
                pillar.wide ? "md:col-span-2" : "md:col-span-1",
              )}
            >
              {/* Hover Glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-3xl"
                style={{
                  background: `radial-gradient(circle at 80% 80%, ${pillar.color}20 0%, transparent 60%)`,
                }}
              />

              {/* Watermark Number */}
              <div
                className="absolute top-4 right-4 font-display font-black leading-none pointer-events-none select-none transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-5deg]"
                style={{
                  fontSize: "120px",
                  color: pillar.color,
                  opacity: 0.04,
                  zIndex: 0,
                }}
              >
                {pillar.id}
              </div>

              <div className="relative z-10 flex flex-col h-full items-start">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                  style={{ backgroundColor: `${pillar.color}26` }} // ~15% opacity
                >
                  {pillar.icon}
                </div>

                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6 text-sm font-medium"
                  style={{
                    backgroundColor: `${pillar.color}15`,
                    border: `1px solid ${pillar.color}30`,
                    color: pillar.color,
                  }}
                >
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: pillar.color }}
                  ></span>
                  {pillar.highlight}
                </div>

                <h4 className="text-2xl font-bold text-foreground mb-4">
                  {pillar.title}
                </h4>
                <p className="text-lg text-muted-foreground leading-relaxed mt-auto">
                  {pillar.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* QUOTE STRIP */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="rounded-2xl p-8 md:p-12 text-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(42,125,181,0.08), rgba(132,177,53,0.08))",
            border: "1px solid hsl(var(--border))",
          }}
        >
          <p className="text-2xl md:text-3xl font-display font-medium text-foreground mb-6 italic leading-relaxed">
            "The best investment you can make is in a strategy that outlasts the
            market's mood."
          </p>
          <p className="text-muted-foreground uppercase tracking-widest text-sm font-semibold">
            — NV Investments Investment Philosophy
          </p>
        </motion.div>
      </div>
    </section>
  );
}

