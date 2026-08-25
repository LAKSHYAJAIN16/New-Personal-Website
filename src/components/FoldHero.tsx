const COLS = 7;
const ROWS = 5;
const TILE_W = 64;
const TILE_H = 74;

type Facet = {
  key: string;
  points: string;
  fill: string;
  delay: number;
};

function buildFacets(): Facet[] {
  const facets: Facet[] = [];
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLS; col++) {
      const x = col * TILE_W + (row % 2 === 1 ? TILE_W / 2 : 0);
      const y = row * (TILE_H / 2);
      const isMountain = (row + col) % 2 === 0;
      const top = `${x + TILE_W / 2},${y}`;
      const right = `${x + TILE_W},${y + TILE_H / 2}`;
      const bottom = `${x + TILE_W / 2},${y + TILE_H}`;
      const left = `${x},${y + TILE_H / 2}`;
      const distance = row + col;
      facets.push({
        key: `${row}-${col}`,
        points: `${top} ${right} ${bottom} ${left}`,
        fill: isMountain ? "var(--mountain)" : "var(--valley)",
        delay: distance * 0.028,
      });
    }
  }
  return facets;
}

const FACETS = buildFacets();
const VIEW_W = COLS * TILE_W + TILE_W / 2;
const VIEW_H = ROWS * (TILE_H / 2) + TILE_H / 2;

export function FoldHero() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        preserveAspectRatio="xMaxYMin slice"
        className="fold-reveal absolute -right-10 -top-6 h-[130%] w-[85%] opacity-90 sm:w-[65%]"
      >
        {FACETS.map((f) => (
          <polygon
            key={f.key}
            className="fold-facet"
            points={f.points}
            fill={f.fill}
            fillOpacity={0.5}
            stroke={f.fill === "var(--mountain)" ? "var(--ink)" : "var(--data)"}
            strokeOpacity={0.35}
            strokeWidth={1}
            style={{ animationDelay: `${0.5 + f.delay}s` }}
          />
        ))}
      </svg>
    </div>
  );
}
