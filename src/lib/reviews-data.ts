/**
 * Fake reviews data voor productpagina's
 * Reviews worden gekoppeld aan producten op basis van producttype
 */

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number; // 1-5
  date: string;
  title: string;
  text: string;
  verified: boolean;
  image?: string; // Optionele klantfoto
  productType: 'ovengedroogd' | 'halfdroog' | 'beuk' | 'aanmaak' | 'general';
}

// Pool van Nederlandse voornamen en locaties voor variatie
const firstNames = [
  'Jan', 'Pieter', 'Klaas', 'Willem', 'Henk', 'Johan', 'Peter', 'Marco',
  'Erik', 'René', 'Frank', 'Bert', 'Hans', 'Tom', 'Jeroen', 'Martijn',
  'Sandra', 'Annemarie', 'Linda', 'Marieke', 'Joke', 'Ria', 'Els', 'Monique'
];

const lastNames = [
  'de Vries', 'Jansen', 'van den Berg', 'Bakker', 'Visser', 'Smit',
  'Meijer', 'de Boer', 'Mulder', 'de Groot', 'Bos', 'Peters', 'Hendriks',
  'van Dijk', 'Kok', 'Janssen', 'van der Linden', 'Dekker'
];

const locations = [
  'Amsterdam', 'Rotterdam', 'Den Haag', 'Utrecht', 'Eindhoven', 'Tilburg',
  'Groningen', 'Almere', 'Breda', 'Nijmegen', 'Apeldoorn', 'Haarlem',
  'Arnhem', 'Enschede', 'Amersfoort', 'Zaanstad', 'Den Bosch', 'Haarlemmermeer',
  'Zoetermeer', 'Zwolle', 'Maastricht', 'Leiden', 'Dordrecht', 'Ede'
];

// Reviews voor ovengedroogd haardhout
const ovengedroogdReviews: Review[] = [
  {
    id: 'od-1',
    name: 'Jan de Vries',
    location: 'Amsterdam',
    rating: 5,
    date: '2 weken geleden',
    title: 'Fantastisch droog hout!',
    text: 'Direct uit de zak in de kachel en het brandt als een tierelier. Geen gerook, geen gesis, gewoon puur vuurgenot. Dit is echt de kwaliteit die je wilt hebben.',
    verified: true,
    image: '/reviews/stapel-hout-1.jpg',
    productType: 'ovengedroogd'
  },
  {
    id: 'od-2',
    name: 'Marieke Bakker',
    location: 'Utrecht',
    rating: 5,
    date: '1 maand geleden',
    title: 'Beste haardhout dat ik ooit heb gehad',
    text: 'Na jaren zoeken eindelijk een leverancier gevonden die écht droog hout levert. De blokken zijn mooi op maat en branden schoon. Aanrader!',
    verified: true,
    productType: 'ovengedroogd'
  },
  {
    id: 'od-3',
    name: 'Peter van den Berg',
    location: 'Eindhoven',
    rating: 5,
    date: '3 weken geleden',
    title: 'Top service en kwaliteit',
    text: 'Hout werd netjes losgestort precies waar ik het wilde hebben. Vriendelijke bezorger en het hout is perfect droog. Zeker voor herhaling vatbaar.',
    verified: true,
    image: '/reviews/stapel-hout-2.jpg',
    productType: 'ovengedroogd'
  },
  {
    id: 'od-4',
    name: 'Sandra Jansen',
    location: 'Breda',
    rating: 4,
    date: '1 maand geleden',
    title: 'Goed hout, snelle levering',
    text: 'Prima kwaliteit haardhout. Brandt goed en geeft lekker veel warmte. Bezorging was snel geregeld via WhatsApp.',
    verified: true,
    productType: 'ovengedroogd'
  },
  {
    id: 'od-5',
    name: 'Henk Visser',
    location: 'Den Bosch',
    rating: 5,
    date: '2 maanden geleden',
    title: 'Eindelijk geen natte blokken meer',
    text: 'Bij andere leveranciers kreeg ik altijd nat hout dat eerst een jaar moest drogen. Dit hout kan direct de kachel in. Scheelt een hoop gedoe!',
    verified: true,
    productType: 'ovengedroogd'
  }
];

