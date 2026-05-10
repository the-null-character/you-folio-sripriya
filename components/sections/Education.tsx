"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { resumeData } from "@/lib/resume-data";
import { GraduationCap, Calendar, MapPin } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-20 px-5 sm:py-28 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              04 — Education
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-14" style={{ color: "var(--foreground)" }}>
            Academic{" "}
            <span className="gradient-text">Journey</span>
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {resumeData.education.map((edu, idx) => (
            <ScrollReveal key={edu.id} delay={idx * 0.07} direction="up">
              <div className="glass rounded-2xl p-6 h-full flex flex-col gap-4 hover:shadow-lg transition-all duration-300 group">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ background: "var(--accent)", opacity: 0.9 }}
                >
                  <GraduationCap size={18} className="text-white" />
                </div>

                <div className="flex-1">
                  <h3 className="font-bold text-base leading-snug" style={{ color: "var(--foreground)" }}>
                    {edu.degree}
                  </h3>
                  {edu.institution && (
                    <p className="text-sm mt-1 font-medium" style={{ color: "var(--accent)" }}>
                      {edu.institution}
                    </p>
                  )}
                </div>

                <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--muted)" }}>
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {edu.year}
                  </span>
                  {edu.location && (
                    <span className="flex items-center gap-1">
                      <MapPin size={11} /> {edu.location}
                    </span>
                  )}
                </div>

                {/* Accent bottom line */}
                <div
                  className="h-0.5 w-0 group-hover:w-full rounded-full transition-all duration-500"
                  style={{ background: "linear-gradient(90deg, var(--accent), var(--accent-2))" }}
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
