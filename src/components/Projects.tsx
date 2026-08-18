"use client";

import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";

const colorMap: Record<Project["color"], string> = {
  violet: "bg-violet",
  pink: "bg-pink",
  lime: "bg-lime",
  orange: "bg-orange",
  blue: "bg-blue",
};

export function Projects() {
  return (
    <section id="work" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm font-semibold uppercase tracking-widest text-violet"
        >
          02 / Work
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl"
        >
          Things I&apos;ve built.
        </motion.h2>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="sticker group flex flex-col rounded-2xl bg-surface p-6"
            >
              <div
                className={`h-1.5 w-12 rounded-full ${colorMap[project.color]}`}
              />
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={`${tag}-${tagIndex}`}
                    className="rounded-full border-2 border-ink px-2.5 py-0.5 font-mono text-xs font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="mt-5 font-mono text-sm font-semibold text-ink transition-transform group-hover:translate-x-1">
                View project →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
