export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <div className="mx-auto flex max-w-3xl flex-col items-center justify-between gap-2 border-t border-line pt-5 font-mono text-[11px] text-ink-soft sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lakshya Jain</p>
        <p>Built with Next.js, one room at a time</p>
      </div>
    </footer>
  );
}
