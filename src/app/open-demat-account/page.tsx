import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Open Demat Account | NV Investments",
  description:
    "Choose between Premium and DIY brokerage plans and open your demat account with NV Investments.",
};

export default function OpenDematAccountPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <Navbar />

      {/* Background Blur Effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-28 -left-20 w-115 h-115 rounded-full bg-[#2A7DB5]/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-20 w-105 h-105 rounded-full bg-[#84B135]/10 blur-[120px]" />
      </div>

      <main className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <section className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Open Your Demat Account
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose a plan that fits your trading style — whether you want expert support or prefer to trade independently.
            </p>
          </section>

          {/* Pricing Cards */}
          <section className="grid md:grid-cols-2 gap-6">

            {/* Premium Plan */}
            <div className="rounded-3xl border border-primary/40 bg-card/70 backdrop-blur-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">Premium</h2>

              <div className="text-center mb-6">
                <p className="text-5xl font-bold">0.3%</p>
                <p className="text-muted-foreground">Of trade value</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Equity Delivery - 0.3%
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Equity/Future Intraday - 0.03%
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Options - ₹ 30/lot
                </li>
              </ul>

            <a
  href="https://signup.jainam.in/"
  target="_blank"
  rel="noopener noreferrer"
  className="w-full inline-flex items-center justify-center rounded-xl bg-primary text-white py-3 font-semibold hover:brightness-110"
>
  Open an Account
</a>
            </div>

            {/* DIY Plan */}
            <div className="rounded-3xl border border-border/60 bg-card/70 backdrop-blur-md p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">DIY</h2>

              <div className="text-center mb-6">
                <p className="text-5xl font-bold">₹ 20</p>
                <p className="text-muted-foreground">Per order</p>
              </div>

              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Equity Delivery - ₹ 20/order
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Equity/Future Intraday - ₹ 20/order
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 className="text-green-500 w-5 h-5" />
                  Options - ₹ 20/order
                </li>
              </ul>

              <button className="w-full rounded-xl border border-border py-3 font-semibold hover:bg-muted">
                Open an Account
              </button>
            </div>

          </section>
        </div>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}