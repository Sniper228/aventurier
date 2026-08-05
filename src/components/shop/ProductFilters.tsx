"use client";

import { categories } from "@/lib/data/products";

type ProductFiltersProps = {
  category: string;
  subcategory: string;
  maxPrice: number;
  query: string;
  onCategoryChange: (value: string) => void;
  onSubcategoryChange: (value: string) => void;
  onMaxPriceChange: (value: number) => void;
  onQueryChange: (value: string) => void;
};

export function ProductFilters({
  category,
  subcategory,
  maxPrice,
  query,
  onCategoryChange,
  onSubcategoryChange,
  onMaxPriceChange,
  onQueryChange,
}: ProductFiltersProps) {
  const selected = categories.find((item) => item.slug === category);

  return (
    <aside className="space-y-6 rounded-[1.75rem] border border-white/10 bg-surface p-5 md:p-6">
      <div>
        <label htmlFor="shop-search" className="text-sm font-medium text-zinc-200">
          Recherche
        </label>
        <input
          id="shop-search"
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Maillot, crampons..."
          className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-sm outline-none focus:border-accent focus:ring-2 focus:ring-accent/30"
        />
      </div>

      <div>
        <p className="text-sm font-medium text-zinc-200">Catégorie</p>
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => {
              onCategoryChange("");
              onSubcategoryChange("");
            }}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              !category
                ? "bg-accent text-zinc-950"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            Toutes
          </button>
          {categories.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => {
                onCategoryChange(item.slug);
                onSubcategoryChange("");
              }}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                category === item.slug
                  ? "bg-accent text-zinc-950"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {selected ? (
        <div>
          <p className="text-sm font-medium text-zinc-200">Sous-catégorie</p>
          <div className="mt-3 flex max-h-56 flex-col gap-1 overflow-y-auto">
            {selected.subcategories.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  onSubcategoryChange(subcategory === item ? "" : item)
                }
                className={`rounded-xl px-3 py-2 text-left text-sm transition-colors ${
                  subcategory === item
                    ? "bg-white/10 text-white"
                    : "text-zinc-400 hover:bg-white/5 hover:text-white"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      ) : null}

      <div>
        <label htmlFor="price-range" className="text-sm font-medium text-zinc-200">
          Prix max : {maxPrice} €
        </label>
        <input
          id="price-range"
          type="range"
          min={20}
          max={160}
          step={5}
          value={maxPrice}
          onChange={(event) => onMaxPriceChange(Number(event.target.value))}
          className="mt-3 w-full accent-[var(--accent)]"
        />
      </div>
    </aside>
  );
}
