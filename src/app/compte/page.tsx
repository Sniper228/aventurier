"use client";

import Link from "next/link";
import {
  Package,
  MapPin,
  User,
  Bell,
  SignOut,
} from "@phosphor-icons/react";
import { Button } from "@/components/ui/Button";

const orders = [
  {
    id: "AV-20481",
    date: "28 juil. 2026",
    status: "Expédiée",
    total: "248,80 €",
  },
  {
    id: "AV-20312",
    date: "12 juin 2026",
    status: "Livrée",
    total: "149,00 €",
  },
];

const addresses = [
  {
    label: "Domicile",
    line: "18 rue des Champions, 75011 Paris",
  },
  {
    label: "Club",
    line: "Stade Municipal, 94000 Créteil",
  },
];

export default function AccountPage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-font text-5xl text-white md:text-6xl">
            Mon compte
          </h1>
          <p className="mt-3 text-zinc-400">
            Tableau de bord client : commandes, adresses et notifications.
          </p>
        </div>
        <div className="flex gap-2">
          <Button href="/connexion" variant="ghost">
            Connexion
          </Button>
          <Button href="/inscription" variant="primary">
            Inscription
          </Button>
        </div>
      </div>

      <div className="mt-10 grid gap-4 md:grid-cols-4">
        {[
          { href: "/compte#commandes", icon: Package, label: "Commandes" },
          { href: "/compte#adresses", icon: MapPin, label: "Adresses" },
          { href: "/compte#profil", icon: User, label: "Profil" },
          { href: "/compte#notifications", icon: Bell, label: "Notifications" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-[1.5rem] border border-white/10 bg-surface p-5 transition-colors hover:border-accent/40"
          >
            <item.icon className="h-6 w-6 text-accent" />
            <span className="font-medium">{item.label}</span>
          </Link>
        ))}
      </div>

      <section id="profil" className="mt-12 rounded-[1.75rem] border border-white/10 bg-surface p-6 md:p-8">
        <h2 className="text-2xl font-semibold">Profil</h2>
        <div className="mt-4 grid gap-3 text-sm text-zinc-300 md:grid-cols-2">
          <p>Nom : Client Démo</p>
          <p>Email : client@aventurier.fr</p>
          <p>Téléphone : +33 6 12 34 56 78</p>
          <p>Type : Détail + projets club</p>
        </div>
      </section>

      <section id="commandes" className="mt-8">
        <h2 className="text-2xl font-semibold">Historique des commandes</h2>
        <div className="mt-4 space-y-3">
          {orders.map((order) => (
            <article
              key={order.id}
              className="flex flex-wrap items-center justify-between gap-3 rounded-[1.25rem] border border-white/10 bg-surface px-5 py-4"
            >
              <div>
                <p className="font-medium">{order.id}</p>
                <p className="text-sm text-zinc-500">{order.date}</p>
              </div>
              <p className="text-sm text-accent">{order.status}</p>
              <p className="font-semibold">{order.total}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="adresses" className="mt-8">
        <h2 className="text-2xl font-semibold">Adresses</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          {addresses.map((address) => (
            <article
              key={address.label}
              className="rounded-[1.25rem] border border-white/10 bg-surface p-5"
            >
              <p className="font-medium">{address.label}</p>
              <p className="mt-2 text-sm text-zinc-400">{address.line}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="notifications" className="mt-8 rounded-[1.75rem] border border-white/10 bg-surface p-6">
        <h2 className="text-2xl font-semibold">Notifications</h2>
        <ul className="mt-4 space-y-3 text-sm text-zinc-300">
          <li>Votre commande AV-20481 est en transit.</li>
          <li>Nouveau code promo STEP10 disponible.</li>
          <li>Votre devis flocage académie est prêt.</li>
        </ul>
      </section>

      <button
        type="button"
        className="mt-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-accent-strong"
      >
        <SignOut className="h-4 w-4" />
        Se déconnecter
      </button>
    </div>
  );
}
