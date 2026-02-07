# SEO Implementatie Plan - De Vuurmeester Webshop

Dit document bevat het complete werkplan voor 5 parallelle agents. Elke agent heeft een eigen sectie met alle context, specificaties en code-patronen die nodig zijn om zelfstandig te werken.

**Webshop root**: `/Users/bramvandesande/Vuurmeester/webshop`
**Live domain**: `https://www.vuurmeester-haardhout.nl`
**Tech stack**: Next.js 16 (App Router), Tailwind CSS, shadcn/ui, WooCommerce Store API
**Styling**: Oranje (#f97316) als accent, stone kleuren als basis, Inter font

---

## Voortgang

| Agent | Status | Notities |
|-------|--------|----------|
| **Agent 1** — Technische SEO Fixes | ✅ KLAAR | Alle 5 taken afgerond |
| **Agent 2** — Locatie Data & Infra | ✅ KLAAR | Types, 7 provincies, 40 steden met unieke content |
| **Agent 3** — Locatie Pages & Components | ✅ KLAAR | Overzichtspagina + 47 dynamische pagina's (40 steden, 7 provincies) |
| **Agent 4** — Synoniempagina's | ✅ KLAAR | Alle 5 pagina's aangemaakt, TypeScript compileert |
| **Agent 5** — Sitemap, Footer & Linking | ✅ KLAAR | Sitemap uitgebreid, footer 5 kolommen, interne links toegevoegd |

---

## AGENT 1: Technische SEO Fixes (bestaande pagina's) — ✅ AFGEROND

### Uitgevoerde wijzigingen

| Taak | Status | Gewijzigde bestanden |
|------|--------|---------------------|
| 1.1 Bezorgkosten metadata fix | ✅ | `bezorgkosten/page.tsx` (server wrapper), `bezorgkosten/bezorgkosten-client.tsx` (client component) |
| 1.2 BreadcrumbList JSON-LD + url | ✅ | `product/[slug]/page.tsx` — BreadcrumbList schema + `url` op Product & Offer |
| 1.3 WebSite schema | ✅ | `layout.tsx` — WebSite schema met SearchAction in `<head>` |
| 1.4 noindex checkout | ✅ | `next.config.ts` — X-Robots-Tag op `/afrekenen` en `/bestelling/:path*` |
| 1.5 OpenGraph images | ✅ | `over-ons`, `veelgestelde-vragen`, `privacybeleid`, `algemene-voorwaarden` — openGraph.images toegevoegd |

### Aandachtspunten voor andere agents

- **next.config.ts** heeft nu al een `headers()` functie met meerdere entries. Als Agent 5 of anderen hier iets aan willen toevoegen, voeg entries toe aan de bestaande return array — maak GEEN nieuwe `headers()` functie.
- **layout.tsx `<head>`** bevat nu 2 JSON-LD scripts (LocalBusiness + WebSite). Voeg nieuwe scripts toe NA het WebSite script, VOOR `</head>`.
- **product/[slug]/page.tsx** heeft nu 2 JSON-LD scripts (Product + BreadcrumbList). De `productJsonLd` bevat nu `url` velden op zowel het root object als het `offers` object.
- **bezorgkosten/page.tsx** is nu een server component die `BezorgkostenClient` importeert. De `"use client"` code staat in `bezorgkosten-client.tsx`. Alle interactieve logica (useState, useEffect) zit in de client component.

---

### Doel
Fix alle technische SEO-problemen op bestaande pagina's. Raak GEEN nieuwe pagina's aan — dat doen andere agents.

### Taak 1.1: Bezorgkosten metadata fix (KRITIEK)

**Probleem**: `src/app/bezorgkosten/page.tsx` is een `"use client"` component en kan GEEN `metadata` exporteren. De pagina is daardoor niet goed indexeerbaar door Google.

**Oplossing**: Splits in een server wrapper + client component.

1. Hernoem de huidige `src/app/bezorgkosten/page.tsx` naar `src/app/bezorgkosten/bezorgkosten-client.tsx`
2. Pas de component-export aan: verander `export default function BezorgkostenPage()` naar `export default function BezorgkostenClient()`
3. Maak een nieuwe `src/app/bezorgkosten/page.tsx` (server component):

```tsx
import { Metadata } from "next";
import BezorgkostenClient from "./bezorgkosten-client";

export const metadata: Metadata = {
  title: "Bezorgkosten berekenen",
  description:
    "Bereken direct je bezorgkosten voor haardhout. Vaste tarieven per regio, bezorging door heel Nederland. Vanaf €20 in de buurt van ons depot.",
  openGraph: {
    title: "Bezorgkosten berekenen | De Vuurmeester",
    description:
      "Bereken direct je bezorgkosten voor haardhout. Bezorging door heel Nederland.",
  },
};

export default function BezorgkostenPage() {
  return <BezorgkostenClient />;
}
```

### Taak 1.2: BreadcrumbList JSON-LD op productpagina's

**Bestand**: `src/app/product/[slug]/page.tsx`

Voeg een BreadcrumbList schema toe NAAST het bestaande Product schema. Zoek de `productJsonLd` const (rond regel 96) en voeg daarna toe:

```tsx
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.vuurmeester-haardhout.nl",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: name,
      item: `https://www.vuurmeester-haardhout.nl/product/${slug}`,
    },
  ],
};
```

Voeg in de return JSX een extra script tag toe, direct na de bestaande `<script type="application/ld+json">`:

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
/>
```

