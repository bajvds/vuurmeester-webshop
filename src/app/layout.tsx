import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
  metadataBase: new URL("https://vuurmeester.shop"),
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
    url: "https://vuurmeester.shop",
    siteName: "De Vuurmeester",
    title: "De Vuurmeester | Premium Haardhout - Goedkoopste van Nederland",
    description:
      "Premium haardhout voor de scherpste prijs. Geleverd door heel Nederland.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
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
      <body className={`${inter.variable} font-sans antialiased bg-white`}>
        <Header />
        {children}
        <Footer />
        <CartDrawer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
