"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash, Minus, Plus } from "@phosphor-icons/react";
import { useCartStore } from "@/store/cart";
import { formatPrice } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

export default function CartPage() {
  const {
    items,
    removeItem,
    updateQuantity,
    subtotal,
    promoCode,
    setPromoCode,
  } = useCartStore();
  const total = subtotal();
  const discount = promoCode?.toUpperCase() === "STEP10" ? total * 0.1 : 0;
  const finalTotal = total - discount;

  if (items.length === 0) {
    return (
      <div className="mx-auto flex min-h-[70dvh] max-w-[1400px] flex-col items-center justify-center px-4 pt-28 text-center md:px-6">
        <h1 className="display-font text-5xl text-white">Panier vide</h1>
        <p className="mt-3 text-zinc-400">
          Ajoutez des équipements pour commencer votre commande.
        </p>
        <Button href="/boutique" className="mt-8" variant="primary" icon>
          Découvrir la boutique
        </Button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-6xl">Panier</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-4">
          {items.map((item) => (
            <article
              key={`${item.productId}-${item.size}-${item.color}`}
              className="flex gap-4 rounded-[1.5rem] border border-white/10 bg-surface p-4"
            >
              <Link
                href={`/boutique/${item.slug}`}
                className="relative h-24 w-24 shrink-0 overflow-hidden rounded-2xl"
              >
                <Image src={item.image} alt="" fill className="object-cover" sizes="96px" />
              </Link>
              <div className="min-w-0 flex-1">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <Link
                      href={`/boutique/${item.slug}`}
                      className="font-semibold text-white hover:text-accent"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-sm text-zinc-500">
                      {item.color} · {item.size}
                    </p>
                  </div>
                  <button
                    type="button"
                    aria-label="Retirer"
                    onClick={() =>
                      removeItem(item.productId, item.size, item.color)
                    }
                    className="rounded-full p-2 text-zinc-400 hover:bg-white/5 hover:text-accent-strong"
                  >
                    <Trash className="h-5 w-5" />
                  </button>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 p-1">
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
                      className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-6 text-center text-sm">{item.quantity}</span>
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
                      className="flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/10"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <p className="font-semibold">
                    {formatPrice(item.price * item.quantity)}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>

        <aside className="h-fit rounded-[1.75rem] border border-white/10 bg-surface p-6">
          <h2 className="text-xl font-semibold">Récapitulatif</h2>
          <div className="mt-5 space-y-3 text-sm">
            <div className="flex justify-between text-zinc-400">
              <span>Sous-total</span>
              <span>{formatPrice(total)}</span>
            </div>
            {discount > 0 ? (
              <div className="flex justify-between text-emerald-400">
                <span>Code promo</span>
                <span>-{formatPrice(discount)}</span>
              </div>
            ) : null}
            <div className="flex justify-between border-t border-white/10 pt-3 text-lg font-semibold text-white">
              <span>Total</span>
              <span>{formatPrice(finalTotal)}</span>
            </div>
          </div>

          <form
            className="mt-6 space-y-3"
            onSubmit={(event) => {
              event.preventDefault();
              const data = new FormData(event.currentTarget);
              setPromoCode(String(data.get("promo") || null));
            }}
          >
            <Input
              label="Code promo"
              name="promo"
              defaultValue={promoCode ?? ""}
              placeholder="STEP10"
              helper="Essayez STEP10 pour -10%"
            />
            <Button type="submit" variant="ghost" className="w-full">
              Appliquer
            </Button>
          </form>

          <Button href="/checkout" variant="primary" size="lg" className="mt-4 w-full">
            Paiement
          </Button>
        </aside>
      </div>
    </div>
  );
}
