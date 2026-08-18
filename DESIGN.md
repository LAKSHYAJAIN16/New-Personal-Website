---
name: Lakshya Jain — Personal Site
description: A running lab notebook where each section is a numbered figure plate with a real live-rendered generative canvas.
colors:
  paper: "#f6f6f4"
  ink: "#131211"
  ink-soft: "#52504c"
  rule: "#d8d6d1"
  rule-strong: "#131211"
  signal: "#b3261e"
  signal-ink: "#ffffff"
typography:
  mono:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 400
  mono-heading:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 600
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
spacing:
  plate-gap: "2rem"
  section-y: "4rem"
components:
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    typography: "{typography.mono}"
    padding: "10px 16px"
  button-primary-hover:
    backgroundColor: "{colors.signal}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.mono}"
    padding: "10px 16px"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "The Lab Notebook"**

The site reads as a running research notebook, not a marketing page: every section is a numbered figure plate ("FIG. 01", "FIG. 02"…), and the plates that anchor the page contain a real, live-rendered generative canvas — a harmonograph traced by a small set of pens on quasi-periodic Lissajous curves, redrawn every frame and nudged by cursor position — rather than a screenshot or a decorative loop. The world is deliberately light and high-contrast: near-white paper, black ink rules, and one signal-red accent reserved for live/active states, refusing the dark-mode-plus-neon-particles default that this category of site converges on. Nothing is a stock card grid; content is presented the way an instrument reading or an academic figure plate is presented — numbered, captioned, ruled.

This is a genuine rebuild, not an iteration: it replaces an earlier bold/playful "sticker" world (thick borders, hard offset shadows, gradient blobs) on this same project. That world is evidence of what the subject is, not authority over what it becomes, and none of its devices (hard block shadows, gradient text, unicode-arrow icons) survive here.

**Key Characteristics:**
- Live, not static: the site's signature visual is real-time `<canvas>` computation, not an image or CSS animation standing in for one.
- Ruled-plate structure: every major section is a bordered "figure" with a numbered tag and a caption strip, echoing a lab notebook or academic paper.
- Restrained color: near-white ground and black ink carry the page; signal red is spent only on live/active indicators and the newest pen trace.
- No serif, no italic display: type is monospace-led (IBM Plex Mono) for anything numeric, labeled, or structural, with IBM Plex Sans for reading prose — a deliberate move away from the "editorial serif + italic" AI-portfolio default.

## Colors

Two neutrals and one reserved accent; no secondary or tertiary role.

### Primary
- **Signal Red** (`#b3261e`): reserved exclusively for "live" state — the pulsing status dot, the newest/active pen trace in a generative figure, hover-state link underlines, and the "channel open" contact indicator. Never used for structural chrome (borders, dividers) or decoration.

### Neutral
- **Paper** (`#f6f6f4`): the page ground and every plate's fill. Not warm cream — kept neutral-cool to avoid the "cream + serif" AI-portfolio cliché.
- **Ink** (`#131211`): primary text, headings, and all structural rules/borders.
- **Ink Soft** (`#52504c`): secondary text — captions, metadata, tag labels, nav links at rest.
- **Rule** (`#d8d6d1`): quiet dividers (table rows, the background grid, list separators).
- **Rule Strong** (`#131211`, i.e. Ink): plate borders, the nav's bottom border, anything that needs to read as a drawn instrument line rather than a soft divider.

### Named Rules
**The One Red Rule.** Signal red marks only what is live or active right now (a pulsing dot, the pen currently drawing, an active hover). A static fact never gets the red treatment — that is what Ink is for.

## Typography

**Display/Label Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, monospace fallback)
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui, sans-serif fallback)

**Character:** IBM Plex was designed as an engineering/technical corporate face, which is the point — it reads as instrument-grade, not editorial. Mono carries anything numbered, labeled, or structural (figure tags, nav indices, buttons, data readouts); Sans carries body prose. No serif face and no italic display type appear anywhere in the system — both are the AI-portfolio default this world explicitly refuses.

### Hierarchy
- **Display** (600, `text-3xl`–`text-5xl`, tight leading): the hero name and the Contact section's closing line. Bold weight, never italic.
- **Title** (600, `text-lg`–`text-xl`, mono): project/post titles, plate figcaptions' implicit heading role.
- **Body** (400, `text-sm`–`text-base`, sans): descriptive prose (about copy, project/post descriptions).
- **Label** (400–500, `text-xs`–`text-[11px]`, mono, occasionally uppercase with tracking-wide): figure tags ("FIG. 0X"), nav links, tag chips, captions, footer.

### Named Rules
**The No-Serif Rule.** No serif or italic display type. Emphasis and hierarchy come from the mono/sans pairing, weight, and scale — never from switching families to signal "editorial."

## Layout

The site is multi-page, not a single scrolling document: `/` (Hero, About, an Index pointer list, Contact), `/work`, `/writing`, and `/photobooth` are separate routes, each independently linkable and each opening with its own Nav/Footer. The FIG. numbering stays a single continuous sequence across that structure by convention rather than by page — Home owns FIG. 01–02 (Hero, About) plus FIG. 03–05 as index pointers to the other three pages; each sub-page restarts its own internal entries at FIG. 01 so a visitor arriving directly at one (not through Home) isn't shown a number with no prior context.

