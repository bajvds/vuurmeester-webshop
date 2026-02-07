import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Flame, Truck, Shield, Clock } from "lucide-react";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Brandhout kopen | Premium kwaliteit",
  description:
    "Brandhout kopen bij De Vuurmeester. Ovengedroogd en halfdroog brandhout, bezorgd door heel Nederland. Scherpe prijzen, persoonlijke service.",
  openGraph: {
    title: "Brandhout kopen | Premium kwaliteit | De Vuurmeester",
    description:
      "Brandhout kopen bij De Vuurmeester. Ovengedroogd en halfdroog brandhout, bezorgd door heel Nederland.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "Brandhout kopen bij De Vuurmeester",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/brandhout",
  },
};

export default async function BrandhoutPage() {
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
              Brandhout kopen bij De Vuurmeester
            </h1>
          </div>
          <div className="prose prose-stone max-w-3xl text-stone-600 space-y-4">
            <p>
              Op zoek naar kwalitatief brandhout? Bij De Vuurmeester koop je
              premium brandhout dat direct klaar is om te stoken. Of je nu een
              open haard, houtkachel of inzethaard hebt — wij leveren het juiste
              hout voor elke situatie.
            </p>
            <p>
              Veel mensen zoeken op brandhout, openhaardhout of haardhout — het
              is allemaal hetzelfde product. Bij ons krijg je altijd hardhout van
              de beste kwaliteit, afkomstig van loofbomen zoals eik, beuk en es.
              Hardhout brandt langer, geeft meer warmte af en produceert minder
              rook dan zachthout.
            </p>
            <p>
              Vanuit ons depot in Middelbeers (Noord-Brabant) bezorgen we door
              heel Nederland. We bieden twee varianten aan:{" "}
              <strong>ovengedroogd brandhout</strong> met minder dan 20% vocht
              dat je direct kunt stoken, en <strong>halfdroog brandhout</strong>{" "}
              dat nog enkele maanden moet drogen maar voordeliger geprijsd is.
              Beide varianten worden los gestort geleverd — zo kun je het zelf
              netjes opstapelen.
            </p>
            <p>
              Wat ons onderscheidt? Persoonlijke service. Je krijgt altijd een
              van onze vaste bezorgers aan de deur. Geen anonieme pallet op de
              stoep, maar een vriendelijk gezicht dat het hout precies brengt
              waar jij het wilt hebben. We bellen altijd vooraf om een
              bezorgmoment af te spreken dat jou uitkomt.
            </p>
            <p>
              Onze prijzen zijn scherp en transparant. Geen verborgen kosten of
              verrassingen achteraf. Bereken direct je{" "}
              <Link
                href="/bezorgkosten"
                className="text-orange-600 hover:underline font-medium"
              >
                bezorgkosten
              </Link>{" "}
              en bestel vandaag nog je brandhout.
            </p>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="border-y bg-stone-50">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-3">
              <Truck className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-sm text-stone-700">
                Bezorgd door heel NL
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Flame className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-sm text-stone-700">
                Direct te stoken
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Shield className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-sm text-stone-700">
                Premium hardhout
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-orange-500 shrink-0" />
              <span className="text-sm text-stone-700">
                Bezorgafspraak op maat
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Producten */}
      <section className="bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Ons assortiment brandhout
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showDeliveryBadge />
            ))}
          </div>
        </div>
      </section>

      {/* Info sectie */}
      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-stone-900 mb-6">
            Waarom kiezen voor premium brandhout?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-2">
                Langere brandtijd
              </h3>
              <p className="text-stone-600 text-sm">
                Hardhout heeft een hogere dichtheid dan zachthout. Daardoor
                brandt het langer en hoef je minder vaak bij te vullen. Eén
                lading brandhout van De Vuurmeester gaat dan ook een stuk langer
                mee.
              </p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-2">
                Meer warmte
              </h3>
              <p className="text-stone-600 text-sm">
                Door de hogere calorische waarde van hardhout krijg je meer
                warmte per blok. Ideaal voor het verwarmen van je woonkamer op
                koude winteravonden.
              </p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-2">
                Minder rook en roet
              </h3>
              <p className="text-stone-600 text-sm">
                Goed gedroogd brandhout produceert aanzienlijk minder rook,
                roet en fijnstof. Beter voor het milieu en voor je schoorsteen.
              </p>
            </div>
            <div className="bg-stone-50 rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-2">
                Schoon en handzaam
              </h3>
              <p className="text-stone-600 text-sm">
                Ons brandhout is gezaagd en gekloofd op een handige maat van
                circa 25 cm. Geschikt voor elke houtkachel, open haard of
                inzethaard.
              </p>
            </div>
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
            Bereken direct wat de bezorging van brandhout naar jouw adres kost.
            Vanaf €20 in de buurt van ons depot.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium"
            >
              Bezorgkosten berekenen
            </Link>
            <Link
              href="/haardhout-bezorgen"
              className="inline-flex items-center justify-center px-6 py-3 bg-stone-700 text-white rounded-lg hover:bg-stone-600 font-medium"
            >
              Bekijk bezorgregio&apos;s
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
