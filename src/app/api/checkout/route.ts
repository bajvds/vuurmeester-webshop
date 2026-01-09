import { NextRequest, NextResponse } from "next/server";
import {
  createWooCommerceOrder,
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
    shippingDifferent: boolean;
    shipping?: {
      firstName: string;
      lastName: string;
      address1: string;
      address2?: string;
      postcode: string;
      city: string;
    };
    paymentMethod: "ideal" | "cod";
    orderNotes?: string;
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

    // Validate shipping cost
    if (typeof body.shippingCost !== "number" || body.shippingCost < 0) {
      return NextResponse.json(
        { success: false, error: "Ongeldige verzendkosten" },
        { status: 400 }
      );
    }

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

    // Build shipping address (same as billing unless different)
    const shippingAddress: WooCommerceAddress =
      customer.shippingDifferent && customer.shipping
        ? {
            first_name: customer.shipping.firstName,
            last_name: customer.shipping.lastName,
            address_1: customer.shipping.address1,
            address_2: customer.shipping.address2 || "",
            city: customer.shipping.city,
            postcode: cleanPostcode(customer.shipping.postcode),
            country: "NL",
          }
        : {
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
    // For COD: set status to "processing" so customer gets confirmation email
    // For iDEAL: set status to "pending" until payment is received
    const order = await createWooCommerceOrder({
      payment_method: paymentMethod,
      payment_method_title: paymentMethodTitle,
      set_paid: false,
      status: customer.paymentMethod === "cod" ? "processing" : "pending",
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
          total: body.shippingCost.toFixed(2),
        },
      ],
      note: customer.orderNotes || "",
    });

    // Build response based on payment method
    // Priority: 1) NEXT_PUBLIC_APP_URL (explicit config)
    //           2) Stable production URL (hardcoded fallback for Mollie webhooks)
    // We use the stable production URL because VERCEL_URL changes per deployment
    const PRODUCTION_URL = "https://webshop-kappa-one.vercel.app";
    const appUrl = process.env.NEXT_PUBLIC_APP_URL || PRODUCTION_URL;

    // Debug logging for webhook URL troubleshooting
    console.log("Checkout - NEXT_PUBLIC_APP_URL:", process.env.NEXT_PUBLIC_APP_URL);
    console.log("Checkout - Using appUrl:", appUrl);

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

      console.log("Checkout - isLocalhost:", isLocalhost, "isEmptyUrl:", isEmptyUrl);
      console.log("Checkout - webhookUrl being sent to Mollie:", webhookUrl);

      const molliePayment = await createMolliePayment({
        amount: {
          value: formatMollieAmount(parseFloat(order.total)),
          currency: "EUR",
        },
        description: `Vuurmeester bestelling #${order.id}`,
        redirectUrl: `${appUrl}/bestelling/succes?order_key=${order.order_key}`,
        webhookUrl,
        method: "ideal",
        metadata: {
          order_id: String(order.id),
          order_key: order.order_key,
        },
      });

      console.log("Checkout - Mollie payment created:", molliePayment.id);

      // Return Mollie checkout URL (direct to Mollie, not WooCommerce)
      const paymentUrl = molliePayment._links.checkout?.href;
      if (!paymentUrl) {
        throw new Error("Geen betaal-URL ontvangen van Mollie");
      }

      return NextResponse.json({
        success: true,
        orderId: order.id,
        orderKey: order.order_key,
        paymentUrl,
        redirectUrl: paymentUrl,
      });
    } else {
      // For COD, redirect directly to success page
      return NextResponse.json({
        success: true,
        orderId: order.id,
        orderKey: order.order_key,
        redirectUrl: `${appUrl}/bestelling/succes?order_key=${order.order_key}`,
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
