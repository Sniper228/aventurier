"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { ProductFilters } from "@/components/shop/ProductFilters";

export function ShopClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("categorie") ?? "";
  const [category, setCategory] = useState(initialCategory);
  const [subcategory, setSubcategory] = useState("");
  const [maxPrice, setMaxPrice] = useState(160);
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (category && product.category !== category) return false;
      if (subcategory && product.subcategory !== subcategory) return false;
      if (product.price > maxPrice) return false;
      if (query) {
        const q = query.toLowerCase();
        const match =
          product.name.toLowerCase().includes(q) ||
          product.subcategory.toLowerCase().includes(q) ||
          product.tags.some((tag) => tag.includes(q));
        if (!match) return false;
      }
      return true;
    });
  }, [category, subcategory, maxPrice, query]);

  return (
    <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
      <ProductFilters
        category={category}
        subcategory={subcategory}
        maxPrice={maxPrice}
        query={query}
        onCategoryChange={setCategory}
        onSubcategoryChange={setSubcategory}
        onMaxPriceChange={setMaxPrice}
        onQueryChange={setQuery}
      />

      <div>
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="text-sm text-zinc-400">
            {filtered.length} produit{filtered.length > 1 ? "s" : ""}
          </p>
          <a
            href="/comparaison"
            className="text-sm font-medium text-accent hover:text-white"
          >
            Comparer
          </a>
        </div>

        {filtered.length === 0 ? (
          <div className="rounded-[1.75rem] border border-dashed border-white/15 px-6 py-16 text-center">
            <p className="text-lg font-semibold text-white">Aucun résultat</p>
            <p className="mt-2 text-sm text-zinc-400">
              Ajustez les filtres ou élargissez le prix maximum.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
