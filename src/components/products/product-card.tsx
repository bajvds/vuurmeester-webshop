'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, formatPrice, cleanProductName } from '@/lib/woocommerce/client';
import { useCart } from '@/store/cart';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem, openCart } = useCart();

  const name = cleanProductName(product.name);
  const price = formatPrice(product.prices.price);
  const regularPrice = formatPrice(product.prices.regular_price);
  const isOnSale = product.on_sale;
  const image = product.images[0];

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      ...product,
      name: cleanProductName(product.name),
    });
    openCart();
  };

  return (
    <Link href={`/product/${product.slug}`}>
      <Card className="group overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
        {/* Image */}
        <div className="relative aspect-square overflow-hidden bg-stone-100">
          {image ? (
            <Image
              src={image.src}
              alt={image.alt || name}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <span className="text-4xl">🪵</span>
            </div>
          )}

          {/* Sale Badge */}
          {isOnSale && (
            <Badge className="absolute left-2 top-2 bg-red-500 hover:bg-red-600">
              Aanbieding
            </Badge>
          )}
        </div>

        <CardContent className="p-4">
          {/* Name */}
          <h3 className="font-semibold text-stone-900 line-clamp-2 min-h-[3rem]">
            {name}
          </h3>

          {/* Price */}
          <div className="mt-2 flex items-baseline gap-2">
            <span className="text-xl font-bold text-orange-600">
              {price}
            </span>
            {isOnSale && (
              <span className="text-sm text-stone-400 line-through">
                {regularPrice}
              </span>
            )}
          </div>

          {/* Short description */}
          {product.short_description && (
            <p
              className="mt-2 text-sm text-stone-500 line-clamp-2"
              dangerouslySetInnerHTML={{
                __html: product.short_description.replace(/<[^>]*>/g, '')
              }}
            />
          )}

          {/* Add to Cart Button */}
          <Button
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="mr-2 h-4 w-4" />
            In winkelwagen
          </Button>
        </CardContent>
      </Card>
    </Link>
  );
}
