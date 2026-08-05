export type Realisation = {
  id: string;
  title: string;
  type: "Équipe" | "Académie" | "Entreprise" | "Flocage" | "Uniforme";
  before?: string;
  after: string;
  description: string;
};

export const realisations: Realisation[] = [
  {
    id: "r1",
    title: "Flocage Pro #10",
    type: "Flocage",
    before: "/images/product-jersey.png",
    after: "/images/realisation-flocage.png",
    description:
      "Nom, numéro et écusson championnat en flocage haute précision sur maillot match.",
  },
  {
    id: "r2",
    title: "Académie Velocity U17",
    type: "Académie",
    after: "/images/realisation-equipe.png",
    description:
      "Kit complet personnalisé pour 28 joueurs : maillots, shorts, chaussettes et sac staff.",
  },
  {
    id: "r3",
    title: "Club Municipal Atlas",
    type: "Équipe",
    after: "/images/realisation-equipe.png",
    description:
      "Identité visuelle unifiée, logos sponsors et livraison express avant match amical.",
  },
  {
    id: "r4",
    title: "Tenues corporate SportLife",
    type: "Entreprise",
    after: "/images/customization-workshop.png",
    description:
      "Polos et sweats brodés pour événements internes et activations terrain.",
  },
  {
    id: "r5",
    title: "Uniformes association Horizon",
    type: "Uniforme",
    after: "/images/product-jersey.png",
    description:
      "Séries mixtes adultes / juniors avec marquage association et numérotation.",
  },
  {
    id: "r6",
    title: "Atelier DTF + Vinyle",
    type: "Flocage",
    before: "/images/product-jersey.png",
    after: "/images/customization-workshop.png",
    description:
      "Combinaison de techniques pour un rendu net, durable et prêt compétition.",
  },
];