Single-column content capped at `max-w-5xl`, centered, with `px-4 sm:px-6` page margins. Sections stack vertically with generous `py-16 sm:py-24` rhythm; each section opens with a small mono uppercase section label (`About`, `Index`, `Work`, `Writing`, `Contact` — not a decorative kicker, since on Home it doubles as the in-page nav target's visible label). The Hero is the one exception: it is edge-to-edge within the content column and uses viewport-relative height (`h-[70vh] sm:h-[78vh]`) so the generative figure dominates the first viewport.

Nav links to Work and Writing are real page navigations (`next/link` to `/work` / `/writing`); About and Contact stay same-document anchors (`/#about`, `/#contact`) that resolve to Home from any page. Each sub-page opens with a small "[0] Back to index" link in the same citation-link style used throughout, rather than relying on the nav alone for the way back.

Responsive behavior is mobile-first via Tailwind's `sm:` (640px) breakpoint: the nav collapses from an inline link row to a bordered hamburger toggle with a full-width dropdown; project/post rows collapse from a three-column grid (`figure number · icon · content`) to two columns, moving the figure number inline next to the title instead of in its own gutter.

A faint two-axis grid background (`.grid-ground`, 40px cells, drawn from the `rule` color) covers the whole page — an intentional graph-paper/engineering-drafting surface consistent with the lab-notebook world, not a decorative filler pattern.

## Elevation & Depth

Flat by design: no box-shadows anywhere in the system. Depth and separation come entirely from ruled borders (1–2.5px solid Ink) and whitespace, matching a paper/instrument-panel material rather than a layered digital-UI material. This is a deliberate departure from the previous "sticker" world, which used hard offset block shadows; that device belonged to a neobrutalist world this project no longer is.

## Shapes

No rounded corners anywhere (`border-radius: 0` throughout — plates, buttons, tags, nav elements). Every container is a sharp-cornered rectangle bounded by a ruled border, consistent with drawn instrument panels and printed figure plates rather than soft app-UI chrome.

## Components

### Buttons
- **Shape:** sharp rectangle, 1–2px solid Ink border, no radius.
- **Primary (filled):** Ink background, Paper text, mono type, `10px 16px` padding (the Contact section's email-copy control uses this on hover).
- **Outline (default):** transparent background, Ink border and text, mono type; fills to Ink-background/Paper-text on hover (nav "Contact" button, hero CTA links use the underline variant instead — see Links below).
- **Hover/Focus:** background inverts (outline → filled) or underline decoration shifts from Rule-Strong to Signal; focus-visible always gets a 2px Signal outline with 3px offset (see `:focus-visible` in globals.css).

### Links (inline citation-style)
- **Style:** bracketed index prefix (`[1]`, `[2]`) in front of the label, mono type, an underline in Rule-Strong that shifts to Signal on hover, paired with a small drawn arrow icon (never a unicode glyph).

### Figure Plates (signature component)
The system's one recurring custom component. A `<figure>` bordered in Rule-Strong with a "FIG. 0X" tag overlapping the top-left border (a Paper-background chip so the border reads as broken by the label, like a printed plate number), the figure content itself, and a bottom `<figcaption>` strip in small Ink-Soft mono text describing what the figure shows. Used for the Hero's and About's live-canvas figures, and for each photo in the Photobooth grid (photos are desaturated — `grayscale contrast-125` — so full-color source images don't fight the restrained paper/ink/signal palette); the same numbering sequence continues, unlabeled by a literal `<figure>` wrapper, into the Work and Writing row-lists so the whole page reads as one continuously numbered document.

### Data Rows (Work / Writing lists)
- **Style:** no cards. A `border-y` wrapped list of rows separated by single Rule dividers, each row a three-column grid (figure number · a drawn node/circuit-mark icon · title+description+tags). Tags are small Rule-bordered mono chips, not filled pills.

### Navigation
- **Style:** sticky top bar, Rule-Strong bottom border, Paper background at 95% opacity with backdrop-blur. Links show a mono two-digit index (`01`, `02`…) in Ink ahead of the label in Ink-Soft; a live-pulsing Signal dot sits next to the wordmark at all times. Mobile collapses to a bordered icon-only toggle (drawn menu/close SVGs, never unicode) that reveals a full-width bordered dropdown.

## Do's and Don'ts

### Do:
- **Do** keep Signal red reserved for live/active state only (The One Red Rule).
- **Do** use the FIG. numbering as a continuous document sequence across sections, not a per-section restart.
- **Do** draw all icons as consistent-stroke SVGs (see `src/components/icons.tsx`); never substitute a unicode glyph or emoji.
- **Do** keep every interactive element's focus ring as the 2px Signal outline — it's the one place Signal is allowed outside a "live" reading.

### Don't:
- **Don't** add box-shadows, drop shadows, or hard offset "sticker" shadows anywhere — this world is flat, ruled depth only (see Elevation & Depth).
- **Don't** introduce a serif or italic display face; the No-Serif Rule holds even for a single accent headline.
- **Don't** add rounded corners; every shape in this system is a sharp rectangle.
- **Don't** use a generic kicker/eyebrow label above a heading — the section labels (`About`, `Work`, …) are also live in-page nav anchors, which is why they're exempt, but a decorative eyebrow with no such role has no place here.
- **Don't** render the grid-ground pattern anywhere it isn't grounding an actual canvas/figure surface — it's earned by this world's lab-notebook premise, not a generic texture to reuse elsewhere.
