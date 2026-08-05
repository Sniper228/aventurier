"use client";

import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/data/products";
import { useCompareStore } from "@/store/compare";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { StarRating } from "@/components/ui/StarRating";

export default function ComparePage() {
  const { ids, clear, toggle } = useCompareStore();
  const compared = products.filter((product) => ids.includes(product.id));

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-font text-5xl text-white md:text-6xl">
            Comparaison
          </h1>
          <p className="mt-3 text-zinc-400">Comparez jusqu&apos;à 3 produits.</p>
        </div>
        {compared.length > 0 ? (
          <button
            type="button"
            onClick={clear}
            className="text-sm text-zinc-400 hover:text-white"
          >
            Tout effacer
          </button>
        ) : null}
      </div>

      {compared.length === 0 ? (
        <div className="mt-12 rounded-[1.75rem] border border-dashed border-white/15 px-6 py-16 text-center">
          <p className="text-lg font-semibold">Aucun produit à comparer</p>
          <Button href="/boutique" className="mt-6" variant="primary">
            Choisir des produits
          </Button>
        </div>
      ) : (
        <div className="mt-10 overflow-x-auto">
          <table className="min-w-full border-separate border-spacing-x-4">
            <thead>
              <tr>
                {compared.map((product) => (
                  <th key={product.id} className="w-1/3 min-w-[240px] pb-4 text-left align-top">
                    <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-surface">
                      <div className="relative aspect-square">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover"
                          sizes="33vw"
                        />
                      </div>
                      <div className="p-4">
                        <Link
                          href={`/boutique/${product.slug}`}
                          className="font-semibold hover:text-accent"
                        >
                          {product.name}
                        </Link>
                        <button
                          type="button"
                          onClick={() => toggle(product.id)}
                          className="mt-2 block text-xs text-zinc-500 hover:text-accent-strong"
                        >
                          Retirer
                        </button>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                {
                  label: "Prix",
                  render: (p: (typeof compared)[number]) => formatPrice(p.price),
                },
                {
                  label: "Note",
                  render: (p: (typeof compared)[number]) => (
                    <span className="inline-flex items-center gap-2">
                      <StarRating rating={p.rating} /> {p.rating}
                    </span>
                  ),
                },
                {
                  label: "Stock",
                  render: (p: (typeof compared)[number]) => `${p.stock} unités`,
                },
                {
                  label: "Catégorie",
                  render: (p: (typeof compared)[number]) => p.subcategory,
                },
                {
                  label: "Tailles",
                  render: (p: (typeof compared)[number]) => p.sizes.join(", "),
                },
                {
                  label: "Couleurs",
                  render: (p: (typeof compared)[number]) => p.colors.join(", "),
                },
              ].map((row) => (
                <tr key={row.label}>
                  {compared.map((product) => (
                    <td
                      key={`${row.label}-${product.id}`}
                      className="border-t border-white/10 py-4 text-zinc-300"
                    >
                      <p className="mb-1 text-xs uppercase tracking-[0.12em] text-zinc-500">
                        {row.label}
                      </p>
                      {row.render(product)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
