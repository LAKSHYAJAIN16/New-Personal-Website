import type { ReactNode } from "react";

type FigurePlateProps = {
  number: string;
  caption: ReactNode;
  children: ReactNode;
  className?: string;
  captionClassName?: string;
};

export function FigurePlate({
  number,
  caption,
  children,
  className = "",
  captionClassName = "",
}: FigurePlateProps) {
  return (
    <figure className={`soft-panel relative overflow-hidden ${className}`}>
      <span className="absolute left-4 top-4 z-10 rounded-full bg-signal px-2.5 py-1 text-xs font-semibold text-signal-ink">
        {number}
      </span>
      {children}
      <figcaption
        className={`border-t border-rule px-5 py-4 text-xs leading-relaxed text-ink-soft ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
