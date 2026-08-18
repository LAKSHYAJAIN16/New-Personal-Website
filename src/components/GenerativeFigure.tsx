"use client";

import { useEffect, useRef } from "react";

type GenerativeFigureProps = {
  className?: string;
  seed?: number;
  pens?: number;
};

type Pen = {
  fx: number;
  fy: number;
  px: number;
  py: number;
  wobble: number;
};

function penPosition(pen: Pen, time: number, width: number, height: number, pointerX: number, pointerY: number) {
  const cx = width / 2;
  const cy = height / 2;
  const r = Math.min(width, height) * 0.42;
  const wobble = Math.sin(time * 0.05) * pen.wobble;
  return {
    x: cx + Math.sin(time * pen.fx + pen.px) * r * (0.88 + wobble + pointerX * 0.22),
    y: cy + Math.sin(time * pen.fy + pen.py) * r * (0.88 - wobble + pointerY * 0.22),
  };
}

const TRAIL_SAMPLES = 640;
const TRAIL_STEP = 0.02;
const TRAIL_CHUNKS = 16;

/**
 * A live harmonograph: pens trace quasi-periodic Lissajous curves that never
 * exactly repeat, nudged by pointer position like a needle reading a signal.
 * The visible trail is redrawn fresh each frame (fading tail via per-chunk
 * alpha) rather than accumulated, so it stays dense and reacts instantly.
 * Renders one seeded still frame under prefers-reduced-motion.
 */
export function GenerativeFigure({ className, seed = 1, pens = 4 }: GenerativeFigureProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const root = getComputedStyle(document.documentElement);
    const paperColor = root.getPropertyValue("--paper").trim() || "#f6f6f4";
    const inkColor = root.getPropertyValue("--ink").trim() || "#131211";
    const signalColor = root.getPropertyValue("--signal").trim() || "#b3261e";

    let width = 0;
    let height = 0;
    let raf = 0;
    let t = 12;
    let pointerX = 0;
    let pointerY = 0;
    const pointerTarget = { x: 0, y: 0 };

    const penDefs: Pen[] = Array.from({ length: pens }).map((_, i) => ({
      fx: 0.7 + i * 0.31 + seed * 0.037,
      fy: 0.9 + i * 0.24 + seed * 0.021,
      px: i * 1.1,
      py: i * 0.6 + 1.2,
      wobble: 0.15 + i * 0.02,
    }));

    const render = () => {
      ctx.fillStyle = paperColor;
      ctx.fillRect(0, 0, width, height);
      ctx.lineWidth = 1.25;
      ctx.lineJoin = "round";
      ctx.lineCap = "round";

      const chunkSize = TRAIL_SAMPLES / TRAIL_CHUNKS;

      penDefs.forEach((pen, i) => {
        const baseAlpha = i === 0 ? 0.9 : 0.42;
        const color = i === 0 ? signalColor : inkColor;
        ctx.strokeStyle = color;

        for (let c = 0; c < TRAIL_CHUNKS; c++) {
          const age = c / (TRAIL_CHUNKS - 1); // 0 = oldest, 1 = newest
          ctx.globalAlpha = baseAlpha * Math.pow(age, 1.6);
          ctx.beginPath();
          for (let s = 0; s <= chunkSize; s++) {
            const sampleIndex = c * chunkSize + s;
            const time = t - (TRAIL_SAMPLES - sampleIndex) * TRAIL_STEP;
            const p = penPosition(pen, time, width, height, pointerX, pointerY);
            if (s === 0) ctx.moveTo(p.x, p.y);
            else ctx.lineTo(p.x, p.y);
          }
          ctx.stroke();
        }
      });

      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      render();
    };

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointerTarget.x = (e.clientX - rect.left) / rect.width - 0.5;
      pointerTarget.y = (e.clientY - rect.top) / rect.height - 0.5;
    };

    const step = () => {
      pointerX += (pointerTarget.x - pointerX) * 0.05;
      pointerY += (pointerTarget.y - pointerY) * 0.05;
      t += 0.012;
      render();
      raf = requestAnimationFrame(step);
    };

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener("pointermove", onPointerMove);

    if (!reduceMotion) {
      raf = requestAnimationFrame(step);
    }

    return () => {
      observer.disconnect();
      canvas.removeEventListener("pointermove", onPointerMove);
      cancelAnimationFrame(raf);
    };
  }, [seed, pens]);

  return <canvas ref={canvasRef} className={className} aria-hidden />;
}
