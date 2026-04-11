"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp } from "lucide-react";

const signupUrl = "https://signup.jainam.in/";

export default function Cta() {
  const ctaEase = [0.22, 1, 0.36, 1] as const;

  return (
    <section className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_70%)] z-0 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: ctaEase }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.05, ease: ctaEase }}
            className="text-5xl sm:text-6xl font-display font-bold text-foreground mb-6"
          >
            Your wealth deserves a better strategy.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.12, ease: ctaEase }}
            className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Join 100+ investors who chose discipline over guesswork.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, delay: 0.2, ease: ctaEase }}
            className="flex flex-col items-center gap-6"
          >
            <motion.div
              whileHover={{ y: -3, scale: 1.02 }}
              transition={{ duration: 0.25, ease: ctaEase }}
              className="flex flex-col sm:flex-row sm:flex-nowrap items-stretch sm:items-center justify-center gap-4"
            >
              <a
                href={signupUrl}
                target="_blank"
                rel="noreferrer"
                className="justify-center px-8 py-4 rounded-full bg-[#84B135] text-white font-bold text-base flex items-center gap-2.5 hover:brightness-110 transition-all shadow-xl shadow-[#84B135]/20"
              >
                <TrendingUp className="w-5 h-5 shrink-0" />
                Start Trading at Low Cost
              </a>
              <a
                href={signupUrl}
                target="_blank"
                rel="noreferrer"
                className="justify-center px-8 py-4 rounded-full border border-[#2A7DB5]/30 bg-[#2A7DB5]/10 text-foreground font-bold text-base flex items-center gap-2.5 hover:bg-[#2A7DB5]/16 transition-all"
              >
                <ShieldCheck className="w-5 h-5 shrink-0 text-[#2A7DB5]" />
                Get Expert Investment Support
              </a>
            </motion.div>
            <a
              href="#approach"
              className="text-primary font-semibold underline underline-offset-4 decoration-primary/30 hover:decoration-primary transition-all"
            >
              Explore our approach →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

