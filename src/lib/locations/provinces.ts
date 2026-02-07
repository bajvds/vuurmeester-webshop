import type { ProvinceData } from "./types";

const provinces: ProvinceData[] = [
  {
    slug: "noord-brabant",
    name: "Noord-Brabant",
    cities: [
      "tilburg", "eindhoven", "breda", "veldhoven", "nuenen", "oirschot",
      "waalre", "best", "hilvarenbeek", "helmond", "den-bosch", "goirle",
      "oisterwijk", "geldrop", "son-en-breugel", "oosterhout", "deurne",
      "roosendaal", "valkenswaard", "eersel", "dongen", "vught", "bladel",
      "boxtel", "berkel-enschot", "diessen", "waalwijk",
    ],
    introduction:
      "Noord-Brabant is het thuisfront van De Vuurmeester. Vanuit ons depot in Middelbeers, midden in het Brabantse land, bezorgen we premium haardhout door de hele provincie. Of je nu in Eindhoven, Tilburg of een van de vele gezellige dorpen woont — we staan binnen enkele werkdagen bij je voor de deur. Dankzij onze centrale ligging in Brabant profiteren onze klanten hier van de scherpste bezorgtarieven, vanaf slechts €20 voor postcodes direct rondom ons depot tot maximaal €65 voor de randen van de provincie. Met meer dan 500 tevreden klanten in Noord-Brabant zijn we uitgegroeid tot dé haardhoutleverancier van de regio. Bestel eenvoudig online en geniet binnen enkele dagen van knapperend haardvuur.",
    shippingRange: "€20 - €65",
    metaTitle: "Haardhout bezorgen in Noord-Brabant | Vanaf €20",
    metaDescription:
      "Haardhout bezorgen in Noord-Brabant? De Vuurmeester bezorgt vanuit Middelbeers door heel Brabant. Scherpste tarieven vanaf €20. Bestel online!",
  },
  {
    slug: "zuid-holland",
    name: "Zuid-Holland",
    cities: ["rotterdam", "den-haag", "dordrecht"],
    introduction:
      "Ook in Zuid-Holland bezorgt De Vuurmeester premium haardhout aan huis. Vanuit ons depot in Noord-Brabant rijden we regelmatig naar steden als Rotterdam, Den Haag en Dordrecht. De bezorgkosten voor Zuid-Holland bedragen €64 per kuub, en bij grotere bestellingen profiteer je van aantrekkelijke staffelkortingen. We leveren ovengedroogd en halfdroog hardhout van topkwaliteit, los gestort op je oprit of in je tuin. Veel klanten in Zuid-Holland waarderen onze persoonlijke service en het feit dat we altijd even bellen voor de bezorging. Haardhout bestellen in Zuid-Holland is eenvoudig: kies je houtsoort, bereken je bezorgkosten en wij regelen de rest.",
    shippingRange: "€64",
    metaTitle: "Haardhout bezorgen in Zuid-Holland | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Zuid-Holland? De Vuurmeester levert premium haardhout in Rotterdam, Den Haag en Dordrecht. Bezorging vanaf €64.",
  },
  {
    slug: "gelderland",
    name: "Gelderland",
    cities: ["apeldoorn", "arnhem", "ede", "nijmegen"],
    introduction:
      "Gelderland is een van onze populairste bezorgregio's buiten Brabant. Met steden als Arnhem, Nijmegen, Apeldoorn en Ede bedienen we een groot deel van deze prachtige provincie. De bezorgkosten variëren van €58 tot €64 afhankelijk van je exacte locatie. Vanuit Middelbeers rijden we via de A2 en A50 efficiënt naar Gelderland, waardoor we scherpe tarieven kunnen hanteren. Onze Gelderse klanten waarderen vooral de kwaliteit van ons ovengedroogd hardhout — perfect voor de vele open haarden en houtkachels in de Veluwse en Betuwse woningen. Bestel vandaag en geniet binnen een week van warmte en sfeer.",
    shippingRange: "€58 - €64",
    metaTitle: "Haardhout bezorgen in Gelderland | Vanaf €58",
    metaDescription:
      "Haardhout bezorgen in Gelderland? De Vuurmeester levert in Arnhem, Nijmegen, Apeldoorn en Ede. Bezorging vanaf €58 per kuub.",
  },
  {
    slug: "noord-holland",
    name: "Noord-Holland",
    cities: ["amsterdam", "hilversum"],
    introduction:
      "De Vuurmeester bezorgt ook in Noord-Holland premium haardhout aan huis. Van Amsterdam tot Hilversum — we komen graag naar je toe met een vracht ovengedroogd of halfdroog hardhout. De bezorgkosten voor Noord-Holland bedragen €69 per kuub, met staffelkorting bij grotere bestellingen. Veel Noord-Hollanders ontdekken dat online haardhout bestellen bij De Vuurmeester voordeliger en gemakkelijker is dan lokaal kopen. We leveren los gestort, direct op je oprit. Geen gesleep met zakken, geen gedoe. Gewoon lekker genieten van je open haard of houtkachel met het beste hardhout uit Brabant.",
    shippingRange: "€69",
    metaTitle: "Haardhout bezorgen in Noord-Holland | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Noord-Holland? De Vuurmeester levert premium haardhout in Amsterdam en Hilversum. Bezorging vanaf €69.",
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    cities: ["utrecht", "soest"],
    introduction:
      "De provincie Utrecht ligt centraal in Nederland en is uitstekend bereikbaar vanuit ons depot in Middelbeers. We bezorgen haardhout in de stad Utrecht, Soest en omgeving voor €64 per kuub. De route via de A2 brengt ons snel in het Utrechtse, waardoor we regelmatig ritten plannen naar deze regio. Onze klanten in Utrecht kiezen vaak voor ovengedroogd hardhout vanwege de directe stookbaarheid — ideaal voor de vele karakteristieke woningen met open haard in de binnenstad en villabuurten. Bereken je bezorgkosten en bestel eenvoudig online.",
    shippingRange: "€64",
    metaTitle: "Haardhout bezorgen in Utrecht | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Utrecht? De Vuurmeester levert premium haardhout in Utrecht en Soest. Bezorging vanaf €64 per kuub.",
  },
  {
    slug: "flevoland",
    name: "Flevoland",
    cities: ["almere", "lelystad"],
    introduction:
      "Zelfs in Flevoland levert De Vuurmeester premium haardhout aan huis. Almere en Lelystad zijn vaste bestemmingen op onze bezorgroutes. De bezorgkosten variëren van €69 tot €89 afhankelijk van je locatie. Ondanks de grotere afstand tot ons depot in Brabant zorgen we ervoor dat je haardhout in perfecte staat wordt geleverd. Veel nieuwbouwwoningen in Flevoland hebben moderne houtkachels en inbouwhaarden — perfect voor ons ovengedroogd hardhout met minder dan 20% vocht. We plannen regelmatig ritten naar Flevoland, dus je hoeft nooit lang te wachten op je bestelling.",
    shippingRange: "€69 - €89",
    metaTitle: "Haardhout bezorgen in Flevoland | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Flevoland? De Vuurmeester levert in Almere en Lelystad. Premium haardhout, bezorging vanaf €69.",
  },
  {
    slug: "limburg",
    name: "Limburg",
    cities: [],
    introduction:
      "De Vuurmeester bezorgt haardhout door heel Limburg. Van Maastricht tot Venlo, van Roermond tot Sittard — we komen graag naar het zuiden met een vracht premium hardhout. De bezorgkosten voor Limburg variëren van €58 tot €69 afhankelijk van je exacte locatie. Vanuit ons depot in Middelbeers rijden we via de A2 en A67 richting Limburg, een route die we goed kennen. Limburgse klanten waarderen de kwaliteit van ons ovengedroogd hardhout, ideaal voor de koude winters in het heuvelland. We leveren los gestort en nemen altijd even contact op voor de bezorging.",
    shippingRange: "€58 - €69",
    metaTitle: "Haardhout bezorgen in Limburg | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Limburg? De Vuurmeester levert premium haardhout door heel Limburg. Bezorging vanaf €58 per kuub.",
  },
];

export function getProvinceBySlug(slug: string): ProvinceData | undefined {
  return provinces.find((p) => p.slug === slug);
}

export function getAllProvinceSlugs(): string[] {
  return provinces.map((p) => p.slug);
}

export function getAllProvinces(): ProvinceData[] {
  return provinces;
}
