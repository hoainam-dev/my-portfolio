"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative flex min-h-svh flex-col items-center justify-center overflow-hidden py-28 text-center">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 mx-auto max-w-4xl space-y-8"
      >
        <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/4 px-4 py-1.5 backdrop-blur-md">
          <span className="availability-dot" />
          <span className="text-sm font-medium text-teal-200/90">
            Available for opportunities
          </span>
        </div>

        <div className="space-y-5">
          <p className="font-display text-sm font-medium tracking-[0.2em] text-slate-400 uppercase">
            Huynh Hoai Nam · Fullstack Developer
          </p>

          <h1 className="font-display text-5xl leading-[1.05] font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
            End-to-end
            <br />
            <span className="gradient-text">products that scale</span>
          </h1>

          <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-slate-400 md:text-lg">
            I build fullstack products — from UI React/Next.js to API Spring
            Boot &amp; Go, data MySQL and AWS infrastructure.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-3 pt-2"
        >
          <Link
            href="#projects"
            data-cursor="hover"
            className="magnetic-button rounded-full bg-white px-7 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(45,212,191,0.15)]"
          >
            View projects
          </Link>
          <Link
            href="#contact"
            data-cursor="hover"
            className="magnetic-button rounded-full border border-white/12 bg-white/3 px-7 py-3 text-sm font-medium text-slate-200 backdrop-blur-sm hover:border-teal-400/30 hover:bg-white/6"
          >
            Contact
          </Link>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
      >
        <span className="text-[10px] tracking-[0.2em] text-slate-500 uppercase">
          Scroll
        </span>
        <span className="h-8 w-px bg-linear-to-b from-teal-400/60 to-transparent" />
      </motion.div>
    </div>
  );
};

export default Hero;
