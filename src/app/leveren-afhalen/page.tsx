import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  Truck,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Leveren & Afhalen",
  description:
    "Informatie over bezorging en afhalen van haardhout bij De Vuurmeester in Middelbeers, Noord-Brabant.",
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/leveren-afhalen",
  },
};

export default function LeverenAfhalenPage() {
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
      <section className="relative text-white">
        <Image
          src="/images/hero-leveren-afhalen.jpg"
          alt="Haardhout bezorging door De Vuurmeester"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-16 md:py-24 text-center">
          <Truck className="h-16 w-16 mx-auto mb-4 text-orange-400" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Leveren & Afhalen
          </h1>
          <p className="text-lg text-stone-300 max-w-2xl mx-auto">
            Wij bezorgen door heel Nederland vanuit ons depot in Middelbeers.
            Liever zelf ophalen? Dat kan ook!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Bezorging */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-100 rounded-xl">
                <Truck className="h-6 w-6 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">Bezorging</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-semibold text-stone-900 mb-4">
                  Hoe werkt het?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">Bestellen</p>
                      <p className="text-sm text-stone-600">
                        Plaats je bestelling via de webshop of WhatsApp.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">
                        Bezorgafspraak
                      </p>
                      <p className="text-sm text-stone-600">
                        Wij nemen contact op om een datum en tijdstip af te
                        spreken dat jou uitkomt.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-medium">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">Levering</p>
                      <p className="text-sm text-stone-600">
                        De chauffeur belt je vlak voor aankomst. Het hout wordt
                        op de afgesproken plek afgeleverd.
                      </p>
                    </div>
                  </li>
                </ol>
              </div>

              <div className="space-y-4">
                <div className="bg-stone-50 rounded-xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-3">
                    Levertijd
                  </h3>
                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-600 text-sm">
                      Bestellingen worden binnen <strong>5-10 werkdagen</strong>{" "}
                      geleverd. De exacte datum stemmen we altijd vooraf met je
                      af.
                    </p>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-3">
                    Transport
                  </h3>
                  <div className="flex items-start gap-3">
                    <Truck className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-600 text-sm">
                      Bezorging via <strong>Sande Logistics</strong> met
                      aanhanger en/of bakwagen. Het hout wordt{" "}
                      <strong>losgestort</strong> op de door jou aangegeven plek.
                    </p>
                  </div>
                </div>

                <div className="bg-stone-50 rounded-xl p-6">
                  <h3 className="font-semibold text-stone-900 mb-3">
                    Afleverplek
                  </h3>
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <p className="text-stone-600 text-sm">
                      Op je oprit, in de tuin of bij de schuur — mits
                      bereikbaar met onze bus/aanhanger.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bezorggebied */}
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
              <h3 className="font-semibold text-stone-900 mb-3">
                Bezorggebied
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <ul className="space-y-2 text-sm text-stone-700">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      Heel Nederland
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      Lage kosten in de regio Brabant
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      Vast tarief rond Middelbeers
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-3 items-start">
                  <Button asChild className="bg-orange-500 hover:bg-orange-600">
                    <Link href="/bezorgkosten">
                      Bereken je bezorgkosten
                    </Link>
                  </Button>
                  <Link
                    href="/haardhout-bezorgen"
                    className="text-sm text-orange-600 hover:underline font-medium"
                  >
                    Bekijk alle bezorgregio&apos;s →
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Afhalen */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-green-100 rounded-xl">
                <MapPin className="h-6 w-6 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold text-stone-900">
                Zelf afhalen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-yellow-800 font-medium">
                    Afhalen is uitsluitend mogelijk op afspraak. Maak vooraf een afspraak via WhatsApp zodat we je bestelling kunnen klaarzetten.
                  </p>
                </div>

                <p className="text-stone-700 mb-6">
                  Liever zelf ophalen? Dat kan! Ons depot is gevestigd in
                  Middelbeers, Noord-Brabant.
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">Adres</p>
                      <p className="text-stone-600">
                        Industrieweg 5b
                        <br />
                        5091 BG Middelbeers
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">
                        Openingstijden
                      </p>
                      <p className="text-stone-600">
                        Alleen op afspraak — neem vooraf contact op via WhatsApp
                        om een datum en tijd te plannen.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Phone className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-stone-900">Contact</p>
                      <p className="text-stone-600">06 82 09 19 84</p>
                      <p className="text-stone-600">
                        contact@vuurmeester-haardhout.nl
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-semibold text-stone-900 mb-4">
                  Hoe werkt afhalen?
                </h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
                      1
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">
                        Maak een afspraak
                      </p>
                      <p className="text-sm text-stone-600">
                        Stuur een WhatsApp bericht om een afhaaldatum en -tijd af
                        te spreken. Zonder afspraak is afhalen niet mogelijk.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
                      2
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">Kom langs</p>
                      <p className="text-sm text-stone-600">
                        Rij naar ons depot op de Industrieweg in Middelbeers. Wij
                        helpen je met laden.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-medium">
                      3
                    </span>
                    <div>
                      <p className="font-medium text-stone-900">Betaal & ga</p>
                      <p className="text-sm text-stone-600">
                        Betaal ter plekke met pin of contant en neem je haardhout
                        direct mee.
                      </p>
                    </div>
                  </li>
                </ol>

                <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                  <p className="text-sm text-yellow-800">
                    <strong>Let op:</strong> Afhalen is alleen mogelijk met een aanhanger.
                    1 m&#179; haardhout weegt zo&apos;n 400-500 kg.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Google Maps */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Routebeschrijving
            </h2>
            <div className="rounded-xl overflow-hidden border border-stone-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2490.5!2d5.2490935!3d51.4732438!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48a1fd8b37f42391%3A0x22e65a58f448263e!2sDe%20Vuurmeester%20Haardhout!5e0!3m2!1snl!2snl!4v1707220000000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="De Vuurmeester Haardhout locatie"
              />
            </div>
            <p className="text-sm text-stone-500 mt-3 text-center">
              Industrieweg 5b, 5091 BG Middelbeers — Gemeente Oirschot,
              Noord-Brabant
            </p>
          </section>

          {/* CTA */}
          <div className="bg-stone-900 text-white rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-bold mb-3">
              Vragen over bezorging of afhalen?
            </h2>
            <p className="text-stone-300 mb-6">
              Neem contact met ons op via WhatsApp. We reageren snel en helpen
              je graag!
            </p>
            <Button
              asChild
              size="lg"
              className="bg-green-500 hover:bg-green-600"
            >
              <a
                href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20de%20bezorging."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp ons
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
