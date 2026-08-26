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

The homepage IS the room: a full-viewport, hand-illustrated isometric scene you click and walk around, not a resume rendered as a webpage. The room is the site's entire navigation — a project-portrait gallery on one wall links to individual projects, a notebook opens Writing, a mail slot opens Contact, a window opens About, a photo frame opens Photobooth — while a jukebox and a bookshelf are pure personality (now-playing / currently-reading), never fake stats. A small acorn character can be walked around the floor with arrow keys or by clicking a tile. A deliberately plain "I'm a recruiter — stop the LARP" button swaps the whole thing for a bare, static fallback: name, role, one line, a plain list of links, a résumé link. It's a direct homage to 2000s Cyworld/minihompy personal-room profile pages: a decorated space that stands in for a person.

This is the third full visual identity this project has carried in one session (two more conventional directions were tried and set aside before the user picked this one from a served set of options), and within it the room itself went through several iterations in the same conversation: first a small card beside hero text, then a full-page illustration, then this fully interactive, content-driven version. The room illustration is genuinely hand-built SVG (parametric isometric floor/wall math, tile-count-driven so the room can grow, plus stylized flat props) — there is no image-generation tool in this environment, so every visual element is real vector code, not a synthetic image standing in for one.

**Key Characteristics:**
- The room is the navigation, not a decoration: every real destination (About, Work, Writing, Photos, Contact) is reached by clicking a specific piece of furniture, not a nav-bar-only pattern layered on top.
- Illustrated, not abstract: the site's signature is a real drawn, walkable isometric room, not a metaphor rendered in typography or a background pattern.
- Rounded everywhere: pill buttons, large soft-cornered cards, a circular nav mark — zero sharp corners anywhere in the system.
- One warm neutral pair plus three soft accents: cream ground and warm-brown ink carry the page; sage (primary/actionable), blush, and rain-cloud blue stay decorative or secondary, never competing for attention.
- Honest, not fabricated: the jukebox and bookshelf show genuine bracketed placeholder copy ("[Song] by [Artist]", "[Book Title]"), not a fake live statistic — this project doesn't invent numbers or activity it can't back up.
- A quiet, real escape hatch: the recruiter fallback is one plain button, not a second theme to maintain — it reuses the same tokens, just with all illustration and interaction stripped out.

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

`/` is the room and nothing else: a full-viewport (`h-screen`) SVG filling almost the entire frame inside one `soft-card` border, with just a small header (the recruiter-fallback button) above it. `/about`, `/work`, `/writing`, `/photobooth`, and `/contact` are all separate routes, each with its own Nav/Footer/"← Back" link and single-column content capped at `max-w-3xl` — the same template every subpage has shared since the very first version of this site.

Nav links are plain now (Room, About, Work, Writing, Photos, Say hi) — the playful renaming from the previous room iteration was dropped once the room itself became the primary navigation and the nav bar's job narrowed to "get back to a specific page fast."

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
A hand-built, parametric SVG: floor and two walls generated from a tile size × tile count (currently 14×8), so the room's proportions and density are a formula, not hand-tuned pixels — this is what let the room grow from a small hero card to a full-viewport landscape scene without redrawing it by hand. A checkerboard floor tile grid doubles as click-to-move targets. Furniture is placed with the same `floorPoint(u, v)` fractional-coordinate helper the floor tiles use, so props stay correctly grounded regardless of room size.

### Interactive Hotspots
Real `<a>` elements layered over specific furniture (never the floor or walls), keyboard-focusable by default: a project-portrait gallery (right wall, one per project, pulled live from the projects data — no fixed count assumed), a notebook (Writing), a mail slot (Contact), a window (About), and a photo frame (Photobooth). Hover or focus reveals a stroke highlight plus a small dark label pill naming the destination — nothing is a hotspot without that same two-part affordance.

### Info Props (no link)
The jukebox and bookshelf are pure personality, not navigation: a persistent label pill above each ("Playing: [Song] by [Artist]", "Reading: [Book Title]") shown at rest, not hidden behind hover — these are honest bracketed placeholders, the same convention as every other unfilled fact on the site.

### The Acorn (signature component)
A small round character with a cap, walkable across the floor grid with arrow keys/WASD (one tile per keypress) or by clicking any tile directly. Purely decorative — it never blocks or represents a hotspot.

### Recruiter Fallback (`SimpleFallback`)
A single plain, static screen: name, role, one line, a row of plain text links to every real page, a résumé link, and a "← Back to the room" link. No illustration, no cards, no rounded pills beyond what the shared tokens already give links — reached via the room's one small header button, and remembered per-browser via `localStorage` so a returning visitor who already opted out isn't dropped back into the room.

### Navigation
- **Style:** sticky, translucent cream background with backdrop-blur, hairline bottom border. Wordmark pairs a small circular Sage-filled monogram badge with the Baloo 2 wordmark ("Lakshya's room"). Mobile collapses to a circular Sage-soft icon toggle revealing a rounded dropdown panel. Only appears on the five subpages — the room's homepage has no nav bar, since the room itself is the navigation.

## Do's and Don'ts

### Do:
- **Do** keep every corner rounded — pill on interactive chrome, `1.5rem` on cards, never sharp.
- **Do** keep every card shadow the same sage-tinted, blurred recipe.
- **Do** keep Blush and Blue confined to the room illustration itself, not general UI accent use.
- **Do** keep personality copy (now-playing, currently-reading) genuine and bracketed, never a fabricated statistic (no invented visitor counts, no fake acorn currency).
- **Do** give every real navigation hotspot both a hover/focus highlight and a label pill — an invisible clickable prop is a defect, not a subtle affordance.
- **Do** keep the recruiter fallback genuinely plain — it exists specifically to not be the room, so no cards, no illustration, no pills borrowed back in.

### Don't:
- **Don't** add a sharp corner anywhere.
- **Don't** reintroduce a flat, shadowless card — depth is load-bearing in this world.
- **Don't** spend Blush or Blue as a button/link/badge color outside the illustration.
- **Don't** fabricate a live number (visitor count, guestbook signatures) that isn't real — say something true and warm instead.
- **Don't** hardcode room geometry as magic pixel numbers — derive furniture and hotspot positions from `floorPoint`/`leftWallPoint`/`rightWallPoint` so the room stays editable by changing tile size/count, not by redrawing shapes.
