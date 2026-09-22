"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { photos } from "@/data/photos";

export function PhotoGallery() {
  const dialog = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState(0);
  const photo = photos[active];
  const navigate = (direction: number) => setActive((index) => (index + direction + photos.length) % photos.length);

  return (
    <>
      <div className="photo-gallery">
        {photos.map((item, index) => (
          <figure key={item.src} className="gallery-entry">
            <button
              type="button"
              className="gallery-thumbnail"
              aria-label={`Enlarge ${item.caption || item.alt}`}
              onClick={() => { setActive(index); dialog.current?.showModal(); }}
            >
              <Image src={item.src} alt={item.alt} width={550} height={740} sizes="(max-width: 1000px) 45vw, 23vw" className="gallery-thumbnail-image" />
              {item.caption && <span className="gallery-view-label" aria-hidden="true">{item.caption.split(" : ")[0]}</span>}
            </button>
          </figure>
        ))}
      </div>
      <dialog
        ref={dialog}
        className="gallery-dialog"
        aria-label="Photo viewer"
        onClick={(event) => { if (event.target === event.currentTarget) dialog.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight") { event.preventDefault(); navigate(1); }
          if (event.key === "ArrowLeft") { event.preventDefault(); navigate(-1); }
        }}
      >
        <div className="gallery-viewer">
          <div className="gallery-toolbar">
            <span aria-live="polite">{active + 1} / {photos.length}</span>
            <button type="button" onClick={() => dialog.current?.close()} autoFocus>close</button>
          </div>
          <Image src={photo.src} alt={photo.alt} width={550} height={740} sizes="90vw" className="gallery-large-image" />
          <div className="gallery-toolbar gallery-bottom">
            <button type="button" onClick={() => navigate(-1)} aria-label="Previous photo">&larr; previous</button>
            <p aria-live="polite">{photo.caption}</p>
            <button type="button" onClick={() => navigate(1)} aria-label="Next photo">next &rarr;</button>
          </div>
        </div>
      </dialog>
    </>
  );
}
