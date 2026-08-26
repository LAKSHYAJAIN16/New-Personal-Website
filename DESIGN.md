---
name: Lakshya Jain — Personal Site
description: A cozy, Cyworld-minihompy-inspired personal room — a hand-illustrated isometric scene, sage/blush/cream palette, chunky rounded type, fully rounded soft-shadowed cards.
colors:
  bg: "#fff6ec"
  card: "#fffdf8"
  ink: "#4a3b2e"
  ink-soft: "#7a6852"
  line: "#eadcc7"
  sage: "#4f6d59"
  sage-soft: "#dce8df"
  sage-ink: "#ffffff"
  blush: "#f5c9cf"
  blue: "#b7c7d6"
typography:
  display:
    fontFamily: "Baloo 2, ui-rounded, sans-serif"
    fontWeight: 700
  body:
    fontFamily: "Quicksand, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 400
components:
  button-primary:
    backgroundColor: "{colors.sage}"
    textColor: "{colors.sage-ink}"
    typography: "{typography.body}"
    rounded: "9999px"
    padding: "12px 20px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "1.5rem"
    padding: "20px"
  tag-chip:
    backgroundColor: "{colors.sage-soft}"
    textColor: "{colors.ink}"
    rounded: "9999px"
    padding: "4px 10px"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "Minihompy Room"**

The site is a cozy little room you visit, not a resume rendered as a webpage: the hero is a hand-illustrated isometric scene (floor, walls, a window, a plant, an armchair, a record player) sitting right beside the name, and the whole system carries that warmth through — sage green, blush pink, and cream, fully rounded pill buttons and soft-shadowed cards, a chunky rounded display face. It's a direct homage to 2000s Cyworld/minihompy personal-room profile pages: a decorated space that stands in for a person, a "today's mood" line instead of a fabricated stat, a "leave a note" contact section instead of a bare form.

This is the third full visual identity this project has carried in one session, chosen deliberately: two more conventional directions ("Deployable Sheet," a spare editorial "keep it simple" build) were tried and set aside before the user picked this one from a served set of options. It replaces both outright. The room illustration is genuinely hand-built SVG (isometric floor/wall math plus stylized flat props), not a placeholder or a generated asset — there is no image-generation tool in this environment, so every visual element here is real vector code, not a synthetic image standing in for one.

**Key Characteristics:**
- Illustrated, not abstract: the hero's signature is a real drawn isometric room, not a metaphor rendered in typography or a background pattern.
- Rounded everywhere: pill buttons, large soft-cornered cards, a circular nav mark — zero sharp corners anywhere in the system, the direct opposite of every previous world this project carried.
- One warm neutral pair plus three soft accents: cream ground and warm-brown ink carry the page; sage (primary/actionable), blush, and rain-cloud blue stay decorative or secondary, never competing for attention.
- Honest, not fabricated: "Today's mood" is genuine personality copy, not a fake live statistic — the reference world's visitor counter was deliberately not carried over, since this project doesn't fabricate numbers it can't back up.

## Colors

A warm cream-and-brown neutral pair carries the page; sage is the one actionable accent, blush and blue stay quiet.

### Primary
- **Sage** (`#4f6d59`): every actionable element — primary/nav buttons, the "today's mood" and "open to new roles" status dots, link-hover underlines, focus rings, the nav wordmark's circular badge.

### Secondary
- **Blush** (`#f5c9cf`): the armchair in the room illustration and the tag-chip background (`sage-soft` is used for chips instead — blush stays confined to the illustration itself, not spent as UI chrome).
- **Rain-cloud Blue** (`#b7c7d6`): the room illustration's window glass only.

### Neutral
- **Cream ground** (`#fff6ec`): the page background.
- **Card** (`#fffdf8`): every soft-card surface — a hair brighter than the ground so cards read as distinct, lifted surfaces.
- **Ink** (`#4a3b2e`): primary text and headings — warm dark brown, never black.
- **Ink Soft** (`#7a6852`): secondary text — descriptions, captions, nav links at rest. Darkened from an earlier `#8b7a68` draft that measured 3.87:1 against the cream ground; this value clears WCAG AA at 5.0:1.
- **Line** (`#eadcc7`): hairline dividers.
- **Sage Soft** (`#dce8df`): tag-chip fills and the room illustration's left-wall wallpaper.

### Named Rules
**The Illustration Owns Blush and Blue.** Blush pink and rain-cloud blue are the room illustration's own material — the armchair, the window — and are not reused as general UI accent colors. Reaching for them outside the illustration dilutes the one place they're earned.

