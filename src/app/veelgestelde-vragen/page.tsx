import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, MessageCircle, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Veelgestelde vragen",
  description:
    "Antwoorden op de meest gestelde vragen over haardhout, bezorging, droogtijd en meer.",
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
        answer: `Onze bezorgkosten zijn afhankelijk van je locatie:

• **Middelbeers/Oirschot omgeving (50xx):** €5 - €15
• **Brabant:** €15 - €25
• **Limburg, Gelderland, Zuid-Holland:** €25 - €40
• **Rest van Nederland:** €40 - €85

Je kunt je exacte bezorgkosten berekenen door je postcode in te voeren op de productpagina of bij het afrekenen. Wij leveren door heel Nederland!`,
      },
      {
        question: "Hoe snel wordt mijn bestelling bezorgd?",
        answer:
          "Wij bezorgen doorgaans binnen 1-3 werkdagen na ontvangst van je bestelling. Bij drukte (vooral in de herfst/winter) kan dit iets langer duren. Je ontvangt altijd een bericht wanneer we onderweg zijn.",
      },
      {
        question: "Kan ik een bezorgdatum kiezen?",
        answer:
          "Ja, dat kan! Neem contact met ons op via WhatsApp en we plannen de levering op een moment dat jou uitkomt.",
      },
      {
        question: "Bezorgen jullie ook in België of Duitsland?",
        answer:
          "Op dit moment bezorgen wij alleen binnen Nederland. Voor leveringen dichtbij de grens kun je contact met ons opnemen voor de mogelijkheden.",
      },
      {
        question: "Waar wordt het hout afgeleverd?",
        answer:
          "Wij leveren het hout op de door jou aangegeven plek, mits bereikbaar met onze bus. Dit kan je oprit, tuin of schuur zijn. We tillen het hout niet trappen op of door smalle doorgangen. Laat bij je bestelling even weten waar je het hout wilt hebben.",
      },
    ],
  },
  {
    title: "Haardhout & Kwaliteit",
    items: [
      {
        question: "Wat is het verschil tussen ovengedroogd en halfdroog haardhout?",
        answer: `**Ovengedroogd haardhout** (< 18% vocht):
• Direct te gebruiken
• Brandt optimaal en geeft veel warmte
• Minder rook en roetvorming
• Ideaal als je weinig opslagruimte hebt

**Halfdroog / vers haardhout** (20-35% vocht):
• Moet nog 6-12 maanden drogen
• Voordeliger in prijs
• Ideaal als je opslagruimte hebt
• Na het drogen dezelfde kwaliteit als ovengedroogd`,
      },
      {
        question: "Hoe lang moet halfdroog hout nog drogen?",
        answer:
          "Halfdroog hout moet nog ongeveer 6-12 maanden drogen, afhankelijk van de opslagcondities. Sla het hout gestapeld op onder een afdak met voldoende ventilatie. Het hout is klaar voor gebruik wanneer het vochtpercentage onder de 20% komt.",
      },
      {
        question: "Welke houtsoorten verkopen jullie?",
        answer:
          "Wij verkopen voornamelijk hardhout (eiken, beuken, essen mix). Dit brandt langer en geeft meer warmte dan zachthout. Voor OFYR en andere buitenhaarden hebben we speciaal berkenhout.",
      },
      {
        question: "Hoeveel m³ heb ik nodig voor een heel seizoen?",
        answer:
          "Dit hangt af van hoe vaak je stookt en hoe groot je haard is. Gemiddeld verbruikt een huishouden 2-4 m³ per seizoen bij regelmatig stoken. Een vrijstaand huis met open haard of houtkachel als hoofdverwarming kan wel 6-8 m³ nodig hebben.",
      },
      {
        question: "Wat is het verschil tussen een kuub en een stère?",
        answer:
          "Een kuub (m³) is een gestapelde kuub hout. Een stère is ook een m³, maar dan losgestort. Losgestort hout neemt meer ruimte in door de lucht ertussen. Wij leveren gestapelde kubieke meters.",
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
        question: "Welke betaalmethoden accepteren jullie?",
        answer:
          "Wij accepteren iDEAL, creditcard en bankoverschrijving. Betaling gebeurt bij het afrekenen.",
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
          "Onze big bags bevatten standaard 1 m³ gestapeld haardhout. Dit is ongeveer 400-500 kg, afhankelijk van de houtsoort en het vochtgehalte.",
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

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-white">
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
    </main>
  );
}
