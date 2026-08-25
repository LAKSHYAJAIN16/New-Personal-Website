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
    <header className="site-nav sticky top-0 z-40 border-b backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-ink">
          <span className="nav-mark" aria-hidden>l</span>
          <span className="display-face text-xl">Lakshya Jain</span>
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-mono text-xs text-ink-soft transition-colors hover:text-ink"
            >
              <span className="text-ink">0{i + 1}</span> {link.label}
            </Link>
          ))}
          <a
            href="mailto:lakshya16jain@gmail.com"
            className="rounded-full bg-signal px-4 py-2 text-xs font-semibold text-signal-ink transition-transform hover:-translate-y-0.5"
          >
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-9 w-9 items-center justify-center rounded-full border border-rule-strong text-ink sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-4 w-4" /> : <MenuIcon className="h-4 w-4" />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col border-t border-rule-strong sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-rule px-5 py-3 font-mono text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
