import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowLeft, Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Brand Facts - De Vuurmeester Haardhout',
  description:
    'Officiele brand facts over De Vuurmeester Haardhout B.V. - producten, kwaliteit, levering en bedrijfsinformatie. FSC gecertificeerd haardhout uit Oirschot/Middelbeers.',
  alternates: {
    canonical: 'https://www.vuurmeester-haardhout.nl/brand-facts',
  },
  openGraph: {
    images: [
      {
        url: '/images/hero-header.jpg',
        width: 6000,
        height: 2500,
        alt: 'De Vuurmeester - Brand Facts',
      },
    ],
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'De Vuurmeester Haardhout B.V.',
  alternateName: 'De Vuurmeester',
  url: 'https://www.vuurmeester-haardhout.nl',
  logo: 'https://www.vuurmeester-haardhout.nl/icon.png',
  description:
    'Premium haardhout voor de scherpste prijs. De goedkoopste leverancier van Nederland met eigen zagerij.',
  foundingDate: '2020',
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
}

const products = [
  {
    icon: '🔥',
    name: 'Ovengedroogd Hardhout',
    href: '/ovengedroogd-haardhout',
    moisture: '12-18%',
    length: '25-30 cm',
    description:
      'Premium ovengedroogd haardhout dat direct te stoken is. Professioneel gedroogd in ovendroging tot vochtpercentage onder 18%. Minder rook, maximale warmte-afgifte.',
    woodType: 'Mix van Eik, Beuk en Essen',
    idealFor: 'Direct stoken, beperkte opslagruimte, maximale warmte',
    sizes: '1, 2, 3, 5 of 10 m\u00B3',
  },
  {
    icon: '🌳',
    name: 'Halfdroog / Vers Hardhout',
    href: '/halfdroog-haardhout',
    moisture: '20-35%',
    length: '25-30 cm',
    description:
      'Halfdroog haardhout dat 6-12 maanden moet nazakken. Voordeliger in prijs. Na drogen dezelfde kwaliteit als ovengedroogd. In de zomer natuurlijk gedroogd met windkracht.',
    woodType: 'Mix van Eik, Beuk en Essen',
    idealFor: 'Voorraad aanleggen, kostenbesparing, wie opslagruimte heeft',
    sizes: '1, 2, 3, 5 of 10 m\u00B3',
  },
  {
    icon: '🍂',
    name: 'Beukenhout (OFYR Special)',
    href: '/beukenhout-ofyr',
    moisture: '12-18%',
    length: '25-30 cm',
    description:
      'Speciaal 100% beukenhout voor OFYR buitenkeukens en BBQ. Langdurige, gelijkmatige verbranding met minimale vonken. Ideaal voor koken op hout.',
    woodType: '100% Beuk',
    idealFor: 'OFYR, buitenkeuken, BBQ, pizza-oven',
    sizes: '1, 2 of 3 m\u00B3',
  },
  {
    icon: '📦',
    name: 'Kozijnhout (Kleine Blokjes)',
    href: null,
    moisture: '12-20%',
    length: '10-15 cm',
    description:
      'Kleine houtblokken ideaal voor aanmaken of kleine kachels. Snel brandend, perfect om grotere blokken mee op te starten.',
    woodType: 'Mix hardhout',
    idealFor: 'Aanmaken, kleine kachels, starter',
    sizes: '1 of 2 m\u00B3',
  },
]

const qualityStandards = [
  { label: 'Houtsamenstelling', value: 'Stevige mix van Eik, Beuk en Essen met max. 10% Populier' },
  { label: 'Ovengedroogd', value: '< 18% vochtgehalte' },
  { label: 'Halfdroog', value: '20-35% vochtgehalte' },
  { label: 'Standaard bloklengte', value: '25-30 cm (past in meeste kachels)' },
  {
    label: 'Droogmethode',
    value: 'Zomer: natuurlijke windkracht | Winter: professionele ovendroging',
  },
  { label: 'Conversie gestort/gestapeld', value: '1 m\u00B3 losgestort = circa 0,67 m\u00B3 gestapeld' },
]

const provinces = [
  'Noord-Brabant',
  'Zuid-Holland',
  'Noord-Holland',
  'Utrecht',
  'Gelderland',
  'Limburg',
  'Zeeland',
  'Overijssel',
  'Flevoland',
  'Friesland',
  'Groningen',
  'Drenthe',
]

