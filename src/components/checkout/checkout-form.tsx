"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Loader2, CreditCard, Banknote, AlertCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { AddressAutocomplete } from "@/components/checkout/address-autocomplete";
import { useCart } from "@/store/cart";
import {
  checkoutSchema,
  type CheckoutFormData,
  paymentMethodLabels,
} from "@/lib/validation/checkout";

interface CheckoutFormProps {
  shippingCost: number | null;
  onSuccess: (redirectUrl: string) => void;
}

export function CheckoutForm({ shippingCost, onSuccess }: CheckoutFormProps) {
  const { items, clearCart } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<CheckoutFormData>({
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      email: "",
      phone: "",
      billing: {
        firstName: "",
        lastName: "",
        address1: "",
        address2: "",
        postcode: "",
        city: "",
      },
      paymentMethod: "ideal",
      acceptTerms: false,
    },
  });

  // Handle validation errors
  function onInvalid(errors: Record<string, unknown>) {
    // Build specific error message
    const errorMessages: string[] = [];
    const fieldErrors = errors as Record<string, { message?: string }>;

    for (const [field, error] of Object.entries(fieldErrors)) {
      if (error?.message) {
        errorMessages.push(`${field}: ${error.message}`);
      } else if (typeof error === 'object' && error !== null) {
        // Nested object (like billing.firstName)
        for (const [subField, subError] of Object.entries(error as Record<string, { message?: string }>)) {
          if ((subError as { message?: string })?.message) {
            errorMessages.push(`${field}.${subField}: ${(subError as { message?: string }).message}`);
          }
        }
      }
    }

    if (errorMessages.length > 0) {
      setError(`Validatiefouten:\n${errorMessages.join('\n')}`);
    } else {
      setError("Vul alle verplichte velden correct in.");
    }
  }

  async function onSubmit(data: CheckoutFormData) {
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: data,
          items: items.map((item) => ({
            productId: item.product.id,
            quantity: item.quantity,
          })),
          shippingCost,
        }),
      });

      const result = await response.json();

      if (!result.success) {
        setError(result.error || "Er is een fout opgetreden");
        return;
      }

      // Clear the cart
      clearCart();

      // Redirect to payment or success page
      onSuccess(result.redirectUrl);
    } catch (err) {
      console.error("Checkout error:", err);
      setError("Er is een fout opgetreden bij het plaatsen van je bestelling");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-8">
        {/* Error message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex gap-3">
            <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm font-medium text-red-800">Fout bij bestellen</p>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
        )}

        {/* Contact Info */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Contactgegevens
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mailadres *</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="jouw@email.nl"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefoonnummer *</FormLabel>
                  <FormControl>
                    <Input
                      type="tel"
                      placeholder="06 12345678"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Billing Address */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Factuuradres
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="billing.firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Voornaam *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jan" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing.lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Achternaam *</FormLabel>
                  <FormControl>
                    <Input placeholder="Jansen" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing.address1"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Straat en huisnummer *</FormLabel>
                  <FormControl>
                    <AddressAutocomplete
                      value={field.value}
                      onChange={field.onChange}
                      onAddressSelect={(suggestion) => {
                        form.setValue(
                          "billing.postcode",
                          suggestion.postalCode.toUpperCase()
                        );
                        form.setValue("billing.city", suggestion.city);
                        form.trigger(["billing.postcode", "billing.city"]);
                      }}
                      placeholder="Hoofdstraat 123"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing.address2"
              render={({ field }) => (
                <FormItem className="sm:col-span-2">
                  <FormLabel>Adres toevoeging</FormLabel>
                  <FormControl>
                    <Input placeholder="Appartement, suite, etc." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing.postcode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postcode *</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="1234 AB"
                      {...field}
                      onChange={(e) => {
                        field.onChange(e.target.value.toUpperCase());
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="billing.city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Plaats *</FormLabel>
                  <FormControl>
                    <Input placeholder="Amsterdam" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        {/* Payment Method */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-stone-900 mb-4">
            Betaalmethode
          </h2>
          <FormField
            control={form.control}
            name="paymentMethod"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="grid gap-3"
                  >
                    <div className="flex items-center space-x-3 border border-stone-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors has-[[data-state=checked]]:border-orange-500 has-[[data-state=checked]]:bg-orange-50">
                      <RadioGroupItem value="ideal" id="ideal" />
                      <Label
                        htmlFor="ideal"
                        className="flex-1 cursor-pointer flex items-center gap-3"
                      >
                        <CreditCard className="h-5 w-5 text-stone-500" />
                        <div>
                          <span className="font-medium">{paymentMethodLabels.ideal}</span>
                          <p className="text-sm text-stone-500">
                            Betaal veilig via je eigen bank
                          </p>
                        </div>
                      </Label>
                    </div>
                    <div className="flex items-center space-x-3 border border-stone-200 rounded-lg p-4 cursor-pointer hover:border-orange-300 transition-colors has-[[data-state=checked]]:border-orange-500 has-[[data-state=checked]]:bg-orange-50">
                      <RadioGroupItem value="cod" id="cod" />
                      <Label
                        htmlFor="cod"
                        className="flex-1 cursor-pointer flex items-center gap-3"
                      >
                        <Banknote className="h-5 w-5 text-stone-500" />
                        <div>
                          <span className="font-medium">{paymentMethodLabels.cod}</span>
                          <p className="text-sm text-stone-500">
                            Betaal contant wanneer we bezorgen
                          </p>
                        </div>
                      </Label>
                    </div>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Terms & Submit */}
        <div className="bg-white rounded-xl p-6 shadow-sm space-y-6">
          <FormField
            control={form.control}
            name="acceptTerms"
            render={({ field }) => (
              <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <div className="space-y-1 leading-none">
                  <FormLabel className="cursor-pointer">
                    Ik ga akkoord met de{" "}
                    <Link
                      href="/algemene-voorwaarden"
                      target="_blank"
                      className="text-orange-600 hover:underline"
                    >
                      algemene voorwaarden
                    </Link>{" "}
                    en het{" "}
                    <Link
                      href="/privacybeleid"
                      target="_blank"
                      className="text-orange-600 hover:underline"
                    >
                      privacybeleid
                    </Link>{" "}
                    *
                  </FormLabel>
                  <FormMessage />
                </div>
              </FormItem>
            )}
          />

          <Button
            type="submit"
            disabled={isSubmitting || shippingCost === null}
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-6 text-lg"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                Bestelling plaatsen...
              </>
            ) : shippingCost === null ? (
              "Vul je postcode in voor bezorgkosten"
            ) : (
              "Bestelling plaatsen"
            )}
          </Button>
        </div>
      </form>
    </Form>
  );
}
