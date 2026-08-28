---
name: Lakshya Jain — Personal Site
description: A 90s NYC coffeehouse hangout — latte-cream ground and coffee-brown ink carry the page, a chalkboard menu board doubles as real navigation, chalk-script headlines and order-ticket type, genre-inspired without literal show branding.
colors:
  bg: "#f4e6cf"
  card: "#fffaf0"
  ink: "#3a2317"
  ink-soft: "#7a5b45"
  line: "#e0c79a"
  terracotta: "#c1502e"
  terracotta-strong: "#9c3d20"
  mustard: "#f3dfae"
  brick: "#b5624a"
  chalk: "#2c4a37"
typography:
  display:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(2.25rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "normal"
  headline:
    fontFamily: "Caveat, cursive"
    fontSize: "clamp(1.5rem, 3vw, 1.875rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "IBM Plex Sans, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "IBM Plex Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.03em"
rounded:
  sm: "0.375rem"
  md: "0.75rem"
  full: "9999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.terracotta}"
    textColor: "#fff8ec"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "8px 16px"
  button-quiet:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.sm}"
    padding: "6px 12px"
  card:
    backgroundColor: "{colors.card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "20px 20px"
  menu-board:
    backgroundColor: "{colors.chalk}"
    textColor: "{colors.mustard}"
    typography: "{typography.headline}"
    rounded: "{rounded.md}"
    padding: "40px 40px"
  tag-chip:
    backgroundColor: "{colors.mustard}"
    textColor: "{colors.ink}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "4px 10px"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "Lakshya's Table"**

The homepage is a warm cafe table: a hand-lettered name sign, a one-line order-ticket bio clipped like a printed chit, a steaming coffee-cup mark, and a chalkboard menu board that lists every real section — About, Work, Writing, Photos, Say hi — the way a cafe lists its drinks. The chalkboard *is* the site's primary navigation, not a decoration beside it. This is the third full visual identity this project has carried in one session; it replaces both an isometric "room" world and a templated gradient-hero portfolio tried earlier, in favor of a genre the user pinned directly: a 90s NYC coffeehouse hangout. The genre is expressed through material (chalkboard, order tickets, corduroy-couch terracotta, brick, photo-strip framing) rather than through any literal show asset — no trademarked logo, character name or likeness, or title typeface appears anywhere in the shipped UI.

The system is deliberately warm and communal rather than slick: flat color fields carry real (not faked-photorealistic) offset and blur shadows, the display face is a genuine chalk-marker script rather than the generic AI-cream-plus-serif pairing, and the one hard, printed-ticket-style shadow is earned narrowly by the order-ticket vocabulary rather than applied as a general "brutalist" habit. A separate, deliberately plain recruiter fallback (`SimpleFallback`) strips all of this chrome back to the shared base tokens only — proof the coffeehouse dressing is a world choice, not the only way the content can be read.

**Key Characteristics:**
- The chalkboard is the navigation: every real destination is a menu-board row, not a nav-bar-only pattern layered on top of separate page content.
- One actionable accent: corduroy-couch terracotta carries every button, link-hover, and focus ring; mustard and chalkboard-green stay confined to their own materials (tags/chips, and the menu board itself).
- Chalk script for signage, not for prose: Caveat appears on headlines, titles, and the menu board; body copy is always IBM Plex Sans.
- Order-ticket mono: IBM Plex Mono marks only printed-ticket/receipt-style microcopy (the bio line, "TABLE STILL OPEN," the menu subhead, the footer stub) — not a general technical-label device.
- Soft by default, hard by exception: elevated surfaces (cards, the menu board) use blurred, coffee-tinted shadows; only the ticket-style buttons use a hard, zero-blur offset shadow, because they represent a literal printed chit.
- Honest, not fabricated: bracketed placeholder copy (`[One precise line on what you build and why.]`) is styled distinctly (italic, muted) rather than hidden or faked with invented specifics — a convention that predates this redesign and carries forward unchanged.

## Colors

A warm latte-cream-and-coffee-brown neutral pair carries the page; terracotta is the one actionable accent, and the remaining hues stay confined to the single material each names.

### Primary
- **Corduroy Terracotta** (`#c1502e`): the one actionable accent — every `ticket-btn` fill, the nav "Say hi" CTA, the nav wordmark's circular monogram badge, and the `link-underline` hover color.
- **Terracotta Strong** (`#9c3d20`): the deep companion shade — `ticket-btn`'s hard offset shadow and pressed state, the `:focus-visible` outline color sitewide, the scrollbar thumb, and the "open to new roles" live-status dot.

