'use client';

import { useState } from 'react';
import { Truck, Calculator } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Shipping cost lookup based on postcode regions
// This is a simplified version - you can expand with exact postcodes
const SHIPPING_RATES: Record<string, number> = {
  // Brabant - Depot area (very cheap)
  '50': 15, '51': 15, '52': 20,
  // Zuid-Nederland
  '53': 25, '54': 25, '55': 25, '56': 25,
  '60': 30, '61': 30, '62': 30, '63': 35,
  // Midden-Nederland
  '30': 45, '31': 45, '32': 45, '33': 45, '34': 45, '35': 45,
  '36': 45, '37': 45, '38': 45, '39': 45,
  '40': 35, '41': 35, '42': 35, '43': 35, '44': 35, '45': 35,
  '46': 40, '47': 40, '48': 40, '49': 40,
  // Randstad
  '10': 55, '11': 55, '12': 55, '13': 55, '14': 55, '15': 55,
  '16': 55, '17': 55, '18': 55, '19': 55,
  '20': 50, '21': 50, '22': 50, '23': 50, '24': 50, '25': 50,
  '26': 50, '27': 50, '28': 50, '29': 50,
  // Noord-Nederland
  '70': 55, '71': 55, '72': 55, '73': 55, '74': 55, '75': 60,
  '76': 60, '77': 65, '78': 65, '79': 70,
  '80': 65, '81': 65, '82': 65, '83': 65, '84': 65, '85': 70,
  '86': 70, '87': 75, '88': 75, '89': 80,
  '90': 70, '91': 70, '92': 75, '93': 75, '94': 80, '95': 80,
  '96': 85, '97': 85, '98': 90, '99': 90,
};

// Special postcodes (near depot - almost free)
const DEPOT_POSTCODES = ['5091', '5094', '5095']; // Middelbeers area

function getShippingCost(postcode: string, m3: number): number | null {
  const cleaned = postcode.replace(/\s/g, '');

  // Check depot postcodes first
  if (DEPOT_POSTCODES.some(pc => cleaned.startsWith(pc))) {
    return 5 * m3; // Almost free for locals
  }

  // Get first 2 digits for region
  const region = cleaned.substring(0, 2);
  const baseCost = SHIPPING_RATES[region];

  if (!baseCost) return null;

  // Cost per m³ with volume discount
  if (m3 >= 4) {
    return baseCost + (m3 * 10); // Discount for bulk
  }
  return baseCost + (m3 * 15);
}

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
    const cost = getShippingCost(postcodeClean, quantity);

    if (cost === null) {
      setError('Postcode niet gevonden. Neem contact met ons op voor een offerte.');
      return;
    }

    setResult(cost);
  };

  return (
    <div className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Postcode
          </label>
          <Input
            type="text"
            placeholder="bijv. 5091 AB"
            value={postcode}
            onChange={(e) => setPostcode(e.target.value)}
            maxLength={7}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-stone-700 mb-1">
            Aantal m³
          </label>
          <select
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
        <p className="text-sm text-red-600">{error}</p>
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
