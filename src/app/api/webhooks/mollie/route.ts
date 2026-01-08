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

    if (!paymentId) {
      console.error("Mollie webhook: No payment ID received");
      return NextResponse.json({ error: "Missing payment ID" }, { status: 400 });
    }

    console.log(`Mollie webhook received for payment: ${paymentId}`);

    // Fetch the payment details from Mollie
    const payment = await getMolliePayment(paymentId);
    console.log(`Payment status: ${payment.status}`, payment.metadata);

    // Get the WooCommerce order ID from metadata
    const orderId = parseInt(payment.metadata.order_id);
    if (isNaN(orderId)) {
      console.error("Mollie webhook: Invalid order ID in metadata");
      return NextResponse.json({ error: "Invalid order ID" }, { status: 400 });
    }

    // Update WooCommerce order based on payment status
    if (isPaymentSuccessful(payment.status)) {
      console.log(`Payment ${paymentId} successful, updating order ${orderId} to processing`);
      await updateWooCommerceOrderStatus(orderId, "processing");
    } else if (isPaymentFailed(payment.status)) {
      console.log(`Payment ${paymentId} failed, updating order ${orderId} to failed`);
      await updateWooCommerceOrderStatus(orderId, "failed");
    } else {
      // Status is still pending/open, no action needed
      console.log(`Payment ${paymentId} status: ${payment.status}, no action needed`);
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