### Secondary
- **Mustard Cream** (`#f3dfae`): tag-chip fills, the menu board's title/label/note text and dashed row dividers, the `.chalk-highlight` fill-in behind emphasized inline text, and the mobile nav toggle's background.

### Tertiary
- **Chalkboard Green** (`#2c4a37`): confined entirely to the `.menu-board` background — the site's real navigation surface — and never used anywhere else.
- **Brick** (`#b5624a`): declared as a token in `globals.css` per the direction contract's coffeehouse material list, but not yet spent on any shipped surface. Documented here so it isn't rediscovered as dead code or mistakenly repurposed as a general accent — if a brick-material surface is added later, it should be the only place this color appears.

### Neutral
- **Latte Cream** (`#f4e6cf`): the page background (`--bg`) — warm without leaning on a serif-plus-cream cliché, since the display face here is a script, not a serif.
- **Card Cream** (`#fffaf0`): every `.soft-card` surface — a hair brighter than the page ground so cards read as distinct, lifted surfaces.
- **Coffee Ink** (`#3a2317`): primary text and headings.
- **Ink Soft** (`#7a5b45`): secondary text — descriptions, captions, order-ticket labels, nav links at rest.
- **Line** (`#e0c79a`): hairline dividers, card borders, dashed rules.

### Named Rules
**The One Accent Rule.** Terracotta (and its strong companion) is the only color used for actionable UI — buttons, link hovers, focus rings, status dots. Mustard, chalk, and brick are never substituted in for it; each stays confined to the one material it names.

## Typography

**Display Font:** Caveat (with cursive fallback)
**Body Font:** IBM Plex Sans (with ui-sans-serif, system-ui, sans-serif fallback)
**Label/Mono Font:** IBM Plex Mono (with ui-monospace, SFMono-Regular, monospace fallback)

**Character:** Caveat is a genuine hand-lettered chalk-marker script, self-hosted via `next/font/google`, used for every piece of display lettering — it reads as chalk on a board, not as a decorative accent font layered over a conventional layout. IBM Plex Sans carries all prose at a plain, readable weight, and IBM Plex Mono is reserved specifically for printed-ticket/receipt-style microcopy, echoing an order pad rather than a generic "code" or "technical" register.

### Hierarchy
- **Display** (700, `text-4xl`–`text-7xl` / 2.25rem–4.5rem, `leading-none`, Caveat): the homepage hero name only — the single largest, loudest use of the chalk script.
- **Headline** (700, `text-2xl`–`text-5xl`, Caveat): every page's opening title (About, Work, Writing, Contact, the recruiter fallback's name) — one script headline per screen.
- **Title** (700, `text-2xl`–`text-3xl`, Caveat): the menu board's "The Menu" title, each menu-item's row label, the nav wordmark, and card titles (project/post names) inside `.soft-card` rows.
- **Body** (400–600, `text-sm`–`text-xl`, `leading-relaxed`, IBM Plex Sans): descriptive prose, section subheads, stat labels/values, chip text.
- **Label** (400–500, `text-[10px]`–`text-xs`, tracking-wide, IBM Plex Mono, tabular numerals): the bio pull-quote, "TABLE STILL OPEN," the menu board's "EVERYTHING ON THIS SITE, TODAY" subhead, and the footer copyright stub. Labels are typed in literal capitals as copy where shown in caps — there is no sitewide `text-transform: uppercase` rule.

### Named Rules
**The Script-Stays-Loud Rule.** Caveat is reserved for headlines, titles, and signage-scale labels; it never sets continuous paragraph text. Body copy is always IBM Plex Sans.
**The Ticket-Register Rule.** IBM Plex Mono marks printed-ticket/receipt-style microcopy specifically (order lines, table-status, menu subheads, the footer stub) — it is not a general "technical" or "code" label device, and shouldn't be reached for outside that register.

## Layout

Every page — including the homepage — is capped at `max-w-3xl` and centered, with `px-4 py-8`/`sm:px-8 sm:py-12` framing on the homepage and `px-4 py-14`/`sm:px-6 sm:py-20` on subpages; there is no full-bleed section anywhere. The homepage (`RealHome`) stacks two blocks in that single column: a `.soft-card` hero panel (name, coffee-cup mark, order-ticket bio line, one chalk-highlighted credential) directly above the `.menu-board`, which lists every real section as a clickable row. Subpages (`/about`, `/work`, `/writing`, `/photobooth`, `/contact`) follow the same column with a page-title headline, then a stack of `.soft-card` rows or a `soft-card` detail panel.

