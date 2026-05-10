"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function LiquidBackground() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 30, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 30, damping: 30 });

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable mouse tracking on pointer devices
    const isTouchOnly = window.matchMedia("(hover: none)").matches;
    if (isTouchOnly) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 80);
      mouseY.set((e.clientY / innerHeight - 0.5) * 80);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 -z-10 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Blob 1 – top left */}
      <motion.div
        animate={{
          scale: [1, 1.15, 0.95, 1.1, 1],
          borderRadius: [
            "60% 40% 30% 70% / 60% 30% 70% 40%",
            "30% 60% 70% 40% / 50% 60% 30% 60%",
            "60% 40% 30% 70% / 60% 30% 70% 40%",
          ],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-24 -left-24 w-[280px] h-[280px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px]"
        style={{
          background: "var(--blob-1)",
          filter: "blur(60px)",
          x: springX,
          y: springY,
        }}
      />

      {/* Blob 2 – bottom right */}
      <motion.div
        animate={{
          scale: [1, 1.2, 0.9, 1.05, 1],
          borderRadius: [
            "40% 60% 60% 40% / 70% 30% 60% 40%",
            "60% 40% 40% 60% / 30% 70% 40% 60%",
            "40% 60% 60% 40% / 70% 30% 60% 40%",
          ],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute -bottom-24 -right-24 w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] lg:w-[700px] lg:h-[700px]"
        style={{
          background: "var(--blob-2)",
          filter: "blur(70px)",
          x: springX,
          y: springY,
        }}
      />

      {/* Blob 3 – center */}
      <motion.div
        animate={{
          scale: [1, 1.1, 0.9, 1],
          x: [0, 40, -30, 15, 0],
          y: [0, -30, 40, -15, 0],
          borderRadius: [
            "50% 50% 50% 50% / 50% 50% 50% 50%",
            "60% 40% 60% 40% / 40% 60% 40% 60%",
            "50% 50% 50% 50% / 50% 50% 50% 50%",
          ],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px]"
        style={{
          background: "var(--blob-3)",
          filter: "blur(70px)",
        }}
      />

      {/* Noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "128px 128px",
        }}
      />
    </div>
  );
}
