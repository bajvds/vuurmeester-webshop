import { NextRequest, NextResponse } from "next/server";

export interface AddressSuggestion {
  id: string;
  label: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

interface HereAutosuggestItem {
  id: string;
  title: string;
  resultType?: string;
  address?: {
    label?: string;
  };
}

interface HereAutosuggestResponse {
  items: HereAutosuggestItem[];
}

const HERE_API_KEY = process.env.HERE_MAPS_API_KEY;

// Depot location (Middelbeers) for biasing results
const DEPOT_LAT = 51.5159;
const DEPOT_LNG = 5.0967;

// Parse Dutch address label: "Straat 123, 1234 AB Stad, Nederland"
function parseAddressLabel(label: string): {
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
} | null {
  // Match: "Street Name 123" or "Street Name 123a", then ", 1234 AB City"
  const match = label.match(
    /^(.+?)\s+(\d+[a-zA-Z]*)\s*,\s*(\d{4}\s?[A-Z]{2})\s+(.+?)(?:,\s*Nederland)?$/
  );
  if (!match) return null;

  return {
    street: match[1],
    houseNumber: match[2],
    postalCode: match[3],
    city: match[4].split(",")[0].trim(), // Handle "Stad1,Stad2" format
  };
}

export async function GET(request: NextRequest) {
  const q = request.nextUrl.searchParams.get("q");

  if (!q || q.length < 3) {
    return NextResponse.json({ suggestions: [] });
  }

  if (!HERE_API_KEY) {
    return NextResponse.json(
      { error: "Address service not configured" },
      { status: 500 }
    );
  }

  try {
    const params = new URLSearchParams({
      q,
      apiKey: HERE_API_KEY,
      in: "countryCode:NLD",
      lang: "nl",
      limit: "5",
      at: `${DEPOT_LAT},${DEPOT_LNG}`,
    });

    const response = await fetch(
      `https://autosuggest.search.hereapi.com/v1/autosuggest?${params}`,
      { signal: AbortSignal.timeout(3000) }
    );

    if (!response.ok) {
      console.error("HERE API error:", response.status, await response.text());
      return NextResponse.json({ suggestions: [] });
    }

    const data: HereAutosuggestResponse = await response.json();

    const suggestions: AddressSuggestion[] = data.items
      .filter((item) => item.resultType === "houseNumber")
      .map((item) => {
        const label = item.address?.label || item.title;
        const parsed = parseAddressLabel(label);

        return {
          id: item.id,
          label,
          street: parsed?.street || "",
          houseNumber: parsed?.houseNumber || "",
          postalCode: parsed?.postalCode || "",
          city: parsed?.city || "",
        };
      })
      .filter((s) => s.postalCode !== "");

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Address autocomplete error:", error);
    return NextResponse.json({ suggestions: [] });
  }
}
