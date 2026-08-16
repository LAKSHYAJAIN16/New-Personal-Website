"use client";

import { useState } from "react";
import Image from "next/image";

type PhotoItem = {
  id: string;
  src: string;
  title: string;
  location: string;
  date: string;
  caption: string;
};

const photos: PhotoItem[] = [
  {
    id: "waterloo",
    src: "/photos/waterloo.png",
    title: "Waterloo Campus Dusk",
    location: "Waterloo, ON",
    date: "2026",
    caption: "Late evening walks past the engineering library after deep coding sessions.",
  },
  {
    id: "hackathon",
    src: "/photos/hackathon.png",
    title: "3:00 AM Hackathon Setup",
    location: "Toronto, ON",
    date: "2026",
    caption: "Late night terminal outputs, cold coffee, and shipping prototypes before dawn.",
  },
  {
    id: "coffee",
    src: "/photos/coffee.png",
    title: "Pour-over & Math Notes",
    location: "Local Cafe",
    date: "2025",
    caption: "Working through competitive programming graphs and algorithm proofs.",
  },
  {
    id: "sunset",
    src: "/photos/sunset.png",
    title: "Golden Hour Architecture",
    location: "Downtown",
    date: "2025",
    caption: "Clean geometric symmetry during a weekend city walk.",
  },
];

export function PhotobookSection() {
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  return (
    <section id="photobook" className="py-14 border-t border-border/80">
      <div className="flex items-center justify-between mb-8">
        <div className="font-mono text-xs uppercase tracking-wider text-accent">
          PHOTOBOOK &amp; MEMORIES
        </div>
        <span className="font-mono text-xs text-muted">4 Shots</span>
      </div>

      {/* Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {photos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group cursor-pointer rounded border border-accent/40 bg-[#FAF7F0] p-3 transition-all hover:border-accent hover:shadow-md"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded bg-[#F2EDE2] border border-accent/10">
              <Image
                src={photo.src}
                alt={photo.title}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="mt-3 flex items-baseline justify-between font-sans">
              <h3 className="font-serif text-lg text-foreground group-hover:text-accent transition-colors">
                {photo.title}
              </h3>
              <span className="font-mono text-[11px] text-muted">{photo.date}</span>
            </div>

            <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
              <span>📍 {photo.location}</span>
              <span className="font-mono text-[10px] text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                Expand ↗
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Photo Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-2xl w-full rounded border border-accent/50 bg-[#FAF9F5] p-5 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-border pb-3">
              <div>
                <h3 className="font-serif text-2xl text-foreground">{selectedPhoto.title}</h3>
                <p className="font-mono text-xs text-accent">📍 {selectedPhoto.location} • {selectedPhoto.date}</p>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="rounded border border-border px-3 py-1 font-mono text-xs text-muted hover:text-foreground"
              >
                Close ESC
              </button>
            </div>

            <div className="relative aspect-[16/10] w-full overflow-hidden rounded border border-accent/20">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-cover"
              />
            </div>

            <p className="text-sm leading-relaxed text-muted-foreground font-sans">
              {selectedPhoto.caption}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
