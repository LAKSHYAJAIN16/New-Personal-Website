export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-8 font-mono">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lakshya Jain. Built with craft.</p>
        <div className="flex items-center gap-4">
          <span>Next.js 16 • Tailwind v4</span>
          <span>•</span>
          <a
            href="#top"
            className="text-muted transition-colors hover:text-foreground"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
