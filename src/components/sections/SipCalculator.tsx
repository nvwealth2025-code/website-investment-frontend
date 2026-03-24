"use client";

import { useState, useMemo, useRef } from "react";
import { useInView } from "framer-motion";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import { formatCurrency } from "@/lib/utils";

export default function SipCalculator() {
  const [monthly, setMonthly] = useState(25000);
  const [years, setYears] = useState(10);
  const [rate, setRate] = useState(12);
  const chartRef = useRef<HTMLDivElement | null>(null);
  const animateChart = useInView(chartRef, { once: true, amount: 0.45 });

  const { totalInvested, estimatedReturns, totalValue, chartData } =
    useMemo(() => {
      const months = years * 12;
      const monthlyRate = rate / 100 / 12;
      let currentInvested = 0;
      let currentValue = 0;
      const data = [];

      for (let i = 1; i <= months; i++) {
        currentInvested += monthly;
        currentValue = (currentValue + monthly) * (1 + monthlyRate);

        if (i % 12 === 0) {
          data.push({
            year: `Year ${i / 12}`,
            invested: Math.round(currentInvested),
            value: Math.round(currentValue),
          });
        }
      }

      const finalMaturity =
        monthly *
        ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) *
        (1 + monthlyRate);
      const totalInv = monthly * months;

      return {
        totalInvested: totalInv,
        estimatedReturns: finalMaturity - totalInv,
        totalValue: finalMaturity,
        chartData: data,
      };
    }, [monthly, years, rate]);

  return (
    <section id="calculator" className="py-32 relative bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
            Calculate Your <span className="text-primary">Wealth</span>
          </h2>
          <p className="text-muted-foreground">
            Project your potential returns with disciplined investing.
          </p>
        </div>

        <div className="glass-panel-gold rounded-[2rem] p-6 lg:p-10 border-primary/20">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8">
            {/* Controls */}
            <div className="lg:col-span-5 flex flex-col gap-8 justify-center">
              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-foreground/80">
                    Monthly Investment
                  </label>
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                    {formatCurrency(monthly)}
                  </span>
                </div>
                <input
                  type="range"
                  min="1000"
                  max="100000"
                  step="1000"
                  value={monthly}
                  onChange={(e) => setMonthly(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>₹1K</span>
                  <span>₹1L</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-foreground/80">
                    Investment Period
                  </label>
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                    {years} Years
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  step="1"
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>1 Yr</span>
                  <span>30 Yrs</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-between items-end">
                  <label className="text-sm font-medium text-foreground/80">
                    Expected Return (p.a)
                  </label>
                  <span className="text-xl font-bold text-primary bg-primary/10 px-3 py-1 rounded-lg border border-primary/20">
                    {rate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="6"
                  max="18"
                  step="0.5"
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="w-full accent-primary"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>6%</span>
                  <span>18%</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  window.open("https://www.nvwealth.in/", "_blank", "noopener,noreferrer")
                }
                className="w-full py-4 mt-4 rounded-xl bg-primary text-primary-foreground font-bold text-lg hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              >
                Start a SIP
              </button>
            </div>

            {/* Results & Chart */}
            <div className="lg:col-span-7 bg-card/75 rounded-2xl p-6 lg:p-8 border border-border/60 backdrop-blur-md">
              <div className="grid sm:grid-cols-3 gap-6 mb-8">
                <div className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <p className="text-sm text-muted-foreground mb-2">
                    Invested Amount
                  </p>
                  <p className="text-xl font-bold text-foreground">
                    {formatCurrency(totalInvested)}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-border/60 bg-background/40">
                  <p className="text-sm text-muted-foreground mb-2">
                    Est. Returns
                  </p>
                  <p className="text-xl font-bold text-emerald-400">
                    {formatCurrency(estimatedReturns)}
                  </p>
                </div>
                <div className="p-4 rounded-xl border border-primary/20 bg-primary/5">
                  <p className="text-sm text-muted-foreground mb-2">
                    Total Value
                  </p>
                  <p className="text-2xl font-bold text-primary">
                    {formatCurrency(totalValue)}
                  </p>
                </div>
              </div>

              <div ref={chartRef} className="h-64 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                    data={chartData}
                    margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
                  >
                    <defs>
                      <linearGradient
                        id="colorTotal"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="#2A7DB5"
                          stopOpacity={0.4}
                        />
                        <stop
                          offset="95%"
                          stopColor="#2A7DB5"
                          stopOpacity={0}
                        />
                      </linearGradient>
                      <linearGradient
                        id="colorInvested"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="rgba(71,85,105,0.28)"
                          stopOpacity={0.3}
                        />
                        <stop
                          offset="95%"
                          stopColor="rgba(71,85,105,0.28)"
                          stopOpacity={0}
                        />
                      </linearGradient>
                    </defs>
                    <XAxis
                      dataKey="year"
                      stroke="hsl(var(--muted-foreground) / 0.35)"
                      fontSize={12}
                      tickLine={false}
                      axisLine={false}
                      dy={10}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "hsl(var(--card))",
                        borderColor: "hsl(var(--border))",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "hsl(var(--foreground))" }}
                      formatter={(value: number) => formatCurrency(value)}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      name="Total Value"
                      stroke="#2A7DB5"
                      strokeWidth={3}
                      isAnimationActive={animateChart}
                      animationDuration={1300}
                      animationEasing="ease-out"
                      fillOpacity={1}
                      fill="url(#colorTotal)"
                    />
                    <Area
                      type="monotone"
                      dataKey="invested"
                      name="Invested Amount"
                      stroke="hsl(var(--muted-foreground) / 0.5)"
                      strokeWidth={2}
                      strokeDasharray="5 5"
                      isAnimationActive={animateChart}
                      animationDuration={1300}
                      animationBegin={140}
                      animationEasing="ease-out"
                      fillOpacity={1}
                      fill="url(#colorInvested)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
