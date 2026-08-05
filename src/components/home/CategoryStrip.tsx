import Image from "next/image";
import Link from "next/link";
import { categories } from "@/lib/data/products";
import { Reveal } from "@/components/ui/Reveal";

export function CategoryStrip() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <h2 className="display-font text-5xl text-white md:text-6xl">
          Boutique performance
        </h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          Maillots, crampons, gants, ballons et accessoires pour le terrain et
          l&apos;identité d&apos;équipe.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-5">
        {categories.map((category, index) => (
          <Reveal key={category.slug} delay={index * 0.05} className="h-full">
            <Link
              href={`/boutique?categorie=${category.slug}`}
              className="group relative block h-full min-h-[280px] overflow-hidden rounded-[1.75rem] border border-white/10"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                sizes="(max-width:768px) 100vw, 20vw"
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xl font-semibold text-white">{category.name}</p>
                <p className="mt-1 text-sm text-zinc-300">
                  {category.subcategories.length} gammes
                </p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
