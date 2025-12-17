"use client";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiMongodb, SiVercel } from "react-icons/si";
import { motion } from "framer-motion";

const skillData = [
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
  { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "Figma", icon: FaFigma, color: "#F24E1E" },
  { name: "Vercel", icon: SiVercel, color: "#ffffff" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold font-outfit text-white mb-4">My Tech Stack</h2>
          <p className="text-slate-400 text-lg">Những công nghệ mình sử dụng để xây dựng sản phẩm</p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skillData.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, borderColor: skill.color }}
              className="flex flex-col items-center justify-center p-6 bg-slate-900/50 border border-slate-800 rounded-xl transition-all duration-300 group cursor-default"
            >
              <skill.icon 
                className="text-4xl text-slate-500 group-hover:text-(--skill-color) transition-colors duration-300 mb-3" 
                style={{ "--skill-color": skill.color } as React.CSSProperties}
              />
              <span className="text-slate-300 font-medium group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
