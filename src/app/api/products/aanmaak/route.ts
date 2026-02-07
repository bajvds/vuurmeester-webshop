import { NextResponse } from "next/server";
import { getAanmaakProducts } from "@/lib/woocommerce/client";

export async function GET() {
  try {
    const products = await getAanmaakProducts();
    return NextResponse.json({ products });
  } catch (error) {
    console.error("Failed to fetch aanmaak products:", error);
    return NextResponse.json({ products: [] });
  }
}
