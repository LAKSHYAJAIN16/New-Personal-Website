import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/icons";

const index = [
  {
    figure: "03",
    title: "Work",
    description: "Projects, in full — a separate volume.",
    href: "/work",
  },
  {
    figure: "04",
    title: "Writing",
    description: "Notes and posts, in full — a separate volume.",
    href: "/writing",
  },
  {
    figure: "05",
    title: "Photobooth",
    description: "Photos, in full — a separate volume.",
    href: "/photobooth",
  },
];

export default function Home() {
  return (
    <div className="grid-ground relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />

        <section className="px-4 py-16 sm:px-6 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="mb-9 flex items-end justify-between gap-4"><h2 className="display-face text-4xl font-semibold text-ink sm:text-5xl">A small archive.</h2><p className="max-w-44 text-right text-sm leading-relaxed text-ink-soft">Three places to wander when you have a minute.</p></div>

            <div className="border-t border-rule">
              {index.map((entry) => (
                <Link
                  key={entry.figure}
                  href={entry.href}
                  className="archive-row group grid grid-cols-[auto_1fr] items-start gap-4 py-6 sm:grid-cols-[5rem_1fr_auto] sm:items-center sm:gap-6 sm:px-4"
                >
                  <span className="display-face hidden text-2xl italic text-signal sm:block">{entry.figure}</span>

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="display-face text-2xl font-semibold text-ink sm:text-3xl">
                        {entry.title}
                      </h3>
                      <span className="text-xs font-semibold tracking-wider text-signal sm:hidden">
                        {entry.figure}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  </div>
                  <ArrowIcon className="mt-2 hidden h-5 w-5 text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 sm:block" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />
    </div>
  );
}
