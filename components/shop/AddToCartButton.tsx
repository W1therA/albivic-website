"use client";

import { useCart } from "@/lib/cart";

export function AddToCartButton({ productId }: { productId: string }) {
  const { addItem } = useCart();

  return (
    <button
      type="button"
      onClick={() => addItem(productId)}
      className="inline-flex rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-mist transition hover:bg-ink-soft"
    >
      Add to stack
    </button>
  );
}
