"use client";

import { useRef, useState } from "react";
import { projects } from "@/data/projects";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

export function ProjectGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const project = projects[active];
  const navigate = (direction: number) => setActive((index) => (index + direction + projects.length) % projects.length);

  return (
    <>
      <div className="project-grid">
        {projects.map((item, index) => (
          <button
            key={item.title}
            type="button"
            className="project-tile"
            aria-label={`View ${item.title} project details`}
            onClick={() => { setActive(index); dialog.current?.showModal(); }}
          >
            <img src={item.image} alt="" className="project-tile-image" loading="lazy" />
            <span className="project-tile-label">{item.title}</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog project-dialog"
        aria-label="Project viewer"
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
        }}
      >
        <div className="gallery-viewer">
          <div className="gallery-toolbar">
            <span aria-live="polite">{active + 1} / {projects.length}</span>
            <button type="button" onClick={() => dialog.current?.close()} autoFocus>close</button>
          </div>
          <img src={project.image} alt={`${project.title} project preview`} className="project-dialog-image" />
          <h3 className="project-title mt-4">{project.title}</h3>
          <p className={`project-description mt-2 ${isPlaceholder(project.description) ? placeholderClass : "text-ink-soft"}`}>
            {project.description}
          </p>
          <p className="label mt-3 text-ink-soft">{project.tags.join(" · ")}</p>
          <a href={project.href} className="mt-4 inline-block text-ink">view project &rarr;</a>
          <div className="gallery-toolbar gallery-bottom mt-4">
            <button type="button" onClick={() => navigate(-1)} aria-label="Previous project">&larr; previous</button>
            <button type="button" onClick={() => navigate(1)} aria-label="Next project">next &rarr;</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
