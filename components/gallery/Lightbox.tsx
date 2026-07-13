"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { useEffect } from "react";

type LightboxProps = {
  images: string[];
  index: number;
  title: string;
  onClose: () => void;
  onChange: (index: number) => void;
};

export function Lightbox({ images, index, title, onClose, onChange }: LightboxProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onChange((index - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") onChange((index + 1) % images.length);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, images.length, onChange, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/95 p-4"
      role="dialog"
      aria-modal
      aria-label={title}
      onClick={onClose}
    >
      <button
        type="button"
        className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-cream hover:bg-white/20"
        onClick={onClose}
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-cream hover:bg-white/20 md:left-6"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index - 1 + images.length) % images.length);
        }}
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <div
        className="relative h-[70vh] w-full max-w-5xl"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={images[index]}
          alt={`${title} — image ${index + 1}`}
          fill
          className="object-contain"
          sizes="100vw"
          priority
        />
      </div>

      <button
        type="button"
        className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-white/10 p-2 text-cream hover:bg-white/20 md:right-6"
        onClick={(e) => {
          e.stopPropagation();
          onChange((index + 1) % images.length);
        }}
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>

      <p className="absolute bottom-6 left-1/2 -translate-x-1/2 text-sm text-steel-light">
        {index + 1} / {images.length} · {title}
      </p>
    </div>
  );
}
