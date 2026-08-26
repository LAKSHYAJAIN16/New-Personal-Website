import { isPlaceholder, placeholderClass } from "@/lib/placeholder";

// TODO: replace with your real facts
const readings: [string, string][] = [
  ["Status", "[What you're doing right now]"],
  ["Focus", "[Your primary stack/interest]"],
  ["Also into", "[A hobby or side interest]"],
  ["Based in", "Waterloo, ON"],
  ["Studying", "CS, University of Waterloo"],
];

export function About() {
  return (
    <section id="about" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-face text-2xl text-ink sm:text-3xl">A little about me</h1>

        {/* TODO: replace with your real about copy */}
        <p className={`mt-5 max-w-2xl text-lg leading-relaxed sm:text-xl ${placeholderClass}`}>
          [Write two or three sentences about your story — what got you into
          building things, and what you&apos;re excited about right now.]
        </p>

        <dl className="soft-card mt-8 divide-y divide-line px-5 py-1">
          {readings.map(([label, value]) => (
            <div key={label} className="flex items-baseline justify-between gap-4 py-3">
              <dt className="text-sm text-ink-soft">{label}</dt>
              <dd className={`text-right text-sm font-semibold ${isPlaceholder(value) ? placeholderClass : "text-ink"}`}>
                {value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
