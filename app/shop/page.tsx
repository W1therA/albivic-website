import type { Metadata } from "next";
import { ProductCard } from "@/components/shop/ProductCard";
import { brand, products } from "@/lib/content";

export const metadata: Metadata = {
  title: "Shop",
  description: `Shop the ${brand.name} men’s looks-optimization stack.`,
};

export default function ShopPage() {
  return (
    <div className="atmosphere grain min-h-screen">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-28 md:px-8 md:pb-28 md:pt-32">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
          Shop
        </p>
        <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          The full stack
        </h1>
        <p className="mt-4 max-w-xl text-ink-soft">
          Build your protocol piece by piece, or take the Morning Sharp Kit and
          start today.
        </p>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
