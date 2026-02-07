import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Flame, Sparkles, Heart, Shield } from "lucide-react";
import { getHaardhoutProducts } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = {
  title: "Openhaardhout kopen | Sfeer in huis",
  description:
    "Openhaardhout kopen? Premium haardhout voor je open haard, ovengedroogd voor direct stoken. Bezorging heel Nederland. Persoonlijke service van De Vuurmeester.",
  openGraph: {
    title: "Openhaardhout kopen | Sfeer in huis | De Vuurmeester",
    description:
      "Openhaardhout kopen? Premium haardhout voor je open haard, ovengedroogd voor direct stoken.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "Openhaardhout kopen bij De Vuurmeester",
      },
    ],
  },
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/openhaardhout",
  },
};

export default async function OpenhaardhoutPage() {
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
              Openhaardhout kopen voor je open haard
            </h1>
          </div>
          <div className="prose prose-stone max-w-3xl text-stone-600 space-y-4">
            <p>
              Er gaat niets boven een knapperend haardvuur op een koude
              winteravond. Met het openhaardhout van De Vuurmeester creëer je die
              perfecte sfeer in huis. Ons hout is speciaal geselecteerd voor
              gebruik in open haarden: het brandt rustig, geeft een prachtig
              vlammenspel en verspreidt een heerlijke warmte door je woonkamer.
            </p>
            <p>
              Voor open haarden is de kwaliteit van je hout extra belangrijk.
              Een open haard heeft geen gesloten verbrandingskamer zoals een
              kachel, waardoor je direct contact hebt met het vuur. Daarom is
              het essentieel dat je hout goed droog is. Nat hout spat en vonkt
              meer, geeft meer rook af en zorgt voor minder warmte. Ons{" "}
              <strong>ovengedroogd openhaardhout</strong> is gedroogd tot onder
              de 20% vocht — perfect voor een schone, veilige verbranding in je
              open haard.
            </p>
            <p>
              Wij leveren uitsluitend hardhout van loofbomen. Eikenhout geeft
              een langdurige, constante gloed. Beukenhout brandt met een mooi
              helder vlambeeld. Essenhout combineert het beste van beide:
              goede warmteafgifte met een aantrekkelijk vuurbeeld. De mix van
              houtsoorten die je bij ons krijgt, zorgt voor een gevarieerd en
              sfeervol haardvuur.
            </p>
            <p>
              Ons openhaardhout wordt los gestort bezorgd. De blokken zijn
              gezaagd op circa 25 cm — een maat die in vrijwel elke open haard
              past. Heb je een extra brede haard? Laat het ons weten, dan
              kijken we naar langere blokken. Vanuit Middelbeers bezorgen we
              persoonlijk door heel Nederland, van Noord-Brabant tot aan
              Noord-Holland.
            </p>
            <p>
              Tip: combineer je openhaardhout met onze{" "}
              <Link
                href="/"
                className="text-orange-600 hover:underline font-medium"
              >
                aanmaakproducten
              </Link>{" "}
              voor een moeiteloos vuur. En vergeet niet om je schoorsteen
              jaarlijks te laten vegen voor een veilig stookseizoen.
            </p>
          </div>
        </div>
      </section>

      {/* Sfeer vs Warmte */}
      <section className="border-y bg-stone-50 py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-stone-900 mb-8">
              Het perfecte haardvuur
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-amber-100 flex items-center justify-center">
                    <Sparkles className="h-5 w-5 text-amber-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900">
                    Sfeer &amp; vlammenspel
                  </h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Een open haard draait om sfeer. Hardhout brandt langzamer dan
                  zachthout en geeft een rustiger vlambeeld. Beukenhout staat
                  bekend om zijn mooie, heldere vlammen. Combineer met een of
                  twee blokken eik voor een langdurige gloed als het vuur
                  uitgaat.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-orange-100 flex items-center justify-center">
                    <Flame className="h-5 w-5 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900">
                    Warmte &amp; efficiëntie
                  </h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Hoewel een open haard minder efficiënt is dan een gesloten
                  kachel, kun je het rendement verbeteren met goed droog hout. Ons
                  ovengedroogd hout geeft tot 30% meer warmte af dan nat hout,
                  simpelweg omdat er geen energie verloren gaat aan het verdampen
                  van water.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                  <h3 className="font-semibold text-stone-900">
                    Geur &amp; beleving
                  </h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Het knapperend geluid van een haardvuur, de zachte warmte op
                  je gezicht, de subtiele geur van verbrand hout — het zijn
                  deze kleine details die een avond bij de open haard zo
                  bijzonder maken. Goed hout maakt het verschil.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 border">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-10 w-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-stone-900">
                    Veilig stoken
                  </h3>
                </div>
                <p className="text-stone-600 text-sm">
                  Droog hardhout vonkt minder dan zachthout of nat hout. Dat is
                  extra belangrijk bij een open haard zonder deur. Gebruik altijd
                  een vonkenscherm en zorg dat je schoorsteen schoon is.
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
            Ons assortiment openhaardhout
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
            Klaar voor een sfeervol haardvuur?
          </h2>
          <p className="text-stone-300 mb-6 max-w-lg mx-auto">
            Bestel je openhaardhout online en wij bezorgen het bij je thuis.
            Bereken eerst je bezorgkosten.
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
