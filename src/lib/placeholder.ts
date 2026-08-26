// Bracketed copy like "[Write two or three sentences...]" marks honest
// placeholder content (see PRODUCT.md) rather than a real fact. Styling it
// distinctly (italic, muted) makes that intentional instead of reading as
// broken or forgotten text.
export function isPlaceholder(text: string): boolean {
  const trimmed = text.trim();
  return trimmed.startsWith("[") && trimmed.endsWith("]");
}

export const placeholderClass = "italic text-ink-soft/80";
