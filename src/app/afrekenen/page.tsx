"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/store/cart";
import { formatPrice, cleanProductName } from "@/lib/woocommerce/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  Truck,
  ExternalLink,
  AlertCircle,
} from "lucide-react";

// Shipping rates by first 2 digits of postcode
const SHIPPING_RATES: Record<string, number> = {
  "50": 15,
  "51": 15,
  "52": 20,
  "53": 25,
  "54": 20,
  "55": 25,
  "56": 30,
  "57": 35,
  "58": 30,
  "59": 30,
  "46": 25,
  "47": 30,
  "48": 35,
  "49": 30,
  "60": 25,
  "61": 25,
  "62": 30,
  "63": 35,
  "64": 40,
  "65": 35,
  "66": 40,
  "67": 45,
  "68": 40,
  "69": 40,
  "30": 35,
  "31": 35,
  "32": 40,
  "33": 40,
  "34": 45,
  "35": 45,
  "36": 50,
  "37": 45,
  "38": 50,
  "39": 50,
  "70": 40,
  "71": 40,
  "72": 45,
  "73": 45,
  "74": 50,
  "75": 50,
  "76": 55,
  "77": 50,
  "78": 55,
  "79": 50,
  "80": 55,
  "81": 55,
  "82": 60,
  "83": 60,
  "84": 55,
  "85": 55,
  "86": 60,
  "87": 65,
  "88": 65,
  "89": 70,
  "90": 70,
  "91": 70,
  "92": 75,
  "93": 75,
  "94": 75,
  "95": 80,
  "96": 80,
  "97": 75,
  "98": 80,
  "99": 85,
  "10": 50,
  "11": 50,
  "12": 45,
  "13": 45,
  "14": 50,
  "15": 55,
  "16": 55,
  "17": 60,
  "18": 65,
  "19": 55,
  "20": 50,
  "21": 45,
  "22": 50,
  "23": 50,
  "24": 55,
  "25": 55,
  "26": 50,
  "27": 55,
  "28": 50,
  "29": 45,
  "40": 35,
  "41": 30,
  "42": 35,
  "43": 35,
  "44": 40,
  "45": 35,
};

const DEPOT_POSTCODES = ["5091", "5094", "5095"];

function getShippingCost(postcode: string): number | null {
  if (!postcode || postcode.length < 4) return null;

  const prefix4 = postcode.substring(0, 4);
  if (DEPOT_POSTCODES.includes(prefix4)) {
    return 5;
  }

  const prefix2 = postcode.substring(0, 2);
  return SHIPPING_RATES[prefix2] ?? null;
}

