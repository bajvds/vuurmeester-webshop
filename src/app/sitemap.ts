import { MetadataRoute } from "next";
import { woocommerce } from "@/lib/woocommerce/client";
import { getAllCitySlugs } from "@/lib/locations/cities";
import { getAllProvinceSlugs } from "@/lib/locations/provinces";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.vuurmeester-haardhout.nl";

  // Static pages - use fixed dates so sitemap is stable between builds
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: "2026-02-01",
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/bezorgkosten`,
      lastModified: "2026-01-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/veelgestelde-vragen`,
      lastModified: "2026-01-15",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/over-ons`,
      lastModified: "2026-01-01",
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/algemene-voorwaarden`,
      lastModified: "2025-12-01",
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/leveren-afhalen`,
      lastModified: "2026-02-06",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/privacybeleid`,
      lastModified: "2026-02-06",
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Synonym pages
  const synonymPages: MetadataRoute.Sitemap = [
    "brandhout",
    "kachelhout",
    "stookhout",
    "openhaardhout",
    "ovengedroogd-haardhout",
  ].map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Location overview page
  const locationOverview: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/haardhout-bezorgen`,
      lastModified: "2026-02-07",
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ];

  // City pages
  const cityPages: MetadataRoute.Sitemap = getAllCitySlugs().map((slug) => ({
    url: `${baseUrl}/haardhout-bezorgen/${slug}`,
    lastModified: "2026-02-07",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Province pages
  const provincePages: MetadataRoute.Sitemap = getAllProvinceSlugs().map(
    (slug) => ({
      url: `${baseUrl}/haardhout-bezorgen/${slug}`,
      lastModified: "2026-02-07",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })
  );

  // Dynamic product pages
  let productPages: MetadataRoute.Sitemap = [];
  try {
    const products = await woocommerce.getProducts({ per_page: 50 });
    productPages = products.map((product) => ({
      url: `${baseUrl}/product/${product.slug}`,
      lastModified: "2026-02-01",
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }));
  } catch {
    // If API fails, just return static pages
  }

  return [
    ...staticPages,
    ...synonymPages,
    ...locationOverview,
    ...provincePages,
    ...cityPages,
    ...productPages,
  ];
}
