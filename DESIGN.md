---
name: Lakshya Jain — Personal Site
description: A precision-engineered "deployment sheet" — the page unfolds from a compact folded state in one motion, all parallelogram cuts and crease-pattern geometry.
colors:
  sheet: "#f7f7f5"
  panel: "#ffffff"
  ink: "#111315"
  ink-soft: "#5b5f66"
  line: "#dcdcd8"
  line-strong: "#111315"
  gold: "#b08a2e"
  data: "#2657c2"
  mountain: "#9a9da3"
typography:
  display:
    fontFamily: "Big Shoulders, 'Arial Narrow', sans-serif"
    fontWeight: 800
    letterSpacing: "-0.02em"
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontWeight: 400
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontWeight: 400
spacing:
  plate-gap: "2rem"
  section-y: "4rem"
  section-y-lg: "6rem"
components:
  button-gold:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "12px 24px"
  button-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.sheet}"
    typography: "{typography.body}"
    padding: "12px 24px"
  tag-chip:
    backgroundColor: "transparent"
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
    padding: "4px 10px"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "Deployable Sheet"**

The site presents itself as precision-engineered hardware documentation, not a portfolio: every panel is cut like a Miura-fold deployment sheet, and the hero's signature move is a crease-pattern field that grows from a single origin point into a quiet mountain-fold tessellation on load — real SVG geometry, not a decorative loop. The world reads as aerospace-adjacent instrument literature: sheet-white ground, ink-black structure, a single foil-gold accent reserved for primary actions, and a data-blue reserved for live/status values. Corners are never rounded — every edge that isn't a plain rectangle is a deliberate parallelogram cut or a single 45°-notched corner, echoing a folded sheet's own geometry rather than soft app-UI chrome.

This replaces the prior "Live Paper" world (warm cream, serif display, rounded soft-panels, ambient shadows) outright — a full identity change chosen through a structured direction round, not a refinement. Nothing from that world's rounded/serif/shadow language survives here; the only carry-over is the underlying type infrastructure (IBM Plex Mono/Sans, already self-hosted) reused for a genuinely different reason — mono for anything numbered or measured, sans for reading prose. A first pass ran busier than this — two hues in the crease field, the cut motif on every piece of chrome, two separate status readouts on the hero; a simplification pass pulled all three back to the essentials below.

**Key Characteristics:**
- Cut, not rounded: every shape in the system is either a plain rectangle, a symmetric parallelogram cut (buttons, the one Contact/CTA badge), or a single 45° corner notch (panels) — zero border-radius anywhere, and the cut is reserved for actionable elements only, not applied to every piece of chrome.
- One accent, one data color, used sparingly: foil-gold marks primary actions only; data-blue marks genuinely live/status values only — a single hero status line, the Contact "Channel open" line — never a passive list label or a per-row tag.
- Live geometry, not an image: the hero's crease-pattern field is real SVG, grown into place via CSS animation on load — fewer, larger, quieter facets in one tone, receding behind the copy rather than competing with it.
- Flat by default: no box-shadows or ambient elevation anywhere; separation comes from the sheet-white/white contrast, hairline borders, and the gold corner-notch, not from drop shadows.

## Colors

A near-monochrome ground (sheet-white/ink-black) carrying two reserved accents: one for action, one for data.

### Primary
- **Foil Gold** (`#b08a2e`): reserved for primary-action fills only — the nav "Contact" pill, the nav wordmark's monogram badge, the hero's "Deploy" CTA, the Contact section's email-copy button, and the gold corner-notch on every panel. Never used for text on light backgrounds, only as a solid fill paired with ink text.

### Secondary
- **Data Blue** (`#2657c2`): reserved for genuinely live or status values only — the pulsing "Ready" dot and its status line on the Hero, and the "Channel open" line on Contact. Nothing else: not a page tag, not a per-row list label, not a static fact dressed up to look live.

