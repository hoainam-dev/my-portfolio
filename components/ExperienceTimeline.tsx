import React from "react";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import { Experience } from "@/types";
import { cn } from "@/lib/utils";

interface ExperienceTimelineProps {
  experiences: Experience[];
  isDarkMode: boolean;
  language: "vi" | "en";
}

export const ExperienceTimeline: React.FC<ExperienceTimelineProps> = ({
  experiences,
  isDarkMode,
  language,
}) => {
  return (
    <section id="experience" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div
            className={cn(
              "mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold",
              isDarkMode ? "text-blue-400" : "text-blue-600",
            )}
          >
            <Briefcase className="h-3.5 w-3.5 shrink-0" />
            <span>{language === "vi" ? "Hành Trình Sự Nghiệp" : "Professional Journey"}</span>
          </div>
          <h2
            className={cn(
              "text-3xl font-extrabold tracking-tight wrap-break-word sm:text-4xl",
              isDarkMode ? "text-white" : "text-slate-900",
            )}
          >
            {language === "vi" ? "Kinh Nghiệm & Học Vấn" : "Work Experience & Education"}
          </h2>
          <p className={cn("mt-3 text-base", isDarkMode ? "text-slate-400" : "text-slate-600")}>
            {language === "vi"
              ? "Lộ trình làm việc tại các công ty công nghệ và các dự án phát triển phần mềm."
              : "Chronological timeline of my professional roles, engineering milestones, and education."}
          </p>
        </div>

        {/* Vertical Timeline Container */}
        <div className="relative mx-auto max-w-4xl">
          {/* Vertical Center/Left Line */}
          <div
            className={cn(
              "absolute top-0 bottom-0 left-4 w-0.5 -translate-x-1/2 md:left-1/2",
              isDarkMode ? "bg-slate-800" : "bg-slate-200",
            )}
          />

          <div className="space-y-12">
            {experiences.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={cn(
                    "relative flex min-w-0 flex-col items-start md:flex-row",
                    isEven ? "md:flex-row-reverse" : "",
                  )}
                >
                  {/* Timeline Dot Node */}
                  <div
                    className={cn(
                      "absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 bg-blue-600 text-white shadow-md md:left-1/2",
                      isDarkMode ? "border-slate-900" : "border-white",
                    )}
                  >
                    <Briefcase className="h-3.5 w-3.5" />
                  </div>

                  {/* Experience Card Item — pl (not ml) so width stays within viewport on mobile */}
                  <div className="w-full min-w-0 pl-12 md:w-1/2 md:px-8 md:pl-8">
                    <div
                      className={cn(
                        "rounded-3xl border p-4 shadow-lg transition-all sm:p-6 md:hover:scale-[1.01]",
                        isDarkMode
                          ? "border-slate-700/60 bg-slate-800/50"
                          : "border-slate-200 bg-white",
                      )}
                    >
                      {/* Meta Badge Header */}
                      <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                        <span
                          className={cn(
                            "inline-flex max-w-full items-center gap-1 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold wrap-break-word",
                            isDarkMode ? "text-blue-400" : "text-blue-600",
                          )}
                        >
                          <Calendar className="h-3 w-3 shrink-0" />
                          {exp.period}
                        </span>

                        <span
                          className={cn(
                            "flex min-w-0 items-center gap-1 text-xs font-medium wrap-break-word",
                            isDarkMode ? "text-slate-400" : "text-slate-500",
                          )}
                        >
                          <MapPin className="h-3 w-3 shrink-0" />
                          {exp.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3
                        className={cn(
                          "text-lg font-bold wrap-break-word sm:text-xl",
                          isDarkMode ? "text-white" : "text-slate-900",
                        )}
                      >
                        {exp.role}
                      </h3>
                      <p className="mb-3 text-sm font-semibold wrap-break-word text-blue-500">
                        {exp.company}
                      </p>

                      <p
                        className={cn(
                          "mb-4 text-sm leading-relaxed wrap-break-word",
                          isDarkMode ? "text-slate-300" : "text-slate-600",
                        )}
                      >
                        {exp.description}
                      </p>

                      {/* Achievements List */}
                      {exp.achievements && exp.achievements.length > 0 && (
                        <div className="mb-4 space-y-2">
                          {exp.achievements.map((ach, aIdx) => (
                            <div key={aIdx} className="flex items-start gap-2 text-xs">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-500" />
                              <span
                                className={cn(
                                  "min-w-0 wrap-break-word",
                                  isDarkMode ? "text-slate-300" : "text-slate-700",
                                )}
                              >
                                {ach}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tech Badges */}
                      <div
                        className={cn(
                          "flex flex-wrap gap-1.5 border-t pt-2",
                          isDarkMode ? "border-slate-700/50" : "border-slate-200/50",
                        )}
                      >
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className={cn(
                              "rounded-md px-2.5 py-0.5 text-[11px] font-medium break-all",
                              isDarkMode
                                ? "bg-slate-700/60 text-slate-300"
                                : "bg-slate-100 text-slate-700",
                            )}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
