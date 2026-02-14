import { NextRequest, NextResponse } from "next/server";
import { getWooCommerceOrder } from "@/lib/woocommerce/rest-client";

/**
 * Order Details API
 *
 * Returns order details for the retry-payment page.
 * Requires order_key for authorization.
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

    // Only return details for failed orders
    if (order.status !== "failed") {
      return NextResponse.json(
        { error: "Order is not in failed status", status: order.status },
        { status: 400 }
      );
    }

    // Extract the fields we need for the retry page
    // The WooCommerce Legacy API returns more fields than our TypeScript type
    const fullOrder = order as Record<string, unknown>;
    const billing = fullOrder.billing_address as Record<string, string> | undefined;
    const lineItems = fullOrder.line_items as Array<Record<string, unknown>> | undefined;

    return NextResponse.json({
      id: order.id,
      status: order.status,
      total: order.total,
      currency: order.currency,
      customer: billing
        ? {
            firstName: billing.first_name,
            lastName: billing.last_name,
            email: billing.email,
          }
        : null,
      items: lineItems
        ? lineItems.map((item) => ({
            name: item.name as string,
            quantity: item.quantity as number,
            total: item.total as string,
          }))
        : [],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to fetch order details" },
      { status: 500 }
    );
  }
}
