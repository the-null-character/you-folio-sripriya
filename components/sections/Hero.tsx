"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Sparkles } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { resumeData } from "@/lib/resume-data";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
};

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 pt-28 pb-16 text-center overflow-hidden"
    >
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-20 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating Ambient Glowing Spots (Liquid Glass feel) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div 
          className="absolute top-[20%] left-[15%] w-64 h-64 rounded-full blur-3xl opacity-20 animate-pulse"
          style={{ background: "var(--accent)", animationDuration: "8s" }}
        />
        <div 
          className="absolute bottom-[25%] right-[10%] w-80 h-80 rounded-full blur-3xl opacity-25 animate-pulse"
          style={{ background: "var(--accent-2)", animationDuration: "12s" }}
        />
      </div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto flex flex-col items-center gap-6 relative"
      >
        {/* Badge with pulse indicator */}
        <motion.div variants={item}>
          <span
            className="inline-flex items-center gap-2.5 liquid-glass rounded-full px-5 py-2 text-xs sm:text-sm font-semibold shadow-md border-[var(--surface-border)]"
            style={{ color: "var(--accent)" }}
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: "var(--accent)" }}></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ background: "var(--accent)" }}></span>
            </span>
            <span className="flex items-center gap-1">
              <Sparkles size={12} className="text-[var(--accent-2)] animate-spin" style={{ animationDuration: "6s" }} />
              Open for Collaborations
            </span>
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-4xl sm:text-6xl lg:text-8xl font-black tracking-tight leading-[1.05]"
          style={{ color: "var(--foreground)" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">{resumeData.name}</span>
        </motion.h1>

        {/* Sub-title */}
        <motion.p
          variants={item}
          className="text-2xl sm:text-3xl font-bold tracking-wide"
          style={{ color: "var(--accent)" }}
        >
          {resumeData.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="max-w-2xl text-base sm:text-xl leading-relaxed opacity-90 font-medium"
          style={{ color: "var(--muted)" }}
        >
          {resumeData.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-6">
          <MagneticButton
            href="#contact"
            className="px-8 py-3.5 rounded-full text-sm font-bold text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/20 active:scale-95"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          >
            Get in Touch
          </MagneticButton>

          <MagneticButton
            href={resumeData.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="liquid-glass px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2 hover:shadow-xl active:scale-95 text-[var(--foreground)]"
          >
            <Download size={15} />
            Download CV
          </MagneticButton>
        </motion.div>

        {/* Location badge */}
        <motion.p
          variants={item}
          className="text-sm font-medium mt-4 flex items-center gap-1.5"
          style={{ color: "var(--muted)" }}
        >
          <span>📍</span> {resumeData.location}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.8, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--muted)" }}
      >
        <span className="text-xs tracking-widest uppercase font-semibold">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
