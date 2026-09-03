import type { Metadata } from "next";
import { ProjectGrid } from "@/components/gallery/ProjectGrid";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse Albivic Construction projects — steel shops, arena rebuilds, and commercial builds across Canada.",
};

export default function GalleryPage() {
  return (
    <div className="bg-cream pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">Our Work</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-charcoal md:text-6xl">
            Project Gallery
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            From prairie shops to northern facilities and community arenas — a look at builds we&apos;re
            proud of.
          </p>
        </AnimatedSection>
        <ProjectGrid />
      </div>
    </div>
  );
}
