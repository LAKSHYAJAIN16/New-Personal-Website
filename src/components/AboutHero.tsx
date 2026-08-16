"use client";

import { useState, useEffect } from "react";

const interests = [
  "Competitive programming",
  "Systems & performance",
  "Machine learning",
  "Product design",
  "Open source",
];

const asciiArt = `
  __        __   _ 
  \\ \\      / /  | |
   \\ \\ /\\ / /_  | |
    \\ V  V /| |_| |
     \\_/\\_/  \\___/ 
`;

export function AboutHero() {
  const [timeStr, setTimeStr] = useState<string>("");
  const [pingStatus, setPingStatus] = useState<string | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }) + " EST"
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePing = () => {
    setPingStatus("Pinging...");
    setTimeout(() => {
      const ms = Math.floor(Math.random() * 12) + 8;
      setPingStatus(`waterloo: 200 OK (${ms}ms)`);
    }, 450);
  };

  return (
    <section id="about" className="py-8 md:py-12">
      {/* Sub-header / Tagline */}
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-6">
        INCOMING @ UNIVERSITY OF WATERLOO — CS, CLASS OF 2030
      </div>

      {/* Main Grid: Headline & Text vs ASCII Status Box */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 items-start">
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

        {/* Right Interactive ASCII & System Status Box */}
        <div className="w-full max-w-[340px] justify-self-start lg:justify-self-end">
          <div className="rounded border border-accent/40 bg-[#FAF7F0] p-4 font-mono text-xs shadow-sm space-y-3">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-accent/20 pb-2">
              <span className="text-[10px] uppercase text-accent font-semibold">
                SYSTEM // LAKSHYA_OS
              </span>
              <span className="flex items-center gap-1.5 text-[10px] text-accent">
                <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
                ONLINE
              </span>
            </div>

            {/* ASCII Artwork */}
            <pre className="text-accent/80 font-bold leading-none text-[10px] select-none text-center py-1">
              {asciiArt}
            </pre>

            {/* Live Status Fields */}
            <div className="space-y-1.5 text-[11px] border-t border-b border-accent/20 py-2.5">
              <div className="flex justify-between">
                <span className="text-muted">STATUS</span>
                <span className="text-foreground font-medium">UWaterloo CS &apos;30</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">LOCATION</span>
                <span className="text-foreground">Waterloo / ON</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">TIME</span>
                <span className="text-accent font-medium">{timeStr || "12:00 EST"}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted">FOCUS</span>
                <span className="text-foreground">Systems &amp; Algorithms</span>
              </div>
            </div>

            {/* Interactive Ping Button */}
            <div className="flex items-center justify-between pt-1">
              <button
                onClick={handlePing}
                className="rounded border border-accent/50 bg-accent-subtle/50 px-2.5 py-1 text-[10px] text-accent transition-colors hover:bg-accent-subtle active:scale-95"
              >
                ⚡ Ping system
              </button>
              {pingStatus && (
                <span className="text-[10px] text-accent animate-fade-in font-medium">
                  {pingStatus}
                </span>
              )}
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
