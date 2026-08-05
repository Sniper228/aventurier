import Link from "next/link";
import { getFeaturedProducts } from "@/lib/data/products";
import { ProductCard } from "@/components/shop/ProductCard";
import { Reveal } from "@/components/ui/Reveal";

export function FeaturedProducts() {
  const featured = getFeaturedProducts();

  return (
    <section className="border-y border-white/10 bg-surface/60 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="display-font text-5xl text-white md:text-6xl">
                Sélection champions
              </h2>
              <p className="mt-3 max-w-lg text-zinc-400">
                Les pièces les plus demandées par les clubs et les joueurs exigeants.
              </p>
            </div>
            <Link
              href="/boutique"
              className="text-sm font-semibold text-accent transition-colors hover:text-white"
            >
              Voir toute la boutique
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {featured.map((product, index) => (
            <Reveal key={product.id} delay={index * 0.04}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
