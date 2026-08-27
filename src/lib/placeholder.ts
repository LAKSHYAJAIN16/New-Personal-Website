// Bracketed copy like "[Write two or three sentences...]" marks honest
// placeholder content (see PRODUCT.md) rather than a real fact. Styling it
// distinctly (italic, muted) makes that intentional instead of reading as
// broken or forgotten text.
export function isPlaceholder(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
}

// Full-opacity ink-soft (not a lower-opacity variant): ink-soft on the
// cream background measures ~5.0:1, already the site's muted-text color.
// Reducing its opacity further to look "extra faded" was tested and drops
// it to ~3.4:1, below WCAG AA -- italics alone carry the "placeholder" read.
export const placeholderClass = "italic text-ink-soft";
