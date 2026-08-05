<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderRequest;
use App\Models\Address;
use App\Models\Order;
use App\Models\Product;
use App\Models\PromoCode;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class OrderController extends Controller
{
    public function index(Request $request): JsonResponse
    {
        $orders = Order::query()
            ->where('user_id', $request->user()->id)
            ->with(['items.product', 'promoCode', 'shippingAddress', 'billingAddress'])
            ->latest()
            ->paginate(10);

        return response()->json($orders);
    }

    public function show(Request $request, Order $order): JsonResponse
    {
        if ($order->user_id !== $request->user()->id) {
            return response()->json(['message' => 'Commande introuvable.'], 404);
        }

        $order->load(['items.product', 'promoCode', 'shippingAddress', 'billingAddress']);

        return response()->json($order);
    }

    public function store(StoreOrderRequest $request): JsonResponse
    {
        $user = $request->user();

        $shippingAddress = Address::where('id', $request->validated('shipping_address_id'))
            ->where('user_id', $user->id)
            ->first();

        if ($shippingAddress === null) {
            return response()->json(['message' => 'Adresse de livraison invalide.'], 422);
        }

        if ($request->filled('billing_address_id')) {
            $billingAddress = Address::where('id', $request->validated('billing_address_id'))
                ->where('user_id', $user->id)
                ->first();

            if ($billingAddress === null) {
                return response()->json(['message' => 'Adresse de facturation invalide.'], 422);
            }
        }

        $order = DB::transaction(function () use ($request, $user): Order {
            $subtotal = 0;
            $orderItemsData = [];

            foreach ($request->validated('items') as $item) {
                $product = Product::findOrFail($item['product_id']);

                if ($product->stock < $item['quantity']) {
                    abort(422, "Stock insuffisant pour {$product->name}.");
                }

                $unitPrice = (float) $product->price;
                $lineTotal = $unitPrice * $item['quantity'];
                $subtotal += $lineTotal;

                $orderItemsData[] = [
                    'product_id' => $product->id,
                    'quantity' => $item['quantity'],
                    'unit_price' => $unitPrice,
                    'total_price' => $lineTotal,
                    'size' => $item['size'] ?? null,
                    'color' => $item['color'] ?? null,
                ];

                $product->decrement('stock', $item['quantity']);
            }

            $discount = 0;
            $promoCode = null;

            if ($request->filled('promo_code')) {
                $promoCode = PromoCode::where('code', strtoupper($request->validated('promo_code')))->first();

                if ($promoCode === null || ! $promoCode->isValidForAmount($subtotal)) {
                    abort(422, 'Code promo invalide ou expiré.');
                }

                $discount = $promoCode->calculateDiscount($subtotal);
                $promoCode->increment('used_count');
            }

            $shippingCost = (float) ($request->validated('shipping_cost') ?? 0);
            $total = max(0, $subtotal - $discount + $shippingCost);

            $order = Order::create([
                'reference' => 'AVT-'.Str::upper(Str::random(8)),
                'user_id' => $user->id,
                'status' => 'pending',
                'subtotal' => $subtotal,
                'discount' => $discount,
                'shipping_cost' => $shippingCost,
                'total' => $total,
                'promo_code_id' => $promoCode?->id,
                'shipping_address_id' => $request->validated('shipping_address_id'),
                'billing_address_id' => $request->validated('billing_address_id'),
                'notes' => $request->validated('notes'),
            ]);

            foreach ($orderItemsData as $itemData) {
                $order->items()->create($itemData);
            }

            return $order;
        });

        $order->load(['items.product', 'promoCode', 'shippingAddress', 'billingAddress']);

        return response()->json([
            'message' => 'Commande créée.',
            'order' => $order,
        ], 201);
    }
}
