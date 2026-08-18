"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const EMAIL = "lakshya16jain@gmail.com";

// TODO: swap in your real links
const socials = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
];

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <section id="contact" className="px-4 py-20 sm:px-6 sm:py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="sticker mx-auto flex max-w-4xl flex-col items-start gap-8 rounded-3xl bg-ink px-6 py-14 text-paper sm:px-14"
      >
        <p className="font-mono text-sm font-semibold uppercase tracking-widest text-lime">
          03 / Contact
        </p>
        <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          Let&apos;s build
          <br />
          something <span className="text-pink">cool</span>.
        </h2>

        <div className="flex flex-wrap items-center gap-4">
          <button
            type="button"
            onClick={copyEmail}
            className="sticker rounded-full bg-lime px-6 py-3 font-mono text-sm font-semibold text-ink"
            style={{ boxShadow: "6px 6px 0 0 #FFF7EE" }}
          >
            {copied ? "Copied ✓" : EMAIL}
          </button>
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-paper/40 px-4 py-2 font-mono text-sm text-paper/80 transition-colors hover:border-paper hover:text-paper"
            >
              {social.label} ↗
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
