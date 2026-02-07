export type CityTier = 1 | 2 | 3;

export interface CityData {
  slug: string;
  name: string;
  province: string;
  postcodePrefix: string;
  samplePostcode: string;
  distanceFromDepot: number;
  estimatedDelivery: string;
  tier: CityTier;
  introduction: string;
  neighborhoods?: string[];
  metaTitle: string;
  metaDescription: string;
  faqItems: FAQItem[];
  nearbyCities: string[];
}

export interface ProvinceData {
  slug: string;
  name: string;
  cities: string[];
  introduction: string;
  shippingRange: string;
  metaTitle: string;
  metaDescription: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
