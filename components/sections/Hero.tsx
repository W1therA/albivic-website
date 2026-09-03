import Image from "next/image";
import Link from "next/link";
import { brand } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1621607512214-68297471b618?auto=format&fit=crop&w=2000&q=80"
          alt="Men’s grooming tools on a concrete bathroom counter"
          fill
          priority
          className="hero-pan object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-mist via-mist/88 to-mist/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-mist via-transparent to-mist/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-28 md:items-center md:px-8 md:pb-24">
        <div className="max-w-xl">
          <p className="animate-rise font-display text-5xl font-bold tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-8xl">
            {brand.name}
          </p>
          <h1 className="animate-rise-delay-1 mt-5 max-w-lg font-display text-3xl font-semibold leading-[1.1] tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
            Look sharper in three minutes a day.
          </h1>
          <p className="animate-rise-delay-2 mt-5 max-w-md text-base leading-relaxed text-ink-soft md:text-lg">
            Men’s looks-optimization tools for skin, jaw, hair, and posture —
            sold as a simple daily stack.
          </p>
          <div className="animate-rise-delay-3 mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/#kit"
              className="inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-mist transition hover:bg-ink-soft"
            >
              Shop Morning Sharp Kit
            </Link>
            <Link
              href="/#stack"
              className="inline-flex rounded-full border border-ink/20 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink backdrop-blur transition hover:border-ink"
            >
              See the stack
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
