/**
 * Klantfoto's configuratie
 *
 * MAPSTRUCTUUR in public/reviews/:
 * ├── eik-beuk-droog/          ← Ovengedroogd eik & beuk
 * ├── eik-beuk-vers/           ← Halfdroog/vers eik & beuk
 * ├── kozijnhout/              ← Kozijnhout (kleine blokjes)
 * ├── beukenhout-ofyr/         ← Beukenhout voor OFYR
 * ├── aanmaak/                 ← Aanmaakproducten
 * └── _algemeen/               ← Algemene foto's (leveringen, etc.)
 *
 * Voeg foto's toe in de juiste map en registreer ze hieronder.
 */

export interface CustomerPhoto {
  src: string;
  alt: string;
  caption?: string;
  reviewerName?: string;
}

// ============================================
// PRODUCT TYPE DEFINITIES
// ============================================
export type ProductPhotoCategory =
  | 'eik-beuk-droog'      // Ovengedroogd hardhout (eik & beuk mix)
  | 'eik-beuk-vers'       // Halfdroog/vers hardhout
  | 'kozijnhout'          // Kozijnhout (kleine blokjes)
  | 'beukenhout-ofyr'     // 100% beuk voor OFYR/buitenkeuken
  | 'berkenhout'          // Berkenhout
  | 'aanmaak'             // Aanmaakproducten
  | 'algemeen';           // Fallback/algemene foto's

// ============================================
// FOTO'S PER CATEGORIE
// ============================================
export const photosByCategory: Record<ProductPhotoCategory, CustomerPhoto[]> = {

  // ------------------------------------------
  // OVENGEDROOGD EIK & BEUK
  // ------------------------------------------
  'eik-beuk-droog': [
    {
      src: '/reviews/eik-beuk-droog/stapel-1.jpg',
      alt: 'Ovengedroogd hardhout netjes gestapeld',
      caption: 'Direct klaar om te stoken, geen gedoe!',
      reviewerName: 'Jan de Vries'
    },
    {
      src: '/reviews/eik-beuk-droog/kachel-1.jpg',
      alt: 'Houtkachel met ovengedroogd hout',
      caption: 'Brandt schoon en geeft veel warmte',
      reviewerName: 'Marieke Bakker'
    },
    {
      src: '/reviews/eik-beuk-droog/blokken-1.jpg',
      alt: 'Close-up van droge houtblokken',
      caption: 'Mooi droog, geen schimmel',
      reviewerName: 'Peter van den Berg'
    },
  ],

  // ------------------------------------------
  // HALFDROOG / VERS EIK & BEUK
  // ------------------------------------------
  'eik-beuk-vers': [
    {
      src: '/reviews/eik-beuk-vers/schuur-1.jpg',
      alt: 'Halfdroog hout opgeslagen in schuur',
      caption: 'Ligt nu 4 maanden te drogen, bijna klaar!',
      reviewerName: 'Willem de Groot'
    },
    {
      src: '/reviews/eik-beuk-vers/stapel-buiten-1.jpg',
      alt: 'Haardhout gestapeld onder afdak',
      caption: 'Goede ventilatie, droogt mooi af',
      reviewerName: 'Erik Meijer'
    },
    {
      src: '/reviews/eik-beuk-vers/vochtmeter-1.jpg',
      alt: 'Vochtmeter in houtblok',
      caption: 'Na 6 maanden onder de 20%',
      reviewerName: 'Annemarie Peters'
    },
  ],

  // ------------------------------------------
  // KOZIJNHOUT (kleine blokjes)
  // ------------------------------------------
  'kozijnhout': [
    {
      src: '/reviews/kozijnhout/mand-1.jpg',
      alt: 'Kozijnhout in houtmand bij kachel',
      caption: 'Perfect formaat, past mooi in de mand',
      reviewerName: 'Ria Smit'
    },
    {
      src: '/reviews/kozijnhout/kachel-klein-1.jpg',
      alt: 'Kleine houtkachel met kozijnhout',
      caption: 'Ideaal voor onze kleine kachel',
      reviewerName: 'Henk Visser'
    },
    {
      src: '/reviews/kozijnhout/blokjes-1.jpg',
      alt: 'Kleine houtblokjes van kozijnhout',
      caption: 'Handig formaat, makkelijk aan te steken',
      reviewerName: 'Linda van Dijk'
    },
  ],

  // ------------------------------------------
  // BEUKENHOUT OFYR
  // ------------------------------------------
  'beukenhout-ofyr': [
    {
      src: '/reviews/beukenhout-ofyr/ofyr-1.jpg',
      alt: 'OFYR met beukenhout vuur',
      caption: 'Brandt perfect gelijkmatig',
      reviewerName: 'Marco Hendriks'
    },
    {
      src: '/reviews/beukenhout-ofyr/buitenkeuken-1.jpg',
      alt: 'Buitenkeuken met houtvuur',
      caption: 'Geeft precies de juiste hitte voor bakken',
      reviewerName: 'Johan Kok'
    },
    {
      src: '/reviews/beukenhout-ofyr/vuurkorf-1.jpg',
      alt: 'Vuurkorf met beukenhout',
      caption: 'Weinig vonken, ideaal voor op het terras',
      reviewerName: 'René Dekker'
    },
  ],

  // ------------------------------------------
  // BERKENHOUT
  // ------------------------------------------
  'berkenhout': [
    {
      src: '/reviews/berkenhout/stapel-1.jpg',
      alt: 'Berkenhout met witte bast',
      caption: 'Mooie witte bast, brandt lekker snel',
      reviewerName: 'Tom Visser'
    },
    {
      src: '/reviews/berkenhout/open-haard-1.jpg',
      alt: 'Open haard met berkenhout',
      caption: 'Geeft een gezellig vuur',
      reviewerName: 'Joke van der Linden'
    },
  ],

  // ------------------------------------------
  // AANMAAKPRODUCTEN
  // ------------------------------------------
  'aanmaak': [
    {
      src: '/reviews/aanmaak/aansteken-1.jpg',
      alt: 'Vuur aanmaken met aanmaakblokjes',
      caption: 'Binnen 5 minuten een goed vuur',
      reviewerName: 'Bert Mulder'
    },
    {
      src: '/reviews/aanmaak/blokjes-1.jpg',
      alt: 'Aanmaakblokjes in verpakking',
      caption: 'Handig, werkt altijd',
      reviewerName: 'Hans Smit'
    },
  ],

  // ------------------------------------------
  // ALGEMENE FOTO'S (fallback)
  // ------------------------------------------
  'algemeen': [
    {
      src: '/reviews/_algemeen/berrie_rieswijk.jpg',
      alt: 'Brandende open haard met haardhout',
      caption: 'Ontzettend tevreden! Scherp geprijsd en netjes geleverd.',
      reviewerName: 'Berrie Rieswijk'
    },
    {
      src: '/reviews/_algemeen/marco_blaas.jpg',
      alt: 'Haardhout netjes gestapeld in de tuin',
      caption: 'Super geregeld, goed bedrijf! Tot volgend jaar.',
      reviewerName: 'Marco Blaas'
    },
    {
      src: '/reviews/_algemeen/o_van_der_sluis_1.jpg',
      alt: 'Haardhout opslag vol met gestapeld hout',
      caption: 'Heel tevreden, vriendelijke communicatie en afspraken nagekomen.',
      reviewerName: 'O. van der Sluis'
    },
  ],
};

