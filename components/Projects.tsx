"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const projects = [
  {
    title: "SaaS Dashboard Pro",
    description:
      "A business data management system with Next.js, realtime charts, and automatic dark mode following system.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "#",
    demo: "#",
    accent: "from-cyan-500/80 to-teal-600/80",
    year: "2025",
  },
  {
    title: "Travel Booking App",
    description:
      "A travel booking platform with smooth booking flow, Stripe payments, and interactive map.",
    tags: ["React", "Redux", "Framer Motion", "Mapbox"],
    github: "#",
    demo: "#",
    accent: "from-emerald-500/80 to-teal-700/80",
    year: "2025",
  },
  {
    title: "AI Chat Interface",
    description:
      "A modern AI chat interface — streaming response, markdown rendering, and local history.",
    tags: ["Next.js", "OpenAI", "Zustand", "Radix UI"],
    github: "#",
    demo: "#",
    accent: "from-sky-500/80 to-cyan-700/80",
    year: "2024",
  },
];

const Projects = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 space-y-4"
      >
        <span className="section-label">Projects</span>
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
            Selected work
          </h2>
          <p className="max-w-sm text-slate-400">
            A few representative projects
          </p>
        </div>
      </motion.div>

      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.08, duration: 0.5 }}
            data-cursor="hover"
            className="glass-card group flex flex-col overflow-hidden rounded-2xl"
          >
            <div
              className={`relative h-44 overflow-hidden bg-linear-to-br ${project.accent}`}
            >
              <div
                className="absolute inset-0 opacity-40"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0a1018] via-transparent to-transparent opacity-80" />
              <div className="absolute right-4 bottom-4 left-4 flex items-center justify-between">
                <span className="text-xs font-medium tracking-wider text-white/70">
                  {project.year}
                </span>
                <FaArrowRight className="text-white/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:text-white" />
              </div>
            </div>

            <div className="flex flex-1 flex-col p-5 md:p-6">
              <div className="mb-3 flex items-start justify-between gap-3">
                <h3 className="font-display text-xl font-bold text-white transition-colors group-hover:text-teal-200">
                  {project.title}
                </h3>
                <div className="flex shrink-0 gap-2.5 pt-1">
                  <a
                    href={project.github}
                    data-cursor="hover"
                    className="text-slate-500 transition-colors hover:text-white"
                    title="View Code"
                    aria-label={`${project.title} GitHub`}
                  >
                    <FaGithub size={18} />
                  </a>
                  <a
                    href={project.demo}
                    data-cursor="hover"
                    className="text-slate-500 transition-colors hover:text-white"
                    title="Live Demo"
                    aria-label={`${project.title} demo`}
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>
                </div>
              </div>

              <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-400">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-teal-400/15 bg-teal-400/5 px-2.5 py-1 text-[11px] font-medium text-teal-200/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  );
};

export default Projects;
