"use client";

import Link from "next/link";
import Logo from "@/components/Logo";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      const ids = navItems.map((item) => item.href.slice(1));
      let current = "";
      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= 140) current = id;
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-50 flex justify-center px-4 pt-5"
    >
      <nav
        className={`flex items-center gap-1 rounded-full border px-1.5 py-1.5 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "border-white/12 bg-slate-950/75 shadow-lg shadow-black/30"
            : "border-white/8 bg-white/4"
        }`}
      >
        <Link
          href="#hero"
          data-cursor="hover"
          className="mr-1 rounded-full px-2 py-1.5 sm:px-2.5 flex items-center justify-center"
          aria-label="Home"
        >
          <Logo />
        </Link>

        {navItems.map((item) => {
          const isActive = active === item.href.slice(1);
          return (
            <Link
              key={item.name}
              href={item.href}
              data-cursor="hover"
              className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all duration-200 sm:px-4 ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-white"
              }`}
            >
              {item.name}
            </Link>
          );
        })}
      </nav>
    </motion.header>
  );
};

export default Navbar;
