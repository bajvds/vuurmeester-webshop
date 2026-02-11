import { NextRequest, NextResponse } from "next/server";
import {
  createWooCommerceOrder,
  updateWooCommerceOrderStatus,
  type WooCommerceAddress,
} from "@/lib/woocommerce/rest-client";
import {
  checkoutSchema,
  cleanPostcode,
  paymentMethodLabels,
} from "@/lib/validation/checkout";
import {
  createMolliePayment,
  formatMollieAmount,
} from "@/lib/mollie/client";
import { calculateShipping } from "@/lib/shipping";
import { sendCapiEvent } from "@/lib/meta-capi";

// Cart item from frontend
interface CartItem {
  productId: number;
  quantity: number;
}

// Request body
interface CheckoutRequestBody {
  customer: {
    email: string;
    phone: string;
    billing: {
      firstName: string;
      lastName: string;
      address1: string;
      address2?: string;
      postcode: string;
      city: string;
    };
    paymentMethod: "ideal" | "cod";
    acceptTerms: boolean;
  };
  items: CartItem[];
  shippingCost: number;
}

// Response types
interface CheckoutSuccessResponse {
  success: true;
  orderId: number;
  orderKey: string;
  paymentUrl?: string;
  redirectUrl: string;
}

interface CheckoutErrorResponse {
  success: false;
  error: string;
  details?: Record<string, string[]>;
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<CheckoutSuccessResponse | CheckoutErrorResponse>> {
  try {
    const body: CheckoutRequestBody = await request.json();

    // Validate customer data
    const validation = checkoutSchema.safeParse(body.customer);
    if (!validation.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Validatie mislukt",
          details: validation.error.flatten().fieldErrors as Record<string, string[]>,
        },
        { status: 400 }
      );
    }

    const customer = validation.data;

    // Validate items exist
    if (!body.items || body.items.length === 0) {
      return NextResponse.json(
        { success: false, error: "Winkelwagen is leeg" },
        { status: 400 }
      );
    }

    // Server-side shipping recalculation for security
    const deliveryPostcode = customer.billing.postcode;
    const totalQuantity = body.items.reduce((sum, item) => sum + item.quantity, 0);
    const serverShippingCost = calculateShipping(deliveryPostcode, totalQuantity);

    if (serverShippingCost === null) {
      return NextResponse.json(
        { success: false, error: "Ongeldige postcode voor bezorging" },
        { status: 400 }
      );
    }

    // Use server-calculated shipping cost (ignore client-submitted value)
    const shippingCost = serverShippingCost;

    // Build billing address (Legacy API uses billing_address)
    const billingAddress: WooCommerceAddress = {
      first_name: customer.billing.firstName,
      last_name: customer.billing.lastName,
      address_1: customer.billing.address1,
      address_2: customer.billing.address2 || "",
      city: customer.billing.city,
      postcode: cleanPostcode(customer.billing.postcode),
      country: "NL",
      email: customer.email,
      phone: customer.phone,
    };

    // Shipping address is same as billing
    const shippingAddress: WooCommerceAddress = {
      first_name: billingAddress.first_name,
      last_name: billingAddress.last_name,
      address_1: billingAddress.address_1,
      address_2: billingAddress.address_2,
      city: billingAddress.city,
      postcode: billingAddress.postcode,
      country: "NL",
    };

    // Determine payment method for WooCommerce
    const paymentMethod =
      customer.paymentMethod === "ideal"
        ? "mollie_wc_gateway_ideal"
        : "cod";

    const paymentMethodTitle =
      customer.paymentMethod === "ideal"
        ? paymentMethodLabels.ideal
        : paymentMethodLabels.cod;

    // Create order in WooCommerce via Legacy REST API
    // Always create as "pending" first, then update to "processing" for COD.
    // WooCommerce only sends confirmation emails on status TRANSITIONS
    // (pending → processing), not when an order is created directly as "processing".
    const order = await createWooCommerceOrder({
      payment_method: paymentMethod,
      payment_method_title: paymentMethodTitle,
      set_paid: false,
      status: "pending",
      billing_address: billingAddress,
      shipping_address: shippingAddress,
      line_items: body.items.map((item) => ({
        product_id: item.productId,
        quantity: item.quantity,
      })),
      shipping_lines: [
        {
          method_id: "flat_rate",
          method_title: "Bezorging",
          total: shippingCost.toFixed(2),
        },
      ],
      note: "",
    });

