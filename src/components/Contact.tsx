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
    <section id="contact" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-face text-2xl text-ink sm:text-3xl">Leave a note</h1>

        <div className="soft-card mt-6 px-5 py-8 sm:px-8 sm:py-10">
          <p className="flex items-center gap-2 text-sm font-medium text-sage">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
            Open to new roles and interesting projects
          </p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">
            The fastest way to reach me is email — say hi, I&apos;ll write back.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-ink shadow-sm transition-transform hover:-translate-y-0.5"
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

          <ul className="mt-8 flex flex-wrap gap-x-7 gap-y-2 border-t border-line pt-5">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
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
