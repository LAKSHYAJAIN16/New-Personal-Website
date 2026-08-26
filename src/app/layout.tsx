import type { Metadata } from "next";
import { Baloo_2, IBM_Plex_Mono, Quicksand } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const baloo = Baloo_2({
  variable: "--font-baloo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Lakshya Jain",
  description: "Personal website of Lakshya Jain.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

const DIRECTION_CONTRACT = `
THESIS: A personal site as a cozy decoratable room -- Cyworld-minihompy-inspired warmth and a hand-illustrated isometric scene, refusing both the loud "instrument world" and the bare-minimal editorial builds tried earlier this session.
OWN-WORLD: Porcelain-cream ground, deep warm-brown ink, sage green as the primary accent, blush pink and rain-cloud blue as quiet secondary tints; Baloo 2 (chunky rounded) for headlines, Quicksand for body/UI, IBM Plex Mono only for tiny structural bits. Fully rounded pill buttons and large soft-shadowed cards -- the opposite of the sharp/flat worlds tried earlier.
STORY: A visitor steps into Lakshya's little room -- an illustrated isometric scene up front, real content (about, work, writing, photos, contact) reached the way you'd browse a cozy home page, not a resume.
FIRST VIEWPORT: A hand-drawn isometric room (floor, walls, window, plant, chair, record player) sits beside the name and a warm one-line intro; a soft "today's mood" readout replaces any fabricated stat.
FORM: User-picked challenger from a served decision round (Cyworld minihompy room), fused against the product's real content; seed key 83b714fd.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
`;

function DirectionContract() {
  return (
    <div
      aria-hidden
      style={{ display: "none" }}
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: `<!--${DIRECTION_CONTRACT}-->` }}
    />
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${plexMono.variable} ${quicksand.variable} ${baloo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <DirectionContract />
        {children}
      </body>
    </html>
  );
}
