import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacybeleid",
  description:
    "Privacybeleid van De Vuurmeester Haardhout. Hoe wij omgaan met je persoonsgegevens.",
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/privacybeleid",
  },
  openGraph: {
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Privacybeleid",
      },
    ],
  },
};

export default function PrivacybeleidPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
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
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto prose prose-stone">
          <h1>Privacybeleid</h1>
          <p className="lead">
            De Vuurmeester Haardhout hecht veel waarde aan de bescherming van je
            persoonsgegevens. In dit privacybeleid leggen wij uit welke gegevens
            wij verzamelen, waarom, en hoe wij daar zorgvuldig mee omgaan.
          </p>

          <h2>1. Identiteit van de verwerkingsverantwoordelijke</h2>
          <ul>
            <li>
              <strong>Bedrijfsnaam:</strong> De Vuurmeester Haardhout
            </li>
            <li>
              <strong>Adres:</strong> Industrieweg 5b, 5091BG Middelbeers
            </li>
            <li>
              <strong>Telefoon:</strong> 06 82 09 19 84
            </li>
            <li>
              <strong>E-mail:</strong> contact@vuurmeester-haardhout.nl
            </li>
            <li>
              <strong>KvK-nummer:</strong> 95919082
            </li>
          </ul>

          <h2>2. Welke gegevens verzamelen wij?</h2>
          <p>
            Wij verzamelen uitsluitend gegevens die nodig zijn voor het
            verwerken en bezorgen van je bestelling:
          </p>
          <ul>
            <li>
              <strong>Contactgegevens:</strong> naam, e-mailadres, telefoonnummer
            </li>
            <li>
              <strong>Adresgegevens:</strong> bezorg- en factuuradres
            </li>
            <li>
              <strong>Betalingsgegevens:</strong> betaalmethode en
              transactiestatus (geen bankgegevens)
            </li>
            <li>
              <strong>Bestelgegevens:</strong> producten, hoeveelheden,
              ordernummer
            </li>
          </ul>

          <h2>3. Waarvoor gebruiken wij je gegevens?</h2>
          <ul>
            <li>Het verwerken en uitvoeren van je bestelling</li>
            <li>Het bezorgen van je haardhout op het juiste adres</li>
            <li>Contact opnemen over je bestelling of bezorging</li>
            <li>Het versturen van facturen en bevestigingsmails</li>
            <li>Het voldoen aan wettelijke verplichtingen (boekhouding)</li>
          </ul>

          <h2>4. Delen met derden</h2>
          <p>
            Wij delen je gegevens alleen met derden wanneer dit noodzakelijk is
            voor de uitvoering van je bestelling:
          </p>
          <ul>
            <li>
              <strong>Sande Logistics:</strong> voor de bezorging van je
              bestelling (naam, adres, telefoonnummer)
            </li>
            <li>
              <strong>Mollie:</strong> voor de verwerking van betalingen via
              iDEAL
            </li>
          </ul>
          <p>
            Wij verkopen of verstrekken je gegevens nooit aan derden voor
            marketing- of andere doeleinden.
          </p>

          <h2>5. Bewaartermijn</h2>
          <p>
            Wij bewaren je persoonsgegevens niet langer dan strikt noodzakelijk.
            Bestelgegevens bewaren wij 7 jaar in verband met de wettelijke
            bewaarplicht voor de belastingdienst.
          </p>

          <h2>6. Beveiliging</h2>
          <p>
            Wij nemen passende beveiligingsmaatregelen om misbruik, verlies,
            onbevoegde toegang en ongewenste openbaarmaking tegen te gaan:
          </p>
          <ul>
            <li>Versleutelde verbinding (SSL/TLS) op de gehele website</li>
            <li>Betalingen worden verwerkt via gecertificeerde betaaldienst Mollie</li>
            <li>Toegang tot persoonsgegevens is beperkt tot geautoriseerd personeel</li>
          </ul>

          <h2>7. Cookies</h2>
          <p>
            Onze webshop maakt gebruik van functionele cookies die noodzakelijk
            zijn voor het functioneren van de website (zoals je winkelwagen).
            Daarnaast gebruiken wij Google Analytics om het gebruik van de
            website te analyseren en te verbeteren. Deze gegevens zijn
            geanonimiseerd.
          </p>

          <h2>8. Je rechten</h2>
          <p>
            Op grond van de AVG (GDPR) heb je het recht om:
          </p>
          <ul>
            <li>Je persoonsgegevens in te zien</li>
            <li>Je gegevens te laten corrigeren of verwijderen</li>
            <li>Bezwaar te maken tegen de verwerking van je gegevens</li>
            <li>Je gegevens over te laten dragen (dataportabiliteit)</li>
            <li>Een klacht in te dienen bij de Autoriteit Persoonsgegevens</li>
          </ul>
          <p>
            Je kunt een verzoek indienen via{" "}
            <a href="mailto:contact@vuurmeester-haardhout.nl">
              contact@vuurmeester-haardhout.nl
            </a>{" "}
            of via WhatsApp op 06 82 09 19 84.
          </p>

          <h2>9. Herroepingsrecht</h2>
          <p>
            Als consument heb je het recht om je bestelling binnen 30 dagen na
            ontvangst zonder opgave van reden te annuleren. Het product moet in
            originele staat worden geretourneerd. De kosten voor retourzending
            zijn voor eigen rekening, tenzij anders overeengekomen.
          </p>

          <h2>10. Wijzigingen</h2>
          <p>
            Wij behouden ons het recht voor om dit privacybeleid aan te passen.
            Wijzigingen worden gepubliceerd op deze pagina. Wij raden je aan om
            dit beleid regelmatig te raadplegen.
          </p>

          <h2>11. Contact</h2>
          <p>
            Voor vragen over dit privacybeleid kun je contact opnemen via:
          </p>
          <ul>
            <li>WhatsApp: 06 82 09 19 84</li>
            <li>
              E-mail:{" "}
              <a href="mailto:contact@vuurmeester-haardhout.nl">
                contact@vuurmeester-haardhout.nl
              </a>
            </li>
          </ul>

          <hr />

          <p className="text-sm text-stone-500">
            Laatste update: februari 2026
          </p>
        </div>
      </div>
    </div>
  );
}