### Neutral
- **Sheet** (`#f7f7f5`): the page ground and the `grid-ground` fill.
- **Panel** (`#ffffff`): every card/panel surface (Hero stage, Figure Plates, data panels) — a step brighter than Sheet so panels read as distinct surfaces without a shadow.
- **Ink** (`#111315`): primary text, all structural rules, and every filled-dark surface (the mobile nav toggle, the hero's secondary CTA).
- **Ink Soft** (`#5b5f66`): secondary text — descriptions, captions, nav links at rest, footer copy, index/row tags, the "Shipped" status word on Work rows.
- **Line** (`#dcdcd8`): hairline dividers (list rows, panel captions, the Contact link row).
- **Mountain** (`#9a9da3`): the hero crease-field's one facet color, varied only by opacity (not hue) between the two fold directions — never used as UI chrome outside that one component.

### Named Rules
**The One Accent, One Data Rule.** Gold means "act on this." Data-blue means "this is live or current, right now." A static label, a passive tag, or a structural element never borrows either color — that is what Ink and Ink Soft are for. A prior pass used Data Blue on page tags and per-row status words; those were never actually live, so they were pulled back to Ink Soft.

## Typography

**Display Font:** Big Shoulders (with "Arial Narrow", sans-serif fallback)
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, monospace fallback)

**Character:** Big Shoulders is a heavy, uppercase-set condensed grotesk — chosen for its industrial-deployment character, not as a default reach. It carries every headline; nothing else in the system uses it. The hero's name is the system's one skewed element (`skewX(-6deg)`, transform-origin bottom-left) — no other headline is ever skewed.

