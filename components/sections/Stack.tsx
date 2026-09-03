import { products } from "@/lib/content";
import { ProductCard } from "@/components/shop/ProductCard";

export function Stack() {
  const stack = products.filter((p) => p.category !== "kit");

  return (
    <section id="stack" className="bg-mist">
      <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
              The stack
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl md:text-5xl text-balance">
              Tools that earn a spot in the bathroom.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ink-soft md:text-base">
            Skin, jaw, hair, posture. Add what you need — or start with the kit.
          </p>
        </div>

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {stack.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
