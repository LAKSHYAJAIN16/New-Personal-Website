import type { ReactNode } from "react";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

type FigurePlateProps = {
  number: string;
  caption: ReactNode;
  children: ReactNode;
  className?: string;
  captionClassName?: string;
};

export function FigurePlate({
  caption,
  children,
  className = "",
  captionClassName = "",
}: FigurePlateProps) {
  const captionIsPlaceholder = typeof caption === "string" && isPlaceholder(caption);

  return (
    <figure className={`soft-card overflow-hidden ${className}`}>
      {children}
      <figcaption
        className={`px-4 py-3 text-sm leading-relaxed ${captionIsPlaceholder ? placeholderClass : "text-ink-soft"} ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
