import type { Metadata } from "next";
import Image from "next/image";
import { JerseyBuilder } from "@/components/custom/JerseyBuilder";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Personnalisation",
  description:
    "Flocage professionnel, modélisation de maillot et personnalisation textile. Aperçu en temps réel.",
};

const flocking = [
  "Nom",
  "Numéro",
  "Sponsors",
  "Logos",
  "Écussons",
  "Championnats",
  "Impression DTF",
  "Vinyle",
  "Sublimation",
  "Broderie",
];

const textiles = [
  "T-shirts",
  "Lacoste",
  "Sweats",
  "Vestes",
  "Polos",
  "Casquettes",
  "Uniformes",
  "Tenues d'entreprise",
  "Tenues scolaires",
  "Tenues d'associations",
];

export default function PersonnalisationPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <Reveal>
        <h1 className="display-font text-5xl text-white md:text-7xl">
          Personnalisation
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Atelier premium pour clubs, académies et entreprises. Du brief au
          flocage haute précision.
        </p>
      </Reveal>

      <section className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        <Reveal>
          <div className="relative min-h-[320px] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/customization-workshop.png"
              alt="Atelier de personnalisation textile"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 45vw"
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/10 bg-surface p-8">
            <h2 className="text-3xl font-semibold text-white">
              Flocage professionnel
            </h2>
            <p className="mt-3 text-zinc-400">
              Techniques adaptées au textile et à l&apos;usage compétition ou
              événementiel.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {flocking.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-zinc-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="display-font text-5xl text-white">Modélisation</h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Créez votre propre maillot : couleur, motifs, col, manches, logos,
            nom, numéro et sponsor.
          </p>
        </Reveal>
        <div className="mt-8">
          <JerseyBuilder />
        </div>
      </section>

      <section className="mt-20">
        <Reveal>
          <h2 className="display-font text-5xl text-white">
            Personnalisation textile
          </h2>
          <p className="mt-3 max-w-xl text-zinc-400">
            Au-delà du football : tenues d&apos;entreprise, scolaires et
            associations.
          </p>
        </Reveal>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {textiles.map((item, index) => (
            <Reveal key={item} delay={index * 0.03}>
              <div className="rounded-2xl border border-white/10 bg-surface px-4 py-5 text-center text-sm font-medium text-zinc-200">
                {item}
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
