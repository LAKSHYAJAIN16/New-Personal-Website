import Image from "next/image";
import { photos } from "@/data/photos";
import { FigurePlate } from "./FigurePlate";

export function PhotoboothSection() {
  return (
    <section id="photobooth" className="px-4 py-14 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h1 className="display-face text-2xl text-ink sm:text-3xl">Photo corner</h1>
        <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">
          A few photos, unrelated to work.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {photos.map((photo) => (
            <FigurePlate key={photo.figure} number={photo.figure} caption={photo.caption}>
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </FigurePlate>
          ))}
        </div>
      </div>
    </section>
  );
}
