"use client";

const articles = [
  {
    title: "Notes on Competitive Programming & Speed",
    date: "2026",
    summary:
      "Lessons learned from solving hundreds of algorithmic puzzles under tight time constraints.",
    readTime: "4 min read",
  },
  {
    title: "Why Systems Correctness Matters",
    date: "2025",
    summary:
      "A reflection on zero-allocation protocols, state machines, and writing deterministic software.",
    readTime: "6 min read",
  },
];

export function WritingSection() {
  return (
    <section id="writing" className="py-14 border-t border-border/80">
      <div className="font-mono text-xs uppercase tracking-wider text-accent mb-8">
        WRITING & NOTES
      </div>

      <div className="space-y-8">
        {articles.map((item) => (
          <div
            key={item.title}
            className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-2 items-baseline pb-6 border-b border-border/50 last:border-b-0"
          >
            <div>
              <h3 className="font-serif text-xl text-foreground group-hover:text-accent transition-colors">
                <a href="#writing">{item.title}</a>
              </h3>
              <p className="mt-1.5 text-sm text-muted-foreground font-sans">
                {item.summary}
              </p>
            </div>
            <div className="flex items-center gap-3 text-xs font-mono text-muted shrink-0">
              <span>{item.readTime}</span>
              <span>•</span>
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
