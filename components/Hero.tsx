"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px]" />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="z-10 max-w-4xl space-y-6"
      >
        <span className="inline-block px-3 py-1 text-sm font-medium text-cyan-400 bg-cyan-900/10 border border-cyan-800/50 rounded-full mb-4">
          Available for work
        </span>
        
        <h1 className="text-6xl md:text-8xl font-bold tracking-tight font-outfit text-white">
          Building <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-cyan-400 to-emerald-400 animate-gradient">
            Digital Experiences
          </span>
        </h1>
        
        <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Mình là <strong className="text-slate-200">Nguyen Van A</strong>, một Frontend Developer tập trung vào việc tạo ra các giao diện web mượt mà, tối ưu hiệu năng và trải nghiệm người dùng tuyệt vời.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 justify-center mt-8"
        >
          <Link 
            href="#projects" 
            className="group relative px-8 py-3 bg-white text-slate-900 rounded-full font-semibold transition-all hover:scale-105 active:scale-95"
          >
            View Projects
            <span className="absolute inset-0 rounded-full ring-2 ring-white/50 group-hover:ring-4 transition-all"></span>
          </Link>
          <Link 
            href="#contact" 
            className="px-8 py-3 bg-slate-800/50 hover:bg-slate-800 text-white border border-white/10 rounded-full font-medium transition-all hover:scale-105"
          >
            Contact Me
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
