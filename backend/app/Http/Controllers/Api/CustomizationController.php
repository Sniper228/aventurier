<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreCustomJerseyRequest;
use App\Models\CustomJerseyRequest;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CustomizationController extends Controller
{
    public function store(StoreCustomJerseyRequest $request): JsonResponse
    {
        $jerseyRequest = CustomJerseyRequest::create([
            ...$request->validated(),
            'user_id' => $request->user()?->id,
            'status' => 'pending',
        ]);

        return response()->json([
            'message' => 'Demande de maillot personnalisé enregistrée.',
            'request' => $jerseyRequest,
        ], 201);
    }

    public function index(Request $request): JsonResponse
    {
        $requests = CustomJerseyRequest::query()
            ->where('user_id', $request->user()->id)
            ->latest()
            ->paginate(10);

        return response()->json($requests);
    }
}
