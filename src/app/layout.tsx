import type { Metadata } from "next";
import { Big_Shoulders, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bigShoulders = Big_Shoulders({
  variable: "--font-big-shoulders",
  subsets: ["latin"],
  weight: ["700", "800", "900"],
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
THESIS: A personal site as a precision-engineered deployment -- the page unfolds from a compact folded state in one motion, refusing the static hero-plus-card-grid portfolio default.
OWN-WORLD: Sheet-white ground, ink-black rules and text, foil-gold as the single CTA accent, data-blue for live values; mountain-gray and valley-blue trace mountain/valley crease lines. Big Shoulders Display (skewed on the hero name only) for headlines, IBM Plex Mono for data/labels, IBM Plex Sans for prose. Parallelogram-cut edges replace rounded corners.
STORY: A visitor watches the page deploy like precision hardware, reads Lakshya as an engineer who ships exact, tested things, and leaves knowing what to open next.
FIRST VIEWPORT: A crease-pattern field grows from a single origin point on load into a full mountain/valley tessellation filling the right frame; name, status, and primary action sit fixed at the sheet's left edge.
FORM: Deployable Sheet direction, challenger pick (Miura-fold, re-roll round 1), seed key d4fea6b9.
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
      className={`${plexMono.variable} ${plexSans.variable} ${bigShoulders.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-sheet text-ink">
        <DirectionContract />
        {children}
      </body>
    </html>
  );
}
