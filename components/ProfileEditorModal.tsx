import React, { useState } from "react";
import { X, Save, Sliders } from "lucide-react";
import { ProfileData } from "@/types";
import { cn } from "@/lib/utils";

interface ProfileEditorModalProps {
  profile: ProfileData;
  isOpen: boolean;
  isDarkMode: boolean;
  language: "vi" | "en";
  onClose: () => void;
  onSave: (newProfile: ProfileData) => void;
}

export const ProfileEditorModal: React.FC<ProfileEditorModalProps> = ({ isOpen, ...props }) => {
  if (!isOpen) return null;
  return <ProfileEditorForm {...props} />;
};

const ProfileEditorForm: React.FC<Omit<ProfileEditorModalProps, "isOpen">> = ({
  profile,
  isDarkMode,
  language,
  onClose,
  onSave,
}) => {
  const [name, setName] = useState(profile.name);
  const [title, setTitle] = useState(profile.title);
  const [tagline] = useState(profile.tagline);
  const [bio, setBio] = useState(profile.bio);
  const [avatarUrl, setAvatarUrl] = useState(profile.avatarUrl);
  const [email, setEmail] = useState(profile.email);
  const [phone, setPhone] = useState(profile.phone);
  const [location, setLocation] = useState(profile.location);
  const [github, setGithub] = useState(profile.socials.github);
  const [linkedin, setLinkedin] = useState(profile.socials.linkedin);
  const [completedProjects, setCompletedProjects] = useState(profile.stats.completedProjects);
  const [yearsExperience, setYearsExperience] = useState(profile.stats.yearsExperience);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updated: ProfileData = {
      ...profile,
      name,
      title,
      tagline,
      bio,
      avatarUrl,
      email,
      phone,
      location,
      stats: {
        ...profile.stats,
        completedProjects: Number(completedProjects),
        yearsExperience: Number(yearsExperience),
      },
      socials: {
        ...profile.socials,
        github,
        linkedin,
      },
    };

    onSave(updated);
    onClose();
  };

  return (
    <div className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-slate-950/80 p-4 backdrop-blur-md sm:p-6">
      <div
        className={cn(
          "relative my-auto w-full max-w-xl overflow-hidden rounded-3xl border shadow-2xl",
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
            <Sliders className="h-5 w-5 text-blue-500" />
            <h2 className="text-lg font-bold">
              {language === "vi" ? "Tùy chỉnh Thông tin Portfolio" : "Customize Portfolio Profile"}
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
              {language === "vi" ? "Họ và Tên *" : "Full Name *"}
            </label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              {language === "vi" ? "Chức danh nghề nghiệp" : "Professional Title"}
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Junior Full-Stack Developer"
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
              {language === "vi" ? "URL Ảnh Đại Diện (Avatar)" : "Avatar Image URL"}
            </label>
            <input
              type="url"
              value={avatarUrl}
              onChange={(e) => setAvatarUrl(e.target.value)}
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
              {language === "vi" ? "Giới thiệu bản thân (Bio)" : "Bio Summary"}
            </label>
            <textarea
              rows={3}
              value={bio}
              onChange={(e) => setBio(e.target.value)}
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
              <label className="mb-1 block font-semibold">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                {language === "vi" ? "Số điện thoại" : "Phone"}
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block font-semibold">
              {language === "vi" ? "Địa điểm" : "Location"}
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
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
                {language === "vi" ? "Số dự án hoàn thành" : "Completed Projects"}
              </label>
              <input
                type="number"
                value={completedProjects}
                onChange={(e) => setCompletedProjects(Number(e.target.value))}
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
                {language === "vi" ? "Số năm kinh nghiệm" : "Years Experience"}
              </label>
              <input
                type="number"
                value={yearsExperience}
                onChange={(e) => setYearsExperience(Number(e.target.value))}
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
              <label className="mb-1 block font-semibold">GitHub Link</label>
              <input
                type="url"
                value={github}
                onChange={(e) => setGithub(e.target.value)}
                className={cn(
                  "w-full rounded-xl border px-4 py-2.5 outline-none",
                  isDarkMode
                    ? "border-slate-700 bg-slate-800 text-white"
                    : "border-slate-200 bg-white text-slate-900",
                )}
              />
            </div>

            <div>
              <label className="mb-1 block font-semibold">LinkedIn Link</label>
              <input
                type="url"
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
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
              "flex items-center justify-end gap-3 border-t pt-4",
              isDarkMode ? "border-slate-800/50" : "border-slate-200/50",
            )}
          >
            <button
              type="button"
              onClick={onClose}
              className={cn(
                "rounded-xl border px-5 py-2.5 font-semibold",
                isDarkMode ? "border-slate-700 text-slate-300" : "border-slate-200 text-slate-700",
              )}
            >
              {language === "vi" ? "Hủy" : "Cancel"}
            </button>

            <button
              type="submit"
              className="flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 font-semibold text-white shadow-md hover:bg-blue-700"
            >
              <Save className="h-4 w-4" />
              <span>{language === "vi" ? "Lưu thông tin" : "Save Profile"}</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
