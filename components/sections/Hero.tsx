"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { company } from "@/lib/content";
import { VideoBackground } from "@/components/ui/VideoBackground";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <VideoBackground
        src="/videos/hero.mp4"
        poster="/videos/hero-poster.jpg"
        overlayClassName="bg-gradient-to-b from-charcoal/70 via-charcoal/55 to-charcoal/80"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 pb-24 pt-32 text-center md:px-8">
        <motion.p
          className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-copper"
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {company.serviceArea}
        </motion.p>
        <motion.h1
          className="font-display text-5xl font-bold uppercase tracking-[0.04em] leading-tight text-cream sm:text-6xl md:text-7xl lg:text-8xl"
          initial={reduceMotion ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Albivic
          <br />
          <span className="text-4xl font-semibold tracking-wide text-brand sm:text-5xl md:text-6xl lg:text-7xl">
            Construction
          </span>
        </motion.h1>
        <motion.p
          className="mx-auto mt-6 max-w-xl text-lg text-steel-light md:text-xl"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {company.tagline}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-wrap items-center justify-center gap-4"
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
        >
          <Link
            href="/#services"
            className="rounded-sm bg-brand px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:bg-brand-light"
          >
            Explore what we offer
          </Link>
          <Link
            href="/contact"
            className="rounded-sm border border-cream/40 px-8 py-3.5 text-sm font-semibold uppercase tracking-wider text-cream transition-colors hover:border-brand hover:text-brand"
          >
            Get a free estimate
          </Link>
        </motion.div>
      </div>

      <a
        href="#services"
        className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1 text-cream/70 transition-colors hover:text-copper"
        aria-label="Scroll down"
      >
        <span className="text-xs uppercase tracking-widest">Scroll Down</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}
