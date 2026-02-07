import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Flame, Thermometer, Droplets, TreeDeciduous } from "lucide-react";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Kachelhout kopen | Voor houtkachel & open haard",
  description:
    "Kachelhout kopen? Bij De Vuurmeester bestel je ovengedroogd kachelhout voor je houtkachel. Bezorging heel Nederland, scherpe prijzen.",
  openGraph: {
    title: "Kachelhout kopen | Voor houtkachel & open haard | De Vuurmeester",
    description:
      "Kachelhout kopen? Bij De Vuurmeester bestel je ovengedroogd kachelhout voor je houtkachel.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "Kachelhout kopen bij De Vuurmeester",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/kachelhout",
  },
};

export default async function KachelhoutPage() {
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
              Kachelhout kopen voor je houtkachel
            </h1>
          </div>
          <div className="prose prose-stone max-w-3xl text-stone-600 space-y-4">
            <p>
              Een goede houtkachel verdient goed kachelhout. Bij De Vuurmeester
              koop je premium kachelhout dat speciaal geselecteerd is voor
              optimale verbranding in je houtkachel. Ons hardhout brandt schoon,
              lang en geeft een constante, aangename warmte af.
            </p>
            <p>
              De keuze voor het juiste kachelhout maakt een groot verschil.
              Zachthout zoals dennen of sparren brandt snel op en veroorzaakt
              veel vonken en harsaanslag in je schoorsteen. Hardhout — zoals het
              eiken-, beuken- en essenhout dat wij leveren — brandt
              gelijkmatiger, langer en schoner. Je houtkachel blijft langer warm
              en je schoorsteen blijft schoner.
            </p>
            <p>
              Het vochtpercentage van je kachelhout is cruciaal. Nat hout (meer
              dan 25% vocht) brandt slecht, geeft veel rook en creosoot — dat
              kan gevaarlijk zijn voor je schoorsteen. Ons{" "}
              <strong>ovengedroogd kachelhout</strong> heeft minder dan 20%
              vocht en is direct klaar om te stoken. Liever zelf drogen? Kies
              dan voor ons halfdroog hout en laat het nog een seizoen liggen
              onder een afdak.
            </p>
            <p>
              Al ons kachelhout is gezaagd en gekloofd op een handig formaat van
              circa 25 cm. Past in vrijwel elke houtkachel, van kleine
              speksteenkachels tot grote vrijstaande modellen. Bestel
              eenvoudig online en wij bezorgen bij je thuis — vanuit Middelbeers
              door heel Nederland.
            </p>
            <p>
              Heb je hulp nodig bij het kiezen? Neem gerust{" "}
              <Link
                href="https://wa.me/31682091984?text=Hallo%2C%20ik%20heb%20een%20vraag%20over%20kachelhout"
                className="text-orange-600 hover:underline font-medium"
              >
                contact op via WhatsApp
              </Link>
              . We denken graag met je mee over welk type kachelhout het beste
              past bij jouw houtkachel.
            </p>
          </div>
        </div>
      </section>

      {/* Tips sectie */}
      <section className="border-y bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Tips voor het stoken van kachelhout
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border">
                <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center mb-4">
                  <Thermometer className="h-5 w-5 text-amber-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  Controleer het vocht
                </h3>
                <p className="text-stone-600 text-sm">
                  Gebruik een vochtmeter om te checken of je kachelhout droog
                  genoeg is. Onder 20% is ideaal. Ons ovengedroogd hout zit
                  altijd onder deze grens.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <div className="h-10 w-10 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                  <Droplets className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  Sla droog op
                </h3>
                <p className="text-stone-600 text-sm">
                  Bewaar je kachelhout op een droge, goed geventileerde plek.
                  Leg het hout niet direct tegen een muur aan — laat er lucht
                  tussenkomen. Een houtopslag met dak is ideaal.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center mb-4">
                  <TreeDeciduous className="h-5 w-5 text-green-600" />
                </div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  Stook van boven
                </h3>
                <p className="text-stone-600 text-sm">
                  Steek je kachel aan met de &quot;top-down&quot; methode:
                  dikke blokken onder, dunnere erboven met aanmaakhout. Dit
                  zorgt voor een schonere verbranding.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Producten */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Ons assortiment kachelhout
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showDeliveryBadge />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Bezorgkosten berekenen?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bereken direct wat de bezorging van kachelhout naar jouw adres kost.
            Wij bezorgen door heel Nederland.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Bezorgkosten berekenen
            </Link>
            <Link
              href="/veelgestelde-vragen"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 font-medium"
            >
              Veelgestelde vragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
