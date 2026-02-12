import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { woocommerce, formatPrice, cleanProductName, getPriceAsNumber, Product } from "@/lib/woocommerce/client";
import { AddToCartButton } from "./add-to-cart-button";
import { ProductViewTracker } from "./product-view-tracker";
import { ProductImageGallery } from "./product-image-gallery";
import { ProductCard } from "@/components/products/product-card";
import { ProductReviews, ProductRatingBadge } from "@/components/products/product-reviews";
import { CustomerPhotos } from "@/components/products/customer-photos";
import { Truck, Phone, ShieldCheck, ArrowLeft } from "lucide-react";

// Convert br-separated short descriptions to a styled checklist
function formatShortDescription(html: string): string {
  const stripped = html
    .replace(/<\/p>\s*<p>/gi, "<br>")
    .replace(/<\/?p>/gi, "")
    .trim();
  const lines = stripped
    .split(/<br\s*\/?>/gi)
    .map((l) => l.trim())
    .filter(Boolean);

  if (lines.length > 1) {
    return (
      '<ul style="list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:6px">' +
      lines
        .map(
          (l) =>
            `<li style="display:flex;align-items:baseline;gap:8px"><span style="color:#f97316;font-weight:600;flex-shrink:0">&#10003;</span><span>${l}</span></li>`
        )
        .join("") +
      "</ul>"
    );
  }
  return html;
}

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
      alternates: {
        canonical: `https://www.vuurmeester-haardhout.nl/product/${slug}`,
      },
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
  const lowerName = product.name.toLowerCase();
  const isHaardhout = ['ovengedroogd', 'oven gedroogd', 'halfdroog', 'half droog', 'vers', 'beuk', 'ofyr', 'kozijn', 'kleine blok'].some(k => lowerName.includes(k));

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

  // Product JSON-LD structured data
  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    url: `https://www.vuurmeester-haardhout.nl/product/${slug}`,
    description: product.short_description?.replace(/<[^>]*>/g, "") || "",
    image: product.images[0]?.src,
    brand: { "@type": "Brand", name: "De Vuurmeester" },
    offers: {
      "@type": "Offer",
      url: `https://www.vuurmeester-haardhout.nl/product/${slug}`,
      price: (parseInt(product.prices.price) / 100).toFixed(2),
      priceCurrency: "EUR",
      priceValidUntil: `${new Date().getFullYear()}-12-31`,
      availability: "https://schema.org/InStock",
      seller: { "@type": "Organization", name: "De Vuurmeester" },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "NL",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 14,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/ReturnShippingFees",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "NL",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 5,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
        },
      },
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "62",
      bestRating: "5",
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.vuurmeester-haardhout.nl",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: name,
        item: `https://www.vuurmeester-haardhout.nl/product/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <ProductViewTracker id={product.id} name={name} price={getPriceAsNumber(product.prices.price)} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
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
      <div className="container mx-auto px-4 py-4 lg:py-12">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12">
          {/* Image Gallery */}
          <ProductImageGallery
            images={product.images}
            name={name}
            isOnSale={isOnSale}
            isHaardhout={isHaardhout}
          />

          {/* Product Info */}
          <div className="space-y-4 lg:space-y-6">
            <div>
              <h1 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-2">
                {name}
              </h1>

              {/* Rating Badge */}
              <div className="flex items-center gap-3 mb-3">
                <ProductRatingBadge productId={product.id} productName={product.name} />
                <a href="#reviews" className="text-sm text-orange-600 hover:underline">
                  Bekijk reviews
                </a>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3 mb-4">
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
                  className="text-sm text-stone-600 mb-4 [&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-1.5 [&_li]:flex [&_li]:items-baseline [&_li]:gap-2 [&_li]:before:content-['✓'] [&_li]:before:text-orange-500 [&_li]:before:font-bold"
                  dangerouslySetInnerHTML={{
                    __html: formatShortDescription(product.short_description),
                  }}
                />
              )}

              {/* Add to Cart */}
              <AddToCartButton
                product={product}
                price={price}
                regularPrice={regularPrice}
                isOnSale={isOnSale}
              />
            </div>

            {/* USPs — compact on mobile, full on desktop */}
            <div className="border-t pt-4 lg:pt-6">
              {/* Mobile: compact horizontal strip */}
              <div className="grid grid-cols-3 gap-2 lg:hidden">
                <div className="flex flex-col items-center text-center gap-1.5 py-2">
                  <Truck className="h-5 w-5 text-orange-500" />
                  <p className="text-xs font-medium text-stone-700 leading-tight">
                    Snelle bezorging
                  </p>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 py-2">
                  <Phone className="h-5 w-5 text-orange-500" />
                  <p className="text-xs font-medium text-stone-700 leading-tight">
                    Persoonlijk contact
                  </p>
                </div>
                <div className="flex flex-col items-center text-center gap-1.5 py-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  <p className="text-xs font-medium text-stone-700 leading-tight">
                    Laagste prijs
                  </p>
                </div>
              </div>

              {/* Desktop: full USP items */}
              <div className="hidden lg:flex lg:flex-col lg:gap-4">
                <div className="flex items-start gap-3">
                  <Truck className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      Snelle bezorging door heel Nederland
                    </p>
                    <p className="text-sm text-stone-600">
                      Bezorgkosten afhankelijk van locatie
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
                <ProductCard key={relProduct.id} product={relProduct} showDeliveryBadge />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
