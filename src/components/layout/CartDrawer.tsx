"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import {
  Minus,
  Plus,
  ShoppingBag,
  Trash,
  Truck,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { formatPrice } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useUiStore } from "@/store/ui";
import { Button } from "@/components/ui/Button";

export const FREE_SHIPPING_THRESHOLD = 80;

export function CartDrawer() {
  const reduce = useReducedMotion();
  const { cartOpen, closeCart } = useUiStore();
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);
  const subtotal = useCartStore((s) => s.subtotal());
  const totalItems = useCartStore((s) => s.totalItems());

  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const freeShippingProgress = Math.min(
    100,
    (subtotal / FREE_SHIPPING_THRESHOLD) * 100,
  );
  const freeShippingUnlocked = remainingForFreeShipping <= 0;

  useEffect(() => {
    if (!cartOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeCart();
    };
    window.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [cartOpen, closeCart]);

  return (
    <AnimatePresence>
      {cartOpen ? (
        <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Panier">
          <motion.button
            type="button"
            aria-label="Fermer le panier"
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeCart}
          />

          <motion.aside
            initial={reduce ? false : { x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
            className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-zinc-950 shadow-[-24px_0_80px_rgba(0,0,0,0.45)]"
          >
            <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-lg font-semibold text-white">Votre panier</p>
                <p className="text-xs text-zinc-500">
                  {totalItems} article{totalItems > 1 ? "s" : ""}
                </p>
              </div>
              <button
                type="button"
                aria-label="Fermer"
                onClick={closeCart}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10"
              >
                <X className="h-5 w-5" weight="bold" />
              </button>
            </div>

            <div className="border-b border-white/10 px-5 py-4">
              <div className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Truck className="h-5 w-5" weight="duotone" />
                </span>
                <div className="min-w-0 flex-1">
                  {freeShippingUnlocked ? (
                    <p className="text-sm font-medium text-emerald-400">
                      Livraison gratuite débloquée
                    </p>
                  ) : (
                    <p className="text-sm text-zinc-300">
                      Plus que{" "}
                      <span className="font-semibold text-white">
                        {formatPrice(remainingForFreeShipping)}
                      </span>{" "}
                      pour la livraison offerte
                    </p>
                  )}
                  <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-accent to-emerald-400"
                      initial={false}
                      animate={{ width: `${freeShippingProgress}%` }}
                      transition={{ duration: 0.45, ease: [0.32, 0.72, 0, 1] }}
                    />
                  </div>
                  <p className="mt-2 text-[11px] text-zinc-500">
                    Seuil : {formatPrice(FREE_SHIPPING_THRESHOLD)}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 py-4">
              {items.length === 0 ? (
                <div className="flex h-full min-h-[240px] flex-col items-center justify-center text-center">
                  <ShoppingBag className="h-10 w-10 text-zinc-600" />
                  <p className="mt-4 font-medium text-white">Panier vide</p>
                  <p className="mt-2 max-w-[240px] text-sm text-zinc-500">
                    Ajoutez des équipements pour commencer votre commande.
                  </p>
                  <Button
                    href="/boutique"
                    variant="primary"
                    className="mt-6"
                    onClick={closeCart}
                  >
                    Voir la boutique
                  </Button>
                </div>
              ) : (
                <ul className="space-y-4">
                  {items.map((item) => (
                    <li
                      key={`${item.productId}-${item.size}-${item.color}`}
                      className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.03] p-3"
                    >
                      <Link
                        href={`/boutique/${item.slug}`}
                        onClick={closeCart}
                        className="relative h-20 w-20 shrink-0 overflow-hidden rounded-xl bg-zinc-900"
                      >
                        <Image
                          src={item.image}
                          alt=""
                          fill
                          className="object-cover"
                          sizes="80px"
                        />
                      </Link>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div className="min-w-0">
                            <Link
                              href={`/boutique/${item.slug}`}
                              onClick={closeCart}
                              className="block truncate text-sm font-semibold text-white hover:text-accent"
                            >
                              {item.name}
                            </Link>
                            <p className="mt-1 text-xs text-zinc-500">
                              {item.color} · {item.size}
                            </p>
                          </div>
                          <button
                            type="button"
                            aria-label="Retirer"
                            onClick={() =>
                              removeItem(item.productId, item.size, item.color)
                            }
                            className="rounded-full p-1.5 text-zinc-500 transition-colors hover:bg-white/5 hover:text-accent-strong"
                          >
                            <Trash className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-3 flex items-center justify-between">
                          <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 p-0.5">
                            <button
                              type="button"
                              aria-label="Diminuer"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.color,
                                  item.quantity - 1,
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span className="w-6 text-center text-xs font-medium">
                              {item.quantity}
                            </span>
                            <button
                              type="button"
                              aria-label="Augmenter"
                              onClick={() =>
                                updateQuantity(
                                  item.productId,
                                  item.size,
                                  item.color,
                                  item.quantity + 1,
                                )
                              }
                              className="flex h-7 w-7 items-center justify-center rounded-full hover:bg-white/10"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-white">
                            {formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {items.length > 0 ? (
              <div className="border-t border-white/10 bg-zinc-950 px-5 py-5">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-zinc-400">Sous-total</span>
                  <span className="text-lg font-semibold text-white">
                    {formatPrice(subtotal)}
                  </span>
                </div>
                <p className="mt-1 text-xs text-zinc-500">
                  {freeShippingUnlocked
                    ? "Livraison offerte"
                    : "Frais de livraison calculés au checkout"}
                </p>
                <div className="mt-4 grid gap-2">
                  <Button
                    href="/checkout"
                    variant="primary"
                    size="lg"
                    className="w-full"
                    onClick={closeCart}
                  >
                    Commander
                  </Button>
                  <Button
                    href="/panier"
                    variant="ghost"
                    className="w-full"
                    onClick={closeCart}
                  >
                    Voir le panier
                  </Button>
                </div>
              </div>
            ) : null}
          </motion.aside>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
