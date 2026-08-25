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
    <figure className={`sheet-panel relative overflow-hidden ${className}`}>
      <span className="absolute right-3 top-3 z-10 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-soft">
        ID {number}
      </span>
      {children}
      <figcaption
        className={`border-t border-line px-5 py-4 font-mono text-xs leading-relaxed text-ink-soft ${captionClassName}`}
      >
        {caption}
      </figcaption>
    </figure>
  );
}
