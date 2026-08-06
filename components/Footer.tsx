import React from "react";
import { RefreshCw } from "lucide-react";
import { ProfileData } from "@/types";
import { cn } from "@/lib/utils";

interface FooterProps {
  profile: ProfileData;
  isDarkMode: boolean;
  language: "vi" | "en";
  onResetData: () => void;
  isOwner?: boolean;
}

export const Footer: React.FC<FooterProps> = ({
  profile,
  isDarkMode,
  language,
  onResetData,
  isOwner = false,
}) => {
  return (
    <footer
      className={cn(
        "border-t py-12",
        isDarkMode
          ? "border-slate-800/80 bg-slate-950 text-slate-400"
          : "border-slate-200/80 bg-slate-900 text-slate-300",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 border-b border-slate-800/80 pb-8 md:flex-row">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-base font-bold text-white">
              {profile.name.charAt(0)}
            </div>
            <div>
              <div className="text-base font-bold text-white">{profile.name}</div>
              <div className="text-xs text-blue-400">{profile.title}</div>
            </div>
          </div>

          {/* Center Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
            <a href="#hero" className="transition-colors hover:text-white">
              {language === "vi" ? "Trang chủ" : "Home"}
            </a>
            <a href="#projects" className="transition-colors hover:text-white">
              {language === "vi" ? "Dự án" : "Projects"}
            </a>
            <a href="#skills" className="transition-colors hover:text-white">
              {language === "vi" ? "Kỹ năng" : "Skills"}
            </a>
            <a href="#experience" className="transition-colors hover:text-white">
              {language === "vi" ? "Kinh nghiệm" : "Experience"}
            </a>
            <a href="#contact" className="transition-colors hover:text-white">
              {language === "vi" ? "Liên hệ" : "Contact"}
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          className={cn(
            "flex flex-col items-center gap-4 pt-8 text-xs sm:flex-row",
            isOwner ? "justify-between" : "justify-center",
          )}
        >
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>
              © {new Date().getFullYear()} {profile.name}. Designed & Built in 2026
            </span>
          </div>

          {isOwner ? (
            <button
              onClick={onResetData}
              className="flex items-center gap-1.5 rounded-lg bg-slate-800/80 px-3 py-1.5 text-[11px] text-slate-400 transition-all hover:bg-slate-700 hover:text-slate-200"
              title="Khôi phục dữ liệu mẫu ban đầu"
            >
              <RefreshCw className="h-3 w-3" />
              <span>{language === "vi" ? "Reset Dữ liệu Mặc định" : "Reset Sample Data"}</span>
            </button>
          ) : null}
        </div>
      </div>
    </footer>
  );
};
