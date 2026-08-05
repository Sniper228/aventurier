import type { Metadata } from "next";
import {
  Package,
  Palette,
  Storefront,
  Truck,
  UsersThree,
  Headset,
} from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Vente gros et détail, flocage, personnalisation, livraison et accompagnement clubs.",
};

const services = [
  {
    title: "Vente en gros",
    text: "Tarifs volume, devis clubs et livraisons groupées pour académies et associations.",
    icon: Package,
  },
  {
    title: "Vente au détail",
    text: "Boutique en ligne avec stocks, tailles, colors et paiement sécurisé.",
    icon: Storefront,
  },
  {
    title: "Flocage & marquage",
    text: "DTF, vinyle, sublimation et broderie avec BAT numérique avant production.",
    icon: Palette,
  },
  {
    title: "Livraison express",
    text: "Options accélérées pour matchs, tournois et événements urgents.",
    icon: Truck,
  },
  {
    title: "Accompagnement équipe",
    text: "Conseil identité visuelle, sizing et coordination multi-références.",
    icon: UsersThree,
  },
  {
    title: "Support dédié",
    text: "WhatsApp, chat et email pour suivre chaque commande jusqu'à réception.",
    icon: Headset,
  },
];

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <Reveal>
        <h1 className="display-font text-5xl text-white md:text-7xl">Services</h1>
        <p className="mt-4 max-w-2xl text-zinc-400">
          Une plateforme complète pour équiper, personnaliser et livrer sans
          friction.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, index) => (
          <Reveal key={service.title} delay={index * 0.04}>
            <article className="h-full rounded-[1.75rem] border border-white/10 bg-surface p-7">
              <service.icon className="h-9 w-9 text-accent" weight="duotone" />
              <h2 className="mt-5 text-2xl font-semibold text-white">
                {service.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-zinc-400">
                {service.text}
              </p>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-14 rounded-[2rem] border border-white/10 bg-gradient-to-r from-accent/15 to-surface p-8 md:p-10">
        <h2 className="text-3xl font-semibold text-white">
          Un projet club ou entreprise ?
        </h2>
        <p className="mt-3 max-w-xl text-zinc-300">
          Expliquez votre besoin, nous répondons avec un devis clair et un
          planning de production.
        </p>
        <div className="mt-6">
          <Button href="/contact" variant="primary" icon>
            Parler à un conseiller
          </Button>
        </div>
      </div>
    </div>
  );
}
