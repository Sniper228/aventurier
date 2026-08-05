export type ProductCategory =
  | "maillots"
  | "chaussures"
  | "gants"
  | "ballons"
  | "accessoires";

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  subcategory: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviewCount: number;
  stock: number;
  colors: string[];
  sizes: string[];
  images: string[];
  description: string;
  wholesale: boolean;
  retail: boolean;
  featured?: boolean;
  tags: string[];
};

export const categories = [
  {
    slug: "maillots",
    name: "Maillots",
    image: "/images/product-jersey.png",
    subcategories: [
      "Maillots de clubs",
      "Maillots de sélections nationales",
      "Maillots vintage",
      "Maillots rétro",
      "Maillots d'entraînement",
      "Maillots de gardien",
    ],
  },
  {
    slug: "chaussures",
    name: "Chaussures",
    image: "/images/product-boots.png",
    subcategories: [
      "Crampons FG",
      "Crampons AG",
      "Crampons TF",
      "Crampons IC",
      "Chaussures de running",
      "Chaussures lifestyle",
    ],
  },
  {
    slug: "gants",
    name: "Gants",
    image: "/images/product-jersey.png",
    subcategories: [
      "Gants professionnels",
      "Gants juniors",
      "Gants personnalisés",
    ],
  },
  {
    slug: "ballons",
    name: "Ballons",
    image: "/images/hero-football-action.png",
    subcategories: ["Compétition", "Entraînement", "Mini ballons"],
  },
  {
    slug: "accessoires",
    name: "Accessoires",
    image: "/images/customization-workshop.png",
    subcategories: [
      "Protège-tibias",
      "Bas",
      "Chaussettes",
      "Sacs de sport",
      "Casquettes",
      "Bouteilles",
      "Sifflets",
      "Chronomètres",
      "Bandes",
      "Bracelets",
      "Filets",
      "Pompes",
    ],
  },
] as const;

