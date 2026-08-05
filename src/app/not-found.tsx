import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[70dvh] max-w-xl flex-col items-center justify-center px-4 pt-28 text-center">
      <p className="text-sm uppercase tracking-[0.22em] text-accent">404</p>
      <h1 className="mt-3 display-font text-5xl text-white">Page introuvable</h1>
      <p className="mt-3 text-zinc-400">
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <div className="mt-8 flex gap-3">
        <Button href="/" variant="primary">
          Accueil
        </Button>
        <Button href="/boutique" variant="ghost">
          Boutique
        </Button>
      </div>
      <Link href="/contact" className="mt-6 text-sm text-zinc-500 hover:text-accent">
        Besoin d&apos;aide ? Contactez-nous
      </Link>
    </div>
  );
}
