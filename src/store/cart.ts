"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "@/lib/data/products";

export type CartItem = {
  productId: string;
  slug: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

type CartState = {
  items: CartItem[];
  promoCode: string | null;
  addItem: (
    product: Product,
    options: { size: string; color: string; quantity?: number },
  ) => void;
  removeItem: (productId: string, size: string, color: string) => void;
  updateQuantity: (
    productId: string,
    size: string,
    color: string,
    quantity: number,
  ) => void;
  setPromoCode: (code: string | null) => void;
  clear: () => void;
  totalItems: () => number;
  subtotal: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      promoCode: null,
      addItem: (product, { size, color, quantity = 1 }) => {
        set((state) => {
          const existing = state.items.find(
            (item) =>
              item.productId === product.id &&
              item.size === size &&
              item.color === color,
          );
          if (existing) {
            return {
              items: state.items.map((item) =>
                item === existing
                  ? { ...item, quantity: item.quantity + quantity }
                  : item,
              ),
            };
          }
          return {
            items: [
              ...state.items,
              {
                productId: product.id,
                slug: product.slug,
                name: product.name,
                price: product.price,
                image: product.images[0],
                size,
                color,
                quantity,
              },
            ],
          };
        });
      },
      removeItem: (productId, size, color) =>
        set((state) => ({
          items: state.items.filter(
            (item) =>
              !(
                item.productId === productId &&
                item.size === size &&
                item.color === color
              ),
          ),
        })),
      updateQuantity: (productId, size, color, quantity) =>
        set((state) => ({
          items: state.items
            .map((item) =>
              item.productId === productId &&
              item.size === size &&
              item.color === color
                ? { ...item, quantity }
                : item,
            )
            .filter((item) => item.quantity > 0),
        })),
      setPromoCode: (code) => set({ promoCode: code }),
      clear: () => set({ items: [], promoCode: null }),
      totalItems: () =>
        get().items.reduce((sum, item) => sum + item.quantity, 0),
      subtotal: () =>
        get().items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    }),
    { name: "aventurier-cart" },
  ),
);
