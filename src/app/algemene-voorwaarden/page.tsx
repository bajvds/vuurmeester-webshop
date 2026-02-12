import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden",
  description: "Algemene voorwaarden van De Vuurmeester voor de verkoop en levering van haardhout.",
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/algemene-voorwaarden",
  },
  openGraph: {
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Algemene Voorwaarden",
      },
    ],
  },
};

export default function AlgemeneVoorwaardenPage() {
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
          <h1>Algemene Voorwaarden</h1>
          <p className="lead">
            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
            bestellingen en overeenkomsten van De Vuurmeester.
          </p>

          <h2>Artikel 1 - Definities</h2>
          <p>In deze voorwaarden wordt verstaan onder:</p>
          <ul>
            <li><strong>De Vuurmeester:</strong> de verkoper van haardhout, gevestigd te Middelbeers.</li>
            <li><strong>Klant:</strong> de natuurlijke persoon of rechtspersoon die een bestelling plaatst.</li>
            <li><strong>Overeenkomst:</strong> de koopovereenkomst tussen De Vuurmeester en de Klant.</li>
          </ul>

          <h2>Artikel 2 - Toepasselijkheid</h2>
          <p>
            Deze algemene voorwaarden zijn van toepassing op elk aanbod van De Vuurmeester
            en op elke tot stand gekomen overeenkomst tussen De Vuurmeester en de Klant.
          </p>

          <h2>Artikel 3 - Aanbod en Prijzen</h2>
          <ul>
            <li>Alle prijzen zijn inclusief BTW, tenzij anders vermeld.</li>
            <li>Bezorgkosten worden apart berekend op basis van postcode en hoeveelheid.</li>
            <li>Kennelijke fouten in prijzen binden De Vuurmeester niet.</li>
          </ul>

          <h2>Artikel 4 - Bestellen</h2>
          <p>
            Een bestelling kan worden geplaatst via de webshop of via WhatsApp.
            Na ontvangst van de bestelling ontvangt de Klant een bevestiging.
          </p>

          <h2>Artikel 5 - Betaling</h2>
          <ul>
            <li>Betaling geschiedt via iDEAL, bankoverschrijving of contant bij levering.</li>
            <li>Bij vooruitbetaling wordt het hout pas geleverd na ontvangst van de betaling.</li>
            <li>Bij contante betaling dient het exacte bedrag te worden voldaan.</li>
          </ul>

          <h2>Artikel 6 - Levering</h2>
          <ul>
            <li>Levering vindt plaats op het door de Klant opgegeven adres.</li>
            <li>De levertijd bedraagt gemiddeld 5-10 werkdagen na bestelling.</li>
            <li>De exacte leverdatum wordt in overleg met de Klant bepaald.</li>
            <li>Het hout wordt afgeleverd op een bereikbare plek (oprit, tuin).</li>
            <li>De Vuurmeester is niet verplicht het hout te verplaatsen na aflevering.</li>
          </ul>

          <h2>Artikel 7 - Kwaliteit</h2>
          <p>
            De Vuurmeester garandeert dat het geleverde haardhout voldoet aan de
            beschrijving op de website. Bij ovengedroogd hout ligt het vochtpercentage
            onder de 18%. Bij halfdroog hout tussen de 20-35%.
          </p>

          <h2>Artikel 8 - Klachten</h2>
          <p>
            Klachten over de levering dienen binnen 48 uur na ontvangst te worden gemeld
            via WhatsApp of e-mail. De Vuurmeester zal de klacht in behandeling nemen
            en indien gegrond een passende oplossing bieden.
          </p>

          <h2>Artikel 9 - Aansprakelijkheid</h2>
          <p>
            De aansprakelijkheid van De Vuurmeester is beperkt tot het bedrag van de
            bestelling. De Vuurmeester is niet aansprakelijk voor gevolgschade.
          </p>

          <h2>Artikel 10 - Privacy</h2>
          <p>
            Persoonsgegevens worden uitsluitend gebruikt voor de uitvoering van de
            overeenkomst en worden niet aan derden verstrekt, tenzij noodzakelijk
            voor de levering (bijv. aan de transporteur).
          </p>

          <h2>Artikel 11 - Contact</h2>
          <p>Voor vragen over deze voorwaarden kunt u contact opnemen via:</p>
          <ul>
            <li>WhatsApp: 06 82 09 19 84</li>
            <li>E-mail: contact@vuurmeester-haardhout.nl</li>
          </ul>

          <hr />

          <p className="text-sm text-stone-500">
            Laatste update: januari 2025
          </p>
        </div>
      </div>
    </div>
  );
}
