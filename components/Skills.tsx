"use client";

import {
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaFigma,
  FaReact,
  FaJava,
  FaAws,
  FaJs,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiTypescript,
  SiSpringboot,
  SiNextdotjs,
  SiVercel,
  SiMysql,
  SiGo,
} from "react-icons/si";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "Figma", icon: FaFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "Backend & Cloud",
    skills: [
      { name: "Java", icon: FaJava, color: "#ED8B00" },
      { name: "Spring Boot", icon: SiSpringboot, color: "#6DB33F" },
      { name: "Golang", icon: SiGo, color: "#00ADD8" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "AWS", icon: FaAws, color: "#FF9900" },
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "Vercel", icon: SiVercel, color: "#ffffff" },
    ],
  },
];

const Skills = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-14 space-y-4 text-center"
      >
        <span className="section-label justify-center">Tech Stack</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Tools I ship with
        </h2>
        <p className="mx-auto max-w-xl text-slate-400">
          Fullstack stack — UI modern, API stable, data and cloud ready to
          scale. scale.
        </p>
      </motion.div>

      <div className="space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <p className="mb-4 text-xs font-semibold tracking-[0.16em] text-slate-500 uppercase">
              {group.title}
            </p>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 md:gap-4">
              {group.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04, duration: 0.4 }}
                  data-cursor="hover"
                  className="glass-card group flex flex-col items-center justify-center gap-3 rounded-2xl px-4 py-6"
                  style={
                    {
                      "--skill-color": skill.color,
                    } as React.CSSProperties
                  }
                >
                  <skill.icon className="text-3xl text-slate-500 transition-colors duration-300 group-hover:text-(--skill-color) md:text-4xl" />
                  <span className="text-sm font-medium text-slate-400 transition-colors group-hover:text-white">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
