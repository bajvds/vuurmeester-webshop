'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ShoppingCart,
  Menu,
  MessageCircle,
  Flame,
  Sparkles,
  Truck,
  HelpCircle,
  ChevronRight,
  Phone,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
} from '@/components/ui/sheet';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/store/cart';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navigation = [
  { name: 'Haardhout', href: '/#haardhout', icon: Flame },
  { name: 'Aanmaakproducten', href: '/#aanmaak', icon: Sparkles },
  { name: 'Leveren & Afhalen', href: '/leveren-afhalen', icon: Truck },
  { name: 'FAQ', href: '/veelgestelde-vragen', icon: HelpCircle },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { items, openCart } = useCart();
  const itemCount = items.reduce((total, item) => total + item.quantity, 0);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return pathname === '/';
    return pathname === href || pathname.startsWith(href + '/');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <nav className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/Logo_De_Vuurmeester_wit_oranje_300.png"
            alt="De Vuurmeester"
            width={180}
            height={50}
            className="h-10 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium transition-colors hover:text-orange-600 ${
                isActive(item.href) ? 'text-orange-600' : 'text-stone-600'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* WhatsApp Button - Desktop */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden md:flex text-green-600 hover:text-green-700 hover:bg-green-50"
            asChild
          >
            <a
              href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20interesse%20in%20haardhout."
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              WhatsApp
            </a>
          </Button>

          {/* Cart Button */}
          <Button
            variant="ghost"
            size="icon"
            className="relative"
            onClick={openCart}
            aria-label={`Winkelwagen${itemCount > 0 ? ` (${itemCount} ${itemCount === 1 ? 'product' : 'producten'})` : ''}`}
          >
            <ShoppingCart className="h-5 w-5" />
            {itemCount > 0 && (
              <Badge
                className="absolute -right-1 -top-1 h-5 w-5 rounded-full p-0 flex items-center justify-center bg-orange-500"
              >
                {itemCount}
              </Badge>
            )}
          </Button>

          {/* Mobile Menu */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" aria-label="Menu openen">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80 flex flex-col">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Navigatiemenu</SheetDescription>

              <div className="flex flex-col flex-1 pt-6">
                {/* Navigation */}
                <nav className="space-y-1">
                  {navigation.map((item) => {
                    const Icon = item.icon;
                    const active = isActive(item.href);
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={`flex items-center gap-3 px-3 py-3 rounded-lg transition-colors ${
                          active
                            ? 'bg-orange-50 text-orange-600'
                            : 'text-stone-700 hover:bg-stone-50'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon
                          className={`h-5 w-5 ${
                            active ? 'text-orange-500' : 'text-stone-400'
                          }`}
                        />
                        <span className="text-base font-medium">
                          {item.name}
                        </span>
                        <ChevronRight className="h-4 w-4 ml-auto text-stone-300" />
                      </Link>
                    );
                  })}
                </nav>

                {/* Cart in menu */}
                <div className="mt-3 border-t pt-3">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      openCart();
                    }}
                    className="flex items-center gap-3 px-3 py-3 rounded-lg text-stone-700 hover:bg-stone-50 transition-colors w-full"
                  >
                    <ShoppingCart className="h-5 w-5 text-stone-400" />
                    <span className="text-base font-medium">Winkelwagen</span>
                    {itemCount > 0 && (
                      <Badge className="ml-auto bg-orange-500 text-white rounded-full h-6 min-w-6 flex items-center justify-center">
                        {itemCount}
                      </Badge>
                    )}
                  </button>
                </div>

                {/* Spacer */}
                <div className="flex-1" />

                {/* Contact section at bottom */}
                <div className="border-t pt-4 pb-2 space-y-3">
                  <p className="text-xs text-stone-400 uppercase tracking-wider px-3">
                    Contact
                  </p>
                  <a
                    href="tel:+31682091984"
                    className="flex items-center gap-3 px-3 py-2 text-stone-600 text-sm hover:text-stone-900 transition-colors"
                  >
                    <Phone className="h-4 w-4 text-stone-400" />
                    06 82 09 19 84
                  </a>
                  <a
                    href="https://wa.me/31682091984?text=Hoi!%20Ik%20heb%20interesse%20in%20haardhout."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 mx-3 py-2.5 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium justify-center transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <MessageCircle className="h-5 w-5" />
                    WhatsApp ons
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
