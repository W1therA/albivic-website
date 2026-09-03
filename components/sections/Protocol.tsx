"use client";

import { motion, useReducedMotion } from "framer-motion";
import { protocolSteps } from "@/lib/content";

export function Protocol() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="protocol" className="atmosphere grain relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            The protocol
          </p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
            One morning system. No spa language.
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-ink-soft md:text-lg">
            SharpStack is built for guys who want a cleaner look without a
            10-step routine. Cold pass. Clean surface. Train the frame.
          </p>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3 md:gap-10">
          {protocolSteps.map((item, index) => (
            <motion.li
              key={item.step}
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="border-t border-ink/15 pt-6"
            >
              <p className="font-display text-sm font-bold tracking-[0.18em] text-accent">
                {item.step}
              </p>
              <h3 className="mt-3 font-display text-2xl font-semibold text-ink">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-soft md:text-base">
                {item.text}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
