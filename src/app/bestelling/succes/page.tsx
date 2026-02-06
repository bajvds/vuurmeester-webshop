"use client";

import { Suspense, useEffect, useRef } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { CheckCircle, Home, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/store/cart";

// Extend window type for gtag
declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

function BestellingSuccesContent() {
  const searchParams = useSearchParams();
  const orderKey = searchParams.get("order_key");
  const orderId = searchParams.get("order_id");
  const orderTotal = searchParams.get("total");
  const itemCount = searchParams.get("items");
  const { clearCart } = useCart();
  const conversionTracked = useRef(false);

  // Clear cart on successful order (in case it wasn't already cleared)
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  // Track purchase conversion for GA4 / Google Ads
  useEffect(() => {
    // Only track once per page load
    if (conversionTracked.current) return;
    if (!orderId || !orderTotal) return;

    const value = parseFloat(orderTotal);
    if (isNaN(value)) return;

    // Mark as tracked to prevent duplicate events
    conversionTracked.current = true;

    // Fire GA4 purchase event (Google Ads can import this)
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "purchase", {
        transaction_id: orderId,
        value: value,
        currency: "EUR",
        items: [
          {
            item_id: "haardhout",
            item_name: "Haardhout bestelling",
            quantity: parseInt(itemCount || "1"),
            price: value,
          },
        ],
      });
      console.log("GA4 purchase event tracked:", { orderId, value });
    }
  }, [orderId, orderTotal, itemCount]);

  return (
    <main className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-stone-900 mb-4">
            Bedankt voor je bestelling!
          </h1>

          <p className="text-lg text-stone-600 mb-8">
            Je bestelling is succesvol geplaatst. We hebben een bevestiging
            naar je e-mailadres gestuurd.
          </p>

          {/* Order Reference */}
          {(orderKey || orderId) && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
              <p className="text-sm text-stone-500 mb-1">Ordernummer</p>
              <p className="text-lg font-mono font-medium text-stone-900">
                #{orderId || orderKey}
              </p>
            </div>
          )}

          {/* What's Next */}
          <div className="bg-white rounded-xl p-6 shadow-sm mb-8 text-left">
            <h2 className="text-lg font-semibold text-stone-900 mb-4">
              Wat gebeurt er nu?
            </h2>
            <ol className="space-y-4">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-medium">
                  1
                </span>
                <div>
                  <p className="font-medium text-stone-900">Bevestigingsmail</p>
                  <p className="text-sm text-stone-600">
                    Je ontvangt binnen enkele minuten een bevestiging per e-mail
                    met alle details van je bestelling.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-medium">
                  2
                </span>
                <div>
                  <p className="font-medium text-stone-900">Bezorgafspraak</p>
                  <p className="text-sm text-stone-600">
                    Wij nemen contact met je op om een bezorgmoment af te
                    spreken dat jou uitkomt.
                  </p>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center text-sm font-medium">
                  3
                </span>
                <div>
                  <p className="font-medium text-stone-900">Bezorging</p>
                  <p className="text-sm text-stone-600">
                    Wij bezorgen het haardhout tot aan je deur. De chauffeur
                    belt je vlak voordat hij arriveert.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Contact Info */}
          <div className="bg-stone-100 rounded-xl p-6 mb-8">
            <h3 className="font-medium text-stone-900 mb-3">
              Vragen over je bestelling?
            </h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:info@devuurmeester.nl"
                className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                info@devuurmeester.nl
              </a>
              <a
                href="tel:+31612345678"
                className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                06 - 12345678
              </a>
            </div>
          </div>

          {/* Back to Home */}
          <Button asChild className="bg-orange-500 hover:bg-orange-600">
            <Link href="/">
              <Home className="h-4 w-4 mr-2" />
              Terug naar de homepage
            </Link>
          </Button>
        </div>
      </div>
    </main>
  );
}

export default function BestellingSuccesPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-stone-50 py-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse max-w-2xl mx-auto">
              <div className="h-24 w-24 bg-stone-200 rounded-full mx-auto mb-8"></div>
              <div className="h-8 bg-stone-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-stone-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
        </main>
      }
    >
      <BestellingSuccesContent />
    </Suspense>
  );
}
