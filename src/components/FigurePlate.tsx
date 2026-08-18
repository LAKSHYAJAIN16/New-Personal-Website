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
    <figure className={`relative border border-rule-strong ${className}`}>
      <span className="absolute -top-3 left-4 bg-paper px-2 font-mono text-xs font-medium tracking-wide text-ink">
        FIG. {number}
      </span>
      {children}
      <figcaption
        className={`border-t border-rule-strong px-4 py-3 font-mono text-xs leading-relaxed text-ink-soft ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
