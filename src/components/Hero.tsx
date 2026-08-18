"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

// TODO: swap these for your real roles/taglines
const roles = ["Software Engineer", "Builder of Things", "[Your Role]", "[Your Vibe]"];

const marqueeWords = [
  "AVAILABLE FOR WORK",
  "★",
  "OPEN TO COLLAB",
  "★",
  "BASED IN [YOUR CITY]",
  "★",
];

export function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setRoleIndex((i) => (i + 1) % roles.length), 2600);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden px-4 pt-16 pb-10 sm:px-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="sticker-sm mb-6 inline-flex items-center gap-2 rounded-full bg-lime px-4 py-1.5 font-mono text-xs font-medium uppercase tracking-widest text-ink"
        >
          <span className="h-2 w-2 rounded-full bg-ink" />
          <motion.span key={roleIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            {roles[roleIndex]}
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-bold leading-[0.95] tracking-tight sm:text-8xl md:text-9xl"
        >
          Hey, I&apos;m
          <br />
          <span className="relative inline-block">
            Lakshya
            <svg
              aria-hidden
              viewBox="0 0 300 20"
              className="absolute -bottom-2 left-0 w-full text-pink"
            >
              <path
                d="M2 15 Q 75 2, 150 12 T 298 10"
                fill="none"
                stroke="currentColor"
                strokeWidth="6"
                strokeLinecap="round"
              />
            </svg>
          </span>
          .
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl"
        >
          {/* TODO: replace with your real bio */}
          [One or two punchy sentences about what you build, what you care about,
          and what makes you, you.]
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#work"
            className="sticker rounded-full bg-violet px-6 py-3 font-mono text-sm font-semibold text-paper"
          >
            See my work
          </a>
          <a
            href="#contact"
            className="sticker rounded-full bg-surface px-6 py-3 font-mono text-sm font-semibold text-ink"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <div className="mt-16 border-y-2 border-ink bg-ink py-3 sm:mt-24">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords].map((word, i) => (
            <span
              key={i}
              className="mx-4 font-display text-xl font-bold text-paper sm:text-2xl"
            >
              {word}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
