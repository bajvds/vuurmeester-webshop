/**
 * Meta Pixel (fbq) browser-side tracking helpers.
 *
 * All prices should be in euros (not cents).
 * eventID is used for deduplication with server-side CAPI events.
 */

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function fbq(...args: unknown[]) {
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq(...args);
  }
}

export function trackMetaViewContent(item: {
  id: number;
  name: string;
  price: number;
}) {
  fbq("track", "ViewContent", {
    content_ids: [String(item.id)],
    content_name: item.name,
    content_type: "product",
    value: item.price,
    currency: "EUR",
  });
}

export function trackMetaAddToCart(item: {
  id: number;
  name: string;
  price: number;
  quantity: number;
}) {
  fbq("track", "AddToCart", {
    content_ids: [String(item.id)],
    content_name: item.name,
    content_type: "product",
    value: item.price * item.quantity,
    currency: "EUR",
    num_items: item.quantity,
  });
}

export function trackMetaInitiateCheckout(params: {
  value: number;
  numItems: number;
  contentIds: string[];
}) {
  fbq("track", "InitiateCheckout", {
    content_ids: params.contentIds,
    content_type: "product",
    value: params.value,
    currency: "EUR",
    num_items: params.numItems,
  });
}

export function trackMetaPurchase(params: {
  orderId: string;
  value: number;
  numItems: number;
  contentIds?: string[];
  eventId?: string;
}) {
  fbq(
    "track",
    "Purchase",
    {
      value: params.value,
      currency: "EUR",
      num_items: params.numItems,
      content_type: "product",
      content_ids: params.contentIds || [params.orderId],
      order_id: params.orderId,
    },
    { eventID: params.eventId }
  );
}
