import { Metadata } from 'next';
import { Truck, Shield, Phone, Clock, MessageCircle } from 'lucide-react';
import { getHaardhoutProducts, getAanmaakProducts, cleanProductName, formatPrice } from '@/lib/woocommerce/client';
import { ProductCard } from '@/components/products/product-card';
import { SortableProductGrid } from '@/components/products/sortable-product-grid';
import { ShippingCalculator } from '@/components/shipping-calculator';
import { HomeReviews } from '@/components/home/home-reviews';
import Image from 'next/image';

export const metadata: Metadata = {
  alternates: {
    canonical: 'https://www.vuurmeester-haardhout.nl',
  },
};

export default async function Home() {
  // Fetch products server-side
  const [haardhoutProducts, aanmaakProducts] = await Promise.all([
    getHaardhoutProducts(),
    getAanmaakProducts(),
  ]);

  return (
    <>
      {/* Hero Section */}
      <section className="relative text-white">
        {/* Background Image */}
        <Image
          src="/images/hero-header.jpg"
          alt="Haardhout opgestapeld"
          fill
          priority
          sizes="100vw"
          className="object-cover object-top"
        />
        {/* Dark Overlay for text readability */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 py-16 md:py-24">
          <div className="grid gap-8 md:grid-cols-2 items-center">
            {/* Left: Text */}
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Premium Haardhout,{' '}
                <span className="text-orange-400">Scherpe Prijs</span>
              </h1>
              <p className="text-lg text-stone-300 mb-6">
                De goedkoopste van Nederland. Geleverd door heel het land,
                losgestort met onze eigen aanhanger. Persoonlijk contact gegarandeerd.
              </p>
              <div className="flex items-center gap-2 text-yellow-400 mb-8">
                <span>★★★★★</span>
                <span className="text-stone-300">+10.000 tevreden klanten</span>
              </div>
            </div>

            {/* Right: Shipping Calculator */}
            <div className="bg-white rounded-2xl p-6 text-stone-900 shadow-2xl">
              <h2 className="text-xl font-bold mb-4">
                Bereken je bezorgkosten
              </h2>
              <ShippingCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="bg-orange-500 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center text-xs sm:text-sm">
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Truck className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Heel Nederland</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Shield className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span className="break-words">Goedkoopste garantie</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Phone className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Persoonlijk contact</span>
            </div>
            <div className="flex items-center justify-center gap-1.5 sm:gap-2">
              <Clock className="h-4 w-4 sm:h-5 sm:w-5 flex-shrink-0" />
              <span>Snelle levering</span>
            </div>
          </div>
        </div>
      </section>

      {/* Haardhout Section */}
      <section id="haardhout" className="py-16 bg-stone-50 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Ons Haardhout
            </h2>
            <p className="text-stone-600">
              Kies je type hout - van direct stoken tot zelf drogen
            </p>
          </div>

          <SortableProductGrid products={haardhoutProducts} />
        </div>
      </section>

      {/* Info Banner: How it works */}
      <section className="py-12 bg-amber-50 border-y border-amber-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-stone-900 mb-2">
              Hoe werkt het?
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                1
              </div>
              <h3 className="font-semibold mb-1">Bestel online</h3>
              <p className="text-sm text-stone-600">
                Kies je hout en vul je gegevens in
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                2
              </div>
              <h3 className="font-semibold mb-1">Wij nemen contact op</h3>
              <p className="text-sm text-stone-600">
                We plannen samen een levermoment
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-3">
                3
              </div>
              <h3 className="font-semibold mb-1">Losgestort geleverd</h3>
              <p className="text-sm text-stone-600">
                Met onze aanhanger, precies waar jij wilt
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Reviews */}
      <HomeReviews />

      {/* Aanmaakproducten Section */}
      <section id="aanmaak" className="py-16 scroll-mt-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-stone-900 mb-2">
              Ook aanmaakproducten nodig?
            </h2>
            <p className="text-stone-600">
              Bestel direct mee - scheelt een losse bestelling
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {aanmaakProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 bg-stone-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Waarom De Vuurmeester?
          </h2>
          <div className="flex justify-center items-center gap-2 text-yellow-400 text-2xl mb-8">
            <span>★★★★★</span>
          </div>
          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div>
              <div className="text-4xl font-bold text-orange-400 mb-2">€</div>
              <h3 className="font-semibold mb-2">Goedkoopste van NL</h3>
              <p className="text-stone-400 text-sm">
                Wij garanderen de scherpste prijs. Vind je het elders goedkoper?
                Laat het ons weten!
              </p>
            </div>
            <div>
              <Truck className="h-10 w-10 text-orange-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Heel Nederland</h3>
              <p className="text-stone-400 text-sm">
                We leveren door het hele land. Vanuit Brabant, met lage
                verzendkosten in de regio.
              </p>
            </div>
            <div>
              <MessageCircle className="h-10 w-10 text-orange-400 mx-auto mb-2" />
              <h3 className="font-semibold mb-2">Persoonlijk contact</h3>
              <p className="text-stone-400 text-sm">
                Geen callcenter, maar direct contact via WhatsApp.
                Wij nemen altijd contact op voor je levering.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
