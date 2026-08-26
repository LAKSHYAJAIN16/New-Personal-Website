import Link from "next/link";
import { DownloadIcon, ArrowIcon } from "@/components/icons";
import { placeholderClass } from "@/lib/placeholder";

const links = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/photobooth", label: "Photos" },
  { href: "/contact", label: "Contact" },
];

export function SimpleFallback({ onBack }: { onBack: () => void }) {
  return (
    <div className="flex h-dvh flex-col items-center justify-center px-4 text-center sm:px-6">
      <h1 className="display-face text-4xl text-ink sm:text-5xl">Lakshya Jain</h1>
      <p className="mt-2 text-lg text-ink-soft">Software Engineer</p>
      <p className={`mt-4 max-w-sm text-base leading-relaxed ${placeholderClass}`}>
        [One precise line on what you build and why.]
      </p>

      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
        {links.map((link) => (
          <Link key={link.href} href={link.href} className="link-underline text-sm font-medium text-ink">
            {link.label}
          </Link>
        ))}
        <a href="/resume.pdf" className="link-underline inline-flex items-center gap-1.5 text-sm font-medium text-ink">
          <DownloadIcon className="h-3.5 w-3.5" /> Résumé
        </a>
      </div>

      <button
        type="button"
        onClick={onBack}
        className="link-underline mt-12 inline-flex items-center gap-1.5 text-xs text-ink-soft"
      >
        <ArrowIcon className="h-3 w-3 rotate-[225deg]" /> Back to the room
      </button>
    </div>
  );
}
