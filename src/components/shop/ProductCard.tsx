"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowsLeftRight,
  Heart,
  ShoppingBag,
} from "@phosphor-icons/react";
import type { Product } from "@/lib/data/products";
import { formatPrice, cn } from "@/lib/utils";
import { StarRating } from "@/components/ui/StarRating";
import { useFavoritesStore } from "@/store/favorites";
import { useCompareStore } from "@/store/compare";
import { useCartStore } from "@/store/cart";
import { useUiStore } from "@/store/ui";

export function ProductCard({ product }: { product: Product }) {
  const toggleFavorite = useFavoritesStore((s) => s.toggle);
  const isFavorite = useFavoritesStore((s) => s.has(product.id));
  const toggleCompare = useCompareStore((s) => s.toggle);
  const isCompared = useCompareStore((s) => s.has(product.id));
  const addItem = useCartStore((s) => s.addItem);
  const openCart = useUiStore((s) => s.openCart);

  return (
    <article className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface p-2 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:border-accent/40 hover:shadow-[0_24px_60px_rgba(0,163,255,0.12)]">
      <div className="relative overflow-hidden rounded-[1.35rem] bg-zinc-950">
        <Link href={`/boutique/${product.slug}`} className="block">
          <div className="relative aspect-[4/5] overflow-hidden">
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              sizes="(max-width:768px) 100vw, 25vw"
              className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>
        </Link>

        <div className="absolute left-3 top-3 flex gap-2">
          {product.wholesale && product.retail ? (
            <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
              Gros + Détail
            </span>
          ) : product.wholesale ? (
            <span className="rounded-full bg-black/55 px-3 py-1 text-[11px] font-medium text-white backdrop-blur-md">
              Gros
            </span>
          ) : null}
        </div>

        <div className="absolute right-3 top-3 flex flex-col gap-2">
          <button
            type="button"
            aria-label="Favoris"
            onClick={() => toggleFavorite(product.id)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-accent-strong",
              isFavorite && "border-accent-strong text-accent-strong",
            )}
          >
            <Heart weight={isFavorite ? "fill" : "regular"} className="h-4 w-4" />
          </button>
          <button
            type="button"
            aria-label="Comparer"
            onClick={() => toggleCompare(product.id)}
            className={cn(
              "flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-all duration-300 hover:border-accent",
              isCompared && "border-accent text-accent",
            )}
          >
            <ArrowsLeftRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3 p-4 pt-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.14em] text-zinc-500">
              {product.subcategory}
            </p>
            <Link
              href={`/boutique/${product.slug}`}
              className="mt-1 block text-lg font-semibold text-white transition-colors hover:text-accent"
            >
              {product.name}
            </Link>
          </div>
          <div className="text-right">
            <p className="text-lg font-semibold text-white">
              {formatPrice(product.price)}
            </p>
            {product.compareAt ? (
              <p className="text-xs text-zinc-500 line-through">
                {formatPrice(product.compareAt)}
              </p>
            ) : null}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <StarRating rating={product.rating} />
            <span className="text-xs text-zinc-500">({product.reviewCount})</span>
          </div>
          <span
            className={cn(
              "text-xs",
              product.stock > 10 ? "text-emerald-400" : "text-amber-300",
            )}
          >
            {product.stock > 0 ? `${product.stock} en stock` : "Rupture"}
          </span>
        </div>

        <button
          type="button"
          onClick={() => {
            addItem(product, {
              size: product.sizes[0],
              color: product.colors[0],
            });
            openCart();
          }}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-white/5 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-accent hover:text-zinc-950"
        >
          <ShoppingBag className="h-4 w-4" />
          Ajouter au panier
        </button>
      </div>
    </article>
  );
}
