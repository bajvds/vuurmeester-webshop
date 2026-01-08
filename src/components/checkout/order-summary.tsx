"use client";

import Image from "next/image";
import { Truck } from "lucide-react";

import { useCart } from "@/store/cart";
import { formatPrice, cleanProductName } from "@/lib/woocommerce/client";

interface OrderSummaryProps {
  shippingCost: number | null;
}

export function OrderSummary({ shippingCost }: OrderSummaryProps) {
  const { items, getSubtotal } = useCart();

  const subtotal = getSubtotal();
  const total = shippingCost !== null ? subtotal + shippingCost : null;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
      <h2 className="text-lg font-semibold text-stone-900 mb-4">
        Je bestelling
      </h2>

      {/* Items */}
      <div className="space-y-4 mb-6">
        {items.map((item) => (
          <div key={item.product.id} className="flex gap-3">
            {/* Product Image */}
            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100">
              {item.product.images?.[0] ? (
                <Image
                  src={item.product.images[0].src}
                  alt={item.product.images[0].alt || item.product.name}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-2xl">🪵</span>
                </div>
              )}
              {/* Quantity badge */}
              <div className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {item.quantity}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-stone-900 line-clamp-2">
                {cleanProductName(item.product.name)}
              </h3>
              <p className="text-sm text-stone-500">
                {item.quantity}x {formatPrice(item.product.prices.price)}
              </p>
            </div>

            {/* Line Total */}
            <div className="text-sm font-medium text-stone-900">
              {formatPrice(parseInt(item.product.prices.price) * item.quantity)}
            </div>
          </div>
        ))}
      </div>

      {/* Totals */}
      <div className="border-t border-stone-200 pt-4 space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-stone-600">Subtotaal</span>
          <span className="font-medium">{formatPrice(subtotal * 100)}</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-stone-600 flex items-center gap-1">
            <Truck className="h-4 w-4" />
            Bezorging
          </span>
          <span className="font-medium">
            {shippingCost !== null ? (
              shippingCost === 0 ? (
                <span className="text-green-600">Gratis</span>
              ) : (
                formatPrice(shippingCost * 100)
              )
            ) : (
              <span className="text-stone-400">Wordt berekend</span>
            )}
          </span>
        </div>

        {/* Total */}
        <div className="flex justify-between pt-3 border-t border-stone-200">
          <span className="text-lg font-semibold text-stone-900">Totaal</span>
          <span className="text-lg font-bold text-orange-600">
            {total !== null ? (
              formatPrice(total * 100)
            ) : (
              <span className="text-stone-400">-</span>
            )}
          </span>
        </div>
      </div>

      {/* Info */}
      <p className="text-xs text-stone-500 mt-4">
        Inclusief BTW. Bezorgkosten worden berekend op basis van je postcode.
      </p>
    </div>
  );
}
