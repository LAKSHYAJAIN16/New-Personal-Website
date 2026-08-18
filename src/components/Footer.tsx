export function Footer() {
  return (
    <footer className="px-4 pb-8 sm:px-6">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-3 border-t-2 border-ink/10 pt-6 font-mono text-xs text-muted-foreground sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lakshya Jain</p>
        <p>Built with Next.js &amp; a little too much coffee ☕</p>
      </div>
    </footer>
  );
}
