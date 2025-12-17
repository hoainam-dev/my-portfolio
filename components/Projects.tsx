"use client";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "SaaS Dashboard Pro",
    description: "Hệ thống quản lý dữ liệu doanh nghiệp với Next.js 14, tích hợp biểu đồ Recharts và chế độ Dark Mode tự động.",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "#",
    demo: "#",
    gradient: "from-blue-600 to-indigo-600"
  },
  {
    title: "Travel Booking App",
    description: "Nền tảng đặt vé du lịch với trải nghiệm đặt phòng mượt mà, tích hợp thanh toán Stripe và bản đồ tương tác.",
    tags: ["React", "Redux", "Framer Motion", "Mapbox"],
    github: "#",
    demo: "#",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    title: "AI Chat Interface",
    description: "Giao diện chat AI hiện đại, hỗ trợ stream response, markdown rendering và lưu lịch sử chat local.",
    tags: ["Next.js", "OpenAI API", "Zustand", "Radix UI"],
    github: "#",
    demo: "#",
    gradient: "from-orange-500 to-pink-500"
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-32 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-outfit text-white mb-4">Featured Projects</h2>
          <p className="text-slate-400">Một số dự án tiêu biểu mình đã thực hiện</p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative bg-slate-900/50 border border-white/5 rounded-2xl overflow-hidden hover:border-indigo-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-indigo-500/10"
            >
              {/* Fake Thumbnail */}
              <div className={`h-48 w-full bg-linear-to-br ${project.gradient} relative overflow-hidden group-hover:scale-105 transition-transform duration-500`}>
                 <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white font-outfit group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                    <div className="flex gap-3">
                        <a href={project.github} className="text-slate-400 hover:text-white transition-colors" title="View Code"><FaGithub size={20}/></a>
                        <a href={project.demo} className="text-slate-400 hover:text-white transition-colors" title="Live Demo"><FaExternalLinkAlt size={18}/></a>
                    </div>
                </div>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/10 rounded-full border border-indigo-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
