import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.vuurmeester-haardhout.nl"),
  title: {
    default: "De Vuurmeester | Premium Haardhout - Goedkoopste van Nederland",
    template: "%s | De Vuurmeester",
  },
  description:
    "Premium haardhout voor de scherpste prijs. Ovengedroogd en halfdroog haardhout, geleverd door heel Nederland. Persoonlijk contact gegarandeerd.",
  keywords: [
    "haardhout",
    "haardhout kopen",
    "ovengedroogd haardhout",
    "halfdroog haardhout",
    "haardhout bezorgen",
    "goedkoop haardhout",
    "haardhout nederland",
    "brandhout",
    "openhaardhout",
  ],
  authors: [{ name: "De Vuurmeester" }],
  openGraph: {
    type: "website",
    locale: "nl_NL",
    url: "https://www.vuurmeester-haardhout.nl",
    siteName: "De Vuurmeester",
    title: "De Vuurmeester | Premium Haardhout - Goedkoopste van Nederland",
    description:
      "Premium haardhout voor de scherpste prijs. Geleverd door heel Nederland.",
    images: [
      {
        url: "/images/hero-header.jpg",
        width: 6000,
        height: 2500,
        alt: "De Vuurmeester - Premium Haardhout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "De Vuurmeester | Premium Haardhout",
    description: "Premium haardhout voor de scherpste prijs.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "De Vuurmeester",
              description:
                "Premium haardhout voor de scherpste prijs. Ovengedroogd en halfdroog haardhout, geleverd door heel Nederland.",
              url: "https://www.vuurmeester-haardhout.nl",
              telephone: "+31682091984",
              email: "contact@vuurmeester.shop",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Oirschot",
                addressRegion: "Noord-Brabant",
                addressCountry: "NL",
              },
              areaServed: {
                "@type": "Country",
                name: "Netherlands",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.9",
                reviewCount: "62",
                bestRating: "5",
              },
              priceRange: "€€",
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-orange-500 focus:text-white"
        >
          Ga naar hoofdinhoud
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </body>
      {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
      )}
      {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
        <Script id="google-ads-config" strategy="afterInteractive">
          {`gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');`}
        </Script>
      )}
    </html>
  );
}
