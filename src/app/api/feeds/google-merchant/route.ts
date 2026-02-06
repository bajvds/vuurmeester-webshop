/**
 * Google Merchant Center Product Feed
 *
 * Generates an RSS 2.0 XML feed with Google Shopping namespace.
 * Register this URL in Merchant Center as a scheduled fetch:
 * https://www.vuurmeester-haardhout.nl/api/feeds/google-merchant
 */

import { woocommerce, cleanProductName, Product } from "@/lib/woocommerce/client";

const SITE_URL = "https://www.vuurmeester-haardhout.nl";
const BRAND = "De Vuurmeester";

// Google product category for firewood
// https://www.google.com/basepages/producttype/taxonomy-with-ids.en-US.txt
const GOOGLE_PRODUCT_CATEGORY = "632"; // Fuel > Firewood & Fuel Logs

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function stripHtml(html: string): string {
  return html
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&#8211;/g, "–")
    .replace(/&#038;/g, "&")
    .replace(/&amp;/g, "&")
    .trim();
}

function priceToCurrency(priceInCents: string): string {
  const euros = parseInt(priceInCents) / 100;
  return `${euros.toFixed(2)} EUR`;
}

function detectProductType(name: string): string {
  const lower = name.toLowerCase();

  if (lower.includes("ovengedroogd") || lower.includes("oven gedroogd")) {
    return "Haardhout > Ovengedroogd hardhout";
  }
  if (lower.includes("halfdroog") || lower.includes("half droog") || lower.includes("vers")) {
    return "Haardhout > Halfdroog hardhout";
  }
  if (lower.includes("beuk") || lower.includes("ofyr")) {
    return "Haardhout > Beukenhout";
  }
  if (lower.includes("kozijn") || lower.includes("kleine blok")) {
    return "Haardhout > Kozijnhout";
  }
  if (lower.includes("aanmaak")) {
    return "Aanmaakhout";
  }
  return "Haardhout";
}

function productToXmlItem(product: Product): string {
  const title = escapeXml(cleanProductName(product.name));
  const description = escapeXml(
    stripHtml(product.short_description || product.description || product.name)
  );
  const link = `${SITE_URL}/product/${product.slug}`;
  const imageLink = product.images[0]?.src || "";
  const price = priceToCurrency(product.prices.price);
  const availability = product.is_in_stock ? "in_stock" : "out_of_stock";
  const productType = escapeXml(detectProductType(product.name));

  let item = `    <item>
      <g:id>${product.id}</g:id>
      <title>${title}</title>
      <description>${description}</description>
      <link>${escapeXml(link)}</link>
      <g:image_link>${escapeXml(imageLink)}</g:image_link>`;

  // Additional images
  for (let i = 1; i < Math.min(product.images.length, 10); i++) {
    item += `\n      <g:additional_image_link>${escapeXml(product.images[i].src)}</g:additional_image_link>`;
  }

  item += `
      <g:price>${price}</g:price>`;

  // Sale price
  if (product.on_sale && product.prices.sale_price && parseInt(product.prices.sale_price) > 0) {
    item += `\n      <g:sale_price>${priceToCurrency(product.prices.sale_price)}</g:sale_price>`;
  }

  item += `
      <g:availability>${availability}</g:availability>
      <g:condition>new</g:condition>
      <g:brand>${escapeXml(BRAND)}</g:brand>
      <g:google_product_category>${GOOGLE_PRODUCT_CATEGORY}</g:google_product_category>
      <g:product_type>${productType}</g:product_type>`;

  if (product.sku) {
    item += `\n      <g:mpn>${escapeXml(product.sku)}</g:mpn>`;
  }

  // Identifier exists = false (no GTIN/EAN for bulk firewood)
  item += `
      <g:identifier_exists>false</g:identifier_exists>
    </item>`;

  return item;
}

export async function GET() {
  try {
    const products = await woocommerce.getProducts({ per_page: 50 });

    // Filter out products that aren't purchasable
    const activeProducts = products.filter(
      (p) => p.is_purchasable && parseInt(p.prices.price) > 0
    );

    const items = activeProducts.map(productToXmlItem).join("\n");

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>De Vuurmeester - Haardhout</title>
    <link>${SITE_URL}</link>
    <description>Premium haardhout voor de scherpste prijs. Geleverd door heel Nederland.</description>
${items}
  </channel>
</rss>`;

    return new Response(xml, {
      headers: {
        "Content-Type": "application/xml; charset=utf-8",
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
      },
    });
  } catch (error) {
    console.error("Google Merchant feed error:", error);
    return new Response("Feed generation failed", { status: 500 });
  }
}