// Reviews voor halfdroog/vers haardhout
const halfdroogReviews: Review[] = [
  {
    id: 'hd-1',
    name: 'Willem de Groot',
    location: 'Tilburg',
    rating: 5,
    date: '3 weken geleden',
    title: 'Perfecte prijs-kwaliteit',
    text: 'Voor deze prijs krijg je nergens zulk mooi hout. Ligt nu een paar maanden te drogen en is bijna klaar om te stoken. Mooie grote blokken.',
    verified: true,
    image: '/reviews/halfdroog-stapel.jpg',
    productType: 'halfdroog'
  },
  {
    id: 'hd-2',
    name: 'Erik Meijer',
    location: 'Apeldoorn',
    rating: 5,
    date: '2 maanden geleden',
    title: 'Goedkoper dan de bouwmarkt',
    text: 'Heb vergeleken met Gamma en Praxis, dit is veel voordeliger én betere kwaliteit. Na 6 maanden drogen brandt het prima.',
    verified: true,
    productType: 'halfdroog'
  },
  {
    id: 'hd-3',
    name: 'Annemarie Peters',
    location: 'Arnhem',
    rating: 4,
    date: '1 maand geleden',
    title: 'Mooi hardhout',
    text: 'Mooie mix van eiken en beuken. Moet nog wel even drogen maar dat wisten we van tevoren. Goede communicatie over de levering.',
    verified: true,
    productType: 'halfdroog'
  },
  {
    id: 'hd-4',
    name: 'Frank Bos',
    location: 'Nijmegen',
    rating: 5,
    date: '6 weken geleden',
    title: 'Aanrader voor wie kan wachten',
    text: 'Als je de ruimte hebt om hout te laten drogen, is dit de beste deal. Kwaliteit is uitstekend en de prijs imbetable.',
    verified: true,
    productType: 'halfdroog'
  },
  {
    id: 'hd-5',
    name: 'Linda van Dijk',
    location: 'Zwolle',
    rating: 5,
    date: '2 maanden geleden',
    title: 'Veel hout voor weinig geld',
    text: 'Een kuub is echt veel meer dan je denkt! Hebben nu genoeg voor de hele winter. Top geregeld.',
    verified: true,
    image: '/reviews/hout-schuur.jpg',
    productType: 'halfdroog'
  }
];

// Reviews voor beukenhout (OFYR)
const beukReviews: Review[] = [
  {
    id: 'bk-1',
    name: 'Marco Hendriks',
    location: 'Haarlem',
    rating: 5,
    date: '1 maand geleden',
    title: 'Perfect voor mijn OFYR',
    text: 'Eindelijk het juiste hout voor mijn buitenkeuken gevonden. Brandt mooi gelijkmatig en geeft precies de juiste hitte voor het bakken.',
    verified: true,
    image: '/reviews/ofyr-bbq.jpg',
    productType: 'beuk'
  },
  {
    id: 'bk-2',
    name: 'Johan Kok',
    location: 'Almere',
    rating: 5,
    date: '3 weken geleden',
    title: 'Ideaal voor de buitenhaard',
    text: 'Beukenhout brandt langer dan ander hout en geeft minder vonken. Perfect voor gezellige avonden bij de vuurkorf.',
    verified: true,
    productType: 'beuk'
  },
  {
    id: 'bk-3',
    name: 'René Dekker',
    location: 'Amersfoort',
    rating: 4,
    date: '2 maanden geleden',
    title: 'Mooi schoon brandend hout',
    text: 'Weinig rook en as, precies wat je wilt als je buiten zit. Blokjes zijn mooi op maat gezaagd.',
    verified: true,
    productType: 'beuk'
  }
];

// Reviews voor aanmaakproducten
const aanmaakReviews: Review[] = [
  {
    id: 'am-1',
    name: 'Bert Mulder',
    location: 'Rotterdam',
    rating: 5,
    date: '2 weken geleden',
    title: 'Vuur brandt binnen no-time',
    text: 'Met deze aanmaakblokjes heb je binnen 5 minuten een goed vuur. Veel handiger dan krantenpapier en luciferhoutjes.',
    verified: true,
    productType: 'aanmaak'
  },
  {
    id: 'am-2',
    name: 'Joke van der Linden',
    location: 'Den Haag',
    rating: 5,
    date: '1 maand geleden',
    title: 'Werkt perfect',
    text: 'Eén blokje is genoeg om het vuur aan te krijgen. Geen gedoe meer met aanmaakhoutjes die niet willen branden.',
    verified: true,
    productType: 'aanmaak'
  },
  {
    id: 'am-3',
    name: 'Hans Smit',
    location: 'Groningen',
    rating: 4,
    date: '3 weken geleden',
    title: 'Handig mee te bestellen',
    text: 'Direct meebesteld met het haardhout. Scheelt een ritje naar de bouwmarkt. Goede kwaliteit.',
    verified: true,
    productType: 'aanmaak'
  }
];

