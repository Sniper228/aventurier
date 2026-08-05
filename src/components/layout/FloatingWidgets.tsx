"use client";

import { ChatCircleDots, WhatsappLogo, X } from "@phosphor-icons/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useUiStore } from "@/store/ui";

export function FloatingWidgets() {
  const { liveChatOpen, setLiveChatOpen } = useUiStore();
  const reduce = useReducedMotion();

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 md:bottom-8 md:right-6">
      <AnimatePresence>
        {liveChatOpen ? (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            className="w-[min(92vw,340px)] overflow-hidden rounded-3xl border border-white/12 bg-surface-elevated shadow-2xl"
          >
            <div className="flex items-center justify-between bg-accent px-4 py-3 text-zinc-950">
              <p className="text-sm font-semibold">Chat en direct</p>
              <button
                type="button"
                aria-label="Fermer le chat"
                onClick={() => setLiveChatOpen(false)}
              >
                <X className="h-5 w-5" weight="bold" />
              </button>
            </div>
            <div className="space-y-3 p-4">
              <p className="rounded-2xl bg-white/5 px-3 py-2 text-sm text-zinc-300">
                Bonjour, une question sur un kit, un flocage ou une commande club ?
              </p>
              <form
                className="flex gap-2"
                onSubmit={(event) => {
                  event.preventDefault();
                  setLiveChatOpen(false);
                }}
              >
                <label htmlFor="live-chat" className="sr-only">
                  Message
                </label>
                <input
                  id="live-chat"
                  name="message"
                  placeholder="Écrire un message..."
                  className="flex-1 rounded-full border border-white/12 bg-white/5 px-3 py-2 text-sm outline-none focus:border-accent"
                />
                <button
                  type="submit"
                  className="rounded-full bg-accent-strong px-4 text-sm font-semibold"
                >
                  Envoyer
                </button>
              </form>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="flex flex-col gap-3">
        <button
          type="button"
          aria-label="Ouvrir le chat"
          onClick={() => setLiveChatOpen(!liveChatOpen)}
          className="flex h-14 w-14 items-center justify-center rounded-full border border-white/15 bg-surface-elevated text-white shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <ChatCircleDots className="h-6 w-6" weight="fill" />
        </button>
        <a
          href="https://wa.me/22899966177"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp +228 99 96 61 77"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-zinc-950 shadow-xl transition-transform duration-300 hover:scale-105 active:scale-95"
        >
          <WhatsappLogo className="h-7 w-7" weight="fill" />
        </a>
      </div>
    </div>
  );
}
