import React, { useState } from "react";
import { Project, ProjectCategory } from "@/types";
import { X, Save, Trash2, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProjectEditorModalProps {
  project: Project | null;
  isOpen: boolean;
  isDarkMode: boolean;
  language: "vi" | "en";
  onClose: () => void;
  onSave: (project: Project) => void;
  onDelete?: (id: string) => void;
}

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800";

export const ProjectEditorModal: React.FC<ProjectEditorModalProps> = ({ isOpen, ...props }) => {
  if (!isOpen) return null;
  return <ProjectEditorForm key={props.project?.id ?? "new"} {...props} />;
};

const ProjectEditorForm: React.FC<Omit<ProjectEditorModalProps, "isOpen">> = ({
  project,
  isDarkMode,
  language,
  onClose,
  onSave,
  onDelete,
}) => {
  const [title, setTitle] = useState(project?.title ?? "");
  const [tagline, setTagline] = useState(project?.tagline ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [fullDescription, setFullDescription] = useState(project?.fullDescription ?? "");
  const [category, setCategory] = useState<ProjectCategory>(project?.category ?? "web");
  const [imageUrl, setImageUrl] = useState(project ? project.imageUrl || "" : DEFAULT_IMAGE);
  const [techStackInput, setTechStackInput] = useState(
    project ? project.techStack?.join(", ") || "" : "React, TypeScript, Tailwind CSS",
  );
  const [highlightsInput, setHighlightsInput] = useState(
    project
      ? project.highlights?.join("\n") || ""
      : "Xây dựng giao diện responsive\nTối ưu hiệu năng ứng dụng",
  );
  const [role, setRole] = useState(project?.role || "Full-Stack Developer");
  const [duration, setDuration] = useState(project?.duration || "2025");
  const [demoUrl, setDemoUrl] = useState(project ? project.demoUrl || "" : "https://example.com");
  const [githubUrl, setGithubUrl] = useState(
    project ? project.githubUrl || "" : "https://github.com",
  );
  const [featured, setFeatured] = useState(!!project?.featured);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const techStack = techStackInput
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);

    const highlights = highlightsInput
      .split("\n")
      .map((h) => h.trim())
      .filter(Boolean);

    const updatedProject: Project = {
      id: project ? project.id : `proj-${Date.now()}`,
      title,
      tagline,
      description,
      fullDescription: fullDescription || description,
      category,
      imageUrl: imageUrl || DEFAULT_IMAGE,
      gallery: [imageUrl || DEFAULT_IMAGE],
      techStack: techStack.length > 0 ? techStack : ["React", "TypeScript"],
      featured,
      demoUrl,
      githubUrl,
      highlights: highlights.length > 0 ? highlights : ["Tối ưu giao diện người dùng"],
      role,
      duration,
      starsCount: project ? project.starsCount : 50,
    };

    onSave(updatedProject);
    onClose();
  };

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md sm:p-6">
      <div
        className={cn(
          "relative my-auto w-full max-w-2xl overflow-hidden rounded-3xl border shadow-2xl",
          isDarkMode
            ? "border-slate-800 bg-slate-900 text-white"
            : "border-slate-200 bg-white text-slate-900",
        )}
      >
        {/* Header */}
        <div
          className={cn(
            "flex items-center justify-between border-b px-6 py-4",
            isDarkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-100 bg-slate-50",
          )}
        >
          <div className="flex items-center gap-2.5">
            <Code2 className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">
              {project
                ? language === "vi"
                  ? "Chỉnh sửa Dự án"
                  : "Edit Project"
                : language === "vi"
                  ? "Thêm Dự án Mới"
                  : "Add New Project"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className={cn(
              "rounded-xl p-2",
              isDarkMode
                ? "text-slate-400 hover:bg-slate-800"
                : "text-slate-600 hover:bg-slate-200",
            )}
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="max-h-[75vh] space-y-4 overflow-y-auto p-6 text-sm"
        >
          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Tên dự án *" : "Project Title *"}
            </label>
            <input
              type="text"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="VD: AI TaskFlow - Trợ lý công việc"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Slogan ngắn (Tagline)" : "Tagline"}
            </label>
            <input
              type="text"
              value={tagline}
              onChange={(e) => setTagline(e.target.value)}
              placeholder="VD: Hệ thống lập kế hoạch tự động tích hợp AI"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "Danh mục" : "Category"}
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as ProjectCategory)}
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              >
                <option value="web">Web App</option>
                <option value="ai">AI & Machine Learning</option>
                <option value="mobile">Mobile App</option>
                <option value="uiux">UI/UX Design</option>
                <option value="opensource">Open Source</option>
              </select>
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "Nổi bật (Featured)?" : "Featured Project?"}
              </label>
              <div className="flex items-center gap-3 pt-2">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500"
                />
                <label htmlFor="featured-check" className="cursor-pointer text-xs font-medium">
                  {language === "vi" ? "Gắn nhãn Featured trên đầu trang" : "Show as Featured card"}
                </label>
              </div>
            </div>
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "URL Ảnh Bìa (Image URL)" : "Cover Image URL"}
            </label>
            <input
              type="url"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              placeholder="https://images.unsplash.com/photo-..."
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Mô tả tóm tắt" : "Short Description"}
            </label>
            <textarea
              rows={2}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Mô tả 2-3 câu ngắn gọn về tính năng sản phẩm..."
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Mô tả chi tiết" : "Full Detailed Description"}
            </label>
            <textarea
              rows={3}
              value={fullDescription}
              onChange={(e) => setFullDescription(e.target.value)}
              placeholder="Mô tả đầy đủ bài toán, giải pháp và kiến trúc ứng dụng..."
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi"
                ? "Công nghệ (Phân cách bằng dấu phẩy)"
                : "Tech Stack (comma separated)"}
            </label>
            <input
              type="text"
              value={techStackInput}
              onChange={(e) => setTechStackInput(e.target.value)}
              placeholder="React, TypeScript, Express, Tailwind CSS, Gemini AI"
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Điểm nổi bật (Mỗi dòng 1 ý)" : "Highlights (One per line)"}
            </label>
            <textarea
              rows={3}
              value={highlightsInput}
              onChange={(e) => setHighlightsInput(e.target.value)}
              placeholder={
                "Xử lý 1,000+ người dùng cùng lúc\nTối ưu tốc độ tải trang dưới 1 giây\nTích hợp AI trợ lý thông minh"
              }
              className={cn(
                "w-full rounded-xl border px-4 py-2.5 outline-none",
                isDarkMode
                  ? "border-slate-700 bg-slate-800 text-white"
                  : "border-slate-200 bg-white text-slate-900",
              )}
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "Demo URL (Website trực tuyến)" : "Live Demo URL"}
              </label>
              <input
                type="url"
                value={demoUrl}
                onChange={(e) => setDemoUrl(e.target.value)}
                placeholder="https://my-app.com"
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "GitHub URL (Mã nguồn)" : "GitHub Repo URL"}
              </label>
              <input
                type="url"
                value={githubUrl}
                onChange={(e) => setGithubUrl(e.target.value)}
                placeholder="https://github.com/user/repo"
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "Vai trò của bạn" : "Your Role"}
              </label>
              <input
                type="text"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Lead Full-Stack Developer"
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">
                {language === "vi" ? "Thời gian thực hiện" : "Duration"}
              </label>
              <input
                type="text"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                placeholder="3 tháng (2025)"
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>
          </div>

          {/* Action Buttons */}
          <div
            className={cn(
              "flex items-center justify-between border-t pt-4",
              isDarkMode ? "border-slate-800/50" : "border-slate-200/50",
            )}
          >
            {project && onDelete ? (
              <button
                type="button"
                onClick={() => {
                  if (
                    confirm(
                      language === "vi"
                        ? "Bạn có chắc chắn muốn xóa dự án này?"
                        : "Are you sure you want to delete this project?",
                    )
                  ) {
                    onDelete(project.id);
                    onClose();
                  }
                }}
                className="flex items-center gap-1.5 rounded-xl bg-red-500/10 px-4 py-2.5 text-xs font-semibold text-red-500 hover:bg-red-500/20"
              >
                <Trash2 className="h-4 w-4" />
                <span>{language === "vi" ? "Xóa dự án" : "Delete"}</span>
              </button>
            ) : (
              <div />
            )}

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "rounded-xl border px-5 py-2.5 font-semibold",
                  isDarkMode
                    ? "border-slate-700 text-slate-300"
                    : "border-slate-200 text-slate-700",
                )}
              >
                {language === "vi" ? "Hủy" : "Cancel"}
              </button>

              <button
                type="submit"
                className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md hover:bg-blue-700"
              >
                <Save className="h-4 w-4" />
                <span>{language === "vi" ? "Lưu thay đổi" : "Save Project"}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
