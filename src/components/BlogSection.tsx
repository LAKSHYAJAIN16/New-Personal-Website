import { posts } from "@/data/posts";
import { ArrowIcon } from "./icons";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

export function BlogSection() {
  return (
    <section id="writing" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-face text-2xl text-ink sm:text-3xl">My notebook</h1>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">
          Notes and posts, when I get around to writing them.
        </p>

        <div className="mt-8 flex flex-col gap-4">
          {posts.map((post) => (
            <a
              key={post.figure}
              href={post.href}
              className="soft-card group flex items-start justify-between gap-4 px-5 py-5 transition-transform hover:-translate-y-0.5"
            >
              <div className="min-w-0">
                <p className={`text-sm text-ink-soft ${isPlaceholder(post.date) ? "italic" : ""}`}>{post.date}</p>
                <h3 className={`display-face mt-1 text-lg ${isPlaceholder(post.title) ? placeholderClass : "text-ink"}`}>
                  {post.title}
                </h3>
                <p className={`mt-1 text-sm leading-relaxed text-ink-soft ${isPlaceholder(post.excerpt) ? "italic" : ""}`}>
                  {post.excerpt}
                </p>
              </div>

              <ArrowIcon className="mt-1 h-4 w-4 shrink-0 text-ink-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-terracotta-strong" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
