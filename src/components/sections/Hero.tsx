"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, Minus, ShieldCheck } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip } from "recharts";

const signupUrl = "https://signup.jainam.in/";

const mockChartData = [
  { month: "Jan", value: 4000 },
  { month: "Feb", value: 4200 },
  { month: "Mar", value: 4100 },
  { month: "Apr", value: 4600 },
  { month: "May", value: 5100 },
  { month: "Jun", value: 5800 },
  { month: "Jul", value: 6400 },
];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  const heroEase = [0.22, 1, 0.36, 1] as const;

  const leftColumn = {
    hidden: { opacity: 0, x: reduceMotion ? 0 : -24 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.9,
        ease: heroEase,
        staggerChildren: 0.12,
      },
    },
  };

  const heroItem = {
    hidden: { opacity: 0, y: reduceMotion ? 0 : 18 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: heroEase },
    },
  };

  return (
    <section className="relative min-h-[90vh] pt-32 pb-14 overflow-hidden flex items-center mesh-bg">
      {/* Background Elements */}
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-150 h-150 bg-[#2A7DB5]/10 rounded-full blur-[120px]"
          animate={
            reduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, 30, -10, 0],
                  y: [0, 20, -15, 0],
                  scale: [1, 1.08, 0.98, 1],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 18, repeat: Infinity, ease: "easeInOut" }
          }
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-125 h-125 bg-[#84B135]/8 rounded-full blur-[100px]"
          animate={
            reduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, -24, 10, 0],
                  y: [0, -16, 14, 0],
                  scale: [1, 0.94, 1.05, 1],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }
          }
        />
        <motion.div
          className="absolute bottom-0 left-1/3 w-100 h-100 bg-[#2A7DB5]/6 rounded-full blur-[100px]"
          animate={
            reduceMotion
              ? { x: 0, y: 0, scale: 1 }
              : {
                  x: [0, 18, -12, 0],
                  y: [0, -12, 8, 0],
                  scale: [1, 1.03, 0.95, 1],
                }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : {
                  duration: 16,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.4,
                }
          }
        />

        <motion.div
          className="absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-32 rounded-full bg-linear-to-r from-[#2A7DB5]/8 via-[#84B135]/10 to-[#2A7DB5]/8 blur-3xl"
          animate={
            reduceMotion
              ? { opacity: 0.6 }
              : { opacity: [0.35, 0.7, 0.35], scaleX: [1, 1.06, 1] }
          }
          transition={
            reduceMotion
              ? { duration: 0 }
              : { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }
        />
      </div>
      <div
        className="absolute inset-0 z-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--hero-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Left: Content */}
          <motion.div
            variants={leftColumn}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.h1
              variants={heroItem}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold leading-[1.1] text-foreground mb-5"
            >
              Invest with{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Clarity.
              </span>
              <br />
              Grow with{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Discipline.
              </span>
            </motion.h1>

            <motion.p
              variants={heroItem}
              className="text-base sm:text-lg text-muted-foreground mb-5 leading-relaxed max-w-xl"
            >
              Expert-guided wealth management built on data, discipline, and
              decades of experience.
            </motion.p>

            <motion.p
              variants={heroItem}
              className="text-sm text-foreground/55 italic mb-5"
            >
              "Smart Investing for a Better Tomorrow"
            </motion.p>

            <motion.div
              variants={heroItem}
              className="flex flex-wrap items-center gap-5 mb-7"
            >
              {[
                { value: "₹1Cr+", label: "Assets Advised" },
                { value: "100+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
              ].map((stat, i) => (
                <div key={i} className="flex flex-col">
                  <span className="text-lg font-bold text-foreground">
                    {stat.value}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>

            <motion.div
              variants={heroItem}
              className="flex flex-row flex-wrap items-center gap-3 mt-4"
            >
              <a
                href={signupUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full bg-[#84B135] hover:bg-[#84B135]/90 text-white text-sm font-semibold flex items-center gap-2 shadow-md shadow-[#84B135]/25 hover:brightness-110 hover:-translate-y-0.5 transition-all whitespace-nowrap"
              >
                <TrendingUp className="w-4 h-4 shrink-0" />
                Start Trading at Low Cost
              </a>
              <a
                href={signupUrl}
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 rounded-full border border-[#2A7DB5]/40 bg-[#2A7DB5]/10 hover:bg-[#2A7DB5]/18 text-foreground text-sm font-semibold flex items-center gap-2 transition-all hover:-translate-y-0.5 whitespace-nowrap"
              >
                <ShieldCheck className="w-4 h-4 shrink-0 text-[#2A7DB5]" />
                Get Expert Support
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.05, delay: 0.35, ease: heroEase }}
            className="relative lg:h-130 flex items-center justify-center lg:justify-end"
          >
            {/* Glow behind card */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[80%] rounded-full pointer-events-none z-10"
              style={{
                background:
                  "radial-gradient(ellipse, rgba(42,125,181,0.18) 0%, rgba(132,177,53,0.08) 50%, transparent 70%)",
              }}
            />

            {/* Main card */}
            <div
              className="relative z-20 w-full max-w-105"
              style={{
                background: "var(--surface-strong)",
                border: "1px solid rgba(42,125,181,0.2)",
                borderRadius: "24px",
                backdropFilter: "blur(20px)",
                boxShadow: "var(--surface-shadow), var(--surface-inset)",
              }}
            >
              {/* Card header */}
              <div className="p-6 border-b border-border/50">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                    Portfolio Overview
                  </span>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-[#84B135]/15 text-[#84B135] font-semibold border border-[#84B135]/20">
                    Live
                  </span>
                </div>
                <div className="flex items-end justify-between mt-3">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">
                      Total Value
                    </p>
                    <h3 className="text-3xl font-bold text-foreground tracking-tight">
                      <span
                        style={{ color: "#84B135", paddingRight: "1rem" }}
                      >
                        ₹
                      </span>
                      1,42,50,000
                    </h3>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">This Year</p>
                    <p className="text-lg font-bold text-[#84B135]">+18.4%</p>
                  </div>
                </div>
              </div>

              {/* Chart area */}
              <div className="px-4 pt-4 pb-2 h-44">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={mockChartData}
                    margin={{ top: 4, right: 4, left: 4, bottom: 4 }}
                  >
                    <defs>
                      <linearGradient
                        id="heroBlueGreen"
                        x1="0"
                        y1="0"
                        x2="1"
                        y2="0"
                      >
                        <stop offset="0%" stopColor="#2A7DB5" />
                        <stop offset="100%" stopColor="#84B135" />
                      </linearGradient>
                      <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                        <stop
                          offset="0%"
                          stopColor="#2A7DB5"
                          stopOpacity={0.25}
                        />
                        <stop
                          offset="100%"
                          stopColor="#84B135"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "10px",
                        fontSize: "12px",
                      }}
                      itemStyle={{ color: "hsl(var(--foreground))" }}
                      cursor={{
                        stroke: "rgba(42,125,181,0.3)",
                        strokeWidth: 1,
                        strokeDasharray: "4 4",
                      }}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="url(#heroBlueGreen)"
                      strokeWidth={2.5}
                      isAnimationActive
                      animationDuration={1200}
                      animationEasing="ease-out"
                      fillOpacity={1}
                      fill="url(#heroFill)"
                      dot={false}
                      activeDot={{ r: 5, fill: "#2A7DB5", strokeWidth: 0 }}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Holdings rows */}
              <div className="px-4 pb-4 space-y-2">
                {[
                  {
                    name: "Large Cap",
                    pct: "+24.2%",
                    color: "#84B135",
                    bar: 82,
                  },
                  { name: "Mid Cap", pct: "+31.8%", color: "#84B135", bar: 95 },
                  {
                    name: "Gold ETF",
                    pct: "+12.4%",
                    color: "#2A7DB5",
                    bar: 52,
                  },
                  {
                    name: "Debt Fund",
                    pct: "+8.1%",
                    color: "#2A7DB5",
                    bar: 38,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-2.5 rounded-xl"
                    style={{ background: "var(--surface-soft)" }}
                  >
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm font-medium text-foreground/80">
                          {item.name}
                        </span>
                        <span
                          className="text-sm font-bold"
                          style={{ color: item.color }}
                        >
                          {item.pct}
                        </span>
                      </div>
                      <div className="h-1 rounded-full bg-foreground/8 overflow-hidden">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${item.bar}%`,
                            background: `linear-gradient(90deg, ${item.color}80, ${item.color})`,
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating card - top left */}
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [-5, 7, -5] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : { repeat: Infinity, duration: 7.2, ease: "easeInOut" }
              }
              className="absolute -left-8 top-16 z-30 hidden lg:block"
              style={{
                background: "var(--surface-soft)",
                border: "1px solid rgba(132,177,53,0.25)",
                borderRadius: "16px",
                backdropFilter: "blur(20px)",
                padding: "14px 18px",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(132,177,53,0.15)",
                    border: "1px solid rgba(132,177,53,0.2)",
                  }}
                >
                  <TrendingUp
                    className="w-4 h-4"
                    style={{ color: "#84B135" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    SIP Running
                  </p>
                  <p className="text-xs text-muted-foreground">
                    ₹25,000 / month
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating card - bottom right */}
            <motion.div
              animate={reduceMotion ? { y: 0 } : { y: [6, -6, 6] }}
              transition={
                reduceMotion
                  ? { duration: 0 }
                  : {
                      repeat: Infinity,
                      duration: 6.4,
                      ease: "easeInOut",
                      delay: 0.9,
                    }
              }
              className="absolute -right-6 bottom-20 z-30 hidden lg:block"
              style={{
                background: "var(--surface-soft)",
                border: "1px solid rgba(42,125,181,0.25)",
                borderRadius: "16px",
                backdropFilter: "blur(20px)",
                padding: "14px 18px",
              }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center"
                  style={{
                    background: "rgba(42,125,181,0.15)",
                    border: "1px solid rgba(42,125,181,0.2)",
                  }}
                >
                  <ShieldCheck
                    className="w-4 h-4"
                    style={{ color: "#2A7DB5" }}
                  />
                </div>
                <div>
                  <p className="text-xs font-bold text-foreground">
                    Client-First Advisory
                  </p>
                  <p className="text-xs text-muted-foreground">Research-Led Approach</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

