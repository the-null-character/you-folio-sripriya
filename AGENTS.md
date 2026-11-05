<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

---

# Sripriya Portfolio — Project Rules

This is **Sripriya Thiagarajan's personal portfolio website** — an ELT Specialist & Corporate Trainer based in Chennai, India. It is a Next.js 16 static site deployed on Netlify via GitHub (`main` branch auto-deploy).

## Key Files

| File | Purpose |
|---|---|
| `lib/resume-data.ts` | All personal/professional data (bio, experience, skills, education) |
| `lib/blog-data.ts` | Session recap blog posts array — newest post first |
| `components/sections/Blog.tsx` | Blog card grid + full post modal |
| `components/ui/FloatingBlogPreview.tsx` | Sticky right-side floating preview card |
| `public/media/` | All served images (presenting photos, blog images) |
| `public/Sripriya_CV_Aug_2026.pdf` | Latest downloadable CV |

## Slash Commands

### `/add-blog`

**Trigger**: User types `/add-blog` optionally followed by session details.

**Action**: Activate the `add-blog` skill located at `.agents/skills/add-blog/SKILL.md` and execute the full end-to-end blog publishing workflow:
1. Gather session details (ask if missing)
2. Inspect any new images in `media/`
3. Copy best images to `public/media/blog/<slug>/`
4. Draft LinkedIn-style 1st-person post as Sripriya
5. Prepend new post to `lib/blog-data.ts`
6. Run `npm run build` to verify
7. `git add . && git commit -m "Add blog: ..." && git push origin main`
8. Confirm success to user with Netlify live URL

## General Rules

- Always write content (bio, blog posts) in **Sripriya's voice** — warm, professional, 1st person
- Blog posts use `\n\n` as paragraph separator in the `content` field
- Never modify `Blog.tsx` or `FloatingBlogPreview.tsx` unless explicitly asked to redesign
- After any content/data change, always run `npm run build` before pushing
- Keep blog post section numbering consistent: `06 — Sessions & Insights`
- When in doubt about personal details (awards, dates, institutions), ask — do not fabricate
