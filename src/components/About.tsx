"use client";

import { Reveal, RevealGroup, revealItem } from "./Reveal";
import { motion } from "framer-motion";

const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "PostgreSQL",
];

export function About() {
  return (
    <section id="about" className="px-6 py-32">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-[200px_1fr]">
        <Reveal>
          <h2 className="font-display text-3xl italic text-muted">About</h2>
        </Reveal>

        <div>
          <Reveal>
            <p className="text-xl leading-relaxed text-foreground sm:text-2xl">
              I&apos;m a software engineer who enjoys turning ambiguous
              problems into clean, reliable systems. I care about craft —
              from the architecture no one sees to the pixel-level details
              everyone feels.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-6">
            <p className="max-w-xl leading-relaxed text-muted">
              Add a longer bio here: your background, what you&apos;re
              working on now, and what kind of problems you like to solve.
            </p>
          </Reveal>

          <RevealGroup className="mt-10 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <motion.span
                key={skill}
                variants={revealItem}
                className="rounded-full border border-border px-4 py-1.5 text-sm text-muted transition-colors hover:border-accent hover:text-foreground"
              >
                {skill}
              </motion.span>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
