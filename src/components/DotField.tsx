"use client";

import { useEffect, useRef } from "react";

const SPACING = 26;
const CURSOR_RADIUS = 140;
const RIPPLE_SPEED = 0.9; // px per ms
const RIPPLE_WIDTH = 60;
const RIPPLE_LIFE = 1400; // ms

type Dot = { bx: number; by: number; x: number; y: number; vx: number; vy: number };
type Ripple = { x: number; y: number; t0: number };

// Monochrome dot grid behind the page: slow ambient waves, dots pushed away
// from the cursor, and a ripple on click. Static when reduced motion is on.
export function DotField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let dots: Dot[] = [];
    let ripples: Ripple[] = [];
    let width = 0;
    let height = 0;
    let color = "#171717";
    let raf = 0;
    const pointer = { x: -9999, y: -9999 };

    const readColor = () => {
      color = getComputedStyle(document.documentElement).getPropertyValue("--ink").trim() || "#171717";
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const offsetX = (width % SPACING) / 2;
      const offsetY = (height % SPACING) / 2;
      for (let y = offsetY; y <= height; y += SPACING) {
        for (let x = offsetX; x <= width; x += SPACING) {
          dots.push({ bx: x, by: y, x, y, vx: 0, vy: 0 });
        }
      }
      if (reduceMotion.matches) draw(0);
    };

    const draw = (now: number) => {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = color;
      const t = now / 1000;
      const animate = !reduceMotion.matches;
      ripples = ripples.filter((r) => now - r.t0 < RIPPLE_LIFE);

      for (const d of dots) {
        let fx = 0;
        let fy = 0;
        let boost = 0;

        if (animate) {
          const dx = d.x - pointer.x;
          const dy = d.y - pointer.y;
          const dist = Math.hypot(dx, dy);
          if (dist < CURSOR_RADIUS && dist > 0.01) {
            const strength = (1 - dist / CURSOR_RADIUS) ** 2;
            fx += (dx / dist) * strength * 4;
            fy += (dy / dist) * strength * 4;
            boost = Math.max(boost, strength);
          }

          for (const r of ripples) {
            const age = now - r.t0;
            const front = age * RIPPLE_SPEED;
            const rdx = d.bx - r.x;
            const rdy = d.by - r.y;
            const rdist = Math.hypot(rdx, rdy);
            const band = 1 - Math.abs(rdist - front) / RIPPLE_WIDTH;
            if (band > 0 && rdist > 0.01) {
              const fade = 1 - age / RIPPLE_LIFE;
              fx += (rdx / rdist) * band * fade * 3;
              fy += (rdy / rdist) * band * fade * 3;
              boost = Math.max(boost, band * fade);
            }
          }

          // Spring back toward the grid position with damping.
          d.vx = (d.vx + fx + (d.bx - d.x) * 0.06) * 0.82;
          d.vy = (d.vy + fy + (d.by - d.y) * 0.06) * 0.82;
          d.x += d.vx;
          d.y += d.vy;
        }

        // Two crossing sine waves give a slow drifting shimmer.
        const wave = animate
          ? (Math.sin(d.bx * 0.008 + t * 0.6) + Math.sin(d.by * 0.011 - t * 0.45 + d.bx * 0.004)) / 2
          : 0;
        const size = 1 + (wave + 1) * 0.3 + boost * 2;
        ctx.globalAlpha = 0.2 + (wave + 1) * 0.08 + boost * 0.6;
        ctx.fillRect(d.x - size / 2, d.y - size / 2, size, size);
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      draw(now);
      raf = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(raf);
      if (reduceMotion.matches) draw(0);
      else raf = requestAnimationFrame(loop);
    };

    const onMove = (e: PointerEvent) => {
      pointer.x = e.clientX;
      pointer.y = e.clientY;
    };
    const onLeave = () => {
      pointer.x = -9999;
      pointer.y = -9999;
    };
    const onDown = (e: PointerEvent) => {
      if (reduceMotion.matches) return;
      ripples.push({ x: e.clientX, y: e.clientY, t0: performance.now() });
    };

    const themeObserver = new MutationObserver(() => {
      readColor();
      if (reduceMotion.matches) draw(0);
    });
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

    readColor();
    resize();
    start();
    window.addEventListener("resize", resize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerdown", onDown, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    reduceMotion.addEventListener("change", start);

    return () => {
      cancelAnimationFrame(raf);
      themeObserver.disconnect();
      window.removeEventListener("resize", resize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerdown", onDown);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      reduceMotion.removeEventListener("change", start);
    };
  }, []);

  return <canvas ref={canvasRef} aria-hidden className="dot-field" />;
}
