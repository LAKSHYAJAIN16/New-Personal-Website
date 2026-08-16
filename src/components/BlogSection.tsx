"use client";

import { useState } from "react";

type BlogPost = {
  id: string;
  title: string;
  date: string;
  readTime: string;
  summary: string;
  tags: string[];
  content: string;
};

const blogPosts: BlogPost[] = [
  {
    id: "cp-lessons",
    title: "What 500+ Competitive Programming Problems Taught Me About Speed",
    date: "Aug 2026",
    readTime: "5 min read",
    summary:
      "A deep dive into algorithmic intuition, memory locality, edge-case discipline, and why late-night problem solving changes how you write software.",
    tags: ["Algorithms", "C++", "Performance"],
    content: `When you spend hundreds of hours solving competitive programming problems under strict 1.0-second time limits and tight memory bounds, your relationship with code shifts fundamentally.

### 1. Intuition Over Brute Force
In CP, brute-force solutions rarely pass test set #3. You learn to recognize structural patterns immediately — interval scheduling, disjoint set unions, segment trees, and dynamic programming state transitions.

### 2. Micro-Optimizations vs Macro Architecture
Writing low-level fast I/O (\`cin.tie(NULL)\`) and cache-friendly flat arrays teaches you how CPUs actually fetch memory. When data fits into L1/L2 caches, operations run orders of magnitude faster.

### 3. Edge-Case Discipline
Off-by-one errors and integer overflows cost penalties. CP forces you to write code that is correct on the very first submission.`,
  },
  {
    id: "waterloo-cs",
    title: "Why I'm Heading into Waterloo Computer Science '30",
    date: "Jul 2026",
    readTime: "4 min read",
    summary:
      "Reflections on joining Waterloo CS, the co-op culture, late-night hackathons, and surrounding yourself with ambitious builders.",
    tags: ["Waterloo", "Computer Science", "Life"],
    content: `Computer Science at Waterloo has always stood out to me for one primary reason: the density of ambitious builders.

Whether it's late-night hackathons, open-source maintainers rewriting web engines, or students shipping production systems, Waterloo fosters an environment where craft and execution are valued above all else.

I'm excited to dive deep into operating systems, compilers, distributed systems, and real-world engineering challenges with the Class of 2030.`,
  },
  {
    id: "systems-philosophy",
    title: "Building Systems That Don't Apologize: A Software Philosophy",
    date: "Jun 2026",
    readTime: "6 min read",
    summary:
      "Why predictable performance, zero silent fallbacks, and deterministic software architecture matter more than ever.",
    tags: ["Systems", "Architecture", "Philosophy"],
    content: `Modern software often hides complexity behind layers of silent try-catch blocks and bloated dependencies.

### Predictability Over Cleverness
A system should execute predictably. If an invariant breaks, fail early with clear telemetry rather than swallowing exceptions into silent fallbacks.

### Zero-Allocation Mindset
Memory allocation on hot execution paths introduces non-deterministic GC pauses and cache misses. Designing zero-allocation buffers for real-time streaming ensures sub-millisecond P99 latency guarantees.`,
  },
];

export function BlogSection() {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-14 border-t border-border/80">
      <div className="flex items-center justify-between mb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-accent">
          BLOG &amp; ESSAYS
        </div>
        <span className="font-mono text-xs text-muted">{blogPosts.length} Posts</span>
      </div>

      {/* Post List */}
      <div className="space-y-8">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setActivePost(post)}
            className="group cursor-pointer rounded border border-transparent p-4 transition-all hover:border-accent/30 hover:bg-[#FAF7F0]"
          >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2">
              <h3 className="font-serif text-2xl text-foreground group-hover:text-accent transition-colors">
                {post.title}
              </h3>
              <div className="flex items-center gap-3 font-mono text-xs text-muted shrink-0">
                <span>{post.readTime}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
            </div>

            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground font-sans max-w-3xl">
              {post.summary}
            </p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded border border-border bg-[#F5F1E8] px-2.5 py-0.5 text-xs font-mono text-muted"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <span className="text-xs font-mono text-accent hover:underline">
                Read Article →
              </span>
            </div>
          </article>
        ))}
      </div>

      {/* Full Article Reader Modal */}
      {activePost && (
        <div
          onClick={() => setActivePost(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm overflow-y-auto"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-3xl w-full my-8 rounded border border-accent/50 bg-[#FAF9F5] p-6 sm:p-8 shadow-2xl space-y-6"
          >
            <div className="flex items-start justify-between border-b border-border pb-4">
              <div>
                <span className="font-mono text-xs uppercase tracking-wider text-accent">
                  {activePost.date} • {activePost.readTime}
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-foreground mt-2">
                  {activePost.title}
                </h2>
              </div>
              <button
                onClick={() => setActivePost(null)}
                className="rounded border border-border px-3 py-1 font-mono text-xs text-muted hover:text-foreground shrink-0"
              >
                Close ESC
              </button>
            </div>

            <div className="prose max-w-none text-muted-foreground font-sans leading-relaxed space-y-4 text-base">
              {activePost.content.split("\n\n").map((paragraph, idx) => {
                if (paragraph.startsWith("### ")) {
                  return (
                    <h3 key={idx} className="font-serif text-2xl text-foreground mt-6 mb-2">
                      {paragraph.replace("### ", "")}
                    </h3>
                  );
                }
                return <p key={idx}>{paragraph}</p>;
              })}
            </div>

            <div className="border-t border-border pt-4 flex items-center justify-between">
              <span className="font-mono text-xs text-muted">Written by Lakshya Jain</span>
              <button
                onClick={() => setActivePost(null)}
                className="rounded border border-accent/50 bg-transparent px-4 py-1.5 font-mono text-xs text-accent hover:bg-accent-subtle"
              >
                Back to posts ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
