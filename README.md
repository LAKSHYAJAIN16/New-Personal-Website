# Personal Website

My personal site — a home base for who I am, what I build, and what I'm into. I wanted it to actually feel like mine, not another templated "software engineer portfolio" that could belong to anyone.

It's one scrollable page (`src/app/page.tsx`) with jump-linked sections — about, work, writing, photobooth, contact — plus standalone routes (`/about`, `/work`, `/writing`, `/blog`, `/blog/[slug]`, `/contact`, `/photobooth`) for when someone wants to link directly into a section. All the actual content — bio copy, project entries, blog posts, photos, social links — is data-driven out of `src/data/`, and anywhere I haven't filled in real content yet, it's explicitly marked as a placeholder (see `src/lib/placeholder.ts` and `PRODUCT.md`) rather than faking it with stock text or invented achievements.

There's no single "convert here" goal on this site. It's meant to be memorable for recruiters, collaborators, and friends alike — not a funnel pushing toward one action.

## Notable bits

- Single-page layout with anchored sections, mirrored by standalone routes for deep linking
- Content lives in `src/data/` — projects, blog posts, photos — separate from the page components
- An explicit placeholder system (`src/lib/placeholder.ts`) so unfinished content is flagged instead of faked
- Framer Motion for animation (the branded loading splash, etc.)
- A design direction tracked in `DESIGN.md`, with an `impeccable` design-review skill under `.claude/skills/` that I use to iterate on the UI

## Stack

Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, Framer Motion, TypeScript, ESLint.

## Running it

```bash
npm install
npm run dev     # dev server at http://localhost:3000
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Layout

```
src/
  app/
    page.tsx    # home page: about / work / writing / photobooth / contact
    about/, work/, writing/, blog/, blog/[slug]/, contact/, photobooth/
                # standalone routes for each section
    layout.tsx, globals.css
  data/
    projects.ts # work/project entries
    posts.ts    # blog posts
    photos.ts   # photobooth images
  lib/
    placeholder.ts # marks content as placeholder vs. real
```

## Other docs in here

- `PRODUCT.md` — who this is for and what's real vs. placeholder
- `DESIGN.md` — design direction and decisions
- `AGENTS.md` — notes for AI coding agents working in this repo
