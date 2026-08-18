import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Work — Lakshya Jain",
  description: "Projects built by Lakshya Jain.",
};

export default function WorkPage() {
  return (
    <div className="grid-ground relative min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-5xl px-4 pt-10 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 font-mono text-xs text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowIcon className="h-3 w-3 rotate-[225deg]" /> [0] Back to index
          </Link>
        </div>
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