Voeg ook `url` toe aan het bestaande `productJsonLd` object:
```tsx
const productJsonLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name,
  url: `https://www.vuurmeester-haardhout.nl/product/${slug}`,  // TOEVOEGEN
  // ... rest blijft hetzelfde
```

En voeg `url` toe aan het `offers` object:
```tsx
offers: {
  "@type": "Offer",
  url: `https://www.vuurmeester-haardhout.nl/product/${slug}`,  // TOEVOEGEN
  // ... rest blijft hetzelfde
```

### Taak 1.3: WebSite schema in layout.tsx

**Bestand**: `src/app/layout.tsx`

Voeg een EXTRA `<script type="application/ld+json">` toe direct NA het bestaande LocalBusiness script (na regel 103, voor `</head>`):

```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://www.vuurmeester-haardhout.nl",
      name: "De Vuurmeester",
      potentialAction: {
        "@type": "SearchAction",
        target: {
          "@type": "EntryPoint",
          urlTemplate:
            "https://www.vuurmeester-haardhout.nl/?q={search_term_string}",
        },
        "query-input": "required name=search_term_string",
      },
    }),
  }}
/>
```

### Taak 1.4: noindex headers voor checkout-pagina's

**Bestand**: `next.config.ts`

Voeg een `headers()` functie toe aan de Next.js config:

```ts
async headers() {
  return [
    {
      source: "/afrekenen",
      headers: [
        { key: "X-Robots-Tag", value: "noindex, follow" },
      ],
    },
    {
      source: "/bestelling/:path*",
      headers: [
        { key: "X-Robots-Tag", value: "noindex, follow" },
      ],
    },
  ];
},
```

### Taak 1.5: OpenGraph images op pagina's zonder

Voeg `openGraph.images` toe aan de metadata van deze pagina's (als ze dat nog niet hebben):

- `src/app/over-ons/page.tsx` — voeg `openGraph: { images: [{ url: "/images/hero-header.jpg", width: 6000, height: 2500, alt: "De Vuurmeester - Over ons" }] }` toe
- `src/app/veelgestelde-vragen/page.tsx` — idem met alt "De Vuurmeester - Veelgestelde vragen"
- `src/app/privacybeleid/page.tsx` — idem
- `src/app/algemene-voorwaarden/page.tsx` — idem

---

## AGENT 2: Locatiepagina's — Data & Infrastructuur — ✅ AFGEROND

### Uitgevoerde wijzigingen

| Taak | Status | Gewijzigde bestanden |
|------|--------|---------------------|
| 2.1 Types aanmaken | ✅ | `src/lib/locations/types.ts` — CityData, ProvinceData, FAQItem interfaces |
| 2.2 Provinciedata | ✅ | `src/lib/locations/provinces.ts` — 7 provincies met unieke intro's |
| 2.3 Stadsdata | ✅ | `src/lib/locations/cities.ts` — 40 steden (3 tier 1, 14 tier 2, 23 tier 3) |

### Data statistieken

| Categorie | Aantal |
|-----------|--------|
| Totaal steden | 40 |
| Tier 1 (uitgebreid, met wijken, 5 FAQ) | 3 (Tilburg, Eindhoven, Breda) |
| Tier 2 (semi-uniek, 3 FAQ) | 14 |
| Tier 3 (template-based, 3 FAQ) | 23 |
| Provincies | 7 |
| Noord-Brabant steden | 27 |
| Fixed-rate steden (€20) | 5 (Oirschot, Best, Hilvarenbeek, Boxtel, Diessen) |

### Aandachtspunten voor andere agents

- **Import paden**: Alle data zit in `src/lib/locations/`. Gebruik:
  ```tsx
  import { getCityBySlug, getAllCitySlugs, getCitiesByProvince, getAllCities, getCitiesByTier } from "@/lib/locations/cities";
  import { getProvinceBySlug, getAllProvinceSlugs, getAllProvinces } from "@/lib/locations/provinces";
  import type { CityData, ProvinceData, FAQItem } from "@/lib/locations/types";
  ```
- **Extra helper functies** (niet in plan maar handig): `getAllCities()`, `getAllProvinces()`, `getCitiesByTier(tier)` zijn toegevoegd.
- **Shipping kosten**: Staan NIET in de CityData — moeten runtime berekend worden via `calculateShipping(city.samplePostcode, cubicMeters)`. De FAQ-teksten noemen wel de juiste bedragen.
- **Limburg**: Heeft 0 steden in de data. De provincie-pagina kan nog steeds gerenderd worden met de intro-tekst, maar het steden-grid zal leeg zijn.
- **Oosterhout**: Base rate is €48.50 (prefix "49"), in FAQ en intro afgerond naar "€49" weergegeven.
- **TypeScript**: Alle 3 bestanden compileren zonder fouten (`npx tsc --noEmit` succesvol).

---

### Doel
Maak alle data-bestanden en TypeScript types aan voor de locatiepagina's. Dit is het fundament waar Agent 3 bovenop bouwt.

### Taak 2.1: Types aanmaken

**Nieuw bestand**: `src/lib/locations/types.ts`

```tsx
export type CityTier = 1 | 2 | 3;

