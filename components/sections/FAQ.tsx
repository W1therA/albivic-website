"use client";

import { useState } from "react";
import { faqs } from "@/lib/content";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-fog">
      <div className="mx-auto max-w-3xl px-5 py-20 md:px-8 md:py-28">
        <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl text-balance">
          Straight answers.
        </h2>
        <p className="mt-3 text-ink-soft">
          No miracle claims. Just tools and a protocol you can stick to.
        </p>

        <div className="mt-10 divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : index)}
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg font-semibold text-ink">
                    {item.q}
                  </span>
                  <span className="text-accent">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && (
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft md:text-base">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
