import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowLeft,
  MapPin,
  Truck,
  Clock,
  Phone,
  ChevronDown,
  Check,
} from "lucide-react";
import {
  getCityBySlug,
  getAllCitySlugs,
  getCitiesByProvince,
} from "@/lib/locations/cities";
import {
  getProvinceBySlug,
  getAllProvinceSlugs,
} from "@/lib/locations/provinces";
import { calculateShipping } from "@/lib/shipping";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";
import type { CityData, ProvinceData } from "@/lib/locations/types";

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [...getAllCitySlugs(), ...getAllProvinceSlugs()].map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (city) {
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      alternates: {
        canonical: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${slug}`,
      },
      openGraph: {
        title: city.metaTitle,
        description: city.metaDescription,
        locale: "nl_NL",
        images: [
          {
            url: "/images/hero-header.jpg",
            width: 6000,
            height: 2500,
            alt: `Haardhout bezorgen in ${city.name}`,
          },
        ],
      },
    };
  }
  const province = getProvinceBySlug(slug);
  if (province) {
    return {
      title: province.metaTitle,
      description: province.metaDescription,
      alternates: {
        canonical: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${slug}`,
      },
      openGraph: {
        title: province.metaTitle,
        description: province.metaDescription,
        locale: "nl_NL",
      },
    };
  }
  return { title: "Niet gevonden" };
}

export default async function LocationPage({ params }: PageProps) {
  const { slug } = await params;

  const city = getCityBySlug(slug);
  if (city) {
    return <CityPage city={city} />;
  }

  const province = getProvinceBySlug(slug);
  if (province) {
    return <ProvincePage province={province} />;
  }

  notFound();
}

// ============================================================
// City Page
// ============================================================

