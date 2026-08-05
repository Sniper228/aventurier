"use client";

import Link from "next/link";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function RegisterPage() {
  return (
    <div className="mx-auto flex min-h-[80dvh] max-w-md flex-col justify-center px-4 pb-20 pt-28">
      <h1 className="display-font text-5xl text-white">Inscription</h1>
      <p className="mt-3 text-sm text-zinc-400">
        Créez votre compte client Aventurier 2.0.
      </p>

      <form
        className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-surface p-6"
        onSubmit={(event) => {
          event.preventDefault();
          window.location.href = "/compte";
        }}
      >
        <Input label="Nom complet" name="name" required />
        <Input label="Email" name="email" type="email" required />
        <Input label="Mot de passe" name="password" type="password" required />
        <Input
          label="Confirmer le mot de passe"
          name="password_confirmation"
          type="password"
          required
        />
        <Button type="submit" variant="primary" className="w-full" size="lg">
          Créer mon compte
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Déjà inscrit ?{" "}
        <Link href="/connexion" className="text-accent hover:text-white">
          Connexion
        </Link>
      </p>
    </div>
  );
}
