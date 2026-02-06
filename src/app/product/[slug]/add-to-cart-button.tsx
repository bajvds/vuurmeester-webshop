"use client";

import { useState, useRef, useEffect } from "react";
import { ShoppingCart, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { Product, cleanProductName } from "@/lib/woocommerce/client";

interface AddToCartButtonProps {
  product: Product;
  price: string;
  regularPrice?: string;
  isOnSale?: boolean;
}

export function AddToCartButton({
  product,
  price,
  regularPrice,
  isOnSale,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [showStickyBar, setShowStickyBar] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const { addItem, openCart } = useCart();

  // Intersection Observer — show sticky bar when button scrolls out of view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setShowStickyBar(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Toggle body class so WhatsApp button can reposition
  useEffect(() => {
    document.body.classList.toggle("has-sticky-bar", showStickyBar);
    return () => {
      document.body.classList.remove("has-sticky-bar");
    };
  }, [showStickyBar]);

  const handleAddToCart = () => {
    addItem(
      {
        ...product,
        name: cleanProductName(product.name),
      },
      quantity
    );
    setAdded(true);
    openCart();

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((q) => q - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity((q) => q + 1);
  };

  return (
    <>
      <div ref={containerRef} className="space-y-3">
        {/* Quantity Selector */}
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-stone-700">Aantal:</span>
          <div className="flex items-center">
            <button
              onClick={decrementQuantity}
              disabled={quantity <= 1}
              className="h-10 w-10 rounded-l-lg border border-r-0 border-stone-300 flex items-center justify-center hover:bg-stone-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Verminder aantal"
            >
              <Minus className="h-4 w-4" />
            </button>
            <div className="h-10 w-14 border-t border-b border-stone-300 flex items-center justify-center text-lg font-medium">
              {quantity}
            </div>
            <button
              onClick={incrementQuantity}
              className="h-10 w-10 rounded-r-lg border border-l-0 border-stone-300 flex items-center justify-center hover:bg-stone-50 transition-colors"
              aria-label="Verhoog aantal"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Add to Cart Button */}
        <Button
          onClick={handleAddToCart}
          disabled={added}
          size="lg"
          className={`w-full text-lg py-6 ${
            added
              ? "bg-green-500 hover:bg-green-500"
              : "bg-orange-500 hover:bg-orange-600"
          } transition-colors`}
        >
          {added ? (
            <>
              <Check className="mr-2 h-5 w-5" />
              Toegevoegd aan winkelwagen
            </>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-5 w-5" />
              In winkelwagen
            </>
          )}
        </Button>
      </div>

      {/* Sticky Bottom Bar — Mobile Only */}
      {showStickyBar && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-white border-t shadow-[0_-4px_12px_rgba(0,0,0,0.1)] lg:hidden animate-in slide-in-from-bottom-2 duration-200">
          <div className="container mx-auto px-4 py-3 flex items-center gap-3">
            <div className="flex-1 min-w-0">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-orange-600">
                  {price}
                </span>
                {isOnSale && regularPrice && (
                  <span className="text-sm text-stone-400 line-through">
                    {regularPrice}
                  </span>
                )}
              </div>
            </div>
            <Button
              onClick={handleAddToCart}
              disabled={added}
              className={`px-6 py-2.5 text-base ${
                added
                  ? "bg-green-500 hover:bg-green-500"
                  : "bg-orange-500 hover:bg-orange-600"
              } transition-colors`}
            >
              {added ? (
                <>
                  <Check className="mr-1.5 h-4 w-4" />
                  Toegevoegd
                </>
              ) : (
                <>
                  <ShoppingCart className="mr-1.5 h-4 w-4" />
                  In winkelwagen
                </>
              )}
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
