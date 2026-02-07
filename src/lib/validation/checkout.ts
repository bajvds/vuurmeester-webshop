import { z } from "zod";

// Dutch postcode regex: 4 digits + 2 letters (with optional space)
const postcodeRegex = /^[1-9][0-9]{3}\s?[A-Za-z]{2}$/;

// Dutch phone number regex (accepts various formats)
const phoneRegex = /^(\+31|0031|0)[1-9][0-9]{8}$/;

export const addressSchema = z.object({
  firstName: z.string().min(2, "Voornaam is verplicht"),
  lastName: z.string().min(2, "Achternaam is verplicht"),
  address1: z.string().min(5, "Adres is verplicht"),
  address2: z.string().optional(),
  postcode: z.string().regex(postcodeRegex, "Ongeldige postcode (bijv. 1234 AB)"),
  city: z.string().min(2, "Plaats is verplicht"),
});

export const checkoutSchema = z.object({
  // Contact info
  email: z.string().email("Ongeldig e-mailadres"),
  phone: z
    .string()
    .min(10, "Telefoonnummer is verplicht")
    .transform((val) => val.replace(/[\s-]/g, "")) // Remove spaces and dashes
    .refine((val) => phoneRegex.test(val), "Ongeldig telefoonnummer"),

  // Billing address
  billing: addressSchema,

  // Payment method
  paymentMethod: z.enum(["ideal", "cod"], {
    message: "Kies een betaalmethode",
  }),

  // Terms acceptance
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Je moet akkoord gaan met de algemene voorwaarden",
  }),
});

export type CheckoutFormData = z.infer<typeof checkoutSchema>;
export type AddressData = z.infer<typeof addressSchema>;

// Helper to clean postcode for API calls
export function cleanPostcode(postcode: string): string {
  return postcode.replace(/\s/g, "").toUpperCase();
}

// Payment method labels for display
export const paymentMethodLabels = {
  ideal: "iDEAL",
  cod: "Contant bij levering",
} as const;
