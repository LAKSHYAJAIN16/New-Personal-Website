"use client";

import { useState } from "react";
import { ArrowIcon, CheckIcon } from "./icons";

const EMAIL = "lakshya16jain@gmail.com";

// TODO: swap in your real links
const links = [
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
    <section id="contact" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-wide text-ink">
          Contact
        </h2>

        <div className="border border-rule-strong px-5 py-10 sm:px-10 sm:py-14">
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-wide text-signal">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
            Channel open
          </p>

          <h3 className="mt-3 max-w-xl font-mono text-3xl font-semibold leading-tight tracking-tight text-ink sm:text-5xl">
            Let&apos;s build something worth documenting.
          </h3>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 border border-rule-strong px-4 py-2.5 font-mono text-sm text-ink transition-colors hover:bg-ink hover:text-paper"
            >
              {copied ? (
                <>
                  <CheckIcon className="h-4 w-4" /> Copied to clipboard
                </>
              ) : (
                EMAIL
              )}
            </button>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-rule pt-6">
            {links.map((link, i) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs text-ink-soft transition-colors hover:text-ink"
                >
                  [{i + 1}] {link.label} <ArrowIcon className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
