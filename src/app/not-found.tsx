import Link from "next/link";
import { Search, ArrowRight, MessageCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-lg mx-auto text-center">
          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Search className="h-8 w-8 text-orange-500" />
          </div>

          <h1 className="text-3xl font-bold text-stone-900 mb-3">
            Pagina niet gevonden
          </h1>
          <p className="text-stone-600 mb-8">
            Deze pagina bestaat niet of is verplaatst. Geen zorgen — hieronder
            vind je snel wat je zoekt.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Bekijk ons haardhout
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/bezorgkosten"
              className="inline-flex items-center justify-center gap-2 border border-stone-300 hover:border-stone-400 text-stone-700 font-medium px-6 py-3 rounded-lg transition-colors"
            >
              Bezorgkosten berekenen
            </Link>
          </div>

          <div className="pt-6 border-t border-stone-200">
            <p className="text-sm text-stone-500 mb-3">
              Kun je niet vinden wat je zoekt?
            </p>
            <a
              href="https://wa.me/31682091984?text=Hoi!%20Ik%20kan%20een%20pagina%20niet%20vinden%20op%20jullie%20website."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 hover:text-green-700 font-medium text-sm"
            >
              <MessageCircle className="h-4 w-4" />
              Stuur ons een WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
