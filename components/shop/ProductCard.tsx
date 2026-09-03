"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice, type Product } from "@/lib/content";

export function ProductCard({ product }: { product: Product }) {
  const { addItem } = useCart();

  return (
    <article className="group flex h-full flex-col">
      <Link
        href={`/shop/${product.slug}`}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-fog"
      >
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute left-3 top-3 rounded-full bg-mist/90 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-ink backdrop-blur">
          {product.angle}
        </span>
      </Link>

      <div className="mt-4 flex flex-1 flex-col">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-semibold leading-tight">
            <Link href={`/shop/${product.slug}`}>{product.name}</Link>
          </h3>
          <p className="shrink-0 text-sm font-semibold">{formatPrice(product.price)}</p>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-ink-soft">{product.blurb}</p>
        <button
          type="button"
          onClick={() => addItem(product.id)}
          className="mt-5 inline-flex w-fit rounded-full border border-ink/15 bg-white px-4 py-2.5 text-sm font-semibold text-ink transition hover:border-ink hover:bg-ink hover:text-mist"
        >
          Add to stack
        </button>
      </div>
    </article>
  );
}
