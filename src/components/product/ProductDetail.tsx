"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowsLeftRight,
  Heart,
  MagnifyingGlassPlus,
} from "@phosphor-icons/react";
import type { Product } from "@/lib/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { StarRating } from "@/components/ui/StarRating";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/shop/ProductCard";
import { useCartStore } from "@/store/cart";
import { useFavoritesStore } from "@/store/favorites";
import { useCompareStore } from "@/store/compare";

const mockReviews = [
  {
    name: "Karim B.",
    rating: 5,
    text: "Flocage nickel et tissu vraiment pro. Livraison rapide pour notre club.",
  },
  {
    name: "Léa M.",
    rating: 5,
    text: "Chaussures légères, grip excellent. Service client ultra clair.",
  },
  {
    name: "Youssef T.",
    rating: 4,
    text: "Qualité au rendez-vous. J'aurais aimé plus de coloris, sinon parfait.",
  },
];

export function ProductDetail({
  product,
  related,
}: {
  product: Product;
  related: Product[];
}) {
  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(product.sizes[0]);
  const [color, setColor] = useState(product.colors[0]);
  const [zoomed, setZoomed] = useState(false);
  const addItem = useCartStore((s) => s.addItem);
  const toggleFavorite = useFavoritesStore((s) => s.toggle);
  const isFavorite = useFavoritesStore((s) => s.has(product.id));
  const toggleCompare = useCompareStore((s) => s.toggle);
  const isCompared = useCompareStore((s) => s.has(product.id));

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-zinc-950">
            <Image
              src={product.images[activeImage]}
              alt={product.name}
              fill
              priority
              className={cn(
                "object-cover transition-transform duration-500",
                zoomed && "scale-150 cursor-zoom-out",
                !zoomed && "cursor-zoom-in",
              )}
              sizes="(max-width:1024px) 100vw, 50vw"
              onClick={() => setZoomed((value) => !value)}
            />
            <button
              type="button"
              onClick={() => setZoomed((value) => !value)}
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-black/60 px-3 py-2 text-xs text-white backdrop-blur-md"
            >
              <MagnifyingGlassPlus className="h-4 w-4" />
              Zoom
            </button>
          </div>
          <div className="mt-4 flex gap-3">
            {product.images.map((image, index) => (
              <button
                key={image + index}
                type="button"
                onClick={() => setActiveImage(index)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-2xl border",
                  activeImage === index
                    ? "border-accent"
                    : "border-white/10 opacity-70 hover:opacity-100",
                )}
              >
                <Image src={image} alt="" fill className="object-cover" sizes="80px" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.16em] text-zinc-500">
            {product.subcategory}
          </p>
          <h1 className="mt-2 display-font text-5xl text-white md:text-6xl">
            {product.name}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <StarRating rating={product.rating} />
            <span className="text-sm text-zinc-400">
              {product.rating} ({product.reviewCount} avis)
            </span>
            <span
              className={cn(
                "rounded-full px-3 py-1 text-xs",
                product.stock > 10
                  ? "bg-emerald-500/15 text-emerald-300"
                  : "bg-amber-500/15 text-amber-200",
              )}
            >
              Stock : {product.stock}
            </span>
          </div>

          <div className="mt-6 flex items-end gap-3">
            <p className="text-4xl font-bold text-white">
              {formatPrice(product.price)}
            </p>
            {product.compareAt ? (
              <p className="pb-1 text-zinc-500 line-through">
                {formatPrice(product.compareAt)}
              </p>
            ) : null}
          </div>

          <p className="mt-5 max-w-xl text-zinc-300">{product.description}</p>

          <div className="mt-8 space-y-5">
            <div>
              <p className="mb-2 text-sm font-medium">Couleur</p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setColor(item)}
                    className={cn(
                      "rounded-full px-4 py-2 text-sm",
                      color === item
                        ? "bg-white text-zinc-950"
                        : "bg-white/5 text-zinc-300",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-2 text-sm font-medium">Taille</p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setSize(item)}
                    className={cn(
                      "min-w-12 rounded-full px-4 py-2 text-sm",
                      size === item
                        ? "bg-accent text-zinc-950"
                        : "bg-white/5 text-zinc-300",
                    )}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              variant="primary"
              size="lg"
              onClick={() => addItem(product, { size, color })}
            >
              Ajouter au panier
            </Button>
            <Button href="/personnalisation" variant="gold" size="lg">
              Personnaliser
            </Button>
            <button
              type="button"
              aria-label="Favoris"
              onClick={() => toggleFavorite(product.id)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border border-white/15",
                isFavorite && "border-accent-strong text-accent-strong",
              )}
            >
              <Heart weight={isFavorite ? "fill" : "regular"} className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Comparer"
              onClick={() => toggleCompare(product.id)}
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-full border border-white/15",
                isCompared && "border-accent text-accent",
              )}
            >
              <ArrowsLeftRight className="h-5 w-5" />
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 text-sm text-zinc-400">
            {product.wholesale ? (
              <span className="rounded-full border border-white/10 px-3 py-1">
                Disponible en gros
              </span>
            ) : null}
            {product.retail ? (
              <span className="rounded-full border border-white/10 px-3 py-1">
                Disponible au détail
              </span>
            ) : null}
            <Link href="/faq" className="text-accent hover:text-white">
              Questions fréquentes
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="display-font text-4xl text-white">Avis clients</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {mockReviews.map((review) => (
            <article
              key={review.name}
              className="rounded-[1.5rem] border border-white/10 bg-surface p-5"
            >
              <StarRating rating={review.rating} />
              <p className="mt-3 text-sm text-zinc-300">&ldquo;{review.text}&rdquo;</p>
              <p className="mt-4 text-sm font-medium text-white">{review.name}</p>
            </article>
          ))}
        </div>
      </section>

      {related.length > 0 ? (
        <section className="mt-20">
          <h2 className="display-font text-4xl text-white">Produits similaires</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}
