import { NextRequest, NextResponse } from "next/server";
import {
  getMolliePayment,
  isPaymentSuccessful,
  isPaymentFailed,
} from "@/lib/mollie/client";
import {
  getWooCommerceOrder,
  updateWooCommerceOrderStatus,
} from "@/lib/woocommerce/rest-client";

/**
 * Mollie Webhook Handler
 *
 * Called by Mollie when a payment status changes.
 * Updates the WooCommerce order status accordingly.
 * Triggers n8n abandoned cart workflow on expired payments.
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

      // Trigger n8n abandoned cart workflow for expired/failed payments
      triggerAbandonedCartWorkflow(orderId, payment.metadata.order_key, payment.status).catch(
        (err) => console.error("n8n abandoned cart trigger failed:", err)
      );
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

/**
 * Fire-and-forget trigger to n8n abandoned cart workflow.
 * Sends order details so n8n can send recovery emails.
 */
async function triggerAbandonedCartWorkflow(
  orderId: number,
  orderKey: string,
  paymentStatus: string
): Promise<void> {
  const n8nWebhookUrl = process.env.N8N_ABANDONED_CART_WEBHOOK_URL;
  if (!n8nWebhookUrl) {
    console.log("n8n abandoned cart webhook URL not configured, skipping");
    return;
  }

  // Fetch full order details for the email
  const order = await getWooCommerceOrder(orderId);
  const fullOrder = order as Record<string, unknown>;
  const billing = fullOrder.billing_address as Record<string, string> | undefined;
  const lineItems = fullOrder.line_items as Array<Record<string, unknown>> | undefined;

  const PRODUCTION_URL = "https://www.vuurmeester-haardhout.nl";
  const appUrl = (process.env.NEXT_PUBLIC_APP_URL || PRODUCTION_URL).trim();

  const retryUrl = `${appUrl}/bestelling/opnieuw-betalen?order_id=${orderId}&order_key=${orderKey}`;

  await fetch(n8nWebhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      order_id: orderId,
      order_key: orderKey,
      payment_status: paymentStatus,
      total: order.total,
      currency: order.currency,
      retry_url: retryUrl,
      customer: billing
        ? {
            first_name: billing.first_name,
            last_name: billing.last_name,
            email: billing.email,
            phone: billing.phone,
          }
        : null,
      items: lineItems
        ? lineItems.map((item) => ({
            name: item.name,
            quantity: item.quantity,
            total: item.total,
          }))
        : [],
    }),
  });
}
