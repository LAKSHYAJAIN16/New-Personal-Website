"use client";

import { useEffect, useState } from "react";
import { FoldHero } from "./FoldHero";
import { ArrowIcon } from "./icons";

const readings = ["SOFTWARE ENGINEER", "BUILDER OF THINGS", "[YOUR FOCUS]", "CS @ WATERLOO"];

export function Hero() {
  const [readingIndex, setReadingIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setReadingIndex((i) => (i + 1) % readings.length), 2800);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="px-4 pb-16 pt-6 sm:px-6 sm:pb-24">
      <div className="mx-auto max-w-5xl">
        <figure className="relative min-h-[560px] overflow-hidden border border-line-strong bg-panel px-6 py-10 sm:min-h-[620px] sm:px-12 sm:py-14">
          <FoldHero />

          <div className="relative z-10 flex min-h-[496px] max-w-xl flex-col justify-between sm:min-h-[544px]">
            <p className="status-ready font-mono text-xs uppercase tracking-wide">
              Ready <span key={readingIndex} className="text-ink-soft normal-case">— currently {readings[readingIndex]}</span>
            </p>

            <div>
              <h1
                className="display-face max-w-lg text-6xl leading-[0.86] text-ink sm:text-8xl"
                style={{ transform: "skewX(-6deg)", transformOrigin: "0% 100%" }}
              >
                Lakshya
                <br />
                Jain
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-ink-soft sm:text-lg">
                [One precise line on what you build and why.]
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="/work"
                  className="deploy-cut inline-flex items-center gap-2 bg-gold px-6 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5"
                >
                  Deploy — view work <ArrowIcon className="h-3.5 w-3.5" />
                </a>
                <a
                  href="#contact"
                  className="deploy-cut inline-flex items-center gap-2 bg-ink px-6 py-3 text-sm font-semibold text-sheet transition-transform hover:-translate-y-0.5"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </figure>
        <figcaption className="mt-3 flex max-w-xl items-start gap-3 text-xs leading-relaxed text-ink-soft">
          <span className="mt-1 h-2 w-2 shrink-0" style={{ background: "var(--gold)" }} />
          A live crease field — mountain and valley folds, drawn once on load, no image.
        </figcaption>
      </div>
    </section>
  );
}
