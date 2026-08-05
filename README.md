# Aventurier 2.0

Site e-commerce premium d'équipements sportifs football.

**Devise :** STEP BY STEP

## Stack

| Couche | Technologie |
|--------|-------------|
| Frontend | Next.js 16, TypeScript, Tailwind CSS v4, Motion |
| Backend | Laravel 13 API, Sanctum |
| Base | MySQL |
| Images | Cloudinary (service HTTP dédié) |

## Structure

```
Aventurier/
├── frontend/     # App Next.js (UI + e-commerce)
├── backend/      # API Laravel + Sanctum
└── README.md
```

## Démarrage frontend

```bash
cd frontend
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Démarrage backend

```bash
cd backend
cp .env.example .env
# Configurer MySQL + FRONTEND_URL=http://localhost:3000
composer install
php artisan key:generate
php artisan migrate
php artisan db:seed
php artisan serve
```

API : [http://localhost:8000/api](http://localhost:8000/api)

Comptes démo (après seed) :
- `admin@aventurier.fr` / `password`
- `client@aventurier.fr` / `password`

Codes promo : `BIENVENUE10`, `LIVRAISON5` (API) · `STEP10` (frontend panier)

## Pages frontend

- Accueil, Boutique (+ fiche produit)
- Personnalisation (configurateur maillot temps réel)
- Nos réalisations, Services, À propos
- Blog, Contact (formulaire + Maps)
- Panier, Checkout, Favoris, Comparaison
- Connexion, Inscription, Compte client
- FAQ, recherche instantanée, chat + WhatsApp flottants

## Identité visuelle

- Fond sombre OLED
- Accents rouge (`#e10600`), bleu électrique (`#00a3ff`), doré (`#c9a227`)
- Typo display : Bebas Neue · Corps : Plus Jakarta Sans
- Glassmorphism léger sur navigation, Motion pour reveals

## SEO & perf

- Metadata Open Graph / Twitter
- `next/image` + formats AVIF/WebP
- Lazy loading images hors hero
- `prefers-reduced-motion` respecté

## Prochaines étapes production

1. Brancher le frontend sur l'API Laravel (fetch produits, auth Sanctum)
2. Paiement Stripe / Cashier
3. Upload Cloudinary réel (variables `.env`)
4. Notifications email / WhatsApp Business
