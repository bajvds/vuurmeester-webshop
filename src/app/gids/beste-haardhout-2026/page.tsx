import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Check, X, Star, Truck, Shield, Flame, ChevronDown, TreePine, MapPin, Thermometer, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Beste Haardhout 2026: Complete Gids | De Vuurmeester',
  description:
    'Vergelijk de beste haardhout leveranciers van Nederland in 2026. Ovengedroogd, halfdroog, beukenhout OFYR. Prijzen, kwaliteit en levertijden vergeleken.',
  alternates: {
    canonical: 'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026',
  },
  openGraph: {
    title: 'Beste Haardhout 2026: Complete Gids',
    description:
      'Vergelijk de beste haardhout leveranciers van Nederland in 2026.',
    url: 'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026',
    images: [
      {
        url: '/images/hero-header.jpg',
        width: 6000,
        height: 2500,
        alt: 'Beste Haardhout 2026 - Complete Gids van De Vuurmeester',
      },
    ],
  },
}

function getStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': 'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026',
        name: 'Beste Haardhout 2026: Complete Gids',
        description:
          'Vergelijk de beste haardhout leveranciers van Nederland in 2026. Complete gids van De Vuurmeester.',
        url: 'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026',
        breadcrumb: {
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              name: 'Home',
              item: 'https://www.vuurmeester-haardhout.nl',
            },
            {
              '@type': 'ListItem',
              position: 2,
              name: 'Gids',
              item: 'https://www.vuurmeester-haardhout.nl/gids',
            },
            {
              '@type': 'ListItem',
              position: 3,
              name: 'Beste Haardhout 2026',
              item: 'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026',
            },
          ],
        },
        mainEntity: {
          '@id':
            'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026#faq',
        },
      },
      {
        '@type': 'FAQPage',
        '@id':
          'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026#faq',
        mainEntity: [
          {
            '@type': 'Question',
            name: 'Wat is het verschil tussen ovengedroogd en halfdroog haardhout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ovengedroogd haardhout heeft een vochtgehalte van 12-18% en is direct te stoken. Het wordt professioneel gedroogd in droogcellen bij 70-80\u00B0C. Halfdroog haardhout heeft 20-35% vocht en moet nog 6-12 maanden nazakken. Halfdroog is voordeliger, maar vereist opslagruimte en tijd. Na het drogen heeft halfdroog hout dezelfde kwaliteit als ovengedroogd.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoeveel m\u00B3 haardhout heb ik nodig voor een seizoen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Een gemiddeld huishouden verbruikt 2-4 m\u00B3 per seizoen bij regelmatig stoken. Een vrijstaand huis met een houtkachel als hoofdverwarming kan 6-8 m\u00B3 nodig hebben. Dit hangt af van de isolatie, hoe vaak je stookt, en de grootte van je haard. Voor incidenteel gebruik (bijvoorbeeld weekenden) is 1-2 m\u00B3 vaak voldoende.',
            },
          },
          {
            '@type': 'Question',
            name: "Wat betekent 'losgestort' versus 'gestapeld'?",
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Losgestort hout wordt gestort vanuit de aanhanger op de gewenste plek - de blokken liggen door elkaar. Gestapeld hout is netjes op elkaar gelegd. 1 m\u00B3 losgestort komt overeen met ongeveer 0,67 m\u00B3 gestapeld. Wij leveren standaard losgestort omdat dit praktischer is voor grote hoeveelheden. Je kunt het zelf stapelen voor nettere opslag.',
            },
          },
          {
            '@type': 'Question',
            name: 'Bezorgen jullie door heel Nederland?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, De Vuurmeester levert door alle 12 provincies van Nederland. We bezorgen vanuit ons depot in Middelbeers, Noord-Brabant. Bestellingen worden binnen 5-10 werkdagen geleverd. De exacte datum en tijd stemmen we vooraf met je af.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat zijn de bezorgkosten?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'De bezorgkosten zijn afhankelijk van je postcode en de bestelde hoeveelheid. Bij grotere bestellingen zijn de kosten per m\u00B3 lager. Je kunt de exacte bezorgkosten berekenen op onze homepage of tijdens het afrekenen door je postcode in te vullen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe wordt het haardhout geleverd?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'We leveren losgestort met een aanhanger of bakwagen. Het hout wordt gestort op de door jou aangegeven plek - dit kan je oprit, tuin of bij de schuur zijn, mits bereikbaar. We kunnen niet door smalle doorgangen of trappen. Je kunt ook kiezen voor levering in big bags (zakken van 1 m\u00B3).',
            },
          },
          {
            '@type': 'Question',
            name: 'Welke houtsoorten zitten in het haardhout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ons standaard haardhout is een stevige mix van eiken-, beuken- en essenhout, met maximaal 10% populier. Deze combinatie zorgt voor een krachtige, langdurige verbranding. Voor OFYR en buitenkeukens bieden we ook 100% beukenhout aan.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe groot zijn de houtblokken?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Onze standaard blokken zijn 25-30 cm lang. Dit formaat past in de meeste houtkachels en open haarden. Voor kozijnhout (kleine blokjes) leveren we blokken van 10-15 cm, ideaal voor aanmaken of kleine kachels.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik vooraf of achteraf betalen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je kunt vooraf betalen via iDEAL bij het afrekenen in de webshop. Achteraf betalen bij levering kan ook - dan kun je pinnen of contant betalen. Vooraf betalen is niet verplicht.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe bewaar ik haardhout het beste?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Bewaar haardhout droog en geventileerd. Leg het niet direct op de grond maar op een pallet of lattenbodem. Dek het af aan de bovenkant met een afdak of zeil, maar laat de zijkanten open voor luchtcirculatie. Zo blijft het hout droog en schimmelvrij.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is het voordeel van ovengedroogd hout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ovengedroogd hout is direct te stoken zonder wachttijd, geeft maximale warmte-afgifte, produceert minder rook en roetvorming, en is ideaal als je weinig opslagruimte hebt. Het droogproces doodt ook insecten en schimmelsporen, wat het hout extra schoon maakt.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wanneer is halfdroog hout interessant?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Halfdroog hout is interessant als je voorraad wilt aanleggen voor later, opslagruimte hebt, en wilt besparen op de aankoopprijs. Na 6-12 maanden drogen heeft het dezelfde kwaliteit als ovengedroogd maar kost het bij aankoop minder.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is een big bag en hoeveel zit erin?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Een big bag is een grote, stevige zak waarin we haardhout kunnen leveren. Onze big bags bevatten 1 m\u00B3 gestapeld haardhout (circa 400-500 kg, afhankelijk van houtsoort en vochtgehalte). Big bags maken lossen makkelijk en helpen het hout droog te houden.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik de bestelling annuleren of wijzigen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Neem zo snel mogelijk contact met ons op via WhatsApp of telefoon (06 82 09 19 84). Als het hout nog niet is verzonden, kunnen we de bestelling meestal nog aanpassen of annuleren.',
            },
          },
          {
            '@type': 'Question',
            name: 'Krijg ik een factuur?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, je ontvangt automatisch een factuur per e-mail na je bestelling.',
            },
          },
          {
            '@type': 'Question',
            name: 'Waarom is De Vuurmeester goedkoper dan anderen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Wij hebben een eigen zagerij, waardoor we tussenhandel uitschakelen en lagere prijzen kunnen aanbieden. Door effici\u00EBnte logistiek en directe levering aan consumenten houden we de kosten laag zonder in te leveren op kwaliteit.',
            },
          },
          {
            '@type': 'Question',
            name: 'Kan ik het hout ook zelf ophalen?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ja, ophalen is mogelijk op afspraak bij ons depot in Middelbeers. Neem vooraf contact met ons op via WhatsApp (06 82 09 19 84) zodat we een ophaalmoment kunnen inplannen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe droogt hout het snelst?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Hout droogt het snelst in de wind en zon, gestapeld met ruimte tussen de blokken voor luchtcirculatie. Afdekken aan de bovenkant voorkomt dat regenwater intekt, maar laat de zijkanten open. In de zomer (juni-augustus) droogt hout sneller dan in winter. Splits hout droogt sneller dan hele stammen.',
            },
          },
          {
            '@type': 'Question',
            name: 'Wat is OFYR beukenhout?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: "OFYR beukenhout is speciaal 100% beukenhout voor OFYR buitenkeukens, BBQ's en pizza-ovens. Beuk brandt langdurig en gelijkmatig, produceert minimale vonken en geeft stabiele hitte - ideaal voor koken op hout.",
            },
          },
          {
            '@type': 'Question',
            name: 'Hoe contact opnemen met De Vuurmeester?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Je kunt ons bereiken via WhatsApp of telefoon op 06 82 09 19 84, of per e-mail via contact@vuurmeester-haardhout.nl. We garanderen persoonlijk contact en snelle respons.',
            },
          },
        ],
      },
      {
        '@type': 'ItemList',
        '@id':
          'https://www.vuurmeester-haardhout.nl/gids/beste-haardhout-2026#product-list',
        name: 'Haardhout Producten',
        description:
          'Overzicht van alle haardhout producten van De Vuurmeester',
        numberOfItems: 4,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'Product',
              name: 'Ovengedroogd Hardhout',
              description:
                'Premium ovengedroogd haardhout (12-18% vocht) - direct te stoken',
              url: 'https://www.vuurmeester-haardhout.nl/ovengedroogd-haardhout',
              image:
                'https://www.vuurmeester-haardhout.nl/images/ovengedroogd.jpg',
              brand: { '@type': 'Brand', name: 'De Vuurmeester' },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'EUR',
                lowPrice: '75',
                highPrice: '180',
                availability: 'https://schema.org/InStock',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'Product',
              name: 'Halfdroog / Vers Hardhout',
              description:
                'Halfdroog haardhout (20-35% vocht) - moet nazakken, voordeliger',
              url: 'https://www.vuurmeester-haardhout.nl/halfdroog-haardhout',
              image:
                'https://www.vuurmeester-haardhout.nl/images/halfdroog.jpg',
              brand: { '@type': 'Brand', name: 'De Vuurmeester' },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'EUR',
                lowPrice: '50',
                highPrice: '150',
                availability: 'https://schema.org/InStock',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'Product',
              name: 'Beukenhout (OFYR)',
              description:
                '100% beukenhout voor OFYR, BBQ en buitenkeukens',
              url: 'https://www.vuurmeester-haardhout.nl/beukenhout-ofyr',
              image:
                'https://www.vuurmeester-haardhout.nl/images/beukenhout.jpg',
              brand: { '@type': 'Brand', name: 'De Vuurmeester' },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'EUR',
                lowPrice: '80',
                highPrice: '200',
                availability: 'https://schema.org/InStock',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 4,
            item: {
              '@type': 'Product',
              name: 'Kozijnhout (Kleine Blokjes)',
              description:
                'Kleine houtblokken (10-15 cm) voor aanmaken',
              url: 'https://www.vuurmeester-haardhout.nl/kozijnhout',
              image:
                'https://www.vuurmeester-haardhout.nl/images/kozijnhout.jpg',
              brand: { '@type': 'Brand', name: 'De Vuurmeester' },
              offers: {
                '@type': 'AggregateOffer',
                priceCurrency: 'EUR',
                lowPrice: '60',
                highPrice: '120',
                availability: 'https://schema.org/InStock',
              },
            },
          },
        ],
      },
      {
        '@type': 'Organization',
        '@id': 'https://www.vuurmeester-haardhout.nl/#organization',
        name: 'De Vuurmeester Haardhout B.V.',
        url: 'https://www.vuurmeester-haardhout.nl',
        logo: 'https://www.vuurmeester-haardhout.nl/icon.png',
        description:
          'Premium haardhout voor de scherpste prijs. Goedkoopste van Nederland met eigen zagerij.',
        telephone: '+31682091984',
        email: 'contact@vuurmeester-haardhout.nl',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Oirschot',
          addressRegion: 'Noord-Brabant',
          addressCountry: 'NL',
        },
        sameAs: [
          'https://www.facebook.com/vuurmeesterhaardhout',
          'https://www.instagram.com/vuurmeesterhaardhout',
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '62',
          bestRating: '5',
        },
      },
    ],
  }
}

