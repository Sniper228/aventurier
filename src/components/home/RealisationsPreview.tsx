import Image from "next/image";
import Link from "next/link";
import { realisations } from "@/lib/data/realisations";
import { Reveal } from "@/components/ui/Reveal";

export function RealisationsPreview() {
  const items = realisations.slice(0, 4);

  return (
    <section className="border-y border-white/10 bg-surface/50 py-20 md:py-28">
      <div className="mx-auto max-w-[1400px] px-4 md:px-6">
        <Reveal>
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className="display-font text-5xl text-white md:text-6xl">
                Nos réalisations
              </h2>
              <p className="mt-3 max-w-lg text-zinc-400">
                Flocages, uniformes et kits d&apos;équipes livrés avec un rendu
                professionnel.
              </p>
            </div>
            <Link
              href="/realisations"
              className="text-sm font-semibold text-accent hover:text-white"
            >
              Voir la galerie
            </Link>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {items.map((item, index) => (
            <Reveal key={item.id} delay={index * 0.05}>
              <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-background">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={item.after}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="(max-width:768px) 100vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <p className="text-xs uppercase tracking-[0.16em] text-zinc-500">
                    {item.type}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-zinc-400">{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
