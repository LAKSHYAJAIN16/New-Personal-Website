"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Theme = "lime" | "cyan" | "purple" | "amber";

const themes: { id: Theme; name: string; color: string }[] = [
  { id: "lime", name: "Cyber Lime", color: "#b8ff3d" },
  { id: "cyan", name: "Electric Cyan", color: "#00f3ff" },
  { id: "purple", name: "Neon Violet", color: "#b066ff" },
  { id: "amber", name: "Solar Gold", color: "#ffb703" },
];

export function ThemeSwitcher({ onSelectToast }: { onSelectToast?: (msg: string) => void }) {
  const [currentTheme, setCurrentTheme] = useState<Theme>("lime");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme") as Theme;
    if (saved && ["lime", "cyan", "purple", "amber"].includes(saved)) {
      setCurrentTheme(saved);
      if (saved === "lime") {
        document.documentElement.removeAttribute("data-theme");
      } else {
        document.documentElement.setAttribute("data-theme", saved);
      }
    }
  }, []);

  const changeTheme = (themeId: Theme, name: string) => {
    setCurrentTheme(themeId);
    if (themeId === "lime") {
      document.documentElement.removeAttribute("data-theme");
    } else {
      document.documentElement.setAttribute("data-theme", themeId);
    }
    localStorage.setItem("portfolio-theme", themeId);
    if (onSelectToast) {
      onSelectToast(`Accent changed to ${name}`);
    }
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="mb-3 flex flex-col gap-1.5 rounded-2xl border border-border bg-surface/90 p-2 backdrop-blur-xl shadow-2xl"
          >
            <div className="px-2 py-1 text-[10px] font-mono uppercase tracking-wider text-muted">
              Accent Color
            </div>
            {themes.map((t) => (
              <button
                key={t.id}
                onClick={() => changeTheme(t.id, t.name)}
                className={`flex items-center gap-2.5 rounded-xl px-3 py-1.5 text-xs font-mono transition-colors text-left ${
                  currentTheme === t.id
                    ? "bg-surface-hover text-foreground font-medium"
                    : "text-muted hover:text-foreground hover:bg-surface-hover/50"
                }`}
              >
                <span
                  className="h-2.5 w-2.5 rounded-full ring-1 ring-white/10"
                  style={{ backgroundColor: t.color }}
                />
                <span>{t.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        title="Customize Theme Accent"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/80 text-muted transition-all hover:border-accent hover:text-accent hover:scale-105 active:scale-95 backdrop-blur-md shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor" />
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor" />
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.92 0 1.7-.72 1.7-1.61 0-.43-.17-.83-.44-1.13-.27-.3-.43-.7-.43-1.13 0-.89.72-1.61 1.61-1.61h1.56c3.87 0 7-3.13 7-7 0-5.5-4.5-9.5-11-9.5z" />
        </svg>
      </button>
    </div>
  );
}
