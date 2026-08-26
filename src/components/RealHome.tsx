"use client";

import { useSyncExternalStore } from "react";
import { IsoRoom } from "@/components/IsoRoom";
import { SimpleFallback } from "@/components/SimpleFallback";

const STORAGE_KEY = "stop-the-larp";

function subscribe(callback: () => void) {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

function getSnapshot() {
  try {
    return window.localStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot() {
  return false;
}

export function RealHome() {
  const revealed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setRevealed = (value: boolean) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, String(value));
    } catch {
      // localStorage unavailable — the toggle still works for this render
    }
    window.dispatchEvent(new Event("storage"));
  };

  if (revealed) {
    return <SimpleFallback onBack={() => setRevealed(false)} />;
  }

  return (
    <div className="flex h-screen flex-col overflow-hidden px-3 py-3 sm:px-5 sm:py-5">
      <header className="flex shrink-0 items-center justify-end gap-4 pb-2">
        <button
          type="button"
          onClick={() => setRevealed(true)}
          className="rounded-md border border-line bg-card px-3 py-1.5 text-xs font-medium text-ink-soft shadow-sm transition-colors hover:text-ink"
        >
          I&apos;m a recruiter — stop the LARP
        </button>
      </header>

      <main className="soft-card flex min-h-0 flex-1 items-center justify-center overflow-hidden p-2 sm:p-4">
        <IsoRoom className="h-full max-h-full w-full" />
      </main>
    </div>
  );
}