async function CityPage({ city }: { city: CityData }) {
  const province = getProvinceBySlug(city.province);
  const provinceName = province?.name ?? city.province;

  // Calculate shipping for common volumes
  const volumes = [1, 2, 3, 5];
  const shippingCosts = volumes.map((v) => ({
    volume: v,
    cost: calculateShipping(city.samplePostcode, v),
  }));

  // Nearby cities data
  const nearbyCities = city.nearbyCities
    .map((s) => getCityBySlug(s))
    .filter(Boolean) as CityData[];

  // Products
  let products: Awaited<ReturnType<typeof getHaardhoutProducts>> = [];
  try {
    products = await getHaardhoutProducts();
  } catch {}

  // JSON-LD schemas
  const localBusinessJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "De Vuurmeester",
    url: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${city.slug}`,
    telephone: "+31682091984",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Middelbeers",
      addressRegion: "Noord-Brabant",
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "City",
      name: city.name,
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
        name: "Haardhout bezorgen",
        item: "https://www.vuurmeester-haardhout.nl/haardhout-bezorgen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: city.name,
      },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: city.faqItems.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/haardhout-bezorgen"
              className="hover:text-orange-600 transition-colors"
            >
              Haardhout bezorgen
            </Link>
            <span>/</span>
            <Link
              href={`/haardhout-bezorgen/${city.province}`}
              className="hover:text-orange-600 transition-colors"
            >
              {provinceName}
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{city.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-10 lg:py-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            Haardhout bezorgen in {city.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-stone-500 mb-6">
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-orange-500" />
              {city.distanceFromDepot} km vanaf depot
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-orange-500" />
              {city.estimatedDelivery}
            </span>
            <span className="flex items-center gap-1.5">
              <Truck className="h-4 w-4 text-orange-500" />
              Vanaf €{shippingCosts[0]?.cost != null ? Math.round(shippingCosts[0].cost) : "?"}
            </span>
          </div>
          <p className="text-stone-600 leading-relaxed">{city.introduction}</p>

          {city.neighborhoods && city.neighborhoods.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {city.neighborhoods.map((n) => (
                <span
                  key={n}
                  className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700"
                >
                  <MapPin className="h-3 w-3" />
                  {n}
                </span>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Shipping Costs */}
      <section className="bg-stone-50 border-y">
        <div className="container mx-auto px-4 py-10 lg:py-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Bezorgkosten {city.name}
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {shippingCosts.map(({ volume, cost }) => (
              <div
                key={volume}
                className="rounded-xl bg-white border border-stone-200 p-4 text-center"
              >
                <p className="text-sm text-stone-500 mb-1">
                  {volume} m&sup3;
                </p>
                <p className="text-2xl font-bold text-orange-600">
                  {cost != null
                    ? `€${Math.round(cost)}`
                    : "—"}
                </p>
              </div>
            ))}
          </div>
          <p className="text-sm text-stone-500 mt-4">
            Exacte bezorgkosten worden berekend op basis van je postcode.{" "}
            <Link
              href="/bezorgkosten"
              className="text-orange-600 hover:underline"
            >
              Bereken je bezorgkosten
            </Link>
          </p>
        </div>
      </section>

      {/* How it works */}
      <section className="container mx-auto px-4 py-10 lg:py-12">
        <h2 className="text-2xl font-bold text-stone-900 mb-8">
          Hoe werkt het?
        </h2>
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl">
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              1
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">Bestel online</h3>
              <p className="text-sm text-stone-600 mt-1">
                Kies je houtsoort en het aantal kubieke meter.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              2
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">
                We nemen contact op
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                We bellen of appen om een bezorgmoment af te spreken.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-orange-100 text-orange-600 font-bold">
              3
            </div>
            <div>
              <h3 className="font-semibold text-stone-900">
                Los gestort geleverd
              </h3>
              <p className="text-sm text-stone-600 mt-1">
                We leveren het hout op je oprit of in de tuin.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      {products.length > 0 && (
        <section className="bg-stone-50 border-y py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Ons haardhout assortiment
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} showDeliveryBadge />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      {city.faqItems.length > 0 && (
        <section className="container mx-auto px-4 py-10 lg:py-12">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Veelgestelde vragen over haardhout in {city.name}
          </h2>
          <div className="max-w-3xl space-y-3">
            {city.faqItems.map((faq, i) => (
              <details
                key={i}
                className="group rounded-lg border border-stone-200 bg-white"
              >
                <summary className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4 text-stone-900 font-medium [&::-webkit-details-marker]:hidden">
                  {faq.question}
                  <ChevronDown className="h-4 w-4 shrink-0 text-stone-400 transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-5 pb-4 text-sm text-stone-600 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </section>
      )}

      {/* Nearby Cities */}
      {nearbyCities.length > 0 && (
        <section className="bg-stone-50 border-t py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Haardhout bezorgen in de buurt
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {nearbyCities.map((nearby) => {
                const cost = calculateShipping(nearby.samplePostcode, 1);
                return (
                  <Link
                    key={nearby.slug}
                    href={`/haardhout-bezorgen/${nearby.slug}`}
                    className="group flex items-center justify-between gap-2 rounded-lg border border-stone-200 bg-white px-4 py-3 hover:border-orange-300 hover:bg-orange-50 transition-colors"
                  >
                    <span className="text-sm font-medium text-stone-800 group-hover:text-orange-700">
                      {nearby.name}
                    </span>
                    {cost != null && (
                      <span className="text-xs text-stone-500 whitespace-nowrap">
                        vanaf €{Math.round(cost)}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Haardhout bestellen in {city.name}?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bekijk ons assortiment en bestel vandaag nog. We bezorgen binnen{" "}
            {city.estimatedDelivery} in {city.name}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Bekijk assortiment
            </Link>
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 font-medium"
            >
              Bezorgkosten berekenen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

// ============================================================
// Province Page
// ============================================================

function ProvincePage({ province }: { province: ProvinceData }) {
  const cities = getCitiesByProvince(province.slug);

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
        name: "Haardhout bezorgen",
        item: "https://www.vuurmeester-haardhout.nl/haardhout-bezorgen",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: province.name,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-stone-500">
            <Link href="/" className="hover:text-orange-600 transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link
              href="/haardhout-bezorgen"
              className="hover:text-orange-600 transition-colors"
            >
              Haardhout bezorgen
            </Link>
            <span>/</span>
            <span className="text-stone-900 font-medium">{province.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-10 lg:py-14">
        <div className="max-w-4xl">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            Haardhout bezorgen in {province.name}
          </h1>
          <div className="flex items-center gap-2 text-sm text-stone-500 mb-6">
            <Truck className="h-4 w-4 text-orange-500" />
            <span>Bezorgkosten {province.shippingRange}</span>
          </div>
          <p className="text-stone-600 leading-relaxed">
            {province.introduction}
          </p>
        </div>
      </section>

      {/* Cities Grid */}
      {cities.length > 0 && (
        <section className="bg-stone-50 border-y py-10 lg:py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Steden in {province.name}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {cities.map((city) => {
                const shipping = calculateShipping(city.samplePostcode, 1);
                return (
                  <Link
                    key={city.slug}
                    href={`/haardhout-bezorgen/${city.slug}`}
                    className="group flex items-center justify-between gap-4 rounded-xl border border-stone-200 bg-white p-5 hover:border-orange-300 hover:shadow-sm transition-all"
                  >
                    <div>
                      <p className="font-semibold text-stone-900 group-hover:text-orange-700">
                        {city.name}
                      </p>
                      <p className="text-sm text-stone-500 mt-0.5">
                        {city.distanceFromDepot} km &middot;{" "}
                        {city.estimatedDelivery}
                      </p>
                    </div>
                    <div className="text-right shrink-0">
                      {shipping != null && (
                        <p className="text-lg font-bold text-orange-600">
                          €{Math.round(shipping)}
                        </p>
                      )}
                      <p className="text-xs text-stone-400">per m&sup3;</p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Haardhout bestellen in {province.name}?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bekijk ons assortiment of bereken direct je bezorgkosten op basis
            van je postcode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Bekijk assortiment
            </Link>
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 font-medium"
            >
              Bezorgkosten berekenen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
