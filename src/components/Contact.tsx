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
        <h2 className="display-face mb-10 text-4xl text-ink sm:text-5xl">Say hello</h2>

        <div className="sheet-panel px-5 py-10 sm:px-10 sm:py-14">
          <p className="status-ready font-mono text-xs uppercase tracking-wide">
            Channel open
          </p>

          <h3 className="display-face mt-3 max-w-xl text-3xl leading-[0.95] text-ink sm:text-5xl">
            Let&apos;s build something worth shipping.
          </h3>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="deploy-cut inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
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

          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 border-t border-line pt-6">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 font-mono text-xs uppercase tracking-wide text-ink-soft transition-colors hover:text-ink"
                >
                  {link.label} <ArrowIcon className="h-3 w-3" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