export const products: Product[] = [
  {
    id: "p1",
    slug: "maillot-pro-voltage",
    name: "Maillot Pro Voltage",
    category: "maillots",
    subcategory: "Maillots de clubs",
    price: 89.9,
    compareAt: 109.9,
    rating: 4.8,
    reviewCount: 124,
    stock: 42,
    colors: ["Noir", "Bleu électrique", "Rouge"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/product-jersey.png", "/images/realisation-flocage.png"],
    description:
      "Maillot match haute performance, tissu respirant et coupe athlétique. Prêt pour flocage professionnel.",
    wholesale: true,
    retail: true,
    featured: true,
    tags: ["match", "pro", "flocage"],
  },
  {
    id: "p2",
    slug: "crampons-apex-fg",
    name: "Crampons Apex FG",
    category: "chaussures",
    subcategory: "Crampons FG",
    price: 149.0,
    rating: 4.7,
    reviewCount: 89,
    stock: 28,
    colors: ["Noir / Or", "Bleu électrique"],
    sizes: ["39", "40", "41", "42", "43", "44", "45"],
    images: ["/images/product-boots.png"],
    description:
      "Crampons FG pour pelouse naturelle. Plaque légère, maintien précis et traction explosive.",
    wholesale: true,
    retail: true,
    featured: true,
    tags: ["fg", "vitesse", "pro"],
  },
  {
    id: "p3",
    slug: "maillot-selection-nation",
    name: "Maillot Sélection Nation",
    category: "maillots",
    subcategory: "Maillots de sélections nationales",
    price: 99.0,
    rating: 4.9,
    reviewCount: 210,
    stock: 35,
    colors: ["Bleu", "Blanc", "Rouge"],
    sizes: ["XS", "S", "M", "L", "XL"],
    images: ["/images/product-jersey.png", "/images/realisation-equipe.png"],
    description:
      "Coupe internationale, finitions premium et options d'écussons / championnats.",
    wholesale: true,
    retail: true,
    featured: true,
    tags: ["sélection", "international"],
  },
  {
    id: "p4",
    slug: "maillot-vintage-heritage",
    name: "Maillot Vintage Heritage",
    category: "maillots",
    subcategory: "Maillots vintage",
    price: 79.0,
    rating: 4.6,
    reviewCount: 67,
    stock: 18,
    colors: ["Bordeaux", "Noir"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/product-jersey.png"],
    description:
      "Inspiration rétro, tissu confort et détails brodés pour un look collector.",
    wholesale: false,
    retail: true,
    tags: ["vintage", "collector"],
  },
  {
    id: "p5",
    slug: "maillot-entrainement-pulse",
    name: "Maillot Entraînement Pulse",
    category: "maillots",
    subcategory: "Maillots d'entraînement",
    price: 54.9,
    rating: 4.5,
    reviewCount: 53,
    stock: 80,
    colors: ["Noir", "Gris"],
    sizes: ["S", "M", "L", "XL", "XXL"],
    images: ["/images/product-jersey.png"],
    description:
      "Idéal pour les séances intensives. Séchage rapide et liberté de mouvement.",
    wholesale: true,
    retail: true,
    tags: ["training"],
  },
  {
    id: "p6",
    slug: "maillot-gardien-shield",
    name: "Maillot Gardien Shield",
    category: "maillots",
    subcategory: "Maillots de gardien",
    price: 94.0,
    rating: 4.7,
    reviewCount: 41,
    stock: 22,
    colors: ["Noir", "Jaune fluo"],
    sizes: ["S", "M", "L", "XL"],
    images: ["/images/product-jersey.png"],
    description:
      "Coupe gardien avec zones rembourrées discrètes et contraste haute visibilité.",
    wholesale: true,
    retail: true,
    tags: ["gardien"],
  },
  {
    id: "p7",
    slug: "crampons-trail-ag",
    name: "Crampons Trail AG",
    category: "chaussures",
    subcategory: "Crampons AG",
    price: 129.0,
    rating: 4.4,
    reviewCount: 38,
    stock: 31,
    colors: ["Noir", "Bleu"],
    sizes: ["40", "41", "42", "43", "44"],
    images: ["/images/product-boots.png"],
    description:
      "Semelle AG polyvalente pour terrains artificiels. Stabilité et grip durable.",
    wholesale: true,
    retail: true,
    tags: ["ag"],
  },
  {
    id: "p8",
    slug: "crampons-street-tf",
    name: "Crampons Street TF",
    category: "chaussures",
    subcategory: "Crampons TF",
    price: 99.0,
    rating: 4.3,
    reviewCount: 29,
    stock: 44,
    colors: ["Noir / Rouge"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: ["/images/product-boots.png"],
    description:
      "Turf shoes pour synthétique. Confort quotidien et accroche multi-surfaces.",
    wholesale: true,
    retail: true,
    tags: ["tf"],
  },
  {
    id: "p9",
    slug: "futsal-ic-motion",
    name: "Futsal IC Motion",
    category: "chaussures",
    subcategory: "Crampons IC",
    price: 89.0,
    rating: 4.6,
    reviewCount: 47,
    stock: 36,
    colors: ["Blanc", "Noir"],
    sizes: ["39", "40", "41", "42", "43", "44"],
    images: ["/images/product-boots.png"],
    description:
      "Semelle indoor pour futsal. Contrôle de balle et pivots fluides.",
    wholesale: false,
    retail: true,
    tags: ["ic", "futsal"],
  },
  {
    id: "p10",
    slug: "gants-pro-grip",
    name: "Gants Pro Grip",
    category: "gants",
    subcategory: "Gants professionnels",
    price: 69.0,
    rating: 4.8,
    reviewCount: 76,
    stock: 50,
    colors: ["Noir", "Bleu"],
    sizes: ["7", "8", "9", "10", "11"],
    images: ["/images/product-jersey.png"],
    description:
      "Latex pro haute adhérence, poignet sécurisé et coupe négative.",
    wholesale: true,
    retail: true,
    featured: true,
    tags: ["gardien", "pro"],
  },
  {
    id: "p11",
    slug: "gants-junior-start",
    name: "Gants Junior Start",
    category: "gants",
    subcategory: "Gants juniors",
    price: 34.9,
    rating: 4.5,
    reviewCount: 33,
    stock: 60,
    colors: ["Bleu", "Rouge"],
    sizes: ["4", "5", "6", "7"],
    images: ["/images/product-jersey.png"],
    description:
      "Conçus pour les jeunes gardiens. Confort, protection et prise en main facile.",
    wholesale: true,
    retail: true,
    tags: ["junior"],
  },
  {
    id: "p12",
    slug: "ballon-competition-elite",
    name: "Ballon Compétition Elite",
    category: "ballons",
    subcategory: "Compétition",
    price: 44.9,
    rating: 4.7,
    reviewCount: 98,
    stock: 70,
    colors: ["Blanc / Noir"],
    sizes: ["5"],
    images: ["/images/hero-football-action.png"],
    description:
      "Ballon match certifié, trajectoire stable et toucher premium.",
    wholesale: true,
    retail: true,
    featured: true,
    tags: ["match"],
  },
  {
    id: "p13",
    slug: "ballon-entrainement-daily",
    name: "Ballon Entraînement Daily",
    category: "ballons",
    subcategory: "Entraînement",
    price: 24.9,
    rating: 4.4,
    reviewCount: 55,
    stock: 120,
    colors: ["Blanc", "Jaune"],
    sizes: ["4", "5"],
    images: ["/images/hero-football-action.png"],
    description:
      "Résistant aux sessions intensives. Idéal clubs et académies.",
    wholesale: true,
    retail: true,
    tags: ["training", "club"],
  },
  {
    id: "p14",
    slug: "protege-tibias-carbon",
    name: "Protège-tibias Carbon Flex",
    category: "accessoires",
    subcategory: "Protège-tibias",
    price: 29.9,
    rating: 4.6,
    reviewCount: 62,
    stock: 90,
    colors: ["Noir", "Blanc"],
    sizes: ["S", "M", "L"],
    images: ["/images/customization-workshop.png"],
    description:
      "Protection légère et ergonomique. Maintien sûr sans gêner la course.",
    wholesale: true,
    retail: true,
    tags: ["protection"],
  },
  {
    id: "p15",
    slug: "sac-sport-voyage",
    name: "Sac Sport Voyage",
    category: "accessoires",
    subcategory: "Sacs de sport",
    price: 59.0,
    rating: 4.5,
    reviewCount: 40,
    stock: 48,
    colors: ["Noir", "Bleu électrique"],
    sizes: ["Unique"],
    images: ["/images/customization-workshop.png"],
    description:
      "Grand volume, compartiment chaussures et finitions premium pour déplacements d'équipe.",
    wholesale: true,
    retail: true,
    tags: ["équipe"],
  },
  {
    id: "p16",
    slug: "chaussettes-match-pro",
    name: "Chaussettes Match Pro",
    category: "accessoires",
    subcategory: "Chaussettes",
    price: 14.9,
    rating: 4.3,
    reviewCount: 81,
    stock: 200,
    colors: ["Noir", "Blanc", "Rouge", "Bleu"],
    sizes: ["35-38", "39-42", "43-46"],
    images: ["/images/product-jersey.png"],
    description:
      "Compression légère, zones anti-frottement et look match officiel.",
    wholesale: true,
    retail: true,
    tags: ["bas"],
  },
];

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, limit);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.featured);
}
