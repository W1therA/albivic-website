import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { company, projects } from "@/lib/content";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${company.name} and principal ${company.principal} — steel buildings and community construction across Canada.`,
};

export default function AboutPage() {
  const ituna = projects.find((p) => p.id === "ituna-arena")!;

  return (
    <div className="bg-cream pt-28 pb-20 md:pt-32 md:pb-28">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <AnimatedSection className="mb-16 max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">About Us</p>
          <h1 className="mt-3 font-display text-4xl font-bold text-charcoal md:text-6xl">
            Built on craft, trust, and delivery
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-steel">
            {company.name} is led by {company.principal}. We specialize in pre-engineered steel
            buildings, design-build commercial shops, demolition and reconstruction, and heavy
            equipment installation — serving {company.serviceArea.toLowerCase()}.
          </p>
        </AnimatedSection>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <AnimatedSection>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <Image
                src="/images/projects/ituna-arena/ituna-01.jpg"
                alt="Albivic Construction team at Ituna Community Arena"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="font-display text-2xl font-bold text-charcoal md:text-3xl">
              Who we are
            </h2>
            <p className="mt-4 leading-relaxed text-steel">
              We bring practical, site-tested construction expertise to every job. Whether it&apos;s a
              municipal shop, a First Nation commercial facility, or a remote northern build, our
              focus is the same: solid structure, clean execution, and honest communication.
            </p>
            <p className="mt-4 leading-relaxed text-steel">
              Based in {company.address}, {company.location}, our crews travel to where the project needs us — including
              British Columbia and Nunavut.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-block rounded-full bg-copper px-7 py-3 text-sm font-semibold uppercase tracking-wider text-cream hover:bg-copper-light"
            >
              Work with us
            </Link>
          </AnimatedSection>
        </div>

        <AnimatedSection className="mt-24">
          <div className="overflow-hidden rounded-3xl bg-charcoal text-cream lg:grid lg:grid-cols-2">
            <div className="relative min-h-[280px] lg:min-h-full">
              <Image
                src={ituna.images[0]}
                alt="Ituna Community Arena commemorative plaque"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-8 md:p-12">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-copper">
                Featured Project
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold md:text-4xl">
                Ituna Community Arena
              </h2>
              <p className="mt-2 text-steel-light">
                Est. 1963 → Rebuilt 2024 · Grand opening January 11, 2025
              </p>
              <p className="mt-5 leading-relaxed text-steel-light">
                {ituna.description} Credited to {company.name} — {company.principal}. A landmark
                rebuild for the community and Home of the Avalanche.
              </p>
              <Link
                href="/gallery"
                className="mt-8 inline-block text-sm font-semibold uppercase tracking-wider text-copper hover:text-copper-light"
              >
                See the gallery →
              </Link>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-20">
          <h2 className="mb-8 text-center font-display text-2xl font-bold text-charcoal md:text-3xl">
            Where we work
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <div
                key={p.id}
                className="rounded-xl border border-steel/20 bg-white p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-copper">
                  {p.year}
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-charcoal">{p.title}</p>
                <p className="text-sm text-steel">{p.location}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
