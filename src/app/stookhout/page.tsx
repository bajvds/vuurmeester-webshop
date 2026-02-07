import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Flame, CheckCircle, Truck, Phone } from "lucide-react";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Stookhout kopen | Ovengedroogd & halfdroog",
  description:
    "Stookhout kopen bij De Vuurmeester. Premium ovengedroogd en halfdroog stookhout, bezorgd aan huis. Scherpe prijzen, persoonlijke service door heel Nederland.",
  openGraph: {
    title: "Stookhout kopen | Ovengedroogd & halfdroog | De Vuurmeester",
    description:
      "Stookhout kopen bij De Vuurmeester. Premium ovengedroogd en halfdroog stookhout, bezorgd aan huis.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "Stookhout kopen bij De Vuurmeester",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/stookhout",
  },
};

export default async function StookhoutPage() {
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
              Stookhout kopen bij De Vuurmeester
            </h1>
          </div>
          <div className="prose prose-stone max-w-3xl text-stone-600 space-y-4">
            <p>
              Stookhout kopen doe je bij De Vuurmeester. Wij leveren premium
              hardhout dat geschikt is voor elke toepassing: open haard,
              houtkachel, inzethaard of buitenhaard. Ons stookhout komt van
              loofbomen zoals eik, beuk en es — houtsoorten die bekend staan om
              hun uitstekende brandkwaliteit.
            </p>
            <p>
              Bij ons kies je uit twee varianten. Ons{" "}
              <strong>ovengedroogd stookhout</strong> is gedroogd in
              professionele droogcellen tot onder de 20% restvochtgehalte. Dit
              betekent direct stoken zonder gedoe: geen overmatige rook, geen
              condensvorming in je schoorsteen en maximale warmteafgifte. Ideaal
              als je dit seizoen nog wilt stoken.
            </p>
            <p>
              Wil je voordeliger uit zijn? Dan is ons{" "}
              <strong>halfdroog stookhout</strong> een uitstekende keuze. Dit
              hout heeft een vochtgehalte tussen de 20% en 35% en moet nog een
              aantal maanden drogen voordat je het stookt. Bestel het in het
              voorjaar of de zomer en je hebt tegen de winter perfect droog
              stookhout klaarliggen.
            </p>
            <p>
              Vanuit ons depot in Middelbeers bezorgen we door heel Nederland.
              Of je nu in Brabant, Zuid-Holland, Gelderland of verder woont — wij
              komen het brengen. Het stookhout wordt los gestort afgeleverd, zodat
              jij het zelf op de gewenste plek kunt opstapelen. We spreken altijd
              vooraf een bezorgmoment af.
            </p>
            <p>
              Benieuwd wat de bezorging kost?{" "}
              <Link
                href="/bezorgkosten"
                className="text-orange-600 hover:underline font-medium"
              >
                Bereken hier je bezorgkosten
              </Link>{" "}
              of bekijk onze{" "}
              <Link
                href="/haardhout-bezorgen"
                className="text-orange-600 hover:underline font-medium"
              >
                bezorgregio&apos;s
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Voordelen */}
      <section className="border-y bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Waarom stookhout van De Vuurmeester?
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "100% hardhout",
                  text: "Wij leveren uitsluitend stookhout van loofbomen. Geen zachthout of restmateriaal, maar eersteklas eik, beuk en es.",
                },
                {
                  title: "Gegarandeerd droog",
                  text: "Ons ovengedroogd stookhout is professioneel gedroogd tot minder dan 20% vochtgehalte. Gecontroleerd en gegarandeerd.",
                },
                {
                  title: "Los gestort geleverd",
                  text: "Geen dure verpakkingen of pallets. Wij leveren los gestort zodat jij het zelf netjes kunt opstapelen waar je wilt.",
                },
                {
                  title: "Persoonlijke bezorging",
                  text: "Geen transportbedrijf, maar onze eigen bezorgers. We bellen vooraf, spreken een tijdstip af en brengen het hout precies waar jij het hebben wilt.",
                },
                {
                  title: "Scherpe prijs per kuub",
                  text: "Door groot in te kopen en zelf te bezorgen houden we de prijzen scherp. Bekijk ons assortiment voor de actuele prijzen per kubieke meter.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 bg-white rounded-xl p-5 border"
                >
                  <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-stone-900">
                      {item.title}
                    </h3>
                    <p className="text-stone-600 text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Producten */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">
            Ons assortiment stookhout
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showDeliveryBadge />
            ))}
          </div>
        </div>
      </section>

      {/* Hoe werkt het */}
      <section className="bg-stone-50 border-t py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8 text-center">
              Stookhout bestellen in 3 stappen
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  icon: Flame,
                  title: "Kies je stookhout",
                  text: "Selecteer ovengedroogd of halfdroog hout en het aantal kuub dat je nodig hebt.",
                },
                {
                  step: "2",
                  icon: Phone,
                  title: "We nemen contact op",
                  text: "Na je bestelling bellen we je om een bezorgdag en -tijd af te spreken.",
                },
                {
                  step: "3",
                  icon: Truck,
                  title: "Bezorgd aan huis",
                  text: "We bezorgen het stookhout los gestort op de afgesproken plek bij jou thuis.",
                },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="h-12 w-12 rounded-full bg-orange-500 text-white flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-stone-600 text-sm">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-stone-900 py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Stookhout nodig?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bekijk ons assortiment en bestel vandaag nog. Wij bezorgen door heel
            Nederland.
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
