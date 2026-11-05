"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { blogPosts, type BlogPost } from "@/lib/blog-data";
import { Calendar, MapPin, X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";

/* ── Full post modal ─────────────────────────────────────── */
function BlogModal({ post, onClose }: { post: BlogPost; onClose: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);

  const paragraphs = post.content.split("\n\n");

  return (
    <AnimatePresence>
      <motion.div
        key="backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-8"
        style={{ background: "rgba(0,0,0,0.65)", backdropFilter: "blur(12px)" }}
        onClick={onClose}
      >
        <motion.div
          key="modal"
          initial={{ opacity: 0, scale: 0.94, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.94, y: 20 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto liquid-glass rounded-3xl p-6 sm:p-10 shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            style={{ color: "var(--muted)" }}
            aria-label="Close"
          >
            <X size={18} />
          </button>

          {/* Event badge */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((t) => (
              <span
                key={t}
                className="text-[11px] font-semibold tracking-wide px-3 py-1 rounded-full"
                style={{ background: "var(--accent)", color: "#fff", opacity: 0.9 }}
              >
                {t}
              </span>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-bold mb-2 leading-snug" style={{ color: "var(--foreground)" }}>
            {post.title}
          </h2>

          {/* Meta */}
          <div className="flex flex-wrap gap-4 text-sm mb-6" style={{ color: "var(--muted)" }}>
            <span className="flex items-center gap-1.5"><Calendar size={13} /> {post.date}</span>
            <span className="flex items-center gap-1.5"><MapPin size={13} /> {post.venue}</span>
          </div>

          {/* Image gallery */}
          {post.images.length > 0 && (
            <div className="relative rounded-2xl overflow-hidden aspect-video mb-8 group">
              <AnimatePresence mode="wait">
                <motion.img
                  key={imgIdx}
                  src={post.images[imgIdx].src}
                  alt={post.images[imgIdx].caption}
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.45 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>

              {/* Caption */}
              <div
                className="absolute bottom-0 left-0 right-0 px-4 py-3 text-xs font-semibold text-white"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65), transparent)" }}
              >
                {post.images[imgIdx].caption}
              </div>

              {/* Nav arrows */}
              {post.images.length > 1 && (
                <>
                  <button
                    onClick={() => setImgIdx((p) => (p - 1 + post.images.length) % post.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                    style={{ color: "var(--foreground)" }}
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} />
                  </button>
                  <button
                    onClick={() => setImgIdx((p) => (p + 1) % post.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
                    style={{ color: "var(--foreground)" }}
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} />
                  </button>
                  {/* Dots */}
                  <div className="absolute bottom-10 right-4 flex gap-1.5">
                    {post.images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setImgIdx(i)}
                        className="w-1.5 h-1.5 rounded-full transition-all"
                        style={{ background: i === imgIdx ? "#fff" : "rgba(255,255,255,0.4)" }}
                        aria-label={`Image ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          )}

          {/* Content */}
          <div className="space-y-4 text-sm sm:text-base leading-relaxed" style={{ color: "var(--muted)" }}>
            {paragraphs.map((para, i) => {
              // Render hashtag lines differently
              if (para.startsWith("#")) {
                return (
                  <p key={i} className="text-xs flex flex-wrap gap-1.5 pt-2">
                    {para.split(" ").map((tag, j) => (
                      <span key={j} style={{ color: "var(--accent)" }} className="font-semibold">
                        {tag}
                      </span>
                    ))}
                  </p>
                );
              }
              // Bold via **text**
              const parts = para.split(/(\*\*[^*]+\*\*)/g);
              return (
                <p key={i}>
                  {parts.map((part, j) =>
                    part.startsWith("**") ? (
                      <strong key={j} style={{ color: "var(--foreground)", fontWeight: 700 }}>
                        {part.replace(/\*\*/g, "")}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              );
            })}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

/* ── Blog card ───────────────────────────────────────────── */
function BlogCard({ post, onClick }: { post: BlogPost; onClick: () => void }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="liquid-glass rounded-2xl overflow-hidden cursor-pointer group"
    >
      {/* Cover image */}
      <div className="relative aspect-video overflow-hidden">
        <img
          src={post.coverImage}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 60%)" }} />

        {/* Event label */}
        <div
          className="absolute top-3 left-3 text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
          style={{ background: "var(--accent)", color: "#fff" }}
        >
          Session Recap
        </div>
      </div>

      {/* Body */}
      <div className="p-5 space-y-3">
        <div className="flex flex-wrap gap-1.5">
          {post.tags.slice(0, 3).map((t) => (
            <span key={t} className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ background: "var(--surface-border)", color: "var(--muted)" }}>
              {t}
            </span>
          ))}
        </div>

        <h3 className="font-bold text-base leading-snug transition-colors group-hover:text-[var(--accent)] line-clamp-2" style={{ color: "var(--foreground)" }}>
          {post.title}
        </h3>

        <div className="flex flex-wrap gap-3 text-xs" style={{ color: "var(--muted)" }}>
          <span className="flex items-center gap-1"><Calendar size={11} /> {post.date}</span>
          <span className="flex items-center gap-1"><MapPin size={11} /> {post.venue.split(",")[0]}</span>
        </div>

        <button
          className="flex items-center gap-1.5 text-xs font-semibold mt-1 transition-opacity hover:opacity-70"
          style={{ color: "var(--accent)" }}
          aria-label="Read full post"
        >
          Read full post <ExternalLink size={11} />
        </button>
      </div>
    </motion.div>
  );
}

/* ── Section ─────────────────────────────────────────────── */
export default function Blog() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  if (blogPosts.length === 0) return null;

  return (
    <>
      {activePost && <BlogModal post={activePost} onClose={() => setActivePost(null)} />}

      <section id="blog" className="py-20 px-5 sm:py-28 sm:px-6 relative overflow-hidden">
        {/* Background glow */}
        <div
          className="absolute top-1/3 right-0 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none -z-10"
          style={{ background: "var(--accent-2)" }}
        />

        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <div className="flex items-center gap-3 mb-16">
              <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                06 — Sessions & Insights
              </span>
              <div className="flex-1 h-px" style={{ background: "var(--surface-border)" }} />
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="mb-10">
              <h2 className="text-4xl sm:text-5xl font-bold" style={{ color: "var(--foreground)" }}>
                From the{" "}
                <span className="gradient-text">Training Room</span>
              </h2>
              <p className="mt-3 text-base sm:text-lg max-w-xl" style={{ color: "var(--muted)" }}>
                Reflections, insights, and stories from sessions I've had the joy of facilitating.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <BlogCard post={post} onClick={() => setActivePost(post)} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
