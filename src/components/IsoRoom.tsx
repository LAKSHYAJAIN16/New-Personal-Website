"use client";

// Interactive isometric room, hand-built from SVG polygons (no external art assets).
// Floor + walls are parametric isometric parallelograms sized to fill a landscape
// viewport. Furniture pieces double as real <a> navigation hotspots (a project
// gallery, a notebook, a mail slot, a window), two props are pure info displays
// (a jukebox, a bookshelf), and a small acorn character can be walked around the
// floor with arrow keys or by clicking a tile.

import { useCallback, useEffect, useRef, useState } from "react";
import { projects } from "@/data/projects";

const TILE = { x: 30, y: 10 };
const N_U = 14; // left -> mid (back) axis, the "wide" axis
const N_V = 8; // left -> front axis, the "depth" axis
const WALL_H = 150;
const ORIGIN = { x: 20, y: 300 };

const FLOOR = {
  left: ORIGIN,
  mid: { x: ORIGIN.x + N_U * TILE.x, y: ORIGIN.y - N_U * TILE.y },
  front: { x: ORIGIN.x + N_V * TILE.x, y: ORIGIN.y + N_V * TILE.y },
  right: { x: ORIGIN.x + (N_U + N_V) * TILE.x, y: ORIGIN.y - N_U * TILE.y + N_V * TILE.y },
};
const VIEW_W = (N_U + N_V) * TILE.x + 20;
const VIEW_H = N_U * TILE.y + WALL_H + N_V * TILE.y + 30;

const PORTRAIT_COLORS = ["var(--blush)", "var(--blue)", "var(--sage-soft)", "#f3d9a8"];

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

function lerpPt(a: { x: number; y: number }, b: { x: number; y: number }, t: number) {
  return { x: lerp(a.x, b.x, t), y: lerp(a.y, b.y, t) };
}

function leftWallPoint(u: number, v: number) {
  const b = lerpPt(FLOOR.left, FLOOR.mid, u);
  return { x: b.x, y: b.y - WALL_H * v };
}

function rightWallPoint(u: number, v: number) {
  const b = lerpPt(FLOOR.mid, FLOOR.right, u);
  return { x: b.x, y: b.y - WALL_H * v };
}

function floorPoint(u: number, v: number) {
  const top = lerpPt(FLOOR.left, FLOOR.mid, u);
  const bottom = lerpPt(FLOOR.front, FLOOR.right, u);
  return lerpPt(top, bottom, v);
}

function poly(points: { x: number; y: number }[]) {
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}

function centroid(points: { x: number; y: number }[]) {
  const x = points.reduce((s, p) => s + p.x, 0) / points.length;
  const y = points.reduce((s, p) => s + p.y, 0) / points.length;
  return { x, y };
}

function floorTiles() {
  const tiles: { key: string; points: string; light: boolean; u: number; v: number }[] = [];
  for (let i = 0; i < N_U; i++) {
    for (let j = 0; j < N_V; j++) {
      const u0 = i / N_U;
      const u1 = (i + 1) / N_U;
      const v0 = j / N_V;
      const v1 = (j + 1) / N_V;
      tiles.push({
        key: `${i}-${j}`,
        points: poly([floorPoint(u0, v0), floorPoint(u1, v0), floorPoint(u1, v1), floorPoint(u0, v1)]),
        light: (i + j) % 2 === 0,
        u: (i + 0.5) / N_U,
        v: (j + 0.5) / N_V,
      });
    }
  }
  return tiles;
}

type Hotspot = {
  key: string;
  href: string;
  label: string;
  points: { x: number; y: number }[];
  labelPos: { x: number; y: number };
};

const STEP_U = 1 / N_U;
const STEP_V = 1 / N_V;

function clamp01(n: number) {
  return Math.max(0, Math.min(1, n));
}

function box(cx: number, cy: number, hw: number, hh: number) {
  return [
    { x: cx - hw, y: cy - hh },
    { x: cx + hw, y: cy - hh },
    { x: cx + hw, y: cy + hh },
    { x: cx - hw, y: cy + hh },
  ];
}

