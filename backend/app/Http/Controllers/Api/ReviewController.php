<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreReviewRequest;
use App\Models\Product;
use App\Models\Review;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function index(Product $product): JsonResponse
    {
        $reviews = Review::query()
            ->where('product_id', $product->id)
            ->where('is_approved', true)
            ->with('user:id,name')
            ->latest()
            ->paginate(10);

        return response()->json($reviews);
    }

    public function store(StoreReviewRequest $request): JsonResponse
    {
        $existingReview = Review::where('user_id', $request->user()->id)
            ->where('product_id', $request->validated('product_id'))
            ->first();

        if ($existingReview !== null) {
            return response()->json([
                'message' => 'Vous avez déjà laissé un avis pour ce produit.',
            ], 422);
        }

        $review = Review::create([
            ...$request->validated(),
            'user_id' => $request->user()->id,
            'is_approved' => false,
        ]);

        $review->load('user:id,name');

        return response()->json([
            'message' => 'Avis soumis. Il sera visible après modération.',
            'review' => $review,
        ], 201);
    }

    public function destroy(Request $request, Review $review): JsonResponse
    {
        if ($review->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Avis introuvable.'], 404);
        }

        $review->delete();

        return response()->json([
            'message' => 'Avis supprimé.',
        ]);
    }
}
