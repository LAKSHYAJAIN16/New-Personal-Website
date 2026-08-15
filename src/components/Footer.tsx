export function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8">
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-2 text-xs text-muted sm:flex-row">
        <p>&copy; {new Date().getFullYear()} Lakshya Jain</p>
        <p>Built with Next.js &amp; Framer Motion</p>
      </div>
    </footer>
  );
}
