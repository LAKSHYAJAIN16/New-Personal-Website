"use client";

import { projects } from "@/data/projects";

export function WorkSection() {
  return (
    <section id="work" className="py-14 border-t border-border/80">
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-8">
        SELECTED WORK & PROJECTS
      </div>

      <div className="space-y-10">
        {projects.map((project) => (
          <div
            key={project.id}
            className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-start pb-8 border-b border-border/60 last:border-b-0"
          >
            <div>
              <div className="flex items-baseline gap-3">
                <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                  <a href={project.href} target="_blank" rel="noopener noreferrer">
                    {project.title}
                  </a>
                </h3>
                <span className="font-mono text-xs text-muted">{project.year}</span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-muted-foreground font-sans max-w-2xl">
                {project.description}
              </p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-[#F5F1E8] px-2.5 py-0.5 text-xs font-mono text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3">
              {project.metrics && (
                <span className="font-mono text-xs text-accent bg-accent-subtle px-2.5 py-1 rounded">
                  {project.metrics}
                </span>
              )}
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent text-sm font-sans hover:underline"
              >
                View ↗
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
