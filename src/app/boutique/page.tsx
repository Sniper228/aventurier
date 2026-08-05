import { Suspense } from "react";
import type { Metadata } from "next";
import { ShopClient } from "@/components/shop/ShopClient";

export const metadata: Metadata = {
  title: "Boutique",
  description:
    "Maillots, chaussures, gants, ballons et accessoires football. Vente gros et détail.",
};

export default function BoutiquePage() {
  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <div className="mb-10 max-w-2xl">
        <h1 className="display-font text-5xl text-white md:text-7xl">Boutique</h1>
        <p className="mt-3 text-zinc-400">
          Filtrez par catégorie, prix et besoin. Photos HD, stocks et options
          personnalisation sur chaque fiche.
        </p>
      </div>
      <Suspense
        fallback={
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <div key={index} className="skeleton h-[420px] rounded-[1.75rem]" />
            ))}
          </div>
        }
      >
        <ShopClient />
      </Suspense>
    </div>
  );
}
