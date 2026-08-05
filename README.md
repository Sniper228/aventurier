# AVENTURIER 2.0

Site e-commerce premium d'équipements sportifs football.

**Devise :** STEP BY STEP

## Stack

| Couche | Technologie | Déploiement |
|--------|-------------|-------------|
| Frontend | Next.js 16 (App Router), TypeScript, Tailwind CSS v4, Motion | **Vercel** (racine du dépôt) |
| Backend | Laravel 13 API + Sanctum | Serveur séparé (`/backend`) |
| Base | MySQL | Serveur API |
| Images | Cloudinary (via API) | Cloudinary |

## Structure

```
Aventurier/
├── src/                 # App Next.js (App Router)
├── public/              # Assets statiques (vidéo, logo, flocages)
├── backend/             # API Laravel (hors Vercel)
├── fourniture/          # Médias source (hors déploiement)
├── package.json         # Scripts Next.js à la racine
├── vercel.json          # Config Vercel
└── next.config.ts
```

> **Note :** l'ancien dossier `frontend/` était un sous-module Git. C'est la cause du 404 Vercel (déploiement sans fichiers Next.js). L'app est maintenant à la racine.
## Développement local

```bash
npm install
cp .env.example .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

### API Laravel (optionnel en local)

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
php artisan migrate --seed
php artisan serve
```

Configurer dans `.env.local` :

```
NEXT_PUBLIC_API_URL=http://localhost:8000/api
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_WHATSAPP=22899966177
```

## Déploiement Vercel (correction 404)

Le projet Next.js est **à la racine** du dépôt. Vercel le détecte automatiquement.

1. Importer le dépôt GitHub sur [vercel.com](https://vercel.com)
2. **Root Directory** : laisser vide / `.` (racine du dépôt)
3. Framework Preset : **Next.js** (détection automatique)
4. Build Command : `npm run build`
5. Output : géré automatiquement par Vercel
6. Variables d'environnement :
   - `NEXT_PUBLIC_API_URL` = URL de votre API Laravel (`https://.../api`)
   - `NEXT_PUBLIC_SITE_URL` = URL Vercel (`https://votre-projet.vercel.app`)
   - `NEXT_PUBLIC_WHATSAPP` = `22899966177`

Puis **Redeploy**.

Le dossier `backend/` est ignoré par Vercel (voir `.vercelignore`).

## Scripts

```bash
npm run dev      # développement
npm run build    # build production
npm run start    # serveur production
npm run lint     # ESLint
```

## Contact / WhatsApp

- Téléphone & commandes : **+228 99 96 61 77**
- WhatsApp : [wa.me/22899966177](https://wa.me/22899966177)
- Localisation : [Google Maps](https://maps.app.goo.gl/D1meCBU7AKhGeum58?g_st=ic)
