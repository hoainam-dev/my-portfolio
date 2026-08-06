export type ProjectCategory = "all" | "web" | "ai" | "mobile" | "uiux" | "opensource";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  fullDescription: string;
  category: ProjectCategory;
  imageUrl: string;
  gallery: string[];
  techStack: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  highlights: string[];
  role: string;
  duration: string;
  starsCount?: number;
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    iconName: string;
    description: string;
  }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export interface ProfileData {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  avatarUrl: string;
  email: string;
  phone: string;
  location: string;
  availableForWork: boolean;
  stats: {
    completedProjects: number;
    yearsExperience: number;
    satisfiedClients: number;
    codeCommits: number;
  };
  socials: {
    github: string;
    linkedin: string;
    twitter: string;
    zalo: string;
    facebook: string;
  };
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}