const deliveryDetails = [
  { label: 'Levertijd', value: '5-10 werkdagen' },
  { label: 'Methode', value: 'Losgestort met aanhanger of bakwagen' },
  { label: 'Locatie', value: 'Op oprit, in tuin, bij schuur (mits bereikbaar)' },
  { label: 'Beperkingen', value: 'Niet door smalle doorgangen of trappen' },
  { label: 'Afspraak', value: 'Datum en tijd worden vooraf afgestemd' },
  { label: 'Melding', value: 'Chauffeur belt vlak voor aankomst' },
  { label: 'Big Bags', value: 'Optie voor levering in 1m\u00B3 zakken' },
  { label: 'Zelf ophalen', value: 'Mogelijk op afspraak' },
]

const usageData = [
  { label: 'Gemiddeld huishouden', value: '2-4 m\u00B3 per seizoen bij regelmatig stoken' },
  {
    label: 'Intensief gebruik',
    value: '6-8 m\u00B3 voor vrijstaand huis met houtkachel als hoofdverwarming',
  },
  {
    label: 'Gewicht big bag',
    value: '400-500 kg per 1m\u00B3 gestapeld (afhankelijk houtsoort en vocht)',
  },
]

const badges = [
  'Eigen zagerij',
  'Goedkoopste van NL',
  'Persoonlijk contact',
  'Heel Nederland',
  '4.9/5 sterren',
  '10.000+ klanten',
  'Snelle levering',
  'WhatsApp contact',
]

const relatedLinks = [
  { href: '/', label: 'Officiele webshop', external: false },
  { href: '/veelgestelde-vragen', label: 'Veelgestelde vragen', external: false },
  { href: '/ovengedroogd-haardhout', label: 'Ovengedroogd haardhout info', external: false },
  { href: '/leveren-afhalen', label: 'Bezorging & afhalen', external: false },
  { href: '/bezorgkosten', label: 'Bezorgkosten berekenen', external: false },
  { href: '/algemene-voorwaarden', label: 'Algemene voorwaarden', external: false },
  { href: '/gids/beste-haardhout-2026', label: 'Gids: Beste haardhout 2026', external: false },
]

