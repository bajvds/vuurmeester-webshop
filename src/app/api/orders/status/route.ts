import { NextRequest, NextResponse } from "next/server";
import { getWooCommerceOrder } from "@/lib/woocommerce/rest-client";

/**
 * Order Status API
 *
 * Checks the WooCommerce order status by order ID.
 * Used by the success page to verify payment before showing confirmation.
 * Requires order_key for authorization (prevents guessing order IDs).
 */
export async function GET(request: NextRequest): Promise<NextResponse> {
  const orderId = request.nextUrl.searchParams.get("order_id");
  const orderKey = request.nextUrl.searchParams.get("order_key");

  if (!orderId || !orderKey) {
    return NextResponse.json(
      { error: "Missing order_id or order_key" },
      { status: 400 }
    );
  }

  try {
    const order = await getWooCommerceOrder(parseInt(orderId));

    // Verify order_key matches (authorization check)
    if (order.order_key !== orderKey) {
      return NextResponse.json(
        { error: "Invalid order_key" },
        { status: 403 }
      );
    }

    return NextResponse.json({
      status: order.status,
      total: order.total,
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch order status" },
      { status: 500 }
    );
  }
}
