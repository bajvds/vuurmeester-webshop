'use client';

import { useState } from 'react';
import { Truck, Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { calculateShipping } from '@/lib/shipping';
import { trackShippingCalculator } from '@/lib/analytics';

export function ShippingCalculator() {
  const [postcode, setPostcode] = useState('');
  const [m3, setM3] = useState('2');
  const [result, setResult] = useState<number | null>(null);
  const [error, setError] = useState('');

  const handleCalculate = () => {
    setError('');
    setResult(null);

    const postcodeClean = postcode.replace(/\s/g, '');
    if (postcodeClean.length < 4) {
      setError('Vul een geldige postcode in');
      return;
    }

    const quantity = parseFloat(m3) || 1;
    const cost = calculateShipping(postcodeClean, quantity);

    if (cost === null) {
      setError('Postcode niet gevonden. Neem contact met ons op voor een offerte.');
      trackShippingCalculator({ postcode: postcodeClean, cubicMeters: quantity, shippingCost: null, source: "widget" });
      return;
    }

    setResult(cost);
    trackShippingCalculator({ postcode: postcodeClean, cubicMeters: quantity, shippingCost: cost, source: "widget" });
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="shipping-postcode" className="block text-sm font-medium text-stone-700 mb-1">
            Postcode
          </label>
          <Input
            id="shipping-postcode"
            type="text"
            placeholder="bijv. 5091 AB"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            maxLength={7}
          />
        </div>
        <div>
          <label htmlFor="shipping-volume" className="block text-sm font-medium text-stone-700 mb-1">
            Aantal m³
          </label>
          <select
            id="shipping-volume"
            className="flex h-10 w-full rounded-md border border-stone-200 bg-white px-3 py-2 text-sm"
            value={m3}
            onChange={(e) => setM3(e.target.value)}
          >
            <option value="1">1 m³</option>
            <option value="2">2 m³</option>
            <option value="3">3 m³</option>
            <option value="4">4 m³</option>
            <option value="5">5 m³</option>
            <option value="6">6 m³</option>
            <option value="8">8 m³</option>
            <option value="10">10 m³</option>
            <option value="12">12 m³</option>
          </select>
        </div>
      </div>

      <Button
        onClick={handleCalculate}
        className="w-full bg-orange-500 hover:bg-orange-600"
      >
        <Calculator className="mr-2 h-4 w-4" />
        Bereken bezorgkosten
      </Button>

      {error && (
        <p className="text-sm text-red-600" role="alert">{error}</p>
      )}

      {result !== null && (
        <div className="rounded-lg bg-green-50 border border-green-200 p-4">
          <div className="flex items-center gap-2 text-green-800">
            <Truck className="h-5 w-5" />
            <span className="font-medium">Bezorgkosten:</span>
            <span className="text-xl font-bold">
              € {result.toFixed(2).replace('.', ',')}
            </span>
          </div>
          <p className="text-sm text-green-700 mt-1">
            Voor {m3} m³ naar postcode {postcode}
          </p>
        </div>
      )}

      <p className="text-xs text-stone-500 text-center">
        Exacte kosten worden bevestigd bij bestelling. Wij nemen contact op.
      </p>
    </div>
  );
}
