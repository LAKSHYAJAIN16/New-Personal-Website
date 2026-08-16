"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";

type ToastProps = {
  message: string | null;
  onClose: () => void;
  duration?: number;
};

export function Toast({ message, onClose, duration = 2500 }: ToastProps) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [message, onClose, duration]);

  return (
    <AnimatePresence>
      {message && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.95 }}
          transition={{ duration: 0.2 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-border bg-surface px-5 py-2.5 text-xs font-mono shadow-2xl backdrop-blur-xl text-foreground"
        >
          <span className="inline-block h-2 w-2 rounded-full bg-accent animate-pulse" />
          <span>{message}</span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
