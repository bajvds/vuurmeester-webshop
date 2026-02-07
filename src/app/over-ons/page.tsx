import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, MapPin, Users, Truck, Heart, MessageCircle, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer De Vuurmeester kennen. Premium haardhout uit Middelbeers, Brabant. Persoonlijk contact en de beste prijs gegarandeerd.",
  openGraph: {
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Over ons",
      },
    ],
  },
};

export default function OverOnsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link
            href="/"
            className="inline-flex items-center text-sm text-stone-600 hover:text-orange-600 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar home
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Haardhout met een{" "}
              <span className="text-orange-400">persoonlijke touch</span>
            </h1>
            <p className="text-xl text-stone-300 leading-relaxed">
              Wij zijn De Vuurmeester. Vanuit Middelbeers leveren wij premium
              haardhout door heel Nederland. Geen call centers, geen
              wachttijden, gewoon persoonlijk contact via WhatsApp.
            </p>
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-stone-900 mb-6">
                Ons verhaal
              </h2>
              <div className="space-y-4 text-stone-600">
                <p>
                  De Vuurmeester begon vanuit een simpele gedachte: waarom zou
                  je te veel betalen voor haardhout? En waarom zou je weken
                  moeten wachten op een antwoord?
                </p>
                <p>
                  Vanuit ons depot in Middelbeers, in het hart van Brabant,
                  leveren wij inmiddels door heel Nederland. Niet omdat we zo
                  graag groot willen worden, maar omdat klanten ons doorvertellen.
                </p>
                <p>
                  <strong className="text-stone-900">En daar zijn we trots op.</strong>
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-orange-50 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-6xl mb-4">🪵</div>
                  <p className="text-stone-600 italic">
                    &ldquo;Goedkoop én goed. Daar gaan we voor.&rdquo;
                  </p>
                </div>
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-2">
                  <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  <span className="font-bold text-stone-900">65+</span>
                  <span className="text-stone-600 text-sm">reviews</span>
                </div>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                Persoonlijk
              </h3>
              <p className="text-stone-600">
                Geen formulieren of wachtrijen. Direct contact via WhatsApp.
                Binnen een paar uur heb je antwoord.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                Heel Nederland
              </h3>
              <p className="text-stone-600">
                Van Middelbeers tot Groningen. Wij leveren overal. En niet voor
                een gekke prijs.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-orange-500" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900 mb-2">
                Eerlijk
              </h3>
              <p className="text-stone-600">
                Geen verborgen kosten. Geen kleine lettertjes. Wat je ziet is
                wat je krijgt.
              </p>
            </div>
          </div>

          {/* Location */}
          <div className="bg-stone-50 rounded-2xl p-8 lg:p-12">
            <div className="flex items-start gap-4 mb-6">
              <MapPin className="h-6 w-6 text-orange-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-stone-900 mb-2">
                  Ons depot
                </h2>
                <p className="text-stone-600">
                  Middelbeers, Noord-Brabant
                </p>
              </div>
            </div>
            <p className="text-stone-600 mb-6">
              Vanuit ons depot in Middelbeers bedienen wij heel Nederland.
              De centrale ligging zorgt ervoor dat we overal snel kunnen
              leveren tegen scherpe tarieven.
            </p>
            <div className="bg-white rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-3">
                Waarom leveren we zo goedkoop?
              </h3>
              <ul className="space-y-2 text-stone-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  Eigen transport via Sande Logistics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  Directe inkoop bij leveranciers
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  Efficiënte routes door slimme planning
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500">✓</span>
                  Geen dure showroom of kantoor
                </li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Zin in een bakkie koffie?
            </h2>
            <p className="text-stone-600 mb-6">
              Vragen, opmerkingen of gewoon een praatje maken?
              We horen graag van je!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
                <a
                  href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  WhatsApp ons
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/">
                  Bekijk ons assortiment
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