// Algemene reviews (voor producten die niet in een specifieke categorie vallen)
const generalReviews: Review[] = [
  {
    id: 'gen-1',
    name: 'Pieter Janssen',
    location: 'Leiden',
    rating: 5,
    date: '1 maand geleden',
    title: 'Uitstekende service',
    text: 'Van bestelling tot levering alles top geregeld. Persoonlijk contact via WhatsApp en flexibele levering. Zo hoort het!',
    verified: true,
    productType: 'general'
  },
  {
    id: 'gen-2',
    name: 'Monique de Boer',
    location: 'Dordrecht',
    rating: 5,
    date: '2 maanden geleden',
    title: 'Fijne mensen, mooi hout',
    text: 'De bezorger nam zelfs de tijd om het hout netjes neer te leggen. Dat zie je niet vaak meer. Het hout is van prima kwaliteit.',
    verified: true,
    image: '/reviews/levering.jpg',
    productType: 'general'
  },
  {
    id: 'gen-3',
    name: 'Tom Visser',
    location: 'Ede',
    rating: 5,
    date: '6 weken geleden',
    title: 'Goedkoopste van Nederland klopt!',
    text: 'Heb overal vergeleken en De Vuurmeester is echt de goedkoopste. En dan ook nog eens goede kwaliteit. Win-win!',
    verified: true,
    productType: 'general'
  }
];

// Alle reviews gecombineerd
export const allReviews: Review[] = [
  ...ovengedroogdReviews,
  ...halfdroogReviews,
  ...beukReviews,
  ...aanmaakReviews,
  ...generalReviews
];

/**
 * Detecteer het producttype op basis van de productnaam
 */
export function detectProductType(productName: string): Review['productType'] {
  const name = productName.toLowerCase();

  if (name.includes('ovengedroogd') || name.includes('oven gedroogd')) {
    return 'ovengedroogd';
  }
  if (name.includes('halfdroog') || name.includes('half droog') || name.includes('vers')) {
    return 'halfdroog';
  }
  if (name.includes('beuk') || name.includes('ofyr')) {
    return 'beuk';
  }
  if (name.includes('aanmaak') || name.includes('fakkel') || name.includes('lucifer')) {
    return 'aanmaak';
  }

  return 'general';
}

/**
 * Haal reviews op voor een specifiek product
 * Combineert producttype-specifieke reviews met algemene reviews
 */
export function getReviewsForProduct(productName: string, limit: number = 5): Review[] {
  const productType = detectProductType(productName);

  // Filter reviews voor dit producttype
  const typeReviews = allReviews.filter(r => r.productType === productType);

  // Voeg algemene reviews toe als er niet genoeg zijn
  const generalPool = allReviews.filter(r => r.productType === 'general');

  // Combineer en shuffle voor variatie
  const combined = [...typeReviews, ...generalPool];
  const shuffled = combined.sort(() => Math.random() - 0.5);

  return shuffled.slice(0, limit);
}

/**
 * Bereken gemiddelde rating voor een product
 */
export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 5;
  const sum = reviews.reduce((acc, r) => acc + r.rating, 0);
  return Math.round((sum / reviews.length) * 10) / 10;
}

/**
 * Genereer een seed-based "random" selectie voor consistente reviews per product
 * Zodat dezelfde productpagina altijd dezelfde reviews toont
 */
export function getConsistentReviewsForProduct(productId: number, productName: string, limit: number = 5): Review[] {
  const productType = detectProductType(productName);

  // Filter reviews voor dit producttype + algemene
  const typeReviews = allReviews.filter(r => r.productType === productType);
  const generalPool = allReviews.filter(r => r.productType === 'general');
  const combined = [...typeReviews, ...generalPool];

  // Gebruik productId als seed voor consistente "random" volgorde
  const seededShuffle = combined.map((review, index) => ({
    review,
    sort: ((productId * 7 + index * 13) % 100) / 100
  }));

  seededShuffle.sort((a, b) => a.sort - b.sort);

  return seededShuffle.slice(0, limit).map(item => item.review);
}
