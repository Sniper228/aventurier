"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";

type CompareState = {
  ids: string[];
  toggle: (productId: string) => void;
  clear: () => void;
  has: (productId: string) => boolean;
};

export const useCompareStore = create<CompareState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (productId) =>
        set((state) => {
          if (state.ids.includes(productId)) {
            return { ids: state.ids.filter((id) => id !== productId) };
          }
          if (state.ids.length >= 3) {
            return { ids: [...state.ids.slice(1), productId] };
          }
          return { ids: [...state.ids, productId] };
        }),
      clear: () => set({ ids: [] }),
      has: (productId) => get().ids.includes(productId),
    }),
    { name: "aventurier-compare" },
  ),
);
