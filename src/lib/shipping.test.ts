import { describe, it, expect } from "vitest";
import { calculateShipping, FIXED_RATE_POSTCODES, SHIPPING_RATES } from "./shipping";

describe("calculateShipping", () => {
  describe("input validation", () => {
    it("returns null for empty postcode", () => {
      expect(calculateShipping("", 1)).toBeNull();
    });

    it("returns null for postcode shorter than 4 characters", () => {
      expect(calculateShipping("509", 1)).toBeNull();
    });

    it("returns null for zero cubic meters", () => {
      expect(calculateShipping("5091AB", 0)).toBeNull();
    });

    it("returns null for negative cubic meters", () => {
      expect(calculateShipping("5091AB", -1)).toBeNull();
    });

    it("returns null for unknown postcode prefix", () => {
      // 00xx is not a valid Dutch postcode
      expect(calculateShipping("0012AB", 1)).toBeNull();
    });
  });

  describe("fixed rate postcodes", () => {
    it("returns €20 for fixed rate postcodes", () => {
      const result = calculateShipping("5091AB", 1);
      expect(result).toEqual({ price: 20, isFixed: true });
    });

    it("returns €20 for fixed rate postcodes regardless of volume", () => {
      const result1m3 = calculateShipping("5091AB", 1);
      const result5m3 = calculateShipping("5091AB", 5);
      const result10m3 = calculateShipping("5091AB", 10);

      expect(result1m3?.price).toBe(20);
      expect(result5m3?.price).toBe(20);
      expect(result10m3?.price).toBe(20);
    });

    it("all fixed rate postcodes return €20", () => {
      FIXED_RATE_POSTCODES.forEach((postcode) => {
        const result = calculateShipping(postcode + "AB", 1);
        expect(result).toEqual({ price: 20, isFixed: true });
      });
    });
  });

  describe("regular postcode pricing", () => {
    it("returns correct base price for Brabant depot area (50xx)", () => {
      const result = calculateShipping("5012AB", 1);
      expect(result?.price).toBe(39);
      expect(result?.isFixed).toBe(false);
    });

    it("returns correct base price for Amsterdam (10xx)", () => {
      const result = calculateShipping("1012AB", 1);
      expect(result?.price).toBe(69);
    });

    it("returns correct base price for Groningen (90xx)", () => {
      const result = calculateShipping("9012AB", 1);
      expect(result?.price).toBe(89);
    });

    it("returns correct base price for Flevoland expensive area (45xx)", () => {
      const result = calculateShipping("4512AB", 1);
      expect(result?.price).toBe(120);
    });
  });

  describe("volume surcharge calculation", () => {
    it("price increases with more cubic meters (for postcodes with surcharge)", () => {
      // Using Amsterdam (10xx) which has surcharge 0.2
      const result1m3 = calculateShipping("1012AB", 1);
      const result2m3 = calculateShipping("1012AB", 2);
      const result3m3 = calculateShipping("1012AB", 3);

      expect(result2m3!.price).toBeGreaterThan(result1m3!.price);
      expect(result3m3!.price).toBeGreaterThan(result2m3!.price);
    });

    it("price stays same for postcodes with 0% surcharge", () => {
      // Postcode 50xx has surcharge 0.0
      const result1m3 = calculateShipping("5012AB", 1);
      const result5m3 = calculateShipping("5012AB", 5);

      expect(result1m3?.price).toBe(39);
      expect(result5m3?.price).toBe(39);
    });

    it("applies diminishing surcharge (each m³ costs less extra)", () => {
      // Using Amsterdam (10xx) which has surcharge 0.2
      const result1m3 = calculateShipping("1012AB", 1)!.price;
      const result2m3 = calculateShipping("1012AB", 2)!.price;
      const result3m3 = calculateShipping("1012AB", 3)!.price;

      const surcharge1to2 = result2m3 - result1m3;
      const surcharge2to3 = result3m3 - result2m3;

      expect(surcharge2to3).toBeLessThan(surcharge1to2);
    });

    it("calculates 2m³ correctly for Amsterdam (10xx)", () => {
      // WooCommerce formula: base + (base * surcharge * 0.90)
      // base = 69, surcharge = 0.2
      // extraCharge = 69 * 0.2 = 13.8
      // i=2: extraCharge *= 0.90 = 12.42, total = 69 + 12.42 = 81.42
      const result = calculateShipping("1012AB", 2);
      expect(result?.price).toBe(81.42);
    });

    it("calculates 3m³ correctly for Amsterdam (10xx)", () => {
      // base = 69, surcharge = 0.2
      // extraCharge = 69 * 0.2 = 13.8
      // i=2: extraCharge = 12.42, total = 81.42
      // i=3: extraCharge = 11.178, total = 92.598 ≈ 92.6
      const result = calculateShipping("1012AB", 3);
      expect(result?.price).toBeCloseTo(92.6, 1);
    });
  });

  describe("all shipping rate prefixes have valid rates", () => {
    it("all defined prefixes return valid results", () => {
      Object.keys(SHIPPING_RATES).forEach((prefix) => {
        // Use "00" suffix to avoid collision with fixed rate postcodes
        // (e.g., "5512" is fixed rate, but "5500" is not)
        const result = calculateShipping(prefix + "00AB", 1);
        expect(result).not.toBeNull();
        expect(result?.price).toBeGreaterThan(0);
        expect(result?.isFixed).toBe(false);
      });
    });
  });

  describe("edge cases", () => {
    it("handles postcodes with spaces correctly", () => {
      // The function expects clean input (no spaces)
      // The UI should clean this, but test the raw function
      const resultWithSpaces = calculateShipping("5091 AB", 1);
      // This should still work because we check first 4 chars
      expect(resultWithSpaces).toEqual({ price: 20, isFixed: true });
    });

    it("handles lowercase postcodes", () => {
      const result = calculateShipping("5091ab", 1);
      expect(result).toEqual({ price: 20, isFixed: true });
    });

    it("handles very large volumes", () => {
      // Using Amsterdam (10xx) which has surcharge 0.2
      const result = calculateShipping("1012AB", 20);
      expect(result).not.toBeNull();
      expect(result?.price).toBeGreaterThan(69); // More than base price
    });
  });
});
