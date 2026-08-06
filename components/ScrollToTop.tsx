"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  isDarkMode: boolean;
  language: "vi" | "en";
}

export function ScrollToTop({ isDarkMode, language }: ScrollToTopProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label={language === "vi" ? "Cuộn lên đầu trang" : "Scroll to top"}
      title={language === "vi" ? "Cuộn lên đầu trang" : "Scroll to top"}
      className={cn(
        "fixed right-5 bottom-5 z-40 flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-all duration-300 sm:right-6 sm:bottom-6",
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-3 opacity-0",
        isDarkMode
          ? "border-slate-700 bg-slate-800 text-slate-100 hover:bg-slate-700"
          : "border-slate-200 bg-white text-slate-800 hover:bg-slate-50",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
