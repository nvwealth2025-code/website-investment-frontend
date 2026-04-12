"use client";

import { useMemo, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import { formatCurrency } from "@/lib/utils";

type SegmentKey = "intraday" | "delivery" | "futures" | "options";
type ExchangeKey = "NSE" | "BSE";

type SegmentConfig = {
  key: SegmentKey;
  title: string;
  sttRate: number;
  sttOn: "buy" | "sell" | "turnover";
  exchangeRate: number;
  brokerageRate: number;
  brokerageCap: number;
  stampRate: number;
};

type SegmentInputState = {
  buyPrice: string;
  sellPrice: string;
  quantity: string;
  exchange: ExchangeKey;
};

const segmentConfig: SegmentConfig[] = [
  {
    key: "intraday",
    title: "Intraday Equity",
    sttRate: 0.00025,
    sttOn: "sell",
    exchangeRate: 0.0000297,
    brokerageRate: 0.0003,
    brokerageCap: 40,
    stampRate: 0.00003,
  },
  {
    key: "delivery",
    title: "Delivery Equity",
    sttRate: 0.001,
    sttOn: "turnover",
    exchangeRate: 0.0000297,
    brokerageRate: 0.0003,
    brokerageCap: 40,
    stampRate: 0.00015,
  },
  {
    key: "futures",
    title: "F&O - Futures",
    sttRate: 0.0002,
    sttOn: "sell",
    exchangeRate: 0.000018,
    brokerageRate: 0.0003,
    brokerageCap: 40,
    stampRate: 0.00002,
  },
  {
    key: "options",
    title: "F&O - Options",
    sttRate: 0.0005,
    sttOn: "sell",
    exchangeRate: 0.00035,
    brokerageRate: 0.0003,
    brokerageCap: 40,
    stampRate: 0.000003,
  },
];

const defaultSegmentInputs: Record<SegmentKey, SegmentInputState> = {
  intraday: {
    buyPrice: "1000",
    sellPrice: "1100",
    quantity: "400",
    exchange: "NSE",
  },
  delivery: {
    buyPrice: "1000",
    sellPrice: "1100",
    quantity: "400",
    exchange: "NSE",
  },
  futures: {
    buyPrice: "1000",
    sellPrice: "1100",
    quantity: "400",
    exchange: "NSE",
  },
  options: {
    buyPrice: "100",
    sellPrice: "110",
    quantity: "400",
    exchange: "NSE",
  },
};

function round2(value: number) {
  return Math.round(value * 100) / 100;
}

function toNumber(value: string, fallback: number) {
  const parsed = Number(value);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : fallback;
}

function calculateSegment(
  config: SegmentConfig,
  buy: number,
  sell: number,
  quantity: number,
  exchange: ExchangeKey,
) {
  const buyValue = buy * quantity;
  const sellValue = sell * quantity;
  const turnover = buyValue + sellValue;

  const exchangeMultiplier = exchange === "BSE" ? 0.95 : 1;
  const exchangeTxn = turnover * config.exchangeRate * exchangeMultiplier;

  // ✅ FIXED BROKERAGE LOGIC
  let brokerage = 0;

  if (config.key === "options") {
    brokerage = 40; // 👈 Flat ₹40 for Options
  } 
  // 👉 Uncomment below if you ALSO want Futures = ₹40
  // else if (config.key === "futures") {
  //   brokerage = 40;
  // } 
  else {
    const rawBrokerage = turnover * config.brokerageRate;
    brokerage =
      config.brokerageCap > 0
        ? Math.min(config.brokerageCap, rawBrokerage)
        : 0;
  }

  const sttBase =
    config.sttOn === "buy"
      ? buyValue
      : config.sttOn === "sell"
      ? sellValue
      : turnover;

  const stt = sttBase * config.sttRate;
  const sebi = turnover * 0.000001;
  const stampDuty = buyValue * config.stampRate;
  const gst = 0.18 * (brokerage + exchangeTxn);

  const totalCharges =
    brokerage + stt + exchangeTxn + sebi + stampDuty + gst;

  const grossPnL = (sell - buy) * quantity;
  const netPnL = grossPnL - totalCharges;
  const breakeven = totalCharges / Math.max(quantity, 1);

  return {
    turnover: round2(turnover),
    brokerage: round2(brokerage),
    stt: round2(stt),
    exchangeTxn: round2(exchangeTxn),
    gst: round2(gst),
    sebi: round2(sebi),
    stampDuty: round2(stampDuty),
    totalCharges: round2(totalCharges),
    breakeven: round2(breakeven),
    netPnL: round2(netPnL),
  };
}

export default function CalculatorPage() {
  const [segmentInputs, setSegmentInputs] = useState<
    Record<SegmentKey, SegmentInputState>
  >(() => ({
    intraday: { ...defaultSegmentInputs.intraday },
    delivery: { ...defaultSegmentInputs.delivery },
    futures: { ...defaultSegmentInputs.futures },
    options: { ...defaultSegmentInputs.options },
  }));

  const cards = useMemo(
    () =>
      segmentConfig.map((segment) => ({
        ...segment,
        input: segmentInputs[segment.key],
        result: calculateSegment(
          segment,
          toNumber(
            segmentInputs[segment.key].buyPrice,
            Number(defaultSegmentInputs[segment.key].buyPrice),
          ),
          toNumber(
            segmentInputs[segment.key].sellPrice,
            Number(defaultSegmentInputs[segment.key].sellPrice),
          ),
          Math.max(
            1,
            Math.floor(
              toNumber(
                segmentInputs[segment.key].quantity,
                Number(defaultSegmentInputs[segment.key].quantity),
              ),
            ),
          ),
          segmentInputs[segment.key].exchange,
        ),
      })),
    [segmentInputs],
  );

  const updateSegmentInput = (
    key: SegmentKey,
    field: keyof SegmentInputState,
    value: string,
  ) => {
    setSegmentInputs((prev) => ({
      ...prev,
      [key]: {
        ...prev[key],
        [field]: value,
      },
    }));
  };

  return (
    <div className="min-h-screen bg-background selection:bg-primary/30 selection:text-white">
      <Navbar />

      <main className="pt-32 pb-24">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="text-sm font-bold tracking-widest uppercase text-primary mb-3">
              Calculator
            </p>
            <h1 className="text-4xl sm:text-5xl font-display font-bold text-foreground mb-4">
              Equities - F&amp;O
            </h1>
            <p className="text-muted-foreground text-lg">
              Estimate brokerage, statutory charges, and net P&amp;L instantly.
            </p>
          </div>

          <div className="rounded-2xl border border-border/60 bg-card/55 p-5 md:p-6 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                  Calculator Type
                </span>
                <div className="h-11 rounded-lg border border-border/60 bg-background px-3 text-sm text-foreground inline-flex items-center font-semibold">
                  Equities - F&amp;O
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {cards.map((card) => (
              <article
                key={card.key}
                className="rounded-2xl border border-border/60 bg-card/50 overflow-hidden"
              >
                <div className="px-4 py-3 border-b border-border/60 bg-background/50">
                  <h2 className="text-base font-semibold text-foreground">
                    {card.title}
                  </h2>
                </div>

                <div className="p-4 space-y-2 text-sm">
                  <div className="grid grid-cols-3 gap-2 pb-2">
                    <label className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Buy
                      </span>
                      <input
                        value={card.input.buyPrice}
                        onChange={(e) =>
                          updateSegmentInput(
                            card.key,
                            "buyPrice",
                            e.target.value,
                          )
                        }
                        inputMode="decimal"
                        className="h-9 rounded-md border border-border/60 bg-background px-2 text-sm text-foreground"
                      />
                    </label>

                    <label className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Sell
                      </span>
                      <input
                        value={card.input.sellPrice}
                        onChange={(e) =>
                          updateSegmentInput(
                            card.key,
                            "sellPrice",
                            e.target.value,
                          )
                        }
                        inputMode="decimal"
                        className="h-9 rounded-md border border-border/60 bg-background px-2 text-sm text-foreground"
                      />
                    </label>

                    <label className="flex flex-col gap-1">
                      <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                        Quantity
                      </span>
                      <input
                        value={card.input.quantity}
                        onChange={(e) =>
                          updateSegmentInput(
                            card.key,
                            "quantity",
                            e.target.value,
                          )
                        }
                        inputMode="numeric"
                        className="h-9 rounded-md border border-border/60 bg-background px-2 text-sm text-foreground"
                      />
                    </label>
                  </div>

                  <div className="flex items-center gap-5 pb-2 text-sm text-foreground border-b border-border/60 mb-2">
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name={`exchange-${card.key}`}
                        value="NSE"
                        checked={card.input.exchange === "NSE"}
                        onChange={() =>
                          updateSegmentInput(card.key, "exchange", "NSE")
                        }
                      />
                      NSE
                    </label>
                    <label className="inline-flex items-center gap-2">
                      <input
                        type="radio"
                        name={`exchange-${card.key}`}
                        value="BSE"
                        checked={card.input.exchange === "BSE"}
                        onChange={() =>
                          updateSegmentInput(card.key, "exchange", "BSE")
                        }
                      />
                      BSE
                    </label>
                  </div>

                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Turnover</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.turnover)}
                    </span>
                  </div>
                  <div className="pt-1 text-center text-xs font-medium text-muted-foreground/80 border-y border-border/60 my-2 py-1">
                    Brokerage charges
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Brokerage</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.brokerage)}
                    </span>
                  </div>
                  <div className="pt-1 text-center text-xs font-medium text-muted-foreground/80 border-y border-border/60 my-2 py-1">
                    Statutory charges
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>STT total</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.stt)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Exchange txn charge</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.exchangeTxn)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>GST</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.gst)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>SEBI charges</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.sebi)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-muted-foreground">
                    <span>Stamp duty</span>
                    <span className="text-foreground">
                      {formatCurrency(card.result.stampDuty)}
                    </span>
                  </div>

                  <div className="pt-2 mt-2 border-t border-border/60 space-y-2">
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Total charges</span>
                      <span className="text-foreground">
                        {formatCurrency(card.result.totalCharges)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-muted-foreground">
                      <span>Points to breakeven</span>
                      <span className="text-foreground">
                        {card.result.breakeven.toFixed(2)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-semibold">
                      <span className="text-foreground">Net P&amp;L</span>
                      <span
                        className={
                          card.result.netPnL >= 0
                            ? "text-emerald-400"
                            : "text-rose-400"
                        }
                      >
                        {formatCurrency(card.result.netPnL)}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollToTop />
    </div>
  );
}
