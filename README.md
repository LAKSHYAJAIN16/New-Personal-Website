# Personal Website

Lakshya Jain's personal site — a single-page personal home base introducing who he is, what he builds, and what he's into. Built to feel like it belongs to one specific person rather than reading as a generic templated "software engineer portfolio."

## What it does

The site is a single scrollable page (`src/app/page.tsx`) with jump-linked sections — about, work, writing, photobooth, and contact — plus a few standalone routes (`/about`, `/work`, `/writing`, `/blog`, `/blog/[slug]`, `/contact`, `/photobooth`) for deep-linking into each area. Content (bio copy, project entries, blog posts, photos, social links) is data-driven from `src/data/` and is explicitly marked as placeholder where real content hasn't been supplied yet (see `src/lib/placeholder.ts` and `PRODUCT.md`), so the site never presents fabricated achievements or stock content as real.

There's no single conversion goal — the site is meant to be memorable for recruiters, collaborators, and friends, not a funnel toward one action.

## Key features

- Single-page layout with anchored sections (about / work / writing / photobooth / contact) plus matching standalone routes
- Data-driven content: projects (`src/data/projects.ts`), blog posts (`src/data/posts.ts`), photos (`src/data/photos.ts`)
- Explicit placeholder system (`src/lib/placeholder.ts`) that visually/semantically flags content not yet real, instead of inventing details
- Framer Motion-driven animation (e.g. branded loading splash)
- Custom design direction tracked in `DESIGN.md`, with an `impeccable` design-review skill wired up under `.claude/skills/` for iterating on the UI

## Tech stack

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- [React](https://react.dev/) 19
- [Tailwind CSS](https://tailwindcss.com/) 4
- [Framer Motion](https://www.framer.com/motion/) — animation
- TypeScript
- ESLint (`eslint-config-next`)

## Setup

```bash
npm install
```

## Usage

```bash
npm run dev    # Start the dev server at http://localhost:3000
npm run build  # Production build
npm run start  # Serve the production build
npm run lint    # Run ESLint
```

## Project structure

```
src/
  app/
    page.tsx           # Home page: about / work / writing / photobooth / contact sections
    about/, work/, writing/, blog/, blog/[slug]/, contact/, photobooth/
                        # Standalone routes for each section
    layout.tsx, globals.css
  data/
    projects.ts         # Work/project entries
    posts.ts             # Blog posts
    photos.ts            # Photobooth images
  lib/
    placeholder.ts       # Marks content as placeholder vs. real
```

## Project docs

- `PRODUCT.md` — product context: audience, positioning, and what content is real vs. placeholder
- `DESIGN.md` — design direction and decisions
- `AGENTS.md` — notes for AI coding agents working in this repo
