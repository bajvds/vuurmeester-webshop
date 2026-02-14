"use client";

import { Suspense, useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  CreditCard,
  Home,
  Loader2,
  Mail,
  Package,
  Phone,
  ShieldCheck,
  XCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

interface OrderDetails {
  id: number;
  total: string;
  customer: {
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  items: Array<{
    name: string;
    quantity: number;
    total: string;
  }>;
}

type PageStatus = "loading" | "ready" | "error" | "paying" | "already_paid";

function OpnieuwBetalenContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order_id");
  const orderKey = searchParams.get("order_key");
  const [status, setStatus] = useState<PageStatus>("loading");
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [error, setError] = useState<string>("");

  // Fetch order details
  useEffect(() => {
    if (!orderId || !orderKey) {
      setStatus("error");
      setError("Ongeldige link. Neem contact met ons op.");
      return;
    }

    async function fetchOrder() {
      try {
        const res = await fetch(
          `/api/orders/details?order_id=${orderId}&order_key=${orderKey}`
        );
        const data = await res.json();

        if (!res.ok) {
          if (data.status && data.status !== "failed") {
            setStatus("already_paid");
          } else {
            setError(data.error || "Bestelling niet gevonden");
            setStatus("error");
          }
          return;
        }

        setOrder(data);
        setStatus("ready");
      } catch {
        setError("Er is een fout opgetreden. Probeer het later opnieuw.");
        setStatus("error");
      }
    }

    fetchOrder();
  }, [orderId, orderKey]);

  // Handle payment retry
  const handlePay = useCallback(async () => {
    if (!orderId || !orderKey) return;

    setStatus("paying");

    try {
      const res = await fetch("/api/orders/retry-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order_id: orderId, order_key: orderKey }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.error || "Betaling aanmaken mislukt");
        setStatus("error");
        return;
      }

      // Redirect to Mollie
      window.location.href = data.paymentUrl;
    } catch {
      setError("Er is een fout opgetreden. Probeer het later opnieuw.");
      setStatus("error");
    }
  }, [orderId, orderKey]);

  // Loading state
  if (status === "loading") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-stone-100 mb-4">
              <Loader2 className="h-12 w-12 text-stone-400 animate-spin" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Bestelling ophalen...
            </h1>
          </div>
        </div>
      </div>
    );
  }

  // Already paid state
  if (status === "already_paid") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-green-100 mb-4">
              <ShieldCheck className="h-12 w-12 text-green-600" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Deze bestelling is al betaald
            </h1>
            <p className="text-lg text-stone-600 mb-8">
              Goed nieuws! De betaling voor deze bestelling is al verwerkt.
              Je ontvangt een bevestiging per e-mail.
            </p>
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

  // Error state
  if (status === "error") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-red-100 mb-4">
              <XCircle className="h-12 w-12 text-red-600" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Er ging iets mis
            </h1>
            <p className="text-lg text-stone-600 mb-8">{error}</p>
            <div className="bg-stone-100 rounded-xl p-6 mb-8">
              <h3 className="font-medium text-stone-900 mb-3">
                Hulp nodig?
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

  // Paying state (redirecting to Mollie)
  if (status === "paying") {
    return (
      <div className="min-h-screen bg-stone-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 mb-4">
              <Loader2 className="h-12 w-12 text-orange-500 animate-spin" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-4">
              Doorsturen naar betaling...
            </h1>
            <p className="text-lg text-stone-600">
              Je wordt doorgestuurd naar iDEAL.
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Ready state - show order summary and pay button
  return (
    <div className="min-h-screen bg-stone-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-orange-100 mb-4">
              <Package className="h-12 w-12 text-orange-500" />
            </div>
            <h1 className="text-3xl font-bold text-stone-900 mb-2">
              Je bestelling staat nog klaar
            </h1>
            <p className="text-lg text-stone-600">
              De betaling voor je eerdere bestelling is niet afgerond.
              Je kunt hieronder direct betalen zonder opnieuw te bestellen.
            </p>
          </div>

          {/* Order summary */}
          {order && (
            <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
              <h2 className="text-lg font-semibold text-stone-900 mb-4">
                Bestelling #{order.id}
              </h2>

              {order.customer && (
                <p className="text-sm text-stone-500 mb-4">
                  {order.customer.firstName} {order.customer.lastName}
                </p>
              )}

              <div className="divide-y divide-stone-100">
                {order.items.map((item, i) => (
                  <div key={i} className="flex justify-between py-3">
                    <div>
                      <p className="font-medium text-stone-900">{item.name}</p>
                      <p className="text-sm text-stone-500">
                        Aantal: {item.quantity}
                      </p>
                    </div>
                    <p className="font-medium text-stone-900">
                      &euro; {parseFloat(item.total).toFixed(2).replace(".", ",")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-stone-200 mt-2 pt-4 flex justify-between">
                <p className="text-lg font-bold text-stone-900">Totaal</p>
                <p className="text-lg font-bold text-stone-900">
                  &euro; {parseFloat(order.total).toFixed(2).replace(".", ",")}
                </p>
              </div>
            </div>
          )}

          {/* Pay button */}
          <div className="text-center mb-8">
            <Button
              onClick={handlePay}
              size="lg"
              className="bg-orange-500 hover:bg-orange-600 text-lg px-8 py-6 w-full sm:w-auto"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Nu betalen met iDEAL
            </Button>
            <p className="text-sm text-stone-500 mt-3 flex items-center justify-center gap-1">
              <ShieldCheck className="h-4 w-4" />
              Veilig betalen via Mollie
            </p>
          </div>

          {/* Contact */}
          <div className="bg-stone-100 rounded-xl p-6 text-center">
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
        </div>
      </div>
    </div>
  );
}

export default function OpnieuwBetalenPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-stone-50 py-12">
          <div className="container mx-auto px-4">
            <div className="animate-pulse max-w-2xl mx-auto">
              <div className="h-24 w-24 bg-stone-200 rounded-full mx-auto mb-8" />
              <div className="h-8 bg-stone-200 rounded w-64 mx-auto mb-4" />
              <div className="h-4 bg-stone-200 rounded w-96 mx-auto" />
            </div>
          </div>
        </div>
      }
    >
      <OpnieuwBetalenContent />
    </Suspense>
  );
}
