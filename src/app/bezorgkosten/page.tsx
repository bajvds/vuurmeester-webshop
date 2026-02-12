import { Metadata } from "next";
import BezorgkostenClient from "./bezorgkosten-client";

export const metadata: Metadata = {
  title: "Bezorgkosten berekenen",
  description:
    "Bereken direct je bezorgkosten voor haardhout. Vaste tarieven per regio, bezorging door heel Nederland. Vanaf €20 in de buurt van ons depot.",
  alternates: {
    canonical: "https://www.vuurmeester-haardhout.nl/bezorgkosten",
  },
  openGraph: {
    title: "Bezorgkosten berekenen | De Vuurmeester",
    description:
      "Bereken direct je bezorgkosten voor haardhout. Bezorging door heel Nederland.",
  },
};

export default function BezorgkostenPage() {
  return <BezorgkostenClient />;
}