`Nav` is sticky (`sticky top-0 z-40`) with a translucent, blurred background (`bg-bg/95 backdrop-blur`) and a hairline bottom border; it collapses at the `sm` breakpoint (640px) from inline links + a `ticket-btn` CTA into a circular mustard toggle that reveals a bordered dropdown panel. `Footer` is a single hairline-topped row that stacks on mobile and sits side-by-side above `sm`. The recruiter fallback (`SimpleFallback`) drops the column/card structure entirely for a single centered, vertically-stacked block with no nav or footer chrome.

## Elevation & Depth

This is a hybrid system: most elevated surfaces (cards, the menu board) use soft, blurred, coffee-tinted shadows to feel like paper pinned above the table; only the order-ticket button vocabulary uses a hard, zero-blur offset shadow, because it represents a literal printed chit rather than a lifted card. The two are never mixed on the same element.

### Shadow Vocabulary
- **Pinned-paper** (`box-shadow: 0 14px 28px -10px rgba(58, 35, 23, 0.28)`): `.soft-card`'s resting shadow, paired with a small terracotta "push-pin" dot pseudo-element at the top-left corner — the card reads as a photo or note pinned above the table, not a flat rectangle.
- **Chalkboard-hung** (`box-shadow: 0 16px 32px -14px rgba(58, 35, 23, 0.5)`): `.menu-board`'s heavier, darker shadow, paired with a thick 10px solid wood-frame border (`#6b4a30`) — the board reads as a physically heavier object than a card.
- **Ticket-chit (hard, exception only)** (`box-shadow: 0 3px 0 var(--terracotta-strong)`, collapsing to `0 1px 0` with a `translateY(2px)` press on hover/focus): `.ticket-btn`'s resting and pressed states — a die-cut order-ticket affordance, scoped exclusively to ticket-style buttons.

### Named Rules
**The Soft-By-Default Rule.** General elevation (cards, the menu board) is always a blurred, coffee-tinted offset shadow — never a hard, zero-blur edge.
**The Printed-Ticket Exception.** The one hard, zero-blur offset shadow in the system (`0 3px 0 var(--terracotta-strong)`) is scoped exclusively to `.ticket-btn` / `.ticket-btn-quiet`, because it represents a literal order-ticket or menu-chit object this world already names. It is not a general "this project uses hard shadows" style — this world is coffeehouse/paper, not neobrutalist, and the exception must not be generalized to any other surface.

## Shapes

