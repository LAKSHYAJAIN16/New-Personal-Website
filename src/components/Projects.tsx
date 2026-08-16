"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { projects, ProjectCategory } from "@/data/projects";

const categories: ProjectCategory[] = ["All", "Full Stack", "AI & Systems", "Tools"];

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <Reveal>
            <div>
              <h2 className="font-display text-3xl italic text-muted">Projects</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Selected systems, tools, and web applications I&apos;ve built.
              </p>
            </div>
          </Reveal>

          {/* Category Filters */}
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-1.5 font-mono text-xs">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`rounded-full px-3.5 py-1.5 transition-all ${
                    selectedCategory === cat
                      ? "bg-accent text-background font-semibold shadow-md"
                      : "border border-border bg-surface text-muted hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Projects Cards */}
        <RevealGroup className="mt-10 grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                variants={revealItem}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-border/80 bg-surface/60 p-6 backdrop-blur-xl transition-all duration-300 hover:border-accent/50 hover:shadow-2xl"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-muted">
                      {project.year} • {project.category}
                    </span>
                    {project.metrics && (
                      <span className="rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 font-mono text-[10px] text-accent">
                        {project.metrics}
                      </span>
                    )}
                  </div>

                  <h3 className="mt-3 text-2xl font-medium text-foreground transition-colors group-hover:text-accent">
                    {project.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-border/40">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md border border-border/50 bg-surface-hover/50 px-2.5 py-0.5 text-[11px] font-mono text-muted"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-foreground transition-colors hover:text-accent"
                    >
                      <span>Explore Project</span>
                      <span className="transition-transform group-hover:translate-x-1">→</span>
                    </a>

                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-mono text-muted hover:text-foreground"
                      >
                        GitHub ↗
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </RevealGroup>
      </div>
    </section>
  );
}
