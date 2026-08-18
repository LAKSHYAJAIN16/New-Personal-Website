import { posts } from "@/data/posts";
import { ArrowIcon, NodeIcon } from "./icons";

export function BlogSection() {
  return (
    <section id="writing" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-wide text-ink">
          Writing
        </h2>

        <div className="border-y border-rule-strong">
          {posts.map((post) => (
            <a
              key={post.figure}
              href={post.href}
              className="group grid grid-cols-[auto_1fr] items-start gap-4 border-b border-rule px-1 py-6 last:border-b-0 sm:grid-cols-[6rem_auto_1fr] sm:items-center sm:gap-6"
            >
              <span className="hidden font-mono text-xs text-ink-soft sm:block">
                FIG. {post.figure}
              </span>

              <NodeIcon className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-colors group-hover:text-signal sm:mt-0" />

              <div className="min-w-0">
                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="font-mono text-base font-semibold text-ink sm:text-lg">
                    {post.title}
                  </h3>
                  <span className="font-mono text-xs text-ink-soft sm:hidden">
                    FIG. {post.figure}
                  </span>
                  <span className="font-mono text-xs text-ink-soft">{post.date}</span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-ink-soft">{post.excerpt}</p>
                <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                  Read <ArrowIcon className="h-3 w-3" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
