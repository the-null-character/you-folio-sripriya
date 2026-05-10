"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
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
      className="relative min-h-[100dvh] flex flex-col items-center justify-center px-5 pt-24 pb-16 text-center"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-4xl mx-auto flex flex-col items-center gap-6"
      >
        {/* Badge */}
        <motion.div variants={item}>
          <span
            className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-sm font-medium"
            style={{ color: "var(--accent)" }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "var(--accent)" }} />
            Open for Collaborations
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={item}
          className="text-[2.4rem] sm:text-5xl lg:text-7xl font-bold tracking-tight leading-[1.08]"
          style={{ color: "var(--foreground)" }}
        >
          Hi, I'm{" "}
          <span className="gradient-text">{resumeData.name}</span>
        </motion.h1>

        {/* Sub-title */}
        <motion.p
          variants={item}
          className="text-xl sm:text-2xl font-medium"
          style={{ color: "var(--accent)" }}
        >
          {resumeData.title}
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={item}
          className="max-w-2xl text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--muted)" }}
        >
          {resumeData.tagline}
        </motion.p>

        {/* CTAs */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <MagneticButton
            href="#contact"
            className="px-8 py-3 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30"
            style={{ background: "var(--accent)" }}
          >
            Get in Touch
          </MagneticButton>

          <MagneticButton
            href={resumeData.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="glass px-8 py-3 rounded-full text-sm font-semibold flex items-center gap-2 hover:shadow-md transition-all duration-300"
            style={{ color: "var(--foreground)" }}
          >
            <Download size={15} />
            Download CV
          </MagneticButton>
        </motion.div>

        {/* Location badge */}
        <motion.p
          variants={item}
          className="text-sm mt-2"
          style={{ color: "var(--muted)" }}
        >
          📍 {resumeData.location}
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
        <span className="text-xs tracking-widest uppercase">Scroll</span>
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
