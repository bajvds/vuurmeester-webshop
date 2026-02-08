/**
 * GA4 Analytics helper
 *
 * Centralizes all gtag event calls so tracking is consistent
 * and easy to maintain. All prices should be in euros (not cents).
 */

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

function gtag(event: string, params?: Record<string, unknown>) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", event, params);
  }
}

// --- E-commerce events (GA4 standard) ---

export function trackViewItem(item: {
  id: number;
  name: string;
  price: number; // euros
}) {
  gtag("view_item", {
    currency: "EUR",
    value: item.price,
    items: [
      {
        item_id: String(item.id),
        item_name: item.name,
        price: item.price,
      },
    ],
  });
}

export function trackAddToCart(item: {
  id: number;
  name: string;
  price: number; // euros
  quantity: number;
}) {
  gtag("add_to_cart", {
    currency: "EUR",
    value: item.price * item.quantity,
    items: [
      {
        item_id: String(item.id),
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      },
    ],
  });
}

export function trackRemoveFromCart(item: {
  id: number;
  name: string;
  price: number; // euros
  quantity: number;
}) {
  gtag("remove_from_cart", {
    currency: "EUR",
    value: item.price * item.quantity,
    items: [
      {
        item_id: String(item.id),
        item_name: item.name,
        price: item.price,
        quantity: item.quantity,
      },
    ],
  });
}

export function trackBeginCheckout(items: {
  id: number;
  name: string;
  price: number;
  quantity: number;
}[]) {
  const value = items.reduce((sum, i) => sum + i.price * i.quantity, 0);
  gtag("begin_checkout", {
    currency: "EUR",
    value,
    items: items.map((i) => ({
      item_id: String(i.id),
      item_name: i.name,
      price: i.price,
      quantity: i.quantity,
    })),
  });
}

export function trackAddShippingInfo(params: {
  shippingCost: number;
  postcode: string;
}) {
  gtag("add_shipping_info", {
    currency: "EUR",
    value: params.shippingCost,
    shipping_tier: "flat_rate",
    postcode: params.postcode.substring(0, 4), // only digits, no privacy issue
  });
}

export function trackAddPaymentInfo(method: string) {
  gtag("add_payment_info", {
    currency: "EUR",
    payment_type: method,
  });
}

// --- Custom events ---

export function trackShippingCalculator(params: {
  postcode: string;
  cubicMeters: number;
  shippingCost: number | null;
  source: "calculator_page" | "checkout" | "widget";
}) {
  gtag("shipping_calculator", {
    postcode_prefix: params.postcode.substring(0, 4),
    cubic_meters: params.cubicMeters,
    shipping_cost: params.shippingCost,
    delivery_available: params.shippingCost !== null,
    source: params.source,
  });
}
