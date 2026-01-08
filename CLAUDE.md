# Vuurmeester Webshop - Claude Context

Dit is de Next.js frontend voor de Vuurmeester webshop. De backend blijft WooCommerce.

## Gerelateerd Systeem: ERP Admin

Voor database schema, business logica, en gedeelde context zie:
- **Parent folder**: `../CLAUDE.md` (hoofdcontext)
- **Admin repo**: `../admin/` (ERP systeem)
- **Admin docs**: `../admin/docs/` (DATABASE.md, FLOWS.md, API.md, AGENTS.md)

**BELANGRIJK**: Als je wijzigingen maakt die relevant zijn voor het ERP systeem, update dan ook de relevante documentatie in de admin repo. Andersom geldt hetzelfde - de admin repo moet webshop-relevante wijzigingen hier documenteren.

## Project Overzicht

**Vuurmeester** is een haardhoutbedrijf. Deze webshop is een Next.js frontend die WooCommerce als headless backend gebruikt.

## Architectuur

```
┌─────────────────────────────────────────────────────────────┐
│                    NEXT.JS FRONTEND                         │
│                   (deze repository)                         │
│                       Vercel                                │
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌───────────────┐  │
│  │ Checkout    │───▶│ API Route    │───▶│ WooCommerce   │  │
│  │ Form        │    │ /api/checkout│    │ Legacy API    │  │
│  └─────────────┘    └──────┬───────┘    └───────────────┘  │
│                            │                                │
│                            │ iDEAL                          │
│                            ▼                                │
│                     ┌──────────────┐                        │
│                     │ Mollie API   │                        │
│                     │ (direct)     │                        │
│                     └──────┬───────┘                        │
│                            │                                │
└────────────────────────────┼────────────────────────────────┘
                             │
            ┌────────────────┼────────────────┐
            │                │                │
            ▼                ▼                ▼
┌───────────────┐  ┌───────────────┐  ┌───────────────┐
│   Mollie      │  │  WooCommerce  │  │  N8N → ERP    │
│   Payment     │  │  Order Store  │  │  (webhook)    │
└───────────────┘  └───────────────┘  └───────────────┘
```

### Native Checkout Flow

De webshop heeft een **native checkout** - klanten verlaten nooit de Next.js site:

**iDEAL betaling:**
1. Klant vult checkout form in
2. POST naar `/api/checkout` → WooCommerce order aangemaakt (status: pending)
3. Mollie payment direct aangemaakt via Mollie API
4. Redirect naar Mollie bank selectie
5. Na betaling: redirect naar `/bestelling/succes`
6. Mollie webhook → order status naar "processing"

**Contant bij levering:**
1. Klant vult checkout form in, kiest COD
2. POST naar `/api/checkout` → WooCommerce order (status: processing)
3. Direct redirect naar `/bestelling/succes`
4. Klant krijgt bevestigingsmail

## Tech Stack

| Component | Technologie |
|-----------|-------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | WooCommerce REST API (headless) |
| Hosting | Vercel |
| Payments | Mollie (directe API integratie) |
| Forms | react-hook-form + Zod |
| Analytics | Google Analytics 4 |

## Houtsoorten (ERP Mapping)

De webshop producten mappen naar ERP houtsoort codes:

| Webshop Product | ERP Code | ERP Label |
|-----------------|----------|-----------|
| Halfdroog haardhout | `vers` | Vers/Halfdroog hardhout |
| Vers haardhout | `vers` | Vers/Halfdroog hardhout |
| Ovengedroogd haardhout | `droog` | Ovengedroogd hardhout |
| Beukenhout (OFYR) | `beuk` | Beukenhout |
| Kozijnhout | `kozijn` | Kozijnhout |

**Let op**: De mapping van webshop producten naar ERP codes gebeurt in n8n. De webshop hoeft hier niets mee te doen - dit is puur ter referentie.

## UI Kleuren (consistent met ERP)

