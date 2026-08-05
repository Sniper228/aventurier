"use client";

import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";

export default function LoginPage() {
  const [error, setError] = useState("");

  return (
    <div className="mx-auto flex min-h-[80dvh] max-w-md flex-col justify-center px-4 pb-20 pt-28">
      <h1 className="display-font text-5xl text-white">Connexion</h1>
      <p className="mt-3 text-sm text-zinc-400">
        Accédez à vos commandes, adresses et favoris.
      </p>

      <form
        className="mt-8 space-y-4 rounded-[1.75rem] border border-white/10 bg-surface p-6"
        onSubmit={(event) => {
          event.preventDefault();
          const data = new FormData(event.currentTarget);
          const email = String(data.get("email") ?? "");
          if (!email.includes("@")) {
            setError("Email invalide");
            return;
          }
          setError("");
          window.location.href = "/compte";
        }}
      >
        <Input
          label="Email"
          name="email"
          type="email"
          required
          placeholder="client@aventurier.fr"
          error={error}
        />
        <Input
          label="Mot de passe"
          name="password"
          type="password"
          required
          placeholder="••••••••"
        />
        <Button type="submit" variant="primary" className="w-full" size="lg">
          Se connecter
        </Button>
      </form>

      <p className="mt-6 text-center text-sm text-zinc-400">
        Pas encore de compte ?{" "}
        <Link href="/inscription" className="text-accent hover:text-white">
          Inscription
        </Link>
      </p>
    </div>
  );
}
