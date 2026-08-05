<?php

namespace Database\Seeders;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Database\Seeder;

class CategoryProductSeeder extends Seeder
{
    public function run(): void
    {
        $categories = [
            [
                'name' => 'Maillots',
                'slug' => 'maillots',
                'description' => 'Maillots de football officiels et répliques pour tous les niveaux.',
                'sort_order' => 1,
                'products' => [
                    [
                        'name' => 'Maillot Domicile Pro 2026',
                        'slug' => 'maillot-domicile-pro-2026',
                        'description' => 'Maillot respirant Dri-FIT, coupe athlétique, badge brodé.',
                        'price' => 89.99,
                        'compare_at_price' => 109.99,
                        'sku' => 'MAI-DOM-2026',
                        'stock' => 120,
                        'sizes' => ['S', 'M', 'L', 'XL', 'XXL'],
                        'colors' => ['Rouge', 'Blanc'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Maillot Extérieur Elite',
                        'slug' => 'maillot-exterieur-elite',
                        'description' => 'Maillot extérieur léger avec technologie anti-transpiration.',
                        'price' => 84.99,
                        'sku' => 'MAI-EXT-ELITE',
                        'stock' => 80,
                        'sizes' => ['S', 'M', 'L', 'XL'],
                        'colors' => ['Bleu nuit', 'Or'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Maillot Entraînement Club',
                        'slug' => 'maillot-entrainement-club',
                        'description' => 'Maillot d\'entraînement confortable pour le quotidien.',
                        'price' => 49.99,
                        'sku' => 'MAI-TRAIN-CLUB',
                        'stock' => 200,
                        'sizes' => ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
                        'colors' => ['Gris', 'Noir'],
                    ],
                ],
            ],
            [
                'name' => 'Chaussures',
                'slug' => 'chaussures',
                'description' => 'Crampons et chaussures de football pour gazon naturel et synthétique.',
                'sort_order' => 2,
                'products' => [
                    [
                        'name' => 'Crampons Speed Elite FG',
                        'slug' => 'crampons-speed-elite-fg',
                        'description' => 'Crampons firm ground ultra-légers pour vitesse maximale.',
                        'price' => 159.99,
                        'compare_at_price' => 189.99,
                        'sku' => 'CHAU-SPD-FG',
                        'stock' => 45,
                        'sizes' => ['40', '41', '42', '43', '44', '45'],
                        'colors' => ['Noir/Vert', 'Blanc/Or'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Crampons Control Pro AG',
                        'slug' => 'crampons-control-pro-ag',
                        'description' => 'Semelle AG pour terrains synthétiques, excellente accroche.',
                        'price' => 139.99,
                        'sku' => 'CHAU-CTL-AG',
                        'stock' => 60,
                        'sizes' => ['39', '40', '41', '42', '43', '44'],
                        'colors' => ['Bleu', 'Orange'],
                    ],
                    [
                        'name' => 'Chaussures Futsal Indoor',
                        'slug' => 'chaussures-futsal-indoor',
                        'description' => 'Semelle non marquante pour salle et futsal.',
                        'price' => 79.99,
                        'sku' => 'CHAU-FUT-IN',
                        'stock' => 90,
                        'sizes' => ['39', '40', '41', '42', '43', '44', '45'],
                        'colors' => ['Noir', 'Rouge'],
                    ],
                ],
            ],
            [
                'name' => 'Gants',
                'slug' => 'gants',
                'description' => 'Gants de gardien professionnels avec grip renforcé.',
                'sort_order' => 3,
                'products' => [
                    [
                        'name' => 'Gants Gardien Pro Contact',
                        'slug' => 'gants-gardien-pro-contact',
                        'description' => 'Mousse contact 4mm, protection doigts, bandeau élastique.',
                        'price' => 69.99,
                        'sku' => 'GANT-PRO-CT',
                        'stock' => 55,
                        'sizes' => ['7', '8', '9', '10', '11'],
                        'colors' => ['Noir/Jaune', 'Bleu/Blanc'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Gants Gardien Matchday',
                        'slug' => 'gants-gardien-matchday',
                        'description' => 'Gants match avec latex allemand haute performance.',
                        'price' => 54.99,
                        'sku' => 'GANT-MATCH',
                        'stock' => 70,
                        'sizes' => ['7', '8', '9', '10'],
                        'colors' => ['Vert', 'Orange'],
                    ],
                ],
            ],
            [
                'name' => 'Ballons',
                'slug' => 'ballons',
                'description' => 'Ballons homologués match et entraînement.',
                'sort_order' => 4,
                'products' => [
                    [
                        'name' => 'Ballon Match FIFA Quality Pro',
                        'slug' => 'ballon-match-fifa-quality-pro',
                        'description' => 'Ballon officiel taille 5, 32 panneaux thermocollés.',
                        'price' => 119.99,
                        'compare_at_price' => 139.99,
                        'sku' => 'BALL-MATCH-FQP',
                        'stock' => 100,
                        'sizes' => ['5'],
                        'colors' => ['Blanc/Noir'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Ballon Entraînement Club',
                        'slug' => 'ballon-entrainement-club',
                        'description' => 'Ballon résistant pour séances quotidiennes.',
                        'price' => 29.99,
                        'sku' => 'BALL-TRAIN-CL',
                        'stock' => 250,
                        'sizes' => ['4', '5'],
                        'colors' => ['Blanc', 'Jaune/Noir'],
                    ],
                    [
                        'name' => 'Ballon Futsal Sala',
                        'slug' => 'ballon-futsal-sala',
                        'description' => 'Ballon futsal taille 4, rebond réduit.',
                        'price' => 39.99,
                        'sku' => 'BALL-FUT-SALA',
                        'stock' => 80,
                        'sizes' => ['4'],
                        'colors' => ['Blanc/Rouge'],
                    ],
                ],
            ],
            [
                'name' => 'Accessoires',
                'slug' => 'accessoires',
                'description' => 'Équipements complémentaires pour joueurs et clubs.',
                'sort_order' => 5,
                'products' => [
                    [
                        'name' => 'Sac de Sport Pro 65L',
                        'slug' => 'sac-de-sport-pro-65l',
                        'description' => 'Sac spacieux avec compartiment chaussures et bandoulière.',
                        'price' => 59.99,
                        'sku' => 'ACC-SAC-65L',
                        'stock' => 65,
                        'sizes' => ['Unique'],
                        'colors' => ['Noir', 'Navy'],
                    ],
                    [
                        'name' => 'Protège-Tibias Carbon Lite',
                        'slug' => 'protege-tibias-carbon-lite',
                        'description' => 'Coque légère avec mousse EVA, sans glissement.',
                        'price' => 34.99,
                        'sku' => 'ACC-SHIN-CARB',
                        'stock' => 150,
                        'sizes' => ['S', 'M', 'L'],
                        'colors' => ['Noir', 'Blanc'],
                        'is_featured' => true,
                    ],
                    [
                        'name' => 'Chaussettes Compression Match',
                        'slug' => 'chaussettes-compression-match',
                        'description' => 'Chaussettes mi-hautes avec bandes de compression.',
                        'price' => 14.99,
                        'sku' => 'ACC-SOCK-CMP',
                        'stock' => 300,
                        'sizes' => ['36-39', '40-43', '44-47'],
                        'colors' => ['Blanc', 'Noir', 'Rouge'],
                    ],
                    [
                        'name' => 'Gourde Isotherme 750ml',
                        'slug' => 'gourde-isotherme-750ml',
                        'description' => 'Gourde sport isotherme, sans BPA.',
                        'price' => 19.99,
                        'sku' => 'ACC-BOTTLE-750',
                        'stock' => 180,
                        'sizes' => ['750ml'],
                        'colors' => ['Transparent', 'Noir'],
                    ],
                ],
            ],
        ];

        foreach ($categories as $categoryData) {
            $products = $categoryData['products'];
            unset($categoryData['products']);

            $category = Category::create($categoryData);

            foreach ($products as $productData) {
                Product::create([
                    ...$productData,
                    'category_id' => $category->id,
                    'is_active' => true,
                ]);
            }
        }
    }
}
