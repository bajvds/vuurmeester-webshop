"use client";

import { useEffect } from "react";
import { trackViewItem } from "@/lib/analytics";

export function ProductViewTracker({
  id,
  name,
  price,
}: {
  id: number;
  name: string;
  price: number;
}) {
  useEffect(() => {
    trackViewItem({ id, name, price });
  }, [id, name, price]);

  return null;
}
