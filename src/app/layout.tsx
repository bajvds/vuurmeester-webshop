import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CartDrawer } from "@/components/cart/cart-drawer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { RouteChangeTracker } from "@/components/route-change-tracker";

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
              email: "contact@vuurmeester-haardhout.nl",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              url: "https://www.vuurmeester-haardhout.nl",
              name: "De Vuurmeester",
              potentialAction: {
                "@type": "SearchAction",
                target: {
                  "@type": "EntryPoint",
                  urlTemplate:
                    "https://www.vuurmeester-haardhout.nl/?q={search_term_string}",
                },
                "query-input": "required name=search_term_string",
              },
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
        <Suspense fallback={null}>
          <RouteChangeTracker />
        </Suspense>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
        {process.env.NEXT_PUBLIC_GOOGLE_ADS_ID && (
          <Script id="google-ads-config" strategy="afterInteractive">
            {`gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}');`}
          </Script>
        )}
        {process.env.NEXT_PUBLIC_META_PIXEL_ID && (
          <>
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${process.env.NEXT_PUBLIC_META_PIXEL_ID}');
fbq('track', 'PageView');`}
            </Script>
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: "none" }}
                src={`https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_META_PIXEL_ID}&ev=PageView&noscript=1`}
                alt=""
              />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
