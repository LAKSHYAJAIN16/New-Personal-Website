export function Blobs() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="animate-blob absolute -top-24 -left-20 h-72 w-72 rounded-full bg-violet/40 blur-3xl sm:h-96 sm:w-96" />
      <div
        className="animate-blob absolute top-1/3 -right-24 h-72 w-72 rounded-full bg-pink/35 blur-3xl sm:h-96 sm:w-96"
        style={{ animationDelay: "-5s" }}
      />
      <div
        className="animate-blob absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-lime/30 blur-3xl sm:h-80 sm:w-80"
        style={{ animationDelay: "-9s" }}
      />
    </div>
  );
}
