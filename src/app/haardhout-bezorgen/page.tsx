import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MapPin, Truck } from "lucide-react";
import { getAllProvinces } from "@/lib/locations/provinces";
import { getCitiesByProvince } from "@/lib/locations/cities";
import { calculateShipping } from "@/lib/shipping";

export const metadata: Metadata = {
  title: "Haardhout bezorgen door heel Nederland",
  description:
    "De Vuurmeester bezorgt premium haardhout door heel Nederland. Bekijk bezorgkosten per stad en regio. Vanaf €20 in Brabant, persoonlijke service gegarandeerd.",
  openGraph: {
    title: "Haardhout bezorgen door heel Nederland | De Vuurmeester",
    description:
      "Bekijk bezorgkosten per stad en regio. Vanaf €20 in Brabant.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Haardhout bezorgen",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/haardhout-bezorgen",
  },
};

export default function HaardhoutBezorgenPage() {
  const provinces = getAllProvinces();

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-stone-600 hover:text-orange-600"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar overzicht
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center">
              <Truck className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-stone-900">
              Haardhout bezorgen door heel Nederland
            </h1>
          </div>
          <p className="text-stone-600 text-lg max-w-3xl">
            De Vuurmeester bezorgt premium haardhout vanuit Middelbeers
            (Noord-Brabant) door heel Nederland. Bekijk hieronder de
            bezorgkosten per stad en regio. We leveren los gestort aan huis en
            bellen altijd even van tevoren.
          </p>
        </div>
      </section>

      {/* Provinces & Cities */}
      {provinces.map((province) => {
        const cities = getCitiesByProvince(province.slug);
        return (
          <section
            key={province.slug}
            className="border-t first:border-t-0"
          >
            <div className="container mx-auto px-4 py-10 lg:py-12">
              <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-6">
                <Link
                  href={`/haardhout-bezorgen/${province.slug}`}
                  className="group"
                >
                  <h2 className="text-2xl font-bold text-stone-900 group-hover:text-orange-600 transition-colors">
                    <MapPin className="inline h-5 w-5 mr-2 text-orange-500" />
                    {province.name}
                  </h2>
                </Link>
                <span className="text-sm text-stone-500">
                  Bezorgkosten vanaf {province.shippingRange}
                </span>
              </div>

              {cities.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
                  {cities.map((city) => {
                    const shipping = calculateShipping(
                      city.samplePostcode,
                      1
                    );
                    return (
                      <Link
                        key={city.slug}
                        href={`/haardhout-bezorgen/${city.slug}`}
                        className="group flex items-center justify-between gap-2 rounded-lg border border-stone-200 px-4 py-3 hover:border-orange-300 hover:bg-orange-50 transition-colors"
                      >
                        <span className="text-sm font-medium text-stone-800 group-hover:text-orange-700">
                          {city.name}
                        </span>
                        {shipping !== null && (
                          <span className="text-xs text-stone-500 whitespace-nowrap">
                            vanaf €{Math.round(shipping)}
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <p className="text-sm text-stone-500">
                  Neem{" "}
                  <Link
                    href={`/haardhout-bezorgen/${province.slug}`}
                    className="text-orange-600 hover:underline"
                  >
                    contact op
                  </Link>{" "}
                  voor bezorgmogelijkheden in {province.name}.
                </p>
              )}
            </div>
          </section>
        );
      })}

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Staat jouw stad er niet bij?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            We bezorgen door heel Nederland. Bereken direct je bezorgkosten op
            basis van je postcode.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Bezorgkosten berekenen
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 font-medium"
            >
              Bekijk ons assortiment
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
