"use client";

import { Suspense, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CheckCircle,
  Home,
  Mail,
  Phone,
  XCircle,
  RefreshCw,
  ShoppingCart,
  Loader2,
} from "lucide-react";
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

type PaymentStatus = "loading" | "success" | "failed" | "pending";

function BestellingSuccesContent() {
  const searchParams = useSearchParams();
  const orderKey = searchParams.get("order_key");
  const orderId = searchParams.get("order_id");
  const orderTotal = searchParams.get("total");
  const itemCount = searchParams.get("items");
  const { clearCart } = useCart();
  const conversionTracked = useRef(false);
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("loading");
  const pollCount = useRef(0);

  // Check order status via API
  useEffect(() => {
    if (!orderId || !orderKey) {
      setPaymentStatus("failed");
      return;
    }

    let cancelled = false;

    async function checkStatus() {
      try {
        const res = await fetch(
          `/api/orders/status?order_id=${orderId}&order_key=${orderKey}`
        );
        if (!res.ok) {
          setPaymentStatus("failed");
          return;
        }

        const data = await res.json();
        const status = data.status as string;

        if (cancelled) return;

        if (status === "processing" || status === "completed" || status === "on-hold") {
          setPaymentStatus("success");
        } else if (status === "failed" || status === "cancelled" || status === "refunded") {
          setPaymentStatus("failed");
        } else if (status === "pending") {
          // Payment might still be processing (webhook not arrived yet)
          // Poll a few times with increasing delay
          pollCount.current++;
          if (pollCount.current <= 5) {
            setTimeout(() => {
              if (!cancelled) checkStatus();
            }, pollCount.current * 1500);
          } else {
            // After ~22.5s of polling, still pending — show pending state
            setPaymentStatus("pending");
          }
        } else {
          setPaymentStatus("failed");
        }
      } catch {
        if (!cancelled) setPaymentStatus("failed");
      }
    }

    checkStatus();

    return () => {
      cancelled = true;
    };
  }, [orderId, orderKey]);

  // Clear cart on successful payment
  useEffect(() => {
    if (paymentStatus === "success") {
      clearCart();
    }
  }, [paymentStatus, clearCart]);

  // Track purchase conversion only on success
  useEffect(() => {
    if (paymentStatus !== "success") return;
    if (conversionTracked.current) return;
    if (!orderId || !orderTotal) return;

    const value = parseFloat(orderTotal);
    if (isNaN(value)) return;

    conversionTracked.current = true;

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

      const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID;
      const conversionLabel = process.env.NEXT_PUBLIC_GOOGLE_ADS_CONVERSION_LABEL;
      if (adsId && conversionLabel) {
        window.gtag("event", "conversion", {
          send_to: `${adsId}/${conversionLabel}`,
          value: value,
          currency: "EUR",
          transaction_id: orderId,
        });
      }
    }
  }, [paymentStatus, orderId, orderTotal, itemCount]);

  // Loading state
  if (paymentStatus === "loading") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-stone-100 mb-4">
                <Loader2 className="h-12 w-12 text-stone-400 animate-spin" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Betaling verifiëren...
            </h1>
            <p className="text-lg text-stone-600">
              Even geduld, we controleren je betaling.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Failed state
  if (paymentStatus === "failed") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-4">
                <XCircle className="h-12 w-12 text-red-600" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Betaling niet gelukt
            </h1>

            <p className="text-lg text-stone-600 mb-8">
              Helaas is je betaling niet gelukt. Je bestelling is nog niet
              afgerond. Probeer het opnieuw of neem contact met ons op.
            </p>

            {orderId && (
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <p className="text-sm text-stone-500 mb-1">Ordernummer</p>
                <p className="text-lg font-mono font-medium text-stone-900">
                  #{orderId}
                </p>
              </div>
            )}

            <div className="bg-white rounded-xl p-6 shadow-sm mb-8 text-left">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Wat kun je doen?
              </h2>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <RefreshCw className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      Probeer opnieuw
                    </p>
                    <p className="text-sm text-stone-600">
                      Ga terug en probeer het opnieuw met dezelfde of een
                      andere betaalmethode.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">Bel ons</p>
                    <p className="text-sm text-stone-600">
                      Heb je hulp nodig? Bel ons op 06 82 09 19 84.
                    </p>
                  </div>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-stone-900">
                      Stuur een e-mail
                    </p>
                    <p className="text-sm text-stone-600">
                      Stuur ons een bericht via contact@vuurmeester-haardhout.nl en we
                      helpen je verder.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

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

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/">
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Opnieuw bestellen
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

  // Pending state (webhook hasn't arrived yet after polling)
  if (paymentStatus === "pending") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 mb-4">
                <Loader2 className="h-12 w-12 text-orange-500" />
              </div>
            </div>

            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Betaling wordt verwerkt
            </h1>

            <p className="text-lg text-stone-600 mb-8">
              We wachten nog op de bevestiging van je bank. Dit kan een paar
              minuten duren. Je ontvangt een e-mail zodra de betaling is
              verwerkt.
            </p>

            {orderId && (
              <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
                <p className="text-sm text-stone-500 mb-1">Ordernummer</p>
                <p className="text-lg font-mono font-medium text-stone-900">
                  #{orderId}
                </p>
              </div>
            )}

            <div className="bg-stone-100 rounded-xl p-6 mb-8">
              <h3 className="font-medium text-stone-900 mb-3">
                Vragen over je bestelling?
              </h3>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:contact@vuurmeester-haardhout.nl"
                  className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  contact@vuurmeester-haardhout.nl
                </a>
                <a
                  href="tel:+31682091984"
                  className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
                >
                  <Phone className="h-4 w-4" />
                  06 82 09 19 84
                </a>
              </div>
            </div>

            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/">
                <Home className="h-4 w-4 mr-2" />
                Terug naar de homepage
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  // Success state
  return (
    <div className="min-h-screen bg-stone-50 py-12">
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
                href="mailto:contact@vuurmeester-haardhout.nl"
                className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Mail className="h-4 w-4" />
                contact@vuurmeester-haardhout.nl
              </a>
              <a
                href="tel:+31682091984"
                className="inline-flex items-center justify-center gap-2 text-stone-600 hover:text-orange-600 transition-colors"
              >
                <Phone className="h-4 w-4" />
                06 82 09 19 84
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
    </div>
  );
}

export default function BestellingSuccesPage() {
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
      <BestellingSuccesContent />
    </Suspense>
  );
}
