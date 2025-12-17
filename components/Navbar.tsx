"use client";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm sm:max-w-md"
    >
      <nav className="flex items-center justify-center gap-1 px-2 py-2 bg-slate-900/60 backdrop-blur-md border border-white/10 rounded-full shadow-lg shadow-black/20">
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </motion.header>
  );
};

export default Navbar;