export interface CityData {
  slug: string;
  name: string;
  province: string; // slug van de provincie
  postcodePrefix: string; // eerste 2 cijfers, bijv. "56"
  samplePostcode: string; // voor shipping berekening, bijv. "5611AB"
  distanceFromDepot: number; // km
  estimatedDelivery: string; // bijv. "3-5 werkdagen"
  tier: CityTier;
  introduction: string; // unieke SEO-tekst, 100-200 woorden
  neighborhoods?: string[]; // wijken (alleen tier 1)
  metaTitle: string;
  metaDescription: string;
  faqItems: FAQItem[];
  nearbyCities: string[]; // slugs
}

export interface ProvinceData {
  slug: string;
  name: string;
  cities: string[]; // slugs van steden
  introduction: string; // 100-150 woorden
  shippingRange: string; // bijv. "€39 - €65"
  metaTitle: string;
  metaDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
```

### Taak 2.2: Provinciedata aanmaken

**Nieuw bestand**: `src/lib/locations/provinces.ts`

Maak data voor deze 7 provincies met hun shipping ranges (afgeleid uit `src/lib/shipping.ts`):

| Provincie | Slug | Postcode prefixes | Base shipping (1m³) |
|-----------|------|-------------------|---------------------|
| Noord-Brabant | `noord-brabant` | 50-57 (€39-€45), 58-59 (€64-€65) | €39 - €65 |
| Zuid-Holland | `zuid-holland` | 23-33 | €64 |
| Gelderland | `gelderland` | 40-42, 46-49, 66-73 | €45 - €64 |
| Noord-Holland | `noord-holland` | 10-22 | €69 - €80 |
| Utrecht | `utrecht` | 34-39 | €64 |
| Flevoland | `flevoland` | 80-83 (excl. 45=€120) | €70 - €89 |
| Limburg | `limburg` | 58-65, 60-65 | €58 - €69 |

Elke provincie krijgt een unieke introductietekst van 100-150 woorden die:
- De Vuurmeester als lokaal bedrijf uit Middelbeers positioneert
- De shipping range noemt
- Keywords bevat: "haardhout [provincie]", "haardhout bezorgen [provincie]"

Exporteer helpers:
```tsx
export function getProvinceBySlug(slug: string): ProvinceData | undefined
export function getAllProvinceSlugs(): string[]
```

### Taak 2.3: Stadsdata aanmaken

**Nieuw bestand**: `src/lib/locations/cities.ts`

Maak data voor alle steden hieronder. Dit is de kern van het werk — **elke stad moet unieke content krijgen**!

**BELANGRIJK**: De `introduction` tekst moet per stad UNIEK zijn. Gebruik:
- Aantal orders als bewijs ("meer dan X tevreden klanten in [Stad]")
- Afstand tot depot ("op slechts X km van ons depot")
- Specifieke bezorgkosten voor die stad
- Wijknamen voor tier 1 steden
- Lokale relevantie ("vanuit Middelbeers rijden we zo bij u voor de deur")

**Shipping kosten per stad**: Gebruik de `samplePostcode` + de `calculateShipping()` functie uit `src/lib/shipping.ts`. De shipping rates zijn:
- Postcode prefix → { base, surcharge }
- Formule: base + (base × surcharge × 0.90^n) per extra m³
- Fixed rate postcodes (5081, 5084, etc.) = €20 flat

#### TIER 1 steden (uitgebreide unieke content, 150-200 woorden, met wijken):

| Stad | Slug | Orders | Postcode prefix | Sample postcode | Afstand depot | Wijken |
|------|------|--------|-----------------|-----------------|---------------|--------|
| Tilburg | `tilburg` | 111 | 50 | 5011AB | 30 km | Reeshof, Centrum, Noord, Berkel-Enschot, Udenhout |
| Eindhoven | `eindhoven` | 107 | 56 | 5611AB | 25 km | Woensel, Strijp, Tongelre, Gestel, Stratum |
| Breda | `breda` | 48 | 48 | 4811AB | 50 km | Centrum, Princenhage, Bavel, Ulvenhout, Haagse Beemden |

#### TIER 2 steden (semi-unieke content, 100-150 woorden):

| Stad | Slug | Orders | PC prefix | Sample PC | Afstand |
|------|------|--------|-----------|-----------|---------|
| Veldhoven | `veldhoven` | 35 | 55 | 5501AB | 20 km |
| Nuenen | `nuenen` | 31 | 56 | 5671AB | 20 km |
| Oirschot | `oirschot` | 27 | 55 | 5688AB | 5 km |
| Apeldoorn | `apeldoorn` | 26 | 73 | 7311AB | 120 km |
| Waalre | `waalre` | 25 | 55 | 5581AB | 18 km |
| Best | `best` | 23 | 56 | 5681AB | 15 km |
| Hilvarenbeek | `hilvarenbeek` | 23 | 50 | 5081AB | 10 km |
| Almere | `almere` | 22 | 13 | 1311AB | 140 km |
| Lelystad | `lelystad` | 21 | 82 | 8211AB | 150 km |
| Helmond | `helmond` | 21 | 57 | 5701AB | 35 km |
| Arnhem | `arnhem` | 20 | 68 | 6811AB | 100 km |
| Rotterdam | `rotterdam` | 19 | 30 | 3011AB | 95 km |
| Den Haag | `den-haag` | 10 | 25 | 2511AB | 110 km |
| Den Bosch | `den-bosch` | 16 | 52 | 5211AB | 30 km |

#### TIER 3 steden (template-based, 80-100 woorden):

| Stad | Slug | PC prefix | Sample PC | Afstand |
|------|------|-----------|-----------|---------|
| Goirle | `goirle` | 50 | 5051AB | 25 km |
| Oisterwijk | `oisterwijk` | 50 | 5061AB | 15 km |
| Geldrop | `geldrop` | 56 | 5661AB | 25 km |
| Son en Breugel | `son-en-breugel` | 56 | 5691AB | 18 km |
| Oosterhout | `oosterhout` | 49 | 4901AB | 45 km |
| Deurne | `deurne` | 57 | 5751AB | 40 km |
| Roosendaal | `roosendaal` | 47 | 4701AB | 65 km |
| Valkenswaard | `valkenswaard` | 55 | 5551AB | 20 km |
| Eersel | `eersel` | 55 | 5521AB | 10 km |
| Ede | `ede` | 67 | 6711AB | 100 km |
| Hilversum | `hilversum` | 12 | 1211AB | 120 km |
| Dongen | `dongen` | 51 | 5101AB | 35 km |
| Vught | `vught` | 52 | 5261AB | 25 km |
| Dordrecht | `dordrecht` | 33 | 3311AB | 80 km |
| Bladel | `bladel` | 55 | 5531AB | 15 km |
| Boxtel | `boxtel` | 52 | 5281AB | 20 km |
| Soest | `soest` | 37 | 3761AB | 100 km |
| Amsterdam | `amsterdam` | 3 | 10 | 1011AB | 130 km |
| Utrecht | `utrecht` | 5 | 35 | 3511AB | 85 km |
| Nijmegen | `nijmegen` | 7 | 65 | 6511AB | 85 km |
| Berkel-Enschot | `berkel-enschot` | 37 | 50 | 5056AB | 25 km |
| Diessen | `diessen` | 16 | 50 | 5087AB | 8 km |
| Waalwijk | `waalwijk` | 5 | 51 | 5141AB | 35 km |

#### FAQ items per stad
Elke stad krijgt 3 FAQ items:
1. "Wat zijn de bezorgkosten voor haardhout in [Stad]?" — met het juiste tarief
2. "Hoe lang duurt de bezorging naar [Stad]?" — met afstand en levertijd
3. "Kan ik haardhout ook ophalen als ik in [Stad] woon?" — verwijzing naar depot in Middelbeers

Tier 1 steden krijgen 2 extra FAQ items:
4. "Bezorgen jullie in alle wijken van [Stad]?" — noem de wijken
5. "Welk haardhout is het populairst in [Stad]?" — verwijzing naar producten

#### Nearby cities per stad
Koppel elke stad aan 4-6 nabijgelegen steden die ook een pagina hebben. Gebruik geografische nabijheid.

Exporteer helpers:
```tsx
export function getCityBySlug(slug: string): CityData | undefined
export function getAllCitySlugs(): string[]
export function getCitiesByProvince(provinceSlug: string): CityData[]
```

---

## AGENT 3: Locatiepagina's — Pages & Components

### Doel
Bouw de Next.js pagina's en React-componenten voor de locatiepagina's. Gebruikt de data-structuur van Agent 2.

**BELANGRIJK**: Agent 2 maakt de data-bestanden aan. Als je merkt dat ze er nog niet zijn, maak dan placeholder imports en ga door. De types in `src/lib/locations/types.ts` zijn leidend.

### Taak 3.1: Overzichtspagina

**Nieuw bestand**: `src/app/haardhout-bezorgen/page.tsx`

Server component met:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haardhout bezorgen door heel Nederland",
  description:
    "De Vuurmeester bezorgt premium haardhout door heel Nederland. Bekijk bezorgkosten per stad en regio. Vanaf €20 in Brabant, persoonlijke service gegarandeerd.",
  openGraph: {
    title: "Haardhout bezorgen door heel Nederland | De Vuurmeester",
    description: "Bekijk bezorgkosten per stad en regio. Vanaf €20 in Brabant.",
  },
};
```

Content:
- H1: "Haardhout bezorgen door heel Nederland"
- Korte intro (2-3 zinnen)
- Per provincie: H2 met provincienaam, shipping range, grid van steden als links
- Elke stad-link toont: stadsnaam + "vanaf €XX"
- CTA naar homepage/producten
- Gebruik dezelfde design-taal als rest van de site (stone kleuren, oranje accenten)

### Taak 3.2: Stad/Provincie dynamische pagina

**Nieuw bestand**: `src/app/haardhout-bezorgen/[slug]/page.tsx`

Dit is de kernpagina. Eén `[slug]` route handelt ZOWEL stad- als provinciepagina's af.

```tsx
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getCityBySlug, getAllCitySlugs, getCitiesByProvince } from "@/lib/locations/cities";
import { getProvinceBySlug, getAllProvinceSlugs } from "@/lib/locations/provinces";
import { calculateShipping } from "@/lib/shipping";
import { woocommerce } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [...getAllCitySlugs(), ...getAllProvinceSlugs()].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const city = getCityBySlug(slug);
  if (city) {
    return {
      title: city.metaTitle,
      description: city.metaDescription,
      alternates: { canonical: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${slug}` },
      openGraph: {
        title: city.metaTitle,
        description: city.metaDescription,
        locale: "nl_NL",
      },
    };
  }
  const province = getProvinceBySlug(slug);
  if (province) {
    return {
      title: province.metaTitle,
      description: province.metaDescription,
      alternates: { canonical: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${slug}` },
    };
  }
  return { title: "Niet gevonden" };
}
```

#### Stadspagina layout

Bouw de stadspagina met deze secties (van boven naar beneden):

1. **Breadcrumbs** (visueel + JSON-LD):
   ```
   Home > Haardhout bezorgen > [Provincie] > [Stad]
   ```

2. **Hero sectie**: H1 "Haardhout bezorgen in [Stad]", intro tekst uit city data, oranje CTA-button

3. **Bezorgkosten blok**: Toon kosten voor 1, 2, 3, 5 m³ (berekend via `calculateShipping(city.samplePostcode, n)`). Gebruik een tabel of cards.

4. **Producten sectie**: Toon haardhout-producten via `woocommerce.getHaardhoutProducts()`. Gebruik de bestaande `ProductCard` component.

5. **"Hoe werkt het" sectie**: 3 stappen (Bestel online → We nemen contact op → Los gestort geleverd)

6. **FAQ sectie**: Accordion met de stad-specifieke FAQ items. Gebruik een `<details>`/`<summary>` pattern of een simpele accordion. Voeg FAQPage JSON-LD schema toe.

7. **Nabijgelegen steden**: Grid van links naar nearby cities. "Bekijk ook haardhout bezorgen in: [stad1], [stad2], ..."

8. **CTA sectie**: "Haardhout bestellen?" met link naar homepage

#### JSON-LD schemas per stadspagina

Voeg 3 JSON-LD scripts toe:

```tsx
// 1. LocalBusiness met serviceArea
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "De Vuurmeester",
  url: `https://www.vuurmeester-haardhout.nl/haardhout-bezorgen/${city.slug}`,
  telephone: "+31682091984",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Middelbeers",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  areaServed: {
    "@type": "City",
    name: city.name,
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "62",
    bestRating: "5",
  },
}

// 2. BreadcrumbList
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.vuurmeester-haardhout.nl" },
    { "@type": "ListItem", position: 2, name: "Haardhout bezorgen", item: "https://www.vuurmeester-haardhout.nl/haardhout-bezorgen" },
    { "@type": "ListItem", position: 3, name: city.name },
  ],
}

