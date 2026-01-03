/**
 * Shipping rates synchronized with WooCommerce PHP code
 * Source: WooCommerce calculate_bumbal_shipping function
 */

// Special fixed rate postcodes - €20 flat fee
export const FIXED_RATE_POSTCODES = [
  "5081", "5084", "5089", "5087", "5085", "5094", "5534", "5529",
  "5528", "5512", "5513", "5091", "5688", "5685", "5683", "5682",
  "5681", "5298", "5281", "5062", "5066"
];

// Shipping rates by postcode prefix (first 2 digits)
// Format: { prefix: { base: basePrice, surcharge: surchargeRate } }
// Exact copy from WooCommerce PHP $postcode_rates
export const SHIPPING_RATES: Record<string, { base: number; surcharge: number }> = {
  // Noord-Holland
  "10": { base: 69.00, surcharge: 0.2 },
  "11": { base: 69.00, surcharge: 0.2 },
  "12": { base: 69.00, surcharge: 0.2 },
  "13": { base: 69.00, surcharge: 0.2 },
  "14": { base: 69.00, surcharge: 0.2 },
  "15": { base: 69.00, surcharge: 0.2 },
  "16": { base: 80.00, surcharge: 0.2 },
  "17": { base: 79.00, surcharge: 0.28 },
  "18": { base: 80.00, surcharge: 0.2 },
  "19": { base: 69.00, surcharge: 0.2 },
  "20": { base: 69.00, surcharge: 0.2 },
  "21": { base: 69.00, surcharge: 0.2 },
  "22": { base: 69.00, surcharge: 0.2 },
  // Zuid-Holland
  "23": { base: 64.00, surcharge: 0.2 },
  "24": { base: 64.00, surcharge: 0.2 },
  "25": { base: 64.00, surcharge: 0.2 },
  "26": { base: 64.00, surcharge: 0.2 },
  "27": { base: 64.00, surcharge: 0.2 },
  "28": { base: 64.00, surcharge: 0.2 },
  "29": { base: 64.00, surcharge: 0.2 },
  "30": { base: 64.00, surcharge: 0.2 },
  "31": { base: 64.00, surcharge: 0.2 },
  "32": { base: 64.00, surcharge: 0.2 },
  "33": { base: 64.00, surcharge: 0.2 },
  // Utrecht
  "34": { base: 64.00, surcharge: 0.23 },
  "35": { base: 64.00, surcharge: 0.23 },
  "36": { base: 64.00, surcharge: 0.23 },
  "37": { base: 64.00, surcharge: 0.23 },
  "38": { base: 64.00, surcharge: 0.23 },
  "39": { base: 64.00, surcharge: 0.23 },
  // Gelderland
  "40": { base: 58.00, surcharge: 0.2 },
  "41": { base: 58.00, surcharge: 0.2 },
  "42": { base: 64.00, surcharge: 0.23 },
  "43": { base: 89.00, surcharge: 0.29 },  // Zeeland
  "44": { base: 89.00, surcharge: 0.29 },  // Zeeland
  "45": { base: 120.00, surcharge: 0.2 },  // Flevoland duur
  "46": { base: 58.00, surcharge: 0.2 },
  "47": { base: 48.00, surcharge: 0.2 },
  "48": { base: 45.00, surcharge: 0.1 },
  "49": { base: 48.50, surcharge: 0.2 },
  // Noord-Brabant (depot gebied)
  "50": { base: 39.00, surcharge: 0.0 },
  "51": { base: 40.00, surcharge: 0.1 },
  "52": { base: 40.00, surcharge: 0.1 },
  "53": { base: 45.00, surcharge: 0.125 },
  "54": { base: 45.00, surcharge: 0.125 },
  "55": { base: 39.00, surcharge: 0.0 },
  "56": { base: 39.00, surcharge: 0.0 },
  "57": { base: 44.00, surcharge: 0.15 },
  "58": { base: 65.00, surcharge: 0.2 },
  "59": { base: 64.00, surcharge: 0.23 },
  // Limburg
  "60": { base: 64.00, surcharge: 0.23 },
  "61": { base: 69.00, surcharge: 0.2 },
  "62": { base: 69.00, surcharge: 0.2 },
  "63": { base: 69.00, surcharge: 0.2 },
  "64": { base: 69.00, surcharge: 0.2 },
  "65": { base: 58.00, surcharge: 0.2 },
  "66": { base: 58.00, surcharge: 0.2 },
  "67": { base: 64.00, surcharge: 0.23 },
  "68": { base: 64.00, surcharge: 0.23 },
  "69": { base: 64.00, surcharge: 0.23 },
  // Gelderland / oost
  "70": { base: 64.00, surcharge: 0.23 },
  "71": { base: 64.00, surcharge: 0.23 },
  "72": { base: 64.00, surcharge: 0.23 },
  "73": { base: 64.00, surcharge: 0.23 },
  // Overijssel
  "74": { base: 89.00, surcharge: 0.3 },
  "75": { base: 89.00, surcharge: 0.3 },
  "76": { base: 89.00, surcharge: 0.3 },
  "77": { base: 85.00, surcharge: 0.28 },
  "78": { base: 89.00, surcharge: 0.3 },
  "79": { base: 85.00, surcharge: 0.25 },
  // Flevoland
  "80": { base: 89.00, surcharge: 0.3 },
  "81": { base: 89.00, surcharge: 0.3 },
  "82": { base: 70.00, surcharge: 0.175 },
  "83": { base: 85.00, surcharge: 0.3 },
  // Friesland
  "84": { base: 89.00, surcharge: 0.3 },
  "85": { base: 89.00, surcharge: 0.3 },
  "86": { base: 89.00, surcharge: 0.3 },
  "87": { base: 89.00, surcharge: 0.3 },
  "88": { base: 89.00, surcharge: 0.3 },
  "89": { base: 89.00, surcharge: 0.3 },
  // Groningen / Drenthe
  "90": { base: 89.00, surcharge: 0.3 },
  "91": { base: 89.00, surcharge: 0.3 },
  "92": { base: 89.00, surcharge: 0.3 },
  "93": { base: 89.00, surcharge: 0.3 },
  "94": { base: 89.00, surcharge: 0.3 },
  "95": { base: 89.00, surcharge: 0.3 },
  "96": { base: 89.00, surcharge: 0.3 },
  "97": { base: 89.00, surcharge: 0.3 },
  "98": { base: 89.00, surcharge: 0.3 },
  "99": { base: 89.00, surcharge: 0.3 },
};

