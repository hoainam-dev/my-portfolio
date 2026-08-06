"use client";

import { useState, useEffect, useSyncExternalStore } from "react";
import { ProjectEditorModal } from "@/components/ProjectEditorModal";
import { ExperienceTimeline } from "@/components/ExperienceTimeline";
import { ProfileEditorModal } from "@/components/ProfileEditorModal";
import { AiAssistantModal } from "@/components/AiAssistantModal";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectModal } from "@/components/ProjectModal";
import { PrefsBootLoader } from "@/components/PrefsBootLoader";
import { CustomCursor } from "@/components/CustomCursor";
import { ScrollToTop } from "@/components/ScrollToTop";
import { useOwnerMode } from "@/hooks/useOwnerMode";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";

import type { PortfolioLang } from "@/data/defaultData";
import {
  getInitialProjects,
  getSkillCategories,
  getInitialProfile,
  getExperiences,
} from "@/data/defaultData";
import { ProfileData, Project } from "@/types";
import { cn } from "@/lib/utils";

const profileStorageKey = (lang: PortfolioLang) => `portfolio_profile_${lang}`;
const projectsStorageKey = (lang: PortfolioLang) => `portfolio_projects_${lang}`;

function readStoredProfile(lang: PortfolioLang): ProfileData {
  if (typeof window === "undefined") return getInitialProfile(lang);

  const saved = localStorage.getItem(profileStorageKey(lang));
  if (saved) {
    try {
      return JSON.parse(saved) as ProfileData;
    } catch (e) {
      console.error(e);
    }
  }

  // Migrate legacy single-key storage into Vietnamese locale once
  if (lang === "vi") {
    const legacy = localStorage.getItem("portfolio_profile");
    if (legacy) {
      try {
        return JSON.parse(legacy) as ProfileData;
      } catch (e) {
        console.error(e);
      }
    }
  }

  return getInitialProfile(lang);
}

function readStoredProjects(lang: PortfolioLang): Project[] {
  if (typeof window === "undefined") return getInitialProjects(lang);

  const saved = localStorage.getItem(projectsStorageKey(lang));
  if (saved) {
    try {
      return JSON.parse(saved) as Project[];
    } catch (e) {
      console.error(e);
    }
  }

  if (lang === "vi") {
    const legacy = localStorage.getItem("portfolio_projects");
    if (legacy) {
      try {
        return JSON.parse(legacy) as Project[];
      } catch (e) {
        console.error(e);
      }
    }
  }

  return getInitialProjects(lang);
}

const emptySubscribe = () => () => {};

