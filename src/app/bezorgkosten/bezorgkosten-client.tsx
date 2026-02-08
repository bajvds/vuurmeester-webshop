"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowLeft, Truck, MapPin, MessageCircle, Calculator, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { calculateShipping, FIXED_RATE_POSTCODES } from "@/lib/shipping";
import { trackShippingCalculator } from "@/lib/analytics";

// Prices based on actual WooCommerce rates (for 1 m³)
const regions = [
  { name: "Noord-Brabant (depot)", range: "50-57", price: "€39 - €45", color: "bg-green-100 text-green-800" },
  { name: "Noord-Brabant (rand)", range: "58-59", price: "€64 - €65", color: "bg-green-200 text-green-900" },
  { name: "Limburg", range: "60-69", price: "€58 - €69", color: "bg-yellow-100 text-yellow-800" },
  { name: "Gelderland (west)", range: "40-42, 46-49", price: "€45 - €64", color: "bg-yellow-100 text-yellow-800" },
  { name: "Gelderland (oost)", range: "70-73", price: "€64", color: "bg-yellow-100 text-yellow-800" },
  { name: "Zuid-Holland", range: "23-33", price: "€64", color: "bg-yellow-100 text-yellow-800" },
  { name: "Noord-Holland", range: "10-22", price: "€69 - €80", color: "bg-orange-100 text-orange-800" },
  { name: "Utrecht", range: "34-39", price: "€64", color: "bg-yellow-100 text-yellow-800" },
  { name: "Overijssel", range: "74-79", price: "€85 - €89", color: "bg-orange-100 text-orange-800" },
  { name: "Flevoland", range: "80-83", price: "€70 - €89", color: "bg-orange-100 text-orange-800" },
  { name: "Flevoland (45xx)", range: "45", price: "€120", color: "bg-red-100 text-red-800" },
  { name: "Friesland", range: "84-89", price: "€89", color: "bg-red-100 text-red-800" },
  { name: "Groningen / Drenthe", range: "90-99", price: "€89", color: "bg-red-100 text-red-800" },
  { name: "Zeeland", range: "43-44", price: "€89", color: "bg-red-100 text-red-800" },
];

