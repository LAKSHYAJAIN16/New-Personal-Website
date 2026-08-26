"use client";

import { useSyncExternalStore } from "react";
import { EdmGate } from "./EdmGate";
import { RealHome } from "./RealHome";

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

export function HomeGateway() {
  const revealed = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const reveal = () => {
    try {
      window.localStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // localStorage unavailable — the toggle still works for this render
    }
    window.dispatchEvent(new Event("storage"));
  };

  return revealed ? <RealHome /> : <EdmGate onReveal={reveal} />;
}
