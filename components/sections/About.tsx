"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { resumeData } from "@/lib/resume-data";
import { BookOpen, MapPin, Mail, Phone } from "lucide-react";

const aboutImages = [
  "/media/sripriya-presenting-1.jpeg",
  "/media/sripriya-presenting-2.jpeg",
  "/media/sripriya-presenting-3.jpeg",
  "/media/sripriya-presenting-4.jpeg",
  "/media/sripriya-presenting-5.jpeg",
];

const aboutCaptions = [
  "Cambridge English Keynote Session",
  "Product Launch Presentation",
  "Cambridge Examiner Training",
  "Interactive Workshop Facilitation",
  "AI Pedagogy & ELT Conference",
];

export default function About() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-200, 200], [10, -10]);
  const rotateY = useTransform(x, [-200, 200], [-10, 10]);

  const [imageIdx, setImageIdx] = useState(0);

  // Set up the automatic slideshow timer
  useEffect(() => {
    const interval = setInterval(() => {
      setImageIdx((prev) => (prev + 1) % aboutImages.length);
    }, 15000); // 15 seconds
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left - width / 2;
    const mouseY = e.clientY - rect.top - height / 2;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="about" className="py-20 px-5 sm:py-28 sm:px-6 relative overflow-hidden">
      {/* Decorative background glow */}
      <div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full blur-3xl opacity-20 pointer-events-none -z-10"
        style={{ background: "var(--accent-3)" }}
      />

      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              01 — About
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <div className="grid gap-12 lg:grid-cols-12 items-center">
          {/* Left Column: Headline and 3D Floating Stage Photo Slideshow (Span 5) */}
          <div className="lg:col-span-5 space-y-10">
            <ScrollReveal direction="left">
              <h2 className="text-4xl sm:text-5xl font-bold leading-tight" style={{ color: "var(--foreground)" }}>
                Shaping minds,{" "}
                <span className="gradient-text">one learner</span>{" "}
                at a time.
              </h2>
            </ScrollReveal>

            <ScrollReveal direction="left" delay={0.1}>
              <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative group max-w-sm mx-auto lg:mx-0 cursor-pointer"
              >
                {/* Neon soft liquid-glow border */}
                <div
                  className="absolute -inset-3 bg-gradient-to-r from-[var(--accent)] via-[var(--accent-2)] to-[var(--accent-3)] rounded-3xl blur-2xl opacity-25 group-hover:opacity-45 transition-opacity duration-700 -z-10"
                />

                <div className="liquid-glass rounded-3xl p-3 relative aspect-[3/4] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={imageIdx}
                      src={aboutImages[imageIdx]}
                      alt="Sripriya presenting on stage"
                      initial={{ opacity: 0, scale: 1.05 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.8, ease: "easeInOut" }}
                      className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </AnimatePresence>

                  {/* Image glass caption overlay */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`caption-${imageIdx}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.4 }}
                      className="absolute bottom-5 left-5 right-5 glass rounded-xl px-4 py-2.5 text-xs font-semibold backdrop-blur-md flex items-center justify-between shadow-lg"
                      style={{ transform: "translateZ(30px)" }}
                    >
                      <span className="text-[var(--foreground)] opacity-90">{aboutCaptions[imageIdx]}</span>
                      <span className="text-[var(--accent)] font-bold">Chennai, India</span>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </motion.div>
            </ScrollReveal>
          </div>

          {/* Right Column: Narrative Biography & Quick Contacts (Span 7) */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right" delay={0.15}>
              <div className="liquid-glass rounded-3xl p-8 sm:p-10 space-y-8">
                <p className="leading-relaxed text-base sm:text-lg" style={{ color: "var(--muted)" }}>
                  {resumeData.about}
                </p>

                <div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t"
                  style={{ borderColor: "var(--surface-border)" }}
                >
                  <ContactItem icon={<Mail size={16} />} label={resumeData.email} />
                  <ContactItem icon={<Phone size={16} />} label={resumeData.phone} />
                  <ContactItem icon={<MapPin size={16} />} label={resumeData.location} />
                  <ContactItem icon={<BookOpen size={16} />} label="ELT & Corporate Training" />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex items-center gap-3 text-sm sm:text-base font-medium" style={{ color: "var(--muted)" }}>
      <span className="flex items-center justify-center w-8 h-8 rounded-lg glass" style={{ color: "var(--accent)" }}>{icon}</span>
      {label}
    </div>
  );
}
