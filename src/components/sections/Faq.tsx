"use client";

import { motion } from "framer-motion";
import { CircleHelp, MessageSquareText, ShieldCheck, Sparkles } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqItems = [
  {
    value: "item-1",
    question: "How does NV Investments support an investor from start to long-term review?",
    answer:
      "We begin with your goals, risk comfort, and time horizon, then shape a practical investment roadmap. That can include mutual funds, SIP planning, tax-saving ideas, portfolio restructuring, and periodic reviews so your strategy stays relevant over time.",
  },
  {
    value: "item-2",
    question: "Do I need a large amount to begin investing with you?",
    answer:
      "Not at all. Many investors start with a manageable SIP and increase contributions gradually. The priority is to create the right allocation and consistency first, rather than waiting for a perfect lump sum.",
  },
  {
    value: "item-3",
    question: "Can you review my current portfolio before suggesting anything new?",
    answer:
      "Yes. We can assess your existing investments, spot duplication, identify underperforming or mismatched holdings, and then recommend a cleaner structure only where changes genuinely improve clarity or efficiency.",
  },
  {
    value: "item-4",
    question: "What kind of ongoing guidance can I expect after I start?",
    answer:
      "Our relationship does not end after the first investment. We stay available for portfolio reviews, goal updates, market-related concerns, and course corrections when your personal or financial situation changes.",
  },
  {
    value: "item-5",
    question: "Is your advice transparent, and how are charges explained?",
    answer:
      "Yes. Before you proceed, we explain the structure, product suitability, and any applicable charges in simple language. The focus is on informed decisions and long-term trust, not pushing complexity or unclear commitments.",
  },
];

