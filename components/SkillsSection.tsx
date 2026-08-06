import React from "react";
import {
  GitBranch,
  FileCode,
  Sparkles,
  Terminal,
  Database,
  Network,
  Palette,
  Server,
  Code2,
  Cloud,
  Cpu,
  Bot,
  Zap,
} from "lucide-react";
import { SkillCategory } from "@/types";
import { cn } from "@/lib/utils";

interface SkillsSectionProps {
  categories: SkillCategory[];
  isDarkMode: boolean;
  language: "vi" | "en";
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({
  categories,
  isDarkMode,
  language,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "FileCode":
        return FileCode;
      case "Palette":
        return Palette;
      case "Sparkles":
        return Sparkles;
      case "Server":
        return Server;
      case "Network":
        return Network;
      case "Database":
        return Database;
      case "Zap":
        return Zap;
      case "Bot":
        return Bot;
      case "Terminal":
        return Terminal;
      case "GitBranch":
        return GitBranch;
      case "Cloud":
        return Cloud;
      default:
        return Cpu;
    }
  };

  return (
    <section
      id="skills"
      className={cn(
        "border-t py-20",
        isDarkMode ? "border-slate-800/80 bg-slate-900/30" : "border-slate-200/80 bg-slate-50/50",
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div
            className={cn(
              "mb-3 inline-flex items-center gap-2 rounded-full bg-indigo-500/10 px-3.5 py-1.5 text-xs font-semibold",
              isDarkMode ? "text-indigo-400" : "text-indigo-600",
            )}
          >
            <Cpu className="h-3.5 w-3.5" />
            <span>{language === "vi" ? "Chuyên Môn & Công Nghệ" : "Technical Proficiency"}</span>
          </div>
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-tight sm:text-4xl",
              isDarkMode ? "text-white" : "text-slate-900",
            )}
          >
            {language === "vi" ? "Kỹ Năng Professional" : "Core Skills & Capabilities"}
          </h2>
          <p className={cn("mt-3 text-base", isDarkMode ? "text-slate-400" : "text-slate-600")}>
            {language === "vi"
              ? "Làm chủ các công nghệ lập trình hiện đại từ thiết kế UI/UX đến kiến trúc hệ thống Backend."
              : "Mastering modern full-stack development tools, backend architectures."}
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {categories.map((cat, catIdx) => (
            <div
              key={catIdx}
              className={cn(
                "rounded-3xl border p-6 shadow-lg transition-all hover:border-indigo-500/50",
                isDarkMode ? "border-slate-700/60 bg-slate-800/40" : "border-slate-200 bg-white",
              )}
            >
              <h3
                className={cn(
                  "mb-6 flex items-center gap-2 border-b pb-4 text-xl font-bold",
                  isDarkMode ? "border-slate-700/50" : "border-slate-200/50",
                )}
              >
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500" />
                {cat.title}
              </h3>

              <div className="space-y-6">
                {cat.skills.map((skill, skillIdx) => {
                  const Icon = getIcon(skill.iconName);
                  return (
                    <div key={skillIdx} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center gap-2.5 font-semibold">
                          <span
                            className={cn(
                              "rounded-lg p-1.5",
                              isDarkMode
                                ? "bg-slate-700/60 text-indigo-400"
                                : "bg-indigo-50 text-indigo-600",
                            )}
                          >
                            <Icon className="h-4 w-4" />
                          </span>
                          <span>{skill.name}</span>
                        </div>
                        <span className="font-mono text-xs font-bold text-indigo-500">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div
                        className={cn(
                          "h-2.5 w-full overflow-hidden rounded-full",
                          isDarkMode ? "bg-slate-700/50" : "bg-slate-100",
                        )}
                      >
                        <div
                          className="h-full rounded-full bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>

                      <p
                        className={cn("text-xs", isDarkMode ? "text-slate-400" : "text-slate-500")}
                      >
                        {skill.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Architecture Banner */}
        <div
          className={cn(
            "mt-12 rounded-3xl border bg-linear-to-r p-8",
            isDarkMode
              ? "border-slate-700/80 from-slate-800/80 via-slate-900 to-slate-800/80"
              : "border-blue-100 from-blue-50/80 via-indigo-50/50 to-slate-50",
          )}
        >
          <div className="space-y-2 text-center md:text-left">
            <h4 className={cn("text-lg font-bold", isDarkMode ? "text-white" : "text-slate-900")}>
              {language === "vi"
                ? "Tối ưu hóa hiệu năng & Tiêu chuẩn Mã nguồn Clean Code"
                : "High Performance & Clean Code Standard"}
            </h4>
            <p
              className={cn("max-w-2xl text-sm", isDarkMode ? "text-slate-300" : "text-slate-600")}
            >
              {language === "vi"
                ? "Mã nguồn được tổ chức theo kiến trúc Modular, đầy đủ Type Safety với TypeScript, tối ưu hóa SEO và Lighthouse Performance > 95+."
                : "Modular architecture, strict TypeScript types, 95+ Lighthouse Score, and clean scalable API structure."}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-bold text-emerald-500">
              Lighthouse 98%
            </span>
            <span className="rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-bold text-blue-500">
              TypeScript 100%
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