## Typography

**Display Font:** Baloo 2 (with ui-rounded, sans-serif fallback)
**Body Font:** Quicksand (with ui-sans-serif, system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, monospace fallback) — footer only.

**Character:** Baloo 2 is a chunky, rounded, friendly display face chosen specifically for its soft terminals — it's the typographic equivalent of the room's rounded furniture. Quicksand carries body copy with the same rounded warmth at a readable weight. Both are genuine, sourced, self-hosted Google Fonts, not a system-font fallback standing in for a real choice.

### Hierarchy
- **Display** (700, `text-2xl`–`text-5xl`, Baloo 2): every section-opening headline (hero name, "A little about me," "Leave a note," each subpage's title) and card titles (project/post names, "More to explore" entries).
- **Body** (400–600, `text-sm`–`text-xl`, Quicksand): descriptive prose, the hero subhead, stat-list labels/values.
- **Label** (400, `text-[11px]`, Plex Mono): footer copyright line only — the one deliberate carry-over of a structural mono voice, kept minimal rather than removed outright.

## Layout

Multi-page: `/` (Hero, About, a 3-card "More to explore" grid, Contact), `/work`, `/writing`, and `/photobooth`, each with its own Nav/Footer and a "← Back" link. Single-column content capped at `max-w-3xl`. The Hero is the one two-column exception on `sm:` and up — copy on the left, the illustrated room on the right in its own soft-card frame — collapsing to a single stacked column on mobile.

Nav labels are playful but map to the same routes as always: Room (home/about), Collection (work), Notebook (writing), Photo corner (photobooth), Say hi (contact).

## Elevation & Depth

Soft and real, not flat: every card carries a genuine blurred, offset shadow tinted from Sage (`0 12px 28px -8px rgba(79,109,89,.18)`) — the opposite of every prior flat-by-design world this project tried. Depth is how the room's furniture and the site's cards both read as sitting on/above their ground.

### Named Rules
**The Soft-Shadow Rule.** Every elevated surface uses the same blurred, sage-tinted shadow recipe — no zero-blur "sticker" shadows, no mismatched shadow colors.

## Shapes

Rounded everywhere: `9999px` (full pill) on every button, badge, and the nav mark; `1.5rem` on every card (`.soft-card`). No sharp corners anywhere in the system — a direct, deliberate reversal of both prior worlds this project carried this session.

## Components

### Buttons
- **Shape:** full pill (`rounded-full`), always.
- **Primary:** Sage fill, white text, `12px 20px`–ish padding — nav "Say hi," hero "See my collection," Contact's email-copy button.
- **Hover/Focus:** filled buttons lift (`hover:-translate-y-0.5`); `:focus-visible` gets a 2px Sage outline at 3px offset.

### Soft Cards (signature component, `.soft-card`)
A `1.5rem`-radius card on the `card` surface color with a hairline `line` border and the sage-tinted soft shadow. Used for the hero's room-illustration frame, the About stat list, the Contact panel, every Work/Writing row, every "More to explore" tile, and every Photobooth Figure Plate.

### Isometric Room (signature component, `IsoRoom`)
A hand-built SVG: true isometric floor and two walls computed from shared basis-vector math, a checkerboard floor tile pattern, a window and shelf inset into the walls via the same coordinate interpolation, and a few stylized flat furniture props (armchair, plant, record player) grounded with soft shadow ellipses. This is real vector illustration code, not a generated or placeholder image.

### Navigation
- **Style:** sticky, translucent cream background with backdrop-blur, hairline bottom border. Wordmark pairs a small circular Sage-filled monogram badge with the Baloo 2 wordmark ("Lakshya's room"). Mobile collapses to a circular Sage-soft icon toggle revealing a rounded dropdown panel.

## Do's and Don'ts

### Do:
- **Do** keep every corner rounded — pill on interactive chrome, `1.5rem` on cards, never sharp.
- **Do** keep every card shadow the same sage-tinted, blurred recipe.
- **Do** keep Blush and Blue confined to the room illustration itself, not general UI accent use.
- **Do** keep "today's mood" and similar personality copy genuine and rotating, never a fabricated statistic (no invented visitor counts, no fake acorn currency).

### Don't:
- **Don't** add a sharp corner anywhere.
- **Don't** reintroduce a flat, shadowless card — depth is load-bearing in this world.
- **Don't** spend Blush or Blue as a button/link/badge color outside the illustration.
- **Don't** fabricate a live number (visitor count, guestbook signatures) that isn't real — say something true and warm instead.
