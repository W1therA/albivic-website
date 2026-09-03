import type { Metadata } from "next";
import Link from "next/link";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: `About ${brand.name} — men’s looks-optimization tools.`,
};

export default function AboutPage() {
  return (
    <div className="atmosphere grain min-h-screen">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          About
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          Built for guys who want a cleaner look — not a beauty haul.
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink-soft">
          <p>
            {brand.name} started as a simple idea: sell looks-optimization tools
            with masculine framing, short protocols, and content you can film
            yourself without feeling weird.
          </p>
          <p>
            We focus on skin, jaw, hair, and posture tools you can actually use
            in under a few minutes a day. No 10-step spa routine. No miracle
            surgery promises.
          </p>
          <p>
            This site is the brand storefront for a dropshipping launch —
            connect Shopify checkout when you’re ready to take live orders.
          </p>
        </div>
        <Link
          href="/#kit"
          className="mt-10 inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-mist"
        >
          Shop the Morning Sharp Kit
        </Link>
      </div>
    </div>
  );
}
