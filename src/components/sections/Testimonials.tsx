"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
export default function Testimonials() {
  const gridTestimonials = [
  [
  {
    quote:
      "Switching to NV Investments was the best financial decision I've made. Their data-driven approach removes all the anxiety from investing.",
    name: "Keyur Shah",
    role: "Tech Entrepreneur",
    initials: "KS",
    color: "#84B135",
  },
  {
    quote:
      "They don't just sell products; they build a roadmap. The clarity I have about my retirement is incredibly comforting.",
    name: "Jigar Doshi",
    role: "Medical Professional",
    initials: "JD",
    color: "#2A7DB5",
  },
  {
    quote:
      "The discipline they enforce during market dips is what separates them from regular advisors. Highly recommended.",
    name: "Paras Shah",
    role: "Corporate Executive",
    initials: "PS",
    color: "#2A7DB5",
  },
  {
    quote:
      "Professional, transparent, and results-oriented. My portfolio grew 28% last year under their management.",
    name: "Sunilkumar Jain",
    role: "Business Owner",
    initials: "SJ",
    color: "#84B135",
  },
  {
    quote:
      "Excellent guidance and consistent support throughout my investment journey.",
    name: "Atulbhai Shah",
    role: "Investor",
    initials: "AS",
    color: "#2A7DB5",
  },
  {
    quote:
      "Clear communication and disciplined strategy helped me stay confident during volatile markets.",
    name: "Viraj Gandhi",
    role: "Entrepreneur",
    initials: "VG",
    color: "#84B135",
  },
  {
    quote:
      "Highly professional team with a strong focus on long-term wealth creation.",
    name: "Manish Mehta",
    role: "Business Owner",
    initials: "MM",
    color: "#2A7DB5",
  },
  {
    quote:
      "Reliable advice and transparent process. I feel secure about my financial future.",
    name: "Sunny Chauhan",
    role: "Working Professional",
    initials: "SC",
    color: "#84B135",
  },
]
  ];

  const StarRating = () => (
    <div className="flex gap-1 text-[#84B135]">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-current" />
      ))}
    </div>
  );

  return (
    <section
      id="testimonials"
      className="py-32 relative overflow-hidden bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* SECTION HEADER */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div
              className="w-12 h-[1px]"
              style={{ backgroundColor: "#84B135" }}
            ></div>
            <span
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "#84B135" }}
            >
              Client Stories
            </span>
            <div
              className="w-12 h-[1px]"
              style={{ backgroundColor: "#84B135" }}
            ></div>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground">
            Trusted by Investors
          </h2>
        </div>

        {/* TRUST METRICS BAR */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-20 bg-card/65 border border-border/60 rounded-full py-6 px-8 md:px-12 backdrop-blur-md"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-border/60">
            <div className="flex flex-col items-center flex-1 pt-4 md:pt-0 first:pt-0">
              <div className="flex items-center gap-3 mb-1">
                <span className="text-3xl font-display font-bold text-foreground">
                  4.9
                </span>
                <StarRating />
              </div>
              <span className="text-sm text-muted-foreground">
                Average Rating
              </span>
            </div>

            <div className="flex flex-col items-center flex-1 pt-4 md:pt-0">
              <span className="text-3xl font-display font-bold text-foreground mb-1">
                270+
              </span>
              <span className="text-sm text-muted-foreground">Clients</span>
            </div>

            <div className="flex flex-col items-center flex-1 pt-4 md:pt-0">
              <span className="text-3xl font-display font-bold text-foreground mb-1">
                Rs.1Cr+
              </span>
              <span className="text-sm text-muted-foreground">AUM</span>
            </div>

            <div className="flex flex-col items-center flex-1 pt-4 md:pt-0">
              <span className="text-3xl font-display font-bold text-foreground mb-1">
                98%
              </span>
              <span className="text-sm text-muted-foreground">Retention</span>
            </div>
          </div>
        </motion.div>

        {/* FEATURED TESTIMONIAL */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl p-8 md:p-12 mb-10 overflow-hidden border border-border/60 bg-gradient-to-r from-[#2A7DB5]/10 to-card"
        >
          <Quote className="absolute top-8 right-8 w-40 h-40 text-[#2A7DB5] opacity-10 rotate-12" />

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <div
              className="w-20 h-20 shrink-0 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-xl"
              style={{
                background: "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
              }}
            >
              VM
            </div>

            <div className="flex-1">
              <div className="mb-6">
                <StarRating />
              </div>
              <p className="text-2xl md:text-3xl text-foreground font-display italic leading-snug mb-8">
                "NV Investments didn't just grow my portfolio — they changed how I
                think about money. After 6 years as a client, I can confidently
                say this is the most disciplined, transparent investment firm
                I've worked with."
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">
                    Vikram Mehta
                  </h4>
                  <p className="text-muted-foreground">
                    Serial Entrepreneur & Angel Investor
                  </p>
                </div>
                <div className="hidden md:block w-1 h-8 bg-border rounded-full mx-2"></div>
                <div className="px-4 py-2 rounded-full bg-[#84B135]/15 border border-[#84B135]/30 text-[#84B135] text-sm font-semibold">
                  +34.2% CAGR over 5 years
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* GRID OF 4 TESTIMONIALS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24">
          {gridTestimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="group relative rounded-2xl overflow-hidden border border-border/60 bg-card/60"
            >
              <div
                className="absolute left-0 top-0 bottom-0 w-[3px]"
                style={{
                  background: `linear-gradient(to bottom, ${t.color}, transparent)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none blur-3xl"
                style={{
                  background: `radial-gradient(circle at 90% 90%, ${t.color}1A 0%, transparent 60%)`,
                }}
              />

              <div className="relative z-10 p-8 pl-10 flex flex-col h-full">
                <div className="mb-6">
                  <StarRating />
                </div>

                <p className="text-lg text-foreground leading-relaxed italic mb-8 flex-1">
                  "{t.quote}"
                </p>

                <div className="flex items-center gap-4 mt-auto">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center font-bold"
                    style={{ backgroundColor: `${t.color}33`, color: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <h5 className="font-bold text-foreground">{t.name}</h5>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-8">
            Join 270+ investors already growing with NV Investments
          </h3>
          <button
            className="px-8 py-4 rounded-full text-white font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-xl"
            style={{
              background: "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
            }}
          >
            Start Your Investment Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}