// Room geometry depends only on the constants above (tile size/count, project
// data) — none of it depends on component state, so it's computed once at
// module scope instead of on every character-move render.
const FLOOR_TILES = floorTiles();

const WINDOW_CORNERS = [
  leftWallPoint(0.1, 0.28),
  leftWallPoint(0.32, 0.28),
  leftWallPoint(0.32, 0.82),
  leftWallPoint(0.1, 0.82),
];

const GALLERY_ITEMS = projects.slice(0, 4).map((project, i) => {
  const u0 = 0.06 + i * 0.225;
  const u1 = u0 + 0.18;
  const corners = [
    rightWallPoint(u0, 0.5),
    rightWallPoint(u1, 0.5),
    rightWallPoint(u1, 0.85),
    rightWallPoint(u0, 0.85),
  ];
  return { project, corners, center: centroid(corners), color: PORTRAIT_COLORS[i % PORTRAIT_COLORS.length] };
});

const FRAME_CORNERS = [
  rightWallPoint(0.35, 0.15),
  rightWallPoint(0.62, 0.15),
  rightWallPoint(0.62, 0.4),
  rightWallPoint(0.35, 0.4),
];
const FRAME_CENTER = centroid(FRAME_CORNERS);

const JUKEBOX_POS = floorPoint(0.65, 0.25);
const BOOKSHELF_POS = floorPoint(0.15, 0.65);
const NOTEBOOK_POS = floorPoint(0.45, 0.85);
const MAIL_POS = floorPoint(0.85, 0.15);
const CHAIR_POS = floorPoint(0.8, 0.6);
const PLANT_POS = floorPoint(0.08, 0.15);
const RUG_POS = floorPoint(0.45, 0.45);

const HOTSPOTS: Hotspot[] = [
  {
    key: "about",
    href: "/about",
    label: "About",
    points: [
      { x: WINDOW_CORNERS[0].x - 8, y: WINDOW_CORNERS[0].y - 8 },
      { x: WINDOW_CORNERS[1].x + 8, y: WINDOW_CORNERS[1].y - 8 },
      { x: WINDOW_CORNERS[2].x + 8, y: WINDOW_CORNERS[2].y + 8 },
      { x: WINDOW_CORNERS[3].x - 8, y: WINDOW_CORNERS[3].y + 8 },
    ],
    labelPos: centroid(WINDOW_CORNERS),
  },
  {
    key: "photobooth",
    href: "/photobooth",
    label: "Photos",
    points: [
      { x: FRAME_CORNERS[0].x - 8, y: FRAME_CORNERS[0].y - 8 },
      { x: FRAME_CORNERS[1].x + 8, y: FRAME_CORNERS[1].y - 8 },
      { x: FRAME_CORNERS[2].x + 8, y: FRAME_CORNERS[2].y + 8 },
      { x: FRAME_CORNERS[3].x - 8, y: FRAME_CORNERS[3].y + 8 },
    ],
    labelPos: FRAME_CENTER,
  },
  {
    key: "writing",
    href: "/writing",
    label: "Notebook",
    points: box(NOTEBOOK_POS.x, NOTEBOOK_POS.y - 6, 36, 28),
    labelPos: { x: NOTEBOOK_POS.x, y: NOTEBOOK_POS.y - 40 },
  },
  {
    key: "contact",
    href: "/contact",
    label: "Say hi",
    points: box(MAIL_POS.x, MAIL_POS.y - 14, 22, 32),
    labelPos: { x: MAIL_POS.x, y: MAIL_POS.y - 54 },
  },
  ...GALLERY_ITEMS.map((g, i) => ({
    key: `project-${i}`,
    href: g.project.href,
    label: g.project.title,
    points: [
      { x: g.corners[0].x - 4, y: g.corners[0].y - 4 },
      { x: g.corners[1].x + 4, y: g.corners[1].y - 4 },
      { x: g.corners[2].x + 4, y: g.corners[2].y + 4 },
      { x: g.corners[3].x - 4, y: g.corners[3].y + 4 },
    ],
    labelPos: g.center,
  })),
];

