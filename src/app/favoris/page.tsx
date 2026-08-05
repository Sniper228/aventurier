"use client";

import { products } from "@/lib/data/products";
import { useFavoritesStore } from "@/store/favorites";
import { ProductCard } from "@/components/shop/ProductCard";
import { Button } from "@/components/ui/Button";

export default function FavoritesPage() {
  const ids = useFavoritesStore((s) => s.ids);
  const favorites = products.filter((product) => ids.includes(product.id));

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-6xl">Favoris</h1>
      {favorites.length === 0 ? (
        <div className="mt-12 rounded-[1.75rem] border border-dashed border-white/15 px-6 py-16 text-center">
          <p className="text-lg font-semibold">Aucun favori pour le moment</p>
          <p className="mt-2 text-sm text-zinc-400">
            Ajoutez des produits depuis la boutique pour les retrouver ici.
          </p>
          <Button href="/boutique" className="mt-6" variant="primary">
            Parcourir la boutique
          </Button>
        </div>
      ) : (
        <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
