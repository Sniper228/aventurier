"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { realisations } from "@/lib/data/realisations";

const filters = [
  "Tous",
  "Flocage",
  "Équipe",
  "Académie",
  "Entreprise",
  "Uniforme",
] as const;

export default function RealisationsPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("Tous");

  const items = useMemo(() => {
    if (filter === "Tous") return realisations;
    return realisations.filter((item) => item.type === filter);
  }, [filter]);

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-7xl">
        Nos réalisations
      </h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Galerie premium : avant / après, flocages, uniformes, équipes et
        académies.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        {filters.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setFilter(item)}
            className={`rounded-full px-4 py-2 text-sm font-medium ${
              filter === item
                ? "bg-accent text-zinc-950"
                : "bg-white/5 text-zinc-300 hover:bg-white/10"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.id}
            className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-surface"
          >
            {item.before ? (
              <div className="grid grid-cols-2">
                <div className="relative aspect-square">
                  <Image
                    src={item.before}
                    alt={`Avant - ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-black/60 px-3 py-1 text-[11px] text-white backdrop-blur-md">
                    Avant
                  </span>
                </div>
                <div className="relative aspect-square">
                  <Image
                    src={item.after}
                    alt={`Après - ${item.title}`}
                    fill
                    className="object-cover"
                    sizes="25vw"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-zinc-950">
                    Après
                  </span>
                </div>
              </div>
            ) : (
              <div className="relative aspect-[16/11]">
                <Image
                  src={item.after}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 100vw, 33vw"
                />
              </div>
            )}
            <div className="p-5">
              <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                {item.type}
              </p>
              <h2 className="mt-2 text-xl font-semibold text-white">
                {item.title}
              </h2>
              <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