### Hierarchy
- **Display** (800, `text-4xl`–`text-8xl`, uppercase, tight tracking): every section-opening headline (hero name, "A little about me", "Say hello", each subpage's page title) and archive-row titles.
- **Body** (400, `text-sm`–`text-2xl`, Plex Sans): descriptive prose — row descriptions, hero subhead, the About lead paragraph (set larger, at `text-xl`–`text-2xl`, for emphasis), footer copy.
- **Label** (400–600, `text-[11px]`–`text-xs`, Plex Mono, usually uppercase with wide tracking): nav links, status readouts, data-panel field labels (STATUS/FOCUS/LOCATION…), tag chips, citation links.

### Named Rules
**The Two-Family Rule.** Big Shoulders is reserved for headline-scale moments only; Plex Mono is reserved for anything labeled, numbered, or measured; Plex Sans carries everything else. No family substitutes for another.

## Layout

Still a multi-page site: `/` (Hero, About, an index row-list, Contact), `/work`, `/writing`, and `/photobooth` are independently linkable routes, each opening with its own Nav/Footer and a "[0] Back to index" link. Single-column content capped at `max-w-5xl`, centered, `px-4 sm:px-6` margins, `py-16 sm:py-24` section rhythm. The Hero is the one full-bleed exception: a single bordered white stage (`min-h-[560px] sm:min-h-[620px]`) holding the live crease field and hero copy, dominating the first viewport.

No section-number chrome (`FIG. 0X`, `01/02`) survives from the prior world — the earlier ban on decorative sequence numbers is treated as a hard rule here: rows carry a real-word tag (`WORK`, `WRITING`, a date) instead of an arbitrary index.

Responsive behavior stays mobile-first via Tailwind's `sm:` (640px) breakpoint: Nav collapses to an ink-filled parallelogram icon toggle (44×44px, meeting touch-target minimums) revealing a full-width dropdown; index/data rows collapse from a three-column grid to a stacked single column.

## Elevation & Depth

Flat by design: no box-shadows anywhere. Depth and separation come from the sheet-white/white contrast between the page ground and panel surfaces, 1px hairline borders (`Line`/`Ink`), and the gold corner-notch that marks every panel — a paper/instrument-plate material, not a layered app-UI one.

### Named Rules
**The No-Shadow Rule.** Every surface is flat at rest and stays flat on hover; state changes are a translateY lift on buttons, never a shadow.

## Shapes

Cut, never rounded — `border-radius: 0` everywhere. Two cut vocabularies cover the whole system, both reserved for actionable/primary elements only — the nav wordmark badge and the mobile menu toggle are deliberately plain rectangles, not cut, so the motif keeps its meaning:
- **Parallelogram cut** (`.deploy-cut`, 14px symmetric slant on both vertical edges): every primary/secondary button.
- **Small parallelogram cut** (`.deploy-cut-sm`): the nav "Contact" pill — the nav's one actual call to action.
- **Single corner notch** (`.sheet-panel`, one 22px 45° cut at the top-left corner, filled gold): every data panel — Figure Plates, the About stat list, the Contact panel.

## Components

### Buttons
- **Shape:** parallelogram-cut (`.deploy-cut`), no radius, ever.
- **Gold (primary):** Gold fill, Ink text, `12px 24px` padding — the hero's "Deploy" CTA and the Contact email-copy button.
- **Ink (secondary/utility):** Ink fill, Sheet text, same padding — the hero's "Get in touch" and the mobile nav toggle.
- **Hover/Focus:** fill buttons lift (`hover:-translate-y-0.5`), never a color swap or a shadow. `:focus-visible` always gets a 2px Gold outline at 3px offset.
- **Known constraint:** never combine `border` (or `box-shadow`) with a clip-path cut class — the browser clips the border/shadow to the original rectangular box, not the cut polygon, leaving a broken partial outline. Use a solid fill instead of an outline style wherever the cut classes apply.

### Tag Chips
- **Style:** plain rectangle (no cut), 1px Ink border, mono uppercase text — deliberately *not* cut, so the cut motif stays reserved for buttons/panels/badges rather than every small element.

### Data Panels (signature component, `sheet-panel`)
A white panel with a single 45°-notched top-left corner filled Gold, a hairline border, and a mono field-label/value list or figcaption below. Used for the About stat list, the Contact panel, and every Figure Plate (About's live figure, each Photobooth photo).

### Hero Crease Field (signature component, `FoldHero`)
A 4×3 rhombus-tessellation SVG, one Mountain-gray fill varied only by opacity between the two fold directions (no second hue), Ink strokes at low opacity, grown from near-zero scale to full size via one CSS keyframe on load (`fold-deploy`, 1.3s, expo-out) with each facet fading in on a distance-based stagger. Sits at 60% opacity so it reads as ambient texture behind the hero copy, not a competing focal element. Renders at full size immediately under `prefers-reduced-motion: reduce` — no motion, same final state.

### Navigation
- **Style:** sticky, translucent Sheet background (`rgba(247,247,245,.92)`) with backdrop-blur, Line bottom border. Wordmark pairs a plain Gold square monogram badge (not cut — see Shapes) with the Display wordmark. Links are plain uppercase Plex Mono, no index-number prefix. Mobile collapses to a 44×44px plain Ink toggle.

## Do's and Don'ts

### Do:
- **Do** keep Gold reserved for primary-action fills only, and Data Blue reserved for genuinely live/status values only (The One Accent, One Data Rule) — never a passive tag or list label.
- **Do** keep every cut shape at exactly 0 border-radius — parallelogram or single-corner-notch only, never rounded — and reserve the cut for buttons/panels/the nav CTA, not every piece of chrome.
- **Do** fill buttons instead of outlining them when a cut class is involved — border/shadow on a clipped element breaks visibly.
- **Do** reserve the hero name's skew for that one element; every other headline stays upright.
- **Do** keep the crease-field animation as the system's one authored motion moment — don't add a second scroll-triggered reveal elsewhere.
- **Do** default to one status line per surface, not several stacked readouts saying overlapping things.

### Don't:
- **Don't** add a kicker/eyebrow label directly above a heading — a small status readout is only acceptable when it's placed away from the heading and reads as telemetry, never as a title label.
- **Don't** add rounded corners anywhere.
- **Don't** add box-shadows or ambient elevation — depth is border + gold notch only.
- **Don't** reintroduce decorative sequence numbers (`01`, `FIG. 0X`) — a tag carries a real word or date instead.
- **Don't** reintroduce a second hue into the crease field, or apply the cut motif to non-actionable chrome (wordmarks, toggles) — both were tried and pulled back for reading as busy.
