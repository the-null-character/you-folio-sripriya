"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { resumeData } from "@/lib/resume-data";
import { Mail, Download, Phone } from "lucide-react";

const socials = [
  {
    label: "Email",
    icon: <Mail size={20} />,
    href: `mailto:${resumeData.email}`,
    value: resumeData.email,
  },
  {
    label: "Phone",
    icon: <Phone size={20} />,
    href: `tel:${resumeData.phone}`,
    value: resumeData.phone,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-5 sm:py-28 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              05 — Contact
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-4" style={{ color: "var(--foreground)" }}>
            Let's{" "}
            <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-base mb-14" style={{ color: "var(--muted)" }}>
            Whether it's a training collaboration, coaching inquiry, or just a hello — I'd love to hear from you.
          </p>
        </ScrollReveal>

        {/* Social links grid */}
        <div className="grid sm:grid-cols-2 gap-4 mb-14">
          {socials.map((s, idx) => (
            <ScrollReveal key={s.label} delay={idx * 0.07}>
              <a
                href={s.href}
                target={undefined}
                rel="noopener noreferrer"
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group text-left w-full"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300"
                  style={{ background: "var(--surface-border)", color: "var(--accent)" }}
                >
                  {s.icon}
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: "var(--muted)" }}>
                    {s.label}
                  </p>
                  <p className="text-sm font-medium mt-0.5 group-hover:underline" style={{ color: "var(--foreground)" }}>
                    {s.value}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>

        {/* Download CV CTA */}
        <ScrollReveal delay={0.3}>
          <MagneticButton
            href={resumeData.resumePdf}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-10 py-4 rounded-full text-sm font-semibold text-white transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/30"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          >
            <Download size={16} />
            Download Full CV
          </MagneticButton>
        </ScrollReveal>

        {/* Footer note */}
        <ScrollReveal delay={0.4}>
          <p className="mt-16 text-xs" style={{ color: "var(--muted)" }}>
            © {new Date().getFullYear()} Sripriya T · Built with Next.js & Framer Motion
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
