export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  content: string[];
};

export const blogPosts: BlogPost[] = [
  {
    slug: "choisir-ses-crampons",
    title: "Comment choisir ses crampons selon le terrain",
    excerpt:
      "FG, AG, TF ou IC : le guide clair pour jouer avec le bon grip et éviter les blessures.",
    category: "Conseils football",
    date: "2026-07-12",
    readTime: "6 min",
    image: "/images/product-boots.png",
    content: [
      "Le choix des crampons dépend d’abord de la surface. Sur pelouse naturelle sèche, les FG offrent traction et stabilité.",
      "Les AG conviennent aux terrains synthétiques modernes. Les TF sont pensés pour le turf, et les IC pour le futsal indoor.",
      "Chez Aventurier 2.0, nous conseillons aussi selon votre poste, votre foulée et la fréquence d’entraînement.",
    ],
  },
  {
    slug: "entretenir-son-maillot",
    title: "Entretenir son maillot pour garder le rendu pro",
    excerpt:
      "Lavage, séchage et flocage : les bons gestes pour préserver couleurs et impressions.",
    category: "Entretien",
    date: "2026-06-28",
    readTime: "5 min",
    image: "/images/product-jersey.png",
    content: [
      "Retournez toujours le maillot avant lavage. Utilisez un programme délicat à basse température.",
      "Évitez le sèche-linge pour préserver le flocage et les impressions DTF.",
      "Rangez à plat ou sur cintre large pour garder la coupe athlétique intacte.",
    ],
  },
  {
    slug: "personnaliser-une-equipe",
    title: "Comment personnaliser une équipe de A à Z",
    excerpt:
      "Du brief au livraison : étapes, délais et options de flocage pour clubs et académies.",
    category: "Personnalisation",
    date: "2026-06-10",
    readTime: "8 min",
    image: "/images/customization-workshop.png",
    content: [
      "Commencez par définir identité visuelle, budget et volume. Gros ou détail, le process reste guidé.",
      "Choisissez la technique : vinyle, DTF, sublimation ou broderie selon le textile et le rendu souhaité.",
      "Nous validons un BAT numérique, puis produisons avec contrôle qualité avant expédition.",
    ],
  },
  {
    slug: "actualites-saison",
    title: "Actualités saison : tendances kits et performances",
    excerpt:
      "Coupes slim, contrastes électriques et flocages haute précision dominent la saison.",
    category: "Actualités",
    date: "2026-05-22",
    readTime: "4 min",
    image: "/images/realisation-equipe.png",
    content: [
      "Les clubs misent sur des kits sombres avec accents bleus et touches dorées discrètes.",
      "La personnalisation textile s’étend aux staffs, académies et tenues d’entreprise.",
      "Aventurier 2.0 accompagne ces projets avec un atelier intégré et un suivi dédié.",
    ],
  },
];

export function getPostBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
