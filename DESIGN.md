---
name: Lakshya Jain — Personal Site
description: A single plain page, black serif text on white — no cards, no color, no chrome, in the genre of radically minimal personal-site design.
colors:
  bg: "#ffffff"
  ink: "#171717"
  ink-soft: "#666666"
  line: "#e5e5e5"
typography:
  body:
    fontFamily: "Georgia, Times New Roman, ui-serif, serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  heading:
    fontFamily: "Georgia, Times New Roman, ui-serif, serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.3
  title:
    fontFamily: "Georgia, Times New Roman, ui-serif, serif"
    fontSize: "1.125rem"
    fontWeight: 700
    lineHeight: 1.3
spacing:
  xs: "4px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "96px"
components:
  link:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "The Plain Page"**

The site is one page of plain text: a name, a short bio, and four lists (work, writing, photos, contact), read top to bottom with no navigation beyond in-page jumps. It follows the genre of radically minimal personal-site design — a category of real, well-known personal homepages built from almost nothing but readable prose and underlined links — without imitating any one person's actual page or copy. This is a deliberate, user-requested reversal of every decorated world this project carried earlier (an illustrated isometric room, a 90s coffeehouse hangout): no card, no button, no shadow, no sourced display face, no accent color. Old routes (`/about`, `/work`, `/writing`, `/photobooth`, `/contact`) now redirect to anchors on `/` rather than rendering separate pages — the site has one real page.

**Key Characteristics:**
- One page, no navigation chrome: every former subpage is a same-page anchor now (`/#work`, `/#writing`, etc.), reached by redirect for old links.
- No sourced font: Georgia (a system serif) carries every weight of type. This is the brief's own instruction, not a fallback — plainness is the point.
- No accent color: ink and a single hairline gray are the entire palette. A link is only distinguished by its underline.
- Content over container: work and writing are inline text lines (`title — description`), never cards; photos are small plain `<img>` tiles with no frame, shadow, or caption chrome.
- Honest placeholders persist unchanged: bracketed, italic, muted text still marks unfilled facts — the one convention carried forward from every earlier world.

## Colors

Two colors and a hairline gray — no accent, by design.

### Primary
- **Ink** (`#171717`): all text, all links (undecorated except by underline), all headings.

### Neutral
- **Background** (`#ffffff`): the page.
- **Ink Soft** (`#666666`): secondary text — meta labels, descriptions, the footer line. Measures 5.74:1 against the background, clearing WCAG AA.
- **Line** (`#e5e5e5`): the link underline's rest state and the footer's top hairline. Decorative only; never relied on alone to convey information.

### Named Rules
**The No-Accent Rule.** Nothing on this page uses a saturated color. A future addition that reaches for one has left this world.

## Typography

**Body/Display/Label Font:** Georgia (with Times New Roman, ui-serif, serif fallback) — one face for everything.

**Character:** A plain system serif, chosen specifically because it needs no download and carries no invented "brand voice" — the opposite of every prior world's sourced display face.

### Hierarchy
- **Heading** (700, `text-2xl`, Georgia): the name at the top of the page.
- **Title** (700, `text-lg`, Georgia): each section label (Work, Writing, Photos, Contact).
- **Body** (400, `text-base`/`text-sm`, Georgia, line-height 1.6): everything else — bio, list entries, contact copy.

### Named Rules
**The One-Face Rule.** Every weight of type on the page is Georgia. No mono, no script, no second family — introducing one is a world change, not a component choice.

## Layout

A single centered column, `max-w-xl` (36rem), with generous vertical rhythm between sections (`mt-12`) and tight rhythm within a list (`gap-3`). No responsive breakpoint changes the composition — the column just narrows on small screens via the container's own padding (`px-6`). No sidebar, no multi-column grid, no sticky header.

## Elevation & Depth

None. Every surface is flat — the page background itself, with no card, shadow, or layered surface anywhere. Content is separated by whitespace and one hairline rule (the footer's top border), never by a container.

### Named Rules
**The Flat-Always Rule.** No `box-shadow` appears anywhere in this system. Depth is not part of this world's vocabulary.

## Shapes

No radius, no border beyond the single footer hairline, no clipping. Photos are plain rectangular `<img>` tiles at a fixed small size (96–112px), unrounded.

## Components

### Links
- **Style:** inherit the surrounding text color; underlined at rest in `line` gray, darkening to `ink` on hover/focus. No button, ever — every actionable element on the page is an inline text link.

### Lists (Work / Writing)
- **Style:** a flat `<ul>`/`<li>` list, each entry one line of prose (`title — description`, or `date — title: excerpt`). No card, no border, no hover-lift.

### Photos
- **Style:** small (96–112px) plain `<img>` tiles in a `flex-wrap` row, `object-cover`, no frame or caption overlay; the caption lives in the image's `title` attribute only.

### Facts list (bio)
- **Style:** a two-column `label — value` list (`Status`, `Focus`, `Based in`, etc.), label in `ink-soft`, value in `ink` or the placeholder style if unfilled.

## Do's and Don'ts

### Do:
- **Do** keep the whole page to one system serif and two text colors plus one hairline gray.
- **Do** keep every actionable element a plain underlined text link — no button anywhere.
- **Do** keep honest, bracketed, italic placeholder styling for any fact that isn't real yet.
- **Do** redirect old subpage routes to `/#anchor` rather than reintroducing separate page chrome.

### Don't:
- **Don't** add a card, shadow, border-radius, or button — this world is flat and rectangular on principle.
- **Don't** source a display font or add a second type family.
- **Don't** introduce an accent color; ink and hairline gray are the whole palette.
- **Don't** fabricate a live stat, visitor count, or activity feed — say something true, or leave it bracketed.
