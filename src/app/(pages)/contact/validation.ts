import { z } from "zod";

import type { ContactSubmission } from "@/types";

import {
  MAX_PHONE_DIGITS,
  MIN_PHONE_DIGITS,
  QUERY_OPTIONS,
  type ContactField,
  type ContactValues,
  type FieldErrors,
} from "./constants";

const LIMITS = {
  fullName: 100,
  phone: 20,
  email: 200,
  city: 100,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const tooLong = (limit: number) =>
  `Please keep this under ${limit} characters.`;

const contactSchema = z.object({
  fullName: z
    .string()
    .min(1, "Please enter your name.")
    .max(LIMITS.fullName, tooLong(LIMITS.fullName)),
  phone: z
    .string()
    .min(1, "Please enter your phone number.")
    .max(LIMITS.phone, tooLong(LIMITS.phone))
    .refine((value) => {
      const digits = value.replace(/\D/g, "");
      return (
        digits.length >= MIN_PHONE_DIGITS && digits.length <= MAX_PHONE_DIGITS
      );
    }, `Please enter a phone number of ${MIN_PHONE_DIGITS}-${MAX_PHONE_DIGITS} digits.`),
  email: z
    .string()
    .min(1, "Please enter your email address.")
    .max(LIMITS.email, tooLong(LIMITS.email))
    .regex(EMAIL_PATTERN, "Please enter a valid email address."),
  city: z
    .string()
    .min(1, "Please enter your city.")
    .max(LIMITS.city, tooLong(LIMITS.city)),
  message: z.enum(
    QUERY_OPTIONS,
    "Please choose one of the listed query types.",
  ),
});

type ValidationResult =
  | { ok: true; submission: ContactSubmission; values: ContactValues }
  | { ok: false; fieldErrors: FieldErrors; values: ContactValues };

const read = (formData: FormData, field: ContactField): string => {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
};

export const validateContactForm = (formData: FormData): ValidationResult => {
  const values = {
    fullName: read(formData, "fullName"),
    phone: read(formData, "phone"),
    email: read(formData, "email"),
    city: read(formData, "city"),
    message: read(formData, "message"),
  };

  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    const fieldErrors: FieldErrors = {};

    for (const issue of parsed.error.issues) {
      const field = issue.path[0];
      // First message per field wins: the schema runs missing -> malformed.
      if (typeof field === "string" && !(field in fieldErrors)) {
        fieldErrors[field as ContactField] = issue.message;
      }
    }

    return { ok: false, fieldErrors, values };
  }

  return {
    ok: true,
    values,
    submission: {
      fullName: parsed.data.fullName,
      phone: parsed.data.phone,
      email: parsed.data.email,
      city: parsed.data.city,
      query: parsed.data.message,
    },
  };
};
