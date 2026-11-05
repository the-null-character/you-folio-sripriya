"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "@/lib/blog-data";
import { Calendar, ChevronRight, X, BookOpen } from "lucide-react";

/**
 * FloatingBlogPreview
 * Shows a compact floating card on the right side once the user scrolls
 * past the hero section (> 100vh). Hides itself after the user has seen it
 * or when they dismiss it. Clicking navigates to the #blog section.
 */
export default function FloatingBlogPreview() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const [currentIdx, setCurrentIdx] = useState(0);

  const latestPost = blogPosts[currentIdx];

  useEffect(() => {
    if (blogPosts.length === 0 || dismissed) return;

    const handleScroll = () => {
      const heroHeight = window.innerHeight; // roughly 100vh
      if (window.scrollY > heroHeight * 0.8) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [dismissed]);

  if (!latestPost || dismissed) return null;

  const handleClick = () => {
    const el = document.getElementById("blog");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="floating-blog"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed right-5 bottom-24 z-[100] w-72 sm:w-80"
          aria-label="Latest session post preview"
        >
          {/* Glow aura */}
          <div
            className="absolute -inset-3 rounded-3xl blur-2xl opacity-20 pointer-events-none"
            style={{ background: "linear-gradient(135deg, var(--accent), var(--accent-2))" }}
          />

          <div className="relative liquid-glass rounded-2xl overflow-hidden shadow-2xl">
            {/* Dismiss button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setDismissed(true);
                setVisible(false);
              }}
              className="absolute top-2.5 right-2.5 z-10 w-7 h-7 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
              style={{ color: "var(--muted)" }}
              aria-label="Dismiss preview"
            >
              <X size={13} />
            </button>

            {/* Cover thumbnail */}
            <button
              onClick={handleClick}
              className="relative block w-full aspect-video overflow-hidden focus:outline-none group"
              aria-label="Go to blog section"
            >
              <img
                src={latestPost.coverImage}
                alt={latestPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 55%)" }}
              />
              {/* New badge */}
              <span
                className="absolute top-2.5 left-2.5 text-[10px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full"
                style={{ background: "var(--accent-2)", color: "#fff" }}
              >
                ✨ New Post
              </span>
            </button>

            {/* Text body */}
            <button
              onClick={handleClick}
              className="w-full text-left px-4 py-3.5 space-y-2 focus:outline-none group"
            >
              {/* Label */}
              <div className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider" style={{ color: "var(--accent)" }}>
                <BookOpen size={11} /> From the Training Room
              </div>

              {/* Title */}
              <p
                className="text-sm font-bold leading-snug line-clamp-2 transition-colors group-hover:text-[var(--accent)]"
                style={{ color: "var(--foreground)" }}
              >
                {latestPost.title}
              </p>

              {/* Meta */}
              <div className="flex items-center gap-2 text-[11px]" style={{ color: "var(--muted)" }}>
                <Calendar size={10} />
                <span>{latestPost.date}</span>
                <span>·</span>
                <span>{latestPost.venue.split(",")[0]}</span>
              </div>

              {/* CTA */}
              <div
                className="flex items-center gap-1 text-[11px] font-semibold mt-1 transition-opacity group-hover:opacity-70"
                style={{ color: "var(--accent)" }}
              >
                Read the recap <ChevronRight size={12} />
              </div>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
