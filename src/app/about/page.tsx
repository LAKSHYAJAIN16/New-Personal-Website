import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { About } from "@/components/About";
import { Footer } from "@/components/Footer";
import { ArrowIcon } from "@/components/icons";

export const metadata: Metadata = {
  title: "About — Lakshya Jain",
  description: "About Lakshya Jain.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Nav />
      <main>
        <div className="mx-auto max-w-3xl px-4 pt-10 sm:px-6">
          <Link
            href="/"
            className="link-underline inline-flex items-center gap-1 text-sm text-ink-soft transition-colors hover:text-ink"
          >
            <ArrowIcon className="h-3 w-3 rotate-[225deg]" /> Back
          </Link>
        </div>
        <About />
      </main>
      <Footer />
    </div>
  );
}
