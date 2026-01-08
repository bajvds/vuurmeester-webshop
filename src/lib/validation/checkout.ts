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

// Optional address schema - allows empty strings when not used
const optionalAddressSchema = z.object({
  firstName: z.string(),
  lastName: z.string(),
  address1: z.string(),
  address2: z.string().optional(),
  postcode: z.string(),
  city: z.string(),
}).optional();

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

  // Shipping (same as billing by default)
  shippingDifferent: z.boolean(),
  shipping: optionalAddressSchema,

  // Payment method
  paymentMethod: z.enum(["ideal", "cod"], {
    message: "Kies een betaalmethode",
  }),

  // Notes
  orderNotes: z.string().max(500, "Maximaal 500 tekens").optional(),

  // Terms acceptance
  acceptTerms: z.boolean().refine((val) => val === true, {
    message: "Je moet akkoord gaan met de algemene voorwaarden",
  }),
}).superRefine((data, ctx) => {
  // Only validate shipping address when shippingDifferent is true
  if (data.shippingDifferent && data.shipping) {
    const s = data.shipping;

    if (!s.firstName || s.firstName.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Voornaam is verplicht",
        path: ["shipping", "firstName"],
      });
    }
    if (!s.lastName || s.lastName.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Achternaam is verplicht",
        path: ["shipping", "lastName"],
      });
    }
    if (!s.address1 || s.address1.length < 5) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Adres is verplicht",
        path: ["shipping", "address1"],
      });
    }
    if (!s.postcode || !postcodeRegex.test(s.postcode)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Ongeldige postcode (bijv. 1234 AB)",
        path: ["shipping", "postcode"],
      });
    }
    if (!s.city || s.city.length < 2) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Plaats is verplicht",
        path: ["shipping", "city"],
      });
    }
  }
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
