<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About Laravel

Laravel is a web application framework with expressive, elegant syntax. We believe development must be an enjoyable and creative experience to be truly fulfilling. Laravel takes the pain out of development by easing common tasks used in many web projects, such as:

- [Simple, fast routing engine](https://laravel.com/docs/routing).
- [Powerful dependency injection container](https://laravel.com/docs/container).
- Multiple back-ends for [session](https://laravel.com/docs/session) and [cache](https://laravel.com/docs/cache) storage.
- Expressive, intuitive [database ORM](https://laravel.com/docs/eloquent).
- Database agnostic [schema migrations](https://laravel.com/docs/migrations).
- [Robust background job processing](https://laravel.com/docs/queues).
- [Real-time event broadcasting](https://laravel.com/docs/broadcasting).

Laravel is accessible, powerful, and provides tools required for large, robust applications.

## Learning Laravel

Laravel has the most extensive and thorough [documentation](https://laravel.com/docs) and video tutorial library of all modern web application frameworks, making it a breeze to get started with the framework.

In addition, [Laracasts](https://laracasts.com) contains thousands of video tutorials on a range of topics including Laravel, modern PHP, unit testing, and JavaScript. Boost your skills by digging into our comprehensive video library.

You can also watch bite-sized lessons with real-world projects on [Laravel Learn](https://laravel.com/learn), where you will be guided through building a Laravel application from scratch while learning PHP fundamentals.

## Agentic Development

Laravel's predictable structure and conventions make it ideal for AI coding agents like Claude Code, Cursor, and GitHub Copilot. Install [Laravel Boost](https://laravel.com/docs/ai) to supercharge your AI workflow:

```bash
composer require laravel/boost --dev

php artisan boost:install
```

Boost provides your agent 15+ tools and skills that help agents build Laravel applications while following best practices.

## Contributing

Thank you for considering contributing to the Laravel framework! The contribution guide can be found in the [Laravel documentation](https://laravel.com/docs/contributions).

## Code of Conduct

In order to ensure that the Laravel community is welcoming to all, please review and abide by the [Code of Conduct](https://laravel.com/docs/contributions#code-of-conduct).

## Security Vulnerabilities

If you discover a security vulnerability within Laravel, please send an e-mail to Taylor Otwell via [taylor@laravel.com](mailto:taylor@laravel.com). All security vulnerabilities will be promptly addressed.

## License

The Laravel framework is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).

---

## AVENTURIER 2.0 — API Backend

API REST Laravel 13 pour la boutique e-commerce sportive AVENTURIER (équipements football).

### Prérequis

- PHP 8.3+
- Composer
- MySQL 8+
- Extension PHP `pdo_mysql`

### Installation

```bash
cd backend
cp .env.example .env
composer install
php artisan key:generate
```

Configurer MySQL dans `.env` :

```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=aventurier
DB_USERNAME=root
DB_PASSWORD=votre_mot_de_passe
```

Créer la base de données, puis lancer les migrations et les seeders :

```bash
php artisan migrate
php artisan db:seed
```

Démarrer le serveur :

```bash
php artisan serve
```

L'API est disponible sur `http://localhost:8000/api`.

### Configuration Sanctum & CORS

Pour le frontend Next.js sur `localhost:3000` :

```env
FRONTEND_URL=http://localhost:3000
SANCTUM_STATEFUL_DOMAINS=localhost:3000,127.0.0.1:3000
SESSION_DOMAIN=localhost
```

Authentification par token Bearer :

```bash
# Inscription
curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@test.fr","password":"password","password_confirmation":"password"}'

# Connexion
curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"test@test.fr","password":"password"}'
```

Utiliser le token retourné : `Authorization: Bearer {token}`

### Cloudinary (upload d'images)

Configurer via variables individuelles ou URL complète :

```env
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
# ou
CLOUDINARY_CLOUD_NAME=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_FOLDER=aventurier
```

Endpoint : `POST /api/upload` (auth requise, multipart `image`).

### Comptes de démo (seeders)

| Email | Mot de passe | Rôle |
|-------|--------------|------|
| admin@aventurier.fr | password | Admin |
| client@aventurier.fr | password | Client |

Codes promo : `BIENVENUE10` (-10 %), `LIVRAISON5` (-5 €).

### Endpoints principaux

| Méthode | Route | Auth | Description |
|---------|-------|------|-------------|
| GET | `/api/health` | Non | Santé de l'API |
| POST | `/api/auth/register` | Non | Inscription |
| POST | `/api/auth/login` | Non | Connexion |
| POST | `/api/auth/logout` | Oui | Déconnexion |
| GET | `/api/auth/me` | Oui | Profil utilisateur |
| GET | `/api/categories` | Non | Liste catégories |
| GET | `/api/products` | Non | Liste produits (filtres: category_id, search, featured) |
| GET | `/api/products/{id}` | Non | Détail produit |
| GET | `/api/orders` | Oui | Mes commandes |
| POST | `/api/orders` | Oui | Créer commande |
| GET | `/api/favorites` | Oui | Mes favoris |
| POST | `/api/favorites` | Oui | Ajouter favori |
| POST | `/api/reviews` | Oui | Laisser un avis |
| POST | `/api/promo-codes/validate` | Non | Valider code promo |
| GET | `/api/blog` | Non | Articles blog |
| POST | `/api/contact` | Non | Message contact |
| POST | `/api/customization/jersey` | Non* | Demande maillot personnalisé |
| POST | `/api/upload` | Oui | Upload image Cloudinary |

\* `GET /api/customization/jersey` requiert l'authentification.

### Catégories seedées

- Maillots
- Chaussures
- Gants
- Ballons
- Accessoires

15 produits football répartis dans ces catégories.
