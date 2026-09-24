---
name: Lakshya Jain — Personal Site
description: A typographic personal poster with a monumental lowercase name and compact numbered work.
colors:
  bg: "#ffffff"
  ink: "#171717"
  ink-soft: "#696969"
  line: "#e3e3e3"
  line-strong: "#b8b8b8"
  accent: "#171717"
  accent-soft: "#e9e9e9"
  dark-bg: "#111111"
  dark-ink: "#f5f5f5"
  dark-ink-soft: "#aaaaaa"
  dark-line: "#303030"
  dark-line-strong: "#555555"
  dark-accent: "#ffffff"
  dark-accent-soft: "#333333"
typography:
  display:
    fontFamily: "var(--font-dm-sans), sans-serif"
    fontSize: "clamp(48px, 7vw, 96px)"
    fontWeight: 500
    lineHeight: 1.18
    letterSpacing: "-0.04em"
  title:
    fontFamily: "var(--font-dm-sans), sans-serif"
    fontSize: "26px"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-dm-sans), sans-serif"
    fontSize: "14px"
    lineHeight: 1.65
  label:
    fontFamily: "var(--font-plex-mono), ui-monospace, 'SF Mono', 'Cascadia Mono', Consolas, monospace"
    fontSize: "0.6875rem"
    fontWeight: 500
    letterSpacing: "0.08em"
spacing:
  row: "24px"
  section: "72px"
components:
  project-row:
    textColor: "{colors.ink}"
    padding: "24px 0"
  label:
    textColor: "{colors.ink-soft}"
    typography: "{typography.label}"
---

# Design System: Lakshya Jain — Personal Site

## Overview

**Creative North Star: "Typographic poster"**

The user-selected option 2 makes the name the primary visual event. Broad whitespace, tightly tracked sans-serif type, small mono labels, and compact ruled entries give the personal site a clear hierarchy. This replaces the earlier monospace dev-log direction.

Key characteristics are a monumental lowercase name, a neutral white/black palette, flat content, and a Hindi name swap on hover. Preserve honest placeholders and the existing personal content while developing this visual language.

## Colors

### Primary

Ink carries headings and primary content. Accent stays neutral and controls link interaction and focus; it is not a separate chromatic highlight.

### Neutral

White is the light background. Soft ink carries descriptions and metadata; line separates entries, line-strong supports the name effect, and accent-soft supplies text selection. The `dark-*` primitives replace their matching CSS variables in dark mode. Drive all colors through these shared theme variables.

**The Neutral Palette Rule.** Keep the white, black, and gray character in both themes; the previous gold palette is superseded.

## Typography

DM Sans carries the display, titles, navigation, and body. IBM Plex Mono carries labels and project numbers. The body role above describes project descriptions; other prose uses the existing small-to-base text sizes, with the intro reaching 18px on larger screens.

**The Poster Scale Rule.** The hero intentionally exceeds 96px, reaching the display token's maximum: this is the explicitly selected direction, not an accidental oversized heading. Render the name lowercase with medium weight and tight tracking. Hindi uses the browser's Devanagari fallback, with vertical room for its marks.

Default labels are uppercase. Homepage intro labels override this to lowercase; the work and subsequent content also use tighter tracking (0.025em). Project titles are lowercase. Do not force arbitrary article content into lowercase.

## Layout

The homepage is centered within a 1440px maximum width, with 5vw horizontal padding and 32px top/64px bottom padding. The name spans the top. Beneath it, a compact intro sits left and wrapping section navigation sits right, separated by a 48px gap.

Work experience begins after 88px, followed by projects after 72px. Work experience uses full-width hairline-separated expandable rows: each shows the role and organization together with a plus/minus control at the right, and expanded content sits below the title. Projects use a full-width hairline-separated log: each entry pairs a mono year.month date against the title, description, and plain-text tag/link line, with no expand/collapse. Supporting sections retain a right-aligned column up to 720px wide.

At 700px and below, page padding becomes 24px horizontally, intro and navigation stack, initial content spacing drops to 56px, titles become 22px, and the hero uses `clamp(36px, 9vw, 56px)`. Blog routes retain their own reading layouts.

## Elevation & Depth

