import Image from "next/image";
import { photos } from "@/data/photos";
import { FigurePlate } from "./FigurePlate";

export function PhotoboothSection() {
  return (
    <section id="photobooth" className="px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-5xl">
        <h1 className="display-face mb-10 text-4xl text-ink sm:text-5xl">Photobooth</h1>

        <div className="grid gap-8 sm:grid-cols-2">
          {photos.map((photo) => (
            <FigurePlate key={photo.figure} number={photo.figure} caption={photo.caption}>
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            </FigurePlate>
          ))}
        </div>
      </div>
    </section>
  );
}
