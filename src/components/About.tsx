"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

type SkillCategory = {
  name: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    name: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Rust", "Go", "SQL"],
  },
  {
    name: "Frontend & UI",
    skills: ["Next.js", "React 19", "Tailwind CSS", "Framer Motion", "HTML5/CSS3"],
  },
  {
    name: "Backend & Systems",
    skills: ["Node.js", "PostgreSQL", "REST APIs", "gRPC", "Kafka", "Redis"],
  },
  {
    name: "DevOps & Tools",
    skills: ["Docker", "Git", "GitHub Actions", "Vercel", "Linux"],
  },
];

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-[200px_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl italic text-muted">About</h2>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl font-normal">
              I&apos;m Lakshya, a software engineer obsessed with craft and precision.
              I solve technical challenges by creating clean, scalable architectures
              and intuitive user interfaces.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-4">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">
              Whether building low-latency backend engines or pixel-perfect web interfaces,
              my goal is always the same: software that is fast, maintainable, and delighting
              to use.
            </p>
          </Reveal>

          {/* Categorized Skills Matrix */}
          <div className="mt-12 space-y-8">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-widest text-muted">
                Technical Stack & Skills
              </h3>
            </Reveal>

            <RevealGroup className="grid gap-6 sm:grid-cols-2">
              {skillCategories.map((cat) => (
                <motion.div
                  key={cat.name}
                  variants={revealItem}
                  className="rounded-2xl border border-border/80 bg-surface/60 p-5 backdrop-blur-md transition-colors hover:border-border"
                >
                  <h4 className="font-mono text-xs font-semibold text-accent mb-3">
                    {cat.name}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-border/60 bg-surface-hover/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </RevealGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
