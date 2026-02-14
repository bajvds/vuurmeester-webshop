import { NextRequest, NextResponse } from "next/server";
import {
  getWooCommerceOrder,
  updateWooCommerceOrderStatus,
} from "@/lib/woocommerce/rest-client";
import {
  createMolliePayment,
  formatMollieAmount,
} from "@/lib/mollie/client";

/**
 * Retry Payment API
 *
 * Creates a new Mollie payment for a failed order.
 * The order must exist and have status "failed".
 * Requires order_key for authorization.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const body = await request.json();
    const { order_id, order_key } = body;

    if (!order_id || !order_key) {
      return NextResponse.json(
        { error: "Missing order_id or order_key" },
        { status: 400 }
      );
    }

    const orderId = parseInt(order_id);
    if (isNaN(orderId)) {
      return NextResponse.json(
        { error: "Invalid order_id" },
        { status: 400 }
      );
    }

    // Fetch order from WooCommerce
    const order = await getWooCommerceOrder(orderId);

    // Verify order_key
    if (order.order_key !== order_key) {
      return NextResponse.json(
        { error: "Invalid order_key" },
        { status: 403 }
      );
    }

    // Only allow retry for failed orders
    if (order.status !== "failed") {
      return NextResponse.json(
        { error: "Order is not in failed status", status: order.status },
        { status: 400 }
      );
    }

    // Reset order status to pending before creating new payment
    await updateWooCommerceOrderStatus(orderId, "pending");

    // Build URLs
    const PRODUCTION_URL = "https://www.vuurmeester-haardhout.nl";
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || PRODUCTION_URL).trim();
    const isLocalhost = appUrl.includes("localhost") || appUrl.includes("127.0.0.1");

    const webhookUrl = isLocalhost
      ? undefined
      : `${appUrl}/api/webhooks/mollie`;

    const successParams = new URLSearchParams({
      order_key: order.order_key,
      order_id: String(order.id),
      total: order.total,
      items: "1",
    });

    // Create new Mollie payment for the same order
    const molliePayment = await createMolliePayment({
      amount: {
        value: formatMollieAmount(parseFloat(order.total)),
        currency: "EUR",
      },
      description: `Vuurmeester bestelling #${order.id}`,
      redirectUrl: `${appUrl}/bestelling/succes?${successParams.toString()}`,
      webhookUrl,
      method: "ideal",
      metadata: {
        order_id: String(order.id),
        order_key: order.order_key,
      },
    });

    const paymentUrl = molliePayment._links.checkout?.href;
    if (!paymentUrl) {
      throw new Error("Geen betaal-URL ontvangen van Mollie");
    }

    return NextResponse.json({
      success: true,
      paymentUrl,
    });
  } catch (error) {
    console.error("Retry payment error:", error);
    const message =
      error instanceof Error
        ? error.message
        : "Er is een fout opgetreden bij het aanmaken van de betaling";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
