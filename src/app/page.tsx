import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ArrowIcon, NodeIcon } from "@/components/icons";

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
            <h2 className="mb-8 font-mono text-sm font-semibold uppercase tracking-wide text-ink">
              Index
            </h2>

            <div className="border-y border-rule-strong">
              {index.map((entry) => (
                <Link
                  key={entry.figure}
                  href={entry.href}
                  className="group grid grid-cols-[auto_1fr] items-start gap-4 border-b border-rule px-1 py-6 last:border-b-0 sm:grid-cols-[6rem_auto_1fr] sm:items-center sm:gap-6"
                >
                  <span className="hidden font-mono text-xs text-ink-soft sm:block">
                    FIG. {entry.figure}
                  </span>

                  <NodeIcon className="mt-1 h-5 w-5 shrink-0 text-ink-soft transition-colors group-hover:text-signal sm:mt-0" />

                  <div className="min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="font-mono text-base font-semibold text-ink sm:text-lg">
                        {entry.title}
                      </h3>
                      <span className="font-mono text-xs text-ink-soft sm:hidden">
                        FIG. {entry.figure}
                      </span>
                    </div>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 font-mono text-[11px] font-medium text-ink opacity-0 transition-opacity group-hover:opacity-100">
                      Open <ArrowIcon className="h-3 w-3" />
                    </span>
                  </div>
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