export default function App() {
  // false on server + first client paint; true after hydration
  const hasHydrated = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  // Keep SSR + first client render identical to avoid hydration mismatches.
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [language, setLanguage] = useState<PortfolioLang>("vi");
  const [profile, setProfile] = useState<ProfileData>(() => getInitialProfile("vi"));
  const [projects, setProjects] = useState<Project[]>(() => getInitialProjects("vi"));
  const [didRestorePrefs, setDidRestorePrefs] = useState(false);

  // Restore localStorage prefs once, during render after hydration (React-approved pattern)
  if (hasHydrated && !didRestorePrefs) {
    const savedLang = localStorage.getItem("portfolio_lang");
    const lang: PortfolioLang = savedLang === "en" ? "en" : "vi";
    const savedTheme = localStorage.getItem("portfolio_theme");
    const dark = savedTheme ? savedTheme === "dark" : true;

    document.documentElement.classList.toggle("dark", dark);
    setDidRestorePrefs(true);
    setLanguage(lang);
    setIsDarkMode(dark);
    setProfile(readStoredProfile(lang));
    setProjects(readStoredProjects(lang));
  }

  const isBooting = !didRestorePrefs;

  // Locale-static content
  const skillCategories = getSkillCategories(language);
  const experiences = getExperiences(language);

  // Modals state
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [isProjectEditorOpen, setIsProjectEditorOpen] = useState(false);
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);

  const { isOwner } = useOwnerMode();

  // Sync dark mode HTML class
  useEffect(() => {
    if (!didRestorePrefs) return;
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("portfolio_theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("portfolio_theme", "light");
    }
  }, [isDarkMode, didRestorePrefs]);

  // Sync language preference
  useEffect(() => {
    if (!didRestorePrefs) return;
    localStorage.setItem("portfolio_lang", language);
  }, [language, didRestorePrefs]);

  // Sync profile to locale-specific storage
  useEffect(() => {
    if (!didRestorePrefs) return;
    localStorage.setItem(profileStorageKey(language), JSON.stringify(profile));
  }, [profile, language, didRestorePrefs]);

  // Sync projects to locale-specific storage
  useEffect(() => {
    if (!didRestorePrefs) return;
    localStorage.setItem(projectsStorageKey(language), JSON.stringify(projects));
  }, [projects, language, didRestorePrefs]);

  // Handlers
  const handleToggleDarkMode = () => {
    setIsDarkMode((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      return next;
    });
  };

  const handleToggleLanguage = () => {
    const next: PortfolioLang = language === "vi" ? "en" : "vi";
    // Persist current locale edits before switching
    localStorage.setItem(profileStorageKey(language), JSON.stringify(profile));
    localStorage.setItem(projectsStorageKey(language), JSON.stringify(projects));
    setProfile(readStoredProfile(next));
    setProjects(readStoredProjects(next));
    setSelectedProject(null);
    setEditingProject(null);
    setIsProjectEditorOpen(false);
    setIsProfileEditorOpen(false);
    setLanguage(next);
  };

  const handleSaveProject = (savedProject: Project) => {
    setProjects((prev) => {
      const exists = prev.some((p) => p.id === savedProject.id);
      if (exists) {
        return prev.map((p) => (p.id === savedProject.id ? savedProject : p));
      } else {
        return [savedProject, ...prev];
      }
    });
  };

  const handleDeleteProject = (projectId: string) => {
    setProjects((prev) => prev.filter((p) => p.id !== projectId));
  };

  const handleResetData = () => {
    const defaultProfile = getInitialProfile(language);
    const defaultProjects = getInitialProjects(language);
    setProfile(defaultProfile);
    setProjects(defaultProjects);
    localStorage.setItem(profileStorageKey(language), JSON.stringify(defaultProfile));
    localStorage.setItem(projectsStorageKey(language), JSON.stringify(defaultProjects));
  };

  if (isBooting) {
    return <PrefsBootLoader />;
  }

  return (
    <div
      className={cn(
        "min-h-screen font-sans transition-colors duration-300",
        isDarkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900",
      )}
    >
      <CustomCursor />

      {/* Navbar Header */}
      <Header
        profile={profile}
        isDarkMode={isDarkMode}
        toggleDarkMode={handleToggleDarkMode}
        language={language}
        toggleLanguage={handleToggleLanguage}
        onOpenAiAssistant={() => setIsAiModalOpen(true)}
        onOpenProfileEditor={() => setIsProfileEditorOpen(true)}
        isOwner={isOwner}
      />

      {/* Main Sections */}
      <main>
        <Hero
          profile={profile}
          isDarkMode={isDarkMode}
          language={language}
          onOpenAiAssistant={() => setIsAiModalOpen(true)}
        />

        <ProjectsSection
          projects={projects}
          isDarkMode={isDarkMode}
          language={language}
          isOwner={isOwner}
          onSelectProject={(proj) => setSelectedProject(proj)}
          onEditProject={(proj) => {
            setEditingProject(proj);
            setIsProjectEditorOpen(true);
          }}
          onAddProject={() => {
            setEditingProject(null);
            setIsProjectEditorOpen(true);
          }}
        />

        <SkillsSection categories={skillCategories} isDarkMode={isDarkMode} language={language} />

        <ExperienceTimeline experiences={experiences} isDarkMode={isDarkMode} language={language} />

        <ContactSection profile={profile} isDarkMode={isDarkMode} language={language} />
      </main>

      {/* Footer */}
      <Footer
        profile={profile}
        isDarkMode={isDarkMode}
        language={language}
        onResetData={handleResetData}
        isOwner={isOwner}
      />

      <ScrollToTop isDarkMode={isDarkMode} language={language} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isDarkMode={isDarkMode}
        language={language}
        onClose={() => setSelectedProject(null)}
      />

      <ProjectEditorModal
        project={editingProject}
        isOpen={isProjectEditorOpen}
        isDarkMode={isDarkMode}
        language={language}
        onClose={() => {
          setIsProjectEditorOpen(false);
          setEditingProject(null);
        }}
        onSave={handleSaveProject}
        onDelete={handleDeleteProject}
      />

      <AiAssistantModal
        isOpen={isAiModalOpen}
        isDarkMode={isDarkMode}
        language={language}
        profile={profile}
        projects={projects}
        onClose={() => setIsAiModalOpen(false)}
      />

      <ProfileEditorModal
        profile={profile}
        isOpen={isProfileEditorOpen}
        isDarkMode={isDarkMode}
        language={language}
        onClose={() => setIsProfileEditorOpen(false)}
        onSave={(newProfile) => setProfile(newProfile)}
      />
    </div>
  );
}
