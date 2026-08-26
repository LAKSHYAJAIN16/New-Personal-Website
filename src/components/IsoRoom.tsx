// Simplified isometric room, hand-built from SVG polygons (no external art assets).
// Floor + walls are true isometric parallelograms; small props are stylized flat cutouts
// grounded with a soft shadow ellipse, a common shorthand in cozy isometric illustration.

const FLOOR = {
  left: { x: 60, y: 220 },
  mid: { x: 200, y: 140 },
  right: { x: 340, y: 220 },
  front: { x: 200, y: 300 },
};
const WALL_H = 150;

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

// Point inside the left-wall parallelogram (A=floor.left, B=floor.mid, top edge = -WALL_H)
function leftWallPoint(u: number, v: number) {
  const bx = lerp(FLOOR.left.x, FLOOR.mid.x, u);
  const by = lerp(FLOOR.left.y, FLOOR.mid.y, u);
  return { x: bx, y: by - WALL_H * v };
}

function rightWallPoint(u: number, v: number) {
  const bx = lerp(FLOOR.mid.x, FLOOR.right.x, u);
  const by = lerp(FLOOR.mid.y, FLOOR.right.y, u);
  return { x: bx, y: by - WALL_H * v };
}

function poly(points: { x: number; y: number }[]) {
  return points.map((p) => `${p.x},${p.y}`).join(" ");
}

function floorTiles() {
  const tiles: { key: string; points: string; light: boolean }[] = [];
  const steps = 6;
  for (let i = 0; i < steps; i++) {
    for (let j = 0; j < steps; j++) {
      const u0 = i / steps;
      const u1 = (i + 1) / steps;
      const v0 = j / steps;
      const v1 = (j + 1) / steps;
      const p = (u: number, v: number) => {
        const top = { x: lerp(FLOOR.left.x, FLOOR.mid.x, u), y: lerp(FLOOR.left.y, FLOOR.mid.y, u) };
        const bottom = { x: lerp(FLOOR.front.x, FLOOR.right.x, u), y: lerp(FLOOR.front.y, FLOOR.right.y, u) };
        return { x: lerp(top.x, bottom.x, v), y: lerp(top.y, bottom.y, v) };
      };
      tiles.push({
        key: `${i}-${j}`,
        points: poly([p(u0, v0), p(u1, v0), p(u1, v1), p(u0, v1)]),
        light: (i + j) % 2 === 0,
      });
    }
  }
  return tiles;
}

export function IsoRoom({ className = "" }: { className?: string }) {
  const windowCorners = [
    leftWallPoint(0.18, 0.28),
    leftWallPoint(0.52, 0.28),
    leftWallPoint(0.52, 0.82),
    leftWallPoint(0.18, 0.82),
  ];
  const shelfCorners = [
    rightWallPoint(0.15, 0.68),
    rightWallPoint(0.62, 0.68),
    rightWallPoint(0.62, 0.78),
    rightWallPoint(0.15, 0.78),
  ];
  const frameCorners = [
    rightWallPoint(0.2, 0.3),
    rightWallPoint(0.55, 0.3),
    rightWallPoint(0.55, 0.6),
    rightWallPoint(0.2, 0.6),
  ];

  return (
    <svg viewBox="0 0 400 320" className={className} aria-hidden role="img">
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
      <polygon points={poly(windowCorners)} fill="var(--blue)" stroke="#fffdf8" strokeWidth={5} />
      <line x1={leftWallPoint(0.35, 0.28).x} y1={leftWallPoint(0.35, 0.28).y} x2={leftWallPoint(0.35, 0.82).x} y2={leftWallPoint(0.35, 0.82).y} stroke="#fffdf8" strokeWidth={4} />
      <line x1={leftWallPoint(0.18, 0.55).x} y1={leftWallPoint(0.18, 0.55).y} x2={leftWallPoint(0.52, 0.55).x} y2={leftWallPoint(0.52, 0.55).y} stroke="#fffdf8" strokeWidth={4} />

      {/* frame + shelf on right wall */}
      <polygon points={poly(frameCorners)} fill="#fffdf8" stroke="var(--line)" strokeWidth={2} />
      <circle cx={(frameCorners[0].x + frameCorners[2].x) / 2} cy={(frameCorners[0].y + frameCorners[2].y) / 2} r={10} fill="var(--sage-soft)" />
      <polygon points={poly(shelfCorners)} fill="#c9b699" />

      {/* floor */}
      {floorTiles().map((t) => (
        <polygon key={t.key} points={t.points} fill={t.light ? "#fdf4e6" : "#f6e6cd"} />
      ))}
      <polygon
        points={poly([FLOOR.left, FLOOR.mid, FLOOR.right, FLOOR.front])}
        fill="none"
        stroke="#e3cfa8"
        strokeWidth={2}
      />

      {/* rug */}
      <ellipse cx={205} cy={228} rx={62} ry={30} fill="#fffdf8" opacity={0.85} />

      {/* plant, back-left corner */}
      <ellipse cx={95} cy={205} rx={20} ry={8} fill="rgba(74,59,46,0.12)" />
      <path d="M85 200 Q78 165 90 150 Q95 170 92 200 Z" fill="var(--sage)" />
      <path d="M100 200 Q108 160 98 140 Q90 165 95 200 Z" fill="#6f9179" />
      <path d="M92 200 Q100 175 112 165 Q108 185 100 200 Z" fill="var(--sage-soft)" />
      <rect x={80} y={198} width={30} height={20} rx={4} fill="#c9744f" />

      {/* armchair, right-front */}
      <ellipse cx={268} cy={252} rx={48} ry={16} fill="rgba(74,59,46,0.12)" />
      <rect x={232} y={200} width={72} height={46} rx={16} fill="var(--blush)" />
      <rect x={224} y={196} width={20} height={54} rx={10} fill="#eeb3bb" />
      <rect x={296} y={196} width={20} height={54} rx={10} fill="#eeb3bb" />
      <rect x={232} y={172} width={72} height={40} rx={16} fill="#f2bcc3" />

      {/* record player, low table */}
      <ellipse cx={172} cy={258} rx={34} ry={12} fill="rgba(74,59,46,0.12)" />
      <rect x={144} y={228} width={56} height={30} rx={6} fill="#8b6f4e" />
      <circle cx={172} cy={240} r={12} fill="#4a3b2e" />
      <circle cx={172} cy={240} r={3} fill="#eadcc7" />
    </svg>
  );
}
