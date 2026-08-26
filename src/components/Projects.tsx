import { projects } from "@/data/projects";
import { ArrowIcon } from "./icons";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

export function Projects() {
  return (
    <section id="work" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-face text-2xl text-ink sm:text-3xl">My collection</h1>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">
          A few things I&apos;ve built and kept on the shelf.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {projects.map((project) => (
            <a
              key={project.figure}
              href={project.href}
              className="soft-card group flex items-start justify-between gap-4 px-5 py-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <h3 className={`display-face text-lg ${isPlaceholder(project.title) ? placeholderClass : "text-ink"}`}>
                  {project.title}
                </h3>
                <p className={`mt-1 text-sm leading-relaxed text-ink-soft ${isPlaceholder(project.description) ? "italic" : ""}`}>
                  {project.description}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-sage-soft px-2.5 py-1 text-xs text-ink"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sage" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
