import Image from "next/image";
import React from "react";
import { ArrowRight, Sparkles, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { ProfileData } from "@/types";
import { cn } from "@/lib/utils";

interface HeroProps {
  profile: ProfileData;
  isDarkMode: boolean;
  language: "vi" | "en";
  onOpenAiAssistant: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, isDarkMode, language, onOpenAiAssistant }) => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  //   const handleDownloadCv = () => {
  //     // Generate a simple clean plain text/HTML CV or trigger direct download notification
  //     const content = `
  // ====================================================
  // CURRICULUM VITAE - ${profile.name}
  // ${profile.title}
  // Email: ${profile.email} | Location: ${profile.location}
  // ====================================================

  // GIỚI THIỆU / BIO:
  // ${profile.bio}

  // THÔNG TỐ BỔ SUNG / STATS:
  // - Dự án hoàn thành: ${profile.stats.completedProjects}+
  // - Số năm kinh nghiệm: ${profile.stats.yearsExperience}+ năm
  // - Khách hàng / Đơn vị hợp tác: ${profile.stats.satisfiedClients}+

  // ====================================================
  // Generated from Portfolio Showcase
  // ====================================================
  //     `;
  //     const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  //     const url = URL.createObjectURL(blob);
  //     const a = document.createElement("a");
  //     a.href = url;
  //     a.download = `CV_${profile.name.replace(/\s+/g, "_")}.txt`;
  //     a.click();
  //     URL.revokeObjectURL(url);
  //   };

  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute top-1/4 left-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 right-10 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Main Hero Text Column */}
          <div className="space-y-8 lg:col-span-7">
            {/* Status Pill */}
            <div
              className={cn(
                "inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-xs font-semibold",
                isDarkMode ? "text-emerald-400" : "text-emerald-600",
              )}
            >
              <span className="h-2 w-2 animate-ping rounded-full bg-emerald-500" />
              <span>
                {profile.availableForWork
                  ? language === "vi"
                    ? "Sẵn sàng nhận dự án mới & Cơ hội việc làm"
                    : "Available for new projects & opportunities"
                  : language === "vi"
                    ? "Đang bận dự án chính"
                    : "Currently working on key projects"}
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1
                className={cn(
                  "text-4xl leading-tight font-extrabold tracking-tight sm:text-5xl lg:text-6xl",
                  isDarkMode ? "text-white" : "text-slate-900",
                )}
              >
                {language === "vi" ? "Xin chào, tôi là" : "Hi, I'm"}{" "}
                <span className="bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  {profile.name}
                </span>
              </h1>
              <p
                className={cn(
                  "text-xl font-semibold sm:text-2xl",
                  isDarkMode ? "text-blue-400" : "text-blue-600",
                )}
              >
                {profile.title}
              </p>
            </div>

            {/* Bio */}
            <p
              className={cn(
                "max-w-2xl text-base leading-relaxed sm:text-lg",
                isDarkMode ? "text-slate-300" : "text-slate-600",
              )}
            >
              {profile.bio}
            </p>
            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-hero-projects"
                onClick={() => scrollTo("projects")}
                className={cn(
                  "flex items-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:scale-105 hover:bg-blue-700",
                )}
              >
                <span>{language === "vi" ? "Xem các Dự Án" : "Explore Projects"}</span>
                <ArrowRight className="h-4 w-4" />
              </button>

              <button
                id="btn-hero-ask-ai"
                onClick={onOpenAiAssistant}
                className={cn(
                  "flex items-center gap-2 rounded-2xl border px-6 py-3.5 font-semibold transition-all hover:scale-105",
                  isDarkMode
                    ? "border-indigo-500/30 bg-slate-800 text-indigo-300 hover:bg-slate-700"
                    : "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
                )}
              >
                <Sparkles className="h-4 w-4 text-indigo-500" />
                <span>{language === "vi" ? "Hỏi AI về Nam" : "Ask AI About Me"}</span>
              </button>

              {/* <button
                id="btn-download-cv"
                onClick={handleDownloadCv}
                className={cn("flex items-center gap-2 rounded-2xl border px-5 py-3.5 font-semibold transition-all", isDarkMode ? "border-slate-700 bg-slate-800/80 text-slate-200 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100")}
              >
                <Download className="h-4 w-4" />
                <span>{language === "vi" ? "Tải Sơ yếu lý lịch (CV)" : "Download CV"}</span>
              </button> */}
            </div>

            {/* Social Links */}
            <div
              className={cn(
                "flex items-center gap-4 border-t pt-4",
                isDarkMode ? "border-slate-800/50" : "border-slate-200/50",
              )}
            >
              <span
                className={cn(
                  "text-xs font-semibold tracking-wider uppercase",
                  isDarkMode ? "text-slate-400" : "text-slate-500",
                )}
              >
                {language === "vi" ? "Kết nối qua:" : "Connect via:"}
              </span>
              <div className="flex items-center gap-3">
                {profile.socials.github && (
                  <a
                    href={profile.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-xl border p-2.5 transition-all",
                      isDarkMode
                        ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
                    )}
                  >
                    <FaGithub className="h-4 w-4" aria-hidden />
                  </a>
                )}
                {profile.socials.linkedin && (
                  <a
                    href={profile.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "rounded-xl border p-2.5 transition-all",
                      isDarkMode
                        ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
                    )}
                  >
                    <FaLinkedin className="h-4 w-4" aria-hidden />
                  </a>
                )}
                <a
                  href={`mailto:${profile.email}`}
                  className={cn(
                    "rounded-xl border p-2.5 transition-all",
                    isDarkMode
                      ? "border-slate-700 bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                      : "border-slate-200 bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900",
                  )}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Avatar Column & Code Card */}
          <div className="flex flex-col items-center justify-center lg:col-span-5">
            <div className="relative w-full max-w-md">
              {/* Decorative Frame */}
              <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600 to-indigo-600 opacity-30 blur transition duration-1000 group-hover:opacity-100" />

              <div
                className={cn(
                  "relative rounded-3xl border p-6 shadow-2xl",
                  isDarkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white",
                )}
              >
                {/* Profile Avatar Image */}
                <div className="relative mb-6 aspect-square overflow-hidden rounded-2xl bg-slate-800">
                  <Image
                    src={profile.avatarUrl}
                    alt={profile.name}
                    fill
                    sizes="(max-width: 1024px) 90vw, 448px"
                    referrerPolicy="no-referrer"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                    priority
                  />
                </div>

                {/* Quick Info Box */}
                <div className="space-y-3 text-xs">
                  <div
                    className={cn(
                      "flex items-center justify-between border-b py-1",
                      isDarkMode ? "border-slate-800" : "border-slate-100",
                    )}
                  >
                    <span className={cn(isDarkMode ? "text-slate-400" : "text-slate-500")}>
                      {language === "vi" ? "Địa chỉ" : "Location"}:
                    </span>
                    <span
                      className={cn(
                        "font-semibold",
                        isDarkMode ? "text-slate-200" : "text-slate-800",
                      )}
                    >
                      {profile.location}
                    </span>
                  </div>
                  <div
                    className={cn(
                      "flex items-center justify-between border-b py-1",
                      isDarkMode ? "border-slate-800" : "border-slate-100",
                    )}
                  >
                    <span className={cn(isDarkMode ? "text-slate-400" : "text-slate-500")}>
                      {language === "vi" ? "Vị trí" : "Position"}:
                    </span>
                    <span
                      className={cn(
                        "font-semibold",
                        isDarkMode ? "text-blue-400" : "text-blue-600",
                      )}
                    >
                      Full stack developer
                    </span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className={cn(isDarkMode ? "text-slate-400" : "text-slate-500")}>
                      {language === "vi" ? "Email trực tiếp" : "Email"}:
                    </span>
                    <span
                      className={cn(
                        "font-semibold",
                        isDarkMode ? "text-slate-200" : "text-slate-800",
                      )}
                    >
                      {profile.email}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid Footer */}
        <div
          className={cn(
            "mt-16 grid grid-cols-2 gap-4 border-t pt-12 md:grid-cols-4",
            isDarkMode ? "border-slate-800/80" : "border-slate-200/80",
          )}
        >
          <div
            className={cn(
              "rounded-2xl border p-5",
              isDarkMode ? "border-slate-800 bg-slate-800/40" : "border-slate-200/80 bg-slate-50",
            )}
          >
            <div
              className={cn(
                "mb-1 text-3xl font-extrabold",
                isDarkMode ? "text-blue-400" : "text-blue-600",
              )}
            >
              {profile.stats.completedProjects}+
            </div>
            <div
              className={cn(
                "text-xs font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600",
              )}
            >
              {language === "vi" ? "Dự án đã hoàn thành" : "Projects Completed"}
            </div>
          </div>

          <div
            className={cn(
              "rounded-2xl border p-5",
              isDarkMode ? "border-slate-800 bg-slate-800/40" : "border-slate-200/80 bg-slate-50",
            )}
          >
            <div
              className={cn(
                "mb-1 text-3xl font-extrabold",
                isDarkMode ? "text-indigo-400" : "text-indigo-600",
              )}
            >
              {profile.stats.yearsExperience}+
            </div>
            <div
              className={cn(
                "text-xs font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600",
              )}
            >
              {language === "vi" ? "Năm kinh nghiệm" : "Years Experience"}
            </div>
          </div>

          <div
            className={cn(
              "rounded-2xl border p-5",
              isDarkMode ? "border-slate-800 bg-slate-800/40" : "border-slate-200/80 bg-slate-50",
            )}
          >
            <div
              className={cn(
                "mb-1 text-3xl font-extrabold",
                isDarkMode ? "text-emerald-400" : "text-emerald-600",
              )}
            >
              {profile.stats.satisfiedClients}+
            </div>
            <div
              className={cn(
                "text-xs font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600",
              )}
            >
              {language === "vi" ? "Đối tác & Khách hàng" : "Clients & Partners"}
            </div>
          </div>

          <div
            className={cn(
              "rounded-2xl border p-5",
              isDarkMode ? "border-slate-800 bg-slate-800/40" : "border-slate-200/80 bg-slate-50",
            )}
          >
            <div
              className={cn(
                "mb-1 text-3xl font-extrabold",
                isDarkMode ? "text-purple-400" : "text-purple-600",
              )}
            >
              {profile.stats.codeCommits}+
            </div>
            <div
              className={cn(
                "text-xs font-medium",
                isDarkMode ? "text-slate-400" : "text-slate-600",
              )}
            >
              {language === "vi" ? "Commits trên Git" : "Git Commits"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
