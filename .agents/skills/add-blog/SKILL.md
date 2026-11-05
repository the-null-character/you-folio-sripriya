---
name: add-blog
description: >-
  Use this skill when the user types /add-blog or asks to add a new blog/session post
  to Sripriya Thiagarajan's portfolio website (you-folio-sripriya). This skill handles
  the complete end-to-end workflow: gathering session details interactively if not
  provided, drafting a LinkedIn-style 1st-person post as Sripriya, copying any new
  images to public/media/blog/, appending the post to lib/blog-data.ts, verifying
  the build, committing, and pushing to GitHub.
trigger: /add-blog
---

# Add Blog Post — Sripriya Portfolio

This skill handles the **complete end-to-end workflow** for publishing a new session recap blog post to Sripriya's portfolio website.

---

## Project Context

- **Repo path**: `/Users/nullcharacter/Projects/you-folio-sripriya`
- **Blog data file**: `lib/blog-data.ts` — append new `BlogPost` objects to the `blogPosts` array
- **Blog images**: Copy to `public/media/blog/<slug>/` with clean filenames
- **Blog component**: `components/sections/Blog.tsx` — no changes needed unless redesign requested
- **Floating preview**: `components/ui/FloatingBlogPreview.tsx` — auto-picks the latest post, no changes needed

---

## Step 1 — Gather Information

If the user hasn't provided all details, ask for them **in a single consolidated question** (don't ask one-by-one). Required fields:

| Field | Example |
|---|---|
| Event / session name | "Burlington English 100ED Fest" |
| Date | "21 November 2026" |
| Venue / city | "Zone by The Park Hotel, Coimbatore" |
| Topic / title | "Developing Effective Assessment Tools..." |
| Key themes discussed | Bullet points or free-form notes |
| Images | Ask user to drop them in `media/` folder |
| Any links to include? | Optional LinkedIn post, event page, etc. |

If the user provides partial info, fill in reasonable gaps using context from the images and event name, then confirm before posting.

---

## Step 2 — Look at the Images

After the user drops images in `media/`, use `list_dir` on the `media/` folder to identify new files (compare against previously known files). View each new image to understand:
- Which is the **event poster** (extract: event name, date, venue, topic, sub-topics, organiser)
- Which are **action/session photos** (choose the most engaging one as `coverImage`)
- Which are **context photos** (e.g., speaker at a backdrop, group photos)

---

## Step 3 — Copy Images to Public

```bash
# Create a directory named after the post slug
mkdir -p public/media/blog/<slug>

# Copy each relevant image with a clean descriptive name
cp "media/<WhatsApp filename>" public/media/blog/<slug>/<descriptive-name>.jpeg
```

Choose 2–4 images maximum. Avoid duplicates or very similar shots.

---

## Step 4 — Draft the Blog Post

Write the post in **1st person as Sripriya Thiagarajan**, in a **LinkedIn-style** tone:
- Warm, professional, reflective
- Opens with the energy of the event (emoji optional but natural)
- Describes what was covered and *why* it mattered
- Shares a specific moment, example, or insight from the session
- Ends with gratitude and forward-looking enthusiasm
- Closes with relevant hashtags on the final paragraph (space-separated, starting with `#`)

Use `**bold**` for key terms (rendered as `<strong>` in the component).

**Content length**: 300–500 words across 5–8 paragraphs.

---

## Step 5 — Generate a Post Slug

Create a URL-safe slug from the event + date:
- Format: `<event-short-name>-<city>-<month>-<year>`
- Example: `edfest-coimbatore-nov-2026`
- Must be **unique** — check existing IDs in `lib/blog-data.ts`

---

## Step 6 — Append to blog-data.ts

Open `lib/blog-data.ts` and **prepend** the new post to the top of the `blogPosts` array (newest first):

```typescript
{
  id: "<slug>",
  title: "<full session title>",
  date: "<DD Month YYYY>",
  event: "<Organiser — Event Name>",
  venue: "<Venue, City>",
  tags: ["Tag1", "Tag2", "Tag3", "Tag4"],   // 3–5 short tags
  coverImage: "/media/blog/<slug>/<main-action-photo>.jpeg",
  images: [
    { src: "/media/blog/<slug>/<photo1>.jpeg", caption: "<descriptive caption>" },
    { src: "/media/blog/<slug>/<photo2>.jpeg", caption: "<descriptive caption>" },
    // poster last if included
  ],
  content: `<full LinkedIn-style post text>`,
},
```

> **Important**: Insert as the **first element** of the array so it appears as the latest post.

---

## Step 7 — Verify Build

```bash
cd /Users/nullcharacter/Projects/you-folio-sripriya
npm run build
```

- If build succeeds → proceed to Step 8
- If build fails → fix TypeScript/import errors before committing

---

## Step 8 — Commit & Push to GitHub

```bash
git add .
git commit -m "Add blog: <event name> — <date>"
git push origin main
```

Confirm the push succeeded and report the GitHub commit hash to the user.

---

## Step 9 — Confirm to User

Tell the user:
- ✅ Post published: **"<Title>"**
- 📅 Dated: **<date>**
- 🖼️ Images used: list the filenames
- 🚀 Pushed to GitHub — Netlify will auto-deploy in ~1–2 minutes
- 🔗 Live at: `https://sripriya-folio.netlify.app/#blog`

---

## Notes & Conventions

- **Image format**: Always `.jpeg`, never `.png` or `.webp` (consistency with existing assets)
- **Tags**: Short noun phrases, Title Case, 3–5 per post (e.g., `"ELT"`, `"Burlington English"`, `"Assessment"`)
- **Captions**: Descriptive, specific, present-tense (e.g., "Walking teachers through question-type design")
- **Section numbering**: The blog section is `06 — Sessions & Insights` — do not change this
- **Never modify**: `components/sections/Blog.tsx` or `components/ui/FloatingBlogPreview.tsx` unless explicitly asked
- **Hashtags**: Go at the very end of `content`, as a single paragraph of space-separated `#tags`
- **Line breaks in content**: Use `\n\n` to separate paragraphs — the component splits on this
