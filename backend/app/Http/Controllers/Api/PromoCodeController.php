<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\ValidatePromoCodeRequest;
use App\Models\PromoCode;
use Illuminate\Http\JsonResponse;

class PromoCodeController extends Controller
{
    public function validateCode(ValidatePromoCodeRequest $request): JsonResponse
    {
        $promoCode = PromoCode::where('code', strtoupper($request->validated('code')))->first();

        if ($promoCode === null) {
            return response()->json([
                'valid' => false,
                'message' => 'Code promo introuvable.',
            ], 404);
        }

        $subtotal = (float) $request->validated('subtotal');

        if (! $promoCode->isValidForAmount($subtotal)) {
            return response()->json([
                'valid' => false,
                'message' => 'Code promo invalide ou non applicable à ce montant.',
            ], 422);
        }

        $discount = $promoCode->calculateDiscount($subtotal);

        return response()->json([
            'valid' => true,
            'code' => $promoCode->code,
            'type' => $promoCode->type,
            'value' => $promoCode->value,
            'discount' => $discount,
            'message' => 'Code promo appliqué.',
        ]);
    }
}
