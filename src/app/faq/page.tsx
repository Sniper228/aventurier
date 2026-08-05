"use client";

import { useState } from "react";
import { CaretDown } from "@phosphor-icons/react";
import { faqItems } from "@/lib/data/faq";
import { cn } from "@/lib/utils";

export default function FaqPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="mx-auto max-w-3xl px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-6xl">FAQ</h1>
      <p className="mt-4 text-zinc-400">
        Réponses rapides sur la boutique, le flocage et les livraisons.
      </p>

      <div className="mt-10 space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = open === index;
          return (
            <div
              key={item.question}
              className="rounded-[1.25rem] border border-white/10 bg-surface"
            >
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : index)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
              >
                <span className="font-medium text-white">{item.question}</span>
                <CaretDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-accent transition-transform duration-300",
                    isOpen && "rotate-180",
                  )}
                />
              </button>
              {isOpen ? (
                <p className="border-t border-white/10 px-5 py-4 text-sm leading-relaxed text-zinc-400">
                  {item.answer}
                </p>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