export default function AfrekenPage() {
  const { items, updateQuantity, removeItem, getSubtotal, clearCart } =
    useCart();
  const [postcode, setPostcode] = useState("");
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (postcode.length >= 4) {
      setShippingCost(getShippingCost(postcode));
    } else {
      setShippingCost(null);
    }
  }, [postcode]);

  const subtotal = getSubtotal();
  const total = shippingCost !== null ? subtotal + shippingCost : null;

  // Build WooCommerce cart URL with products
  const buildWooCommerceCartUrl = () => {
    const baseUrl = "https://vuurmeester.shop/winkelwagen/";
    const params = items
      .map((item) => `add-to-cart=${item.product.id}&quantity=${item.quantity}`)
      .join("&");
    return `${baseUrl}?${params}`;
  };

  const handleCheckout = () => {
    // Open WooCommerce checkout in new tab
    window.open(buildWooCommerceCartUrl(), "_blank");
  };

  if (!mounted) {
    return (
      <main className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-stone-200 rounded w-48 mb-8"></div>
            <div className="h-64 bg-stone-200 rounded"></div>
          </div>
        </div>
      </main>
    );
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <ShoppingBag className="h-24 w-24 text-stone-300 mx-auto mb-6" />
          <h1 className="text-2xl font-bold text-stone-900 mb-4">
            Je winkelwagen is leeg
          </h1>
          <p className="text-stone-600 mb-8">
            Bekijk ons assortiment en voeg producten toe aan je winkelwagen.
          </p>
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/">Bekijk producten</Link>
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-stone-50 py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center text-sm text-stone-600 hover:text-orange-600 transition-colors mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Verder winkelen
        </Link>

        <h1 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-8">
          Afrekenen
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div
                key={item.product.id}
                className="bg-white rounded-xl p-4 lg:p-6 shadow-sm flex gap-4"
              >
                {/* Product Image */}
                <div className="relative w-24 h-24 lg:w-32 lg:h-32 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100">
                  {item.product.images?.[0] ? (
                    <Image
                      src={item.product.images[0].src}
                      alt={item.product.images[0].alt || item.product.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center">
                      <span className="text-3xl">🪵</span>
                    </div>
                  )}
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-stone-900 mb-1">
                    {cleanProductName(item.product.name)}
                  </h3>
                  <p className="text-lg font-bold text-orange-600 mb-3">
                    {formatPrice(item.product.prices.price)}
                  </p>

                  {/* Quantity & Remove */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity - 1)
                        }
                        className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-medium">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.product.id, item.quantity + 1)
                        }
                        className="h-8 w-8 rounded-full bg-stone-100 flex items-center justify-center hover:bg-stone-200 transition-colors"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>

                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors p-2"
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                </div>

                {/* Line Total (desktop) */}
                <div className="hidden lg:flex flex-col items-end justify-center">
                  <span className="text-sm text-stone-500">Totaal</span>
                  <span className="text-lg font-bold text-stone-900">
                    {formatPrice(
                      parseInt(item.product.prices.price) * item.quantity
                    )}
                  </span>
                </div>
              </div>
            ))}

            {/* Clear Cart */}
            <button
              onClick={clearCart}
              className="text-sm text-stone-500 hover:text-red-500 transition-colors"
            >
              Winkelwagen legen
            </button>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Overzicht
              </h2>

              {/* Subtotal */}
              <div className="flex justify-between py-3 border-b">
                <span className="text-stone-600">Subtotaal</span>
                <span className="font-medium">
                  {formatPrice(subtotal * 100)}
                </span>
              </div>

              {/* Shipping */}
              <div className="py-4 border-b">
                <div className="flex items-center gap-2 mb-3">
                  <Truck className="h-4 w-4 text-orange-500" />
                  <span className="font-medium text-stone-900">
                    Bezorgkosten
                  </span>
                </div>

                <Input
                  type="text"
                  placeholder="Voer je postcode in"
                  value={postcode}
                  onChange={(e) =>
                    setPostcode(e.target.value.replace(/\s/g, "").toUpperCase())
                  }
                  maxLength={6}
                  className="mb-2"
                />

                {shippingCost !== null ? (
                  <div className="flex justify-between text-stone-600">
                    <span>Bezorging</span>
                    <span className="font-medium text-stone-900">
                      {formatPrice(shippingCost * 100)}
                    </span>
                  </div>
                ) : postcode.length >= 4 ? (
                  <p className="text-sm text-orange-600">
                    Neem contact met ons op voor bezorgkosten in jouw regio.
                  </p>
                ) : (
                  <p className="text-sm text-stone-500">
                    Voer je postcode in om bezorgkosten te berekenen
                  </p>
                )}
              </div>

              {/* Total */}
              {total !== null && (
                <div className="flex justify-between py-4 border-b">
                  <span className="text-lg font-semibold text-stone-900">
                    Totaal
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {formatPrice(total * 100)}
                  </span>
                </div>
              )}

              {/* Checkout Notice */}
              <div className="bg-stone-50 rounded-lg p-4 mt-4 mb-4">
                <div className="flex gap-2">
                  <AlertCircle className="h-5 w-5 text-stone-500 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-stone-600">
                    Je wordt doorgestuurd naar onze beveiligde checkout omgeving
                    om je bestelling af te ronden.
                  </p>
                </div>
              </div>

              {/* Checkout Button */}
              <Button
                onClick={handleCheckout}
                disabled={shippingCost === null}
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg"
              >
                Doorgaan naar afrekenen
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>

              {shippingCost === null && (
                <p className="text-xs text-center text-stone-500 mt-2">
                  Voer eerst je postcode in
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