// 3. FAQPage (uit city.faqItems)
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: city.faqItems.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
}
```

#### Provinciepagina layout

Simpeler dan stadspagina:
- H1: "Haardhout bezorgen in [Provincie]"
- Intro tekst
- Shipping range
- Grid van alle steden in de provincie (als cards met link, bezorgkosten, afstand)
- CTA

#### ISR/Revalidation

```tsx
export const revalidate = 3600; // 1 uur
```

### Taak 3.3: Design richtlijnen

Volg het bestaande design van de webshop:
- **Achtergrond**: `bg-white` voor content, `bg-stone-50` voor afwisselende secties
- **Tekst**: `text-stone-900` voor headings, `text-stone-600` voor body
- **Accent**: `text-orange-600` / `bg-orange-500` voor CTA buttons
- **Cards**: Gebruik `border rounded-lg` of bestaande shadcn Card component
- **Container**: `container mx-auto px-4`
- **Spacing**: `py-12` voor secties, `gap-6` of `gap-8` voor grids
- **Icons**: Gebruik Lucide React icons (Truck, MapPin, Clock, MessageCircle, ChevronDown, ArrowLeft, Check)
- **Buttons**: Gebruik de bestaande `Button` component uit `@/components/ui/button`

---

## AGENT 4: Synoniempagina's — ✅ AFGEROND

### Uitgevoerde wijzigingen

| Pagina | Bestand | Unieke content focus |
|--------|---------|---------------------|
| `/brandhout` | `src/app/brandhout/page.tsx` | Wat is brandhout, verschil premium vs goedkoop, USP-balk, 4 voordelen-cards |
| `/kachelhout` | `src/app/kachelhout/page.tsx` | Best practices houtkachel, 3 stooktips (vocht/opslag/top-down methode) |
| `/stookhout` | `src/app/stookhout/page.tsx` | Ovengedroogd vs halfdroog, 5 voordelen-checklist, 3-stappen bestelproces |
| `/openhaardhout` | `src/app/openhaardhout/page.tsx` | Sfeer & vlammenspel, veilig stoken, 4 beleving-cards (sfeer/warmte/geur/veiligheid) |
| `/ovengedroogd-haardhout` | `src/app/ovengedroogd-haardhout/page.tsx` | Vergelijkingstabel oven vs halfdroog, 4 voordelen-icons, opslagtips blok |

### Aandachtspunten voor andere agents

- **Agent 5 (Sitemap)**: De 5 synoniempagina-slugs die in de sitemap moeten: `brandhout`, `kachelhout`, `stookhout`, `openhaardhout`, `ovengedroogd-haardhout`. Dit staat al beschreven in Taak 5.1.
- **Agent 5 (Interne links)**: De synoniempagina's linken al naar `/bezorgkosten`, `/haardhout-bezorgen` en `/` (homepage). Agent 5 hoeft hier GEEN extra links aan toe te voegen.
- **Import patroon**: Alle pagina's gebruiken `import { getHaardhoutProducts } from "@/lib/woocommerce/client"` (standalone export), NIET `woocommerce.getHaardhoutProducts()`. Dit werkt identiek maar is iets cleaner.
- **Afwijking van template**: Elke pagina heeft een unieke middelste sectie (tips, vergelijkingstabel, voordelen, etc.) ipv alleen tekst + producten. Dit geeft meer waarde per pagina en voorkomt duplicate content signalen.
- **Geen `revalidate` gezet**: Omdat deze pagina's statische content bevatten (alleen producten zijn dynamisch), is er geen `revalidate` export toegevoegd. De producten worden bij build-time opgehaald. Als je ISR wilt, voeg `export const revalidate = 3600;` toe aan elke pagina.

---

### Doel
Maak 5 synoniem-landingspagina's aan die ranken op alternatieve zoektermen. Haardhoutcompany.nl doet dit al succesvol.

### Taak 4.1: Maak deze 5 pagina's

Elke pagina is een server component met metadata, unieke H1, unieke content (300-500 woorden), producten grid, en CTA.

#### `/brandhout` — `src/app/brandhout/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Brandhout kopen | Premium kwaliteit",
  description:
    "Brandhout kopen bij De Vuurmeester. Ovengedroogd en halfdroog brandhout, bezorgd door heel Nederland. Scherpe prijzen, persoonlijke service.",
};
```

- H1: "Brandhout kopen bij De Vuurmeester"
- Content focus: Wat is brandhout, waarom kiezen voor premium brandhout, verschil met goedkoop brandhout
- Toon producten via `woocommerce.getHaardhoutProducts()`
- Link naar bezorgkosten, FAQ, locatiepagina's
- "Veel mensen zoeken op brandhout, openhaardhout of haardhout — het is allemaal hetzelfde product"

#### `/kachelhout` — `src/app/kachelhout/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Kachelhout kopen | Voor houtkachel & open haard",
  description:
    "Kachelhout kopen? Bij De Vuurmeester bestel je ovengedroogd kachelhout voor je houtkachel. Bezorging heel Nederland, scherpe prijzen.",
};
```

- H1: "Kachelhout kopen voor je houtkachel"
- Content focus: Best practices voor kachelhout, welke houtsoort, vochtpercentage
- Link naar producten, FAQ over vochtpercentage

#### `/stookhout` — `src/app/stookhout/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Stookhout kopen | Ovengedroogd & halfdroog",
  description:
    "Stookhout kopen bij De Vuurmeester. Premium ovengedroogd en halfdroog stookhout, bezorgd aan huis. Goedkoopste van Nederland.",
};
```

- H1: "Stookhout kopen bij De Vuurmeester"
- Content focus: Stookhout voor open haard, houtkachel, inzet

#### `/openhaardhout` — `src/app/openhaardhout/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Openhaardhout kopen | Sfeer in huis",
  description:
    "Openhaardhout kopen? Premium haardhout voor je open haard, ovengedroogd voor direct stoken. Bezorging heel Nederland.",
};
```

- H1: "Openhaardhout kopen voor je open haard"
- Content focus: Waarom ovengedroogd hout beter is voor open haard, vonken, sfeer

#### `/ovengedroogd-haardhout` — `src/app/ovengedroogd-haardhout/page.tsx`

```tsx
export const metadata: Metadata = {
  title: "Ovengedroogd haardhout kopen | Direct stoken",
  description:
    "Ovengedroogd haardhout met minder dan 20% vocht. Direct te stoken, minder rook, meer warmte. Bezorgd door heel Nederland.",
};
```

- H1: "Ovengedroogd haardhout: direct stoken, maximale warmte"
- Content focus: Wat is ovengedroogd, voordelen vs halfdroog, vochtpercentage, hoe opslaan

### Template voor elke pagina

Elke pagina volgt dit stramien:

```tsx
import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { woocommerce } from "@/lib/woocommerce/client";
import { ProductCard } from "@/components/products/product-card";

