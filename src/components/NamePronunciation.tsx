"use client";

import { useEffect, useState } from "react";

export function NamePronunciation() {
  const [speaking, setSpeaking] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if ("speechSynthesis" in window) window.speechSynthesis.getVoices();
  }, []);

  function pronounce() {
    if (!("speechSynthesis" in window)) {
      setMessage("Pronunciation audio is unavailable in this browser.");
      return;
    }
    if (speaking) { window.speechSynthesis.cancel(); setSpeaking(false); return; }
    const voice = window.speechSynthesis.getVoices().find((item) =>
      item.lang.replace("_", "-").toLowerCase() === "en-us" &&
      /female|zira|aria|jenny|samantha|ava|allison|susan|joanna|salli|ivy|michelle|ana|google us english/i.test(item.name)
    );
    if (!voice) {
      setMessage("A American female voice isn’t available in this browser. Pronounced Luck-SHaye, Jane.");
      return;
    }
    const utterance = new SpeechSynthesisUtterance("Luck-Shaye, Jain");
    utterance.lang = "en-US";
    utterance.voice = voice;
    utterance.rate = 0.85;
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => { setSpeaking(false); setMessage("Pronunciation audio is unavailable right now."); };
    setMessage("");
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  }

  return (
    <>
      <button type="button" className="name-speaker" title="Luck-SHaye, Jane" aria-label={speaking ? "Stop pronunciation" : "Hear Lakshya Jain pronounced: Luck-SHaye, Jane"} aria-pressed={speaking} onClick={pronounce}>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M11 4 6 8H3v8h3l5 4V4Z" />
          <path d="M15 8a6 6 0 0 1 0 8M18 5a10 10 0 0 1 0 14" />
        </svg>
      </button>
      {message && <span role="status" className="max-w-48 text-xs text-ink-soft">{message}</span>}
    </>
  );
}
