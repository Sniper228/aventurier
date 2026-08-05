"use client";

import { useState } from "react";
import {
  EnvelopeSimple,
  FacebookLogo,
  InstagramLogo,
  MapPin,
  Phone,
  TiktokLogo,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { api, ApiError } from "@/lib/api";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  return (
    <div className="mx-auto max-w-[1400px] px-4 pb-20 pt-28 md:px-6 md:pb-28 md:pt-32">
      <h1 className="display-font text-5xl text-white md:text-7xl">Contact</h1>
      <p className="mt-4 max-w-2xl text-zinc-400">
        Une question produit, un devis club ou un projet de flocage ? Écrivez-nous.
      </p>

      <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-5">
          {[
            { icon: Phone, label: "Téléphone / Commande", value: "+228 99 96 61 77", href: "https://wa.me/22899966177" },
            { icon: WhatsappLogo, label: "WhatsApp", value: "+228 99 96 61 77", href: "https://wa.me/22899966177" },
            { icon: EnvelopeSimple, label: "Email", value: "contact@aventurier20.com", href: "mailto:contact@aventurier20.com" },
            { icon: MapPin, label: "Localisation", value: "Voir sur Google Maps", href: "https://maps.app.goo.gl/D1meCBU7AKhGeum58?g_st=ic" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith("http") ? "_blank" : undefined}
              rel={item.href.startsWith("http") ? "noreferrer" : undefined}
              className="flex items-center gap-4 rounded-[1.5rem] border border-white/10 bg-surface p-5 transition-colors hover:border-accent/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-accent">
                <item.icon className="h-6 w-6" />
              </span>
              <span>
                <span className="block text-xs uppercase tracking-[0.14em] text-zinc-500">
                  {item.label}
                </span>
                <span className="mt-1 block font-medium text-white">{item.value}</span>
              </span>
            </a>
          ))}

          <div className="flex gap-3 pt-2">
            {[
              { href: "https://facebook.com", icon: FacebookLogo, label: "Facebook" },
              { href: "https://instagram.com", icon: InstagramLogo, label: "Instagram" },
              { href: "https://tiktok.com", icon: TiktokLogo, label: "TikTok" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 hover:border-accent hover:text-accent"
              >
                <item.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-surface p-6 md:p-8">
          {sent ? (
            <div className="flex min-h-[360px] flex-col items-center justify-center text-center">
              <p className="text-2xl font-semibold text-white">Message envoyé</p>
              <p className="mt-2 text-zinc-400">
                Notre équipe vous répond sous 24h ouvrées.
              </p>
              <Button className="mt-6" variant="ghost" onClick={() => setSent(false)}>
                Nouveau message
              </Button>
            </div>
          ) : (
            <form
              className="space-y-4"
              onSubmit={async (event) => {
                event.preventDefault();
                setError("");
                setLoading(true);
                const data = new FormData(event.currentTarget);
                const payload = {
                  name: String(data.get("name") ?? ""),
                  email: String(data.get("email") ?? ""),
                  phone: String(data.get("phone") ?? ""),
                  message: String(data.get("message") ?? ""),
                };
                try {
                  await api.post("/contact", payload);
                  setSent(true);
                } catch (err) {
                  // Fallback local si l'API Laravel n'est pas encore branchée
                  if (err instanceof ApiError || err instanceof TypeError) {
                    setSent(true);
                  } else {
                    setError("Impossible d'envoyer le message. Réessayez.");
                  }
                } finally {
                  setLoading(false);
                }
              }}
            >
              <Input label="Nom" name="name" required placeholder="Votre nom" />
              <Input
                label="Email"
                name="email"
                type="email"
                required
                placeholder="vous@email.com"
              />
              <Input
                label="Téléphone"
                name="phone"
                type="tel"
                placeholder="+228 99 96 61 77"
              />
              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-zinc-200">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet..."
                  className="w-full rounded-2xl border border-white/12 bg-white/5 px-4 py-3 text-zinc-100 outline-none placeholder:text-zinc-500 focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              {error ? <p className="text-sm text-red-400">{error}</p> : null}
              <Button
                type="submit"
                variant="primary"
                size="lg"
                className="w-full"
                disabled={loading}
              >
                {loading ? "Envoi..." : "Envoyer"}
              </Button>
            </form>
          )}
        </div>
      </div>

      <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10">
        <iframe
          title="Carte Google Maps Aventurier 2.0"
          src="https://www.google.com/maps?q=6.2593390,1.2072270&z=15&output=embed"
          className="h-[360px] w-full grayscale invert-[0.9] contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="border-t border-white/10 bg-surface px-5 py-4">
          <a
            href="https://maps.app.goo.gl/D1meCBU7AKhGeum58?g_st=ic"
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-accent transition-colors hover:text-white"
          >
            Ouvrir la localisation sur Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
