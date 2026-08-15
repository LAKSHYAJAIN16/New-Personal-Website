"use client";

import { motion } from "framer-motion";

const name = "Lakshya Jain";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.045, delayChildren: 0.3 },
  },
};

const letter = {
  hidden: { y: "110%", opacity: 0 },
  show: {
    y: "0%",
    opacity: 1,
    transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 font-mono text-sm uppercase tracking-[0.3em] text-accent"
        >
          Software Engineer
        </motion.p>

        <motion.h1
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-wrap text-6xl font-medium tracking-tight sm:text-7xl md:text-8xl"
          aria-label={name}
        >
          {name.split("").map((char, i) => (
            <span key={i} className="overflow-hidden pb-2">
              <motion.span variants={letter} className="inline-block">
                {char === " " ? " " : char}
              </motion.span>
            </span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="mt-6 max-w-xl text-lg text-muted"
        >
          I build fast, thoughtful software — currently focused on{" "}
          <span className="text-foreground">web</span> and{" "}
          <span className="text-foreground">systems</span> engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.25 }}
          className="mt-10 flex items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-105 active:scale-95"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted"
          >
            Get in touch
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
