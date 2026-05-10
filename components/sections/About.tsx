"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { resumeData } from "@/lib/resume-data";
import { BookOpen, MapPin, Mail, Phone } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-5 sm:py-28 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              01 — About
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-2 md:gap-12 items-center">
          {/* Left — headline */}
          <ScrollReveal direction="left">
            <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
              Shaping minds,{" "}
              <span className="gradient-text">one learner</span>{" "}
              at a time.
            </h2>
          </ScrollReveal>

          {/* Right — text + info */}
          <ScrollReveal direction="right" delay={0.1}>
            <div className="glass rounded-3xl p-8 space-y-6">
              <p className="leading-relaxed text-base" style={{ color: "var(--muted)" }}>
                {resumeData.about}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t" style={{ borderColor: "var(--surface-border)" }}>
                <ContactItem icon={<Mail size={15} />} label={resumeData.email} />
                <ContactItem icon={<Phone size={15} />} label={resumeData.phone} />
                <ContactItem icon={<MapPin size={15} />} label={resumeData.location} />
                <ContactItem icon={<BookOpen size={15} />} label="ELT & Corporate Training" />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-2.5 text-sm" style={{ color: "var(--muted)" }}>
      <span style={{ color: "var(--accent)" }}>{icon}</span>
      {label}
    </div>
  );
}
