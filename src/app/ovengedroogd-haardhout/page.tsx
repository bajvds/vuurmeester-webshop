import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Flame,
  Droplets,
  ThermometerSun,
  Timer,
  Leaf,
} from "lucide-react";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Ovengedroogd haardhout kopen | Direct stoken",
  description:
    "Ovengedroogd haardhout met minder dan 20% vocht. Direct te stoken, minder rook, meer warmte. Bezorgd door heel Nederland door De Vuurmeester.",
  openGraph: {
    title: "Ovengedroogd haardhout kopen | Direct stoken | De Vuurmeester",
    description:
      "Ovengedroogd haardhout met minder dan 20% vocht. Direct te stoken, minder rook, meer warmte.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "Ovengedroogd haardhout kopen bij De Vuurmeester",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/ovengedroogd-haardhout",
  },
};

export default async function OvengedroogdHaardhoutPage() {
  let products: Awaited<ReturnType<typeof getHaardhoutProducts>> = [];
  try {
    products = await getHaardhoutProducts();
  } catch {}

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
              <Flame className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-3xl lg:text-4xl font-bold text-stone-900">
              Ovengedroogd haardhout: direct stoken, maximale warmte
            </h1>
          </div>
          <div className="prose prose-stone max-w-3xl text-stone-600 space-y-4">
            <p>
              Ovengedroogd haardhout is hét premium product voor iedereen die
              direct wil stoken zonder wachttijd. Bij De Vuurmeester koop je
              ovengedroogd hardhout dat in professionele droogcellen is gedroogd
              tot een vochtpercentage van minder dan 20%. Het resultaat?
              Haardhout dat meteen brandt, maximale warmte geeft en nauwelijks
              rook produceert.
            </p>
            <p>
              Maar wat is ovengedroogd haardhout precies? In tegenstelling tot
              luchtgedroogd hout — dat maanden tot jaren buiten moet drogen —
              wordt ovengedroogd hout in grote droogcellen verwarmd tot circa
              70-80°C. In enkele dagen tijd daalt het vochtgehalte van 40-50%
              naar onder de 20%. Dit proces doodt bovendien eventuele insecten
              en schimmelsporen, wat het hout extra schoon maakt.
            </p>
            <p>
              Het verschil met halfdroog haardhout merk je direct. Halfdroog
              hout (20-35% vocht) brandt prima, maar heeft wat meer aanlooptijd
              nodig en produceert iets meer rook. Ovengedroogd hout pakt
              sneller vlam, brandt gelijkmatiger en geeft merkbaar meer warmte
              af. Je gebruikt effectief minder hout voor dezelfde warmte.
            </p>
            <p>
              Een veelgestelde vraag: hoe sla je ovengedroogd haardhout het
              beste op? Het antwoord is simpel: droog en geventileerd. Leg het
              niet direct op de grond maar op een pallet of lattenbodem. Dek het
              af met een afdak of zeil aan de bovenkant, maar laat de zijkanten
              open zodat lucht kan circuleren. Zo blijft je haardhout in
              perfecte conditie tot je het stookt.
            </p>
            <p>
              Bij De Vuurmeester bezorgen we ovengedroogd haardhout vanuit
              Middelbeers door heel Nederland. Los gestort, persoonlijk
              afgeleverd op een afgesproken moment.{" "}
              <Link
                href="/bezorgkosten"
                className="text-orange-600 hover:underline font-medium"
              >
                Bereken je bezorgkosten
              </Link>{" "}
              en bestel vandaag nog.
            </p>
          </div>
        </div>
      </section>

      {/* Vergelijking */}
      <section className="border-y bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Ovengedroogd vs. halfdroog haardhout
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl border overflow-hidden">
                <thead>
                  <tr className="bg-stone-100">
                    <th className="text-left p-4 font-semibold text-stone-900">
                      Eigenschap
                    </th>
                    <th className="text-left p-4 font-semibold text-amber-700">
                      Ovengedroogd
                    </th>
                    <th className="text-left p-4 font-semibold text-blue-700">
                      Halfdroog
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="p-4 text-stone-700">Vochtpercentage</td>
                    <td className="p-4 text-stone-600">&lt; 20%</td>
                    <td className="p-4 text-stone-600">20 - 35%</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-stone-700">Direct te stoken</td>
                    <td className="p-4 text-green-600 font-medium">Ja</td>
                    <td className="p-4 text-stone-600">
                      Na 3-6 maanden drogen
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-stone-700">Warmteafgifte</td>
                    <td className="p-4 text-stone-600">Maximaal</td>
                    <td className="p-4 text-stone-600">Goed (na droging)</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-stone-700">Rookontwikkeling</td>
                    <td className="p-4 text-stone-600">Minimaal</td>
                    <td className="p-4 text-stone-600">Matig</td>
                  </tr>
                  <tr>
                    <td className="p-4 text-stone-700">Prijs</td>
                    <td className="p-4 text-stone-600">Premium</td>
                    <td className="p-4 text-green-600 font-medium">
                      Voordeliger
                    </td>
                  </tr>
                  <tr>
                    <td className="p-4 text-stone-700">Ideaal voor</td>
                    <td className="p-4 text-stone-600">
                      Direct stoken dit seizoen
                    </td>
                    <td className="p-4 text-stone-600">
                      Voorraad voor volgend jaar
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Voordelen icons */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Voordelen van ovengedroogd haardhout
            </h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="h-14 w-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-3">
                  <Droplets className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Laag vochtgehalte
                </h3>
                <p className="text-stone-500 text-xs">
                  Minder dan 20% vocht voor optimale verbranding
                </p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-3">
                  <ThermometerSun className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Meer warmte
                </h3>
                <p className="text-stone-500 text-xs">
                  Tot 30% meer warmteafgifte dan nat hout
                </p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 rounded-xl bg-amber-100 flex items-center justify-center mx-auto mb-3">
                  <Timer className="h-7 w-7 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Direct stoken
                </h3>
                <p className="text-stone-500 text-xs">
                  Geen wachttijd, meteen genieten van je vuur
                </p>
              </div>
              <div className="text-center">
                <div className="h-14 w-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-3">
                  <Leaf className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="font-semibold text-stone-900 text-sm mb-1">
                  Minder uitstoot
                </h3>
                <p className="text-stone-500 text-xs">
                  Minder rook, roet en fijnstof bij verbranding
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producten */}
      <section className="bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Ons assortiment
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showDeliveryBadge />
            ))}
          </div>
        </div>
      </section>

      {/* Opslag tips */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Hoe bewaar je ovengedroogd haardhout?
            </h2>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="prose prose-stone max-w-none text-stone-600 space-y-3">
                <p>
                  Om je ovengedroogd haardhout in topconditie te houden, is
                  goede opslag essentieel. Volg deze tips:
                </p>
                <ul className="space-y-2">
                  <li>
                    <strong>Niet op de grond</strong> — Leg het hout op een
                    pallet, lattenbodem of houtblokken om vochtopname van
                    onderaf te voorkomen.
                  </li>
                  <li>
                    <strong>Afdekken van boven</strong> — Bescherm het hout
                    tegen regen met een afdak, zeil of houtopslag. Dek alleen de
                    bovenkant af.
                  </li>
                  <li>
                    <strong>Zijkanten open</strong> — Laat de zijkanten open
                    voor goede luchtcirculatie. Dit voorkomt schimmelvorming.
                  </li>
                  <li>
                    <strong>Afstand van muren</strong> — Laat minimaal 10 cm
                    ruimte tussen het hout en een muur zodat lucht eromheen kan
                    stromen.
                  </li>
                  <li>
                    <strong>Breng wat naar binnen</strong> — Leg een kleine
                    voorraad binnen naast de haard. Hout op kamertemperatuur
                    brandt het best.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Ovengedroogd haardhout bestellen?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bestel vandaag nog en wij bezorgen je ovengedroogd haardhout
            persoonlijk aan huis. Direct klaar om te stoken.
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