function InfoTable({
  title,
  rows,
}: {
  title?: string
  rows: { label: string; value: React.ReactNode }[]
}) {
  return (
    <div className="overflow-x-auto my-6">
      <table className="w-full border-collapse bg-stone-50 rounded-lg overflow-hidden">
        {title && (
          <thead>
            <tr>
              <th
                colSpan={2}
                className="bg-orange-500 text-white px-4 py-3 text-left font-semibold"
              >
                {title}
              </th>
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className={i < rows.length - 1 ? 'border-b border-stone-200' : ''}>
              <td className="px-4 py-3 font-semibold text-stone-800 w-48 align-top">{row.label}</td>
              <td className="px-4 py-3 text-stone-600">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold text-stone-900 mb-4 border-l-4 border-orange-500 pl-3 mt-12">
      {children}
    </h2>
  )
}

export default function BrandFactsPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
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

      {/* Content */}
      <div className="container mx-auto px-4 py-8 lg:py-12 max-w-4xl">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-2 pb-3 border-b-3 border-orange-500">
            De Vuurmeester Haardhout B.V.
          </h1>
          <p className="text-lg text-stone-500 italic">
            Premium haardhout voor de scherpste prijs - Goedkoopste van Nederland
          </p>
        </header>

        {/* Bedrijfsinformatie */}
        <InfoTable
          title="Bedrijfsinformatie"
          rows={[
            { label: 'Officiele naam', value: 'De Vuurmeester Haardhout B.V.' },
            { label: 'Handelsnaam', value: 'De Vuurmeester' },
            { label: 'Opgericht', value: '2020' },
            { label: 'Categorie', value: 'Haardhout & Brandhout' },
            {
              label: 'Locatie',
              value: (
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-orange-500 flex-shrink-0" />
                  Oirschot / Middelbeers, Noord-Brabant, Nederland
                </span>
              ),
            },
            {
              label: 'Website',
              value: (
                <a
                  href="https://www.vuurmeester-haardhout.nl"
                  className="text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                >
                  www.vuurmeester-haardhout.nl
                  <ExternalLink className="h-3 w-3" />
                </a>
              ),
            },
            {
              label: 'Telefoon',
              value: (
                <a
                  href="tel:+31682091984"
                  className="text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                >
                  <Phone className="h-4 w-4" />
                  06 82 09 19 84
                </a>
              ),
            },
            {
              label: 'E-mail',
              value: (
                <a
                  href="mailto:contact@vuurmeester-haardhout.nl"
                  className="text-orange-600 hover:text-orange-700 hover:underline inline-flex items-center gap-1"
                >
                  <Mail className="h-4 w-4" />
                  contact@vuurmeester-haardhout.nl
                </a>
              ),
            },
            { label: 'Klantwaardering', value: '4.9/5 sterren (62 reviews)' },
            { label: 'Klanten geholpen', value: '10.000+' },
          ]}
        />

        {/* Over het bedrijf */}
        <SectionHeading>Over het bedrijf</SectionHeading>
        <p className="text-stone-600 mb-4">
          De Vuurmeester is een Nederlands haardhoutbedrijf gevestigd in Oirschot/Middelbeers,
          Noord-Brabant. Het bedrijf levert premium haardhout door heel Nederland en positioneert
          zich als de goedkoopste leverancier dankzij een eigen zagerij.
        </p>
        <p className="text-stone-600 mb-4">
          Met meer dan 10.000 tevreden klanten en een gemiddelde beoordeling van 4.9 uit 5 sterren,
          staat De Vuurmeester bekend om persoonlijk contact, snelle levering en uitstekende
          prijs-kwaliteitverhouding.
        </p>

        {/* Producten */}
        <SectionHeading>Producten</SectionHeading>
        <p className="text-stone-600 mb-6">
          De Vuurmeester biedt een breed assortiment haardhout voor verschillende toepassingen:
        </p>

        <div className="space-y-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="bg-amber-50 border-l-4 border-amber-400 p-5 rounded-r-lg"
            >
              <h3 className="text-lg font-semibold text-stone-900 mb-2">
                {product.icon}{' '}
                {product.href ? (
                  <Link
                    href={product.href}
                    className="text-orange-600 hover:text-orange-700 hover:underline"
                  >
                    {product.name}
                  </Link>
                ) : (
                  product.name
                )}
              </h3>
              <p className="text-sm text-stone-700 mb-2">
                <strong>Vochtgehalte:</strong> {product.moisture} |{' '}
                <strong>Lengte:</strong> {product.length}
              </p>
              <p className="text-sm text-stone-600 mb-2">{product.description}</p>
              <p className="text-sm text-stone-600">
                <strong>Houtsoorten:</strong> {product.woodType}
              </p>
              <p className="text-sm text-stone-600">
                <strong>Ideaal voor:</strong> {product.idealFor}
              </p>
              <p className="text-sm text-stone-600">
                <strong>Beschikbaar in:</strong> {product.sizes}
              </p>
            </div>
          ))}
        </div>

        {/* Kwaliteitsstandaarden */}
        <SectionHeading>Kwaliteitsstandaarden</SectionHeading>
        <InfoTable rows={qualityStandards.map((q) => ({ label: q.label, value: q.value }))} />

        {/* Levering & Bezorging */}
        <SectionHeading>Levering &amp; Bezorging</SectionHeading>
        <p className="text-stone-600 mb-2">
          <strong className="text-stone-900">Dekkingsgebied:</strong> Heel Nederland
        </p>
        <p className="text-stone-600 mb-4">
          De Vuurmeester levert vanuit het depot in Middelbeers door alle 12 provincies van
          Nederland:
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mb-6">
          {provinces.map((province) => (
            <div
              key={province}
              className="flex items-center gap-2 text-sm text-stone-600"
            >
              <MapPin className="h-3 w-3 text-orange-500 flex-shrink-0" />
              {province}
            </div>
          ))}
        </div>

        <h3 className="text-xl font-semibold text-stone-800 mb-3">Leveringsinformatie</h3>
        <ul className="space-y-2 mb-6">
          {deliveryDetails.map((detail) => (
            <li key={detail.label} className="text-stone-600 text-sm flex items-start gap-2">
              <span className="text-orange-500 mt-0.5">-</span>
              <span>
                <strong className="text-stone-800">{detail.label}:</strong> {detail.value}
              </span>
            </li>
          ))}
        </ul>
        <p className="text-sm text-stone-500">
          Meer informatie over bezorgkosten per regio?{' '}
          <Link
            href="/bezorgkosten"
            className="text-orange-600 hover:text-orange-700 hover:underline"
          >
            Bekijk de bezorgkosten
          </Link>{' '}
          of{' '}
          <Link
            href="/leveren-afhalen"
            className="text-orange-600 hover:text-orange-700 hover:underline"
          >
            lees meer over levering &amp; afhalen
          </Link>
          .
        </p>

        {/* Prijzen & Betaling */}
        <SectionHeading>Prijzen &amp; Betaling</SectionHeading>
        <p className="text-stone-600 mb-2">
          <strong className="text-stone-900">Prijsklasse:</strong> &euro;50 - &euro;200 per
          m&sup3; (afhankelijk van type en volume)
        </p>
        <p className="text-stone-600 mb-4">
          Grotere bestellingen hebben lagere kosten per m&sup3;. Bereken exacte bezorgkosten op
          de website door postcode en gewenste hoeveelheid in te vullen.
        </p>

        <h3 className="text-xl font-semibold text-stone-800 mb-3">Betaalmethoden</h3>
        <ul className="space-y-2 mb-4">
          <li className="text-stone-600 flex items-center gap-2">
            <span className="text-orange-500">-</span>
            iDEAL (online)
          </li>
          <li className="text-stone-600 flex items-center gap-2">
            <span className="text-orange-500">-</span>
            Pinnen bij levering
          </li>
          <li className="text-stone-600 flex items-center gap-2">
            <span className="text-orange-500">-</span>
            Contant bij levering
          </li>
        </ul>

        {/* Retourbeleid */}
        <SectionHeading>Retourbeleid</SectionHeading>
        <p className="text-stone-600 mb-2">
          De Vuurmeester hanteert een tevredenheidsgarantie met 14 dagen retourrecht conform
          Nederlandse wetgeving. Bij gebreken of klachten over de kwaliteit kunnen klanten direct
          contact opnemen voor een oplossing.
        </p>
        <p className="text-sm text-stone-500">
          Lees de volledige{' '}
          <Link
            href="/algemene-voorwaarden"
            className="text-orange-600 hover:text-orange-700 hover:underline"
          >
            algemene voorwaarden
          </Link>
          .
        </p>

        {/* Verbruiksadvies */}
        <SectionHeading>Verbruiksadvies</SectionHeading>
        <InfoTable rows={usageData.map((u) => ({ label: u.label, value: u.value }))} />

        {/* Waarom De Vuurmeester */}
        <SectionHeading>Waarom De Vuurmeester?</SectionHeading>
        <div className="flex flex-wrap gap-2 my-4">
          {badges.map((badge) => (
            <span
              key={badge}
              className="inline-block bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Gerelateerde Links */}
        <SectionHeading>Gerelateerde Links</SectionHeading>
        <ul className="space-y-2 my-4">
          {relatedLinks.map((link) => (
            <li key={link.href} className="flex items-center gap-2">
              <ExternalLink className="h-3 w-3 text-orange-500 flex-shrink-0" />
              <Link
                href={link.href}
                className="text-orange-600 hover:text-orange-700 hover:underline"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Contact CTA */}
        <div className="mt-12 bg-stone-50 rounded-2xl p-8 text-center">
          <MessageCircle className="h-12 w-12 text-orange-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-stone-900 mb-2">Vragen?</h3>
          <p className="text-stone-600 mb-6">
            Neem gerust contact op via WhatsApp. We reageren meestal binnen een uur.
          </p>
          <a
            href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20De%20Vuurmeester."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp ons
          </a>
        </div>

        {/* Footer note */}
        <footer className="mt-12 pt-6 border-t border-stone-200 text-sm text-stone-500">
          <p>
            <strong>Laatst bijgewerkt:</strong> 25 februari 2026
            <br />
            <strong>Versie:</strong> 1.0
            <br />
            <strong>Bron:</strong>{' '}
            <a
              href="/.well-known/brand-facts.json"
              className="text-orange-600 hover:text-orange-700 hover:underline"
            >
              brand-facts.json
            </a>
          </p>
          <p className="mt-4">
            Deze pagina bevat feitelijke, neutrale informatie over De Vuurmeester Haardhout B.V. en
            haar producten. Voor actuele prijzen en beschikbaarheid, zie de{' '}
            <Link href="/" className="text-orange-600 hover:text-orange-700 hover:underline">
              officiele webshop
            </Link>
            .
          </p>
        </footer>
      </div>
    </div>
  )
}
