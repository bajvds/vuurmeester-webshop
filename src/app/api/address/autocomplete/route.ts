import { NextRequest, NextResponse } from "next/server";

export interface AddressSuggestion {
  id: string;
  label: string;
  street: string;
  houseNumber: string;
  postalCode: string;
  city: string;
}

interface HereAutocompleteItem {
  id: string;
  title: string;
  address?: {
    label?: string;
    street?: string;
    houseNumber?: string;
    postalCode?: string;
    city?: string;
  };
}

interface HereAutocompleteResponse {
  items: HereAutocompleteItem[];
}

const HERE_API_KEY = process.env.HERE_MAPS_API_KEY;

// Depot location (Middelbeers) for biasing results
const DEPOT_LAT = 51.5159;
const DEPOT_LNG = 5.0967;

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
      types: "address",
      at: `${DEPOT_LAT},${DEPOT_LNG}`,
    });

    const response = await fetch(
      `https://autocomplete.search.hereapi.com/v1/autocomplete?${params}`,
      { signal: AbortSignal.timeout(3000) }
    );

    if (!response.ok) {
      console.error("HERE API error:", response.status, await response.text());
      return NextResponse.json({ suggestions: [] });
    }

    const data: HereAutocompleteResponse = await response.json();

    const suggestions: AddressSuggestion[] = data.items
      .filter((item) => item.address?.street && item.address?.postalCode)
      .map((item) => ({
        id: item.id,
        label: item.address?.label || item.title,
        street: item.address?.street || "",
        houseNumber: item.address?.houseNumber || "",
        postalCode: item.address?.postalCode || "",
        city: item.address?.city || "",
      }));

    return NextResponse.json({ suggestions });
  } catch (error) {
    console.error("Address autocomplete error:", error);
    return NextResponse.json({ suggestions: [] });
  }
}
