import type { Metadata } from "next";
import { Caveat, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["600", "700"],
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
THESIS: A personal site as a 90s NYC coffeehouse hangout -- warm and communal, refusing both the isometric-room world and the templated gradient-hero portfolio tried earlier this session.
OWN-WORLD: Warm latte-cream ground and deep coffee-brown ink carry the page; a corduroy-couch terracotta is the one actionable accent, mustard-cream marks tags and chips, brick and chalkboard-green stay confined to their own materials. Caveat (chalk-marker script) for headlines and a chalkboard menu board, IBM Plex Sans for body, IBM Plex Mono for order-ticket labels. No literal show logos, character names, or likenesses -- the genre (coffeehouse, brick, couch, photo strip), not the trademark.
STORY: A visitor pulls up a seat at Lakshya's table -- a chalkboard menu board lists the same real sections as before (About, Work, Writing, Photos, Say hi) the way a cafe lists its drinks, and a photo-strip frame stands in for a portrait.
FIRST VIEWPORT: A warm cafe-table scene: a hand-lettered name sign, a one-line order-ticket bio, a steaming coffee-cup mark, and a green chalkboard menu board listing every section by name.
FORM: User-pinned world (a 90s coffeehouse hangout, genre-inspired by Friends without reproducing its trademarked assets), built directly per the user's explicit pin.
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
      className={`${plexMono.variable} ${plexSans.variable} ${caveat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <DirectionContract />
        {children}
      </body>
    </html>
  );
}
