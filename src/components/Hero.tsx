"use client";

import { useEffect, useState } from "react";
import { GenerativeFigure } from "./GenerativeFigure";

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
        <figure className="hero-stage min-h-[550px] px-6 py-8 sm:min-h-[650px] sm:px-12 sm:py-12">
          <GenerativeFigure seed={2} pens={5} className="absolute inset-0 h-full w-full" />
          <div className="hero-orb" aria-hidden />
          <div className="relative z-10 flex min-h-[486px] max-w-2xl flex-col justify-between sm:min-h-[554px]">
            <p className="text-xs font-semibold uppercase tracking-[.2em] text-[#f3b44d]">Personal corner of the internet</p>
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[.18em] text-[#f3b44d]"><span key={readingIndex}>{readings[readingIndex]}</span></p>
              <h1 className="display-face max-w-xl text-6xl font-semibold leading-[.84] sm:text-8xl">Lakshya<br />Jain</h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-[#fff8ee]/75 sm:text-lg">[One precise line on what you build and why.]</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/work" className="rounded-full bg-[#fff8ee] px-5 py-3 text-sm font-semibold text-ink transition-transform hover:-translate-y-0.5">View work</a>
                <a href="#contact" className="rounded-full border border-[#fff8ee]/50 px-5 py-3 text-sm font-semibold text-[#fff8ee] transition-colors hover:bg-[#fff8ee] hover:text-ink">Get in touch</a>
              </div>
            </div>
          </div>
        </figure>
        <figcaption className="mt-3 flex max-w-xl items-start gap-3 text-xs leading-relaxed text-ink-soft"><span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-signal" />A live, gently restless sketch—made with canvas, not an image.</figcaption>
      </div>
    </section>
  );
}
