"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";

const colors = [
  { name: "Noir", value: "#111114" },
  { name: "Bleu électrique", value: "#00a3ff" },
  { name: "Rouge", value: "#e10600" },
  { name: "Blanc", value: "#f4f4f5" },
  { name: "Doré", value: "#c9a227" },
];

const patterns = ["Uni", "Rayures", "Dégradé", "Panels"];
const collars = ["Col V", "Col rond", "Col polo"];
const sleeves = ["Courtes", "Longues"];

export function JerseyBuilder() {
  const [baseColor, setBaseColor] = useState(colors[0]);
  const [accentColor, setAccentColor] = useState(colors[1]);
  const [pattern, setPattern] = useState(patterns[1]);
  const [collar, setCollar] = useState(collars[0]);
  const [sleeve, setSleeve] = useState(sleeves[0]);
  const [name, setName] = useState("AVENTURIER");
  const [number, setNumber] = useState("10");
  const [sponsor, setSponsor] = useState("STEP BY STEP");
  const [logoText, setLogoText] = useState("A2");

  const gradient = useMemo(() => {
    if (pattern === "Dégradé") {
      return `linear-gradient(160deg, ${baseColor.value}, ${accentColor.value})`;
    }
    if (pattern === "Rayures") {
      return `repeating-linear-gradient(90deg, ${baseColor.value} 0 18px, ${accentColor.value} 18px 28px)`;
    }
    if (pattern === "Panels") {
      return `linear-gradient(120deg, ${baseColor.value} 55%, ${accentColor.value} 55%)`;
    }
    return baseColor.value;
  }, [pattern, baseColor, accentColor]);

  return (
    <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="rounded-[2rem] border border-white/10 bg-surface p-4 md:p-8">
        <div className="relative mx-auto flex aspect-[4/5] max-w-md items-center justify-center">
          <div
            className="relative h-[88%] w-[72%] rounded-[2.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.45)] transition-all duration-500"
            style={{ background: gradient }}
          >
            <div
              className="absolute left-1/2 top-0 h-8 w-28 -translate-x-1/2 rounded-b-3xl border border-white/10"
              style={{
                background:
                  collar === "Col polo" ? accentColor.value : "rgba(0,0,0,0.25)",
              }}
            />
            {sleeve === "Longues" ? (
              <>
                <div
                  className="absolute -left-10 top-16 h-40 w-14 -rotate-12 rounded-full"
                  style={{ background: accentColor.value }}
                />
                <div
                  className="absolute -right-10 top-16 h-40 w-14 rotate-12 rounded-full"
                  style={{ background: accentColor.value }}
                />
              </>
            ) : (
              <>
                <div
                  className="absolute -left-6 top-16 h-16 w-10 -rotate-12 rounded-full"
                  style={{ background: accentColor.value }}
                />
                <div
                  className="absolute -right-6 top-16 h-16 w-10 rotate-12 rounded-full"
                  style={{ background: accentColor.value }}
                />
              </>
            )}

            <div className="absolute inset-x-0 top-16 flex flex-col items-center px-4 text-center">
              <span
                className="rounded-full px-3 py-1 text-xs font-bold"
                style={{
                  background: "rgba(0,0,0,0.35)",
                  color: baseColor.name === "Blanc" ? "#111" : "#fff",
                }}
              >
                {logoText}
              </span>
              <p
                className="mt-6 text-sm font-semibold tracking-[0.2em]"
                style={{ color: baseColor.name === "Blanc" ? "#111" : "#fff" }}
              >
                {sponsor}
              </p>
              <p
                className="mt-10 display-font text-7xl leading-none"
                style={{ color: baseColor.name === "Blanc" ? "#111" : "#fff" }}
              >
                {number}
              </p>
              <p
                className="mt-2 text-lg font-bold tracking-[0.25em]"
                style={{ color: baseColor.name === "Blanc" ? "#111" : "#fff" }}
              >
                {name}
              </p>
            </div>
          </div>
        </div>
        <p className="mt-4 text-center text-sm text-zinc-400">
          Aperçu en temps réel - {pattern} / {collar} / manches {sleeve.toLowerCase()}
        </p>
      </div>

      <div className="space-y-6 rounded-[2rem] border border-white/10 bg-surface p-6">
        <div>
          <p className="text-sm font-medium">Couleur principale</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-label={color.name}
                onClick={() => setBaseColor(color)}
                className="h-10 w-10 rounded-full border border-white/20"
                style={{
                  background: color.value,
                  outline:
                    baseColor.name === color.name
                      ? "2px solid #00a3ff"
                      : "none",
                  outlineOffset: "2px",
                }}
              />
            ))}
          </div>
        </div>

        <div>
          <p className="text-sm font-medium">Couleur accent</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {colors.map((color) => (
              <button
                key={color.name}
                type="button"
                aria-label={color.name}
                onClick={() => setAccentColor(color)}
                className="h-10 w-10 rounded-full border border-white/20"
                style={{
                  background: color.value,
                  outline:
                    accentColor.name === color.name
                      ? "2px solid #c9a227"
                      : "none",
                  outlineOffset: "2px",
                }}
              />
            ))}
          </div>
        </div>

        {[
          { label: "Motif", options: patterns, value: pattern, set: setPattern },
          { label: "Col", options: collars, value: collar, set: setCollar },
          { label: "Manches", options: sleeves, value: sleeve, set: setSleeve },
        ].map((group) => (
          <div key={group.label}>
            <p className="text-sm font-medium">{group.label}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => group.set(option)}
                  className={`rounded-full px-4 py-2 text-sm ${
                    group.value === option
                      ? "bg-accent text-zinc-950"
                      : "bg-white/5 text-zinc-300"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}

        <div className="grid gap-4 sm:grid-cols-2">
          <label className="block text-sm">
            Nom
            <input
              value={name}
              onChange={(event) => setName(event.target.value.toUpperCase())}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-3 py-2 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Numéro
            <input
              value={number}
              onChange={(event) => setNumber(event.target.value.slice(0, 2))}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-3 py-2 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Sponsor
            <input
              value={sponsor}
              onChange={(event) => setSponsor(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-3 py-2 outline-none focus:border-accent"
            />
          </label>
          <label className="block text-sm">
            Logo
            <input
              value={logoText}
              onChange={(event) => setLogoText(event.target.value.slice(0, 4))}
              className="mt-2 w-full rounded-2xl border border-white/12 bg-white/5 px-3 py-2 outline-none focus:border-accent"
            />
          </label>
        </div>

        <Button href="/contact" variant="primary" size="lg" className="w-full">
          Demander un devis maillot
        </Button>
      </div>
    </div>
  );
}
