import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Smartphone,
  FolderGit2,
  Sparkles,
  Search,
  Layout,
  Filter,
  Layers,
  Code2,
  Edit3,
  Plus,
  Star,
  Eye,
  Bot,
} from "lucide-react";
import { Project, ProjectCategory } from "@/types";
import { FaGithub } from "react-icons/fa6";
import { cn } from "@/lib/utils";

interface ProjectsSectionProps {
  projects: Project[];
  isDarkMode: boolean;
  language: "vi" | "en";
  onSelectProject: (project: Project) => void;
  onEditProject: (project: Project) => void;
  onAddProject: () => void;
  isOwner?: boolean;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  isDarkMode,
  language,
  onSelectProject,
  isOwner = false,
  onEditProject,
  onAddProject,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTech, setSelectedTech] = useState<string | null>(null);

  const categories = [
    { id: "all", name: language === "vi" ? "Tất cả" : "All Projects", icon: Layers },
    { id: "web", name: language === "vi" ? "Web App" : "Web Apps", icon: Code2 },
    { id: "ai", name: language === "vi" ? "AI & Machine Learning" : "AI & ML", icon: Bot },
    { id: "mobile", name: language === "vi" ? "Mobile App" : "Mobile", icon: Smartphone },
    { id: "uiux", name: language === "vi" ? "UI / UX Design" : "UI/UX", icon: Layout },
    { id: "opensource", name: language === "vi" ? "Mã Nguồn Mở" : "Open Source", icon: FolderGit2 },
  ];

  // Extract unique technologies across projects
  const allTechnologies = useMemo(() => {
    const techSet = new Set<string>();
    projects.forEach((p) => p.techStack.forEach((t) => techSet.add(t)));
    return Array.from(techSet);
  }, [projects]);

  // Filtered projects
  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = selectedCategory === "all" || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.techStack.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesTech = !selectedTech || p.techStack.includes(selectedTech);

      return matchesCategory && matchesSearch && matchesTech;
    });
  }, [projects, selectedCategory, searchQuery, selectedTech]);

  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div
              className={cn(
                "mb-3 inline-flex items-center gap-2 rounded-full bg-blue-500/10 px-3 py-1 text-xs font-semibold",
                isDarkMode ? "text-blue-400" : "text-blue-600",
              )}
            >
              <Code2 className="h-3.5 w-3.5" />
              <span>{language === "vi" ? "Sản Phẩm & Dự Án Cá Nhân" : "Portfolio Showcase"}</span>
            </div>
            <h2
              className={cn(
                "text-3xl font-extrabold tracking-tight sm:text-4xl",
                isDarkMode ? "text-white" : "text-slate-900",
              )}
            >
              {language === "vi" ? "Các Dự Án Tiêu Biểu" : "Featured Projects"}
            </h2>
            <p
              className={cn(
                "mt-2 max-w-2xl text-base",
                isDarkMode ? "text-slate-400" : "text-slate-600",
              )}
            >
              {language === "vi"
                ? "Tổng hợp các ứng dụng thực tế tôi đã thiết kế, phát triển và tối ưu hoá với công nghệ mới nhất."
                : "A curated list of real-world applications I designed, built, and deployed."}
            </p>
          </div>

          {/* Add Project Button — owner only */}
          {isOwner ? (
            <button
              id="btn-add-new-project"
              onClick={onAddProject}
              className="flex items-center gap-2 self-start rounded-2xl bg-linear-to-r from-blue-600 to-indigo-600 px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:scale-105 hover:from-blue-700 hover:to-indigo-700 md:self-auto"
            >
              <Plus className="h-4 w-4" />
              <span>{language === "vi" ? "Thêm dự án mới" : "Add New Project"}</span>
            </button>
          ) : null}
        </div>

        {/* Filter Bar & Search Controls */}
        <div className="mb-10 space-y-6">
          {/* Category Tabs */}
          <div className="flex scrollbar-none items-center gap-2 overflow-x-auto pb-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`cat-btn-${cat.id}`}
                  onClick={() => setSelectedCategory(cat.id as ProjectCategory)}
                  className={cn(
                    "flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold whitespace-nowrap transition-all sm:text-sm",
                    isActive
                      ? "bg-blue-600 text-white shadow-md"
                      : isDarkMode
                        ? "bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900",
                  )}
                >
                  <Icon className="h-4 w-4" />
                  <span>{cat.name}</span>
                </button>
              );
            })}
          </div>

          {/* Search Input & Tech Tag Filters */}
          <div className="flex flex-col items-stretch justify-between gap-4 sm:flex-row sm:items-center">
            {/* Search Input */}
            <div className="relative max-w-md flex-1">
              <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                id="search-projects-input"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={
                  language === "vi"
                    ? "Tìm theo tên dự án, từ khoá, công nghệ..."
                    : "Search project, tech, keyword..."
                }
                className={cn(
                  "w-full rounded-xl border py-2.5 pr-4 pl-10 text-sm transition-all outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white placeholder-slate-500 focus:border-blue-500"
                    : "border-slate-200 bg-white text-slate-900 placeholder-slate-400 focus:border-blue-500",
                )}
              />
            </div>

            {/* Selected Tech Filter Pills */}
            <div className="flex max-w-full items-center gap-2 overflow-x-auto py-1">
              <span
                className={cn(
                  "text-xs font-semibold whitespace-nowrap",
                  isDarkMode ? "text-slate-400" : "text-slate-500",
                )}
              >
                <Filter className="mr-1 inline h-3.5 w-3.5" />
                Tech:
              </span>
              {selectedTech && (
                <button
                  onClick={() => setSelectedTech(null)}
                  className="rounded-lg bg-red-500/10 px-2.5 py-1 text-xs font-semibold text-red-500 hover:bg-red-500/20"
                >
                  {selectedTech} ✕
                </button>
              )}
              {allTechnologies.slice(0, 6).map((tech) => (
                <button
                  key={tech}
                  onClick={() => setSelectedTech(selectedTech === tech ? null : tech)}
                  className={cn(
                    "rounded-lg px-2.5 py-1 text-xs font-medium whitespace-nowrap transition-all",
                    selectedTech === tech
                      ? "bg-blue-600 text-white"
                      : isDarkMode
                        ? "bg-slate-800/80 text-slate-300 hover:bg-slate-700"
                        : "bg-slate-200/70 text-slate-700 hover:bg-slate-300",
                  )}
                >
                  {tech}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Projects Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div
            className={cn(
              "rounded-3xl border py-16 text-center",
              isDarkMode
                ? "border-slate-800 bg-slate-800/30 text-slate-400"
                : "border-slate-200 bg-slate-50 text-slate-600",
            )}
          >
            <Search className="mx-auto mb-3 h-12 w-12 opacity-40" />
            <p className="text-lg font-semibold">
              {language === "vi" ? "Không tìm thấy dự án phù hợp" : "No projects found"}
            </p>
            <p className="mt-1 text-sm">
              {language === "vi"
                ? "Thử thay đổi từ khoá tìm kiếm hoặc danh mục filter"
                : "Try adjusting search term or category filter."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className={cn(
                  "group flex flex-col justify-between overflow-hidden rounded-3xl border transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl",
                  isDarkMode
                    ? "border-slate-700/60 bg-slate-800/50 hover:border-blue-500/50"
                    : "border-slate-200/80 bg-white hover:border-blue-400",
                )}
              >
                <div>
                  {/* Thumbnail Image Container */}
                  <div
                    className="relative aspect-video cursor-pointer overflow-hidden bg-slate-900"
                    onClick={() => onSelectProject(project)}
                  >
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      referrerPolicy="no-referrer"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center gap-3 bg-slate-900/40 opacity-0 transition-opacity group-hover:opacity-100">
                      <span className="rounded-full bg-white/90 p-3 text-slate-900 shadow-lg transition-transform hover:scale-110">
                        <Eye className="h-5 w-5" />
                      </span>
                    </div>

                    {/* Featured / Star Badge */}
                    <div className="absolute top-3 left-3 flex items-center gap-2">
                      {project.featured && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-amber-500 px-2.5 py-1 text-[10px] font-bold text-slate-950 shadow-sm">
                          <Star className="h-3 w-3 fill-slate-950" />
                          Featured
                        </span>
                      )}
                      {project.category === "ai" && (
                        <span className="inline-flex items-center gap-1 rounded-full bg-indigo-600 px-2.5 py-1 text-[10px] font-bold text-white shadow-sm">
                          <Sparkles className="h-3 w-3" />
                          AI Powered
                        </span>
                      )}
                    </div>

                    {/* Category Label */}
                    <div className="absolute right-3 bottom-3 rounded-lg bg-slate-900/80 px-2.5 py-1 text-[10px] font-semibold text-slate-200 backdrop-blur-md">
                      {project.category.toUpperCase()}
                    </div>
                  </div>

                  {/* Content Body */}
                  <div className="p-6">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className={cn(
                        "line-clamp-1 cursor-pointer text-xl font-bold transition-colors hover:text-blue-500",
                        isDarkMode ? "text-white" : "text-slate-900",
                      )}
                    >
                      {project.title}
                    </h3>

                    <p
                      className={cn(
                        "mt-1 mb-3 line-clamp-1 text-xs font-semibold",
                        isDarkMode ? "text-blue-400" : "text-blue-600",
                      )}
                    >
                      {project.tagline}
                    </p>

                    <p
                      className={cn(
                        "mb-4 line-clamp-2 text-sm leading-relaxed",
                        isDarkMode ? "text-slate-300" : "text-slate-600",
                      )}
                    >
                      {project.description}
                    </p>

                    {/* Tech Stack Pills */}
                    <div className="mb-4 flex flex-wrap gap-1.5">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className={cn(
                            "rounded-md px-2.5 py-0.5 text-[11px] font-medium",
                            isDarkMode
                              ? "border border-slate-600/40 bg-slate-700/60 text-slate-300"
                              : "border border-slate-200 bg-slate-100 text-slate-700",
                          )}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action Links */}
                <div
                  className={cn(
                    "flex items-center justify-between border-t px-6 py-4 text-xs font-semibold",
                    isDarkMode
                      ? "border-slate-700/50 bg-slate-800/30"
                      : "border-slate-100 bg-slate-50/50",
                  )}
                >
                  <button
                    onClick={() => onSelectProject(project)}
                    className="flex items-center gap-1.5 text-blue-500 transition-colors hover:text-blue-600"
                  >
                    <Eye className="h-3.5 w-3.5" />
                    <span>{language === "vi" ? "Xem chi tiết" : "Details"}</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "rounded-lg p-1.5 transition-colors hover:text-blue-500",
                          isDarkMode ? "text-slate-400" : "text-slate-600",
                        )}
                        title="View Source Code"
                      >
                        <FaGithub className="h-4 w-4" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "rounded-lg p-1.5 transition-colors hover:text-blue-500",
                          isDarkMode ? "text-slate-400" : "text-slate-600",
                        )}
                        title="Live Demo"
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    {isOwner ? (
                      <button
                        onClick={() => onEditProject(project)}
                        className={cn(
                          "rounded-lg p-1.5 transition-colors hover:text-indigo-500",
                          isDarkMode ? "text-slate-400" : "text-slate-600",
                        )}
                        title={language === "vi" ? "Chỉnh sửa dự án" : "Edit Project"}
                      >
                        <Edit3 className="h-4 w-4" />
                      </button>
                    ) : null}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
