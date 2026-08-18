"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4 sm:px-6">
      <nav className="sticker mx-auto flex max-w-4xl items-center justify-between rounded-2xl bg-surface/90 px-4 py-3 backdrop-blur">
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          LJ<span className="text-violet">.</span>
        </a>

        <div className="hidden items-center gap-1 sm:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 font-mono text-sm text-ink transition-colors hover:bg-lime/60"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="sticker-sm ml-2 rounded-full bg-ink px-4 py-2 font-mono text-sm font-medium text-paper transition-colors hover:bg-violet"
          >
            Say hi ↗
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="sticker-sm flex h-9 w-9 items-center justify-center rounded-full bg-surface sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="font-mono text-lg leading-none">{open ? "×" : "☰"}</span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.2 }}
            className="sticker mx-auto mt-2 flex max-w-4xl flex-col gap-1 overflow-hidden rounded-2xl bg-surface p-3 sm:hidden"
          >
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 font-mono text-sm text-ink hover:bg-lime/60"
              >
                {link.label}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
