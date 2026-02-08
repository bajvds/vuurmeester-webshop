"use client";

import { Suspense } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { XCircle, RefreshCw, Phone, Mail, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";

function BestellingMisluktContent() {
  const searchParams = useSearchParams();
  const orderKey = searchParams.get("order_key");

  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Failed Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-4">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Betaling niet gelukt
          </h1>

          <p className="text-lg text-stone-600 mb-8">
            Helaas is je betaling niet gelukt. Je bestelling is nog niet
            afgerond. Probeer het opnieuw of neem contact met ons op.
          </p>

          {/* Order Reference */}
          {orderKey && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <p className="text-sm text-stone-500 mb-1">Orderreferentie</p>
              <p className="text-lg font-mono font-medium text-stone-900">
                {orderKey}
              </p>
            </div>
          )}

          {/* What You Can Do */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8 text-left">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Wat kun je doen?
            </h2>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <RefreshCw className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">Probeer opnieuw</p>
                  <p className="text-sm text-stone-600">
                    Je winkelwagen is nog intact. Ga terug naar de checkout en
                    probeer het opnieuw met dezelfde of een andere betaalmethode.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">Bel ons</p>
                  <p className="text-sm text-stone-600">
                    Heb je hulp nodig of wil je telefonisch bestellen? Bel ons
                    op 06 82 09 19 84.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-stone-900">Stuur een e-mail</p>
                  <p className="text-sm text-stone-600">
                    Stuur ons een bericht via contact@vuurmeester-haardhout.nl en we
                    helpen je verder.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* Common Reasons */}
          <div className="bg-stone-100 rounded-xl p-6 mb-8 text-left">
            <h3 className="font-medium text-stone-900 mb-3">
              Mogelijke oorzaken
            </h3>
            <ul className="text-sm text-stone-600 space-y-2">
              <li>• De betaling is geannuleerd in de banking app</li>
              <li>• Er is een technisch probleem bij je bank</li>
              <li>• De sessie is verlopen</li>
              <li>• Onvoldoende saldo op je rekening</li>
            </ul>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/afrekenen">
                <ShoppingCart className="h-4 w-4 mr-2" />
                Terug naar afrekenen
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/">Terug naar de homepage</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BestellingMisluktPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 py-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse max-w-2xl mx-auto">
              <div className="h-24 w-24 bg-stone-200 rounded-full mx-auto mb-8"></div>
              <div className="h-8 bg-stone-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-stone-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </div>
      }
    >
      <BestellingMisluktContent />
    </Suspense>
  );
}
