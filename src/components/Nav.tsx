"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md"
    >
      <nav className="mx-auto flex max-w-4xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-xl italic tracking-tight text-foreground"
        >
          Lakshya Jain
        </a>
        <ul
          className="flex items-center gap-1 text-sm"
          onMouseLeave={() => setHovered(null)}
        >
          {links.map((link) => (
            <li key={link.href} className="relative">
              <a
                href={link.href}
                onMouseEnter={() => setHovered(link.href)}
                className="relative z-10 block px-4 py-2 text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
              {hovered === link.href && (
                <motion.div
                  layoutId="nav-hover"
                  className="absolute inset-0 rounded-full bg-surface"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
}
