"use client";

import { useState } from "react";
import Link from "next/link";
import { MessageCircle, X, Truck, HelpCircle, Clock, Package, ChevronRight } from "lucide-react";

const WHATSAPP_NUMBER = "31682091984";

interface QuickOption {
  icon: React.ReactNode;
  label: string;
  action: "link" | "whatsapp";
  href?: string;
  message?: string;
}

const quickOptions: QuickOption[] = [
  {
    icon: <Truck className="h-5 w-5" />,
    label: "Wat zijn de bezorgkosten?",
    action: "link",
    href: "/bezorgkosten",
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Hoe lang moet halfdroog hout drogen?",
    action: "link",
    href: "/veelgestelde-vragen#droogtijd",
  },
  {
    icon: <Package className="h-5 w-5" />,
    label: "Hoeveel zit er in een big bag?",
    action: "link",
    href: "/veelgestelde-vragen#bigbag",
  },
  {
    icon: <HelpCircle className="h-5 w-5" />,
    label: "Andere vraag",
    action: "whatsapp",
    message: "Hoi! Ik heb een vraag over haardhout.",
  },
];

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOptionClick = (option: QuickOption) => {
    if (option.action === "whatsapp" && option.message) {
      window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(option.message)}`,
        "_blank"
      );
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 sm:w-80 bg-white rounded-2xl shadow-2xl overflow-hidden animate-in slide-in-from-bottom-4 fade-in duration-200">
          {/* Header */}
          <div className="bg-green-500 text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold">De Vuurmeester</p>
                  <p className="text-sm text-green-100">Meestal binnen 1 uur reactie</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
                aria-label="Sluit WhatsApp menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Options */}
          <div className="p-4">
            <p className="text-sm text-stone-500 mb-3">
              Waar kunnen we je mee helpen?
            </p>
            <div className="space-y-2">
              {quickOptions.map((option, index) => (
                option.action === "link" ? (
                  <Link
                    key={index}
                    href={option.href!}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-stone-50 transition-colors group"
                  >
                    <div className="text-orange-500">{option.icon}</div>
                    <span className="flex-1 text-stone-700">{option.label}</span>
                    <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-orange-500 transition-colors" />
                  </Link>
                ) : (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group w-full text-left"
                  >
                    <div className="text-green-500">{option.icon}</div>
                    <span className="flex-1 text-stone-700">{option.label}</span>
                    <ChevronRight className="h-4 w-4 text-stone-400 group-hover:text-green-500 transition-colors" />
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-3 bg-stone-50">
            <button
              onClick={() => {
                window.open(
                  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hoi! Ik heb interesse in haardhout en wil graag meer weten.")}`,
                  "_blank"
                );
                setIsOpen(false);
              }}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2.5 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              Direct naar WhatsApp
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`whatsapp-float fixed bottom-6 right-4 sm:right-6 z-50 flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="Chat via WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="font-medium hidden sm:inline">
          WhatsApp
        </span>
      </button>
    </>
  );
}