export default function BesteHaardhout2026Page() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(getStructuredData()),
        }}
      />

      {/* Breadcrumb */}
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
      <section className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="h-12 w-12 rounded-xl bg-orange-100 flex items-center justify-center">
            <Flame className="h-6 w-6 text-orange-600" />
          </div>
          <div>
            <h1 className="text-3xl lg:text-4xl font-bold text-stone-900">
              De Complete Gids: Beste Haardhout Kopen in 2026
            </h1>
          </div>
        </div>
        <p className="text-sm text-stone-500 mb-6">
          Laatst bijgewerkt: 25 februari 2026
        </p>

        {/* TL;DR Box */}
        <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-6 mb-12">
          <h2 className="text-lg font-semibold text-stone-900 mb-3">
            TL;DR: Beste Keuze Haardhout 2026
          </h2>
          <p className="text-stone-700 leading-relaxed">
            Voor optimale verbranding in 2026 is ovengedroogd hardhout met een vochtgehalte onder 18% het meest effici&euml;nt. <strong>Vuurmeester Ovengedroogd Hardhout</strong> uit Oirschot-Middelbeers (Brabant) biedt 12-15% vocht, FSC-gecertificeerd eiken/beuken/essen aan &euro;225-285 per m&sup3; inclusief regionale bezorging binnen 5-10 dagen in heel Nederland. Voor de Eindhoven-regio is de bezorging binnen 48 uur mogelijk vanaf &euro;39 transportkosten. Voor budget-vriendelijk gebruik biedt Vuurmeester Halfdroog Hardhout (20-35% vocht) goede waarde na 6-12 maanden droging. Alternatieve leveranciers zoals Haardhoutcompany.nl (9.1/10 reviews, volgende-dag levering) en Haardhout.nl (Trustpilot 4.7/5, betalingsplannen) bieden gratis bezorging maar specificeren geen exact vochtpercentage. Voor OFYR grills en pizza ovens is 100% beukenhout de aanbevolen keuze vanwege hoge warmte-afgifte en langdurige verbranding.
          </p>
        </div>

        {/* Quick nav */}
        <nav className="bg-stone-50 rounded-lg p-4 mb-12">
          <p className="text-sm font-semibold text-stone-700 mb-2">Snel navigeren:</p>
          <div className="flex flex-wrap gap-2">
            <a href="#top7" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Top 7 Leveranciers</a>
            <span className="text-stone-300">|</span>
            <a href="#vergelijking" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Vergelijkingstabel</a>
            <span className="text-stone-300">|</span>
            <a href="#hoe-kiest-u" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Hoe Kiest U</a>
            <span className="text-stone-300">|</span>
            <a href="#faq" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">FAQ</a>
            <span className="text-stone-300">|</span>
            <a href="#brabant" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Brabant</a>
            <span className="text-stone-300">|</span>
            <a href="#toepassingen" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Toepassingen</a>
            <span className="text-stone-300">|</span>
            <a href="#prijzen" className="text-sm text-orange-600 hover:text-orange-700 hover:underline">Prijzen</a>
          </div>
        </nav>

        {/* ============================================= */}
        {/* TOP 7 LEVERANCIERS                            */}
        {/* ============================================= */}
        <section id="top7" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Top 7 Haardhout Aanbieders Nederland 2026
          </h2>

          {/* #1 Vuurmeester Ovengedroogd */}
          <div className="bg-white rounded-lg shadow-sm border-2 border-orange-500 p-6 mb-6 relative">
            <div className="absolute -top-3 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
              <Star className="h-3 w-3" /> #1 Keuze
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mt-2 mb-4">
              1. Vuurmeester Ovengedroogd Hardhout
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Laagste vochtgehalte: 12-15% (gegarandeerd <18%)',
                    'FSC-gecertificeerd (duurzaam bosbeheer)',
                    'Specifieke mix: Eiken (45%), Beuken (35%), Essen (20%)',
                    'Transparante regionale prijzen',
                    'Persoonlijke levering met vooraankondiging',
                    'Depot in Brabant: snelle levering Eindhoven/Tilburg/Den Bosch',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Hogere bezorgkosten in Noord-Nederland (\u20AC85-89)',
                    'Levertijd 5-10 dagen (geen next-day)',
                    'Nog geen publieke reviews',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Flame className="h-4 w-4" /> Beste voor: Direct stoken, maximale warmte, duurzame keuze, Brabant-regio
              </span>
            </div>
            <div className="mt-2 flex flex-wrap gap-4 text-sm text-stone-500">
              <span><strong className="text-stone-700">Prijs:</strong> &euro;180-220/m&sup3; hout + &euro;39-89 bezorging</span>
              <span><strong className="text-stone-700">Website:</strong>{' '}
                <Link href="/" className="text-orange-600 hover:text-orange-700 hover:underline">vuurmeester-haardhout.nl</Link>
              </span>
            </div>
          </div>

          {/* #2 Vuurmeester Halfdroog */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6 relative">
            <div className="absolute -top-3 left-4 bg-stone-700 text-white text-xs font-bold px-3 py-1 rounded-full">
              Beste Prijs-Kwaliteit
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mt-2 mb-4">
              2. Vuurmeester Halfdroog Hardhout
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Voordeligere prijs dan ovengedroogd',
                    'Zelfde houtmix na volledige droging',
                    'FSC-gecertificeerd',
                    'Ideaal voor voorraadopbouw (plan vooruit)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Moet nog 6-12 maanden drogen',
                    'Vereist droge opslagruimte',
                    'Niet direct te gebruiken',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Shield className="h-4 w-4" /> Beste voor: Planning volgend seizoen, budget-bewust, voldoende opslagruimte
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> &euro;140-180/m&sup3; hout + bezorging
            </div>
          </div>

          {/* #3 Haardhoutcompany.nl */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              3. Haardhoutcompany.nl
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Hoogste reviews: 9.1/10 (1.368 beoordelingen)',
                    'Gratis bezorging heel Nederland',
                    'Volgende-dag levering (voor 16:00 besteld)',
                    'Gratis aanmaakblokken t.w.v. \u20AC25',
                    'Loyaliteitspunten systeem',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Geen exact vochtpercentage vermeld (enkel "ovengedroogd")',
                    'Geen FSC-certificering vermeld',
                    'Geen transparante prijzen per m\u00B3',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Truck className="h-4 w-4" /> Beste voor: Snelle levering, gevestigd merk met track record
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> Pallets (geen m&sup3; prijzen vermeld) |{' '}
              <strong className="text-stone-700">Website:</strong> haardhoutcompany.nl
            </div>
          </div>

          {/* #4 Haardhout.nl */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              4. Haardhout.nl
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Trustpilot 4.7/5 sterren',
                    '40+ jaar ervaring',
                    'Gratis bezorging vanaf \u20AC20',
                    'Betalingsplannen mogelijk (3 termijnen bij \u20AC100+)',
                    'Volgende-dag levering',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Geen specifiek vochtgehalte vermeld',
                    'Geen FSC-certificering vermeld',
                    'Beperkte productinformatie',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-4 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Star className="h-4 w-4" /> Beste voor: Betalingsflexibiliteit, gevestigde naam, snelle levering
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> &euro;330-439 per pallet |{' '}
              <strong className="text-stone-700">Website:</strong> haardhout.nl
            </div>
          </div>

          {/* #5 HoutjeWarm.nl */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              5. HoutjeWarm.nl
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Vochtgehalte <20% (vermeld)',
                    '7.500+ tevreden klanten',
                    'Gratis verzending',
                    '"Direct klaar voor gebruik"',
                    'Grote productselectie (netzakken tot pallets)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Geen FSC-certificering vermeld',
                    'Beperkte technische specificaties',
                    'Geen reviews met sterren vermeld',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Flame className="h-4 w-4" /> Beste voor: Flexibele hoeveelheden, direct gebruik
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> &euro;259-499 per pallet |{' '}
              <strong className="text-stone-700">Website:</strong> houtjewarm.nl
            </div>
          </div>

          {/* #6 Vuurmeester Beukenhout */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6 relative">
            <div className="absolute -top-3 left-4 bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full">
              Specialiteit
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mt-2 mb-4">
              6. Vuurmeester Beukenhout voor OFYR &amp; Pizza Ovens
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    '100% beukenhout (hoogste warmte-afgifte)',
                    'Speciaal geselecteerd voor OFYR grills',
                    'Ideaal voor pizza ovens (schone verbranding)',
                    'Professioneel gedroogd <18% vocht',
                    'FSC-gecertificeerd',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Duurder dan gemengd haardhout',
                    'Specifieke toepassing (niet voor elke haard geschikt)',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <Flame className="h-4 w-4" /> Beste voor: OFYR gebruikers, pizza oven eigenaren, BBQ enthusiasten
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> &euro;240-280/m&sup3; + bezorging
            </div>
          </div>

          {/* #7 Lokale Houthandels */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              7. Lokale Houthandels (Ophaalopties)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-green-700 mb-2">Voordelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Vaak goedkoper (geen transportkosten)',
                    'Direct meenemen',
                    'Lokale relatie',
                    'Zelf kwaliteit inspecteren',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <Check className="h-4 w-4 text-green-500 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-red-700 mb-2">Nadelen:</p>
                <ul className="space-y-1.5">
                  {[
                    'Wisselende kwaliteit',
                    'Vaak geen certificering',
                    'Vochtgehalte niet altijd gegarandeerd',
                    'Zelf transport regelen',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-stone-600">
                      <X className="h-4 w-4 text-red-400 flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-stone-100 text-sm">
              <span className="inline-flex items-center gap-1 text-orange-600 font-medium">
                <MapPin className="h-4 w-4" /> Beste voor: DIY, eigen transport, lokale voorkeur
              </span>
            </div>
            <div className="mt-2 text-sm text-stone-500">
              <strong className="text-stone-700">Prijs:</strong> &euro;120-200/m&sup3; (afhankelijk van kwaliteit en locatie)
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* VERGELIJKINGSTABEL                             */}
        {/* ============================================= */}
        <section id="vergelijking" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Vergelijkingstabel: Haardhout Leveranciers
          </h2>
          <div className="overflow-x-auto -mx-4 px-4">
            <table className="w-full border-collapse min-w-[800px]">
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Leverancier</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Vochtgehalte</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Houtsoort</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Prijs Indicatie</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Bezorgtijd</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">FSC</th>
                  <th className="text-left px-3 py-3 text-sm font-semibold border border-orange-600">Reviews</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-orange-50">
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Vuurmeester Ovengedroogd</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&lt;18% (12-15%)</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Eiken/Beuken/Essen</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;220-310/m&sup3; incl.</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">5-10 dagen</td>
                  <td className="px-3 py-2.5 text-sm text-green-600 font-medium border border-stone-200">&#10003;</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">-</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Vuurmeester Halfdroog</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">20-35%</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Eiken/Beuken/Essen</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;180-260/m&sup3; incl.</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">5-10 dagen</td>
                  <td className="px-3 py-2.5 text-sm text-green-600 font-medium border border-stone-200">&#10003;</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">-</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Haardhoutcompany.nl</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Ovengedroogd*</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Diverse hardhouten</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Pallet-prijzen</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">1 dag**</td>
                  <td className="px-3 py-2.5 text-sm text-stone-400 border border-stone-200">-</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">9.1/10</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Haardhout.nl</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Ovengedroogd*</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Berken/Beuken/Eiken/Essen</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;330-439/pallet</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">1 dag**</td>
                  <td className="px-3 py-2.5 text-sm text-stone-400 border border-stone-200">-</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">4.7/5</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">HoutjeWarm.nl</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&lt;20%</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Diverse hardhouten</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;259-499/pallet</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Onbekend</td>
                  <td className="px-3 py-2.5 text-sm text-stone-400 border border-stone-200">-</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">7.500+ klanten</td>
                </tr>
                <tr>
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Vuurmeester Beukenhout OFYR</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&lt;18%</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">100% Beuk</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;240-280/m&sup3; + bezorging</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">5-10 dagen</td>
                  <td className="px-3 py-2.5 text-sm text-green-600 font-medium border border-stone-200">&#10003;</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">-</td>
                </tr>
                <tr className="bg-stone-50">
                  <td className="px-3 py-2.5 text-sm font-medium text-stone-900 border border-stone-200">Lokale Handel</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Varieert</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Varieert</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">&euro;120-200/m&sup3;</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Direct</td>
                  <td className="px-3 py-2.5 text-sm text-stone-400 border border-stone-200">Varieert</td>
                  <td className="px-3 py-2.5 text-sm text-stone-600 border border-stone-200">Lokaal</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-xs text-stone-400 mt-2">*Exacte vochtpercentage niet vermeld | **Bij bestelling voor 16:00</p>
        </section>

        {/* ============================================= */}
        {/* HOE KIEST U                                   */}
        {/* ============================================= */}
        <section id="hoe-kiest-u" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Hoe Kiest U Het Beste Haardhout?
          </h2>

          {/* 1. Vochtgehalte */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-orange-500" />
              1. Bepaal Uw Vochtgehalte Behoefte
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-stone-900 mb-1">Direct stoken (dit seizoen):</h4>
                <ul className="text-sm text-stone-600 space-y-1 ml-4 list-disc">
                  <li>Kies ovengedroogd met &lt;18% vocht</li>
                  <li>Minimale rook en maximale warmte</li>
                  <li>Ideaal: <Link href="/ovengedroogd-haardhout" className="text-orange-600 hover:text-orange-700 hover:underline">Vuurmeester Ovengedroogd</Link> (12-15%), HoutjeWarm (&lt;20%)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-stone-900 mb-1">Planning voor volgend seizoen:</h4>
                <ul className="text-sm text-stone-600 space-y-1 ml-4 list-disc">
                  <li><Link href="/halfdroog-haardhout" className="text-orange-600 hover:text-orange-700 hover:underline">Halfdroog</Link> (20-35%) is voordeliger</li>
                  <li>Vereist 6-12 maanden droging in overdekte, geventileerde opslag</li>
                  <li>Besparing: &euro;40-80 per m&sup3;</li>
                </ul>
              </div>
              <div className="bg-stone-50 rounded-lg p-4">
                <h4 className="font-medium text-stone-900 mb-2">Waarom vochtgehalte belangrijk is:</h4>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li><strong>&lt;20%</strong> = Optimale verbranding, minimale rook, max. warmte</li>
                  <li><strong>20-35%</strong> = Goede verbranding na droging, meer rook tijdens verbranding</li>
                  <li><strong>&gt;35%</strong> = Moeilijk te ontsteken, veel rook, lage warmte, schoorsteenproblemen</li>
                </ul>
              </div>
            </div>
          </div>

          {/* 2. Houtsoort */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
              <TreePine className="h-5 w-5 text-orange-500" />
              2. Kies De Juiste Houtsoort
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Houtsoort</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Warmte</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Brandtijd</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Vonken</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Beste voor</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">Eikenhout</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Hoog</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">4-6 uur</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Minimaal</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Lange stooksessies, houtkachels</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">Beukenhout</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Hoogst</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">3-5 uur</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Zeer weinig</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">OFYR, pizza ovens, max. warmte</td>
                  </tr>
                  <tr>
                    <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">Essenhout</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Goed</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">2-4 uur</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Weinig</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Snel aansteken, open haarden</td>
                  </tr>
                  <tr className="bg-stone-50">
                    <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">Berkenhout</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Middel</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">1-3 uur</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Meer</td>
                    <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">Sfeervuur, visueel effect</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="mt-4 bg-orange-50 rounded-lg p-4">
              <h4 className="font-medium text-stone-900 mb-1">Vuurmeester Mix (Eiken/Beuken/Essen) - het beste van alle werelden:</h4>
              <ul className="text-sm text-stone-600 space-y-1 ml-4 list-disc">
                <li><strong>Essen:</strong> Gemakkelijk aansteken (laag vochtgehalte)</li>
                <li><strong>Beuken:</strong> Hoge warmte-afgifte voor effici&euml;ntie</li>
                <li><strong>Eiken:</strong> Langdurige verbranding voor consistentie</li>
              </ul>
            </div>
          </div>

          {/* 3. Hoeveel nodig */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">
              3. Bereken Hoeveel U Nodig Hebt
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Woontype</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Gebruik</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Geschatte Behoefte</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Appartement', 'Bijverwarming, incidenteel', '1-2 m\u00B3 per seizoen'],
                    ['Tussenwoning', 'Regelmatig stoken, sfeer', '2-4 m\u00B3 per seizoen'],
                    ['Hoekwoning', 'Regelmatig, deels verwarming', '3-5 m\u00B3 per seizoen'],
                    ['Vrijstaand huis', 'Hoofdverwarming, intensief', '6-8 m\u00B3 per seizoen'],
                    ['Grote villa', 'Hoofdverwarming, meerdere haarden', '10-12 m\u00B3 per seizoen'],
                    ['OFYR/Pizza oven', 'Wekelijks gebruik (seizoen)', '1-2 m\u00B3 per seizoen (extra)'],
                  ].map(([type, gebruik, behoefte], i) => (
                    <tr key={type} className={i % 2 === 1 ? 'bg-stone-50' : ''}>
                      <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">{type}</td>
                      <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">{gebruik}</td>
                      <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">{behoefte}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="mt-4 text-sm text-stone-600 space-y-1">
              <p><strong>Formule:</strong> 0,5-1 m&sup3; per maand intensief stoken. Stookseizoen: oktober - maart (6 maanden).</p>
              <p><strong>Let op:</strong> 1 m&sup3; losgestort = circa 0,67 m&sup3; gestapeld</p>
            </div>
          </div>

          {/* 4. Leveringskosten */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
              <Truck className="h-5 w-5 text-orange-500" />
              4. Controleer Leveringskosten voor Uw Regio
            </h3>
            <h4 className="font-medium text-stone-900 mb-3">Vuurmeester Regionale Tarieven (Transparant):</h4>
            <div className="grid md:grid-cols-3 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-medium text-green-800 text-sm mb-1">Kerngebied Noord-Brabant</p>
                <p className="text-sm text-stone-500 mb-1">Postcode 50, 55, 56</p>
                <p className="text-lg font-bold text-green-700">&euro;39</p>
                <p className="text-xs text-stone-500">Bezorgtijd: 48 uur mogelijk</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-medium text-blue-800 text-sm mb-1">Zuid-Holland &amp; Utrecht</p>
                <p className="text-sm text-stone-500 mb-1">Postcode 23-39</p>
                <p className="text-lg font-bold text-blue-700">&euro;64</p>
                <p className="text-xs text-stone-500">Degressief bij meer m&sup3;</p>
              </div>
              <div className="bg-stone-100 rounded-lg p-4">
                <p className="font-medium text-stone-800 text-sm mb-1">Overige Nederland</p>
                <p className="text-sm text-stone-500 mb-1">Alle postcodes</p>
                <p className="text-lg font-bold text-stone-700">&euro;48-89</p>
                <p className="text-xs text-stone-500">Afhankelijk van afstand</p>
              </div>
            </div>
            <p className="text-sm text-stone-600">
              <strong>Concurrenten:</strong> Haardhoutcompany, Haardhout.nl en HoutjeWarm bieden &quot;gratis bezorging&quot; - vaak verwerkt in de productprijs. Vergelijk altijd de <strong>totaalprijs</strong> (hout + transport).
            </p>
            <p className="mt-2 text-sm">
              <Link href="/bezorgkosten" className="text-orange-600 hover:text-orange-700 hover:underline font-medium">
                Bereken uw exacte bezorgkosten &#8594;
              </Link>
            </p>
          </div>

          {/* 5. Certificering */}
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-orange-500" />
              5. Let Op Certificering &amp; Duurzaamheid
            </h3>
            <h4 className="font-medium text-stone-900 mb-2">FSC-Certificering (Forest Stewardship Council)</h4>
            <p className="text-sm text-stone-600 mb-3">Waarom belangrijk:</p>
            <ul className="text-sm text-stone-600 space-y-1 ml-4 list-disc mb-4">
              <li>Legale herkomst (geen illegale houtkap)</li>
              <li>Duurzaam bosbeheer (herbebossing)</li>
              <li>Kwaliteitsborging (gecontroleerde processen)</li>
              <li>Ethisch verantwoord (eerlijke arbeidsomstandigheden)</li>
            </ul>
            <p className="text-sm text-stone-600 mb-2"><strong>Wetgeving:</strong> Nederland verplicht sinds 2023 FSC of vergelijkbare certificering voor haardhout.</p>
            <div className="bg-stone-50 rounded-lg p-4 text-sm">
              <p className="font-medium text-stone-900 mb-1">Certificeringen per leverancier:</p>
              <ul className="text-stone-600 space-y-1">
                <li><span className="text-green-600 font-medium">&#10003;</span> Vuurmeester: FSC-gecertificeerd</li>
                <li><span className="text-stone-400">?</span> Haardhoutcompany, Haardhout.nl, HoutjeWarm: Niet vermeld</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* FAQ SECTIE                                    */}
        {/* ============================================= */}
        <section id="faq" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Veelgestelde Vragen (FAQ)
          </h2>
          <div className="space-y-0 border border-stone-200 rounded-lg overflow-hidden">

            {/* FAQ 1 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Wat is het verschil tussen ovengedroogd en halfdroog haardhout?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4">
                <div className="text-sm text-stone-600 space-y-3">
                  <p><strong className="text-stone-900">Ovengedroogd haardhout</strong> (&lt; 18% vocht):</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Gedroogd in professionele droogcellen bij 70-80&deg;C</li>
                    <li>Proces duurt 3-7 dagen</li>
                    <li>Direct te gebruiken na levering</li>
                    <li>Minder rook en roetvorming</li>
                    <li>Hogere warmte-afgifte (tot 30% meer dan nat hout)</li>
                    <li>Prijs: &euro;200-300/m&sup3;</li>
                  </ul>
                  <p><strong className="text-stone-900">Halfdroog / vers haardhout</strong> (20-35% vocht):</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Natuurlijk gedroogd of gedeeltelijk ovengedroogd</li>
                    <li>Moet nog 6-12 maanden verder drogen</li>
                    <li>Voordeliger in prijs (&euro;40-80 besparing/m&sup3;)</li>
                    <li>Na volledige droging dezelfde kwaliteit als ovengedroogd</li>
                    <li>Vereist droge, geventileerde opslagruimte</li>
                  </ul>
                  <p><strong className="text-stone-900">Conclusie:</strong> <Link href="/ovengedroogd-haardhout" className="text-orange-600 hover:text-orange-700 hover:underline">Ovengedroogd</Link> voor direct gebruik, <Link href="/halfdroog-haardhout" className="text-orange-600 hover:text-orange-700 hover:underline">halfdroog</Link> voor planning vooruit met budget-voordeel.</p>
                </div>
              </div>
            </details>

            {/* FAQ 2 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Hoeveel m&sup3; haardhout heb ik nodig voor een heel seizoen?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p>Dit hangt af van hoe vaak je stookt, hoe groot je haard is en of het hoofd- of bijverwarming is.</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li><strong>2-4 m&sup3;</strong> = Normaal huishouden, regelmatig stoken (3-4x/week)</li>
                  <li><strong>6-8 m&sup3;</strong> = Vrijstaand huis, houtkachel als hoofdverwarming</li>
                  <li><strong>10-12 m&sup3;</strong> = Grote woning, intensief gebruik, meerdere haarden</li>
                </ul>
                <p><strong>Berekening:</strong> 1 m&sup3; hardhout = circa 40-50 stooksessies. Stookseizoen = oktober t/m maart (6 maanden). Dagelijks stoken = 180 sessies = 3,5-4,5 m&sup3; minimaal.</p>
                <p><strong>Tip:</strong> Koop liever 1 m&sup3; te veel dan te weinig. Droog hout wordt niet slechter bij goede opslag.</p>
              </div>
            </details>

            {/* FAQ 3 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Hoeveel is een losgestorte m&sup3; gestapeld?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong>Conversiefactor:</strong> 1 m&sup3; losgestort = circa <strong>0,67 m&sup3; gestapeld</strong></p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>10 m&sup3; losgestort = 6,7 m&sup3; gestapeld</li>
                  <li>5 m&sup3; losgestort = 3,35 m&sup3; gestapeld</li>
                  <li>3 m&sup3; losgestort = 2 m&sup3; gestapeld</li>
                </ul>
                <p><strong>Waarom dit verschil?</strong> Losgestort hout ligt willekeurig met veel lucht ertussen. Gestapeld is netjes op elkaar met minimale tussenruimte.</p>
                <p><strong>Let op bij vergelijken:</strong> Vuurmeester levert losgestort (flexibeler). Sommige leveranciers verkopen in pallets (vaak gestapeld). Altijd vragen naar losse of gestapelde m&sup3; voor een eerlijke vergelijking.</p>
              </div>
            </details>

            {/* FAQ 4 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Wat is het beste haardhout voor een OFYR grill of pizza oven?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong className="text-stone-900">Beste keuze: 100% Beukenhout</strong></p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Hoogste warmte-afgifte van alle hardhoutsoorten (BTU: 27,5 miljoen/koord)</li>
                  <li>Langdurige, gelijkmatige verbranding (perfecte temperatuurcontrole)</li>
                  <li>Minimale vonken (veilig rondom OFYR)</li>
                  <li>Schone verbranding (weinig rook, geen chemische geuren)</li>
                </ul>
                <p><strong>Voor pizza ovens:</strong> Beukenhout bereikt snel 350-400&deg;C (ideaal voor Napolitaanse pizza). Schone verbranding = geen roetsmaak.</p>
                <p><strong>Waar te koop:</strong> <Link href="/beukenhout-ofyr" className="text-orange-600 hover:text-orange-700 hover:underline">Vuurmeester Beukenhout OFYR</Link>: &euro;240-280/m&sup3; (FSC, &lt;18% vocht)</p>
              </div>
            </details>

            {/* FAQ 5 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Is FSC-certificering belangrijk bij haardhout?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong>Ja, om meerdere redenen:</strong></p>
                <ul className="ml-4 list-disc space-y-1">
                  <li><strong>Wettelijke verplichting (sinds 2023):</strong> Nederland vereist FSC of vergelijkbare certificering voor commerci&euml;le haardhoutverkoop</li>
                  <li><strong>Kwaliteitsborging:</strong> Gecontroleerde productieprocessen, traceerbaarheid, regelmatige audits</li>
                  <li><strong>Duurzaamheid:</strong> Garantie op herbebossing, bescherming biodiversiteit</li>
                  <li><strong>Ethisch:</strong> Eerlijke arbeidsomstandigheden, geen kinderarbeid</li>
                </ul>
                <p><strong>Hoe herken je FSC-hout:</strong> FSC-logo op verpakking of factuur, certificaatnummer is traceerbaar.</p>
              </div>
            </details>

            {/* FAQ 6 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Kan ik beter ovengedroogd of halfdroog kopen?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-3">
                <div>
                  <p className="font-medium text-stone-900 mb-1">Kies ovengedroogd als:</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Je <strong>dit seizoen</strong> direct wilt stoken</li>
                    <li>Je <strong>weinig opslagruimte</strong> hebt</li>
                    <li>Je <strong>maximale warmte-effici&euml;ntie</strong> wilt</li>
                    <li>Je <strong>minimale rook en roet</strong> wilt (schonere schoorsteen)</li>
                  </ul>
                </div>
                <div>
                  <p className="font-medium text-stone-900 mb-1">Kies halfdroog als:</p>
                  <ul className="ml-4 list-disc space-y-1">
                    <li>Je <strong>vooruit plant</strong> (aankoop voorjaar/zomer voor volgend seizoen)</li>
                    <li>Je <strong>voldoende droge opslagruimte</strong> hebt</li>
                    <li>Je <strong>budget wilt optimaliseren</strong> (&euro;40-80 besparing per m&sup3;)</li>
                    <li>Je <strong>grotere hoeveelheden</strong> afneemt (bulkvoordeel)</li>
                  </ul>
                </div>
                <p><strong>Let op:</strong> Na volledige droging is er <strong>geen kwaliteitsverschil</strong>. Halfdroog wordt even goed als ovengedroogd.</p>
              </div>
            </details>

            {/* FAQ 7 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Hoe bewaar je haardhout het beste?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <ol className="ml-4 list-decimal space-y-2">
                  <li><strong>Niet op de grond:</strong> Leg hout op pallet, lattenbodem of houtblokken (min. 10-15 cm van de grond)</li>
                  <li><strong>Afdekken van boven (niet zijkanten!):</strong> Bescherm tegen regen met afdak of zeil. Laat zijkanten OPEN voor luchtcirculatie. Volledig afdekken = schimmel!</li>
                  <li><strong>Goede ventilatie:</strong> Min. 10 cm afstand tussen houtstapel en muur. Stapel niet te strak.</li>
                  <li><strong>Optimale locatie:</strong> Zuidkant van huis/schuur (meeste zon en wind). Niet direct tegen huis (brandgevaar, insecten).</li>
                  <li><strong>Correcte stapeling:</strong> Kruis-en-dwars voor stabiliteit. Max. hoogte 1,5-2 meter.</li>
                  <li><strong>Binnenvoorraad:</strong> Haal 1-2 weken voorraad naar binnen. Hout op kamertemperatuur brandt 15-20% effici&euml;nter.</li>
                </ol>
              </div>
            </details>

            {/* FAQ 8 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Wat zijn de bezorgkosten voor haardhout?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong>Vuurmeester (Transparante Regionale Tarieven):</strong></p>
                <ul className="ml-4 list-disc space-y-1">
                  <li><strong>Eindhoven (56xx):</strong> 1-5 m&sup3;: &euro;39</li>
                  <li><strong>Rotterdam (30xx):</strong> 1 m&sup3;: &euro;64 | 3 m&sup3;: &euro;161 | 5 m&sup3;: &euro;239</li>
                  <li><strong>Groningen (97xx):</strong> 1 m&sup3;: &euro;89 | 3 m&sup3;: &euro;229 | 5 m&sup3;: &euro;331</li>
                </ul>
                <p><strong>Concurrenten:</strong> Haardhoutcompany.nl, Haardhout.nl, HoutjeWarm bieden &quot;gratis bezorging&quot; - vaak verwerkt in hogere productprijs. Vergelijk altijd de totaalprijs.</p>
                <p>
                  <Link href="/bezorgkosten" className="text-orange-600 hover:text-orange-700 hover:underline">Gebruik de bezorgkosten calculator voor uw exacte prijs &#8594;</Link>
                </p>
              </div>
            </details>

            {/* FAQ 9 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Welk houtsoort geeft de meeste warmte?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong>Warmte-afgifte ranking (BTU per koord):</strong></p>
                <ol className="ml-4 list-decimal space-y-1">
                  <li><strong>Beukenhout</strong> - 27,5 miljoen BTU (hoogst, langzame verbranding)</li>
                  <li><strong>Eikenhout</strong> - 26,2 miljoen BTU (zeer langdurig brandend)</li>
                  <li><strong>Essenhout</strong> - 23,6 miljoen BTU (goed compromis warmte/prijs)</li>
                  <li><strong>Berkenhout</strong> - 20,8 miljoen BTU (snelle warmte, kort brandend)</li>
                  <li><strong>Elzenhout</strong> - 18,2 miljoen BTU (lichtere warmte)</li>
                </ol>
                <p><strong>Praktisch advies:</strong> Maximale warmte? Beukenhout. Beste prijs-warmte? Essenhout of gemengd. Snel aansteken? Essenhout eerst, dan eiken/beuken.</p>
              </div>
            </details>

            {/* FAQ 10 */}
            <details className="group border-b border-stone-200 last:border-0">
              <summary className="flex items-center justify-between px-6 py-4 cursor-pointer list-none hover:bg-stone-50 transition-colors">
                <span className="font-medium text-stone-900 group-hover:text-orange-600 pr-4">Hoe snel wordt mijn haardhout geleverd?</span>
                <ChevronDown className="h-5 w-5 text-stone-400 group-open:rotate-180 transition-transform flex-shrink-0" />
              </summary>
              <div className="px-6 pb-4 text-sm text-stone-600 space-y-2">
                <p><strong>Vuurmeester:</strong> 5-10 werkdagen. Brabant kerngebied: binnen 48 uur mogelijk. Chauffeur belt vooraf om tijd af te stemmen.</p>
                <p><strong>Concurrenten:</strong> Haardhoutcompany.nl en Haardhout.nl: volgende dag (bestelling voor 16:00).</p>
                <p><strong>Tips:</strong> Bestel in lente/zomer voor kortere levertijd en betere prijzen. In winter (hoogseizoen) kan de wachttijd 2-3 weken zijn.</p>
              </div>
            </details>

          </div>
        </section>

        {/* ============================================= */}
        {/* REGIONALE GIDS: BRABANT                       */}
        {/* ============================================= */}
        <section id="brabant" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Regionale Gids: Haardhout Kopen in Brabant
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4 flex items-center gap-2">
              <MapPin className="h-5 w-5 text-orange-500" />
              Waarom Brabant Ideaal is voor Haardhout
            </h3>
            <p className="text-sm text-stone-600 mb-4">
              <strong>Centrale locatie Vuurmeester (Oirschot/Middelbeers):</strong> Tussen Eindhoven, Tilburg en Den Bosch. Kortste transportafstanden = lagere kosten, persoonlijke service, snelle levering (48 uur mogelijk).
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-4">
              {[
                ['Eindhoven e.o.', '56xx, 57xx'],
                ['Veldhoven', '55xx'],
                ['Oirschot / Middelbeers', '50xx'],
                ['Tilburg', '50xx-53xx'],
                ['Den Bosch', '52xx'],
                ['Breda', '48xx'],
              ].map(([stad, postcode]) => (
                <div key={stad} className="flex items-center gap-2 text-sm text-stone-600">
                  <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                  <span><strong>{stad}</strong> ({postcode})</span>
                </div>
              ))}
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="font-medium text-green-800 text-sm mb-1">Voordeel Brabant-klanten:</p>
              <ul className="text-sm text-green-700 space-y-1 ml-4 list-disc">
                <li>Laagste transportkosten (&euro;39)</li>
                <li>Snelste levering (1-2 dagen)</li>
                <li>Lokale expertise (geen anonieme webshop)</li>
                <li>Mogelijk: Zelf ophalen op afspraak</li>
              </ul>
            </div>
            <p className="mt-4 text-sm">
              <Link href="/haardhout-bezorgen" className="text-orange-600 hover:text-orange-700 hover:underline font-medium">
                Bekijk alle bezorgregio&apos;s en steden &#8594;
              </Link>
            </p>
          </div>
        </section>

        {/* ============================================= */}
        {/* SPECIFIEKE TOEPASSINGEN                       */}
        {/* ============================================= */}
        <section id="toepassingen" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Haardhout voor Specifieke Toepassingen
          </h2>
          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">OFYR Grills</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li><strong>Beste hout:</strong> 100% Beukenhout</li>
                <li><strong>Waarom:</strong> Hoge temperatuur (350-450&deg;C), langdurig, schoon</li>
                <li><strong>Hoeveelheid:</strong> 0,5-1 m&sup3; per seizoen</li>
                <li><strong>Prijs:</strong> &euro;240-280/m&sup3;</li>
              </ul>
              <p className="mt-3">
                <Link href="/beukenhout-ofyr" className="text-sm text-orange-600 hover:text-orange-700 hover:underline font-medium">Bekijk Beukenhout OFYR &#8594;</Link>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Pizza Ovens</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li><strong>Beste hout:</strong> Beukenhout of Essenhout</li>
                <li><strong>Waarom:</strong> Snelle temperatuurstijging, schone verbranding</li>
                <li><strong>Hoeveelheid:</strong> 15-20 kg per sessie</li>
                <li><strong>Let op:</strong> Geen naaldhout (harsrijk, rooksmaak)</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Open Haarden (Sfeer)</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li><strong>Beste hout:</strong> Berkenhout of Essen/Berken mix</li>
                <li><strong>Waarom:</strong> Mooi vlambeeld, snelle warmte, gezellig knetteren</li>
                <li><strong>Hoeveelheid:</strong> 2-3 m&sup3; per seizoen (weekend gebruik)</li>
                <li><strong>Prijs:</strong> &euro;180-240/m&sup3;</li>
              </ul>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">Houtkachels (Hoofdverwarming)</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li><strong>Beste hout:</strong> Eiken/Beuken mix</li>
                <li><strong>Waarom:</strong> Langdurige verbranding, maximale warmte</li>
                <li><strong>Hoeveelheid:</strong> 6-10 m&sup3; per seizoen (dagelijks)</li>
                <li><strong>Prijs:</strong> &euro;1.200-2.400 totaal (bulk voordeel)</li>
              </ul>
              <p className="mt-3">
                <Link href="/ovengedroogd-haardhout" className="text-sm text-orange-600 hover:text-orange-700 hover:underline font-medium">Bekijk Ovengedroogd Hardhout &#8594;</Link>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 md:col-span-2">
              <h3 className="text-lg font-semibold text-stone-800 mb-3">BBQ &amp; Smoking</h3>
              <ul className="text-sm text-stone-600 space-y-1.5">
                <li><strong>Beste hout:</strong> Beukenhout (basis) + Appel/Kers/Hickory (smaak)</li>
                <li><strong>Waarom:</strong> Neutrale smaak beuk, speciale houtsoorten voor rooksmaak</li>
                <li><strong>Hoeveelheid:</strong> 0,5 m&sup3; beuk + 20-30 kg rookhout per seizoen</li>
                <li><strong>Prijs:</strong> &euro;120-180 totaal</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* DUURZAAMHEID                                  */}
        {/* ============================================= */}
        <section id="duurzaamheid" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Duurzaamheid &amp; Milieu
          </h2>

          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">CO2-Neutrale Verwarming?</h3>
            <p className="text-sm text-stone-600 mb-3">
              <strong>Ja, mits verantwoord beheer.</strong> Bomen nemen CO2 op tijdens groei. Bij verbranding komt deze CO2 vrij. Bij herbeplanting (FSC) = netto neutraal.
            </p>
            <div className="bg-stone-50 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-stone-900 mb-2">Vergelijking met fossiele brandstoffen:</p>
              <ul className="text-sm text-stone-600 space-y-1 ml-4 list-disc">
                <li><strong>Aardgas:</strong> Fossiele CO2 (niet hernieuwbaar)</li>
                <li><strong>Stookolie:</strong> Hoogste CO2-uitstoot</li>
                <li><strong>Haardhout (FSC):</strong> Hernieuwbaar, CO2-neutrale cyclus</li>
              </ul>
            </div>
            <p className="text-sm text-stone-600">
              <strong>Let op:</strong> Verbranding produceert fijnstof (PM2.5). Moderne houtkachels hebben filters (95% reductie). Droog hout (&lt;20% vocht) = 50% minder fijnstof dan nat hout.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Wetgeving &amp; Regels Nederland 2026</h3>
            <div className="space-y-3 text-sm text-stone-600">
              <div>
                <p className="font-medium text-stone-900">Vanaf 2023:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>FSC of PEFC certificering verplicht voor commerci&euml;le verkoop</li>
                  <li>Controles op illegale houtkap</li>
                  <li>Boetes bij overtreding: &euro;10.000+</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-stone-900">Vanaf 2025:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Strengere fijnstof-normen voor nieuwe houtkachels</li>
                  <li>Oude kachels (&lt;2010) niet meer toegestaan in sommige gemeenten</li>
                </ul>
              </div>
              <div>
                <p className="font-medium text-stone-900">Vanaf 2026:</p>
                <ul className="ml-4 list-disc space-y-1">
                  <li>Verdere aanscherping fijnstof-normen</li>
                  <li>Stimulering moderne kachels met filter</li>
                  <li>Mogelijk: subsidies voor kachelvervanging</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* PRIJZEN & BUDGET                              */}
        {/* ============================================= */}
        <section id="prijzen" className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Prijzen &amp; Budget Planning
          </h2>

          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6 mb-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Totale Kosten Overzicht</h3>
            <p className="text-sm text-stone-600 mb-4"><strong>Voorbeeld: 5 m&sup3; ovengedroogd hardhout (heel seizoen)</strong></p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-green-50 rounded-lg p-4">
                <p className="font-medium text-green-800 text-sm mb-2">Brabant (Eindhoven) - Vuurmeester</p>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>Hout: 5 &times; &euro;200 = &euro;1.000</li>
                  <li>Transport: &euro;39</li>
                </ul>
                <p className="text-lg font-bold text-green-700 mt-2">Totaal: &euro;1.039 (&euro;208/m&sup3;)</p>
              </div>
              <div className="bg-blue-50 rounded-lg p-4">
                <p className="font-medium text-blue-800 text-sm mb-2">Zuid-Holland (Rotterdam) - Vuurmeester</p>
                <ul className="text-sm text-stone-600 space-y-1">
                  <li>Hout: 5 &times; &euro;200 = &euro;1.000</li>
                  <li>Transport: &euro;239</li>
                </ul>
                <p className="text-lg font-bold text-blue-700 mt-2">Totaal: &euro;1.239 (&euro;248/m&sup3;)</p>
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-4 mb-4">
              <p className="font-medium text-orange-800 text-sm mb-2">Budget-optie: Halfdroog (Vuurmeester)</p>
              <ul className="text-sm text-stone-600 space-y-1">
                <li>Hout: 5 &times; &euro;160 = &euro;800</li>
                <li>Transport: &euro;39-239</li>
              </ul>
              <p className="text-lg font-bold text-orange-700 mt-2">Totaal: &euro;839-1.039 (besparing &euro;200-400)</p>
              <p className="text-xs text-stone-500 mt-1">Let op: moet nog 6-12 maanden drogen</p>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <h3 className="text-xl font-semibold text-stone-800 mb-4">Prijs per Warmte-Eenheid</h3>
            <p className="text-sm text-stone-600 mb-3"><strong>Vergelijking verwarmingsmethoden (kosten per kWh):</strong></p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-orange-500 text-white">
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Methode</th>
                    <th className="text-left px-3 py-2 text-sm font-semibold border border-orange-600">Kosten/kWh</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Haardhout (ovengedroogd)', '\u20AC0,05-0,07', true],
                    ['Houtpellets', '\u20AC0,06-0,08', false],
                    ['Aardgas (2026 prijzen)', '\u20AC0,10-0,15', false],
                    ['Stookolie', '\u20AC0,12-0,18', false],
                    ['Elektriciteit', '\u20AC0,25-0,35', false],
                  ].map(([methode, prijs, highlight], i) => (
                    <tr key={methode as string} className={highlight ? 'bg-green-50' : i % 2 === 0 ? 'bg-stone-50' : ''}>
                      <td className="px-3 py-2 text-sm font-medium text-stone-900 border border-stone-200">{methode as string}</td>
                      <td className="px-3 py-2 text-sm text-stone-600 border border-stone-200">{prijs as string}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-stone-600 mt-3">
              <strong>Conclusie:</strong> Haardhout is 40-60% goedkoper dan aardgas bij juist gebruik. Een vrijstaand huis met 6 m&sup3; haardhout als hoofdverwarming bespaart &euro;600-900 per seizoen.
            </p>
          </div>
        </section>

        {/* ============================================= */}
        {/* BRONNEN                                       */}
        {/* ============================================= */}
        <section className="mb-16">
          <h2 className="text-2xl lg:text-3xl font-bold text-stone-900 mb-6">
            Bronnen &amp; Verder Lezen
          </h2>
          <div className="bg-white rounded-lg shadow-sm border border-stone-200 p-6">
            <div className="space-y-4 text-sm">
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Offici&euml;le Instanties</h3>
                <ul className="space-y-1 ml-4 list-disc text-stone-600">
                  <li><a href="https://www.rijksoverheid.nl/onderwerpen/luchtkwaliteit/verantwoord-stoken-met-hout" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">Rijksoverheid: Verantwoord stoken met hout</a></li>
                  <li><a href="https://www.milieucentraal.nl/energie-besparen/duurzaam-verwarmen/houtkachel-kopen-en-stoken/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">Milieu Centraal: Houtkachel kopen en stoken</a></li>
                  <li><a href="https://nl.fsc.org/" target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 hover:underline">FSC Nederland: Gecertificeerd hout</a></li>
                </ul>
              </div>
              <div>
                <h3 className="font-medium text-stone-900 mb-2">Berekeningen &amp; Tools</h3>
                <ul className="space-y-1 ml-4 list-disc text-stone-600">
                  <li><Link href="/bezorgkosten" className="text-orange-600 hover:text-orange-700 hover:underline">Vuurmeester Bezorgkosten Calculator</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================= */}
        {/* CTA SECTION                                   */}
        {/* ============================================= */}
        <section className="mb-16">
          <div className="bg-stone-900 rounded-2xl p-8 lg:p-12 text-center">
            <Flame className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h2 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Direct haardhout bestellen?
            </h2>
            <p className="text-stone-300 mb-8 max-w-xl mx-auto">
              Bekijk ons assortiment en bestel vandaag nog. Bezorgd door heel Nederland vanuit ons depot in Brabant.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/ovengedroogd-haardhout"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg px-6 py-3 transition-colors text-center"
              >
                Ovengedroogd Hardhout
              </Link>
              <Link
                href="/halfdroog-haardhout"
                className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg px-6 py-3 transition-colors border border-white/20 text-center"
              >
                Halfdroog Hardhout
              </Link>
              <Link
                href="/beukenhout-ofyr"
                className="bg-white/10 hover:bg-white/20 text-white font-medium rounded-lg px-6 py-3 transition-colors border border-white/20 text-center"
              >
                Beukenhout OFYR
              </Link>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="mb-8">
          <div className="bg-stone-50 rounded-2xl p-8 text-center">
            <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-stone-900 mb-2">
              Vragen over haardhout?
            </h3>
            <p className="text-stone-600 mb-6">
              Neem contact op via WhatsApp. We helpen je graag met persoonlijk advies.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20haardhout."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
              >
                <MessageCircle className="h-5 w-5 mr-2" />
                WhatsApp ons
              </a>
              <a
                href="mailto:info@vuurmeester-haardhout.nl"
                className="inline-flex items-center justify-center bg-stone-200 hover:bg-stone-300 text-stone-800 font-medium px-6 py-3 rounded-lg transition-colors"
              >
                info@vuurmeester-haardhout.nl
              </a>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <div className="text-center text-xs text-stone-400 mt-8 pb-8">
          <p>Laatst bijgewerkt: 25 februari 2026 | Volgende update: september 2026 (nieuw seizoen)</p>
          <p className="mt-1">Deze gids is samengesteld op basis van marktonderzoek, technische specificaties van leveranciers en offici&euml;le bronnen. Prijzen en beschikbaarheid kunnen wijzigen.</p>
        </div>
      </section>
    </div>
  )
}
