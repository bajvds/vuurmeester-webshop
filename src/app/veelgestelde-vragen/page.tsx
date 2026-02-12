import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over haardhout, bezorging, droogtijd en meer.",
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/veelgestelde-vragen",
  },
  openGraph: {
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Veelgestelde vragen",
      },
    ],
  },
};

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqData: FAQCategory[] = [
  {
    title: "Bezorging & Levering",
    items: [
      {
        question: "Wat zijn de bezorgkosten?",
        answer:
          "De bezorgkosten zijn afhankelijk van de hoeveelheid en je locatie. Bij grotere bestellingen zijn de kosten per m\u00B3 lager. Bereken je exacte bezorgkosten op onze bezorgkosten-pagina of bij het afrekenen door je postcode in te vullen.",
      },
      {
        question: "Hoe wordt het haardhout geleverd?",
        answer:
          "De Vuurmeester levert haardhout losgestort met een aanhanger en/of bakwagen. Wij bezorgen het op de door jou aangegeven plek, mits bereikbaar. Dit kan je oprit, tuin of bij de schuur zijn. Niet door smalle doorgangen of trappen.",
      },
      {
        question: "Bezorgen jullie door heel Nederland?",
        answer:
          "Ja! Wij bezorgen door heel Nederland via Sande Logistics. Vanuit ons depot in Middelbeers, Brabant, leveren we betrouwbaar en snel door het hele land.",
      },
      {
        question: "Hoe snel wordt mijn bestelling bezorgd?",
        answer:
          "Bestellingen worden binnen 5-10 werkdagen geleverd. De exacte datum en tijd stemmen we vooraf met je af. De chauffeur belt je vlak voordat hij arriveert.",
      },
      {
        question: "Kan ik het haardhout ook zelf ophalen?",
        answer:
          "Ja, ophalen is mogelijk op afspraak. Neem vooraf contact met ons op via WhatsApp zodat we je kunnen helpen.",
      },
    ],
  },
  {
    title: "Haardhout & Kwaliteit",
    items: [
      {
        question: "Wat voor soort hout bieden jullie aan?",
        answer:
          "Wij bieden een stevige mix van eiken-, beuken- en essenhout aan, met een vleugje populierenhout (10%). Dit zorgt voor een krachtige, langdurige verbranding. Daarnaast hebben we speciaal beukenhout voor OFYR en buitenkeukens.",
      },
      {
        question: "Is het haardhout ovengedroogd of luchtgedroogd?",
        answer: `In de zomer maken wij gebruik van natuurlijke windkracht om het hout te drogen. In de wintermaanden gebruiken we ovendroging voor een constante kwaliteit het hele jaar door.

**Ovengedroogd haardhout** (< 18% vocht):
\u2022 Direct te gebruiken, brandt optimaal
\u2022 Minder rook en roetvorming
\u2022 Ideaal als je weinig opslagruimte hebt

**Halfdroog / vers haardhout** (20-35% vocht):
\u2022 Moet nog 6-12 maanden drogen
\u2022 Voordeliger in prijs
\u2022 Na het drogen dezelfde kwaliteit als ovengedroogd`,
      },
      {
        question: "Wat is het vochtpercentage van het hout bij levering?",
        answer:
          "Het vochtpercentage staat vermeld per product. Bij ovengedroogd hout ligt dit onder de 18%, bij halfdroog hout tussen de 20-35%. Heb je vragen over een specifieke batch? Neem dan contact met ons op.",
      },
      {
        question: "Hoe groot zijn de houtblokken?",
        answer:
          "Onze blokken zijn gezaagd op een lengte van 25 tot 30 cm. Dit formaat past in de meeste houtkachels en open haarden en zorgt voor een gelijkmatige verbranding.",
      },
      {
        question: "Hoeveel m\u00B3 is een losgestorte m\u00B3 gestapeld?",
        answer:
          "Een losgestorte m\u00B3 is circa 0,67 m\u00B3 gestapeld. Oftewel: als je 10 m\u00B3 losgestort bestelt, heb je ongeveer 6,7 m\u00B3 als je het netjes opstapelt.",
      },
      {
        question: "Hoeveel m\u00B3 heb ik nodig voor een heel seizoen?",
        answer:
          "Dit hangt af van hoe vaak je stookt en hoe groot je haard is. Gemiddeld verbruikt een huishouden 2-4 m\u00B3 per seizoen bij regelmatig stoken. Een vrijstaand huis met houtkachel als hoofdverwarming kan wel 6-8 m\u00B3 nodig hebben.",
      },
    ],
  },
  {
    title: "Bestellen & Betalen",
    items: [
      {
        question: "Hoe kan ik bestellen?",
        answer:
          "Je kunt eenvoudig bestellen via onze webshop. Kies je product, voeg het toe aan je winkelwagen en volg de stappen om af te rekenen. Je kunt ook bestellen via WhatsApp.",
      },
      {
        question: "Moet ik vooraf betalen?",
        answer:
          "Nee, vooraf betalen is niet verplicht. Je kunt betalen bij levering of via iDEAL bij het afrekenen.",
      },
      {
        question: "Kan ik pinnen bij levering?",
        answer:
          "Ja, je kunt bij levering pinnen. Dit maakt het afrekenen makkelijk en snel.",
      },
      {
        question: "Welke betaalmethoden accepteren jullie?",
        answer:
          "Wij accepteren iDEAL, pinnen bij levering en contante betaling.",
      },
      {
        question: "Kan ik mijn bestelling wijzigen of annuleren?",
        answer:
          "Neem zo snel mogelijk contact met ons op via WhatsApp. Als het hout nog niet is verzonden, kunnen we je bestelling meestal nog aanpassen of annuleren.",
      },
      {
        question: "Krijg ik een factuur?",
        answer:
          "Ja, je ontvangt automatisch een factuur per e-mail na je bestelling.",
      },
    ],
  },
  {
    title: "Big Bags & Verpakking",
    items: [
      {
        question: "Wat is een big bag?",
        answer:
          "Een big bag is een grote, stevige zak waarin we het haardhout leveren. Dit maakt het makkelijk om te lossen en het hout droog te houden. Na gebruik kun je de big bag houden voor opslag of weggooien.",
      },
      {
        question: "Hoeveel zit er in een big bag?",
        answer:
          "Onze big bags bevatten standaard 1 m\u00B3 gestapeld haardhout. Dit is ongeveer 400-500 kg, afhankelijk van de houtsoort en het vochtgehalte.",
      },
      {
        question: "Kan ik het hout ook los geleverd krijgen?",
        answer:
          "Ja, bij grotere bestellingen kunnen we het hout ook los kiepen. Neem contact met ons op om de mogelijkheden te bespreken.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  return (
    <details className="group border-b border-stone-200 last:border-0">
      <summary className="flex items-center justify-between py-4 cursor-pointer list-none hover:text-orange-600 transition-colors">
        <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">
          {item.question}
        </span>
        <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
      </summary>
      <div className="pb-4 pr-8">
        <div
          className="prose prose-stone prose-sm max-w-none text-stone-600"
          style={{ whiteSpace: "pre-line" }}
        >
          {item.answer.split("**").map((part, i) =>
            i % 2 === 1 ? (
              <strong key={i} className="text-stone-900">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </div>
      </div>
    </details>
  );
}

function getFAQStructuredData() {
  const allItems = faqData.flatMap((cat) => cat.items);
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: allItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer.replace(/\*\*/g, "").replace(/•/g, "-"),
      },
    })),
  };
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getFAQStructuredData()),
        }}
      />
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

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-4">
            Veelgestelde vragen
          </h1>
          <p className="text-lg text-stone-600 mb-12">
            Hier vind je antwoorden op de meest gestelde vragen. Staat je vraag
            er niet bij? Neem dan gerust contact met ons op!
          </p>

          {/* FAQ Categories */}
          <div className="space-y-12">
            {faqData.map((category) => (
              <section key={category.title}>
                <h2 className="text-xl font-semibold text-stone-900 mb-4 pb-2 border-b-2 border-orange-500">
                  {category.title}
                </h2>
                <div>
                  {category.items.map((item) => (
                    <FAQAccordion key={item.question} item={item} />
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Bezorgregio's link */}
          <div className="mt-12 bg-orange-50 border border-orange-200 rounded-xl p-6">
            <h3 className="font-semibold text-stone-900 mb-2">
              Bezorgkosten per stad bekijken?
            </h3>
            <p className="text-sm text-stone-600 mb-3">
              Bekijk de bezorgkosten en levertijden voor jouw stad of regio.
            </p>
            <Link
              href="/haardhout-bezorgen"
              className="inline-flex items-center text-sm text-orange-600 hover:underline font-medium"
            >
              Bekijk alle bezorgregio&apos;s →
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="mt-16 bg-stone-50 rounded-2xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-900 mb-2">
              Vraag niet beantwoord?
            </h3>
            <p className="text-stone-600 mb-6">
              Geen probleem! Stuur ons een WhatsApp bericht en we helpen je
              graag verder.
            </p>
            <a
              href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20die%20niet%20in%20de%20FAQ%20staat."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <MessageCircle className="h-5 w-5 mr-2" />
              WhatsApp ons
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
