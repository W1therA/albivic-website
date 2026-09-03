import type { Metadata } from "next";
import { brand } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-mist">
      <div className="mx-auto max-w-3xl px-5 pb-20 pt-28 md:px-8 md:pt-32">
        <h1 className="font-display text-4xl font-bold text-ink">Privacy</h1>
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-ink-soft">
          <p>
            {brand.name} respects your privacy. This demo storefront does not
            process live payments. When you connect Shopify or another checkout
            provider, their privacy policy will also apply to order data.
          </p>
          <p>
            If you email us, we use your address only to respond. We don’t sell
            personal information.
          </p>
        </div>
      </div>
    </div>
  );
}
