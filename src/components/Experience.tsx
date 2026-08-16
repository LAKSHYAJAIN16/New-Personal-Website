"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

type ExperienceItem = {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: "Software Engineer",
    company: "Engineering Team",
    period: "2024 — Present",
    description:
      "Architecting distributed microservices and real-time backend pipelines with high reliability, sub-millisecond response times, and robust telemetry.",
    skills: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
  {
    role: "Full Stack Developer",
    company: "Tech Systems",
    period: "2023 — 2024",
    description:
      "Built responsive, accessible web applications and internal operational dashboards with state-of-the-art UI performance and design standards.",
    skills: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Python"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[200px_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl italic text-muted">Experience</h2>
        </Reveal>

        <RevealGroup className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={revealItem}
              className="relative border-l border-border pl-6"
            >
              <div className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-accent" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-medium text-foreground">
                  {exp.role}{" "}
                  <span className="text-muted font-normal">@ {exp.company}</span>
                </h3>
                <span className="font-mono text-xs text-muted">{exp.period}</span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {exp.description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {exp.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-border bg-surface px-3 py-1 text-xs text-muted font-mono"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
