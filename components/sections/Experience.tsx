"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resumeData } from "@/lib/resume-data";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";

const images = {
  1: "/media/sripriya-presenting-1.jpeg",
  2: "/media/sripriya-presenting-5.jpeg",
  3: "/media/sripriya-presenting-2.jpeg",
  4: "/media/sripriya-presenting-4.jpeg",
};

const imageCaptions = {
  1: "Delivering a keynote session for Cambridge University Press & Assessment",
  2: "Evaluating candidates and conducting Cambridge English Assessment sessions",
  3: "Addressing delegates as the Managing Director of Apjenius",
  4: "Leading interactive training sessions and academic instruction",
};

export default function Experience() {
  const [openId, setOpenId] = useState<number>(1);
  const [activeImageId, setActiveImageId] = useState<number>(1);

  // Synchronize active visual image with the expanded accordion item
  useEffect(() => {
    if (openId !== -1) {
      setActiveImageId(openId);
    }
  }, [openId]);

  return (
    <section id="experience" className="py-20 px-5 sm:py-28 sm:px-6 relative overflow-hidden">
      {/* Background radial glow */}
      <div 
        className="absolute bottom-1/4 right-0 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none -z-10"
        style={{ background: "var(--accent-2)" }}
      />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              02 — Experience
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-14" style={{ color: "var(--foreground)" }}>
            Career{" "}
            <span className="gradient-text">Highlights</span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Visual Display (Desktop Only) */}
          <div className="hidden lg:block lg:col-span-5 sticky top-32">
            <div className="relative group">
              {/* Soft glow outline */}
              <div 
                className="absolute -inset-3 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-3)] rounded-3xl blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-700 -z-10"
              />
              
              <div className="liquid-glass rounded-3xl p-3 relative aspect-[4/3] overflow-hidden flex items-center justify-center shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeImageId}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="absolute inset-3 rounded-2xl overflow-hidden"
                  >
                    <img
                      src={images[activeImageId as keyof typeof images]}
                      alt={imageCaptions[activeImageId as keyof typeof imageCaptions]}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Dynamic caption */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={`caption-${activeImageId}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.3 }}
                  className="mt-5 px-4 text-center"
                >
                  <p className="text-sm font-semibold tracking-wide" style={{ color: "var(--muted)" }}>
                    {imageCaptions[activeImageId as keyof typeof imageCaptions]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Interactive Scrollable Timeline (Right Column) */}
          <div className="lg:col-span-7 relative">
            {/* Timeline track vertical line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px hidden sm:block"
              style={{ background: "var(--timeline-line)" }}
            />

            <div className="flex flex-col gap-6">
              {resumeData.experience.map((exp, idx) => (
                <ScrollReveal key={exp.id} delay={idx * 0.08}>
                  <div className="sm:pl-14 relative">
                    {/* Briefcase marker node */}
                    <div
                      className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full items-center justify-center transition-transform duration-300"
                      style={{ 
                        background: "var(--accent)", 
                        boxShadow: "0 0 0 4px var(--background), 0 0 0 6px var(--accent)",
                        transform: openId === exp.id ? "scale(1.1)" : "none"
                      }}
                    >
                      <Briefcase size={14} className="text-white" />
                    </div>

                    {/* Timeline card with liquid glass styles */}
                    <button
                      onClick={() => setOpenId(openId === exp.id ? -1 : exp.id)}
                      className="w-full text-left liquid-glass rounded-2xl p-6 hover:shadow-xl transition-all duration-300 group"
                      style={{ 
                        boxShadow: openId === exp.id ? "0 0 0 2px var(--accent)" : undefined,
                        borderColor: openId === exp.id ? "var(--accent)" : undefined
                      }}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h3 className="text-lg font-bold transition-colors duration-300 group-hover:text-[var(--accent)]" style={{ color: "var(--foreground)" }}>
                            {exp.role}
                          </h3>
                          <p className="font-semibold text-sm mt-0.5" style={{ color: "var(--accent)" }}>
                            {exp.company}
                          </p>
                          <div className="flex flex-wrap gap-4 mt-2 text-xs" style={{ color: "var(--muted)" }}>
                            <span className="flex items-center gap-1">
                              <Calendar size={11} /> {exp.period}
                            </span>
                            {exp.location && (
                              <span className="flex items-center gap-1">
                                <MapPin size={11} /> {exp.location}
                              </span>
                            )}
                          </div>
                        </div>

                        <motion.div
                          animate={{ rotate: openId === exp.id ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="shrink-0 mt-1"
                          style={{ color: "var(--muted)" }}
                        >
                          <ChevronDown size={18} />
                        </motion.div>
                      </div>

                      <AnimatePresence initial={false}>
                        {openId === exp.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.35, ease: "easeInOut" }}
                            className="overflow-hidden"
                          >
                            <div className="mt-5 space-y-4 border-t pt-4" style={{ borderColor: "var(--surface-border)" }}>
                              <ul className="space-y-2">
                                {exp.highlights.map((h, i) => (
                                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                                    {h}
                                  </li>
                                ))}
                              </ul>

                              {/* Mobile Only: Inline Photo frame */}
                              <div className="relative rounded-xl overflow-hidden aspect-[4/3] border border-[var(--surface-border)] lg:hidden mt-4">
                                <img
                                  src={images[exp.id as keyof typeof images]}
                                  alt={imageCaptions[exp.id as keyof typeof imageCaptions]}
                                  className="w-full h-full object-cover"
                                  loading="lazy"
                                />
                                <div className="absolute bottom-2 left-2 right-2 glass rounded-lg p-2 text-[10px] text-center font-semibold text-[var(--foreground)] opacity-95">
                                  {imageCaptions[exp.id as keyof typeof imageCaptions]}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
