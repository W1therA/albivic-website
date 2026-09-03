import type { Metadata } from "next";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${brand.name}.`,
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-mist">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Contact
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink">
          Get in touch
        </h1>
        <p className="mt-4 text-ink-soft">
          Questions about shipping, products, or wholesale? Email us and we’ll
          reply within 1–2 business days.
        </p>
        <a
          href={`mailto:${brand.email}`}
          className="mt-8 inline-flex rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white"
        >
          {brand.email}
        </a>
      </div>
    </div>
  );
}
