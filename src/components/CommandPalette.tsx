"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/projects";

type CommandPaletteProps = {
  isOpen: boolean;
  onClose: () => void;
  onShowToast: (msg: string) => void;
};

export function CommandPalette({ isOpen, onClose, onShowToast }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          // Open handled by parent or state
          window.dispatchEvent(new CustomEvent("open-command-palette"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const actions = [
    {
      id: "sec-about",
      category: "Navigation",
      label: "Go to About",
      action: () => {
        window.location.hash = "#about";
        onClose();
      },
    },
    {
      id: "sec-projects",
      category: "Navigation",
      label: "Go to Projects",
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    },
    {
      id: "sec-experience",
      category: "Navigation",
      label: "Go to Experience",
      action: () => {
        window.location.hash = "#experience";
        onClose();
      },
    },
    {
      id: "sec-terminal",
      category: "Navigation",
      label: "Go to Terminal CLI",
      action: () => {
        window.location.hash = "#terminal";
        onClose();
      },
    },
    {
      id: "sec-contact",
      category: "Navigation",
      label: "Go to Contact",
      action: () => {
        window.location.hash = "#contact";
        onClose();
      },
    },
    {
      id: "copy-email",
      category: "Quick Actions",
      label: "Copy Email (lakshya16jain@gmail.com)",
      action: () => {
        navigator.clipboard.writeText("lakshya16jain@gmail.com");
        onShowToast("Email copied to clipboard!");
        onClose();
      },
    },
    {
      id: "open-github",
      category: "Links",
      label: "View GitHub Profile",
      action: () => {
        window.open("https://github.com/LAKSHYAJAIN16", "_blank");
        onClose();
      },
    },
  ];

  // Add project links dynamically
  projects.forEach((p) => {
    actions.push({
      id: `proj-${p.id}`,
      category: "Projects",
      label: `View Project: ${p.title}`,
      action: () => {
        window.location.hash = "#projects";
        onClose();
      },
    });
  });

  const filtered = actions.filter((a) =>
    a.label.toLowerCase().includes(query.toLowerCase()) ||
    a.category.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-background/80 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.15 }}
            className="relative z-10 w-full max-w-xl overflow-hidden rounded-2xl border border-border bg-surface shadow-2xl"
          >
            <div className="flex items-center border-b border-border px-4 py-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-3 text-muted"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                type="text"
                autoFocus
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Type a command or search..."
                className="w-full bg-transparent text-sm text-foreground placeholder-muted focus:outline-none font-mono"
              />
              <kbd className="rounded border border-border bg-surface-hover px-2 py-0.5 text-[10px] font-mono text-muted">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto p-2">
              {filtered.length === 0 ? (
                <div className="py-8 text-center text-sm text-muted font-mono">
                  No matching results found.
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={item.action}
                    className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm text-muted transition-colors hover:bg-surface-hover hover:text-foreground"
                  >
                    <span className="font-mono text-xs">{item.label}</span>
                    <span className="rounded bg-border/50 px-2 py-0.5 text-[10px] font-mono text-muted">
                      {item.category}
                    </span>
                  </button>
                ))
              )}
            </div>

            <div className="flex items-center justify-between border-t border-border px-4 py-2 text-[11px] font-mono text-muted">
              <span>Use ↑↓ to navigate</span>
              <span>Press enter to select</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
