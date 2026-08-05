<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\UploadImageRequest;
use App\Services\CloudinaryService;
use Illuminate\Http\JsonResponse;

class UploadController extends Controller
{
    public function __construct(
        private readonly CloudinaryService $cloudinary,
    ) {}

    public function store(UploadImageRequest $request): JsonResponse
    {
        if (! $this->cloudinary->isConfigured()) {
            return response()->json([
                'message' => 'Service d\'upload non configuré. Définissez les variables CLOUDINARY_* dans .env.',
            ], 503);
        }

        $folder = $request->validated('folder') ?? config('cloudinary.default_folder');
        $result = $this->cloudinary->upload($request->file('image'), $folder);

        return response()->json([
            'message' => 'Image uploadée.',
            'upload' => $result,
        ], 201);
    }
}
