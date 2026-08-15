"use client";

import { motion } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="px-6 py-32">
      <div className="mx-auto max-w-4xl">
        <Reveal>
          <h2 className="font-display text-3xl italic text-muted">
            Projects
          </h2>
        </Reveal>

        <RevealGroup className="mt-10 flex flex-col" stagger={0.1}>
          {projects.map((project) => (
            <motion.a
              key={project.title}
              href={project.href}
              variants={revealItem}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group relative flex items-center justify-between gap-6 border-b border-border py-8 first:border-t"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <h3 className="text-2xl font-medium text-foreground transition-colors sm:text-3xl">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-muted">
                    {project.year}
                  </span>
                </div>
                <p className="mt-2 max-w-md text-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface px-3 py-1 text-xs text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <motion.span
                variants={{
                  rest: { x: 0, opacity: 0.4 },
                  hover: { x: 8, opacity: 1 },
                }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 text-3xl text-accent"
              >
                →
              </motion.span>
            </motion.a>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
