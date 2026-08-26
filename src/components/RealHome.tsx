import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/icons";

const index = [
  {
    title: "My collection",
    description: "Projects, in full — a separate page.",
    href: "/work",
  },
  {
    title: "My notebook",
    description: "Notes and posts, in full — a separate page.",
    href: "/writing",
  },
  {
    title: "Photo corner",
    description: "Photos, in full — a separate page.",
    href: "/photobooth",
  },
];

export function RealHome() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <Hero />
        <About />

        <section className="border-t border-line px-4 py-14 sm:px-6 sm:py-20">
          <div className="mx-auto max-w-3xl">
            <h2 className="display-face text-2xl text-ink sm:text-3xl">More to explore</h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {index.map((entry) => (
                <Link
                  key={entry.title}
                  href={entry.href}
                  className="soft-card group flex flex-col justify-between gap-4 px-5 py-5 transition-transform hover:-translate-y-0.5"
                >
                  <div>
                    <h3 className="display-face text-lg text-ink">{entry.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                      {entry.description}
                    </p>
                  </div>
                  <ArrowIcon className="h-4 w-4 shrink-0 self-end text-ink-soft transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-sage" />
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
