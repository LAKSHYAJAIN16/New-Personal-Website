import { GenerativeFigure } from "./GenerativeFigure";
import { FigurePlate } from "./FigurePlate";

// TODO: replace with your real facts
const readings: [string, string][] = [
  ["STATUS", "[What you're doing right now]"],
  ["FOCUS", "[Your primary stack/interest]"],
  ["ALSO", "[A hobby or side interest]"],
  ["LOCATION", "Waterloo, ON"],
  ["EDUCATION", "CS, University of Waterloo"],
];

export function About() {
  return (
    <section id="about" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h2 className="display-face mb-10 text-5xl font-semibold text-ink sm:text-6xl">A little about me.</h2>

        <div className="grid gap-8 md:grid-cols-2">
          <FigurePlate
            number="02"
            caption="Second pen configuration, lower amplitude — same live renderer, different seed."
          >
            <GenerativeFigure seed={7} pens={3} className="h-72 w-full" />
          </FigurePlate>

          <div className="flex flex-col">
            <p className="display-face text-2xl leading-relaxed text-ink sm:text-3xl">
              {/* TODO: replace with your real about copy */}
              [Write two or three sentences about your story — what got you into
              building things, and what you&apos;re excited about right now.]
            </p>

            <dl className="soft-panel mt-8 divide-y divide-rule px-5">
              {readings.map(([label, value]) => (
                <div key={label} className="flex items-baseline justify-between gap-4 py-2.5">
                  <dt className="text-xs font-semibold tracking-wide text-ink-soft">{label}</dt>
                  <dd className="text-right text-sm text-ink">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
