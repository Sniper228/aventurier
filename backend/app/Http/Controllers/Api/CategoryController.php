<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCategoryRequest;
use App\Models\Category;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $query = Category::query()
            ->with(['children' => function ($builder): void {
                $builder->where('is_active', true)->orderBy('sort_order');
            }])
            ->where('is_active', true)
            ->whereNull('parent_id')
            ->orderBy('sort_order');

        if ($request->boolean('with_products_count')) {
            $query->withCount(['products' => function ($builder): void {
                $builder->where('is_active', true);
            }]);
        }

        $categories = $query->get();

        return response()->json($categories);
    }

    public function show(Category $category): JsonResponse
    {
        if (! $category->is_active) {
            return response()->json(['message' => 'Catégorie introuvable.'], 404);
        }

        $category->load([
            'children' => function ($builder): void {
                $builder->where('is_active', true)->orderBy('sort_order');
            },
            'products' => function ($builder): void {
                $builder->where('is_active', true)->latest();
            },
        ]);

        return response()->json($category);
    }

    public function store(StoreCategoryRequest $request): JsonResponse
    {
        $category = Category::create($request->validated());

        return response()->json([
            'message' => 'Catégorie créée.',
            'category' => $category,
        ], 201);
    }

    public function destroy(Category $category): JsonResponse
    {
        $category->delete();

        return response()->json([
            'message' => 'Catégorie supprimée.',
        ]);
    }
}
