"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#terminal", label: "Terminal" },
  { href: "#contact", label: "Contact" },
];

export function Nav({ onOpenCommandPalette }: { onOpenCommandPalette: () => void }) {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-xl"
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3.5">
        <a
          href="#top"
          className="flex items-center gap-2.5 font-display text-lg italic tracking-tight text-foreground transition-opacity hover:opacity-80"
        >
          <span>Lakshya Jain</span>
          <span className="flex items-center gap-1.5 rounded-full border border-border bg-surface px-2 py-0.5 text-[10px] font-mono not-italic text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
            <span>Open for roles</span>
          </span>
        </a>

        <div className="flex items-center gap-4">
          <ul
            className="hidden sm:flex items-center gap-1 text-xs font-mono"
            onMouseLeave={() => setHovered(null)}
          >
            {links.map((link) => (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.href)}
                  className="relative z-10 block px-3 py-1.5 text-muted transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
                {hovered === link.href && (
                  <motion.div
                    layoutId="nav-hover"
                    className="absolute inset-0 rounded-lg bg-surface-hover"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </li>
            ))}
          </ul>

          <button
            onClick={onOpenCommandPalette}
            className="flex items-center gap-2 rounded-lg border border-border bg-surface px-2.5 py-1 text-xs font-mono text-muted transition-all hover:border-accent hover:text-foreground"
            title="Search / Command Palette"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            <span className="hidden md:inline">Search</span>
            <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[10px]">
              ⌘K
            </kbd>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
