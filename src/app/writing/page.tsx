import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "Writing — Lakshya Jain",
  description: "Notes and writing by Lakshya Jain.",
};

export default function WritingPage() {
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
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
}
