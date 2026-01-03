import { describe, it, expect } from "vitest";
import { formatPrice, getPriceAsNumber, cleanProductName } from "./client";

describe("formatPrice", () => {
  // Note: Intl.NumberFormat uses non-breaking space (U+00A0) between € and number
  it("formats cents as EUR currency", () => {
    expect(formatPrice("9900")).toMatch(/€\s*99,00/);
  });

  it("formats number input correctly", () => {
    expect(formatPrice(9900)).toMatch(/€\s*99,00/);
  });

  it("handles zero correctly", () => {
    expect(formatPrice("0")).toMatch(/€\s*0,00/);
  });

  it("handles large amounts", () => {
    expect(formatPrice("100000")).toMatch(/€\s*1\.000,00/);
  });

  it("handles decimal cents", () => {
    expect(formatPrice("9950")).toMatch(/€\s*99,50/);
  });

  it("handles single digit cents", () => {
    expect(formatPrice("1")).toMatch(/€\s*0,01/);
  });
});

describe("getPriceAsNumber", () => {
  it("converts cents to euros as number", () => {
    expect(getPriceAsNumber("9900")).toBe(99);
  });

  it("handles decimal results", () => {
    expect(getPriceAsNumber("9950")).toBe(99.5);
  });

  it("handles zero", () => {
    expect(getPriceAsNumber("0")).toBe(0);
  });

  it("handles large amounts", () => {
    expect(getPriceAsNumber("100000")).toBe(1000);
  });

  it("handles single cents", () => {
    expect(getPriceAsNumber("1")).toBe(0.01);
  });
});

describe("cleanProductName", () => {
  it("replaces HTML en-dash entity", () => {
    expect(cleanProductName("Haardhout &#8211; Ovengedroogd")).toBe(
      "Haardhout – Ovengedroogd"
    );
  });

  it("replaces HTML ampersand entity &#038;", () => {
    expect(cleanProductName("Hout &#038; Kolen")).toBe("Hout & Kolen");
  });

  it("replaces &amp; entity", () => {
    expect(cleanProductName("Hout &amp; Kolen")).toBe("Hout & Kolen");
  });

  it("handles multiple entities in same string", () => {
    expect(
      cleanProductName("Haardhout &#8211; Eik &#038; Beuk &amp; Mix")
    ).toBe("Haardhout – Eik & Beuk & Mix");
  });

  it("leaves clean strings unchanged", () => {
    expect(cleanProductName("Ovengedroogd Haardhout")).toBe(
      "Ovengedroogd Haardhout"
    );
  });
});
