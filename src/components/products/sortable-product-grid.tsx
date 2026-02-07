"use client";

import { useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { ProductCard } from "@/components/products/product-card";
import { Product } from "@/lib/woocommerce/client";

type SortOption = "default" | "price-asc" | "price-desc";

export function SortableProductGrid({ products }: { products: Product[] }) {
  const [sort, setSort] = useState<SortOption>("default");

  const sorted = [...products].sort((a, b) => {
    if (sort === "price-asc") {
      return parseInt(a.prices.price) - parseInt(b.prices.price);
    }
    if (sort === "price-desc") {
      return parseInt(b.prices.price) - parseInt(a.prices.price);
    }
    return 0;
  });

  return (
    <>
      <div className="flex justify-end mb-4">
        <div className="flex items-center gap-2">
          <ArrowUpDown className="h-4 w-4 text-stone-400" />
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm border border-stone-200 rounded-lg px-3 py-1.5 text-stone-700 bg-white focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
          >
            <option value="default">Aanbevolen</option>
            <option value="price-asc">Prijs laag → hoog</option>
            <option value="price-desc">Prijs hoog → laag</option>
          </select>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {sorted.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
}
