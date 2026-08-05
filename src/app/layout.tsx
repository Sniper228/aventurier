import type { Metadata } from "next";
import { Bebas_Neue, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/layout/SiteShell";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const bebas = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://aventurier20.com",
  ),
  title: {
    default: "Aventurier 2.0 | STEP BY STEP",
    template: "%s | Aventurier 2.0",
  },
  description:
    "Équipements sportifs football premium, personnalisation, flocage professionnel, vente en gros et au détail. STEP BY STEP.",
  keywords: [
    "équipement football",
    "maillots personnalisés",
    "flocage",
    "crampons",
    "Aventurier 2.0",
    "vente gros clubs",
  ],
  openGraph: {
    title: "Aventurier 2.0 | STEP BY STEP",
    description:
      "L'équipement des champions commence ici. Boutique, personnalisation et flocage pro.",
    type: "website",
    locale: "fr_FR",
    images: ["/images/hero-football-action.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aventurier 2.0 | STEP BY STEP",
    description: "L'équipement des champions commence ici.",
    images: ["/images/hero-football-action.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={`${jakarta.variable} ${bebas.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
