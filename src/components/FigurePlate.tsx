import type { ReactNode } from "react";

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
  return (
    <figure className={`soft-card overflow-hidden ${className}`}>
      {children}
      <figcaption
        className={`px-4 py-3 text-sm leading-relaxed text-ink-soft ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
