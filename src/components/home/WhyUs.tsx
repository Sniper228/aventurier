import {
  CurrencyCircleDollar,
  Handshake,
  Lightning,
  Palette,
  SealCheck,
  Truck,
  UsersThree,
} from "@phosphor-icons/react/dist/ssr";
import { Reveal } from "@/components/ui/Reveal";

const reasons = [
  {
    title: "Qualité professionnelle",
    text: "Matériaux et finitions pensés pour le match et l'entraînement intensif.",
    icon: SealCheck,
  },
  {
    title: "Livraison rapide",
    text: "Stock disponible et production atelier pour expédier sans perdre le rythme.",
    icon: Truck,
  },
  {
    title: "Prix compétitifs",
    text: "Tarifs détail et conditions gros adaptées aux clubs et entreprises.",
    icon: CurrencyCircleDollar,
  },
  {
    title: "Flocage haute précision",
    text: "DTF, vinyle, sublimation et broderie avec contrôle qualité systématique.",
    icon: Palette,
  },
  {
    title: "Grand choix",
    text: "Maillots, chaussures, gants, ballons et accessoires sous un même toit.",
    icon: Lightning,
  },
  {
    title: "Service personnalisé",
    text: "Conseil taille, technique de marquage et suivi de projet dédié.",
    icon: Handshake,
  },
  {
    title: "Accompagnement",
    text: "De l'identité visuelle à la livraison complète d'équipe.",
    icon: UsersThree,
  },
];

export function WhyUs() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-20 md:px-6 md:py-28">
      <Reveal>
        <h2 className="display-font text-5xl text-white md:text-6xl">
          Pourquoi nous choisir
        </h2>
        <p className="mt-3 max-w-xl text-zinc-400">
          La confiance d&apos;une marque terrain : performance, précision et
          accompagnement.
        </p>
      </Reveal>

      <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason, index) => (
          <Reveal
            key={reason.title}
            delay={index * 0.04}
            className={index === 0 ? "md:col-span-2 xl:col-span-2" : ""}
          >
            <div
              className={`h-full rounded-[1.75rem] border border-white/10 bg-surface p-6 ${
                index === 0
                  ? "bg-gradient-to-br from-accent/15 via-surface to-surface"
                  : ""
              }`}
            >
              <reason.icon className="h-8 w-8 text-accent" weight="duotone" />
              <h3 className="mt-5 text-xl font-semibold text-white">
                {reason.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {reason.text}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