export function IsoRoom({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState({ u: 0.45, v: 0.45 });
  const rootRef = useRef<SVGSVGElement>(null);

  const move = useCallback((du: number, dv: number) => {
    setPos((p) => ({ u: clamp01(p.u + du), v: clamp01(p.v + dv) }));
  }, []);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const onKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
        case "w":
        case "W":
          e.preventDefault();
          move(0, -STEP_V);
          break;
        case "ArrowDown":
        case "s":
        case "S":
          e.preventDefault();
          move(0, STEP_V);
          break;
        case "ArrowLeft":
        case "a":
        case "A":
          e.preventDefault();
          move(-STEP_U, 0);
          break;
        case "ArrowRight":
        case "d":
        case "D":
          e.preventDefault();
          move(STEP_U, 0);
          break;
      }
    };
    el.addEventListener("keydown", onKeyDown);
    return () => el.removeEventListener("keydown", onKeyDown);
  }, [move]);

  const charPos = floorPoint(pos.u, pos.v);

  return (
    <svg
      ref={rootRef}
      viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
      className={`${className} room-svg`}
      role="application"
      aria-label="An illustrated room. Use the arrow keys to walk your little acorn around, or click furniture to explore the site."
      tabIndex={0}
      preserveAspectRatio="xMidYMid meet"
    >
      {/* left wall */}
      <polygon
        points={poly([leftWallPoint(0, 0), leftWallPoint(1, 0), leftWallPoint(1, 1), leftWallPoint(0, 1)])}
        fill="var(--sage-soft)"
      />
      {/* right wall */}
      <polygon
        points={poly([rightWallPoint(0, 0), rightWallPoint(1, 0), rightWallPoint(1, 1), rightWallPoint(0, 1)])}
        fill="#eef2ea"
      />

      {/* window on left wall */}
      <polygon points={poly(WINDOW_CORNERS)} fill="var(--blue)" stroke="#fffdf8" strokeWidth={6} />
      <line x1={leftWallPoint(0.21, 0.28).x} y1={leftWallPoint(0.21, 0.28).y} x2={leftWallPoint(0.21, 0.82).x} y2={leftWallPoint(0.21, 0.82).y} stroke="#fffdf8" strokeWidth={5} />
      <line x1={leftWallPoint(0.1, 0.55).x} y1={leftWallPoint(0.1, 0.55).y} x2={leftWallPoint(0.32, 0.55).x} y2={leftWallPoint(0.32, 0.55).y} stroke="#fffdf8" strokeWidth={5} />

      {/* project gallery, right wall */}
      {GALLERY_ITEMS.map((g, i) => (
        <g key={`portrait-${i}`} pointerEvents="none">
          <polygon points={poly(g.corners)} fill="#fffdf8" stroke="var(--line)" strokeWidth={2} />
          <circle cx={g.center.x} cy={g.center.y - 4} r={9} fill={g.color} />
          <rect x={g.center.x - 12} y={g.center.y + 8} width={24} height={6} rx={3} fill={g.color} />
        </g>
      ))}

      {/* photo frame, right wall — Photos */}
      <polygon points={poly(FRAME_CORNERS)} fill="#fffdf8" stroke="var(--line)" strokeWidth={2} pointerEvents="none" />
      <circle cx={FRAME_CENTER.x} cy={FRAME_CENTER.y} r={13} fill="var(--sage-soft)" pointerEvents="none" />

      {/* floor — click a tile to walk there */}
      {FLOOR_TILES.map((t) => (
        <polygon
          key={t.key}
          points={t.points}
          fill={t.light ? "#fdf4e6" : "#f6e6cd"}
          className="room-floor-tile"
          onClick={() => setPos({ u: t.u, v: t.v })}
        />
      ))}
      <polygon
        points={poly([FLOOR.left, FLOOR.mid, FLOOR.right, FLOOR.front])}
        fill="none"
        stroke="#e3cfa8"
        strokeWidth={2}
        pointerEvents="none"
      />

      {/* rug */}
      <ellipse cx={RUG_POS.x} cy={RUG_POS.y} rx={130} ry={50} fill="#fffdf8" opacity={0.85} pointerEvents="none" />

      {/* plant, back-left corner (decorative) */}
      <g transform={`translate(${PLANT_POS.x} ${PLANT_POS.y}) scale(1.6)`} pointerEvents="none">
        <ellipse cx={0} cy={-3} rx={20} ry={8} fill="rgba(74,59,46,0.12)" />
        <path d="M-10,-8 Q-17,-43 -5,-58 Q0,-38 -3,-8 Z" fill="var(--sage)" />
        <path d="M5,-8 Q13,-48 3,-68 Q-5,-43 0,-8 Z" fill="#6f9179" />
        <path d="M-3,-8 Q5,-33 17,-43 Q13,-23 5,-8 Z" fill="var(--sage-soft)" />
        <rect x={-15} y={-10} width={30} height={20} rx={4} fill="#c9744f" />
      </g>

      {/* armchair (decorative reading nook) */}
      <g transform={`translate(${CHAIR_POS.x} ${CHAIR_POS.y}) scale(1.5)`} pointerEvents="none">
        <ellipse cx={0} cy={29} rx={48} ry={16} fill="rgba(74,59,46,0.12)" />
        <rect x={-36} y={-23} width={72} height={46} rx={16} fill="var(--blush)" />
        <rect x={-44} y={-27} width={20} height={54} rx={10} fill="#eeb3bb" />
        <rect x={28} y={-27} width={20} height={54} rx={10} fill="#eeb3bb" />
        <rect x={-36} y={-51} width={72} height={40} rx={16} fill="#f2bcc3" />
      </g>

      {/* bookshelf — currently reading (info only) */}
      <g pointerEvents="none">
        <g transform={`translate(${BOOKSHELF_POS.x} ${BOOKSHELF_POS.y}) scale(1.5)`}>
          <ellipse cx={0} cy={30} rx={38} ry={13} fill="rgba(74,59,46,0.12)" />
          <rect x={-32} y={-56} width={64} height={86} rx={4} fill="#a9805a" />
          <rect x={-32} y={-56} width={64} height={4} fill="#8b6f4e" />
          <rect x={-32} y={-22} width={64} height={4} fill="#8b6f4e" />
          <rect x={-32} y={12} width={64} height={4} fill="#8b6f4e" />
          <rect x={-27} y={-52} width={8} height={26} fill="var(--blush)" />
          <rect x={-17} y={-52} width={7} height={26} fill="var(--sage)" />
          <rect x={-8} y={-52} width={9} height={26} fill="var(--blue)" />
          <rect x={2} y={-52} width={7} height={26} fill="#f3d9a8" />
          <rect x={10} y={-52} width={8} height={26} fill="var(--blush)" />
          <rect x={-27} y={-18} width={9} height={26} fill="#f3d9a8" />
          <rect x={-16} y={-18} width={7} height={26} fill="var(--blue)" />
          <rect x={-7} y={-18} width={8} height={26} fill="var(--sage)" />
          <rect x={3} y={-18} width={7} height={26} fill="var(--blush)" />
        </g>
        <g transform={`translate(${BOOKSHELF_POS.x}, ${BOOKSHELF_POS.y - 92})`}>
          <rect x={-58} y={-13} width={116} height={22} rx={11} fill="var(--ink)" />
          <text x={0} y={4} textAnchor="middle" fontSize={11} fontFamily="var(--font-sans), sans-serif" fill="#fffdf8">
            Reading: [Book Title]
          </text>
        </g>
      </g>

      {/* jukebox — now playing (info only) */}
      <g pointerEvents="none">
        <g transform={`translate(${JUKEBOX_POS.x} ${JUKEBOX_POS.y}) scale(1.6)`}>
          <ellipse cx={0} cy={15} rx={34} ry={12} fill="rgba(74,59,46,0.12)" />
          <rect x={-28} y={-15} width={56} height={30} rx={6} fill="#8b6f4e" />
          <circle cx={0} cy={-3} r={12} fill="#4a3b2e" />
          <circle cx={0} cy={-3} r={3} fill="#eadcc7" />
        </g>
        <g transform={`translate(${JUKEBOX_POS.x}, ${JUKEBOX_POS.y - 62})`}>
          <rect x={-70} y={-13} width={140} height={22} rx={11} fill="var(--ink)" />
          <text x={0} y={4} textAnchor="middle" fontSize={10.5} fontFamily="var(--font-sans), sans-serif" fill="#fffdf8">
            Playing: [Song] by [Artist]
          </text>
        </g>
      </g>

      {/* notebook, low table — Writing */}
      <g transform={`translate(${NOTEBOOK_POS.x} ${NOTEBOOK_POS.y}) scale(1.5)`} pointerEvents="none">
        <ellipse cx={0} cy={20} rx={30} ry={10} fill="rgba(74,59,46,0.12)" />
        <rect x={-26} y={-4} width={52} height={22} rx={4} fill="#c9744f" />
        <polygon points="-24,-4 0,-14 24,-4 0,6" fill="#fffdf8" stroke="var(--line)" strokeWidth={1} />
        <line x1={0} y1={-14} x2={0} y2={6} stroke="var(--line)" strokeWidth={1} />
      </g>

      {/* mail slot, back-right wall foot — Say hi */}
      <g transform={`translate(${MAIL_POS.x} ${MAIL_POS.y}) scale(1.5)`} pointerEvents="none">
        <ellipse cx={0} cy={22} rx={16} ry={7} fill="rgba(74,59,46,0.12)" />
        <rect x={-12} y={-14} width={24} height={34} rx={3} fill="var(--blush)" stroke="#4a3b2e" strokeWidth={1.2} />
        <rect x={-8} y={-6} width={16} height={4} rx={1.5} fill="#4a3b2e" />
      </g>

      {/* the little acorn character */}
      <g
        className="room-character"
        style={{ transform: `translate(${charPos.x}px, ${charPos.y}px) scale(1.4)` }}
        pointerEvents="none"
      >
        <ellipse cx={0} cy={16} rx={13} ry={5} fill="rgba(74,59,46,0.18)" />
        <ellipse cx={0} cy={2} rx={11} ry={13} fill="#f0dcc2" stroke="#4a3b2e" strokeWidth={1.5} />
        <path d="M-11 -6 Q0 -20 11 -6 Q0 -12 -11 -6 Z" fill="#8b6f4e" stroke="#4a3b2e" strokeWidth={1.5} />
        <rect x={-2} y={-19} width={4} height={5} rx={1.5} fill="#4a3b2e" />
        <circle cx={-4} cy={2} r={1.6} fill="#4a3b2e" />
        <circle cx={4} cy={2} r={1.6} fill="#4a3b2e" />
        <circle cx={-6.5} cy={6} r={2} fill="#f0b6a8" opacity={0.7} />
        <circle cx={6.5} cy={6} r={2} fill="#f0b6a8" opacity={0.7} />
      </g>

      {/* interactive HOTSPOTS */}
      {HOTSPOTS.map((h) => (
        <a key={h.key} href={h.href} className="room-hotspot" aria-label={h.label}>
          <polygon points={poly(h.points)} className="room-hotspot-hit" fill="transparent" />
          <polygon points={poly(h.points)} className="room-hotspot-highlight" fill="none" stroke="var(--sage)" strokeWidth={3} strokeLinejoin="round" />
          <g className="room-hotspot-label" transform={`translate(${h.labelPos.x}, ${h.labelPos.y - 14})`}>
            <rect x={-40} y={-13} width={80} height={22} rx={11} fill="var(--ink)" />
            <text x={0} y={3} textAnchor="middle" fontSize={11} fontFamily="var(--font-sans), sans-serif" fill="#fffdf8">
              {h.label}
            </text>
          </g>
        </a>
      ))}
    </svg>
  );
}
