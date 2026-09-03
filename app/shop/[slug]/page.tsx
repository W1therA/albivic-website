import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AddToCartButton } from "@/components/shop/AddToCartButton";
import { formatPrice, getProduct, products } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Product" };
  return {
    title: product.name,
    description: product.blurb,
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return (
    <div className="min-h-screen bg-mist">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 pb-20 pt-28 md:grid-cols-2 md:px-8 md:pb-28 md:pt-32">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-fog">
          <Image
            src={product.image}
            alt={product.imageAlt}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
            {product.angle}
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            {product.name}
          </h1>
          <div className="mt-4 flex items-baseline gap-3">
            <span className="font-display text-3xl font-bold">
              {formatPrice(product.price)}
            </span>
            {product.compareAt && (
              <span className="text-stone line-through">
                {formatPrice(product.compareAt)}
              </span>
            )}
          </div>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink-soft">
            {product.blurb}
          </p>
          <ul className="mt-6 space-y-2 text-sm text-ink-soft">
            <li>• Built for short daily protocols</li>
            <li>• No miracle bone-structure claims</li>
            <li>• Demo checkout ready for Shopify later</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <AddToCartButton productId={product.id} />
            <Link
              href="/shop"
              className="inline-flex rounded-full border border-ink/15 px-6 py-3.5 text-sm font-semibold text-ink"
            >
              Back to shop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
