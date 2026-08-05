import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "À propos",
  description:
    "Aventurier 2.0 - marque football premium. STEP BY STEP. Qualité, vitesse, confiance.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent">
            Step by step
          </p>
          <h1 className="mt-3 display-font text-5xl text-white md:text-7xl">
            À propos
          </h1>
          <p className="mt-5 text-lg leading-relaxed text-zinc-300">
            Aventurier 2.0 équipe les joueurs, clubs et entreprises qui refusent
            le compromis. Nous combinons sélection produit exigeante, atelier de
            personnalisation et expérience e-commerce digne d&apos;une marque
            internationale.
          </p>
          <p className="mt-4 text-zinc-400">
            Notre devise STEP BY STEP rappelle que la performance se construit
            avec méthode : du premier contact au maillot floqué livré.
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10">
            <Image
              src="/images/realisation-equipe.png"
              alt="Équipe en tenues personnalisées Aventurier 2.0"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>
      </div>

      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {[
          {
            title: "Vision",
            text: "Devenir la référence francophone des équipements football personnalisés.",
          },
          {
            title: "Mission",
            text: "Rendre accessible un niveau pro de produit, de marquage et de service.",
          },
          {
            title: "Engagement",
            text: "Transparence des délais, contrôle qualité et accompagnement humain.",
          },
        ].map((item, index) => (
          <Reveal key={item.title} delay={index * 0.05}>
            <article className="h-full rounded-[1.75rem] border border-white/10 bg-surface p-6">
              <h2 className="text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-3 text-sm text-zinc-400">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
