/**
 * WooCommerce Legacy REST API Client
 *
 * Server-only client for creating orders via the WooCommerce Legacy REST API.
 * Uses the /wc-api/v3/ endpoint with query parameter authentication.
 *
 * IMPORTANT: This file should only be imported in server-side code (API routes).
 * Never import this in client components as it exposes API credentials.
 */

const WOOCOMMERCE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL?.trim();
const CONSUMER_KEY = process.env.WOOCOMMERCE_CONSUMER_KEY?.trim();
const CONSUMER_SECRET = process.env.WOOCOMMERCE_CONSUMER_SECRET?.trim();

// Types for order creation (Legacy API format)
export interface WooCommerceAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  postcode: string;
  country: string;
  email?: string;
  phone?: string;
}

export interface WooCommerceLineItem {
  product_id: number;
  quantity: number;
}

export interface WooCommerceShippingLine {
  method_id: string;
  method_title: string;
  total: string;
}

export interface CreateOrderRequest {
  payment_method: string;
  payment_method_title: string;
  set_paid?: boolean;
  status?: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed";
  billing_address: WooCommerceAddress;
  shipping_address: WooCommerceAddress;
  line_items: WooCommerceLineItem[];
  shipping_lines: WooCommerceShippingLine[];
  note?: string;
}

export interface WooCommerceOrder {
  id: number;
  order_key: string;
  status: string;
  total: string;
  currency: string;
  created_at: string;
  payment_url?: string;
}

export interface WooCommerceError {
  code: string;
  message: string;
  errors?: Array<{ code: string; message: string }>;
}

/**
 * Builds the WooCommerce Legacy API URL with authentication query parameters
 */
function buildApiUrl(endpoint: string): string {
  if (!WOOCOMMERCE_URL) {
    throw new Error("WooCommerce URL is not configured");
  }
  if (!CONSUMER_KEY || !CONSUMER_SECRET) {
    throw new Error("WooCommerce API credentials are not configured");
  }

  // Use Legacy API endpoint: /wc-api/v3/
  return `${WOOCOMMERCE_URL}/wc-api/v3${endpoint}?consumer_key=${CONSUMER_KEY}&consumer_secret=${CONSUMER_SECRET}`;
}

/**
 * Creates an order in WooCommerce via Legacy API
 *
 * @param order - The order data
 * @returns The created order with payment URL
 */
export async function createWooCommerceOrder(
  order: CreateOrderRequest
): Promise<WooCommerceOrder> {
  const url = buildApiUrl("/orders");

  // Legacy API wraps order data in an "order" object
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        payment_method: order.payment_method,
        payment_method_title: order.payment_method_title,
        set_paid: order.set_paid ?? false,
        status: order.status || "pending",
        billing_address: order.billing_address,
        shipping_address: order.shipping_address,
        line_items: order.line_items,
        shipping_lines: order.shipping_lines,
        note: order.note || "",
      },
    }),
  });

  if (!response.ok) {
    let errorMessage = "Order creation failed";
    try {
      const error: WooCommerceError = await response.json();
      console.error("WooCommerce order creation failed:", error);
      errorMessage = error.message || (error.errors?.[0]?.message) || errorMessage;
    } catch {
      console.error("Failed to parse WooCommerce error response");
    }
    throw new Error(errorMessage);
  }

  const result = await response.json();
  const createdOrder: WooCommerceOrder = result.order;

  // For iDEAL payments, construct the payment URL
  // WooCommerce uses the order-pay endpoint for payment
  if (!createdOrder.payment_url && order.payment_method !== "cod") {
    createdOrder.payment_url = `${WOOCOMMERCE_URL}/checkout/order-pay/${createdOrder.id}/?pay_for_order=true&key=${createdOrder.order_key}`;
  }

  return createdOrder;
}

/**
 * Gets an order from WooCommerce by ID
 * Useful for checking payment status after return from Mollie
 */
export async function getWooCommerceOrder(orderId: number): Promise<WooCommerceOrder> {
  const url = buildApiUrl(`/orders/${orderId}`);

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    let errorMessage = "Failed to fetch order";
    try {
      const error: WooCommerceError = await response.json();
      errorMessage = error.message || errorMessage;
    } catch {
      // Ignore parse errors
    }
    throw new Error(errorMessage);
  }

  const result = await response.json();
  return result.order;
}

/**
 * Updates an order status in WooCommerce
 */
export async function updateWooCommerceOrderStatus(
  orderId: number,
  status: "pending" | "processing" | "on-hold" | "completed" | "cancelled" | "refunded" | "failed"
): Promise<WooCommerceOrder> {
  const url = buildApiUrl(`/orders/${orderId}`);

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      order: {
        status,
      },
    }),
  });

  if (!response.ok) {
    let errorMessage = "Failed to update order";
    try {
      const error: WooCommerceError = await response.json();
      errorMessage = error.message || errorMessage;
    } catch {
      // Ignore parse errors
    }
    throw new Error(errorMessage);
  }

  const result = await response.json();
  return result.order;
}

/**
 * Gets an order from WooCommerce by order key
 */
export async function getWooCommerceOrderByKey(orderKey: string): Promise<WooCommerceOrder | null> {
  // Legacy API doesn't have a direct search by key, so we search by filter
  const url = `${buildApiUrl("/orders")}&filter[meta_key]=_order_key&filter[meta_value]=${orderKey}`;

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    let errorMessage = "Failed to fetch order";
    try {
      const error: WooCommerceError = await response.json();
      errorMessage = error.message || errorMessage;
    } catch {
      // Ignore parse errors
    }
    throw new Error(errorMessage);
  }

  const result = await response.json();
  const orders = result.orders || [];
  return orders.find((o: WooCommerceOrder) => o.order_key === orderKey) || null;
}
