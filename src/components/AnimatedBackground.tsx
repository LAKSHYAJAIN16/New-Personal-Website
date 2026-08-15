"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function AnimatedBackground() {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20 });
  const sy = useSpring(my, { stiffness: 40, damping: 20 });

  const x1 = useTransform(sx, (v) => v * 0.04);
  const y1 = useTransform(sy, (v) => v * 0.04);
  const x2 = useTransform(sx, (v) => v * -0.03);
  const y2 = useTransform(sy, (v) => v * -0.03);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      mx.set(e.clientX - window.innerWidth / 2);
      my.set(e.clientY - window.innerHeight / 2);
    }
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [mx, my]);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden -z-10">
      <motion.div
        style={{ x: x1, y: y1 }}
        className="absolute -top-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        style={{ x: x2, y: y2 }}
        className="absolute top-1/3 right-0 h-[28rem] w-[28rem] rounded-full bg-violet-500/10 blur-[120px]"
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,transparent_0%,var(--background)_75%)]" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='60' height='60'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
