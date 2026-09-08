import { projects } from "@/data/projects";
import { posts } from "@/data/posts";
import { photos } from "@/data/photos";
import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

const facts: [string, string][] = [
  ["Status", "[What you're doing right now]"],
  ["Focus", "[Your primary stack/interest]"],
  ["Also into", "[A hobby or side interest]"],
  ["Based in", "Waterloo, ON"],
  ["Studying", "CS, University of Waterloo"],
];

const EMAIL = "lakshya16jain@gmail.com";

const socialLinks = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Twitter / X", href: "https://x.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-xl px-6 py-16 sm:py-24">
      <section id="about">
        <h1 className="text-2xl font-bold text-ink">Lakshya Jain</h1>
        <p className={`mt-4 leading-relaxed ${placeholderClass}`}>
          [Write two or three sentences about your story — what got you into
          building things, and what you&apos;re excited about right now.]
        </p>

        <dl className="mt-6 flex flex-col gap-1 text-sm">
          {facts.map(([label, value]) => (
            <div key={label} className="flex gap-2">
              <dt className="w-20 shrink-0 text-ink-soft">{label}</dt>
              <dd className={isPlaceholder(value) ? placeholderClass : "text-ink"}>{value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="work" className="mt-12">
        <h2 className="text-lg font-bold text-ink">Work</h2>
        <p className="mt-1 text-sm text-ink-soft">A few things I&apos;ve built.</p>
        <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
          {projects.map((project) => (
            <li key={project.figure}>
              <a href={project.href} className={isPlaceholder(project.title) ? placeholderClass : "font-semibold"}>
                {project.title}
              </a>
              {" — "}
              <span className={isPlaceholder(project.description) ? "italic" : "text-ink-soft"}>
                {project.description}
              </span>
            </li>
          ))}
        </ul>
      </section>

      <section id="writing" className="mt-12">
        <h2 className="text-lg font-bold text-ink">Writing</h2>
        <p className="mt-1 text-sm text-ink-soft">Notes and posts, when I get around to writing them.</p>
        <ul className="mt-4 flex flex-col gap-3 text-sm leading-relaxed">
          {posts.map((post) => (
            <li key={post.figure}>
              <span className={`text-ink-soft ${isPlaceholder(post.date) ? "italic" : ""}`}>{post.date}</span>
              {" — "}
              <a href={post.href} className={isPlaceholder(post.title) ? placeholderClass : "font-semibold"}>
                {post.title}
              </a>
              {": "}
              <span className={isPlaceholder(post.excerpt) ? "italic" : "text-ink-soft"}>{post.excerpt}</span>
            </li>
          ))}
        </ul>
      </section>

      <section id="photobooth" className="mt-12">
        <h2 className="text-lg font-bold text-ink">Photos</h2>
        <p className="mt-1 text-sm text-ink-soft">A few photos, unrelated to work.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          {photos.map((photo) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={photo.figure}
              src={photo.src}
              alt={photo.alt}
              title={photo.caption}
              className="h-24 w-24 object-cover sm:h-28 sm:w-28"
            />
          ))}
        </div>
      </section>

      <section id="contact" className="mt-12">
        <h2 className="text-lg font-bold text-ink">Contact</h2>
        <p className="mt-1 text-sm leading-relaxed text-ink-soft">
          The fastest way to reach me is email:{" "}
          <a href={`mailto:${EMAIL}`} className="text-ink">
            {EMAIL}
          </a>
          . Elsewhere:{" "}
          {socialLinks.map((link) => (
            <span key={link.label}>
              <a href={link.href} target="_blank" rel="noreferrer" className="text-ink">
                {link.label}
              </a>
              {", "}
            </span>
          ))}
          <a href="/resume.pdf" className="text-ink">
            résumé
          </a>
          .
        </p>
      </section>

      <footer className="mt-16 border-t border-line pt-6 text-xs text-ink-soft">
        © {new Date().getFullYear()} Lakshya Jain
      </footer>
    </main>
  );
}
