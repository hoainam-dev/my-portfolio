import React, { useState, useEffect } from "react";
import {
  Briefcase,
  Sparkles,
  Sliders,
  Code2,
  Globe,
  User,
  Mail,
  Menu,
  Moon,
  Cpu,
  Sun,
  X,
} from "lucide-react";
import { ProfileData } from "@/types";
import { Logo } from "@/components/Logo";
import { cn } from "@/lib/utils";

interface HeaderProps {
  profile: ProfileData;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  language: "vi" | "en";
  toggleLanguage: () => void;
  onOpenAiAssistant: () => void;
  onOpenProfileEditor: () => void;
  isOwner?: boolean;
}

export const Header: React.FC<HeaderProps> = ({
  profile,
  isDarkMode,
  toggleDarkMode,
  language,
  toggleLanguage,
  onOpenAiAssistant,
  onOpenProfileEditor,
  isOwner = false,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "projects", "skills", "experience", "contact"];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { id: "hero", label: language === "vi" ? "Về tôi" : "About", icon: User },
    { id: "projects", label: language === "vi" ? "Dự án" : "Projects", icon: Briefcase },
    { id: "skills", label: language === "vi" ? "Kỹ năng" : "Skills", icon: Cpu },
    { id: "experience", label: language === "vi" ? "Kinh nghiệm" : "Experience", icon: Code2 },
    { id: "contact", label: language === "vi" ? "Liên hệ" : "Contact", icon: Mail },
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-header"
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isDarkMode
          ? "border-b border-slate-800 bg-slate-900/90 shadow-lg backdrop-blur-md"
          : "border-b border-slate-200 bg-white/90 shadow-sm backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <div
          onClick={() => scrollTo("hero")}
          className="group flex cursor-pointer items-center gap-3"
        >
          <Logo
            className="h-10 w-10"
            showWordmark={false}
            size="md"
            variant={isDarkMode ? "dark" : "light"}
          />
          <div>
            <div
              className={cn(
                "hidden text-lg font-bold tracking-tight xl:block",
                isDarkMode ? "text-white" : "text-slate-900",
              )}
            >
              {profile.name}
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav
          className={cn(
            "hidden items-center gap-1 rounded-full border p-1.5 lg:flex",
            isDarkMode
              ? "border-slate-700/50 bg-slate-800/80"
              : "border-slate-200 bg-white/90 shadow-sm",
          )}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            const isActive = activeSection === link.id;
            return (
              <button
                key={link.id}
                id={`nav-item-${link.id}`}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all",
                  isActive
                    ? isDarkMode
                      ? "bg-slate-900 text-blue-400 shadow-sm"
                      : "bg-blue-50 text-blue-600 shadow-sm"
                    : isDarkMode
                      ? "text-slate-400 hover:bg-slate-700/50 hover:text-slate-200"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900",
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          {/* AI Assistant Button */}
          <button
            id="btn-open-ai-assistant"
            onClick={onOpenAiAssistant}
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 px-3.5 py-2 text-xs font-semibold text-white shadow-md transition-all hover:scale-105 hover:shadow-indigo-500/25 sm:text-sm"
            title={
              language === "vi"
                ? "Hỏi Trợ lý AI về kinh nghiệm & dự án"
                : "Ask AI Assistant about experience"
            }
          >
            <Sparkles className="animate-spin-slow h-4 w-4" />
            <span className="hidden sm:inline">{language === "vi" ? "Hỏi AI" : "Ask AI"}</span>
          </button>

          {/* Profile Data Editor Button */}
          {isOwner ? (
            <button
              id="btn-edit-profile"
              onClick={onOpenProfileEditor}
              className={cn(
                "rounded-xl border p-2.5 transition-all",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                  : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900",
              )}
              title={language === "vi" ? "Chỉnh sửa thông tin cá nhân" : "Edit profile info"}
            >
              <Sliders className="h-4 w-4" />
            </button>
          ) : null}

          {/* Language Toggle */}
          <button
            id="btn-toggle-language"
            onClick={toggleLanguage}
            className={cn(
              "flex items-center gap-1.5 rounded-xl border px-3 py-2 text-xs font-semibold transition-all",
              isDarkMode
                ? "border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
                : "border-slate-200 bg-slate-100 text-slate-700 hover:text-slate-900",
            )}
          >
            <Globe className="h-3.5 w-3.5 text-blue-500" />
            <span>{language.toUpperCase()}</span>
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            id="btn-toggle-theme"
            onClick={toggleDarkMode}
            className={cn(
              "rounded-xl border p-2.5 transition-all",
              isDarkMode
                ? "border-slate-700 bg-slate-800 text-amber-400 hover:bg-slate-700"
                : "border-slate-200 bg-slate-100 text-slate-700 hover:bg-slate-200",
            )}
            title={isDarkMode ? "Chuyển sang Chế độ Sáng" : "Chuyển sang Chế độ Tối"}
          >
            {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* Mobile Menu Button */}
          <button
            id="btn-mobile-menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={cn(
              "rounded-xl border p-2.5 transition-all lg:hidden",
              isDarkMode
                ? "border-slate-700 bg-slate-800 text-slate-200"
                : "border-slate-200 bg-slate-100 text-slate-700",
            )}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div
          className={cn(
            "space-y-2 border-b px-4 py-4 md:hidden",
            isDarkMode
              ? "border-slate-800 bg-slate-900 text-white"
              : "border-slate-200 bg-white text-slate-900",
          )}
        >
          {navLinks.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all",
                  activeSection === link.id
                    ? "bg-blue-600 text-white"
                    : isDarkMode
                      ? "text-slate-300 hover:bg-slate-800"
                      : "text-slate-700 hover:bg-slate-100",
                )}
              >
                <Icon className="h-4 w-4" />
                {link.label}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
