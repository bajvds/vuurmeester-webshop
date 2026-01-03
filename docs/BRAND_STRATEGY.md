# De Vuurmeester - Brand & Design Strategy

Dit document bevat alle strategische en design beslissingen voor de webshop rebuild.

---

## 1. Merkidentiteit

### De Vuurmeester als Persoon
**Björn van der Doelen** - singer-songwriter, ex-PSV, warme uitstraling

| Kenmerk | Omschrijving |
|---------|--------------|
| **Toon** | Informeel, Brabants accent, humor met zelfspot |
| **Stijl** | "Allergoedkoopste ter wereld!" (knipoog) |
| **Gevoel** | Je buurman die toevallig expert is |

### Drie Kernwoorden
1. **Warm** - de uitstraling, het vuur, persoonlijk contact
2. **No-nonsense** - direct, simpel, geen poespas
3. **Betrouwbaar** - je weet wat je krijgt, 65+ vijfsterren reviews

---

## 2. Doelgroep

### Primaire Klanttypen

| Type | Kenmerken | Koopt | Prioriteit |
|------|-----------|-------|------------|
| **Premium** | Vrijstaand huis, 45-65j, man | Ovengedroogd | Hoog |
| **Budget-bewust** | Rijtjeshuis, praktisch | Vers/kozijn | Hoog |
| **Terugkerend** | Kent ons al, 99% retentie | Mix | Zeer hoog |

### Belangrijke Inzichten
- 80% is man, 40+ leeftijd
- Niet tech-savvy, willen snel kunnen bestellen
- Waarderen eenvoud boven fancy features
- Prijs én service zijn belangrijkste redenen om terug te komen

---

## 3. Design Principles

### Principe 1: Haardhout Eerst
> Het hout moet direct zichtbaar zijn op de homepage. Geen hero banners die scrollen vereisen.

**Doen:**
- Producten direct in beeld
- Max 3-4 houtsoorten prominent

**Niet doen:**
- Lange intro teksten
- Slider/carousel als eerste element

### Principe 2: Bezorgkosten Transparant
> De #1 vraag (60%) is "wat kost bezorging?" Dit moet VOOR checkout duidelijk zijn.

**Doen:**
- Calculator prominent op homepage of productpagina
- Postcode invullen = direct totaalprijs zien

**Niet doen:**
- Bezorgkosten pas in checkout tonen
- Kleine lettertjes

### Principe 3: Warm maar Professioneel
> We zijn geen corporate bedrijf, maar ook geen hobbyist.

**Doen:**
- Warme kleuren (oranje, amber, donker hout)
- Foto's van echt vuur, echte leveringen
- Björn-content integreren

**Niet doen:**
- Stockfoto's van lachende mensen
- Kille witte achtergronden
- Overdreven animaties

### Principe 4: Simpel is Beter
> Onze doelgroep waardeert eenvoud. "Gewoon een simpele site" is een compliment.

**Doen:**
- Grote knoppen, leesbare tekst
- Max 5 menu-items
- Duidelijke call-to-actions

**Niet doen:**
- Mega-menu's met 100 opties
- Kleine tekst of iconen zonder labels
- Ingewikkelde filters

### Principe 5: Mobiel Eerst
> Veel klanten bestellen op telefoon. De site moet daar perfect werken.

**Doen:**
- Touch-vriendelijke knoppen (min 44px)
- Sticky cart/WhatsApp button
- Snelle laadtijd

**Niet doen:**
- Hover-only interacties
- Te kleine tap targets

---

## 4. Kleurenpalet

### Primaire Kleuren (uit bestaand logo)
```css
/* Behouden van huidige branding */
--primary-orange: #F97316;      /* Vuur oranje - CTA's, accenten */
--primary-dark: #1C1917;        /* Donker - tekst, headers */
```

### Secundaire Kleuren
```css
--warm-amber: #F59E0B;          /* Warmte, highlights */
--warm-cream: #FEF3C7;          /* Achtergrond accenten */
--wood-brown: #78350F;          /* Hout textuur referentie */
--neutral-gray: #57534E;        /* Secundaire tekst */
--white: #FFFBEB;               /* Warm wit, niet klinisch */
```

### Functionele Kleuren
```css
--success: #22C55E;             /* Bevestigingen */
--error: #EF4444;               /* Fouten */
--info: #3B82F6;                /* Informatie */
```

### Contrast Check
- Oranje op donker: ✅ WCAG AA
- Donkere tekst op cream: ✅ WCAG AA
- Vermijd: oranje tekst op oranje achtergrond (huidige probleem!)

---

## 5. Typography

### Font Keuze
```css
/* Voorstel: Moderne maar leesbare sans-serif */
--font-heading: 'Plus Jakarta Sans', sans-serif;  /* Of Inter */
--font-body: 'Inter', sans-serif;
```

### Hiërarchie
| Element | Grootte | Gewicht | Gebruik |
|---------|---------|---------|---------|
| H1 | 2.5rem (40px) | Bold | Paginatitels |
| H2 | 1.875rem (30px) | Semibold | Secties |
| H3 | 1.25rem (20px) | Semibold | Subsecties |
| Body | 1rem (16px) | Regular | Lopende tekst |
| Small | 0.875rem (14px) | Regular | Bijschriften |

### Leesbaarheidseisen
- Minimale body tekst: 16px
- Regelafstand: 1.6
- Maximale regelbreedte: 70 karakters

---

## 6. Pagina Structuur

