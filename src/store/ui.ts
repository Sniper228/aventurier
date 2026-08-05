"use client";

import { create } from "zustand";

type UiState = {
  searchOpen: boolean;
  mobileMenuOpen: boolean;
  liveChatOpen: boolean;
  setSearchOpen: (open: boolean) => void;
  setMobileMenuOpen: (open: boolean) => void;
  setLiveChatOpen: (open: boolean) => void;
};

export const useUiStore = create<UiState>((set) => ({
  searchOpen: false,
  mobileMenuOpen: false,
  liveChatOpen: false,
  setSearchOpen: (open) => set({ searchOpen: open }),
  setMobileMenuOpen: (open) => set({ mobileMenuOpen: open }),
  setLiveChatOpen: (open) => set({ liveChatOpen: open }),
}));