const insightCards = [
  {
    title: "Actionable replies",
    description: "Practical answers built around real investing decisions.",
    icon: MessageSquareText,
    color: "#2A7DB5",
  },
  {
    title: "Clear structure",
    description: "Advice explained simply, without product-heavy clutter.",
    icon: ShieldCheck,
    color: "#84B135",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="relative overflow-hidden bg-background py-32">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(132,177,53,0.14),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(42,125,181,0.12),transparent_28%)]" />
      <div className="absolute inset-x-0 top-24 h-px bg-gradient-to-r from-transparent via-border to-transparent opacity-70" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-18 flex flex-col items-center text-center"
        >
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-12 bg-[#84B135]" />
            <span className="text-sm font-bold uppercase tracking-[0.28em] text-[#84B135]">FAQ</span>
            <div className="h-px w-12 bg-[#84B135]" />
          </div>
          <h2 className="mb-6 max-w-4xl text-4xl font-display font-bold text-foreground sm:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-3xl text-lg text-muted-foreground sm:text-xl">
            Have questions about investing with NV Investments? Explore quick answers below or reach out to our team for personalized guidance.
          </p>
        </motion.div>

        <div className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr] xl:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55 }}
            className="rounded-[32px] border border-border/60 bg-card/70 p-4 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur-md"
          >
            <div className="rounded-[26px] border border-border/50 bg-background/80 p-6 sm:p-7">
              <div className="mb-8 flex flex-col gap-5 border-b border-border/60 pb-7 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-primary">
                    <Sparkles className="h-3.5 w-3.5" />
                    Investor Clarity Desk
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground sm:text-3xl">
                    Honest answers before any financial decision.
                  </h3>
                </div>
                <div className="grid grid-cols-2 gap-3 sm:min-w-[230px]">
                  <div className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3">
                    <div className="text-lg font-display font-bold text-foreground">100+</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Clients</div>
                  </div>
                  <div className="rounded-2xl border border-border/60 bg-card/70 px-4 py-3">
                    <div className="text-lg font-display font-bold text-foreground">10+</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.2em] text-muted-foreground">Years</div>
                  </div>
                </div>
              </div>

              <Accordion type="single" collapsible defaultValue="item-1" className="space-y-3">
                {faqItems.map((item, index) => (
                  <AccordionItem
                    key={item.value}
                    value={item.value}
                    className="group rounded-2xl border border-border/60 bg-card/55 px-5 transition-all data-[state=open]:border-primary/30 data-[state=open]:bg-primary/5"
                  >
                    <AccordionTrigger className="gap-4 py-5 text-left text-base font-semibold text-foreground hover:no-underline sm:text-lg">
                      <span className="flex items-center gap-4">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-border/60 bg-background/80 text-sm font-display font-bold text-primary transition-colors group-data-[state=open]:border-primary/30 group-data-[state=open]:bg-primary/10">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{item.question}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 pl-14 pr-6 text-base leading-8 text-muted-foreground">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.55, delay: 0.06 }}
            className="relative rounded-[36px] border border-[#10C881]/25 bg-gradient-to-br from-[#10C881] via-[#19CF92] to-[#0FAE70] p-[14px] shadow-[0_28px_90px_rgba(16,200,129,0.18)]"
          >
            <div className="relative flex min-h-[500px] h-full flex-col overflow-hidden rounded-[30px] border border-white/45 bg-[linear-gradient(180deg,hsl(var(--card))_0%,hsl(var(--background))_100%)] px-7 py-7 shadow-[inset_0_1px_0_rgba(255,255,255,0.34)] sm:px-8 sm:py-8">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(42,125,181,0.14),transparent_24%),radial-gradient(circle_at_88%_78%,rgba(132,177,53,0.18),transparent_28%),linear-gradient(180deg,transparent,rgba(0,0,0,0.06))]" />
              <div className="absolute left-1/2 top-[52%] h-[290px] w-[290px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 bg-[radial-gradient(circle,rgba(42,125,181,0.12),transparent_65%)] blur-[2px]" />

              <div className="relative z-10 flex items-start justify-between gap-4">
                <div className="max-w-[260px]">
                  <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#10C881]">Clear Answers</p>
                  <h3 className="mt-3 text-[30px] font-display font-bold leading-[1.05] text-foreground sm:text-[38px]">
                    Questions handled with calm, structured guidance.
                  </h3>
                </div>
                <div className="rounded-2xl border border-[#10C881]/20 bg-[#10C881]/10 p-3 text-[#10C881] shadow-sm">
                  <CircleHelp className="h-6 w-6" />
                </div>
              </div>

              <div className="relative z-10 mt-10 flex-1">
                <div className="relative mx-auto mt-3 flex h-[250px] max-w-[360px] items-center justify-center">
                  <div className="absolute inset-x-10 top-8 h-28 rounded-full bg-[#2A7DB5]/16 blur-3xl" />
                  <div className="absolute inset-x-16 bottom-8 h-24 rounded-full bg-[#84B135]/18 blur-3xl" />
                  <div className="relative z-10 select-none text-center font-display font-black uppercase leading-none tracking-[-0.09em] text-[#2A7DB5]/88 drop-shadow-[0_18px_35px_rgba(42,125,181,0.18)]">
                    <div className="text-[92px] sm:text-[132px]">ASK</div>
                    <div className="-mt-3 text-[46px] tracking-[0.24em] text-[#10C881] sm:text-[54px]">CLEAR</div>
                  </div>
                </div>
              </div>

              <div className="relative z-10 mt-6 grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-background/80 px-4 py-4 text-center shadow-sm">
                  <div className="text-2xl font-display font-bold text-foreground">100+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Investors Served</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 px-4 py-4 text-center shadow-sm">
                  <div className="text-2xl font-display font-bold text-foreground">10+</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Years Experience</div>
                </div>
                <div className="rounded-2xl border border-border/60 bg-background/80 px-4 py-4 text-center shadow-sm">
                  <div className="text-2xl font-display font-bold text-foreground">Trusted Advisory</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">Investment Guidance</div>
                </div>
              </div>

              <div className="relative z-10 mt-5 grid gap-3 sm:grid-cols-2">
                {insightCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="rounded-[22px] border border-border/60 bg-background/70 px-4 py-4 shadow-sm backdrop-blur-md"
                    >
                      <div className="mb-3 inline-flex rounded-xl p-2" style={{ backgroundColor: `${card.color}14`, color: card.color }}>
                        <Icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-semibold text-foreground">{card.title}</p>
                      <p className="mt-1 text-xs leading-5 text-muted-foreground">{card.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}