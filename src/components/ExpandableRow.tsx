"use client";

import { useId, useState, type ReactNode } from "react";

export function ExpandableRow({ title, meta, children }: { title: string; meta?: string; children: ReactNode }) {
  const id = useId();
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="expandable-row"
      onPointerEnter={(event) => {
        if (event.pointerType === "mouse") setExpanded(true);
      }}
      onPointerLeave={(event) => {
        if (event.pointerType === "mouse") setExpanded(false);
      }}
      onKeyDown={(event) => {
        if (event.key === "Escape") setExpanded(false);
      }}
    >
      <h3>
        <button
          type="button"
          className="expandable-trigger"
          aria-expanded={expanded}
          aria-controls={id}
          onClick={() => setExpanded((value) => !value)}
        >
          <span className={`project-title${title === "langBIOS" ? " project-title-preserve-case" : ""}`}>
            {title}
            {meta && <span className="ml-3 inline-block text-sm font-normal tracking-normal text-ink-soft">{meta}</span>}
          </span>
          <svg className={`expandable-icon${expanded ? " is-open" : ""}`} width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" aria-hidden="true">
            <path d="M3 8h10" />
            <path className="expandable-icon-vertical" d="M8 3v10" />
          </svg>
        </button>
      </h3>
      <div id={id} aria-hidden={!expanded} className={`expandable-content${expanded ? " is-open" : ""}`}>
        <div className="expandable-content-inner" inert={!expanded ? true : undefined}>
          {children}
        </div>
      </div>
    </div>
  );
}
