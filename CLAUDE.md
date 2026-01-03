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
│                          │                                  │
│                          │ WooCommerce REST API             │
└──────────────────────────┼──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                     WOOCOMMERCE                             │
│              (bestaande WordPress setup)                    │
│                                                             │
│   - Producten & catalogus                                   │
│   - Cart & checkout                                         │
│   - Mollie payments                                         │
│   - Shipping & tax                                          │
│                          │                                  │
│                          │ webhook (naar n8n)               │
└──────────────────────────┼──────────────────────────────────┘
                           │
                           ▼
┌─────────────────────────────────────────────────────────────┐
│                   N8N → SUPABASE → ERP                      │
│          (order verwerking - zie admin repo)                │
└─────────────────────────────────────────────────────────────┘
```

## Tech Stack

| Component | Technologie |
|-----------|-------------|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS + shadcn/ui |
| Backend | WooCommerce REST API (headless) |
| Hosting | Vercel |
| Payments | Mollie (via WooCommerce) |
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
# WooCommerce API
NEXT_PUBLIC_WOOCOMMERCE_URL=https://devuurmeester.nl
WOOCOMMERCE_CONSUMER_KEY=ck_xxx
WOOCOMMERCE_CONSUMER_SECRET=cs_xxx

# Optioneel: Supabase read-only (voor voorraad, bezorgslots)
# NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
# NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
```

## Belangrijke Conventies

### Wat WooCommerce doet (NIET aanpassen)
- Product beheer
- Prijzen & kortingen
- Cart & checkout flow
- Betalingen (Mollie)
- Order creatie
- Webhooks naar n8n

### Wat deze frontend doet
- Moderne UI/UX
- Product weergave
- Cart interface
- Checkout flow (WooCommerce API calls)
- SEO optimalisatie
- Performance (Next.js)

## Toekomstige Synergie (v2)

Mogelijke integraties met ERP (via Supabase read-only):
- Real-time voorraad niveaus (`inventory_batches`)
- Slimme bezorgmomenten (`trips` planning)
- "Populair deze week" (`demand_forecasts`)
- Order tracking (`trip_stops`)

## Project Structuur

```
webshop/
├── CLAUDE.md              # Dit bestand
├── src/
│   ├── app/              # Next.js pages
│   ├── components/       # React componenten
│   └── lib/
│       ├── woocommerce/  # WooCommerce API client
│       └── utils/        # Utilities
├── public/               # Static assets
└── package.json
```

## Sync met ERP Documentatie

Bij updates, check of deze bestanden in de admin repo ook geüpdatet moeten worden:
- `../admin/docs/FLOWS.md` - Als order flow verandert
- `../admin/docs/DATABASE.md` - Als data structuur relevant is
- `../CLAUDE.md` - Als algemene context verandert
