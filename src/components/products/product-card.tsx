'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, Flame, Droplets, TreeDeciduous, Package } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Product, formatPrice, cleanProductName } from '@/lib/woocommerce/client';
import { useCart } from '@/store/cart';

// Wood type detection based on product name
type WoodType = 'droog' | 'vers' | 'beuk' | 'kozijn' | null;

function detectWoodType(name: string): WoodType {
  const lower = name.toLowerCase();

  if (lower.includes('ovengedroogd') || lower.includes('oven gedroogd')) {
    return 'droog';
  }
  if (lower.includes('halfdroog') || lower.includes('half droog') || lower.includes('vers')) {
    return 'vers';
  }
  if (lower.includes('beuk') || lower.includes('ofyr')) {
    return 'beuk';
  }
  if (lower.includes('kozijn') || lower.includes('kleine blok')) {
    return 'kozijn';
  }
  return null;
}

const woodTypeBadge: Record<NonNullable<WoodType>, { label: string; className: string; icon: typeof Flame }> = {
  droog: {
    label: 'Ovengedroogd',
    className: 'bg-amber-100 text-amber-800 border-amber-200',
    icon: Flame
  },
  vers: {
    label: 'Halfdroog',
    className: 'bg-blue-100 text-blue-800 border-blue-200',
    icon: Droplets
  },
  beuk: {
    label: 'Beukenhout',
    className: 'bg-green-100 text-green-800 border-green-200',
    icon: TreeDeciduous
  },
  kozijn: {
    label: 'Kozijnhout',
    className: 'bg-purple-100 text-purple-800 border-purple-200',
    icon: Package
  },
};

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
  const woodType = detectWoodType(product.name);
  const badge = woodType ? woodTypeBadge[woodType] : null;

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

          {/* Badges */}
          <div className="absolute left-2 top-2 flex flex-col gap-1">
            {isOnSale && (
              <Badge className="bg-red-500 hover:bg-red-600">
                Aanbieding
              </Badge>
            )}
            {badge && (
              <Badge variant="outline" className={`${badge.className} border text-xs font-medium`}>
                <badge.icon className="mr-1 h-3 w-3" />
                {badge.label}
              </Badge>
            )}
          </div>
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
