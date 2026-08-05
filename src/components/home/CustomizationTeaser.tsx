import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

const flocagePairs = [
  { id: 1, front: "/image/flocage1.jpeg", back: "/image/flocage1prime.jpeg" },
  { id: 3, front: "/image/flocage3.jpeg", back: "/image/flocage3prime.jpeg" },
  { id: 4, front: "/image/flocage4.jpeg", back: "/image/flocage4prime.jpeg" },
  { id: 6, front: "/image/flocage6.jpeg", back: "/image/flocage6prime.jpeg" },
  { id: 7, front: "/image/flocage7.jpeg", back: "/image/flocage7prime.jpeg" },
  { id: 8, front: "/image/flocage8.jpeg", back: "/image/flocage8prime.jpeg" },
  { id: 9, front: "/image/flocage9.jpeg", back: "/image/flocage9prime.jpeg" },
  { id: 10, front: "/image/flocage10.jpeg", back: "/image/flocage10prime.jpeg" },
  { id: 11, front: "/image/flocage11.jpeg", back: "/image/flocage11prime.jpeg" },
];

export function CustomizationTeaser() {
  return (
    <section className="relative overflow-hidden border-y border-white/10">
      <div className="absolute inset-0">
        <Image
          src="/images/customization-workshop.png"
          alt=""
          fill
          className="object-cover opacity-35"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
      </div>

      <div className="relative mx-auto max-w-[1400px] px-4 py-20 md:px-6 md:py-28">
        <Reveal>
          <h2 className="display-font text-5xl text-white md:text-7xl">
            Personnalisation premium
          </h2>
          <p className="mt-4 max-w-xl text-zinc-300">
            Découvrez nos maillots déjà floqués : face avant et face arrière,
            prêts pour le terrain.
          </p>
        </Reveal>

        <div className="mt-12 space-y-8">
          {flocagePairs.map((pair, index) => (
            <Reveal key={pair.id} delay={Math.min(index * 0.03, 0.2)}>
              <article className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-black/35 backdrop-blur-sm">
                <div className="grid gap-3 p-3 md:grid-cols-2 md:gap-4 md:p-4">
                  <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-zinc-950 sm:aspect-[3/4]">
                    <Image
                      src={pair.front}
                      alt={`Maillot floqué ${pair.id} - face avant`}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Face avant
                    </figcaption>
                  </figure>
                  <figure className="relative aspect-[4/5] overflow-hidden rounded-[1.25rem] bg-zinc-950 sm:aspect-[3/4]">
                    <Image
                      src={pair.back}
                      alt={`Maillot floqué ${pair.id} - face arrière`}
                      fill
                      className="object-cover"
                      sizes="(max-width:768px) 100vw, 50vw"
                      loading="lazy"
                    />
                    <figcaption className="absolute bottom-3 left-3 rounded-full bg-black/65 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
                      Face arrière
                    </figcaption>
                  </figure>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
