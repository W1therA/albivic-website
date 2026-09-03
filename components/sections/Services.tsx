"use client";

import Link from "next/link";
import { services } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { VideoBackground } from "@/components/ui/VideoBackground";

export function Services() {
  return (
    <section id="services" className="bg-cream py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedSection className="mb-14 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
            What We Do
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold text-charcoal md:text-5xl">
            Browse a service that matches your needs
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-steel">
            Explore what we can do for you — from steel shops to complex rebuilds.
          </p>
        </AnimatedSection>

        <div className="grid gap-6 md:grid-cols-2">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 0.08}>
              <article className="group relative min-h-[340px] overflow-hidden rounded-2xl md:min-h-[400px]">
                <VideoBackground
                  src={service.video}
                  overlayClassName="bg-charcoal/55 transition-colors duration-500 group-hover:bg-charcoal/45"
                />
                <div className="relative z-10 flex h-full min-h-[340px] flex-col justify-end p-8 md:min-h-[400px] md:p-10">
                  <h3 className="font-display text-2xl font-bold text-cream md:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-steel-light md:text-base">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-6 inline-flex w-fit items-center gap-2 text-sm font-semibold uppercase tracking-wider text-copper transition-colors hover:text-copper-light"
                  >
                    Learn more
                    <span aria-hidden>→</span>
                  </Link>
                </div>
              </article>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
