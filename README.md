# Personal Website

> My personal site — a home base for who I am, what I build, and what I'm into.

I wanted it to actually feel like mine, not another templated "software engineer portfolio." It's one scrollable page with jump-linked sections (about, work, writing, photobooth, contact), plus standalone routes for linking directly into each one. Content is data-driven out of `src/data/`, and anything not filled in yet is explicitly marked as a placeholder instead of faked.

- Single-page layout with anchored sections, mirrored by standalone routes for deep linking
- Content lives in `src/data/` — projects, blog posts, photos — separate from page components
- Explicit placeholder system (`src/lib/placeholder.ts`) so unfinished content is flagged, not faked
- Framer Motion for animation (branded loading splash, etc.)
- Design direction tracked in `DESIGN.md`

**Stack:** Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, Framer Motion, TypeScript.

## Run it

```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run lint    # ESLint
```

## Layout

```
src/
  app/
    page.tsx    # home page: about / work / writing / photobooth / contact
    about/, work/, writing/, blog/, blog/[slug]/, contact/, photobooth/
                # standalone routes for each section
  data/
    projects.ts # work/project entries
    posts.ts    # blog posts
    photos.ts   # photobooth images
  lib/
    placeholder.ts # marks content as placeholder vs. real
```

## Other docs

- `PRODUCT.md` — who this is for and what's real vs. placeholder
- `DESIGN.md` — design direction and decisions
- `AGENTS.md` — notes for AI coding agents working in this repo
