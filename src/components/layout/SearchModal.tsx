"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MagnifyingGlass, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { products } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils";
import { useUiStore } from "@/store/ui";

export function SearchModal() {
  const { searchOpen, setSearchOpen } = useUiStore();
  const [query, setQuery] = useState("");
  const reduce = useReducedMotion();

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products.slice(0, 6);
    return products
      .filter(
        (product) =>
          product.name.toLowerCase().includes(q) ||
          product.category.includes(q) ||
          product.subcategory.toLowerCase().includes(q) ||
          product.tags.some((tag) => tag.includes(q)),
      )
      .slice(0, 8);
  }, [query]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
      if ((event.metaKey || event.ctrlKey) && event.key === "k") {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [setSearchOpen]);

  useEffect(() => {
    if (!searchOpen) setQuery("");
  }, [searchOpen]);

  return (
    <AnimatePresence>
      {searchOpen ? (
        <motion.div
          className="fixed inset-0 z-[60] flex items-start justify-center bg-black/80 px-4 pt-24 backdrop-blur-xl"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSearchOpen(false)}
        >
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-2xl overflow-hidden rounded-[1.75rem] border border-white/12 bg-surface-elevated shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-white/10 px-4 py-4">
              <MagnifyingGlass className="h-5 w-5 text-accent" />
              <input
                autoFocus
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Rechercher maillots, crampons, gants..."
                className="w-full bg-transparent text-base text-white outline-none placeholder:text-zinc-500"
              />
              <button
                type="button"
                aria-label="Fermer"
                onClick={() => setSearchOpen(false)}
                className="rounded-full p-2 hover:bg-white/10"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <ul className="max-h-[60vh] overflow-y-auto p-2">
              {results.length === 0 ? (
                <li className="px-4 py-8 text-center text-sm text-zinc-400">
                  Aucun produit trouvé.
                </li>
              ) : (
                results.map((product) => (
                  <li key={product.id}>
                    <Link
                      href={`/boutique/${product.slug}`}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center gap-4 rounded-2xl px-3 py-3 transition-colors hover:bg-white/5"
                    >
                      <div className="relative h-14 w-14 overflow-hidden rounded-xl bg-zinc-900">
                        <Image
                          src={product.images[0]}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="56px"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate font-medium text-white">
                          {product.name}
                        </p>
                        <p className="text-xs text-zinc-500">
                          {product.subcategory}
                        </p>
                      </div>
                      <p className="text-sm font-semibold text-accent">
                        {formatPrice(product.price)}
                      </p>
                    </Link>
                  </li>
                ))
              )}
            </ul>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
