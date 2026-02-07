"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/store/cart";
import {
  formatPrice,
  cleanProductName,
  Product,
} from "@/lib/woocommerce/client";
import { calculateShipping } from "@/lib/shipping";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckoutForm } from "@/components/checkout/checkout-form";
import {
  ShoppingBag,
  Trash2,
  Plus,
  Minus,
  ArrowLeft,
  Truck,
  Flame,
  Sparkles,
  Lock,
} from "lucide-react";

// Volume per product type (approximation based on product names)
function estimateCartVolume(
  items: { product: Product; quantity: number }[]
): number {
  let totalVolume = 0;

  for (const item of items) {
    const name = item.product.name.toLowerCase();
    let volumePerUnit = 1; // default 1 m³

    // Estimate volume based on product name
    if (name.includes("2 m³") || name.includes("2m³")) {
      volumePerUnit = 2;
    } else if (name.includes("1,5 m³") || name.includes("1.5 m³")) {
      volumePerUnit = 1.5;
    } else if (name.includes("0,5 m³") || name.includes("halve")) {
      volumePerUnit = 0.5;
    } else if (
      name.includes("aanmaak") ||
      name.includes("lucifer") ||
      name.includes("fakkel")
    ) {
      volumePerUnit = 0.1; // Small items
    }

    totalVolume += volumePerUnit * item.quantity;
  }

  return Math.max(1, Math.ceil(totalVolume)); // Minimum 1 m³
}

export default function AfrekenPage() {
  const router = useRouter();
  const { items, updateQuantity, removeItem, getSubtotal, clearCart, addItem } =
    useCart();
  const [postcode, setPostcode] = useState("");
  const [shippingCost, setShippingCost] = useState<number | null>(null);
  const [mounted, setMounted] = useState(false);
  const [aanmaakProducts, setAanmaakProducts] = useState<Product[]>([]);

  useEffect(() => {
    setMounted(true);
    // Load aanmaak products for cross-sell (via server-side proxy to avoid CORS)
    fetch("/api/products/aanmaak")
      .then((res) => res.json())
      .then((data) => setAanmaakProducts(data.products || []))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (postcode.length >= 4) {
      const volume = estimateCartVolume(items);
      const result = calculateShipping(postcode, volume);
      setShippingCost(result);
    } else {
      setShippingCost(null);
    }
  }, [postcode, items]);

  const subtotal = getSubtotal();
  const total = shippingCost !== null ? subtotal + shippingCost : null;

  // Handle successful checkout - redirect to payment or success page
  const handleCheckoutSuccess = (redirectUrl: string) => {
    // For iDEAL, this will be the Mollie payment URL (external)
    // For COD, this will be our success page (internal)
    if (redirectUrl.startsWith("http")) {
      window.location.href = redirectUrl;
    } else {
      router.push(redirectUrl);
    }
  };

  if (!mounted) {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="animate-pulse">
            <div className="h-8 bg-stone-200 rounded w-48 mb-8"></div>
            <div className="h-64 bg-stone-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-stone-50 py-8 lg:py-12">
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
          {/* Left Column: Cart Items + Checkout Form */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <div className="space-y-4">
              <h2 className="text-lg font-semibold text-stone-900">
                Je winkelwagen
              </h2>
              {items.map((item) => (
                <div
                  key={item.product.id}
                  className="bg-white rounded-xl p-4 lg:p-6 shadow-sm flex gap-4"
                >
                  {/* Product Image */}
                  <div className="relative w-20 h-20 lg:w-24 lg:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100">
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

            {/* Cross-sell: Aanmaakhoutjes (prominent suggestion) */}
            {(() => {
              // Find aanmaakhoutjes specifically (try multiple search terms)
              const aanmaakhoutjes = aanmaakProducts.find(p => {
                const slug = p.slug.toLowerCase();
                const name = p.name.toLowerCase();
                return slug.includes('aanmaakhoutje') ||
                       slug.includes('aanmaak-houtje') ||
                       name.includes('aanmaakhoutje') ||
                       name.includes('aanmaak houtje');
              });

              const isAanmaakhoutjesInCart = aanmaakhoutjes && items.some(
                (item) => item.product.id === aanmaakhoutjes.id
              );

              if (!aanmaakhoutjes || isAanmaakhoutjesInCart) return null;

              return (
                <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-4 sm:p-6 border-2 border-orange-200">
                  <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    {/* Product Image */}
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0 rounded-lg overflow-hidden bg-white shadow-sm">
                      {aanmaakhoutjes.images?.[0] ? (
                        <Image
                          src={aanmaakhoutjes.images[0].src}
                          alt={aanmaakhoutjes.images[0].alt || aanmaakhoutjes.name}
                          fill
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center">
                          <Flame className="h-10 w-10 text-orange-300" />
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <Sparkles className="h-4 w-4 text-orange-500" />
                        <span className="text-xs font-medium text-orange-600 uppercase tracking-wide">
                          Populaire toevoeging
                        </span>
                      </div>
                      <h3 className="font-semibold text-stone-900 mb-1">
                        Aanmaakhoutjes erbij?
                      </h3>
                      <p className="text-sm text-stone-600 mb-2">
                        Ideaal om je vuur snel aan te steken. 90% van onze klanten bestelt dit erbij!
                      </p>
                      <p className="text-lg font-bold text-orange-600">
                        {formatPrice(aanmaakhoutjes.prices.price)}
                      </p>
                    </div>

                    {/* Add Button */}
                    <Button
                      size="lg"
                      className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 whitespace-nowrap"
                      onClick={() => addItem(aanmaakhoutjes)}
                    >
                      <Plus className="h-4 w-4 mr-2" />
                      Toevoegen
                    </Button>
                  </div>
                </div>
              );
            })()}

            {/* Checkout Form - always show, disable submit when no shipping */}
            <CheckoutForm
              shippingCost={shippingCost}
              onSuccess={handleCheckoutSuccess}
              onPostcodeChange={(pc) => setPostcode(pc.replace(/\s/g, ""))}
            />
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-4">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Overzicht
              </h2>

              {/* Items summary */}
              <div className="space-y-3 mb-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex justify-between text-sm"
                  >
                    <span className="text-stone-600 truncate flex-1 mr-2">
                      {item.quantity}x {cleanProductName(item.product.name)}
                    </span>
                    <span className="font-medium">
                      {formatPrice(
                        parseInt(item.product.prices.price) * item.quantity
                      )}
                    </span>
                  </div>
                ))}
              </div>

              {/* Subtotal */}
              <div className="flex justify-between py-3 border-t">
                <span className="text-stone-600">Subtotaal</span>
                <span className="font-medium">
                  {formatPrice(subtotal * 100)}
                </span>
              </div>

              {/* Shipping */}
              <div className="py-4 border-t">
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
                <div className="flex justify-between py-4 border-t">
                  <span className="text-lg font-semibold text-stone-900">
                    Totaal
                  </span>
                  <span className="text-lg font-bold text-orange-600">
                    {formatPrice(total * 100)}
                  </span>
                </div>
              )}

              {/* Security badge */}
              <div className="flex items-center justify-center gap-2 mt-4 pt-4 border-t text-stone-500 text-sm">
                <Lock className="h-4 w-4" />
                <span>Veilig betalen met iDEAL</span>
              </div>

              {/* Show message if postcode not yet entered */}
              {shippingCost === null && (
                <p className="text-xs text-center text-stone-500 mt-4">
                  Voer je postcode in om door te gaan met afrekenen
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
