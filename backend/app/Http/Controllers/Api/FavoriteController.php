<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreFavoriteRequest;
use App\Models\Favorite;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class FavoriteController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $favorites = Favorite::query()
            ->where('user_id', $request->user()->id)
            ->with('product.category')
            ->latest()
            ->get();

        return response()->json($favorites);
    }

    public function store(StoreFavoriteRequest $request): JsonResponse
    {
        $favorite = Favorite::firstOrCreate([
            'user_id' => $request->user()->id,
            'product_id' => $request->validated('product_id'),
        ]);

        $favorite->load('product.category');

        return response()->json([
            'message' => 'Produit ajouté aux favoris.',
            'favorite' => $favorite,
        ], 201);
    }

    public function destroy(Request $request, Favorite $favorite): JsonResponse
    {
        if ($favorite->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Favori introuvable.'], 404);
        }

        $favorite->delete();

        return response()->json([
            'message' => 'Produit retiré des favoris.',
        ]);
    }
}
