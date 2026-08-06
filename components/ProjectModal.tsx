import React, { useState } from "react";
import Image from "next/image";
import {
  ExternalLink,
  CheckCircle2,
  UserCheck,
  Calendar,
  Sparkles,
  Monitor,
  Code2,
  X,
} from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

interface ProjectModalProps {
  project: Project | null;
  isDarkMode: boolean;
  language: "vi" | "en";
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, ...props }) => {
  if (!project) return null;
  return <ProjectModalContent key={project.id} project={project} {...props} />;
};

const ProjectModalContent: React.FC<ProjectModalProps & { project: Project }> = ({
  project,
  isDarkMode,
  language,
  onClose,
}) => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [showIframeSandbox, setShowIframeSandbox] = useState(false);

  const images =
    project.gallery && project.gallery.length > 0 ? project.gallery : [project.imageUrl];

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md sm:p-6 lg:p-8">
      <div
        className={cn(
          "relative my-auto w-full max-w-4xl overflow-hidden rounded-3xl border shadow-2xl",
          isDarkMode
            ? "border-slate-800 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-900",
        )}
      >
        {/* Header Bar */}
        <div
          className={cn(
            "flex items-center justify-between border-b px-6 py-4",
            isDarkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50",
          )}
        >
          <div className="flex items-center gap-3">
            <span className="rounded-xl bg-blue-600/10 p-2 text-blue-500">
              <Code2 className="h-5 w-5" />
            </span>
            <div>
              <h2 className="line-clamp-1 text-xl font-bold">{project.title}</h2>
              <p className="text-xs font-semibold text-blue-500">{project.tagline}</p>
            </div>
          </div>

          <button
            id="btn-close-project-modal"
            onClick={onClose}
            className={cn(
              "rounded-xl p-2 transition-all",
              isDarkMode
                ? "text-slate-400 hover:bg-slate-800"
                : "text-slate-600 hover:bg-slate-200",
            )}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Modal Body Scroll Container */}
        <div className="max-h-[80vh] space-y-8 overflow-y-auto p-6">
          {/* Main Visual Image / Sandbox Preview Switch */}
          <div>
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="font-bold text-blue-500 uppercase">{project.category}</span>
                <span>•</span>
                <span className="text-slate-500">{project.duration}</span>
              </div>

              {/* Sandbox Toggle */}
              <button
                onClick={() => setShowIframeSandbox(!showIframeSandbox)}
                className={cn(
                  "flex items-center gap-1.5 rounded-xl bg-blue-600/10 px-3 py-1.5 text-xs font-semibold transition-all hover:bg-blue-600 hover:text-white",
                  isDarkMode ? "text-blue-400" : "text-blue-600",
                )}
              >
                <Monitor className="h-3.5 w-3.5" />
                <span>
                  {showIframeSandbox
                    ? language === "vi"
                      ? "Xem Thư viện Ảnh"
                      : "View Gallery"
                    : language === "vi"
                      ? "Xem Demo Trực Tiếp"
                      : "Interactive Preview"}
                </span>
              </button>
            </div>

            {/* Display Box */}
            {showIframeSandbox ? (
              <div className="relative flex aspect-video flex-col items-center justify-center overflow-hidden rounded-2xl border border-slate-700 bg-slate-950 p-6 text-center">
                <p className="mb-2 text-sm font-semibold text-slate-300">
                  {language === "vi"
                    ? "Bản xem trước trực tiếp của dự án"
                    : "Live Interactive Demo Sandbox"}
                </p>
                <p className="mb-4 max-w-md text-xs text-slate-400">
                  {language === "vi"
                    ? "Bạn có thể truy cập liên kết chính thức hoặc chạy môi trường thử nghiệm."
                    : "You can explore the live URL directly."}
                </p>
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:bg-blue-700"
                  >
                    <span>{language === "vi" ? "Mở Demo ở Tab mới" : "Open Demo in New Tab"}</span>
                    <ExternalLink className="h-4 w-4" />
                  </a>
                ) : (
                  <span className="font-mono text-xs text-amber-400">Demo link coming soon</span>
                )}
              </div>
            ) : (
              <div>
                <div className="relative aspect-video overflow-hidden rounded-2xl border border-slate-800 bg-slate-900">
                  <Image
                    src={images[activeImageIndex]}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 896px"
                    referrerPolicy="no-referrer"
                    className="object-cover"
                    priority
                  />
                </div>

                {/* Thumbnails */}
                {images.length > 1 && (
                  <div className="mt-3 flex items-center gap-3 overflow-x-auto pb-1">
                    {images.map((img, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setActiveImageIndex(idx)}
                        className={cn(
                          "relative aspect-video w-20 overflow-hidden rounded-lg border-2 transition-all",
                          activeImageIndex === idx
                            ? "scale-105 border-blue-500"
                            : "border-transparent opacity-60 hover:opacity-100",
                        )}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} thumbnail ${idx + 1}`}
                          fill
                          sizes="80px"
                          referrerPolicy="no-referrer"
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Quick Meta Grid */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 rounded-2xl border p-4 text-xs sm:grid-cols-3",
              isDarkMode ? "border-slate-800 bg-slate-800/40" : "border-slate-200 bg-slate-50",
            )}
          >
            <div>
              <span className="mb-1 block text-slate-500">
                {language === "vi" ? "Vai trò:" : "Role:"}
              </span>
              <span className="flex items-center gap-1 font-semibold text-blue-500">
                <UserCheck className="h-3.5 w-3.5" />
                {project.role}
              </span>
            </div>
            <div>
              <span className="mb-1 block text-slate-500">
                {language === "vi" ? "Thời gian:" : "Duration:"}
              </span>
              <span className="flex items-center gap-1 font-semibold">
                <Calendar className="h-3.5 w-3.5 text-indigo-500" />
                {project.duration}
              </span>
            </div>
            <div>
              <span className="mb-1 block text-slate-500">
                {language === "vi" ? "Đánh giá / Stars:" : "Stars:"}
              </span>
              <span className="flex items-center gap-1 font-semibold text-amber-500">
                ★ {project.starsCount || 100}+ Stars
              </span>
            </div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="mb-2 text-lg font-bold">
              {language === "vi" ? "Mô tả chi tiết dự án" : "Project Overview"}
            </h3>
            <p
              className={cn(
                "text-sm leading-relaxed",
                isDarkMode ? "text-slate-300" : "text-slate-600",
              )}
            >
              {project.fullDescription || project.description}
            </p>
          </div>

          {/* Key Highlights Checklist */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="mb-3 flex items-center gap-2 text-lg font-bold">
                <Sparkles className="h-5 w-5 text-amber-500" />
                <span>
                  {language === "vi" ? "Điểm nổi bật & Kết quả" : "Key Highlights & Achievements"}
                </span>
              </h3>
              <div className="space-y-2.5">
                {project.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <span className={isDarkMode ? "text-slate-200" : "text-slate-700"}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack List */}
          <div>
            <h3 className="mb-3 text-sm font-bold tracking-wider text-slate-500 uppercase">
              {language === "vi" ? "Công nghệ sử dụng" : "Technologies Used"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className={cn(
                    "rounded-xl border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-semibold",
                    isDarkMode ? "text-blue-400" : "text-blue-600",
                  )}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Links */}
        <div
          className={cn(
            "flex flex-wrap items-center justify-between gap-4 border-t p-6",
            isDarkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50",
          )}
        >
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold transition-all",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100",
                )}
              >
                <FaGithub className="h-4 w-4" />
                <span>GitHub Source</span>
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition-all hover:bg-blue-700"
              >
                <ExternalLink className="h-4 w-4" />
                <span>{language === "vi" ? "Mở Website Demo" : "Visit Live Site"}</span>
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className={cn(
              "rounded-xl border px-5 py-2.5 text-xs font-semibold",
              isDarkMode
                ? "border-slate-700 text-slate-300 hover:bg-slate-800"
                : "border-slate-200 text-slate-700 hover:bg-slate-100",
            )}
          >
            {language === "vi" ? "Đóng" : "Close"}
          </button>
        </div>
      </div>
    </div>
  );
};
