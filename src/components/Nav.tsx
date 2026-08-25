"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/#about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/photobooth", label: "Photos" },
  { href: "/#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav-deploy sticky top-0 z-40 border-b">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5 text-sm font-semibold text-ink">
          <span
            className="deploy-cut-sm grid h-7 w-7 place-items-center bg-gold font-mono text-xs font-bold text-ink"
            aria-hidden
          >
            L
          </span>
          <span className="display-face text-lg">Lakshya Jain</span>
        </Link>

        <div className="hidden items-center gap-7 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="mailto:lakshya16jain@gmail.com"
            className="deploy-cut-sm bg-gold px-4 py-2 text-xs font-semibold text-ink transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="deploy-cut-sm flex h-11 w-11 items-center justify-center bg-ink text-sheet sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-line-strong sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-line px-5 py-3 font-mono text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
