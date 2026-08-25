import { projects } from "@/data/projects";
import { ArrowIcon } from "./icons";

export function Projects() {
  return (
    <section id="work" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="display-face mb-10 text-4xl text-ink sm:text-5xl">Work</h1>

        <div className="border-t border-line-strong">
          {projects.map((project) => (
            <a
              key={project.figure}
              href={project.href}
              className="group grid grid-cols-1 gap-3 border-b border-line px-1 py-6 last:border-b-0 sm:grid-cols-[7rem_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
            >
              <span className="status-ready font-mono text-xs uppercase tracking-wide">
                Shipped
              </span>

              <div className="min-w-0">
                <h3 className="display-face text-2xl text-ink sm:text-3xl">{project.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{project.description}</p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-line-strong px-2.5 py-1 font-mono text-[11px] font-semibold uppercase tracking-wide text-ink-soft"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <span className="inline-flex items-center gap-1 self-start font-mono text-[11px] font-semibold uppercase tracking-wide text-ink opacity-0 transition-opacity group-hover:opacity-100 sm:self-center">
                Open <ArrowIcon className="h-3 w-3" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
