"use client";

import { motion } from "framer-motion";

// TODO: replace with your real facts / stack / interests
const facts = [
  { label: "Currently", value: "[What you're doing right now]" },
  { label: "Stack", value: "[Your favorite tools/languages]" },
  { label: "Also into", value: "[A hobby or interest]" },
  { label: "Based in", value: "[Your city]" },
];

export function About() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-sm font-semibold uppercase tracking-widest text-violet"
        >
          01 / About
        </motion.p>

        <div className="mt-6 grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-display text-2xl font-medium leading-snug tracking-tight sm:text-4xl"
          >
            {/* TODO: replace with your real about copy */}
            [Write a couple of sentences about your story, what got you into what
            you do, and what you&apos;re excited about right now.]
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="sticker grid grid-cols-2 gap-4 rounded-2xl bg-surface p-5"
          >
            {facts.map((fact) => (
              <div key={fact.label}>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  {fact.label}
                </p>
                <p className="mt-1 font-display text-base font-semibold">
                  {fact.value}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
