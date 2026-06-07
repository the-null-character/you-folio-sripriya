"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ui/ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Calculate scroll progress percentage
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled 
            ? "glass-strong shadow-lg shadow-black/5 py-3 border-b border-[var(--surface-border)]" 
            : "glass py-4 md:py-5 md:bg-transparent md:backdrop-blur-none md:border-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-bold text-lg tracking-tight flex items-center gap-2" style={{ color: "var(--foreground)" }}>
            <span className="gradient-text font-extrabold text-xl">ST</span>
            <span className="opacity-80 text-sm font-semibold hidden sm:inline">Sripriya T</span>
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold opacity-70 hover:opacity-100 transition-opacity relative group py-1"
                style={{ color: "var(--foreground)" }}
              >
                {link.label}
                <span
                  className="absolute bottom-0 left-0 w-0 h-0.5 rounded-full group-hover:w-full transition-all duration-300"
                  style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
                />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <button
              className="md:hidden glass rounded-full p-2 flex items-center justify-center cursor-pointer"
              onClick={() => setMobileOpen((p) => !p)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Scroll progress indicator line */}
        <div 
          className="scroll-progress-bar" 
          style={{ width: `${scrollProgress}%` }}
        />
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed top-20 inset-x-4 z-40 glass-strong rounded-2xl p-6 flex flex-col gap-5 md:hidden shadow-xl border border-[var(--surface-border)]"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-base font-semibold opacity-80 hover:opacity-100 transition-opacity py-1.5 border-b border-[var(--surface-border)] last:border-b-0"
                style={{ color: "var(--foreground)" }}
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
