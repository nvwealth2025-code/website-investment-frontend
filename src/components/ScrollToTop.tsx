"use client";

import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollToTop() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={scrollToTop}
      className={cn(
        "fixed bottom-6 right-6 z-50 h-11 w-11 rounded-full border border-primary/35 bg-primary text-primary-foreground shadow-lg shadow-primary/25 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:brightness-110 dark:border-primary/30 dark:bg-black/60 dark:text-primary dark:shadow-black/30 dark:hover:bg-primary dark:hover:text-primary-foreground",
        showScrollTop
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <ChevronUp className="mx-auto h-5 w-5" />
    </button>
  );
}
