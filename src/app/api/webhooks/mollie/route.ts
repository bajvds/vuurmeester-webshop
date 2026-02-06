import { NextRequest, NextResponse } from "next/server";
import {
  getMolliePayment,
  isPaymentSuccessful,
  isPaymentFailed,
} from "@/lib/mollie/client";
import { updateWooCommerceOrderStatus } from "@/lib/woocommerce/rest-client";

/**
 * Mollie Webhook Handler
 *
 * Called by Mollie when a payment status changes.
 * Updates the WooCommerce order status accordingly.
 */
export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    // Mollie sends the payment ID in the request body
    const formData = await request.formData();
    const paymentId = formData.get("id") as string;

    if (!paymentId || !/^tr_[A-Za-z0-9]+$/.test(paymentId)) {
      console.error("Mollie webhook: Invalid or missing payment ID");
      return NextResponse.json({ error: "Invalid payment ID" }, { status: 400 });
    }

    // Fetch the payment details from Mollie
    const payment = await getMolliePayment(paymentId);

    // Get the WooCommerce order ID from metadata
    const orderId = parseInt(payment.metadata.order_id);
    if (isNaN(orderId)) {
      console.error("Mollie webhook: Invalid order ID in metadata");
      return NextResponse.json({ error: "Invalid order ID" }, { status: 400 });
    }

    // Update WooCommerce order based on payment status
    if (isPaymentSuccessful(payment.status)) {
      await updateWooCommerceOrderStatus(orderId, "processing");
    } else if (isPaymentFailed(payment.status)) {
      await updateWooCommerceOrderStatus(orderId, "failed");
    }

    // Always return 200 to acknowledge receipt
    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Mollie webhook error:", error);
    // Still return 200 to prevent Mollie from retrying
    // Log the error for investigation
    return NextResponse.json({ received: true, error: "Processing error" });
  }
}
