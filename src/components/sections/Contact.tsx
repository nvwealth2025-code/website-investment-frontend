"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Loader2,
  ChevronDown,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 90812 70913",
    href: "tel:+919081270913",
    color: "#2A7DB5",
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@nvwealth.in",
    href: "mailto:info@nvwealth.in",
    color: "#84B135",
  },

  {
    icon: MapPin,
    label: "Office",
    value: "Cabin No. 14, B-802, Gopal Palace, Nehru Nagar, Ahmedabad – 380015",
    href: "https://maps.google.com",
    color: "#2A7DB5",
  },
];

type FormState = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
};

const initialForm: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};

const getBackendUrl = (): string => {
  if (typeof window !== "undefined") {
    return (
      process.env.NEXT_PUBLIC_BACKEND_URL ||
      "https://website-backend-seven.vercel.app"
    );
  }
  return "https://website-backend-seven.vercel.app";
};

const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

const extractPhoneDigits = (phone: string): string => {
  return phone.replace(/\D/g, "");
};

const submitLeadForm = async (
  formData: FormState,
): Promise<{ success: boolean; error?: string }> => {
  try {
    const baseUrl = getBackendUrl();
    const digits = extractPhoneDigits(formData.phone);

    const payload = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      service: formData.service,
      message: formData.message,
      leadType: "investment",
    };

    const response = await fetch(`${baseUrl}/send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      const errorMessage =
        errorData.message || `HTTP ${response.status}: ${response.statusText}`;
      console.error("[Contact Form] Submission failed:", errorMessage);
      return {
        success: false,
        error:
          "Unable to send your message. Please try again later or contact us directly.",
      };
    }

    return { success: true };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("[Contact Form] Network error:", errorMessage);
    return {
      success: false,
      error: "Network error. Please check your connection and try again.",
    };
  }
};

export default function Contact() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<FormState>>({});
  const [errorMessage, setErrorMessage] = useState<string>("");

  const validate = (): boolean => {
    const e: Partial<FormState> = {};

    if (!form.name.trim()) {
      e.name = "Name is required";
    } else if (form.name.trim().length < 2) {
      e.name = "Name must be at least 2 characters";
    }

    if (!form.email.trim()) {
      e.email = "Email is required";
    } else if (!validateEmail(form.email)) {
      e.email = "Enter a valid email";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required";
    } else {
      const digits = extractPhoneDigits(form.phone);
      if (digits.length < 10) {
        e.phone = "Phone must contain at least 10 digits";
      }
    }

    if (!form.message.trim()) {
      e.message = "Message is required";
    } else if (form.message.trim().length < 10) {
      e.message = "Message must be at least 10 characters";
    }

    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (errorMessage) {
      setErrorMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!validate()) {
      return;
    }

    setSubmitting(true);
    const result = await submitLeadForm(form);
    setSubmitting(false);

    if (result.success) {
      setSubmitted(true);
      setForm(initialForm);
      setErrors({});
    } else {
      setErrorMessage(
        result.error || "Something went wrong. Please try again.",
      );
    }
  };

  const inputBase =
    "w-full rounded-xl border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all duration-200 backdrop-blur-sm";
  const inputNormal = `${inputBase} border-border/60 hover:border-primary/30`;
  const inputError = `${inputBase} border-destructive/60 focus:ring-destructive/30`;

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden bg-background"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute -top-32 -right-40 w-150 h-150 rounded-full bg-[#2A7DB5]/6 blur-[120px]" />
        <div className="absolute bottom-0 -left-40 w-125 h-125 rounded-full bg-[#84B135]/6 blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(var(--hero-grid-line) 1px, transparent 1px), linear-gradient(90deg, var(--hero-grid-line) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-20"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-primary/60" />
            <span className="text-sm font-bold tracking-widest uppercase text-primary">
              Get In Touch
            </span>
            <div className="w-12 h-px bg-primary/60" />
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6">
            Let&apos;s Start Your{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Journey
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Have questions about investing? We&apos;re here to help. Reach out
            and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* ── LEFT: Contact info cards ─────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 flex flex-col gap-5"
          >
            {/* Info card wrapper */}
            <div
              className="rounded-3xl p-6 border border-border/60 backdrop-blur-md"
              style={{ background: "var(--surface-strong)" }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  NV Investments Team
                </h3>
                <p className="text-muted-foreground text-sm">
                  Smart Investing,Stronger Futures
                </p>
              </div>

              <div className="space-y-4">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target={
                        item.href.startsWith("http") ? "_blank" : undefined
                      }
                      rel="noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-2xl border border-border/40 hover:border-primary/30 transition-all duration-300 bg-background/40 hover:bg-primary/5"
                    >
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          backgroundColor: `${item.color}18`,
                          border: `1px solid ${item.color}30`,
                        }}
                      >
                        <Icon
                          className="w-4 h-4"
                          style={{ color: item.color }}
                        />
                      </div>
                      <div className="min-w-0">
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-1"
                          style={{ color: item.color }}
                        >
                          {item.label}
                        </p>
                        <p className="text-sm text-foreground/80 leading-relaxed wrap-break-word">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick stats strip */}
            <div
              className="rounded-2xl p-5 border border-primary/20 grid grid-cols-3 divide-x divide-border/60"
              style={{ background: "var(--glass-gold-bg)" }}
            >
              {[
                { val: "24h", label: "Response" },
                { val: "Free", label: "Consultation" },
                { val: "100%", label: "Confidential" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-4 py-2"
                >
                  <span className="text-xl font-display font-bold text-primary">
                    {s.val}
                  </span>
                  <span className="text-xs text-muted-foreground mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── RIGHT: Contact form ───────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3"
          >
            <div
              className="rounded-3xl p-8 lg:p-10 border border-border/60 backdrop-blur-md shadow-[0_24px_80px_rgba(31,41,55,0.08)]"
              style={{ background: "var(--surface-strong)" }}
            >
              {submitted ? (
                /* ── Success State ── */
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-16 text-center"
                >
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(132,177,53,0.12)",
                      border: "1px solid rgba(132,177,53,0.3)",
                    }}
                  >
                    <CheckCircle2
                      className="w-10 h-10"
                      style={{ color: "#84B135" }}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-foreground mb-3">
                    Message Received!
                  </h3>
                  <p className="text-muted-foreground mb-8 max-w-sm">
                    Thank you for reaching out. Our team will get back to you
                    within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground text-sm font-semibold transition-all"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                /* ── Form ── */
                <>
                  <div className="mb-8">
                    <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                      Send Us a Message
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Fill in the details below and we&apos;ll reach out to you
                      shortly.
                    </p>
                  </div>

                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    noValidate
                  >
                    {/* Name + Email row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                          Full Name <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className={errors.name ? inputError : inputNormal}
                        />
                        {errors.name && (
                          <p className="mt-1.5 text-xs text-destructive">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                          Email Address{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          placeholder="you@example.com"
                          className={errors.email ? inputError : inputNormal}
                        />
                        {errors.email && (
                          <p className="mt-1.5 text-xs text-destructive">
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Service row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                          Phone Number{" "}
                          <span className="text-destructive">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className={errors.phone ? inputError : inputNormal}
                        />
                        {errors.phone && (
                          <p className="mt-1.5 text-xs text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                          I&apos;m Interested In
                        </label>
                        <div className="relative">
                          <select
                            name="service"
                            value={form.service}
                            onChange={handleChange}
                            className={`${inputNormal} cursor-pointer appearance-none pr-10`}
                          >
                            <option value="">Select a topic…</option>
                            <option value="Equity Investments">
                              Equity Investments
                            </option>
                            <option value="Portfolio Management (PMS)">
                              Portfolio Management (PMS)
                            </option>
                            <option value="SIP Planning">SIP Planning</option>
                            <option value="Tax Saving (ELSS)">
                              Tax Saving (ELSS)
                            </option>
                            <option value="Other">Other</option>
                          </select>
                          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground/60" />
                        </div>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2">
                        Your Message <span className="text-destructive">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={form.message}
                        onChange={handleChange}
                        rows={5}
                        placeholder="Tell us about your investment goals, questions, or anything you'd like to discuss…"
                        className={`${errors.message ? inputError : inputNormal} resize-none`}
                      />
                      {errors.message && (
                        <p className="mt-1.5 text-xs text-destructive">
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Error message display */}
                    {errorMessage && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-3 rounded-lg border border-destructive/30 bg-destructive/10 text-destructive text-sm"
                      >
                        {errorMessage}
                      </motion.div>
                    )}

                    {/* Submit */}
                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold text-base transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
                      style={{
                        background: submitting
                          ? "hsl(var(--muted))"
                          : "linear-gradient(135deg, #2A7DB5 0%, #84B135 100%)",
                        color: "#fff",
                        boxShadow: submitting
                          ? "none"
                          : "0 8px 30px rgba(42,125,181,0.3)",
                      }}
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending…
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <p className="text-center text-xs text-muted-foreground">
                      By submitting, you agree to our privacy policy. We never
                      share your details with third parties.
                    </p>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
