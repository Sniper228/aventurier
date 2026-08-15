"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Heart,
  MagnifyingGlass,
  ShoppingBag,
  User,
  List,
  X,
} from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";
import { useCartStore } from "@/store/cart";
import { useFavoritesStore } from "@/store/favorites";
import { useUiStore } from "@/store/ui";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/boutique", label: "Boutique" },
  { href: "/personnalisation", label: "Personnalisation" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/services", label: "Services" },
  { href: "/a-propos", label: "À propos" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const reduce = useReducedMotion();
  const cartCount = useCartStore((s) => s.totalItems());
  const favoritesCount = useFavoritesStore((s) => s.ids.length);
  const { mobileMenuOpen, setMobileMenuOpen, setSearchOpen, openCart } =
    useUiStore();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 md:px-6 md:pt-4">
        <div
          className={cn(
            "mx-auto flex h-16 max-w-[1400px] items-center justify-between rounded-full border px-4 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] md:h-[68px] md:px-6",
            scrolled || mobileMenuOpen
              ? "glass-panel border-white/15"
              : "border-white/10 bg-black/25 backdrop-blur-md",
          )}
        >
          <Link href="/" className="flex min-w-0 items-center gap-3">
            <Image
              src="/image/logo.jpeg"
              alt="Logo Aventurier 2.0"
              width={40}
              height={40}
              priority
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold tracking-wide text-white md:text-base">
                AVENTURIER 2.0
              </span>
              <span className="hidden text-[10px] uppercase tracking-[0.22em] text-accent sm:block">
                Step by step
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 xl:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-2 text-[13px] font-medium text-zinc-300 transition-colors duration-300 hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1.5 md:gap-2">
            <button
              type="button"
              aria-label="Rechercher"
              onClick={() => setSearchOpen(true)}
              className="flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <MagnifyingGlass className="h-5 w-5" />
            </button>
            <Link
              href="/favoris"
              aria-label="Favoris"
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <Heart className="h-5 w-5" />
              {mounted && favoritesCount > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent-strong px-1 text-[10px] font-bold">
                  {favoritesCount}
                </span>
              ) : null}
            </Link>
            <button
              type="button"
              aria-label="Panier"
              onClick={openCart}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10"
            >
              <ShoppingBag className="h-5 w-5" />
              {mounted && cartCount > 0 ? (
                <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-accent px-1 text-[10px] font-bold text-zinc-950">
                  {cartCount}
                </span>
              ) : null}
            </button>
            <Link
              href="/compte"
              aria-label="Compte"
              className="hidden h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 sm:flex"
            >
              <User className="h-5 w-5" />
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative flex h-10 w-10 items-center justify-center rounded-full text-white transition-colors hover:bg-white/10 xl:hidden"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileMenuOpen ? (
                  <motion.span
                    key="close"
                    initial={reduce ? false : { opacity: 0, rotate: -45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: 45 }}
                  >
                    <X className="h-5 w-5" weight="bold" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="open"
                    initial={reduce ? false : { opacity: 0, rotate: 45 }}
                    animate={{ opacity: 1, rotate: 0 }}
                    exit={{ opacity: 0, rotate: -45 }}
                  >
                    <List className="h-5 w-5" weight="bold" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/85 backdrop-blur-2xl xl:hidden"
          >
            <div className="flex h-full flex-col px-6 pb-10 pt-28">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={reduce ? false : { opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * index, duration: 0.45 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block rounded-2xl px-4 py-3 text-2xl font-semibold text-white transition-colors hover:bg-white/5 hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-auto grid grid-cols-2 gap-3">
                <Link
                  href="/connexion"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full border border-white/15 px-4 py-3 text-center text-sm font-medium"
                >
                  Connexion
                </Link>
                <Link
                  href="/inscription"
                  onClick={() => setMobileMenuOpen(false)}
                  className="rounded-full bg-accent-strong px-4 py-3 text-center text-sm font-medium"
                >
                  Inscription
                </Link>
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
