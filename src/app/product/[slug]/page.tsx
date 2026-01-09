import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { woocommerce, formatPrice, cleanProductName, Product } from "@/lib/woocommerce/client";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductCard } from "@/components/products/product-card";
import { ProductReviews, ProductRatingBadge } from "@/components/products/product-reviews";
import { CustomerPhotos } from "@/components/products/customer-photos";
import { Truck, Phone, ShieldCheck, ArrowLeft, Star } from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const product = await woocommerce.getProduct(slug);
    const name = cleanProductName(product.name);

    return {
      title: name,
      description: product.short_description.replace(/<[^>]*>/g, "").slice(0, 155),
      openGraph: {
        title: `${name} | De Vuurmeester`,
        description: product.short_description.replace(/<[^>]*>/g, ""),
        images: product.images[0] ? [{ url: product.images[0].src }] : [],
      },
    };
  } catch {
    return {
      title: "Product niet gevonden",
    };
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;

  let product;
  try {
    product = await woocommerce.getProduct(slug);
  } catch {
    notFound();
  }

  const name = cleanProductName(product.name);
  const price = formatPrice(product.prices.price);
  const regularPrice = formatPrice(product.prices.regular_price);
  const isOnSale = product.on_sale;

  // Get related products (same category)
  let relatedProducts: Product[] = [];
  try {
    const allProducts = await woocommerce.getHaardhoutProducts();
    relatedProducts = allProducts
      .filter((p) => p.id !== product.id)
      .slice(0, 3);
  } catch {
    // Ignore errors for related products
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-stone-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar overzicht
          </Link>
        </div>
      </div>

      {/* Product */}
      <div className="container mx-auto px-4 py-8 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Gallery */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square rounded-xl overflow-hidden bg-stone-100">
              {product.images[0] ? (
                <Image
                  src={product.images[0].src}
                  alt={product.images[0].alt || name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              ) : (
                <div className="h-full w-full flex items-center justify-center">
                  <span className="text-6xl">🪵</span>
                </div>
              )}

              {isOnSale && (
                <span className="absolute left-4 top-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Aanbieding
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((image, index) => (
                  <div
                    key={image.id}
                    className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-stone-100 border-2 border-transparent hover:border-orange-500 transition-colors cursor-pointer"
                  >
                    <Image
                      src={image.thumbnail || image.src}
                      alt={image.alt || `${name} - Afbeelding ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-2">
                {name}
              </h1>

              {/* Rating Badge */}
              <div className="flex items-center gap-3 mb-4">
                <ProductRatingBadge productId={product.id} productName={product.name} />
                <a href="#reviews" className="text-sm text-orange-600 hover:underline">
                  Bekijk reviews
                </a>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-3xl font-bold text-orange-600">
                  {price}
                </span>
                {isOnSale && (
                  <span className="text-lg text-stone-400 line-through">
                    {regularPrice}
                  </span>
                )}
              </div>

              {/* Description */}
              {product.short_description && (
                <div
                  className="prose prose-stone prose-sm max-w-none mb-6"
                  dangerouslySetInnerHTML={{ __html: product.short_description }}
                />
              )}

              {/* Add to Cart */}
              <AddToCartButton product={product} />
            </div>

            {/* USPs */}
            <div className="border-t pt-6 space-y-4">
              <div className="flex items-start gap-3">
                <Truck className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">
                    Snelle bezorging door heel Nederland
                  </p>
                  <p className="text-sm text-stone-600">
                    Bezorgkosten vanaf €15,- afhankelijk van locatie
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">
                    Persoonlijk contact via WhatsApp
                  </p>
                  <p className="text-sm text-stone-600">
                    Vragen? App ons gerust!
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ShieldCheck className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">
                    Goedkoopste garantie
                  </p>
                  <p className="text-sm text-stone-600">
                    Vind je het ergens goedkoper? Wij matchen de prijs!
                  </p>
                </div>
              </div>
            </div>

            {/* Full Description */}
            {product.description && (
              <div className="border-t pt-6">
                <h2 className="text-lg font-semibold text-stone-900 mb-3">
                  Productomschrijving
                </h2>
                <div
                  className="prose prose-stone prose-sm max-w-none"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>
            )}
          </div>
        </div>

        {/* Customer Photos Section */}
        <CustomerPhotos productSlug={slug} productName={product.name} />

        {/* Reviews Section */}
        <div id="reviews" className="scroll-mt-20">
          <ProductReviews productId={product.id} productName={product.name} />
        </div>
      </div>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="bg-stone-50 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Bekijk ook
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