Two corner languages coexist deliberately: a tight `0.375rem` radius on ticket-style rectangles (`.ticket-btn`, its quiet variant, the mobile nav dropdown's link rows) reads as a die-cut chit, while a softer `0.75rem` radius on larger surfaces (`.soft-card`, `.menu-board`) reads as a rounded paper or board edge. Full pills (`9999px`) are reserved for badge-like, non-rectangular chrome: tag chips, the nav's circular monogram badge, the mobile nav toggle, and status dots. Nothing in the system uses a sharp, unrounded corner.

## Components

### Buttons
- **Shape:** `0.375rem` radius rectangle (a die-cut ticket chit), never a pill.
- **Primary (`ticket-btn`):** terracotta fill, `#fff8ec` text, hard `0 3px 0 var(--terracotta-strong)` shadow at rest. Padding varies by call site (`8px 16px` on the nav CTA, `12px 20px` on the Contact email button).
- **Hover/Focus:** the button presses down — `translateY(2px)` and the shadow collapses to `0 1px 0`, transitioning over `0.15s ease`.
- **Quiet/Ghost (`ticket-btn-quiet`):** card-surface fill, ink text, `1px` line border, no shadow, no press animation (`transform: none` on hover/focus) — used for the recruiter "skip to the plain page" toggle, a deliberately lower-emphasis action next to the primary CTA vocabulary.
- **Link-style:** `.link-underline` — a terracotta underline that grows from 0% to 100% width (2px thick) on hover, used for all inline nav/footer links and for every link on the chrome-free recruiter fallback screen.

### Chips
- **Style:** `9999px` pill, mustard background, ink text, `4px 10px` padding, `text-xs` IBM Plex Sans — used for project tag chips only.
- **State:** display-only; no selected/unselected or filter variant exists in the shipped site.

### Cards / Containers
- **Corner Style:** `0.75rem` radius.
- **Background:** card cream (`#fffaf0`) on a `1px` line border.
- **Shadow Strategy:** the pinned-paper shadow (see Elevation & Depth) plus a small terracotta push-pin dot pseudo-element near the top-left corner — the signature `.soft-card` detail that distinguishes it from a generic elevated rectangle.
- **Internal Padding:** varies by role — `20px 20px` on Work/Writing rows, up to `32px 40px`–`40px 56px` on the Contact panel and the homepage hero panel.

### Navigation
- **Style:** sticky, translucent latte-cream background with backdrop blur and a hairline bottom border. The wordmark pairs a small circular terracotta monogram badge ("L", set in Caveat) with a Caveat wordmark ("Lakshya's table"). Desktop links use `.link-underline`; the CTA is a full `ticket-btn`. Mobile collapses the link row into a circular mustard toggle button that reveals a bordered dropdown panel of plain rounded-`0.375rem` link rows plus a full-width `ticket-btn` CTA.

### Menu Board (signature component, `.menu-board`)
The site's real primary navigation, styled as a cafe chalkboard drink list rather than a conventional nav grid. Chalkboard-green background, a thick 10px solid wood-frame border, and the chalkboard-hung shadow (see Elevation & Depth). A Caveat title ("The Menu") and a mono, mustard-toned subhead ("EVERYTHING ON THIS SITE, TODAY") sit above a list of menu-item rows separated by dashed mustard-tinted dividers; each row is a real `<Link>` pairing a Title-tier label (cream at rest, mustard on hover) with a smaller mustard-toned note line and an arrow icon that nudges up-and-right on hover/focus. This is the component that carries the whole coffeehouse metaphor — every other component is quieter than this one by design.

### Coffee Cup Mark (signature component)
An outline SVG coffee cup — card-fill body, ink stroke, a terracotta rim stroke — with three animated steam paths that rise and fade on a staggered loop (disabled under `prefers-reduced-motion`). Purely decorative, paired with the mono "TABLE STILL OPEN" label beside the hero heading (never above it — see Do's and Don'ts).

### Order-Ticket Bio Line (signature detail)
A dashed-left-border pull-quote block (`border-l-2 border-dashed border-line`) set in IBM Plex Mono, styled like a printed order chit clipped to the table edge. Carries the site's one-line bio, including its honest-placeholder state.

## Do's and Don'ts

### Do:
- **Do** keep terracotta (`#c1502e`) as the only actionable-accent color — buttons, link-hovers, focus rings, and status dots. Mustard, chalk, and brick stay confined to their own named materials.
- **Do** scope the hard `0 3px 0` ticket-chit shadow to `.ticket-btn`/`.ticket-btn-quiet` only. All other elevation stays soft and blurred.
- **Do** reserve IBM Plex Mono for printed-ticket/receipt-register microcopy (bio lines, table-status labels, menu subheads, the footer stub) — not a general technical-label typeface.
- **Do** keep Caveat (`.display-face`) to headlines, titles, and signage-scale labels only; body copy is always IBM Plex Sans.
- **Do** style honest placeholder copy in italic, muted ink-soft (`placeholderClass`) wherever real content is missing, per the `isPlaceholder` convention — never fill a gap with an invented specific.
- **Do** keep the recruiter fallback (`SimpleFallback`) genuinely chrome-free: base tokens and `.link-underline` only, no `.soft-card`, `.menu-board`, or `.ticket-btn` vocabulary borrowed back in.

### Don't:
- **Don't** place a label or eyebrow above an `<h1>`. An earlier draft put the "TABLE STILL OPEN" label above the hero heading; it was corrected to sit beside/under the coffee-cup mark instead. The heading is always the first thing read.
- **Don't** apply the ticket-chit's hard offset shadow to `.soft-card`, `.menu-board`, or any other surface — this world is coffeehouse/paper, not neobrutalist, and the hard shadow is earned only by the literal order-ticket vocabulary.
- **Don't** spend chalkboard-green or brick outside the one material each is confined to (chalk = `.menu-board` only; brick is currently unused and reserved) — never repurpose either as a general UI or button color.
- **Don't** introduce any literal show-branded asset — logo, character name or likeness, or the show's title typeface. The genre (coffeehouse, brick, couch terracotta, chalkboard, photo-strip framing) carries the reference; no trademarked asset does.
