/**
 * WooCommerce Store API Client for Checkout
 *
 * Uses the modern Store API for checkout operations.
 * This doesn't require API key authentication - it uses cart tokens.
 */

const WOOCOMMERCE_URL = process.env.NEXT_PUBLIC_WOOCOMMERCE_URL;

interface CartItem {
  id: number;
  quantity: number;
}

interface BillingAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  state?: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

interface ShippingAddress {
  first_name: string;
  last_name: string;
  address_1: string;
  address_2?: string;
  city: string;
  state?: string;
  postcode: string;
  country: string;
}

interface CheckoutRequest {
  billing_address: BillingAddress;
  shipping_address: ShippingAddress;
  payment_method: string;
  customer_note?: string;
}

interface StoreApiError {
  code: string;
  message: string;
  data?: {
    status: number;
  };
}

interface CheckoutResponse {
  order_id: number;
  order_key: string;
  status: string;
  payment_result: {
    payment_status: string;
    payment_details: Array<{ key: string; value: string }>;
    redirect_url: string;
  };
}

interface CartResponse {
  items: Array<{
    key: string;
    id: number;
    quantity: number;
    name: string;
    prices: {
      price: string;
      regular_price: string;
    };
  }>;
  totals: {
    total_items: string;
    total_shipping: string;
    total_price: string;
  };
  cart_token?: string;
}

/**
 * Store API checkout session manager
 * Each checkout creates a new cart session on the server
 */
export class StoreApiCheckout {
  private baseUrl: string;
  private cartToken: string | null = null;

  constructor() {
    if (!WOOCOMMERCE_URL) {
      throw new Error("WooCommerce URL is not configured");
    }
    this.baseUrl = WOOCOMMERCE_URL;
  }

  /**
   * Make a Store API request
   */
  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}/?rest_route=/wc/store/v1${endpoint}`;

    const headers: Record<string, string> = {
      "Content-Type": "application/json",
      ...(options.headers as Record<string, string>),
    };

    // Add cart token if we have one
    if (this.cartToken) {
      headers["Cart-Token"] = this.cartToken;
    }

    const response = await fetch(url, {
      ...options,
      headers,
    });

    // Store the cart token from response if provided
    const newCartToken = response.headers.get("Cart-Token");
    if (newCartToken) {
      this.cartToken = newCartToken;
    }

    if (!response.ok) {
      const error: StoreApiError = await response.json();
      console.error("Store API error:", error);
      throw new Error(error.message || "Store API request failed");
    }

    return response.json();
  }

  /**
   * Create a new cart and add items
   */
  async createCart(items: CartItem[]): Promise<CartResponse> {
    // First, clear any existing cart
    try {
      // Get current cart to get cart token
      await this.request<CartResponse>("/cart");
    } catch {
      // Ignore errors, cart might not exist yet
    }

    // Add items one by one
    for (const item of items) {
      await this.request<CartResponse>("/cart/add-item", {
        method: "POST",
        body: JSON.stringify({
          id: item.id,
          quantity: item.quantity,
        }),
      });
    }

    // Return final cart state
    return this.request<CartResponse>("/cart");
  }

  /**
   * Update billing address
   */
  async updateBillingAddress(address: BillingAddress): Promise<void> {
    await this.request("/cart/update-customer", {
      method: "POST",
      body: JSON.stringify({
        billing_address: address,
      }),
    });
  }

  /**
   * Update shipping address
   */
  async updateShippingAddress(address: ShippingAddress): Promise<void> {
    await this.request("/cart/update-customer", {
      method: "POST",
      body: JSON.stringify({
        shipping_address: address,
      }),
    });
  }

  /**
   * Set shipping method
   */
  async selectShippingRate(rateId: string): Promise<void> {
    await this.request("/cart/select-shipping-rate", {
      method: "POST",
      body: JSON.stringify({
        package_id: 0,
        rate_id: rateId,
      }),
    });
  }

  /**
   * Process checkout
   */
  async checkout(data: CheckoutRequest): Promise<CheckoutResponse> {
    return this.request<CheckoutResponse>("/checkout", {
      method: "POST",
      body: JSON.stringify({
        billing_address: data.billing_address,
        shipping_address: data.shipping_address,
        payment_method: data.payment_method,
        customer_note: data.customer_note || "",
        // Required for guest checkout
        create_account: false,
      }),
    });
  }

  /**
   * Get available payment methods
   */
  async getPaymentMethods(): Promise<Array<{ id: string; title: string }>> {
    const cart = await this.request<CartResponse & {
      payment_methods: Array<{ id: string; title: string }>
    }>("/cart");
    return cart.payment_methods || [];
  }
}

/**
 * Process a complete checkout
 */
export async function processStoreApiCheckout(params: {
  items: CartItem[];
  billing: BillingAddress;
  shipping: ShippingAddress;
  paymentMethod: "ideal" | "cod";
  customerNote?: string;
}): Promise<{
  orderId: number;
  orderKey: string;
  redirectUrl: string;
}> {
  const checkout = new StoreApiCheckout();

  // 1. Create cart with items
  console.log("Creating cart with items:", params.items);
  await checkout.createCart(params.items);

  // 2. Update addresses
  console.log("Updating billing address");
  await checkout.updateBillingAddress(params.billing);

  console.log("Updating shipping address");
  await checkout.updateShippingAddress(params.shipping);

  // 3. Map payment method to WooCommerce gateway ID
  const paymentMethodMap: Record<string, string> = {
    ideal: "mollie_wc_gateway_ideal",
    cod: "cod",
  };

  // 4. Process checkout
  console.log("Processing checkout with payment method:", params.paymentMethod);
  const result = await checkout.checkout({
    billing_address: params.billing,
    shipping_address: params.shipping,
    payment_method: paymentMethodMap[params.paymentMethod],
    customer_note: params.customerNote,
  });

  console.log("Checkout result:", result);

  return {
    orderId: result.order_id,
    orderKey: result.order_key,
    redirectUrl: result.payment_result.redirect_url,
  };
}
