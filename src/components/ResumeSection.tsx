"use client";

export function ResumeSection() {
  return (
    <section id="resume" className="py-14 border-t border-border/80">
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-8">
        RESUME & EXPERIENCE
      </div>

      <div className="space-y-8 max-w-3xl">
        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
          <div className="font-mono text-xs text-muted">2026 — 2030</div>
          <div>
            <h3 className="font-serif text-xl text-foreground font-normal">
              University of Waterloo
            </h3>
            <p className="text-sm text-accent font-sans mt-0.5">
              Candidate for Bachelor of Computer Science (BCS)
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Focusing on algorithms, distributed systems, operating systems, and machine learning.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-4">
          <div className="font-mono text-xs text-muted">2024 — Present</div>
          <div>
            <h3 className="font-serif text-xl text-foreground font-normal">
              Software & Hackathon Projects
            </h3>
            <p className="text-sm text-accent font-sans mt-0.5">
              Independent Developer
            </p>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Building low-latency data streaming pipelines, AI canvas tools, and performance-driven web engines.
            </p>
          </div>
        </div>

        <div className="pt-4">
          <a
            href="mailto:lakshya16jain@gmail.com?subject=Resume%20Request"
            className="inline-block rounded border border-accent/60 bg-transparent px-5 py-2 text-sm text-accent transition-colors hover:bg-accent-subtle"
          >
            Download Full Resume (PDF) ↗
          </a>
        </div>
      </div>
    </section>
  );
}
