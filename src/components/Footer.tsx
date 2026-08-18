export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-2 border-t border-rule pt-5 font-mono text-[11px] text-ink-soft sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lakshya Jain — rendered client-side, no images</p>
        <p>Built with Next.js, Canvas 2D &amp; too much coffee</p>
      </div>
    </footer>
  );
}
