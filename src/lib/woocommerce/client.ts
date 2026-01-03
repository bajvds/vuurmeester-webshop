/**
 * WooCommerce Store API Client
 * Uses the public Store API (no auth needed for read operations)
 * https://github.com/woocommerce/woocommerce/blob/trunk/plugins/woocommerce/src/StoreApi/README.md
 */

const WOOCOMMERCE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL || 'https://vuurmeester.shop';

// Types
export interface ProductImage {
  id: number;
  src: string;
  thumbnail: string;
  alt: string;
  name: string;
}

export interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

export interface ProductPrices {
  price: string; // In cents
  regular_price: string;
  sale_price: string;
  currency_code: string;
  currency_symbol: string;
  currency_minor_unit: number;
}

export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  type: 'simple' | 'variable' | 'grouped' | 'external';
  short_description: string;
  description: string;
  sku: string;
  prices: ProductPrices;
  price_html: string;
  on_sale: boolean;
  average_rating: string;
  review_count: number;
  images: ProductImage[];
  categories: ProductCategory[];
  is_purchasable: boolean;
  is_in_stock: boolean;
  has_options: boolean;
  attributes: { name: string; value: string }[];
  variations: number[];
}

export interface CartItem {
  key: string;
  id: number;
  quantity: number;
  name: string;
  short_description: string;
  images: ProductImage[];
  prices: ProductPrices;
  totals: {
    line_subtotal: string;
    line_total: string;
  };
}

export interface Cart {
  items: CartItem[];
  totals: {
    subtotal: string;
    total: string;
    shipping_total: string;
    currency_code: string;
    currency_symbol: string;
  };
  items_count: number;
}

/**
 * WooCommerce Store API Client
 */
class WooCommerceStoreClient {
  private baseUrl: string;

  constructor() {
    // Use rest_route for compatibility (permalinks might be plain)
    this.baseUrl = `${WOOCOMMERCE_URL}/?rest_route=/wc/store/v1`;
  }

  private async fetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        'Content-Type': 'application/json',
        ...options?.headers,
      },
      next: { revalidate: 60 }, // Cache for 60 seconds
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new Error(error.message || `Store API error: ${response.status}`);
    }

    return response.json();
  }

  // ============ PRODUCTS ============

  async getProducts(params?: { per_page?: number; category?: string }): Promise<Product[]> {
    let endpoint = '/products';
    const queryParams: string[] = [];

    if (params?.per_page) queryParams.push(`per_page=${params.per_page}`);
    if (params?.category) queryParams.push(`category=${params.category}`);

    if (queryParams.length > 0) {
      endpoint += `&${queryParams.join('&')}`;
    }

    return this.fetch<Product[]>(endpoint);
  }

  async getProduct(idOrSlug: number | string): Promise<Product> {
    if (typeof idOrSlug === 'number') {
      return this.fetch<Product>(`/products/${idOrSlug}`);
    }

    // Get by slug
    const products = await this.fetch<Product[]>(`/products&slug=${idOrSlug}`);
    if (products.length === 0) {
      throw new Error(`Product not found: ${idOrSlug}`);
    }
    return products[0];
  }

  async getProductsByCategory(categorySlug: string): Promise<Product[]> {
    return this.fetch<Product[]>(`/products&category=${categorySlug}`);
  }

  // Helper: Get featured haardhout products
  async getHaardhoutProducts(): Promise<Product[]> {
    const products = await this.getProducts({ per_page: 50 });

    // Filter for haardhout (contains "haardhout" or "hout" in name, not "aanmaak" or "houtskool")
    return products.filter(p => {
      const name = p.name.toLowerCase();
      const isHaardhout = name.includes('haardhout') ||
                          name.includes('ovengedroogd') ||
                          name.includes('halfdroog') ||
                          name.includes('berkenhout') ||
                          name.includes('ofyr');
      const isNotAanmaak = !name.includes('aanmaak') && !name.includes('houtskool') && !name.includes('briket');
      return isHaardhout && isNotAanmaak;
    });
  }

  // Helper: Get aanmaak products
  async getAanmaakProducts(): Promise<Product[]> {
    const products = await this.getProducts({ per_page: 50 });

    return products.filter(p => {
      const name = p.name.toLowerCase();
      return name.includes('aanmaak') ||
             name.includes('fakkel') ||
             name.includes('lucifer');
    });
  }

  // ============ CATEGORIES ============

  async getCategories(): Promise<ProductCategory[]> {
    return this.fetch<ProductCategory[]>('/products/categories');
  }

  // ============ CART (requires session) ============
  // Note: Cart operations require cookies/session management
  // For now, we handle cart client-side with Zustand

  // ============ SHIPPING ============

  async getShippingRates(postcode: string): Promise<unknown> {
    // This would need to be implemented via cart or custom endpoint
    // For now, we'll use a lookup table based on postcode
    return null;
  }
}

// Singleton instance
export const woocommerce = new WooCommerceStoreClient();

// Helper functions for server components
export async function getProducts() {
  return woocommerce.getProducts({ per_page: 50 });
}

export async function getProduct(slug: string) {
  return woocommerce.getProduct(slug);
}

export async function getHaardhoutProducts() {
  return woocommerce.getHaardhoutProducts();
}

export async function getAanmaakProducts() {
  return woocommerce.getAanmaakProducts();
}

// ============ PRICE HELPERS ============

/**
 * Format price from cents to euros
 */
export function formatPrice(priceInCents: string | number): string {
  const cents = typeof priceInCents === 'string' ? parseInt(priceInCents) : priceInCents;
  return new Intl.NumberFormat('nl-NL', {
    style: 'currency',
    currency: 'EUR',
  }).format(cents / 100);
}

/**
 * Get price as number (in euros)
 */
export function getPriceAsNumber(priceInCents: string): number {
  return parseInt(priceInCents) / 100;
}

/**
 * Clean HTML entities from product names
 */
export function cleanProductName(name: string): string {
  return name
    .replace(/&#8211;/g, '–')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&');
}