export const metadata: Metadata = { /* ... */ };

export default async function Page() {
  let products = [];
  try {
    products = await woocommerce.getHaardhoutProducts();
  } catch {}

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-stone-50 border-b">
        <div className="container mx-auto px-4 py-3">
          <Link href="/" className="inline-flex items-center text-sm text-stone-600 hover:text-orange-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Terug naar overzicht
          </Link>
        </div>
      </div>

      {/* Hero */}
      <section className="container mx-auto px-4 py-12">
        <h1 className="text-3xl lg:text-4xl font-bold text-stone-900 mb-6">
          {/* H1 hier */}
        </h1>
        <div className="prose prose-stone max-w-3xl">
          {/* Unieke content hier, 300-500 woorden */}
        </div>
      </section>

      {/* Producten */}
      <section className="bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-stone-900 mb-8">Ons assortiment</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p) => (
              <ProductCard key={p.id} product={p} showDeliveryBadge />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-stone-900 mb-4">Bezorgkosten berekenen?</h2>
        <p className="text-stone-600 mb-6">Bereken direct wat de bezorging naar jouw adres kost.</p>
        <Link href="/bezorgkosten" className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 font-medium">
          Bezorgkosten berekenen
        </Link>
      </section>
    </div>
  );
}
```

### Content richtlijnen
- Schrijf in het Nederlands, informeel maar professioneel ("je/jij" aanspreken)
- Geen keyword stuffing — schrijf natuurlijk
- Vermeld altijd: "De Vuurmeester", "Middelbeers", "heel Nederland"
- Elke pagina MOET uniek zijn — geen copy-paste tussen pagina's
- Eindig altijd met een interne link naar producten of bezorgkosten

---

## AGENT 5: Sitemap, Footer & Interne Linking

### Doel
Integreer alle nieuwe pagina's in de sitemap, update de footer met locatie-links, en zorg voor goede interne linking.

### Taak 5.1: Sitemap uitbreiden

**Bestand**: `src/app/sitemap.ts`

Voeg de locatiepagina's en synoniempagina's toe. Import de city en province slugs:

```tsx
import { MetadataRoute } from "next";
import { woocommerce } from "@/lib/woocommerce/client";
import { getAllCitySlugs } from "@/lib/locations/cities";
import { getAllProvinceSlugs } from "@/lib/locations/provinces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.vuurmeester-haardhout.nl";

  const staticPages: MetadataRoute.Sitemap = [
    // ... bestaande pagina's (NIET VERWIJDEREN) ...
    { url: baseUrl, lastModified: "2026-02-01", changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/bezorgkosten`, lastModified: "2026-01-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/veelgestelde-vragen`, lastModified: "2026-01-15", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/over-ons`, lastModified: "2026-01-01", changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/algemene-voorwaarden`, lastModified: "2025-12-01", changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/leveren-afhalen`, lastModified: "2026-02-06", changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/privacybeleid`, lastModified: "2026-02-06", changeFrequency: "yearly", priority: 0.3 },
  ];

  // Synoniempagina's
  const synonymPages: MetadataRoute.Sitemap = [
    "brandhout", "kachelhout", "stookhout", "openhaardhout", "ovengedroogd-haardhout",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Locatie overzichtspagina
  const locationOverview: MetadataRoute.Sitemap = [{
    url: `${baseUrl}/haardhout-bezorgen`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }];

  // Stadspagina's
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/haardhout-bezorgen/${slug}`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Provinciepagina's
  const provincePages: MetadataRoute.Sitemap = getAllProvinceSlugs().map((slug) => ({
    url: `${baseUrl}/haardhout-bezorgen/${slug}`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  // Dynamische productpagina's
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const products = await woocommerce.getProducts({ per_page: 50 });
    productPages = products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: "2026-02-01",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));
  } catch {}

  return [
    ...staticPages,
    ...synonymPages,
    ...locationOverview,
    ...provincePages,
    ...cityPages,
    ...productPages,
  ];
}
```

### Taak 5.2: Footer uitbreiden met bezorgregio's

**Bestand**: `src/components/layout/footer.tsx`

Voeg een 5e kolom toe aan de footer grid (wijzig `md:grid-cols-4` naar `md:grid-cols-5`) met de populairste bezorgregio's:

```tsx
{/* Bezorging */}
<div>
  <h3 className="font-semibold text-white mb-4">Bezorging</h3>
  <ul className="space-y-2 text-sm">
    <li>
      <Link href="/haardhout-bezorgen/eindhoven" className="hover:text-orange-400 transition-colors">
        Haardhout Eindhoven
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen/tilburg" className="hover:text-orange-400 transition-colors">
        Haardhout Tilburg
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen/breda" className="hover:text-orange-400 transition-colors">
        Haardhout Breda
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen/den-bosch" className="hover:text-orange-400 transition-colors">
        Haardhout Den Bosch
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen/arnhem" className="hover:text-orange-400 transition-colors">
        Haardhout Arnhem
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen/rotterdam" className="hover:text-orange-400 transition-colors">
        Haardhout Rotterdam
      </Link>
    </li>
    <li>
      <Link href="/haardhout-bezorgen" className="hover:text-orange-400 transition-colors font-medium">
        Alle bezorgregio's →
      </Link>
    </li>
  </ul>
</div>
```

Op **mobiel** kan de 5-kolom layout vervelend zijn. Gebruik `grid-cols-2 md:grid-cols-5` zodat het op mobiel 2 kolommen is.

### Taak 5.3: Robots.ts update

**Bestand**: `src/app/robots.ts`

Controleer dat de robots.ts NIET de nieuwe pagina's blokkeert. De huidige config blokkeert `/api/` maar laat `/` toe — dat is goed. Geen wijzigingen nodig tenzij er iets mis is.

### Taak 5.4: Interne links op bestaande pagina's

Voeg op de volgende plekken links toe naar de locatie-overzichtspagina:

1. **Homepage** (`src/app/page.tsx`): Voeg onder de "Hoe werkt het?" sectie een regel toe:
   ```tsx
   <p className="text-center text-stone-600 mt-4">
     Bekijk onze <Link href="/haardhout-bezorgen" className="text-orange-600 hover:underline font-medium">bezorgregio's</Link> of <Link href="/bezorgkosten" className="text-orange-600 hover:underline font-medium">bereken je bezorgkosten</Link>.
   </p>
   ```

2. **Leveren & Afhalen** (`src/app/leveren-afhalen/page.tsx`): Voeg ergens een link toe naar `/haardhout-bezorgen`:
   ```tsx
   <Link href="/haardhout-bezorgen" className="text-orange-600 hover:underline">
     Bekijk alle bezorgregio's en tarieven →
   </Link>
   ```

3. **FAQ pagina** (`src/app/veelgestelde-vragen/page.tsx`): In het antwoord over bezorgkosten, voeg een link toe naar `/haardhout-bezorgen`.

---

## Afhankelijkheden tussen agents

```
Agent 1 (Tech fixes)     → GEEN afhankelijkheden, kan direct starten
Agent 2 (Location data)  → GEEN afhankelijkheden, kan direct starten
Agent 3 (Location pages) → HEEFT Agent 2 nodig (types + data)
Agent 4 (Synonym pages)  → GEEN afhankelijkheden, kan direct starten
Agent 5 (Sitemap/footer) → HEEFT Agent 2 nodig (slug exports)
```

**Aanbevolen volgorde**: Start Agent 1, 2 en 4 tegelijk. Agent 3 en 5 starten zodra Agent 2 klaar is, of ze importeren alvast de types en gaan ervan uit dat de data er komt.

---

## Belangrijk: WooCommerce API

De producten-functie die alle agents nodig hebben:

```tsx
import { woocommerce } from "@/lib/woocommerce/client";

// Haal alle haardhout-producten op (server-side, cached 60s)
const products = await woocommerce.getHaardhoutProducts();

// Haal alle producten op
const allProducts = await woocommerce.getProducts({ per_page: 50 });
```

De `Product` type is geëxporteerd uit `@/lib/woocommerce/client`.

## Belangrijk: Shipping berekening

```tsx
import { calculateShipping } from "@/lib/shipping";

// Bereken shipping voor een stad
const cost1m3 = calculateShipping("5611AB", 1); // €39
const cost2m3 = calculateShipping("5611AB", 2); // €39 + surcharge
```

Retourneert `number | null`. `null` = postcode niet ondersteund.
