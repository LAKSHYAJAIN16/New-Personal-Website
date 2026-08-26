"use client";

type EdmGateProps = {
  onReveal: () => void;
};

export function EdmGate({ onReveal }: EdmGateProps) {
  return (
    <div className="edm-mode relative min-h-screen overflow-hidden">
      <div
        className="edm-blob-a pointer-events-none absolute left-[-10%] top-[-10%] h-[55vmax] w-[55vmax] rounded-full opacity-60 blur-[90px]"
        style={{ background: "radial-gradient(circle, #ff2e9a, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="edm-blob-b pointer-events-none absolute bottom-[-15%] right-[-10%] h-[60vmax] w-[60vmax] rounded-full opacity-50 blur-[100px]"
        style={{ background: "radial-gradient(circle, #00e5ff, transparent 70%)" }}
        aria-hidden
      />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-20 text-center sm:px-6">
        <p className="edm-flicker mb-6 flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-[#00e5ff]">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff2e9a]" aria-hidden />
          Live now — shipping code to a crowd near you
        </p>

        <h1 className="text-6xl font-extrabold uppercase leading-[0.9] tracking-tight sm:text-8xl">
          <span className="edm-glow-pink block text-[#ff2e9a]">Lakshya</span>
          <span className="edm-glow-cyan block text-[#00e5ff]">Jain</span>
        </h1>

        <p className="mt-8 max-w-md font-mono text-sm uppercase tracking-[0.2em] text-white/70 sm:text-base">
          Software Engineer &middot; Full Stack &middot; All Night &middot; No Refunds
        </p>

        <a
          href="/work"
          className="mt-10 rounded-full bg-[#ff2e9a] px-8 py-4 text-lg font-bold uppercase tracking-wide text-white shadow-[0_0_40px_rgba(255,46,154,0.6)] transition-transform hover:scale-105"
        >
          Enter →
        </a>

        <button
          type="button"
          onClick={onReveal}
          className="mt-16 rounded-md border border-white/20 bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50"
        >
          I&apos;m a recruiter — stop the LARP
        </button>
      </div>
    </div>
  );
}
