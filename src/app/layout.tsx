import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Lakshya Jain",
  description: "Personal website of Lakshya Jain.",
  icons: {
    icon: "/icon.svg",
    apple: "/apple-icon.svg",
  },
};

const DIRECTION_CONTRACT = `
THESIS: A personal site as a running lab notebook -- each section is a numbered figure plate whose content is a real, live-rendered generative canvas, refusing the dark-mode particle-hero portfolio default.
OWN-WORLD: Near-white ground, black ruled instrument grid, one signal-red accent reserved for live/active states; IBM Plex Mono for numerals and labels, IBM Plex Sans for body -- no serif, no italic display.
STORY: A visitor sees proof of real technical craft immediately, a live-computed figure rather than a screenshot, reads the person through captioned plates, and leaves knowing what they build.
FIRST VIEWPORT: A large live generative figure fills most of the frame as FIG. 01, name and title set small and precise beside it on the ruled grid, no hero copy block.
FORM: Live Paper direction, candidate 3 of 7 own-list grounded candidates, seed key 4896d616.
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
      className={`${plexMono.variable} ${plexSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <DirectionContract />
        {children}
      </body>
    </html>
  );
}