    // For COD: immediately update to "processing" to trigger confirmation email
    if (customer.paymentMethod === "cod") {
      await updateWooCommerceOrderStatus(order.id, "processing");
    }

    // Build response based on payment method
    // Priority: 1) NEXT_PUBLIC_APP_URL (explicit config)
    //           2) Stable production URL (hardcoded fallback for Mollie webhooks)
    // We use the stable production URL because VERCEL_URL changes per deployment
    const PRODUCTION_URL = "https://www.vuurmeester-haardhout.nl";
    const appUrl = (process.env.NEXT_PUBLIC_APP_URL || PRODUCTION_URL).trim();

    // Generate event ID for Meta pixel <-> CAPI deduplication
    const metaEventId = crypto.randomUUID();

    if (customer.paymentMethod === "ideal") {
      // For iDEAL, create payment directly in Mollie
      // This bypasses WooCommerce payment page for seamless checkout

      // Only include webhook URL if we have a public URL (not localhost)
      // Mollie can't reach localhost for webhook calls
      const isLocalhost = appUrl.includes("localhost") || appUrl.includes("127.0.0.1");
      const isEmptyUrl = !appUrl || appUrl.length === 0;

      // Build webhook URL - skip if localhost OR if URL is empty/invalid
      const webhookUrl = (isLocalhost || isEmptyUrl)
        ? undefined
        : `${appUrl}/api/webhooks/mollie`;

      // Build success URL with conversion tracking data
      const successParams = new URLSearchParams({
        order_key: order.order_key,
        order_id: String(order.id),
        total: order.total,
        items: String(body.items.length),
        eid: metaEventId,
      });

      // Fire CAPI Purchase event (fire-and-forget, browser pixel deduplicates on success page)
      const orderValue = parseFloat(order.total);
      sendCapiEvent({
        eventName: "Purchase",
        eventId: metaEventId,
        userData: {
          email: customer.email,
          phone: customer.phone,
          firstName: customer.billing.firstName,
          lastName: customer.billing.lastName,
          postcode: customer.billing.postcode,
          city: customer.billing.city,
        },
        customData: {
          value: orderValue,
          currency: "EUR",
          contentIds: body.items.map((i) => String(i.productId)),
          contentType: "product",
          numItems: body.items.reduce((sum, i) => sum + i.quantity, 0),
          orderId: String(order.id),
        },
        sourceUrl: `${appUrl}/bestelling/succes`,
      }).catch(() => {}); // Never block checkout

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

      // Return Mollie checkout URL (direct to Mollie, not WooCommerce)
      const paymentUrl = molliePayment._links.checkout?.href;
      if (!paymentUrl) {
        throw new Error("Geen betaal-URL ontvangen van Mollie");
      }

      return NextResponse.json({
        success: true,
        orderId: order.id,
        orderKey: order.order_key,
        orderTotal: order.total,
        paymentUrl,
        redirectUrl: paymentUrl,
      });
    } else {
      // For COD, redirect directly to success page with conversion data
      const successParams = new URLSearchParams({
        order_key: order.order_key,
        order_id: String(order.id),
        total: order.total,
        items: String(body.items.length),
        eid: metaEventId,
      });

      // Fire CAPI Purchase event for COD (payment is confirmed immediately)
      const orderValue = parseFloat(order.total);
      sendCapiEvent({
        eventName: "Purchase",
        eventId: metaEventId,
        userData: {
          email: customer.email,
          phone: customer.phone,
          firstName: customer.billing.firstName,
          lastName: customer.billing.lastName,
          postcode: customer.billing.postcode,
          city: customer.billing.city,
        },
        customData: {
          value: orderValue,
          currency: "EUR",
          contentIds: body.items.map((i) => String(i.productId)),
          contentType: "product",
          numItems: body.items.reduce((sum, i) => sum + i.quantity, 0),
          orderId: String(order.id),
        },
        sourceUrl: `${appUrl}/bestelling/succes`,
      }).catch(() => {}); // Fire-and-forget, never block checkout

      return NextResponse.json({
        success: true,
        orderId: order.id,
        orderKey: order.order_key,
        orderTotal: order.total,
        redirectUrl: `${appUrl}/bestelling/succes?${successParams.toString()}`,
      });
    }
  } catch (error) {
    console.error("Checkout error:", error);

    // Return user-friendly error message
    const message =
      error instanceof Error
        ? error.message
        : "Er is een fout opgetreden bij het plaatsen van je bestelling";

    return NextResponse.json(
      { success: false, error: message },
      { status: 500 }
    );
  }
}
