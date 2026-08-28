"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { SimpleFallback } from "@/components/SimpleFallback";
import { ArrowIcon } from "@/components/icons";
import { placeholderClass } from "@/lib/placeholder";

const STORAGE_KEY = "stop-the-larp";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

const MENU = [
  { label: "About", href: "/about", note: "who this is, off the menu" },
  { label: "Work", href: "/work", note: "a few things he's made" },
  { label: "Writing", href: "/writing", note: "notes, when they get written" },
  { label: "Photos", href: "/photobooth", note: "a corner booth, unrelated to work" },
  { label: "Say hi", href: "/contact", note: "the fastest way to reach him" },
];

function CoffeeCup({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden>
      <g className="steam" fill="none" stroke="var(--ink-soft)" strokeWidth={2} strokeLinecap="round">
        <path d="M24 16c-3 3-3 6 0 9" />
        <path d="M32 16c-3 3-3 6 0 9" />
        <path d="M40 16c-3 3-3 6 0 9" />
      </g>
      <path
        d="M14 28h30v14c0 7-6 12-13 12h-4c-7 0-13-5-13-12V28Z"
        fill="var(--card)"
        stroke="var(--ink)"
        strokeWidth={2.4}
      />
      <path
        d="M44 32h4a6 6 0 0 1 0 12h-4"
        fill="none"
        stroke="var(--ink)"
        strokeWidth={2.4}
      />
      <path d="M14 28h30" stroke="var(--terracotta)" strokeWidth={3} strokeLinecap="round" />
    </svg>
  );
}

export function RealHome() {
  const revealed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setRevealed = (value: boolean) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // localStorage unavailable — the toggle still works for this render
    }
    window.dispatchEvent(new Event("storage"));
  };

  if (revealed) {
    return <SimpleFallback onBack={() => setRevealed(false)} />;
  }

  return (
    <div className="min-h-dvh px-4 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto flex max-w-3xl justify-end">
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="ticket-btn ticket-btn-quiet px-3 py-1.5 text-xs font-medium"
        >
          I&apos;m a recruiter — skip to the plain page
        </button>
      </div>

      <main className="mx-auto mt-6 max-w-3xl">
        <div className="soft-card px-6 py-10 sm:px-10 sm:py-14">
          <div className="flex items-start justify-between gap-4">
            <h1 className="display-face min-w-0 text-4xl leading-none text-ink sm:text-7xl">
              Hi, I&apos;m Lakshya Jain.
            </h1>
            <div className="flex shrink-0 flex-col items-center gap-1">
              <CoffeeCup className="h-14 w-14 sm:h-16 sm:w-16" />
              <p className="font-mono text-[10px] tracking-wide text-ink-soft">TABLE STILL OPEN</p>
            </div>
          </div>

          <div className="mt-6 max-w-lg border-l-2 border-dashed border-line pl-4 font-mono text-sm leading-relaxed text-ink-soft">
            <p className={placeholderClass}>[One precise line on what you build and why.]</p>
          </div>

          <p className="mt-6 text-base text-ink-soft">
            Currently a{" "}
            <span className="chalk-highlight font-semibold text-ink">CS student at the University of Waterloo</span>,
            oriented toward software engineering.
          </p>
        </div>

        <div className="menu-board mt-10 px-6 py-8 sm:px-10 sm:py-10">
          <p className="display-face text-3xl text-mustard">The Menu</p>
          <p className="mt-1 text-xs tracking-wide text-mustard/70 font-mono">EVERYTHING ON THIS SITE, TODAY</p>

          <ul className="mt-6 flex flex-col">
            {MENU.map((item) => (
              <li key={item.href} className="menu-item">
                <Link
                  href={item.href}
                  className="group flex items-center justify-between gap-4 py-4 transition-colors"
                >
                  <span>
                    <span className="display-face block text-2xl text-[#fff8ec] group-hover:text-mustard">
                      {item.label}
                    </span>
                    <span className="block text-sm text-mustard/70">{item.note}</span>
                  </span>
                  <ArrowIcon className="h-4 w-4 shrink-0 text-mustard/70 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-mustard" />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
}
