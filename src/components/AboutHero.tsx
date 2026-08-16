"use client";

import Image from "next/image";

const interests = [
  "Competitive programming",
  "Systems & performance",
  "Machine learning",
  "Product design",
  "Open source",
];

export function AboutHero() {
  return (
    <section id="about" className="py-8 md:py-12">
      {/* Sub-header / Tagline */}
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
        INCOMING @ UNIVERSITY OF WATERLOO — CS, CLASS OF 2030
      </div>

      {/* Main Grid: Headline & Text vs Photo Box */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-10 items-start">
        <div>
          {/* Main Headline */}
          <h1 className="font-serif text-5xl sm:text-6xl text-foreground font-normal leading-[1.12] tracking-tight">
            I like problems
            <br />
            that fight back.
          </h1>

          {/* Bio Text */}
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-muted-foreground font-sans max-w-2xl">
            I&apos;m heading into Computer Science at Waterloo this fall. Most of what&apos;s
            here so far comes from late nights on competitive programming, a couple of
            scrappy hackathon builds, and a habit of rewriting things I&apos;ve already
            finished because I found a better way. I care about systems that are fast,
            correct, and don&apos;t apologize for it.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex items-center gap-6">
            <a
              href="#work"
              className="rounded border border-accent/60 bg-transparent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent-subtle"
            >
              See my work
            </a>
            <a
              href="mailto:lakshya16jain@gmail.com"
              className="text-sm text-accent transition-colors hover:underline"
            >
              Say hello
            </a>
          </div>
        </div>

        {/* Right Photo / Graphic Container */}
        <div className="w-full max-w-[320px] justify-self-start lg:justify-self-end">
          <div className="relative aspect-[3/4] w-full rounded border border-accent/30 bg-[#FAF7F0] p-2 shadow-sm">
            <div className="relative h-full w-full overflow-hidden rounded bg-[#F2EDE2] border border-accent/10 flex items-center justify-center">
              <Image
                src="/lakshya_portrait.png"
                alt="Lakshya Jain"
                fill
                className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Divider */}
      <div className="my-14 border-b border-border/80" />

      {/* WHAT I'M INTO Section */}
      <div>
        <h2 className="font-mono text-xs uppercase tracking-wider text-accent mb-5">
          WHAT I&apos;M INTO
        </h2>

        <div className="flex flex-wrap gap-3">
          {interests.map((item) => (
            <span
              key={item}
              className="rounded border border-accent/50 bg-transparent px-3.5 py-1.5 text-xs font-sans text-accent transition-colors hover:bg-accent-subtle cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
