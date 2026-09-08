import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lakshya Jain",
  description: "Personal website of Lakshya Jain.",
};

const DIRECTION_CONTRACT = `
THESIS: A personal site as plain, unstyled text -- one page, no chrome -- refusing every decorated world tried earlier this session (an isometric room, a coffeehouse hangout).
OWN-WORLD: Pure white ground and near-black ink carry the page; the only color is a hairline gray for dividers and underline rest-state. A single system serif (Georgia) for everything -- no sourced display face, no card, no shadow, no button. The category standard, played straight, taken as the user's explicit standing preference (canon).
STORY: A visitor reads one page top to bottom: a short bio, a list of work, a list of writing, a few photos, and how to get in touch -- nothing to click through, nothing to discover, no navigation beyond in-page anchors.
FIRST VIEWPORT: A narrow centered column of plain serif text: a name, a one-line bio, and the start of the work list -- no image, no hero, no button above the fold.
FORM: User-pinned canon direction (explicitly referencing patrickcollison.com's genre of radical personal-site minimalism, executed with original content, never his actual text).
FINISH: unreviewed and undocumented is unfinished; this build ends with a verification pass and DESIGN.md recording the (deliberately small) system.
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
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-bg text-ink">
        <DirectionContract />
        {children}
      </body>
    </html>
  );
}
