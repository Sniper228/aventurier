"use client";

import { create } from "zustand";

type UiState = {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  liveChatOpen: boolean;
  cartOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setLiveChatOpen: (open: boolean) => void;
  setCartOpen: (open: boolean) => void;
  openCart: () => void;
  closeCart: () => void;
};

export const useUiStore = create<UiState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  liveChatOpen: false,
  cartOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setLiveChatOpen: (open) => set({ liveChatOpen: open }),
  setCartOpen: (open) => set({ cartOpen: open }),
  openCart: () => set({ cartOpen: true, searchOpen: false, mobileMenuOpen: false }),
  closeCart: () => set({ cartOpen: false }),
}));
