import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image
                src="/images/Logo_De_Vuurmeester_wit_oranje_300.png"
                alt="De Vuurmeester"
                width={160}
                height={45}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-sm text-stone-400 mb-4">
              Premium haardhout voor de scherpste prijs.
              Geleverd door heel Nederland.
            </p>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-yellow-400">★★★★★</span>
              <span>65+ reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-white mb-4">Producten</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#haardhout" className="hover:text-orange-400 transition-colors">
                  Haardhout
                </Link>
              </li>
              <li>
                <Link href="/#aanmaak" className="hover:text-orange-400 transition-colors">
                  Aanmaakproducten
                </Link>
              </li>
              <li>
                <Link href="/bezorgkosten" className="hover:text-orange-400 transition-colors">
                  Bezorgkosten berekenen
                </Link>
              </li>
            </ul>
          </div>

          {/* Info */}
          <div>
            <h3 className="font-semibold text-white mb-4">Informatie</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/bezorgkosten" className="hover:text-orange-400 transition-colors">
                  Bezorgkosten
                </Link>
              </li>
              <li>
                <Link href="/veelgestelde-vragen" className="hover:text-orange-400 transition-colors">
                  Veelgestelde vragen
                </Link>
              </li>
              <li>
                <Link href="/over-ons" className="hover:text-orange-400 transition-colors">
                  Over De Vuurmeester
                </Link>
              </li>
              <li>
                <Link href="/algemene-voorwaarden" className="hover:text-orange-400 transition-colors">
                  Algemene voorwaarden
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <MessageCircle className="h-4 w-4 text-green-400" />
                <a
                  href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20een%20vraag%20over%20haardhout."
                  className="hover:text-green-400 transition-colors"
                >
                  WhatsApp ons
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-orange-400" />
                <a href="tel:+31682091984" className="hover:text-orange-400 transition-colors">
                  06 82 09 19 84
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-orange-400" />
                <a href="mailto:contact@vuurmeester.shop" className="hover:text-orange-400 transition-colors">
                  contact@vuurmeester.shop
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-orange-400 mt-0.5" />
                <span>
                  Middelbeers, Noord-Brabant
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>© {new Date().getFullYear()} De Vuurmeester. Alle rechten voorbehouden.</p>
          <div className="flex items-center gap-4">
            <span>Betaalmethodes:</span>
            <div className="flex gap-2">
              <span className="bg-stone-800 px-2 py-1 rounded text-xs">iDEAL</span>
              <span className="bg-stone-800 px-2 py-1 rounded text-xs">Bancontact</span>
              <span className="bg-stone-800 px-2 py-1 rounded text-xs">Contant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
