import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  // Tijdelijk blokkeren voor Google? Zet BLOCK_INDEXING=true in Vercel
  const blockIndexing = process.env.BLOCK_INDEXING === "true";

  if (blockIndexing) {
    return {
      rules: {
        userAgent: "*",
        disallow: "/", // Blokkeer ALLES
      },
    };
  }

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/afrekenen", "/api/"],
    },
    sitemap: "https://www.vuurmeester-haardhout.nl/sitemap.xml",
  };
}
