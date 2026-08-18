# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

General visitors landing on a personal home base for Lakshya Jain: recruiters, collaborators, friends, and anyone who finds a link to the site. No single conversion goal — the site should work as a memorable personal brand page rather than a narrow funnel toward one action (e.g. "hire me" or "collaborate with me").

## Product Purpose

A personal website that introduces Lakshya Jain: who they are, what they build, and what they're into. Success is being memorable and distinct rather than driving one specific outcome.

## Positioning

Personal, not templated-portfolio: the site should feel like it belongs to one specific person rather than reading as an interchangeable "software engineer portfolio" built from a template.

## Operating Context

- CS student at the University of Waterloo, oriented toward a software engineering career. This is a durable fact to design around even while bio copy stays placeholder.
- Site content (bio, roles, projects, links) is currently placeholder text pending real copy from the user — see Evidence on Hand.

## Capabilities and Constraints

- Existing stack: Next.js 16 (App Router, Turbopack), React 19, Tailwind CSS 4, Framer Motion. Continue using this stack rather than introducing a new one.
- Single-page site (`src/app/page.tsx`) composed of section components in `src/components/`.

## Evidence on Hand

- Real: name (Lakshya Jain), email (lakshya16jain@gmail.com), Waterloo CS student status.
- Placeholder, not yet real: bio copy, role tags, "currently/stack/into/based in" facts, all project entries, social links (GitHub/LinkedIn/X), blog posts, and the Photobooth's photos (currently generic stock images, not photos of the user). Future work must keep these as clearly marked placeholders, not invented specifics (fake project names, fake metrics, fake employers, stock photos presented as real), until the user supplies real content/images.

## Product Principles

- Distinct over templated: avoid the generic "gradient hero + card grid" portfolio look; the design should have a specific, ownable point of view.
- Honest placeholders: never fabricate specific achievements, employers, metrics, or project details to fill gaps — use clearly marked placeholder copy instead.
- One stack, no framework churn: build within the existing Next.js/Tailwind/Framer Motion setup.
- No single hard conversion goal: optimize for memorability and personality, not a funnel.