export interface ShippingResult {
  price: number;
  isFixed: boolean;
}

/**
 * Calculate shipping cost based on postcode and volume
 * Exact copy of WooCommerce PHP calculation logic
 *
 * @param postcode - Dutch postcode (at least 4 characters)
 * @param cubicMeters - Volume in cubic meters
 * @returns Shipping result with price and fixed rate flag, or null if postcode not supported
 */
export function calculateShipping(postcode: string, cubicMeters: number): ShippingResult | null {
  if (!postcode || postcode.length < 4) return null;
  if (cubicMeters < 1) return null;

  const prefix4 = postcode.substring(0, 4);
  const prefix2 = postcode.substring(0, 2);

  // Check fixed rate postcodes first (€20 flat fee)
  if (FIXED_RATE_POSTCODES.includes(prefix4)) {
    return { price: 20, isFixed: true };
  }

  // Check regular rates
  const rate = SHIPPING_RATES[prefix2];
  if (!rate) return null;

  const { base, surcharge } = rate;

  // Calculate transport cost using WooCommerce formula:
  // - Start with base price
  // - For each extra m³: add (base * surcharge * 0.90^n) where n starts at 1
  let transportCost = base;

  if (cubicMeters > 1) {
    let extraCharge = base * surcharge;
    for (let i = 2; i <= cubicMeters; i++) {
      extraCharge *= 0.90;
      transportCost += extraCharge;
    }
  }

  // Round to 2 decimal places like PHP's toFixed(2)
  return {
    price: Math.round(transportCost * 100) / 100,
    isFixed: false
  };
}