```typescript
const WOOD_TYPE_COLORS = {
  vers: 'bg-blue-100 text-blue-800',
  droog: 'bg-amber-100 text-amber-800',
  beuk: 'bg-green-100 text-green-800',
  kozijn: 'bg-purple-100 text-purple-800',
};
```

## Environment Variables

```env
# WooCommerce Legacy REST API (voor order creatie)
NEXT_PUBLIC_WOOCOMMERCE_URL=https://vuurmeester.shop
WOOCOMMERCE_CONSUMER_KEY=ck_xxx
WOOCOMMERCE_CONSUMER_SECRET=cs_xxx

# App URL (voor return URLs na betaling)
NEXT_PUBLIC_APP_URL=https://webshop-kappa-one.vercel.app

# Mollie API (directe integratie voor iDEAL)
MOLLIE_API_KEY=test_xxx  # of live_xxx voor productie

# Optioneel: Supabase read-only (voor voorraad, bezorgslots)
# NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

**Let op:** WooCommerce gebruikt de **Legacy REST API** (`/wc-api/v3/`) met query parameter authenticatie. De moderne API (`/wp-json/wc/v3/`) heeft authenticatieproblemen met HPOS.

## Belangrijke Conventies

### Wat WooCommerce doet
- Product beheer & catalogus
- Prijzen & kortingen
- Order opslag & beheer
- Webhooks naar n8n (order processing)

### Wat deze frontend doet
- Moderne UI/UX
- Product weergave & filtering
- Cart interface (lokale state)
- **Native checkout form** (react-hook-form + Zod)
- **Directe Mollie integratie** (iDEAL payments)
- Order creatie via WooCommerce Legacy API
- SEO optimalisatie
- Performance (Next.js + Vercel)

## Toekomstige Synergie (v2)

Mogelijke integraties met ERP (via Supabase read-only):
- Real-time voorraad niveaus (`inventory_batches`)
- Slimme bezorgmomenten (`trips` planning)
- "Populair deze week" (`demand_forecasts`)
- Order tracking (`trip_stops`)

## Project Structuur

```
webshop/
├── CLAUDE.md                    # Dit bestand
├── src/
│   ├── app/
│   │   ├── afrekenen/          # Checkout pagina
│   │   ├── bestelling/
│   │   │   ├── succes/         # Succes pagina na betaling
│   │   │   └── mislukt/        # Fout pagina
│   │   ├── api/
│   │   │   ├── checkout/       # Checkout API route
│   │   │   └── webhooks/
│   │   │       └── mollie/     # Mollie webhook handler
│   │   └── product/[slug]/     # Product detail pagina's
│   ├── components/
│   │   ├── checkout/
│   │   │   ├── checkout-form.tsx    # Hoofdformulier
│   │   │   └── order-summary.tsx    # Winkelwagen overzicht
│   │   └── ui/                 # shadcn/ui componenten
│   ├── lib/
│   │   ├── mollie/
│   │   │   └── client.ts       # Mollie API client
│   │   ├── woocommerce/
│   │   │   └── rest-client.ts  # WooCommerce Legacy API client
│   │   ├── validation/
│   │   │   └── checkout.ts     # Zod schemas
│   │   └── shipping.ts         # Verzendkosten berekening
│   └── store/
│       └── cart.ts             # Zustand cart state
├── public/                      # Static assets
└── package.json
```

## Belangrijke API Routes

| Route | Beschrijving |
|-------|-------------|
| `POST /api/checkout` | Verwerkt checkout, maakt WooCommerce order + Mollie payment |
| `POST /api/webhooks/mollie` | Ontvangt Mollie payment status updates |

## Sync met ERP Documentatie

Bij updates, check of deze bestanden in de admin repo ook geüpdatet moeten worden:
- `../admin/docs/FLOWS.md` - Als order flow verandert
- `../admin/docs/DATABASE.md` - Als data structuur relevant is
- `../CLAUDE.md` - Als algemene context verandert
