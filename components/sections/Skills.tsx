"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { resumeData } from "@/lib/resume-data";
import ScrollReveal from "@/components/ui/ScrollReveal";

const skills = resumeData.skills;
const COUNT = skills.length;

/* Layout constants */
const CX = 300;          // SVG centre x
const CY = 300;          // SVG centre y
const ORBIT = 210;       // spoke length (desktop)
const VIEWBOX = 600;

function r4(n: number) {
  return Math.round(n * 10000) / 10000;
}

function getPos(idx: number, total: number, radius: number) {
  const angle = (idx / total) * 2 * Math.PI - Math.PI / 2;
  return {
    x: r4(CX + radius * Math.cos(angle)),
    y: r4(CY + radius * Math.sin(angle)),
  };
}

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [hovered, setHovered] = useState<{ name: string; desc: string } | null>(null);

  return (
    <section id="skills" className="py-20 px-5 sm:py-28 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-16">
            <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              03 — Skills
            </span>
            <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.05}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-10" style={{ color: "var(--foreground)" }}>
            Areas of{" "}
            <span className="gradient-text">Expertise</span>
          </h2>
        </ScrollReveal>

        {/* ── Spider map ── */}
        <div ref={ref} className="w-full flex flex-col items-center gap-6">
          <svg
            viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
            className="w-full max-w-[560px] sm:max-w-[640px]"
            aria-label="Skills mind map"
            onMouseLeave={() => setHovered(null)}
          >
            <defs>
              <radialGradient id="spoke-grad" cx="0%" cy="50%" r="100%">
                <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.8" />
                <stop offset="100%" stopColor="var(--accent-2)" stopOpacity="0.3" />
              </radialGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Spokes — drawn centre-outward using strokeDashoffset trick */}
            {skills.map((_, idx) => {
              const { x, y } = getPos(idx, COUNT, ORBIT);
              return (
                <motion.path
                  key={idx}
                  d={`M ${CX} ${CY} L ${x} ${y}`}
                  stroke="url(#spoke-grad)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={inView ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 + idx * 0.06, ease: "easeOut" }}
                />
              );
            })}

            {/* Orbit ring */}
            <motion.circle
              cx={CX} cy={CY} r={ORBIT}
              fill="none"
              stroke="var(--surface-border)"
              strokeWidth="1"
              strokeDasharray="4 6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.1 }}
            />

            {/* Centre node */}
            <motion.circle
              cx={CX} cy={CY} r={46}
              fill="var(--accent)"
              fillOpacity="0.12"
              stroke="var(--accent)"
              strokeWidth="1.5"
              filter="url(#glow)"
              initial={{ scale: 0, opacity: 0 }}
              animate={inView ? { scale: 1, opacity: 1 } : {}}
              transition={{ duration: 0.5, ease: "easeOut" }}
              style={{ transformOrigin: `${CX}px ${CY}px` }}
            />
            <motion.text
              x={CX} y={CY + 4}
              textAnchor="middle"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1"
              fill="var(--accent)"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5 }}
            >
              EXPERTISE
            </motion.text>

            {/* Skill nodes */}
            {skills.map((skill, idx) => {
              const { name, desc } = skill;
              const { x, y } = getPos(idx, COUNT, ORBIT);
              const isHovered = hovered?.name === name;

              /* Wrap long labels */
              const words = name.split(" ");
              const mid = Math.ceil(words.length / 2);
              const line1 = words.slice(0, mid).join(" ");
              const line2 = words.slice(mid).join(" ");

              /* Push label outward so it doesn't overlap the dot */
              const angle = (idx / COUNT) * 2 * Math.PI - Math.PI / 2;
              const labelR = ORBIT + 38;
              const lx = r4(CX + labelR * Math.cos(angle));
              const ly = r4(CY + labelR * Math.sin(angle));

              return (
                <motion.g
                  key={name}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + idx * 0.06, ease: "easeOut" }}
                  style={{ transformOrigin: `${x}px ${y}px`, cursor: "pointer" }}
                  onMouseEnter={() => setHovered({ name, desc })}
                  onClick={() => setHovered(hovered?.name === name ? null : { name, desc })}
                >
                  {/* Invisible large hit area */}
                  <circle cx={x} cy={y} r={22} fill="transparent" />

                  {/* Dot — pulses when hovered */}
                  <motion.circle
                    cx={x} cy={y} r={isHovered ? 10 : 7}
                    fill={isHovered ? "var(--accent)" : "var(--accent-2)"}
                    fillOpacity="0.95"
                    filter="url(#glow)"
                    transition={{ duration: 0.2 }}
                  />
                  <circle
                    cx={x} cy={y} r={isHovered ? 18 : 12}
                    fill="var(--accent)"
                    fillOpacity={isHovered ? 0.2 : 0.1}
                  />

                  {/* Label */}
                  <text
                    x={lx}
                    y={line2 ? ly - 6 : ly + 4}
                    textAnchor="middle"
                    fontSize="9.5"
                    fontWeight={isHovered ? "700" : "600"}
                    fill={isHovered ? "var(--accent)" : "var(--foreground)"}
                  >
                    {line1}
                  </text>
                  {line2 && (
                    <text
                      x={lx}
                      y={ly + 8}
                      textAnchor="middle"
                      fontSize="9.5"
                      fontWeight={isHovered ? "700" : "600"}
                      fill={isHovered ? "var(--accent)" : "var(--foreground)"}
                    >
                      {line2}
                    </text>
                  )}
                </motion.g>
              );
            })}
          </svg>

          {/* ── Tooltip panel ── */}
          <div className="w-full max-w-[560px] sm:max-w-[640px] min-h-[72px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {hovered ? (
                <motion.div
                  key={hovered.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="glass rounded-2xl px-6 py-4 w-full text-center"
                >
                  <p className="text-sm font-bold mb-1" style={{ color: "var(--accent)" }}>
                    {hovered.name}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                    {hovered.desc}
                  </p>
                </motion.div>
              ) : (
                <motion.p
                  key="hint"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="text-xs"
                  style={{ color: "var(--muted)" }}
                >
                  Hover over a node to learn more
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