### Homepage
```
┌─────────────────────────────────────────────────────────────┐
│ HEADER: Logo | Navigatie | Cart | WhatsApp                 │
├─────────────────────────────────────────────────────────────┤
│ HERO: Korte tagline + Bezorgkosten Calculator              │
│       "Premium haardhout, scherpe prijs"                   │
│       [Postcode] [m³] → Bereken bezorgkosten               │
├─────────────────────────────────────────────────────────────┤
│ PRODUCTEN: Direct de houtsoorten (grid)                    │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐           │
│ │Ovendroog│ │Halfdroog│ │  Vers   │ │ Kozijn  │           │
│ │  €xx/m³ │ │  €xx/m³ │ │  €xx/m³ │ │  €xx/m³ │           │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘           │
├─────────────────────────────────────────────────────────────┤
│ USP's: Goedkoopste | Heel NL | Persoonlijk contact        │
├─────────────────────────────────────────────────────────────┤
│ REVIEWS: Google Reviews widget (65+ ⭐⭐⭐⭐⭐)              │
├─────────────────────────────────────────────────────────────┤
│ AANMAAK: "Ook aanmaakproducten nodig?" (cross-sell)        │
├─────────────────────────────────────────────────────────────┤
│ FOOTER: Contact | FAQ | Over ons | Bezorginfo              │
└─────────────────────────────────────────────────────────────┘
```

### Productpagina
```
┌─────────────────────────────────────────────────────────────┐
│ [Foto's]              │ Productnaam                        │
│                       │ Prijs per m³                       │
│                       │ ─────────────────────              │
│                       │ Kies aantal: [1] [2] [3] [4+]      │
│                       │ ─────────────────────              │
│                       │ Bezorgkosten: [Postcode] → €xx     │
│                       │ ─────────────────────              │
│                       │ [BESTEL NU]                        │
├─────────────────────────────────────────────────────────────┤
│ INFO TABS: Beschrijving | Droogtijd | Levering | Opslag   │
├─────────────────────────────────────────────────────────────┤
│ CROSS-SELL: "Vaak samen besteld" - aanmaakproducten        │
└─────────────────────────────────────────────────────────────┘
```

### Key Pages
| Pagina | Doel | Prioriteit |
|--------|------|------------|
| Homepage | Producten tonen, bezorgkosten calculator | Must-have |
| Productpagina | Details, bestellen | Must-have |
| Cart | Overzicht, cross-sell aanmaak | Must-have |
| Checkout | Bestelling afronden | Must-have |
| FAQ | Vragen beantwoorden | Must-have |
| Over ons | Vertrouwen, Björn | Should-have |
| Bezorginfo | Losgestort, regio's | Should-have |
| Contact | WhatsApp, email | Must-have |

---

## 7. Tone of Voice

### Hoe we schrijven

| Aspect | Doen | Niet doen |
|--------|------|-----------|
| **Aanspreekvorm** | "Je", "jouw" | "U", formeel |
| **Lengte** | Kort en bondig | Lange lappen tekst |
| **Toon** | Vriendelijk, direct | Corporate, afstandelijk |
| **Humor** | Subtiele knipoog | Geforceerde grappen |

### Voorbeelden

**Productbeschrijving:**
```
❌ "Ons ovengedroogd hardhout wordt met de grootste zorg
    geselecteerd en gedroogd tot een optimaal vochtpercentage."

✅ "Direct stoken, geen gedoe. Ons ovendroog hout is
    klaar voor je kachel - gegarandeerd droog."
```

**CTA's:**
```
❌ "Voeg toe aan winkelwagen"
✅ "Bestel nu" of "In de kar"

❌ "Bereken uw verzendkosten"
✅ "Wat kost bezorgen naar mij?"
```

**Foutmelding:**
```
❌ "Er is een fout opgetreden. Probeer het later opnieuw."
✅ "Oeps, dat ging mis. Probeer het nog eens of stuur ons een appje!"
```

---

## 8. MVP Feature Lijst

### Must-Have (Launch)
1. ✅ Homepage met producten direct in beeld
2. ✅ Bezorgkosten calculator (prominent!)
3. ✅ Productpagina's met alle info
4. ✅ Cart met cross-sell aanmaakproducten
5. ✅ Checkout flow (WooCommerce)
6. ✅ WhatsApp Smart Flow (popup met opties)
7. ✅ FAQ pagina
8. ✅ SEO basis (meta tags, structured data)
9. ✅ Mobile responsive
10. ✅ Google Reviews integratie

### Should-Have (Snel na launch)
- Over ons pagina met Björn content
- Bezorginfo pagina (losgestort uitleg, regio's)
- Seizoensbanner (datum-based)

### Nice-to-Have (v2)
- Herbestel reminder (8 maanden)
- Account voor terugkerende klanten
- Order tracking

---

## 9. Succescriteria

| Metric | Huidige staat | Doel | Hoe meten |
|--------|---------------|------|-----------|
| SEO ranking "haardhout kopen" | ? | Top 5 | Google Search Console |
| WhatsApp vragen over bezorgkosten | 60% | <20% | Handmatig tellen |
| "Per ongeluk besteld" annuleringen | Veel | Bijna 0 | Order annuleringen |
| Pagina laadtijd | ? | <2s | Lighthouse |
| Mobile usability | ? | 95+ | Lighthouse |

---

## 10. Referenties

### Inspiratie (technische kwaliteit, niet kopiëren)
- dartshopper.nl - Snelle, cleane e-commerce
- bbqexperiencecenter.nl - Sfeer en beleving

### Wat we NIET willen
- Drukke sites met te veel opties
- Kille, corporate uitstraling
- Trage, bloated websites

---

*Document gegenereerd op basis van interview d.d. januari 2025*
*Laatste update: Fase 1 Discovery*