export default function BezorgkostenClient() {
  const [postcode, setPostcode] = useState("");
  const [cubicMeters, setCubicMeters] = useState(1);
  const [result, setResult] = useState<number | null>(null);
  const lastTrackedPostcode = useRef("");

  useEffect(() => {
    if (postcode.length >= 4) {
      const cost = calculateShipping(postcode, cubicMeters);
      setResult(cost);
      // Track once per postcode prefix (avoid spamming on every keystroke)
      const prefix = postcode.substring(0, 4);
      if (prefix !== lastTrackedPostcode.current) {
        lastTrackedPostcode.current = prefix;
        trackShippingCalculator({ postcode, cubicMeters, shippingCost: cost, source: "calculator_page" });
      }
    } else {
      setResult(null);
    }
  }, [postcode, cubicMeters]);

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

      {/* Hero */}
      <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <Truck className="h-16 w-16 mx-auto mb-4 opacity-90" />
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Bezorgkosten Calculator
          </h1>
          <p className="text-lg text-orange-100 max-w-2xl mx-auto">
            Wij bezorgen door heel Nederland! Bereken direct je bezorgkosten op basis van je postcode.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div className="container mx-auto px-4 -mt-8">
        <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 max-w-2xl mx-auto">
          <div className="flex items-center gap-2 mb-6">
            <Calculator className="h-5 w-5 text-orange-500" />
            <h2 className="text-lg font-semibold text-stone-900">
              Bereken je bezorgkosten
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Postcode
              </label>
              <Input
                type="text"
                placeholder="bijv. 5091AB"
                value={postcode}
                onChange={(e) =>
                  setPostcode(e.target.value.replace(/\s/g, "").toUpperCase())
                }
                maxLength={6}
                className="text-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-stone-700 mb-2">
                Aantal m³
              </label>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCubicMeters(Math.max(1, cubicMeters - 1))}
                  disabled={cubicMeters <= 1}
                >
                  -
                </Button>
                <Input
                  type="number"
                  min="1"
                  max="20"
                  value={cubicMeters}
                  onChange={(e) => setCubicMeters(Math.max(1, parseInt(e.target.value) || 1))}
                  className="text-center text-lg w-20"
                />
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setCubicMeters(cubicMeters + 1)}
                >
                  +
                </Button>
              </div>
            </div>
          </div>

          {/* Result */}
          {result !== null ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-6 text-center">
              <Check className="h-8 w-8 text-green-500 mx-auto mb-2" />
              <p className="text-sm text-green-700 mb-1">
                Geschatte bezorgkosten voor {cubicMeters} m³:
              </p>
              <p className="text-4xl font-bold text-green-700">
                €{result},-
              </p>
              {result === 20 && (
                <p className="text-sm text-green-600 mt-2">
                  Je valt binnen ons vaste tarief gebied!
                </p>
              )}
            </div>
          ) : postcode.length >= 4 ? (
            <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 text-center">
              <MessageCircle className="h-8 w-8 text-orange-500 mx-auto mb-2" />
              <p className="text-orange-700 mb-3">
                Voor deze postcode hebben we geen standaard tarief.
                Neem contact met ons op voor een offerte.
              </p>
              <Button asChild className="bg-green-500 hover:bg-green-600">
                <a
                  href="https://wa.me/31682091984?text=Hoi!%20Ik%20wil%20graag%20de%20bezorgkosten%20weten%20voor%20postcode%20"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp voor offerte
                </a>
              </Button>
            </div>
          ) : (
            <div className="bg-stone-50 rounded-xl p-6 text-center text-stone-500">
              Voer je postcode in om de bezorgkosten te berekenen
            </div>
          )}
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Fixed Rate Areas */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-4 flex items-center gap-2">
              <MapPin className="h-6 w-6 text-orange-500" />
              Vaste tarief gebieden - €20,-
            </h2>
            <p className="text-stone-600 mb-4">
              Woon je in de directe omgeving van ons depot in Middelbeers?
              Dan betaal je slechts €20,- bezorgkosten, ongeacht het aantal m³!
            </p>
            <div className="bg-green-50 rounded-xl p-4">
              <p className="text-sm text-green-800 font-medium mb-2">
                Postcodes met vast tarief:
              </p>
              <p className="text-sm text-green-700">
                {FIXED_RATE_POSTCODES.join(", ")}
              </p>
            </div>
          </div>

          {/* Regional Pricing */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-stone-900 mb-4">
              Tarieven per regio
            </h2>
            <p className="text-stone-600 mb-6">
              Onderstaande prijzen zijn richtprijzen voor 1 m³.
              Bij grotere bestellingen stijgen de kosten minder snel.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {regions.map((region) => (
                <div
                  key={region.name}
                  className="bg-white border rounded-lg p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-stone-900">{region.name}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${region.color}`}>
                      {region.range}
                    </span>
                  </div>
                  <p className="text-lg font-bold text-orange-600">{region.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Delivery Info */}
          <div className="bg-stone-50 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-6">
              Hoe werkt de bezorging?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  📅 Levertijd
                </h3>
                <p className="text-stone-600 text-sm">
                  Bestellingen worden binnen 5-10 werkdagen geleverd.
                  Datum en tijd stemmen we vooraf met je af.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  🚚 Transport
                </h3>
                <p className="text-stone-600 text-sm">
                  Bezorging via Sande Logistics. We leveren het hout
                  op de door jou aangegeven plek (mits bereikbaar).
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  📍 Afleverplek
                </h3>
                <p className="text-stone-600 text-sm">
                  Op je oprit, in de tuin of bij de schuur.
                  Niet door smalle doorgangen of trappen.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-stone-900 mb-2">
                  💬 Contact
                </h3>
                <p className="text-stone-600 text-sm">
                  Vragen over bezorging? App ons via WhatsApp
                  voor een persoonlijke reactie.
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <p className="text-stone-600 mb-4">
              Wil je een exacte offerte of heb je vragen over de bezorging?
            </p>
            <Button asChild size="lg" className="bg-green-500 hover:bg-green-600">
              <a
                href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20de%20bezorgkosten."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp ons
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