Content is flat. Whitespace, typography, and hairlines provide separation without elevated cards, background texture, or gradients. The name's temporary glitch text shadows are an interaction effect, not surface elevation.

## Shapes

Content stays square and unboxed. Thin horizontal rules organize the project log and writing. Tags remain plain text separated by middle dots. Photos are compact, full-color 3:4 thumbnails; no other section carries imagery.

## Components

- **Name:** Two spans share a grid cell. Hover swaps English for Hindi through a half-second stepped glitch; the Hindi span is hidden from assistive technology and marked with its language. Reduced motion replaces the glitch with an opacity transition.
- **Navigation:** Plain small links beneath the name, aligned right on desktop and left on mobile. Hover darkens and underlines them; global keyboard focus uses a visible 2px outline with 2px offset.
- **Experience rows:** `ExpandableRow` client component. Mouse entry opens and exit closes the details. A semantic button toggles on click/tap or Enter/Space, exposes `aria-expanded` and `aria-controls`, and Escape closes. Hidden content is removed from keyboard navigation. Experience descriptions remain honest placeholders unless supplied; Simile includes the supplied multi-agent coordination description and a related-reading link, without implying paper authorship.
- **Project log:** `ProjectsNotebook` client component, always expanded, no toggle. `.project-title` (with the `langBIOS` case-preserve exception `ExpandableRow` also uses) keeps title styling consistent across both components.
- **Supporting sections:** Achievements, writing, photos, and contact retain their existing content and comment-style labels. Writing uses hairline-separated entries; contact gives the email its own line. Unfilled copy and unverified links retain bracketed, muted italic placeholder treatment.
- **Theme toggle:** A small mono text button fixed bottom-right names the destination theme. Selection persists in local storage, with light mode as fallback and an initialization script before first paint.

## Do's and Don'ts

- **Do** preserve the name's dominant scale and the contrast between sans-serif content and mono metadata.
- **Do** preserve mobile stacking, visible focus, reduced-motion behavior, and both themes.
- **Do** retain existing verified content and distinguish placeholders until the user supplies replacements.
- **Don't** restore the obsolete all-monospace, narrow dev-log homepage or gold palette.
- **Don't** turn compact text lists into elevated cards or tag pills.
- **Don't** invent achievements, project claims, social profiles, or personal photo provenance.

## Essays and photo gallery

Writing uses a plain title-and-date list shared by the homepage and /blog. Essay pages have a narrow 720px reading column, restrained headings, paragraph spacing, and a back link. Content remains marked as placeholder until supplied.

The photo section uses an even grid: four columns above 1000px and two on smaller screens, with uniform 3:4 crops. Hover or keyboard focus gently enlarges a photo and reveals its supplied date; touch devices show dates directly. Full captions appear only in the expanded viewer. The basketball image has no supplied date or caption. Reduced motion removes scaling. Clicking a photograph opens a native modal dialog with focus containment, close/Escape, previous/next buttons, and arrow-key navigation. The original photographs are locally stored in public/photos.

## World timeline and pronunciation

/timeline is a world map with a dashed route through Atlanta, Seattle, NYC, Boston, Minneapolis, Chicago, UK, India, and Canada, in that order. The final three are explicitly country-level approximate locations. Accessible stop buttons and previous/next controls select a stop; zoom controls enlarge the scrollable map. The map asset is Ebrahim's CC BY-SA 4.0 equirectangular map, credited on the page. No dates are invented.

The name speaker requests an American English female voice available through browser speech synthesis and speaks the user's supplied pronunciation, Luck-SHaye. Unsupported voices produce a visible status message.

Projects render as a single hairline-separated log, one entry per row: a `YYYY.MM` mono date (the repository's real GitHub creation date, never invented) beside the title, one-line description, and a plain-text tags/link line ("tag · tag — repo →"). No thumbnails, cards, or expand/collapse — carried over from the earlier grid-of-GitHub-preview-card version, which a design critique flagged for contradicting the flat/unboxed system and for depending on a live, rate-limited external image host with no fallback. The curated list is sourced from public GitHub repository metadata and READMEs. Contact uses brand SVGs with visible names and the full email, in one row when space permits and wrapping on mobile.
