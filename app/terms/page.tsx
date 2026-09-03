import type { Metadata } from "next";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Terms",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-mist">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <h1 className="font-display text-4xl font-bold text-ink">Terms</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            {brand.name} products are grooming and training tools. They are not
            medical devices and are not intended to diagnose, treat, cure, or
            permanently alter bone structure.
          </p>
          <p>
            Stop using any training tool if you feel pain. Consult a
            professional for medical concerns about jaw, skin, sleep, or hair
            loss.
          </p>
          <p>
            Checkout on this site is currently a demo. Live sales begin once
            payment and fulfillment are connected.
          </p>
        </div>
      </div>
    </div>
  );
}
