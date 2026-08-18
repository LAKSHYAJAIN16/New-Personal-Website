"use client";

import { useEffect, useState } from "react";
import { GenerativeFigure } from "./GenerativeFigure";
import { ArrowIcon } from "./icons";

// TODO: swap for your real focus areas / roles
const readings = ["SOFTWARE ENGINEER", "BUILDER OF THINGS", "[YOUR FOCUS]", "CS @ WATERLOO"];

export function Hero() {
  const [readingIndex, setReadingIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReadingIndex((i) => (i + 1) % readings.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="px-4 pt-6 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <figure className="relative border border-rule-strong">
          <span className="absolute -top-3 left-4 z-10 bg-paper px-2 font-mono text-xs font-medium tracking-wide text-ink">
            FIG. 01
          </span>

          <GenerativeFigure
            seed={2}
            pens={5}
            className="h-[70vh] w-full min-h-[420px] sm:h-[78vh]"
          />

          <div className="absolute bottom-4 left-4 max-w-sm border border-rule-strong bg-paper px-4 py-3 sm:bottom-6 sm:left-6">
            <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-wide text-signal">
              <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-signal" aria-hidden />
              <span key={readingIndex}>{readings[readingIndex]}</span>
            </p>
            <h1 className="mt-2 font-mono text-2xl font-semibold leading-tight tracking-tight text-ink sm:text-3xl">
              Lakshya Jain
            </h1>
            <p className="mt-1 text-sm leading-relaxed text-ink-soft">
              {/* TODO: replace with a real one-line bio */}
              [One precise line on what you build and why.]
            </p>
            <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
              <a
                href="#work"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-signal"
              >
                [1] View work <ArrowIcon className="h-3 w-3" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 font-mono text-xs font-medium text-ink underline decoration-rule-strong underline-offset-4 hover:decoration-signal"
              >
                [2] Get in touch <ArrowIcon className="h-3 w-3" />
              </a>
            </div>
          </div>
        </figure>

        <figcaption className="border border-t-0 border-rule-strong px-4 py-2.5 font-mono text-xs leading-relaxed text-ink-soft">
          Live-rendered harmonograph — quasi-periodic pen traces, nudged by cursor position in
          real time. Rendered on &lt;canvas&gt;, no images.
        </figcaption>
      </div>
    </section>
  );
}
