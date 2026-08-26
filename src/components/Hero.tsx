"use client";

import { useEffect, useState } from "react";
import { IsoRoom } from "./IsoRoom";
import { ArrowIcon, DownloadIcon } from "./icons";

const moods = ["curious", "focused", "caffeinated", "building something"];

export function Hero() {
  const [moodIndex, setMoodIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setMoodIndex((i) => (i + 1) % moods.length), 3200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="top" className="px-4 pb-14 pt-10 sm:px-6 sm:pb-20 sm:pt-14">
      <div className="mx-auto grid max-w-3xl gap-8 sm:grid-cols-[1.1fr_1fr] sm:items-center sm:gap-6">
        <div>
          <p className="flex items-center gap-2 text-sm font-medium text-sage">
            <span className="live-dot inline-block h-1.5 w-1.5 rounded-full bg-sage" aria-hidden />
            Today&apos;s mood: <span key={moodIndex}>{moods[moodIndex]}</span>
          </p>
          <h1 className="display-face mt-3 text-4xl leading-[1.05] text-ink sm:text-5xl">
            Lakshya Jain
          </h1>
          <p className="mt-2 text-lg text-ink-soft">Software Engineer</p>
          <p className="mt-4 max-w-sm text-base leading-relaxed text-ink-soft">
            [One precise line on what you build and why.] Welcome to my little corner of the
            internet — come in, look around.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
            <a
              href="/work"
              className="inline-flex items-center gap-2 rounded-full bg-sage px-5 py-3 text-sm font-semibold text-sage-ink shadow-sm transition-transform hover:-translate-y-0.5"
            >
              See my collection <ArrowIcon className="h-3.5 w-3.5" />
            </a>
            <a
              href="/resume.pdf"
              className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-ink"
            >
              <DownloadIcon className="h-3.5 w-3.5" /> Résumé
            </a>
            <a href="#contact" className="link-underline text-sm font-medium text-ink">
              Say hi
            </a>
          </div>
        </div>

        <div className="soft-card overflow-hidden p-3">
          <IsoRoom className="w-full" />
        </div>
      </div>
    </section>
  );
}
