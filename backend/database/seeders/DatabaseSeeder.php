<?php

namespace Database\Seeders;

use App\Models\Address;
use App\Models\BlogPost;
use App\Models\PromoCode;
use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $admin = User::create([
            'name' => 'Admin Aventurier',
            'email' => 'admin@aventurier.fr',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        User::create([
            'name' => 'Client Demo',
            'email' => 'client@aventurier.fr',
            'password' => Hash::make('password'),
            'email_verified_at' => now(),
        ]);

        Address::create([
            'user_id' => $admin->id,
            'label' => 'Domicile',
            'first_name' => 'Admin',
            'last_name' => 'Aventurier',
            'street' => '12 Rue du Stade',
            'city' => 'Paris',
            'postal_code' => '75012',
            'country' => 'FR',
            'phone' => '+33601020304',
            'is_default' => true,
        ]);

        PromoCode::create([
            'code' => 'BIENVENUE10',
            'type' => 'percentage',
            'value' => 10,
            'min_order_amount' => 50,
            'max_uses' => 100,
            'starts_at' => now()->subDay(),
            'expires_at' => now()->addMonths(3),
            'is_active' => true,
        ]);

        PromoCode::create([
            'code' => 'LIVRAISON5',
            'type' => 'fixed',
            'value' => 5,
            'min_order_amount' => 30,
            'max_uses' => null,
            'starts_at' => now()->subDay(),
            'expires_at' => now()->addYear(),
            'is_active' => true,
        ]);

        BlogPost::create([
            'title' => 'Comment choisir ses crampons de football',
            'slug' => 'comment-choisir-crampons-football',
            'excerpt' => 'Guide complet pour sélectionner les crampons adaptés à votre terrain et votre style de jeu.',
            'content' => "Le choix des crampons est essentiel pour la performance et la sécurité sur le terrain.\n\nPour le gazon naturel (FG), privilégiez des crampons classiques. Sur synthétique (AG), optez pour des crampons plus courts et nombreux. En salle (IN), des semelles non marquantes sont indispensables.\n\nPensez aussi à votre position : les attaquants préfèrent la légèreté, les défenseurs la stabilité.",
            'author_id' => $admin->id,
            'is_published' => true,
            'published_at' => now()->subDays(2),
        ]);

        BlogPost::create([
            'title' => 'Entretien de vos gants de gardien',
            'slug' => 'entretien-gants-gardien',
            'excerpt' => 'Prolongez la durée de vie de vos gants avec ces conseils d\'entretien simples.',
            'content' => "Après chaque séance, rincez vos gants à l'eau tiède sans produit agressif.\n\nSéchez-les à l'ombre, jamais sur un radiateur. Rangez-les palms face à face pour préserver le latex.\n\nUn entretien régulier améliore la prise de balle et la longévité du produit.",
            'author_id' => $admin->id,
            'is_published' => true,
            'published_at' => now()->subDay(),
        ]);

        $this->call(CategoryProductSeeder::class);
    }
}
