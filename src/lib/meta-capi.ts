/**
 * Meta Conversions API (CAPI) — server-side event tracking.
 *
 * Sends events directly to Meta's servers, bypassing browser limitations
 * (ad blockers, iOS14+ ATT). Used alongside browser pixel with eventID
 * deduplication.
 *
 * PII fields (email, phone, name, etc.) are SHA256-hashed per Meta's requirements.
 */

import { createHash } from "crypto";

const PIXEL_ID = process.env.META_PIXEL_ID;
const ACCESS_TOKEN = process.env.META_CAPI_ACCESS_TOKEN;
const API_VERSION = "v21.0";

function sha256(value: string): string {
  return createHash("sha256")
    .update(value.trim().toLowerCase())
    .digest("hex");
}

interface UserData {
  email: string;
  phone: string;
  firstName: string;
  lastName: string;
  postcode: string;
  city: string;
  country?: string;
}

interface CustomData {
  value: number;
  currency: string;
  contentIds?: string[];
  contentType?: string;
  numItems?: number;
  orderId?: string;
}

/**
 * Send a server-side event to Meta Conversions API.
 *
 * @param eventName - Standard Meta event name (e.g. "Purchase")
 * @param eventId - Unique ID for deduplication with browser pixel
 * @param userData - Customer PII (will be hashed before sending)
 * @param customData - Event-specific data (value, items, etc.)
 * @param sourceUrl - The URL where the event occurred
 */
export async function sendCapiEvent(params: {
  eventName: string;
  eventId: string;
  userData: UserData;
  customData: CustomData;
  sourceUrl: string;
}): Promise<void> {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    console.warn("Meta CAPI: Missing PIXEL_ID or ACCESS_TOKEN, skipping event");
    return;
  }

  // Normalize Dutch phone number to E.164 format
  let phone = params.userData.phone.replace(/[\s\-()]/g, "");
  if (phone.startsWith("06")) {
    phone = "+31" + phone.slice(1);
  } else if (phone.startsWith("0")) {
    phone = "+31" + phone.slice(1);
  } else if (!phone.startsWith("+")) {
    phone = "+31" + phone;
  }

  const event = {
    event_name: params.eventName,
    event_time: Math.floor(Date.now() / 1000),
    event_id: params.eventId,
    event_source_url: params.sourceUrl,
    action_source: "website",
    user_data: {
      em: [sha256(params.userData.email)],
      ph: [sha256(phone)],
      fn: [sha256(params.userData.firstName)],
      ln: [sha256(params.userData.lastName)],
      zp: [sha256(params.userData.postcode.replace(/\s/g, ""))],
      ct: [sha256(params.userData.city)],
      country: [sha256(params.userData.country || "nl")],
    },
    custom_data: {
      value: params.customData.value,
      currency: params.customData.currency,
      content_ids: params.customData.contentIds,
      content_type: params.customData.contentType || "product",
      num_items: params.customData.numItems,
      order_id: params.customData.orderId,
    },
  };

  try {
    const url = `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events`;
    const response = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        data: [event],
        access_token: ACCESS_TOKEN,
      }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Meta CAPI error:", response.status, errorBody);
    }
  } catch (error) {
    // Don't throw — CAPI failures should never block checkout
    console.error("Meta CAPI request failed:", error);
  }
}
