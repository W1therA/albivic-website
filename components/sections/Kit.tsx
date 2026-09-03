"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useCart } from "@/lib/cart";
import { formatPrice, products } from "@/lib/content";

export function Kit() {
  const { addItem } = useCart();
  const reduceMotion = useReducedMotion();
  const kit = products.find((p) => p.id === "morning-sharp-kit");

  if (!kit) return null;

  return (
    <section id="kit" className="relative overflow-hidden bg-ink text-mist">
      <div className="absolute inset-0 opacity-40">
        <Image
          src={kit.image}
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/55" />
      </div>

      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-20 md:grid-cols-2 md:items-center md:px-8 md:py-28">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-soft">
            Best first buy
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold tracking-tight sm:text-5xl text-balance">
            {kit.name}
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-stone">
            {kit.blurb} Ice roller + pore strips + face razor, bundled so you
            can film the protocol and ship one offer.
          </p>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-display text-4xl font-bold">
              {formatPrice(kit.price)}
            </span>
            {kit.compareAt && (
              <span className="text-lg text-stone line-through">
                {formatPrice(kit.compareAt)}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => addItem(kit.id)}
            className="mt-8 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-deep"
          >
            Add kit to stack
          </button>
        </motion.div>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]"
        >
          <Image
            src={kit.image}
            alt={kit.imageAlt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