// ============================================
// DETECTIE LOGICA
// ============================================

/**
 * Detecteer de foto-categorie op basis van productnaam
 */
export function detectPhotoCategory(productName: string): ProductPhotoCategory {
  const name = productName.toLowerCase();

  // Kozijnhout - check eerst (specifiekst)
  if (name.includes('kozijn') || name.includes('kleine blok')) {
    return 'kozijnhout';
  }

  // Beukenhout OFYR
  if (name.includes('ofyr') || (name.includes('beuk') && name.includes('100'))) {
    return 'beukenhout-ofyr';
  }

  // Berkenhout
  if (name.includes('berken')) {
    return 'berkenhout';
  }

  // Aanmaakproducten
  if (name.includes('aanmaak') || name.includes('fakkel') || name.includes('lucifer') || name.includes('briket')) {
    return 'aanmaak';
  }

  // Ovengedroogd eik & beuk
  if (name.includes('ovengedroogd') || name.includes('oven gedroogd') || name.includes('droog')) {
    return 'eik-beuk-droog';
  }

  // Halfdroog / vers eik & beuk
  if (name.includes('halfdroog') || name.includes('half droog') || name.includes('vers')) {
    return 'eik-beuk-vers';
  }

  // Fallback naar algemeen
  return 'algemeen';
}

/**
 * Haal foto's op voor een product
 */
export function getPhotosForProduct(productSlug: string, limit: number = 6): CustomerPhoto[] {
  // Slug naar leesbare naam (voor detectie)
  const readableName = productSlug.replace(/-/g, ' ');
  const category = detectPhotoCategory(readableName);

  // Haal foto's voor deze categorie
  let photos = [...photosByCategory[category]];

  // Als niet genoeg foto's, vul aan met algemene
  if (photos.length < limit && category !== 'algemeen') {
    const algemeen = photosByCategory['algemeen'];
    const needed = limit - photos.length;
    photos = [...photos, ...algemeen.slice(0, needed)];
  }

  return photos.slice(0, limit);
}

/**
 * Haal foto's op op basis van productnaam (nauwkeuriger)
 */
export function getPhotosByProductName(productName: string, limit: number = 6): CustomerPhoto[] {
  const category = detectPhotoCategory(productName);

  let photos = [...photosByCategory[category]];

  if (photos.length < limit && category !== 'algemeen') {
    const algemeen = photosByCategory['algemeen'];
    const needed = limit - photos.length;
    photos = [...photos, ...algemeen.slice(0, needed)];
  }

  return photos.slice(0, limit);
}
