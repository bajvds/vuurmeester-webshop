"use client";

import { useEffect, useState } from "react";
import { useCart } from "@/store/cart";
import { formatPrice, Product } from "@/lib/woocommerce/client";
import { Plus, Minus, ShoppingBag, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, getSubtotal, addItem } =
    useCart();
  const [aanmaakhoutjes, setAanmaakhoutjes] = useState<Product | null>(null);

  const subtotal = getSubtotal();

  // Fetch aanmaakhoutjes product for upsell
  useEffect(() => {
    if (isOpen && !aanmaakhoutjes) {
      fetch("/api/products/aanmaak")
        .then((res) => res.json())
        .then((data) => {
          const product = (data.products || []).find((p: Product) => {
            const slug = p.slug.toLowerCase();
            const name = p.name.toLowerCase();
            return slug.includes('aanmaakhoutje') ||
                   slug.includes('aanmaak-houtje') ||
                   name.includes('aanmaakhoutje') ||
                   name.includes('aanmaak houtje');
          });
          if (product) setAanmaakhoutjes(product);
        })
        .catch(console.error);
    }
  }, [isOpen, aanmaakhoutjes]);

  const isAanmaakhoutjesInCart = aanmaakhoutjes && items.some(
    (item) => item.product.id === aanmaakhoutjes.id
  );

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && closeCart()}>
      <SheetContent className="flex flex-col w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Winkelwagen
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
            <ShoppingBag className="h-16 w-16 text-stone-300 mb-4" />
            <p className="text-stone-600 mb-4">Je winkelwagen is leeg</p>
            <Button onClick={closeCart} variant="outline">
              Verder winkelen
            </Button>
          </div>
        ) : (
          <>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto py-4 -mx-6 px-6">
              <div className="space-y-4">
                {items.map((item) => (
                  <div
                    key={item.product.id}
                    className="flex gap-3 bg-stone-50 rounded-lg p-3"
                  >
                    {/* Product Image */}
                    <div className="relative h-16 w-16 flex-shrink-0 rounded-md overflow-hidden bg-white">
                      {item.product.images?.[0] ? (
                        <Image
                          src={item.product.images[0].src}
                          alt={item.product.images[0].alt || item.product.name}
                          fill
                          sizes="64px"
                          className="object-cover"
                        />
                      ) : (
                        <div className="h-full w-full flex items-center justify-center bg-stone-200">
                          <ShoppingBag className="h-6 w-6 text-stone-400" />
                        </div>
                      )}
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-stone-900 line-clamp-2 leading-tight">
                        {item.product.name
                          .replace(/&#8211;/g, "–")
                          .replace(/&amp;/g, "&")}
                      </h4>
                      <p className="text-sm text-orange-600 font-semibold mt-1">
                        {formatPrice(item.product.prices.price)}
                      </p>

                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2 mt-2">
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity - 1)
                          }
                          className="h-7 w-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                          aria-label="Verminder aantal"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="text-sm font-medium w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.product.id, item.quantity + 1)
                          }
                          className="h-7 w-7 rounded-full bg-white border border-stone-200 flex items-center justify-center hover:bg-stone-100 transition-colors"
                          aria-label="Verhoog aantal"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </div>

                    {/* Remove Button */}
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-stone-400 hover:text-red-500 transition-colors flex-shrink-0"
                      aria-label="Verwijder product"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}

                {/* Upsell: Aanmaakhoutjes */}
                {aanmaakhoutjes && !isAanmaakhoutjesInCart && (
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg p-3 border border-orange-200">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-orange-500" />
                      <span className="text-xs font-medium text-orange-600">
                        Aanrader
                      </span>
                    </div>
                    <div className="flex gap-3 items-center">
                      <div className="relative h-12 w-12 flex-shrink-0 rounded-md overflow-hidden bg-white">
                        {aanmaakhoutjes.images?.[0] ? (
                          <Image
                            src={aanmaakhoutjes.images[0].src}
                            alt="Aanmaakhoutjes"
                            fill
                            sizes="48px"
                            className="object-cover"
                          />
                        ) : (
                          <div className="h-full w-full flex items-center justify-center bg-stone-200">
                            <span className="text-lg">🔥</span>
                          </div>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-stone-900">Aanmaakhoutjes</p>
                        <p className="text-xs text-orange-600 font-semibold">
                          {formatPrice(aanmaakhoutjes.prices.price)}
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-orange-500 hover:bg-orange-600 text-xs h-8 px-3"
                        onClick={() => addItem(aanmaakhoutjes)}
                      >
                        <Plus className="h-3 w-3 mr-1" />
                        Erbij
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="border-t pt-4 px-6 pb-4 space-y-4">
              {/* Subtotal */}
              <div className="flex justify-between items-center">
                <span className="text-stone-600">Subtotaal</span>
                <span className="text-lg font-semibold text-stone-900">
                  {formatPrice(subtotal * 100)}
                </span>
              </div>

              {/* Note */}
              <p className="text-xs text-stone-500">
                Bezorgkosten worden berekend bij het afrekenen op basis van je
                postcode.
              </p>

              {/* Checkout Button */}
              <Button
                asChild
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
                size="lg"
              >
                <Link href="/afrekenen" onClick={closeCart}>
                  Afrekenen
                </Link>
              </Button>

              {/* Continue Shopping */}
              <Button
                variant="ghost"
                className="w-full"
                onClick={closeCart}
              >
                Verder winkelen
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
