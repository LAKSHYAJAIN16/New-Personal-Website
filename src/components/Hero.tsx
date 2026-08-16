"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const roles = [
  "Software Engineer",
  "Full-Stack Systems Architect",
  "AI & Web Application Engineer",
  "Developer Tools Craftsman",
];

export function Hero({ onShowToast }: { onShowToast?: (msg: string) => void }) {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText("lakshya16jain@gmail.com");
    if (onShowToast) {
      onShowToast("Email copied to clipboard!");
    }
  };

  const name = "Lakshya Jain";

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center px-6 pt-20 pb-16"
    >
      <div className="mx-auto w-full max-w-5xl">
        {/* Dynamic Role Tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-accent"
        >
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" />
          <motion.span
            key={roleIndex}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.4 }}
          >
            {roles[roleIndex]}
          </motion.span>
        </motion.div>

        {/* Main Name */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl font-medium tracking-tight sm:text-7xl md:text-8xl"
          aria-label={name}
        >
          {name}
        </motion.h1>

        {/* Subtitle / Bio */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed sm:text-xl"
        >
          I design and engineer fast, reliable, aesthetic software systems — from
          ultra-responsive web applications to robust backend architectures.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#projects"
            className="rounded-full bg-accent px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-background transition-transform hover:scale-105 active:scale-95 shadow-lg"
          >
            View Work →
          </a>
          <button
            onClick={copyEmail}
            className="group flex items-center gap-2 rounded-full border border-border bg-surface px-6 py-3 text-xs font-mono text-foreground transition-all hover:border-muted hover:bg-surface-hover"
          >
            <span>Copy Email</span>
            <span className="text-muted text-[10px] group-hover:text-accent">
              (lakshya16jain@gmail.com)
            </span>
          </button>
        </motion.div>

        {/* Minimal Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="mt-16 grid grid-cols-2 gap-6 border-t border-border/60 pt-8 sm:grid-cols-3 max-w-2xl"
        >
          <div>
            <div className="font-mono text-2xl font-bold text-foreground">3+</div>
            <div className="font-mono text-xs text-muted mt-1">Years Building</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold text-foreground">15+</div>
            <div className="font-mono text-xs text-muted mt-1">Projects Delivered</div>
          </div>
          <div>
            <div className="font-mono text-2xl font-bold text-foreground">&lt; 100ms</div>
            <div className="font-mono text-xs text-muted mt-1">Latency Focus</div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-9 w-5 justify-center rounded-full border border-border p-1"
        >
          <div className="h-1.5 w-1.5 rounded-full bg-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
