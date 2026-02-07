import type { CityData } from "./types";

const cities: CityData[] = [
  // ==================== TIER 1 ====================
  {
    slug: "tilburg",
    name: "Tilburg",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5011AB",
    distanceFromDepot: 30,
    estimatedDelivery: "3-5 werkdagen",
    tier: 1,
    introduction:
      "Tilburg is een van onze drukst bezorgde steden — met meer dan 111 bestellingen zijn we vaste gast in deze levendige Brabantse stad. Vanuit ons depot in Middelbeers is het slechts 30 kilometer rijden, waardoor we Tilburg snel en voordelig kunnen bedienen. Bezorgkosten starten al vanaf €39 per kuub, zonder toeslag. Of je nu in de Reeshof woont, in het Centrum, in Noord, of in de dorpen Berkel-Enschot en Udenhout — we komen overal. Onze klanten in Tilburg kiezen het vaakst voor ovengedroogd hardhout, ideaal om direct te stoken. Maar ook ons halfdroge haardhout is populair bij wie vooruit wil inkopen. We leveren los gestort op je oprit of in de tuin, en bellen altijd even van tevoren. Bestel vandaag nog online en geniet binnen enkele werkdagen van knapperend haardvuur in je Tilburgse woning.",
    neighborhoods: ["Reeshof", "Centrum", "Noord", "Berkel-Enschot", "Udenhout"],
    metaTitle: "Haardhout bezorgen in Tilburg | Vanaf €39",
    metaDescription:
      "Haardhout bezorgen in Tilburg? De Vuurmeester levert premium haardhout in heel Tilburg vanaf €39. Ovengedroogd & halfdroog, binnen 3-5 werkdagen bij je thuis.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Tilburg?",
        answer:
          "De bezorgkosten voor haardhout in Tilburg bedragen €39 per kuub, zonder extra toeslag bij meerdere kubieke meters. Tilburg valt in ons postcodegebied 50, waardoor je profiteert van een scherp tarief dankzij de korte afstand tot ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Tilburg?",
        answer:
          "De bezorging naar Tilburg duurt gemiddeld 3 tot 5 werkdagen na je bestelling. De afstand vanuit ons depot in Middelbeers is slechts 30 kilometer, dus we plannen regelmatig ritten naar Tilburg en omgeving.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Tilburg woon?",
        answer:
          "Ja, je kunt je haardhout ook ophalen bij ons depot in Middelbeers. Dat is hemelsbreed zo'n 30 kilometer vanaf Tilburg, ongeveer 25 minuten rijden. Neem wel even contact met ons op om een afhaaltijd af te spreken.",
      },
      {
        question: "Bezorgen jullie in alle wijken van Tilburg?",
        answer:
          "Absoluut! We bezorgen in alle wijken van Tilburg, waaronder Reeshof, Centrum, Noord, Berkel-Enschot en Udenhout. Het maakt niet uit waar je precies woont — het bezorgtarief is hetzelfde voor heel Tilburg.",
      },
      {
        question: "Welk haardhout is het populairst in Tilburg?",
        answer:
          "In Tilburg is ovengedroogd hardhout veruit het populairst. Dit hout heeft een vochtpercentage onder de 20% en is direct klaar om te stoken. Daarnaast bestellen veel Tilburgers ook halfdroog haardhout, ideaal als je het hout nog een seizoen wilt laten drogen voor een scherpe prijs.",
      },
    ],
    nearbyCities: ["goirle", "oisterwijk", "hilvarenbeek", "berkel-enschot", "dongen", "waalwijk"],
  },
  {
    slug: "eindhoven",
    name: "Eindhoven",
    province: "noord-brabant",
    postcodePrefix: "56",
    samplePostcode: "5611AB",
    distanceFromDepot: 25,
    estimatedDelivery: "2-4 werkdagen",
    tier: 1,
    introduction:
      "Eindhoven is onze nummer twee qua bestellingen, met meer dan 107 leveringen in de lichtstad. Op slechts 25 kilometer van ons depot in Middelbeers is Eindhoven razendsnel bereikbaar, waardoor we vaak al binnen 2 tot 4 werkdagen bezorgen. De bezorgkosten zijn slechts €39 per kuub, zonder extra toeslag — je betaalt dus nooit meer per kuub bij een grotere bestelling. Van Woensel tot Strijp, van Tongelre tot Gestel en Stratum: in alle Eindhovense wijken zijn we een bekende verschijning. De technologiehoofdstad van Nederland heeft verrassend veel open haarden en houtkachels, en onze klanten hier weten precies wat ze willen: droog, kwalitatief hardhout dat meteen brandt. Bestel eenvoudig online en wij zorgen dat je binnen enkele dagen kunt genieten van warmte en sfeer in je Eindhovense woning.",
    neighborhoods: ["Woensel", "Strijp", "Tongelre", "Gestel", "Stratum"],
    metaTitle: "Haardhout bezorgen in Eindhoven | Vanaf €39",
    metaDescription:
      "Haardhout bezorgen in Eindhoven? De Vuurmeester levert premium haardhout in heel Eindhoven vanaf €39. Snel geleverd vanuit Middelbeers, bestel online!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Eindhoven?",
        answer:
          "De bezorgkosten voor haardhout in Eindhoven zijn €39 per kuub. Er geldt geen extra toeslag bij meerdere kubieke meters. Eindhoven valt in postcodegebied 56, een van onze voordeligste zones dankzij de nabijheid van ons depot in Middelbeers.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Eindhoven?",
        answer:
          "We bezorgen in Eindhoven doorgaans binnen 2 tot 4 werkdagen. Met slechts 25 kilometer afstand tot ons depot plannen we meerdere keren per week ritten naar Eindhoven en omstreken, zeker in het stookseizoen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Eindhoven woon?",
        answer:
          "Zeker! Je bent welkom om je haardhout op te halen bij ons depot in Middelbeers, op zo'n 25 kilometer van Eindhoven. Dat is ongeveer 20 minuten rijden via de N269. Neem even contact op om een afhaaltijd in te plannen.",
      },
      {
        question: "Bezorgen jullie in alle wijken van Eindhoven?",
        answer:
          "Ja, we bezorgen in alle wijken van Eindhoven: Woensel, Strijp, Tongelre, Gestel, Stratum en alle overige buurten. Het bezorgtarief van €39 geldt voor heel Eindhoven, ongeacht de wijk.",
      },
      {
        question: "Welk haardhout is het populairst in Eindhoven?",
        answer:
          "Eindhovenaren kiezen overwegend voor ovengedroogd hardhout — perfect om direct de kachel of open haard mee aan te steken. Het lage vochtgehalte (onder 20%) zorgt voor een schone en efficiënte verbranding. Halfdroog haardhout is een populair alternatief voor klanten die vooruit willen inkopen tegen een lagere prijs.",
      },
    ],
    nearbyCities: ["veldhoven", "nuenen", "best", "geldrop", "son-en-breugel", "waalre"],
  },
  {
    slug: "breda",
    name: "Breda",
    province: "noord-brabant",
    postcodePrefix: "48",
    samplePostcode: "4811AB",
    distanceFromDepot: 50,
    estimatedDelivery: "3-5 werkdagen",
    tier: 1,
    introduction:
      "Breda is met 48 bestellingen een van onze belangrijkste steden in West-Brabant. De afstand vanaf ons depot in Middelbeers bedraagt zo'n 50 kilometer, maar dankzij de goede verbinding via de A58 plannen we regelmatig ritten naar Breda en omgeving. De bezorgkosten starten vanaf €45 per kuub, met slechts een kleine toeslag bij grotere bestellingen. We bezorgen in het Centrum, Princenhage, Bavel, Ulvenhout en de Haagse Beemden — kortom in heel Breda. Veel Bredanaars met een karakteristieke stadswoning of ruime tuin in de buitenwijken hebben een open haard of moderne houtkachel en kiezen voor ons ovengedroogd hardhout. Maar ook halfdroog haardhout is gewild bij klanten die alvast willen inslaan voor het volgende stookseizoen. Bestel vandaag online en we staan binnen enkele werkdagen bij je aan de deur.",
    neighborhoods: ["Centrum", "Princenhage", "Bavel", "Ulvenhout", "Haagse Beemden"],
    metaTitle: "Haardhout bezorgen in Breda | Vanaf €45",
    metaDescription:
      "Haardhout bezorgen in Breda? De Vuurmeester levert premium haardhout in heel Breda vanaf €45. Ovengedroogd & halfdroog, snel bezorgd vanuit Brabant.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Breda?",
        answer:
          "De bezorgkosten voor haardhout in Breda beginnen bij €45 per kuub. Bij grotere bestellingen geldt een kleine volumetoeslag van 10% per extra kuub. Breda valt in postcodegebied 48, waardoor je nog altijd profiteert van een scherp Brabants tarief.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Breda?",
        answer:
          "De bezorging naar Breda duurt gemiddeld 3 tot 5 werkdagen. De afstand vanuit ons depot in Middelbeers is ongeveer 50 kilometer via de A58. We combineren ritten naar Breda en West-Brabant om efficiënt te bezorgen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Breda woon?",
        answer:
          "Ja, ophalen bij ons depot in Middelbeers is altijd mogelijk. Vanuit Breda is dat zo'n 50 kilometer, ongeveer 40 minuten rijden. Plan je ophaalmoment even telefonisch of via onze website, dan zorgen we dat alles voor je klaarstaat.",
      },
      {
        question: "Bezorgen jullie in alle wijken van Breda?",
        answer:
          "Ja, we bezorgen in heel Breda. Of je nu in het Centrum woont, in Princenhage, Bavel, Ulvenhout of de Haagse Beemden — het bezorgtarief is overal hetzelfde. We komen graag bij je langs.",
      },
      {
        question: "Welk haardhout is het populairst in Breda?",
        answer:
          "In Breda is ovengedroogd hardhout het populairst. Dit hout is direct stookklaar met een vochtpercentage onder de 20%, perfect voor de vele open haarden en houtkachels in Bredase woningen. Halfdroog haardhout is een goed alternatief als je het hout nog een paar maanden wilt laten drogen en wat wilt besparen.",
      },
    ],
    nearbyCities: ["oosterhout", "dongen", "tilburg", "roosendaal", "goirle"],
  },
  // ==================== TIER 2 ====================
  {
    slug: "veldhoven",
    name: "Veldhoven",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5501AB",
    distanceFromDepot: 20,
    estimatedDelivery: "2-4 werkdagen",
    tier: 2,
    introduction:
      "Veldhoven, direct ten zuiden van Eindhoven, is met 35 leveringen een van onze trouwste gemeenten. Op slechts 20 kilometer van ons depot in Middelbeers bezorgen we hier al voor €39 per kuub, zonder extra toeslag bij meerdere kubieke meters. De groene woonwijken van Veldhoven met hun ruime kavels en moderne woningen zijn ideaal voor een houtkachel of open haard. Onze klanten in Veldhoven kiezen vaak voor ovengedroogd hardhout dat direct stookklaar is. We leveren los gestort op je oprit en bellen altijd even vooraf. Bestel online en geniet snel van warmte in je Veldhovense woning.",
    metaTitle: "Haardhout bezorgen in Veldhoven | Vanaf €39/m³",
    metaDescription:
      "Haardhout bezorgen in Veldhoven? De Vuurmeester levert premium haardhout binnen 2-4 werkdagen. Bezorging vanaf €39/m³. Bestel nu!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Veldhoven?",
        answer:
          "De bezorgkosten voor haardhout in Veldhoven bedragen €39 voor 1 kuub. Er geldt geen toeslag per extra kuub, waardoor ook grotere bestellingen bijzonder voordelig uitpakken.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Veldhoven?",
        answer:
          "Veldhoven ligt op slechts 20 kilometer van ons depot in Middelbeers. We bezorgen je haardhout doorgaans binnen 2 tot 4 werkdagen. Vooraf nemen we altijd contact met je op om een bezorgmoment af te stemmen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Veldhoven woon?",
        answer:
          "Ja, dat kan! Ons depot in Middelbeers ligt op slechts 5 minuten van Oirschot en is goed bereikbaar vanuit Veldhoven. Ophalen doe je op afspraak.",
      },
    ],
    nearbyCities: ["eindhoven", "waalre", "valkenswaard", "best", "eersel", "oirschot"],
  },
  {
    slug: "nuenen",
    name: "Nuenen",
    province: "noord-brabant",
    postcodePrefix: "56",
    samplePostcode: "5671AB",
    distanceFromDepot: 20,
    estimatedDelivery: "2-4 werkdagen",
    tier: 2,
    introduction:
      "Nuenen, het schildersdorp van Van Gogh, is met 31 leveringen een vertrouwde bestemming voor De Vuurmeester. Op 20 kilometer van ons depot in Middelbeers bezorgen we hier voor slechts €39 per kuub — zonder toeslag bij grotere bestellingen. De karakteristieke Nuenense woningen met hun sfeervolle interieurs vragen om een goed haardvuur. Of je nu kiest voor ovengedroogd hardhout dat direct brandt, of halfdroog hout om alvast in te slaan — wij brengen het bij je thuis. Bestel online en wij zorgen voor een snelle levering in Nuenen.",
    metaTitle: "Haardhout bezorgen in Nuenen | Vanaf €39/m³",
    metaDescription:
      "Haardhout bezorgen in Nuenen? De Vuurmeester levert premium haardhout voor €39/m³. Binnen 2-4 werkdagen bezorgd. Bestel online!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Nuenen?",
        answer:
          "De bezorgkosten voor haardhout in Nuenen bedragen €39 voor 1 kuub. Er geldt geen toeslag per extra kuub, waardoor grotere bestellingen bijzonder voordelig zijn.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Nuenen?",
        answer:
          "Nuenen ligt op slechts 20 kilometer van ons depot in Middelbeers. We bezorgen je haardhout doorgaans binnen 2 tot 4 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Nuenen woon?",
        answer:
          "Ja, dat kan! Ons depot in Middelbeers ligt op slechts 5 minuten van Oirschot en is goed bereikbaar vanuit Nuenen. Ophalen doe je op afspraak.",
      },
    ],
    nearbyCities: ["eindhoven", "helmond", "geldrop", "son-en-breugel", "best"],
  },
  {
    slug: "oirschot",
    name: "Oirschot",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5688AB",
    distanceFromDepot: 5,
    estimatedDelivery: "2-3 werkdagen",
    tier: 2,
    introduction:
      "Oirschot is onze thuisgemeente — ons depot in Middelbeers valt onder de gemeente Oirschot. Met 27 leveringen aan lokale klanten zijn we letterlijk de haardhoutleverancier om de hoek. Op slechts 5 kilometer afstand profiteer je van ons allerlaagste bezorgtarief: €20 vast, ongeacht het aantal kuub. Dat maakt Oirschot de voordeligste bestemming in heel Nederland voor onze klanten. De monumentale panden en sfeervolle boerderijen rondom het Marktplein van Oirschot zijn als gemaakt voor een knapperend haardvuur. Bestel online en we staan binnen 2 tot 3 werkdagen bij je voor de deur.",
    metaTitle: "Haardhout bezorgen in Oirschot | Slechts €20 vast tarief",
    metaDescription:
      "Haardhout bezorgen in Oirschot? De Vuurmeester bezorgt vanuit Middelbeers voor slechts €20 vast tarief. Binnen 2-3 werkdagen geleverd!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Oirschot?",
        answer:
          "Oirschot valt in ons vaste-tarief-gebied omdat ons depot in Middelbeers onder de gemeente Oirschot valt. Je betaalt slechts €20 vast voor bezorging, ongeacht het aantal kuub dat je bestelt.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Oirschot?",
        answer:
          "Oirschot ligt op slechts 5 kilometer van ons depot. We bezorgen je haardhout doorgaans binnen 2 tot 3 werkdagen. Omdat we zo dichtbij zijn, kunnen we vaak zelfs sneller leveren.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Oirschot woon?",
        answer:
          "Absoluut! Ons depot in Middelbeers ligt op slechts 5 minuten rijden vanuit het centrum van Oirschot. Ophalen kan altijd op afspraak.",
      },
    ],
    nearbyCities: ["best", "eindhoven", "hilvarenbeek", "tilburg", "diessen", "boxtel"],
  },
  {
    slug: "apeldoorn",
    name: "Apeldoorn",
    province: "gelderland",
    postcodePrefix: "73",
    samplePostcode: "7311AB",
    distanceFromDepot: 120,
    estimatedDelivery: "5-7 werkdagen",
    tier: 2,
    introduction:
      "Apeldoorn aan de rand van de Veluwe is verrassend populair bij De Vuurmeester. Met 26 leveringen is dit een van onze best presterende steden buiten Brabant. Ondanks de 120 kilometer afstand vanaf ons depot in Middelbeers plannen we regelmatig ritten naar Apeldoorn en omgeving. De bezorgkosten bedragen €64 per kuub. Veel Apeldoornse klanten hebben vrijstaande woningen met open haarden of moderne houtkachels — perfect voor ons ovengedroogd hardhout. De combinatie van Veluwse natuur en een knapperend haardvuur is onverslaanbaar. Bestel online en wij zorgen dat je haardhout netjes wordt afgeleverd.",
    metaTitle: "Haardhout bezorgen in Apeldoorn | Bezorging €64/m³",
    metaDescription:
      "Haardhout bezorgen in Apeldoorn? De Vuurmeester levert premium haardhout aan de Veluwe. Bezorging €64/m³, binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Apeldoorn?",
        answer:
          "De bezorgkosten voor haardhout in Apeldoorn bedragen €64 voor 1 kuub. Bij meerdere kubieke meters profiteer je van een staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Apeldoorn?",
        answer:
          "Apeldoorn ligt op 120 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 5 tot 7 werkdagen. We plannen ritten naar de Veluwe zodra we voldoende bestellingen in de regio hebben.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Apeldoorn woon?",
        answer:
          "Dat kan, maar vanuit Apeldoorn is het wel een stukje rijden. Ons depot in Middelbeers ligt op 5 minuten van Oirschot in Noord-Brabant. De meeste Apeldoornse klanten kiezen daarom voor thuisbezorging.",
      },
    ],
    nearbyCities: ["arnhem", "ede"],
  },
  {
    slug: "waalre",
    name: "Waalre",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5581AB",
    distanceFromDepot: 18,
    estimatedDelivery: "2-4 werkdagen",
    tier: 2,
    introduction:
      "Waalre, het groene villadorp ten zuiden van Eindhoven, is een echte haardhoutgemeente. Met 25 leveringen weten de inwoners van Waalre precies waar ze terecht kunnen voor kwalitatief hardhout. Op slechts 18 kilometer van ons depot in Middelbeers bezorgen we hier al voor €39 per kuub. De ruime kavels en vrijstaande woningen in Waalre-Dorp en Aalst hebben vaak prachtige open haarden of sierlijke houtkachels. Wij leveren ovengedroogd en halfdroog hardhout los gestort op je oprit, zodat jij alleen nog maar hoeft te genieten. Bestel gemakkelijk online en ontvang je haardhout binnen enkele werkdagen.",
    metaTitle: "Haardhout bezorgen in Waalre | Vanaf €39/m³",
    metaDescription:
      "Haardhout bezorgen in Waalre? De Vuurmeester levert premium haardhout binnen 2-4 werkdagen. Bezorging vanaf €39/m³. Bestel nu!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Waalre?",
        answer:
          "De bezorgkosten voor haardhout in Waalre bedragen €39 voor 1 kuub. Er geldt geen toeslag per extra kuub, waardoor ook grotere bestellingen heel voordelig uitpakken.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Waalre?",
        answer:
          "Waalre ligt op slechts 18 kilometer van ons depot in Middelbeers. We bezorgen je haardhout doorgaans binnen 2 tot 4 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Waalre woon?",
        answer:
          "Natuurlijk! Ons depot in Middelbeers ligt op 5 minuten rijden van Oirschot, goed bereikbaar vanuit Waalre via de N69. Ophalen doe je op afspraak.",
      },
    ],
    nearbyCities: ["eindhoven", "veldhoven", "valkenswaard", "geldrop", "eersel"],
  },
  {
    slug: "best",
    name: "Best",
    province: "noord-brabant",
    postcodePrefix: "56",
    samplePostcode: "5681AB",
    distanceFromDepot: 15,
    estimatedDelivery: "2-3 werkdagen",
    tier: 2,
    introduction:
      "Best is een van de dichtsbijgelegen gemeenten vanuit ons depot en dat merk je aan het tarief. Met 23 leveringen aan blije klanten en een afstand van slechts 15 kilometer bezorgen we hier voor het allerlaagste vast tarief van €20, ongeacht hoeveel kuub je bestelt. Best ligt precies tussen Eindhoven en Oirschot in, waardoor het perfect op onze dagelijkse routes past. De mix van nieuwbouwwijken en oudere dorpskernen zorgt voor veel huishoudens met houtkachels en open haarden. Van halfdroog hardhout om alvast in te slaan tot direct stookbaar ovengedroogd hout — wij brengen het bij je thuis in Best.",
    metaTitle: "Haardhout bezorgen in Best | Slechts €20 vast tarief",
    metaDescription:
      "Haardhout bezorgen in Best? De Vuurmeester levert voor slechts €20 vast tarief. Op 15 km van ons depot, binnen 2-3 werkdagen geleverd!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Best?",
        answer:
          "Best valt in ons vaste-tarief-gebied, waardoor je slechts €20 betaalt voor bezorging, ongeacht het aantal kuub. Dat is hetzelfde tarief als voor klanten in Oirschot en direct rondom ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Best?",
        answer:
          "Best ligt op slechts 15 kilometer van ons depot in Middelbeers. We bezorgen je haardhout meestal binnen 2 tot 3 werkdagen. Omdat Best op onze dagelijkse routes ligt, kunnen we vaak snel leveren.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Best woon?",
        answer:
          "Zeker! Vanuit Best ben je in een kwartier bij ons depot in Middelbeers, op 5 minuten van Oirschot. Ophalen kan altijd op afspraak. Maar met ons vaste tarief van €20 is thuisbezorging ook heel aantrekkelijk.",
      },
    ],
    nearbyCities: ["eindhoven", "oirschot", "son-en-breugel", "boxtel", "veldhoven"],
  },
  {
    slug: "hilvarenbeek",
    name: "Hilvarenbeek",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5081AB",
    distanceFromDepot: 10,
    estimatedDelivery: "2-3 werkdagen",
    tier: 2,
    introduction:
      "Hilvarenbeek is een echte buurgemeente van ons depot en dat maakt het een van onze voordeligste bestemmingen. Met 23 leveringen en een afstand van slechts 10 kilometer betaal je hier het vaste tarief van €20, hoeveel kuub je ook bestelt. Het Brabantse dorp staat bekend om zijn landelijke karakter en prachtige natuur rondom de Beekse Bergen. De vele boerderijen, landhuizen en karakteristieke dorpswoningen hebben vaak grote open haarden die smeken om goed hardhout. Wij leveren het graag — ovengedroogd of halfdroog, vers van ons depot. Bestel online en wij staan razendsnel bij je voor de deur.",
    metaTitle: "Haardhout bezorgen in Hilvarenbeek | Slechts €20 vast tarief",
    metaDescription:
      "Haardhout bezorgen in Hilvarenbeek? De Vuurmeester bezorgt voor slechts €20 vast tarief. Op 10 km van ons depot, snel geleverd!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Hilvarenbeek?",
        answer:
          "Hilvarenbeek valt in ons vaste-tarief-gebied rondom het depot. Je betaalt slechts €20 voor bezorging, ongeacht het aantal kuub dat je bestelt.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Hilvarenbeek?",
        answer:
          "Hilvarenbeek ligt op slechts 10 kilometer van ons depot in Middelbeers. We bezorgen je haardhout doorgaans binnen 2 tot 3 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Hilvarenbeek woon?",
        answer:
          "Absoluut! Vanuit Hilvarenbeek ben je in een paar minuten bij ons depot in Middelbeers. Ophalen is altijd welkom op afspraak.",
      },
    ],
    nearbyCities: ["tilburg", "oirschot", "diessen", "goirle", "oisterwijk"],
  },
  {
    slug: "almere",
    name: "Almere",
    province: "flevoland",
    postcodePrefix: "13",
    samplePostcode: "1311AB",
    distanceFromDepot: 140,
    estimatedDelivery: "5-7 werkdagen",
    tier: 2,
    introduction:
      "Almere is onze populairste bestemming in Flevoland. Met 22 leveringen kiezen verrassend veel Almeerders voor haardhout van De Vuurmeester uit Brabant. Ondanks de 140 kilometer afstand bezorgen we regelmatig in Almere en combineren we ritten door de regio. De bezorgkosten bedragen €69 per kuub. De vele nieuwbouwwoningen in Almere Buiten en Almere Haven hebben moderne houtkachels en inbouwhaarden die perfect passen bij ons ovengedroogd hardhout met minder dan 20% vocht. Geen gedoe met natte blokken — direct stoken en genieten. Bestel online en wij plannen een bezorging naar Almere.",
    metaTitle: "Haardhout bezorgen in Almere | Bezorging €69/m³",
    metaDescription:
      "Haardhout bezorgen in Almere? De Vuurmeester levert premium haardhout in heel Almere. Bezorging €69/m³, binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Almere?",
        answer:
          "De bezorgkosten voor haardhout in Almere bedragen €69 voor 1 kuub. Bij grotere bestellingen profiteer je van een staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Almere?",
        answer:
          "Almere ligt op 140 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 5 tot 7 werkdagen. We bundelen bestellingen in de regio Flevoland om efficiënt te kunnen rijden.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Almere woon?",
        answer:
          "Dat kan, maar het is een flinke rit. Ons depot in Middelbeers ligt op 5 minuten van Oirschot in Noord-Brabant. De meeste klanten uit Almere kiezen daarom voor onze bezorgservice.",
      },
    ],
    nearbyCities: ["lelystad", "hilversum", "amsterdam"],
  },
  {
    slug: "lelystad",
    name: "Lelystad",
    province: "flevoland",
    postcodePrefix: "82",
    samplePostcode: "8211AB",
    distanceFromDepot: 150,
    estimatedDelivery: "5-7 werkdagen",
    tier: 2,
    introduction:
      "Lelystad is onze verste vaste bestemming in Flevoland, maar met 21 leveringen absoluut een trouwe markt. Op 150 kilometer van ons depot in Middelbeers plannen we geregeld ritten naar Lelystad, vaak in combinatie met Almere en omgeving. De bezorgkosten bedragen €70 per kuub. Lelystad kent veel ruime woningen met houtkachels, ideaal voor onze droge houtsoorten. Het ovengedroogde hardhout is direct stookbaar en brandt schoon, precies wat je wilt in een moderne kachel. We leveren los gestort op je oprit of een andere bereikbare plek. Plan je bestelling online en wij zorgen voor de rest.",
    metaTitle: "Haardhout bezorgen in Lelystad | Bezorging €70/m³",
    metaDescription:
      "Haardhout bezorgen in Lelystad? De Vuurmeester levert premium haardhout in Lelystad. Bezorging €70/m³, binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Lelystad?",
        answer:
          "De bezorgkosten voor haardhout in Lelystad bedragen €70 voor 1 kuub. Bij meerdere kubieke meters krijg je staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Lelystad?",
        answer:
          "Lelystad ligt op 150 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 5 tot 7 werkdagen. We combineren ritten naar Lelystad met andere bestellingen in Flevoland.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Lelystad woon?",
        answer:
          "Dat mag altijd, maar vanuit Lelystad is het wel een behoorlijke rit naar ons depot in Middelbeers, op 5 minuten van Oirschot in Noord-Brabant. Thuisbezorging is voor de meeste klanten de handigste optie.",
      },
    ],
    nearbyCities: ["almere", "apeldoorn"],
  },
  {
    slug: "helmond",
    name: "Helmond",
    province: "noord-brabant",
    postcodePrefix: "57",
    samplePostcode: "5701AB",
    distanceFromDepot: 35,
    estimatedDelivery: "3-5 werkdagen",
    tier: 2,
    introduction:
      "Helmond, de tweede stad van Zuidoost-Brabant, is een groeiende markt voor De Vuurmeester. Met 21 leveringen ontdekken steeds meer Helmonders ons premium haardhout. Op 35 kilometer van ons depot in Middelbeers bezorgen we hier voor €44 per kuub — een scherp tarief voor de regio. Het industrieel erfgoed van Helmond wordt steeds vaker gecombineerd met sfeervolle woonruimtes waarin een houtkachel of open haard niet mag ontbreken. Van de Binnenstad tot Brandevoort, wij leveren overal in Helmond. Kies uit ovengedroogd of halfdroog hardhout en bestel gemakkelijk online.",
    metaTitle: "Haardhout bezorgen in Helmond | Bezorging €44/m³",
    metaDescription:
      "Haardhout bezorgen in Helmond? De Vuurmeester levert premium haardhout voor €44/m³. Binnen 3-5 werkdagen bezorgd. Bestel online!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Helmond?",
        answer:
          "De bezorgkosten voor haardhout in Helmond bedragen €44 voor 1 kuub. Bij grotere bestellingen profiteer je van een lichte staffelkorting per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Helmond?",
        answer:
          "Helmond ligt op 35 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 3 tot 5 werkdagen. We rijden regelmatig richting Helmond en de Peelregio.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Helmond woon?",
        answer:
          "Ja hoor! Ons depot in Middelbeers ligt op 5 minuten van Oirschot, goed bereikbaar vanuit Helmond via de A67 en N69. Ophalen doe je op afspraak.",
      },
    ],
    nearbyCities: ["eindhoven", "nuenen", "geldrop", "deurne", "son-en-breugel"],
  },
  {
    slug: "arnhem",
    name: "Arnhem",
    province: "gelderland",
    postcodePrefix: "68",
    samplePostcode: "6811AB",
    distanceFromDepot: 100,
    estimatedDelivery: "4-6 werkdagen",
    tier: 2,
    introduction:
      "Arnhem, de hoofdstad van Gelderland, is een trouwe bestemming in ons bezorgnetwerk. Met 20 leveringen hebben we al veel Arnhemmers mogen voorzien van kwalitatief haardhout. Op 100 kilometer van ons depot in Middelbeers bezorgen we hier voor €64 per kuub. De heuvels en bossen rondom Arnhem zorgen voor een perfecte sfeer om te combineren met een warm haardvuur. Veel woningen in Arnhem-Noord en het villagebied hebben ruime open haarden die vragen om goed droog hardhout. Wij leveren ovengedroogd en halfdroog, altijd los gestort. Bestel eenvoudig online vanuit Arnhem.",
    metaTitle: "Haardhout bezorgen in Arnhem | Bezorging €64/m³",
    metaDescription:
      "Haardhout bezorgen in Arnhem? De Vuurmeester levert premium haardhout in Arnhem. Bezorging €64/m³, binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Arnhem?",
        answer:
          "De bezorgkosten voor haardhout in Arnhem bedragen €64 voor 1 kuub. Bij meerdere kubieke meters profiteer je van staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Arnhem?",
        answer:
          "Arnhem ligt op 100 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4 tot 6 werkdagen. We plannen regelmatig ritten naar Gelderland.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Arnhem woon?",
        answer:
          "Dat kan, maar het is wel een stukje rijden. Ons depot in Middelbeers ligt op 5 minuten van Oirschot in Noord-Brabant. De meeste Arnhemse klanten kiezen voor thuisbezorging.",
      },
    ],
    nearbyCities: ["nijmegen", "ede", "apeldoorn"],
  },
  {
    slug: "rotterdam",
    name: "Rotterdam",
    province: "zuid-holland",
    postcodePrefix: "30",
    samplePostcode: "3011AB",
    distanceFromDepot: 95,
    estimatedDelivery: "4-6 werkdagen",
    tier: 2,
    introduction:
      "Rotterdam is onze belangrijkste bestemming in Zuid-Holland. Met 19 leveringen groeit het aantal Rotterdamse klanten gestaag. Op 95 kilometer van ons depot in Middelbeers bezorgen we hier voor €64 per kuub. De havenstad heeft een verrassend groot aantal woningen met open haarden en houtkachels, van de herenhuizen in Kralingen tot de villa's in Hillegersberg. Ons ovengedroogd hardhout brandt schoon en geeft weinig rook — belangrijk in een stedelijke omgeving. We leveren los gestort op je oprit. Bestel online en geniet binnenkort van een knapperend haardvuur in Rotterdam.",
    metaTitle: "Haardhout bezorgen in Rotterdam | Bezorging €64/m³",
    metaDescription:
      "Haardhout bezorgen in Rotterdam? De Vuurmeester levert premium haardhout in Rotterdam. Bezorging €64/m³, binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Rotterdam?",
        answer:
          "De bezorgkosten voor haardhout in Rotterdam bedragen €64 voor 1 kuub. Bij grotere bestellingen krijg je staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Rotterdam?",
        answer:
          "Rotterdam ligt op 95 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4 tot 6 werkdagen. We plannen regelmatig ritten naar Zuid-Holland.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Rotterdam woon?",
        answer:
          "Dat kan altijd op afspraak. Ons depot in Middelbeers ligt op 5 minuten van Oirschot in Noord-Brabant. Veel Rotterdamse klanten kiezen echter voor thuisbezorging.",
      },
    ],
    nearbyCities: ["dordrecht", "den-haag", "breda"],
  },
  {
    slug: "den-haag",
    name: "Den Haag",
    province: "zuid-holland",
    postcodePrefix: "25",
    samplePostcode: "2511AB",
    distanceFromDepot: 110,
    estimatedDelivery: "5-7 werkdagen",
    tier: 2,
    introduction:
      "Den Haag, de hofstad, is een groeiende markt voor De Vuurmeester. Met 10 leveringen zien we hier steeds meer interesse in kwalitatief haardhout uit Brabant. Op 110 kilometer van ons depot in Middelbeers bezorgen we hier voor €64 per kuub. De statige herenhuizen in het Statenkwartier, Benoordenhout en Vogelwijk hebben vaak imposante open haarden die perfect tot hun recht komen met goed droog hardhout. Wij leveren ovengedroogd en halfdroog hardhout, los gestort en met een telefoontje vooraf. Bestel vanuit Den Haag en wij regelen de bezorging.",
    metaTitle: "Haardhout bezorgen in Den Haag | Bezorging €64/m³",
    metaDescription:
      "Haardhout bezorgen in Den Haag? De Vuurmeester levert premium haardhout in Den Haag. Bezorging €64/m³, binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Den Haag?",
        answer:
          "De bezorgkosten voor haardhout in Den Haag bedragen €64 voor 1 kuub. Bij meerdere kubieke meters profiteer je van een staffelkorting op de bezorgkosten per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Den Haag?",
        answer:
          "Den Haag ligt op 110 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 5 tot 7 werkdagen. We bundelen bestellingen in Zuid-Holland om efficiënt te bezorgen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Den Haag woon?",
        answer:
          "Dat mag natuurlijk, maar het is een behoorlijke rit. Ons depot in Middelbeers ligt op 5 minuten van Oirschot in Noord-Brabant. De meeste Haagse klanten kiezen voor thuisbezorging.",
      },
    ],
    nearbyCities: ["rotterdam", "dordrecht"],
  },
  {
    slug: "den-bosch",
    name: "Den Bosch",
    province: "noord-brabant",
    postcodePrefix: "52",
    samplePostcode: "5211AB",
    distanceFromDepot: 30,
    estimatedDelivery: "2-4 werkdagen",
    tier: 2,
    introduction:
      "Den Bosch, de Brabantse hoofdstad, is een vaste prik op onze bezorgroutes. Met 16 leveringen groeit het klantenbestand in 's-Hertogenbosch gestaag. Op 30 kilometer van ons depot in Middelbeers bezorgen we hier voor €40 per kuub — een bijzonder scherp tarief. De historische binnenstad met haar monumentale panden en de residentiële buitenwijken kennen veel woningen met sfeervolle open haarden. Ons ovengedroogd hardhout is de perfecte brandstof voor een Bossche avond bij de haard. Bestel online vanuit Den Bosch en wij zorgen dat het haardhout snel bij je is.",
    metaTitle: "Haardhout bezorgen in Den Bosch | Bezorging €40/m³",
    metaDescription:
      "Haardhout bezorgen in Den Bosch? De Vuurmeester levert premium haardhout voor €40/m³. Binnen 2-4 werkdagen bezorgd. Bestel online!",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Den Bosch?",
        answer:
          "De bezorgkosten voor haardhout in Den Bosch bedragen €40 voor 1 kuub. Bij meerdere kubieke meters krijg je een lichte staffelkorting per extra kuub.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Den Bosch?",
        answer:
          "Den Bosch ligt op 30 kilometer van ons depot in Middelbeers. We bezorgen je haardhout doorgaans binnen 2 tot 4 werkdagen. De route via de A2 brengt ons snel in 's-Hertogenbosch.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Den Bosch woon?",
        answer:
          "Zeker! Ons depot in Middelbeers ligt op 5 minuten van Oirschot, goed bereikbaar vanuit Den Bosch via de A2 en N65. Ophalen doe je op afspraak.",
      },
    ],
    nearbyCities: ["vught", "boxtel", "tilburg", "waalwijk"],
  },
  // ==================== TIER 3 ====================
  {
    slug: "goirle",
    name: "Goirle",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5051AB",
    distanceFromDepot: 25,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Goirle, het gezellige dorp ten zuiden van Tilburg, is goed bereikbaar vanuit ons depot in Middelbeers. Op 25 kilometer afstand bezorgen we premium haardhout voor slechts €39 per kuub. De vele vrijstaande woningen in Goirle hebben vaak een houtkachel of open haard. Wij leveren ovengedroogd en halfdroog hardhout, los gestort op je oprit. Bestel online en geniet binnen enkele werkdagen van een warm haardvuur in Goirle.",
    metaTitle: "Haardhout bezorgen in Goirle | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Goirle? De Vuurmeester levert premium haardhout aan huis vanaf €39. Bezorging vanuit Middelbeers binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Goirle?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Goirle bedragen €39. Een scherp tarief dankzij de korte afstand tot ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Goirle?",
        answer: "Goirle ligt op circa 25 kilometer van ons depot in Middelbeers. De bezorging vindt gemiddeld binnen 2-4 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Goirle woon?",
        answer: "Ja, je bent welkom bij ons depot in Middelbeers. Dat is ongeveer 25 minuten rijden vanuit Goirle. Maak vooraf een afspraak.",
      },
    ],
    nearbyCities: ["tilburg", "hilvarenbeek", "oisterwijk", "berkel-enschot", "oirschot"],
  },
  {
    slug: "oisterwijk",
    name: "Oisterwijk",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5061AB",
    distanceFromDepot: 15,
    estimatedDelivery: "2-3 werkdagen",
    tier: 3,
    introduction:
      "Oisterwijk, het pareldorp van Brabant, ligt op slechts 15 kilometer van ons depot in Middelbeers. De bezorgkosten bedragen €39 per kuub haardhout. De sfeervolle landhuizen en villa's rondom de Oisterwijkse vennen zijn ideaal voor een knapperend haardvuur. Wij leveren ovengedroogd hardhout dat direct stookbaar is. Als buren in de regio bezorgen we snel en voordelig. Bestel online en geniet van warmte in Oisterwijk.",
    metaTitle: "Haardhout bezorgen in Oisterwijk | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Oisterwijk? De Vuurmeester levert premium haardhout aan huis vanaf €39. Slechts 15 km van ons depot, snel bezorgd.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Oisterwijk?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Oisterwijk bedragen €39. Dichtbij ons depot, dus een scherp tarief.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Oisterwijk?",
        answer: "Oisterwijk ligt op slechts 15 kilometer van ons depot in Middelbeers. De bezorging vindt meestal binnen 2-3 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Oisterwijk woon?",
        answer: "Zeker! Ons depot in Middelbeers is slechts 15 minuten rijden vanuit Oisterwijk. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["tilburg", "goirle", "hilvarenbeek", "berkel-enschot", "oirschot", "boxtel"],
  },
  {
    slug: "geldrop",
    name: "Geldrop",
    province: "noord-brabant",
    postcodePrefix: "56",
    samplePostcode: "5661AB",
    distanceFromDepot: 25,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Geldrop, aan de rand van Eindhoven, wordt regelmatig door De Vuurmeester beleverd met premium haardhout. Op 25 kilometer van ons depot in Middelbeers bezorgen we hier voor €39 per kuub. De landgoederen en woonwijken van Geldrop-Mierlo kennen veel woningen met open haarden. Ons ovengedroogd hardhout brandt schoon en is direct stookbaar. We combineren bezorgingen in de regio Eindhoven. Bestel eenvoudig online.",
    metaTitle: "Haardhout bezorgen in Geldrop | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Geldrop? De Vuurmeester levert premium haardhout aan huis vanaf €39. Bezorging vanuit Middelbeers binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Geldrop?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Geldrop bedragen €39. Voordelig dankzij de ligging nabij ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Geldrop?",
        answer: "Geldrop ligt op circa 25 kilometer van ons depot in Middelbeers. De bezorging vindt gemiddeld binnen 2-4 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Geldrop woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is ongeveer 25 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["eindhoven", "nuenen", "helmond", "waalre", "valkenswaard"],
  },
  {
    slug: "son-en-breugel",
    name: "Son en Breugel",
    province: "noord-brabant",
    postcodePrefix: "56",
    samplePostcode: "5691AB",
    distanceFromDepot: 18,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Son en Breugel, het groene dorp tussen Eindhoven en Best, is uitstekend bereikbaar vanuit ons depot in Middelbeers. Op 18 kilometer afstand bezorgen we hier premium haardhout voor €39 per kuub. De rustige woonwijken met veel vrijstaande woningen zijn ideaal voor een houtkachel. Wij leveren ovengedroogd en halfdroog hardhout los gestort. Bestel online en ontvang je haardhout snel in Son en Breugel.",
    metaTitle: "Haardhout bezorgen in Son en Breugel | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Son en Breugel? De Vuurmeester levert premium haardhout aan huis vanaf €39. Bezorging binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Son en Breugel?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Son en Breugel bedragen €39. Een scherp tarief dankzij de korte afstand tot ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Son en Breugel?",
        answer: "Son en Breugel ligt op circa 18 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 2-4 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Son en Breugel woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is slechts 20 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["eindhoven", "nuenen", "best", "helmond"],
  },
  {
    slug: "oosterhout",
    name: "Oosterhout",
    province: "noord-brabant",
    postcodePrefix: "49",
    samplePostcode: "4901AB",
    distanceFromDepot: 45,
    estimatedDelivery: "3-5 werkdagen",
    tier: 3,
    introduction:
      "Oosterhout, strategisch gelegen tussen Tilburg en Breda, wordt regelmatig door ons beleverd. Op 45 kilometer van ons depot in Middelbeers bezorgen we haardhout voor €49 per kuub. We combineren bezorgingen in West-Brabant voor een efficiënte route. De gezellige dorpskern en groene buitenwijken van Oosterhout zijn perfect voor een avond bij de haard. Bestel ovengedroogd of halfdroog hardhout online en wij komen bij je langs.",
    metaTitle: "Haardhout bezorgen in Oosterhout | Vanaf €49 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Oosterhout? De Vuurmeester levert premium haardhout aan huis vanaf €49. Bezorging vanuit Brabant binnen 3-5 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Oosterhout?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Oosterhout bedragen €49. Bij meerdere kubiek profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Oosterhout?",
        answer: "Oosterhout ligt op circa 45 kilometer van ons depot in Middelbeers. De bezorging vindt doorgaans plaats binnen 3-5 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Oosterhout woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is ongeveer 40 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["breda", "dongen", "tilburg", "waalwijk"],
  },
  {
    slug: "deurne",
    name: "Deurne",
    province: "noord-brabant",
    postcodePrefix: "57",
    samplePostcode: "5751AB",
    distanceFromDepot: 40,
    estimatedDelivery: "3-5 werkdagen",
    tier: 3,
    introduction:
      "Deurne in de Peelregio is een vaste bestemming op onze bezorgroutes naar Oost-Brabant. Op 40 kilometer van ons depot in Middelbeers bezorgen we haardhout voor €44 per kuub. De landelijke omgeving van Deurne met zijn vele boerderijen en vrijstaande woningen is als gemaakt voor een houtkachel of open haard. Ons ovengedroogd hardhout is direct stookklaar. We combineren bezorgingen richting Helmond en de Peel. Bestel online.",
    metaTitle: "Haardhout bezorgen in Deurne | Vanaf €44 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Deurne? De Vuurmeester levert premium haardhout aan huis vanaf €44. Bezorging vanuit Brabant binnen 3-5 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Deurne?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Deurne bedragen €44. Bij meerdere kubiek profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Deurne?",
        answer: "Deurne ligt op circa 40 kilometer van ons depot in Middelbeers. De bezorging vindt doorgaans plaats binnen 3-5 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Deurne woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is ongeveer 35 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["helmond", "eindhoven", "geldrop", "nuenen"],
  },
  {
    slug: "roosendaal",
    name: "Roosendaal",
    province: "noord-brabant",
    postcodePrefix: "47",
    samplePostcode: "4701AB",
    distanceFromDepot: 65,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Roosendaal in West-Brabant wordt door De Vuurmeester beleverd met premium haardhout. De afstand van 65 kilometer vanuit ons depot in Middelbeers overbruggen we regelmatig. De bezorgkosten bedragen €48 per kuub. Roosendaal kent veel karakteristieke woningen met open haarden. Wij leveren ovengedroogd en halfdroog hardhout, los gestort op een bereikbare plek bij je woning. We combineren ritten naar West-Brabant. Bestel online en geniet van Brabants haardhout.",
    metaTitle: "Haardhout bezorgen in Roosendaal | Vanaf €48 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Roosendaal? De Vuurmeester levert premium haardhout aan huis vanaf €48. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Roosendaal?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Roosendaal bedragen €48. Bij grotere bestellingen profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Roosendaal?",
        answer: "Roosendaal ligt op circa 65 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Roosendaal woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op ongeveer 50 minuten rijden. Neem vooraf contact op.",
      },
    ],
    nearbyCities: ["breda", "oosterhout"],
  },
  {
    slug: "valkenswaard",
    name: "Valkenswaard",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5551AB",
    distanceFromDepot: 20,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Valkenswaard, het gezellige grensdorp ten zuiden van Eindhoven, wordt regelmatig door ons beleverd. Op 20 kilometer van ons depot in Middelbeers bezorgen we hier haardhout voor €39 per kuub. De dorpse sfeer en ruime woningen van Valkenswaard zijn perfect voor een knapperend haardvuur. Wij leveren ovengedroogd en halfdroog hardhout, los gestort op je oprit. Bestel online en geniet snel van warmte in Valkenswaard.",
    metaTitle: "Haardhout bezorgen in Valkenswaard | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Valkenswaard? De Vuurmeester levert premium haardhout aan huis vanaf €39. Bezorging binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Valkenswaard?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Valkenswaard bedragen €39. Voordelig door de korte afstand tot ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Valkenswaard?",
        answer: "Valkenswaard ligt op circa 20 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 2-4 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Valkenswaard woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is slechts 20 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["waalre", "eindhoven", "veldhoven", "eersel", "geldrop"],
  },
  {
    slug: "eersel",
    name: "Eersel",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5521AB",
    distanceFromDepot: 10,
    estimatedDelivery: "2-3 werkdagen",
    tier: 3,
    introduction:
      "Eersel in de Brabantse Kempen is een van onze nabijste bestemmingen. Op slechts 10 kilometer van ons depot in Middelbeers bezorgen we hier premium haardhout voor €39 per kuub. Het landelijke Eersel met zijn Kempische boerderijen en sfeervolle dorpskern is een ideale plek voor een houtkachel. Wij leveren snel en voordelig, ovengedroogd of halfdroog. Bestel online en geniet van een warm haardvuur in Eersel.",
    metaTitle: "Haardhout bezorgen in Eersel | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Eersel? De Vuurmeester levert premium haardhout aan huis vanaf €39. Slechts 10 km van ons depot, snel bezorgd.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Eersel?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Eersel bedragen €39. Als Kempisch buurdorp van ons depot profiteer je van een scherp tarief.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Eersel?",
        answer: "Eersel ligt op slechts 10 kilometer van ons depot in Middelbeers. Je haardhout wordt doorgaans binnen 2-3 werkdagen bezorgd.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Eersel woon?",
        answer: "Zeker! Ons depot in Middelbeers is op 10 minuten rijden vanuit Eersel. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["oirschot", "bladel", "veldhoven", "valkenswaard", "waalre"],
  },
  {
    slug: "ede",
    name: "Ede",
    province: "gelderland",
    postcodePrefix: "67",
    samplePostcode: "6711AB",
    distanceFromDepot: 100,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Ede aan de Veluwe wordt door De Vuurmeester beleverd met premium haardhout. De afstand van 100 kilometer vanuit ons depot in Middelbeers overbruggen we via de A2 en A50. De bezorgkosten bedragen €64 per kuub. De vele woningen in Ede met een open haard of houtkachel zijn ideaal voor ons ovengedroogd hardhout. We combineren bezorgingen in Gelderland. Bestel online en geniet van kwaliteitshaardhout in Ede.",
    metaTitle: "Haardhout bezorgen in Ede | Vanaf €64 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Ede? De Vuurmeester levert premium haardhout aan huis vanaf €64. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Ede?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Ede bedragen €64. Bij grotere bestellingen profiteer je van staffelkorting.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Ede?",
        answer: "Ede ligt op circa 100 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Ede woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. De rijafstand is ongeveer anderhalf uur. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["arnhem", "apeldoorn", "nijmegen"],
  },
  {
    slug: "hilversum",
    name: "Hilversum",
    province: "noord-holland",
    postcodePrefix: "12",
    samplePostcode: "1211AB",
    distanceFromDepot: 120,
    estimatedDelivery: "5-7 werkdagen",
    tier: 3,
    introduction:
      "Hilversum, de mediastad in het Gooi, wordt door De Vuurmeester beleverd met premium haardhout. De afstand van 120 kilometer vanuit ons depot in Middelbeers is geen bezwaar — we rijden regelmatig naar Noord-Holland. De bezorgkosten bedragen €69 per kuub. De karakteristieke Gooise villa's met hun open haarden en houtkachels zijn ideaal voor ons ovengedroogd hardhout. We nemen altijd vooraf contact op over het bezorgmoment. Bestel online en geniet van Brabantse kwaliteit in het Gooi.",
    metaTitle: "Haardhout bezorgen in Hilversum | Vanaf €69 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Hilversum? De Vuurmeester levert premium haardhout aan huis vanaf €69. Bezorging vanuit Brabant binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Hilversum?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Hilversum bedragen €69. Bij een grotere bestelling worden de bezorgkosten per kuub voordeliger.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Hilversum?",
        answer: "Hilversum ligt op circa 120 kilometer van ons depot in Middelbeers. De bezorging vindt plaats binnen 5-7 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Hilversum woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op ongeveer anderhalf uur rijden. Neem vooraf contact op.",
      },
    ],
    nearbyCities: ["almere", "amsterdam", "soest", "utrecht"],
  },
  {
    slug: "dongen",
    name: "Dongen",
    province: "noord-brabant",
    postcodePrefix: "51",
    samplePostcode: "5101AB",
    distanceFromDepot: 35,
    estimatedDelivery: "3-5 werkdagen",
    tier: 3,
    introduction:
      "Dongen, het levendige Brabantse dorp tussen Tilburg en Breda, wordt regelmatig door ons beleverd. Op 35 kilometer van ons depot in Middelbeers bezorgen we haardhout voor €40 per kuub. We rijden vaak door deze regio en combineren bezorgingen voor een efficiënte route. Kies uit ons assortiment ovengedroogd of halfdroog hardhout en ontvang het los gestort op je oprit. Bestel snel en eenvoudig online.",
    metaTitle: "Haardhout bezorgen in Dongen | Vanaf €40 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Dongen? De Vuurmeester levert premium haardhout aan huis vanaf €40. Bezorging vanuit Middelbeers binnen 3-5 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Dongen?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Dongen bedragen €40. Bij meerdere kubiek profiteer je van onze staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Dongen?",
        answer: "Dongen ligt op circa 35 kilometer van ons depot in Middelbeers. De bezorging vindt doorgaans plaats binnen 3-5 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Dongen woon?",
        answer: "Ja, je kunt je haardhout ophalen bij ons depot in Middelbeers. Dat is ongeveer 30 minuten rijden. Plan vooraf een afhaaltijdstip in.",
      },
    ],
    nearbyCities: ["tilburg", "oosterhout", "waalwijk", "breda", "goirle"],
  },
  {
    slug: "vught",
    name: "Vught",
    province: "noord-brabant",
    postcodePrefix: "52",
    samplePostcode: "5261AB",
    distanceFromDepot: 25,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Vught, het chique groene dorp aan de rand van Den Bosch, is een populaire bestemming voor onze haardhoutbezorging. Op 25 kilometer van ons depot in Middelbeers rijden we er snel naartoe. De bezorgkosten bedragen €40 per kuub. De fraaie woningen en villa's in Vught beschikken vaak over een open haard of sfeervolle houtkachel — perfect voor ons premium hardhout. Geniet van het warme gevoel van een echt houtvuur. Bestel eenvoudig online.",
    metaTitle: "Haardhout bezorgen in Vught | Vanaf €40 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Vught? De Vuurmeester levert premium haardhout aan huis vanaf €40. Slechts 25 km van ons depot, bezorgd binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Vught?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Vught bedragen €40. Bij grotere bestellingen profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Vught?",
        answer: "Vught ligt op circa 25 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 2-4 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Vught woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. De rijafstand is ongeveer 25 minuten. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["den-bosch", "boxtel", "tilburg", "oisterwijk"],
  },
  {
    slug: "dordrecht",
    name: "Dordrecht",
    province: "zuid-holland",
    postcodePrefix: "33",
    samplePostcode: "3311AB",
    distanceFromDepot: 80,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Dordrecht, de oudste stad van Holland, behoort tot ons bezorggebied in Zuid-Holland. Vanuit ons depot in Middelbeers rijden we via de A27 naar Dordrecht, een afstand van circa 80 kilometer. De bezorgkosten bedragen €64 per kuub. De historische panden in de Dordtse binnenstad hebben vaak karakteristieke open haarden die perfect tot hun recht komen met ons premium hardhout. We combineren bestellingen voor een efficiënte bezorging. Bestel online en wij komen naar je toe.",
    metaTitle: "Haardhout bezorgen in Dordrecht | Vanaf €64 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Dordrecht? De Vuurmeester levert premium haardhout aan huis vanaf €64. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Dordrecht?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Dordrecht bedragen €64. Bij meerdere kubiek profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Dordrecht?",
        answer: "Dordrecht ligt op circa 80 kilometer van ons depot in Middelbeers. De bezorging vindt doorgaans plaats binnen 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Dordrecht woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op ongeveer een uur rijden. Neem vooraf contact op.",
      },
    ],
    nearbyCities: ["rotterdam", "breda", "oosterhout"],
  },
  {
    slug: "bladel",
    name: "Bladel",
    province: "noord-brabant",
    postcodePrefix: "55",
    samplePostcode: "5531AB",
    distanceFromDepot: 15,
    estimatedDelivery: "2-3 werkdagen",
    tier: 3,
    introduction:
      "Bladel in de Brabantse Kempen ligt op slechts 15 kilometer van ons depot in Middelbeers. Die korte afstand maakt de bezorging bijzonder voordelig: slechts €39 per kuub haardhout. In het landelijke Bladel is haardhout stoken een vanzelfsprekendheid — veel woningen hebben een houtkachel of open haard. Wij leveren ovengedroogd hardhout dat direct stookbaar is en halfdroog hardhout voor wie geduld heeft. Bestel vandaag en geniet binnen een paar dagen van je haardvuur.",
    metaTitle: "Haardhout bezorgen in Bladel | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Bladel? De Vuurmeester levert premium haardhout aan huis vanaf €39. Slechts 15 km van ons depot, bezorgd binnen 2-3 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Bladel?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Bladel bedragen €39. Bladel ligt dichtbij ons depot, waardoor je profiteert van een extra scherp tarief.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Bladel?",
        answer: "Bladel ligt op slechts 15 kilometer van ons depot in Middelbeers. Je haardhout wordt doorgaans binnen 2-3 werkdagen bezorgd.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Bladel woon?",
        answer: "Zeker! Ons depot in Middelbeers is op een kwartiertje rijden vanuit Bladel. Neem contact op om een afhaaltijdstip af te spreken.",
      },
    ],
    nearbyCities: ["eersel", "oirschot", "valkenswaard", "veldhoven"],
  },
  {
    slug: "boxtel",
    name: "Boxtel",
    province: "noord-brabant",
    postcodePrefix: "52",
    samplePostcode: "5281AB",
    distanceFromDepot: 20,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Boxtel ligt op slechts 20 kilometer van ons depot in Middelbeers en valt binnen ons voordeligste bezorggebied. Omdat postcode 5281 tot ons lokale depotgebied behoort, betaal je hier slechts €20 bezorgkosten. Dat maakt Boxtel een van de allervoordeligste locaties om haardhout te laten bezorgen. We leveren ovengedroogd en halfdroog hardhout van topkwaliteit, los gestort op je oprit. In Boxtel hoef je niet lang te wachten: we zijn snel bij je. Bestel online en geniet van een scherpe deal.",
    metaTitle: "Haardhout bezorgen in Boxtel | Vanaf €20 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Boxtel? De Vuurmeester levert premium haardhout aan huis vanaf slechts €20. Slechts 20 km van ons depot, bezorgd binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Boxtel?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Boxtel bedragen slechts €20. Boxtel valt binnen ons lokale depotgebied en profiteert daardoor van het laagste tarief.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Boxtel?",
        answer: "Boxtel ligt op circa 20 kilometer van ons depot in Middelbeers. De bezorging vindt gemiddeld binnen 2-4 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Boxtel woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk en slechts 20 minuten rijden vanuit Boxtel. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["vught", "den-bosch", "best", "oisterwijk", "oirschot"],
  },
  {
    slug: "soest",
    name: "Soest",
    province: "utrecht",
    postcodePrefix: "37",
    samplePostcode: "3761AB",
    distanceFromDepot: 100,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Soest, gelegen aan de rand van de Utrechtse Heuvelrug, wordt regelmatig door De Vuurmeester beleverd. De afstand van 100 kilometer vanuit ons depot in Middelbeers overbruggen we via de A2 en A28. De bezorgkosten bedragen €64 per kuub haardhout. De ruime woningen in Soest en Soestdijk beschikken vaak over sfeervolle open haarden. Ons ovengedroogd hardhout brandt schoon en geeft weinig rook. We combineren bezorgingen in de regio. Bestel online en geniet van kwaliteit.",
    metaTitle: "Haardhout bezorgen in Soest | Vanaf €64 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Soest? De Vuurmeester levert premium haardhout aan huis vanaf €64. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Soest?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Soest bedragen €64. Bij grotere bestellingen profiteer je van staffelkorting.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Soest?",
        answer: "Soest ligt op circa 100 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Soest woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op ongeveer anderhalf uur rijden. Plan vooraf een afhaaltijdstip in.",
      },
    ],
    nearbyCities: ["utrecht", "hilversum", "ede"],
  },
  {
    slug: "amsterdam",
    name: "Amsterdam",
    province: "noord-holland",
    postcodePrefix: "10",
    samplePostcode: "1011AB",
    distanceFromDepot: 130,
    estimatedDelivery: "5-7 werkdagen",
    tier: 3,
    introduction:
      "Ook in Amsterdam bezorgt De Vuurmeester premium haardhout aan huis. Vanuit ons depot in Middelbeers rijden we regelmatig naar de hoofdstad, een afstand van circa 130 kilometer. De bezorgkosten bedragen €69 per kuub. Van grachtenpanden met klassieke open haarden tot moderne appartementen met inbouwhaard — ons ovengedroogd hardhout brandt schoon en geeft weinig rook, perfect voor de stad. Bestel online en geniet van Brabants hardhout in de hoofdstad.",
    metaTitle: "Haardhout bezorgen in Amsterdam | Vanaf €69 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Amsterdam? De Vuurmeester levert premium haardhout aan huis vanaf €69. Ovengedroogd hardhout, bezorgd binnen 5-7 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Amsterdam?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Amsterdam bedragen €69. Bij een grotere bestelling profiteer je van staffelkorting.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Amsterdam?",
        answer: "Amsterdam ligt op circa 130 kilometer van ons depot in Middelbeers. De bezorging vindt plaats binnen 5-7 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Amsterdam woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op bijna twee uur rijden. Neem vooraf contact op.",
      },
    ],
    nearbyCities: ["almere", "hilversum", "den-haag"],
  },
  {
    slug: "utrecht",
    name: "Utrecht",
    province: "utrecht",
    postcodePrefix: "35",
    samplePostcode: "3511AB",
    distanceFromDepot: 85,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Utrecht, centraal gelegen in Nederland, is goed bereikbaar vanuit ons depot in Middelbeers via de A2. Op 85 kilometer afstand bezorgen we premium haardhout voor €64 per kuub. De stad Utrecht heeft veel karakteristieke woningen met open haarden, van monumentale grachtenpanden tot ruime jaren '30 huizen. Ons ovengedroogd hardhout is direct stookbaar en brandt schoon. We rijden regelmatig naar Utrecht en omstreken. Bestel online en geniet van warmte in je Utrechtse woning.",
    metaTitle: "Haardhout bezorgen in Utrecht | Vanaf €64 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Utrecht? De Vuurmeester levert premium haardhout aan huis vanaf €64. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Utrecht?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Utrecht bedragen €64. Bij grotere bestellingen profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Utrecht?",
        answer: "Utrecht ligt op circa 85 kilometer van ons depot in Middelbeers. De bezorging duurt gemiddeld 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Utrecht woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. De rijafstand is ongeveer een uur. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["soest", "hilversum", "den-bosch", "ede"],
  },
  {
    slug: "nijmegen",
    name: "Nijmegen",
    province: "gelderland",
    postcodePrefix: "65",
    samplePostcode: "6511AB",
    distanceFromDepot: 85,
    estimatedDelivery: "4-6 werkdagen",
    tier: 3,
    introduction:
      "Nijmegen, de oudste stad van Nederland, is een vaste bestemming op onze Gelderse bezorgroutes. Vanuit Middelbeers rijden we via de A2 en A50 naar Nijmegen, een afstand van circa 85 kilometer. De bezorgkosten bedragen €58 per kuub. De vele historische woningen en villa's op de Nijmeegse heuvels beschikken vaak over prachtige open haarden. Ons ovengedroogd hardhout is de perfecte brandstof voor lange winteravonden. Bestel vandaag nog online.",
    metaTitle: "Haardhout bezorgen in Nijmegen | Vanaf €58 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Nijmegen? De Vuurmeester levert premium haardhout aan huis vanaf €58. Bezorging vanuit Brabant binnen 4-6 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Nijmegen?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Nijmegen bedragen €58. Bij meerdere kubiek profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Nijmegen?",
        answer: "Nijmegen ligt op circa 85 kilometer van ons depot in Middelbeers. De bezorging vindt plaats binnen 4-6 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Nijmegen woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Reken op ongeveer een uur rijden. Neem vooraf contact op.",
      },
    ],
    nearbyCities: ["arnhem", "ede", "den-bosch"],
  },
  {
    slug: "berkel-enschot",
    name: "Berkel-Enschot",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5056AB",
    distanceFromDepot: 25,
    estimatedDelivery: "2-4 werkdagen",
    tier: 3,
    introduction:
      "Berkel-Enschot, gelegen tussen Tilburg en Oisterwijk, is goed bereikbaar vanuit ons depot in Middelbeers. Op 25 kilometer afstand bezorgen we hier premium haardhout voor slechts €39 per kuub. Dit rustige dorp heeft veel vrijstaande woningen met open haarden en houtkachels. Wij leveren ovengedroogd hardhout dat direct stookbaar is en halfdroog hardhout voor wie het nog wil laten drogen. Bestel eenvoudig online.",
    metaTitle: "Haardhout bezorgen in Berkel-Enschot | Vanaf €39 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Berkel-Enschot? De Vuurmeester levert premium haardhout aan huis vanaf €39. Bezorging vanuit Middelbeers binnen 2-4 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Berkel-Enschot?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Berkel-Enschot bedragen €39. Een scherp tarief dankzij de korte afstand tot ons depot.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Berkel-Enschot?",
        answer: "Berkel-Enschot ligt op circa 25 kilometer van ons depot in Middelbeers. De bezorging vindt gemiddeld binnen 2-4 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Berkel-Enschot woon?",
        answer: "Ja, je bent welkom bij ons depot in Middelbeers. Dat is ongeveer 25 minuten rijden. Maak vooraf een afspraak.",
      },
    ],
    nearbyCities: ["tilburg", "oisterwijk", "goirle", "oirschot"],
  },
  {
    slug: "diessen",
    name: "Diessen",
    province: "noord-brabant",
    postcodePrefix: "50",
    samplePostcode: "5087AB",
    distanceFromDepot: 8,
    estimatedDelivery: "2-3 werkdagen",
    tier: 3,
    introduction:
      "Diessen is een van onze allernaaste buren. Op slechts 8 kilometer van ons depot in Middelbeers betaal je voor de bezorging van haardhout het absolute minimumtarief van €20. Postcode 5087 valt namelijk binnen ons lokale depotgebied. In het landelijke Diessen hoort een houtkachel of open haard er gewoon bij. Wij leveren ovengedroogd en halfdroog hardhout van topkwaliteit, los gestort bij je thuis. Als buren van De Vuurmeester profiteer je van de snelste bezorging en de laagste kosten. Bestel vandaag nog.",
    metaTitle: "Haardhout bezorgen in Diessen | Vanaf €20 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Diessen? De Vuurmeester levert premium haardhout aan huis vanaf slechts €20. Slechts 8 km van ons depot, razendsnel bezorgd.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Diessen?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Diessen bedragen slechts €20. Diessen valt binnen ons lokale depotgebied.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Diessen?",
        answer: "Diessen ligt op slechts 8 kilometer van ons depot in Middelbeers. De bezorging vindt vaak al binnen 2-3 werkdagen plaats.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Diessen woon?",
        answer: "Absoluut! Ons depot in Middelbeers is op minder dan 10 minuten rijden vanuit Diessen. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["hilvarenbeek", "oirschot", "bladel", "eersel", "tilburg"],
  },
  {
    slug: "waalwijk",
    name: "Waalwijk",
    province: "noord-brabant",
    postcodePrefix: "51",
    samplePostcode: "5141AB",
    distanceFromDepot: 35,
    estimatedDelivery: "3-5 werkdagen",
    tier: 3,
    introduction:
      "Waalwijk, bekend als schoenenstad in het hart van de Langstraat, wordt regelmatig door De Vuurmeester beleverd met premium haardhout. Op 35 kilometer van ons depot in Middelbeers bezorgen we haardhout voor €40 per kuub. We combineren bezorgingen in de regio tussen Tilburg en Den Bosch voor een efficiënte route. Kies uit ovengedroogd of halfdroog hardhout. Geniet van een knapperend haardvuur. Bestel snel en eenvoudig online.",
    metaTitle: "Haardhout bezorgen in Waalwijk | Vanaf €40 | De Vuurmeester",
    metaDescription:
      "Haardhout bezorgen in Waalwijk? De Vuurmeester levert premium haardhout aan huis vanaf €40. Bezorging vanuit Middelbeers binnen 3-5 werkdagen.",
    faqItems: [
      {
        question: "Wat zijn de bezorgkosten voor haardhout in Waalwijk?",
        answer: "De bezorgkosten voor 1 kuub haardhout naar Waalwijk bedragen €40. Bij meerdere kubiek profiteer je van staffelkortingen.",
      },
      {
        question: "Hoe lang duurt de bezorging naar Waalwijk?",
        answer: "Waalwijk ligt op circa 35 kilometer van ons depot in Middelbeers. De bezorging vindt doorgaans plaats binnen 3-5 werkdagen.",
      },
      {
        question: "Kan ik haardhout ook ophalen als ik in Waalwijk woon?",
        answer: "Ja, ophalen bij ons depot in Middelbeers is mogelijk. Dat is ongeveer 30 minuten rijden. Neem contact op voor een afhaaltijdstip.",
      },
    ],
    nearbyCities: ["tilburg", "dongen", "den-bosch", "vught", "oosterhout"],
  },
];

export function getCityBySlug(slug: string): CityData | undefined {
  return cities.find((c) => c.slug === slug);
}

export function getAllCitySlugs(): string[] {
  return cities.map((c) => c.slug);
}

export function getAllCities(): CityData[] {
  return cities;
}

export function getCitiesByProvince(provinceSlug: string): CityData[] {
  return cities.filter((c) => c.province === provinceSlug);
}

export function getCitiesByTier(tier: 1 | 2 | 3): CityData[] {
  return cities.filter((c) => c.tier === tier);
}
