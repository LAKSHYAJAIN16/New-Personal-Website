"use client";

import { useState } from "react";
import Link from "next/link";
import { MenuIcon, CloseIcon } from "./icons";

const links = [
  { href: "/", label: "Table" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/photobooth", label: "Photos" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-bg/95 backdrop-blur">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-base font-semibold text-ink">
          <span
            className="grid h-8 w-8 place-items-center rounded-full bg-terracotta font-display text-lg text-[#fff8ec]"
            aria-hidden
          >
            L
          </span>
          <span className="display-face text-2xl">Lakshya&apos;s table</span>
        </Link>

        <div className="hidden items-center gap-5 sm:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="link-underline text-sm text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ticket-btn px-4 py-2 text-sm font-semibold">
            Say hi
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-11 w-11 items-center justify-center rounded-full bg-mustard text-ink sm:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-1 border-t border-line px-4 py-3 sm:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-sm text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            onClick={() => setOpen(false)}
            className="ticket-btn mt-1 justify-center px-4 py-2.5 text-center text-sm font-semibold"
          >
            Say hi
          </Link>
        </div>
      )}
    </header>
  );
}
