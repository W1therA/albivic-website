"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/lib/cart";
import { formatPrice } from "@/lib/content";

export function CartDrawer() {
  const {
    items,
    subtotal,
    isOpen,
    closeCart,
    setQuantity,
    removeItem,
    clear,
  } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <button
        type="button"
        className="absolute inset-0 bg-ink/45"
        aria-label="Close cart overlay"
        onClick={closeCart}
      />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-mist shadow-2xl">
        <div className="flex items-center justify-between border-b border-ink/10 px-5 py-4">
          <h2 className="font-display text-xl font-bold">Your stack</h2>
          <button
            type="button"
            onClick={closeCart}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/10"
            aria-label="Close cart"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <p className="font-display text-lg font-semibold">Cart is empty</p>
              <p className="mt-2 max-w-xs text-sm text-ink-soft">
                Add the Morning Sharp Kit or any tool from the stack.
              </p>
              <Link
                href="/#stack"
                onClick={closeCart}
                className="mt-6 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-mist"
              >
                Browse the stack
              </Link>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li
                  key={product.id}
                  className="flex gap-3 border-b border-ink/8 pb-4"
                >
                  <div className="relative h-20 w-20 overflow-hidden rounded-xl bg-fog">
                    <Image
                      src={product.image}
                      alt={product.imageAlt}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p className="text-sm text-ink-soft">
                          {formatPrice(product.price)}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(product.id)}
                        className="text-xs text-ink-soft underline"
                      >
                        Remove
                      </button>
                    </div>
                    <div className="mt-auto flex items-center gap-2 pt-2">
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity - 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="w-6 text-center text-sm font-semibold">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(product.id, quantity + 1)}
                        className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-ink/15"
                        aria-label="Increase quantity"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-ink/10 px-5 py-5">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm text-ink-soft">Subtotal</span>
              <span className="font-display text-xl font-bold">
                {formatPrice(subtotal)}
              </span>
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-accent px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-accent-deep"
              onClick={() => {
                alert(
                  "Demo checkout — connect Shopify or Stripe when you’re ready to sell.",
                );
                clear();
                closeCart();
              }}
            >
              Checkout (demo)
            </button>
            <p className="mt-3 text-center text-xs text-ink-soft">
              Demo cart only. Wire this to Shopify when you launch.
            </p>
          </div>
        )}
      </aside>
    </div>
  );
}
