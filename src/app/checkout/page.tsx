"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function CheckoutPage() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <div className="mx-auto flex min-h-[70dvh] max-w-xl flex-col items-center justify-center px-4 pt-28 text-center">
        <h1 className="display-font text-5xl text-white">Commande confirmée</h1>
        <p className="mt-3 text-zinc-400">
          Merci. Un email de confirmation et le suivi seront disponibles dans
          votre compte.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/compte" variant="primary">
            Mon compte
          </Button>
          <Button href="/boutique" variant="ghost">
            Continuer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-6xl">Paiement</h1>
      <p className="mt-3 text-zinc-400">
        Paiement sécurisé. Les données sont traitées via l&apos;API Laravel /
        Sanctum en production.
      </p>

      <form
        className="mt-10 space-y-4 rounded-[2rem] border border-white/10 bg-surface p-6 md:p-8"
        onSubmit={(event) => {
          event.preventDefault();
          setDone(true);
        }}
      >
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Prénom" name="firstName" required />
          <Input label="Nom" name="lastName" required />
        </div>
        <Input label="Email" name="email" type="email" required />
        <Input label="Adresse" name="address" required />
        <div className="grid gap-4 md:grid-cols-3">
          <Input label="Ville" name="city" required />
          <Input label="Code postal" name="zip" required />
          <Input label="Pays" name="country" defaultValue="France" required />
        </div>
        <Input
          label="Carte bancaire"
          name="card"
          placeholder="4242 4242 4242 4242"
          required
          helper="Simulation frontend - brancher Stripe/Laravel Cashier ensuite"
        />
        <Button type="submit" variant="primary" size="lg" className="w-full">
          Payer maintenant
        </Button>
        <p className="text-center text-xs text-zinc-500">
          En continuant, vous acceptez nos conditions.{" "}
          <Link href="/faq" className="text-accent">
            FAQ
          </Link>
        </p>
      </form>
    </div>
  );
}
