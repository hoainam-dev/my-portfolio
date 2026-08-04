"use client";

import { motion } from "framer-motion";
import Logo from "@/components/Logo";

const highlights = [
  { label: "Focus", value: "Fullstack Engineering" },
  { label: "Frontend", value: "React · Next.js · TS" },
  { label: "Backend", value: "Java · Spring · Go" },
  { label: "Data & Cloud", value: "MySQL · AWS" },
];

const About = () => {
  return (
    <div className="relative">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 space-y-4"
      >
        <span className="section-label">About</span>
        <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-5xl">
          Building systems with
          <span className="gradient-text"> clarity</span>
        </h2>
      </motion.div>

      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-5 text-base leading-relaxed text-slate-400 md:text-lg"
        >
          <p>
            Hello — I&apos;m{" "}
            <strong className="font-medium text-slate-200">
              Huynh Hoai Nam
            </strong>
            , Fullstack Developer. The frontend is built with{" "}
            <strong className="font-medium text-teal-300/90">
              React &amp; Next.js
            </strong>
            ; the backend is built with{" "}
            <strong className="font-medium text-teal-300/90">
              Java Spring Boot
            </strong>
            , <strong className="font-medium text-teal-300/90">Golang</strong>,{" "}
            <strong className="font-medium text-teal-300/90">MySQL</strong> and{" "}
            <strong className="font-medium text-teal-300/90">AWS</strong>.
          </p>
          <p>
            I prefer products that are clean from API to UI — I care about
            performance, clean structure, and user experience. Besides coding, I
            also study UI on Figma to bridge the gap between design and
            implementation.
          </p>

          <div className="glass-card mt-6 rounded-2xl p-5 md:p-6">
            <p className="mb-2 text-xs font-semibold tracking-[0.16em] text-teal-300/80 uppercase">
              Career north star
            </p>
            <p className="text-sm leading-relaxed text-slate-300 md:text-base">
              Become a strong Fullstack Engineer at both tiers — contributing to
              large-scale products, stable APIs, and a crisp frontend
              experience.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.18 }}
          className="space-y-4"
        >
          <div className="glass-card group relative flex aspect-4/5 items-end overflow-hidden rounded-2xl p-6 md:aspect-square">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(45,212,191,0.18),transparent_50%),radial-gradient(ellipse_at_80%_70%,rgba(56,189,248,0.12),transparent_45%),linear-gradient(160deg,#0c1520,#0a1018)]" />
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "28px 28px",
              }}
            />
            <div className="absolute top-6 left-6">
              <Logo size="md" />
            </div>
            <div className="relative z-10 space-y-1">
              <p className="font-display text-2xl font-bold text-white">
                Huynh Hoai Nam
              </p>
              <p className="text-sm text-slate-400">Fullstack Developer</p>
            </div>
          </div>

          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                key={item.label}
                className="glass-card flex items-center justify-between gap-4 rounded-xl px-4 py-3"
              >
                <span className="text-xs tracking-wider text-slate-500 uppercase">
                  {item.label}
                </span>
                <span className="text-sm font-medium text-slate-200">
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
