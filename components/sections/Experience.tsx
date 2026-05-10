"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resumeData } from "@/lib/resume-data";
import { ChevronDown, Briefcase, MapPin, Calendar } from "lucide-react";

export default function Experience() {
  const [openId, setOpenId] = useState<number>(1);

  return (
    <section id="experience" className="py-20 px-5 sm:py-28 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              02 — Experience
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-14" style={{ color: "var(--foreground)" }}>
            Career{" "}
            <span className="gradient-text">Highlights</span>
          </h2>
        </ScrollReveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 top-0 bottom-0 w-px hidden sm:block"
            style={{ background: "var(--timeline-line)" }}
          />

          <div className="flex flex-col gap-6">
            {resumeData.experience.map((exp, idx) => (
              <ScrollReveal key={exp.id} delay={idx * 0.08}>
                <div className="sm:pl-14 relative">
                  {/* Dot */}
                  <div
                    className="hidden sm:flex absolute left-0 top-6 w-8 h-8 rounded-full items-center justify-center"
                    style={{ background: "var(--accent)", boxShadow: "0 0 0 4px var(--background), 0 0 0 6px var(--accent)" }}
                  >
                    <Briefcase size={14} className="text-white" />
                  </div>

                  {/* Card */}
                  <button
                    onClick={() => setOpenId(openId === exp.id ? -1 : exp.id)}
                    className="w-full text-left glass rounded-2xl p-6 hover:shadow-lg transition-all duration-300 group"
                    style={{ boxShadow: openId === exp.id ? "0 0 0 1.5px var(--accent)" : undefined }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>
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
                          <ul className="mt-5 space-y-2 border-t pt-4" style={{ borderColor: "var(--surface-border)" }}>
                            {exp.highlights.map((h, i) => (
                              <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                                <span className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0" style={{ background: "var(--accent)" }} />
                                {h}
                              </li>
                            ))}
                          </ul>
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
    </section>
  );
}
