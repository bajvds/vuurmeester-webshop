/**
 * Mollie API Client
 *
 * Direct integration with Mollie for iDEAL payments.
 * This bypasses WooCommerce payment pages for a seamless checkout experience.
 */

const MOLLIE_API_KEY = process.env.MOLLIE_API_KEY?.trim();
const MOLLIE_API_URL = "https://api.mollie.com/v2";

// Payment status from Mollie
export type MolliePaymentStatus =
  | "open"
  | "canceled"
  | "pending"
  | "authorized"
  | "expired"
  | "failed"
  | "paid";

export interface MolliePayment {
  id: string;
  status: MolliePaymentStatus;
  amount: {
    value: string;
    currency: string;
  };
  description: string;
  redirectUrl: string;
  webhookUrl: string;
  metadata: {
    order_id: string;
    order_key: string;
  };
  _links: {
    checkout?: {
      href: string;
    };
    self: {
      href: string;
    };
  };
  createdAt: string;
  paidAt?: string;
}

export interface CreatePaymentRequest {
  amount: {
    value: string; // e.g., "100.00"
    currency: string; // e.g., "EUR"
  };
  description: string;
  redirectUrl: string;
  webhookUrl?: string; // Optional - Mollie can't reach localhost
  method?: "ideal" | "bancontact" | "creditcard";
  metadata: {
    order_id: string;
    order_key: string;
  };
}

interface MollieError {
  status: number;
  title: string;
  detail: string;
}

/**
 * Make a request to the Mollie API
 */
async function mollieRequest<T>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> {
  if (!MOLLIE_API_KEY) {
    throw new Error("Mollie API key is not configured");
  }

  const response = await fetch(`${MOLLIE_API_URL}${endpoint}`, {
    ...options,
    headers: {
      Authorization: `Bearer ${MOLLIE_API_KEY}`,
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error: MollieError = await response.json();
    console.error("Mollie API error:", error);
    throw new Error(error.detail || error.title || "Mollie API request failed");
  }

  return response.json();
}

/**
 * Create a new payment in Mollie
 */
export async function createMolliePayment(
  request: CreatePaymentRequest
): Promise<MolliePayment> {
  return mollieRequest<MolliePayment>("/payments", {
    method: "POST",
    body: JSON.stringify(request),
  });
}

/**
 * Get payment status from Mollie
 */
export async function getMolliePayment(
  paymentId: string
): Promise<MolliePayment> {
  return mollieRequest<MolliePayment>(`/payments/${paymentId}`);
}

/**
 * Check if a payment is successful
 */
export function isPaymentSuccessful(status: MolliePaymentStatus): boolean {
  return status === "paid";
}

/**
 * Check if a payment is failed/cancelled
 */
export function isPaymentFailed(status: MolliePaymentStatus): boolean {
  return ["canceled", "expired", "failed"].includes(status);
}

/**
 * Format amount for Mollie (always 2 decimal places)
 */
export function formatMollieAmount(amount: number): string {
  return amount.toFixed(2);
}
