"use client";

import Image from "next/image";
import { useState } from "react";
import { projects } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Lightbox } from "@/components/gallery/Lightbox";

export function ProjectGrid() {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number; title: string } | null>(
    null,
  );

  return (
    <>
      <div className="space-y-20">
        {projects.map((project, pIndex) => (
          <AnimatedSection key={project.id} delay={pIndex * 0.05}>
            <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.15em] text-copper">
                  {project.year} · {project.location}
                </p>
                <h2 className="mt-1 font-display text-2xl font-bold text-charcoal md:text-3xl">
                  {project.title}
                </h2>
                <p className="mt-2 max-w-2xl text-steel">{project.description}</p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
              {project.images.map((src, index) => (
                <button
                  key={src}
                  type="button"
                  className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-sand focus:outline-none focus-visible:ring-2 focus-visible:ring-copper"
                  onClick={() =>
                    setLightbox({ images: project.images, index, title: project.title })
                  }
                >
                  <Image
                    src={src}
                    alt={`${project.title} photo ${index + 1}`}
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/20" />
                </button>
              ))}
            </div>
          </AnimatedSection>
        ))}
      </div>

      {lightbox && (
        <Lightbox
          images={lightbox.images}
          index={lightbox.index}
          title={lightbox.title}
          onClose={() => setLightbox(null)}
          onChange={(i) => setLightbox((prev) => (prev ? { ...prev, index: i } : null))}
        />
      )}
    </>
  );
}
