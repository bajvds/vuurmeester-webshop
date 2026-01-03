"use client";

import { useState } from "react";
import { ShoppingCart, Plus, Minus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";
import { Product, cleanProductName } from "@/lib/woocommerce/client";

interface AddToCartButtonProps {
  product: Product;
}

export function AddToCartButton({ product }: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCart();

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

    // Reset after 2 seconds
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
    <div className="space-y-4">
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
  );
}
