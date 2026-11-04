"use client";

import { useActionState } from "react";
import type { FormEvent } from "react";

import { Recaptcha } from "@/components/shared/Recaptcha";
import { GUTTER } from "@/constants";
import { cn } from "@/lib";

import { submitContactForm } from "../actions";
import {
  CONTACT_FORM_INITIAL_STATE,
  MAX_PHONE_DIGITS,
  QUERY_OPTIONS,
} from "../constants";

const LABEL = "mb-2 block font-dm-sans text-[13px] font-bold text-white";

const FIELD =
  "w-full rounded-sm border border-white/15 bg-white/8 px-4 py-3 font-dm-sans text-[15px] text-white placeholder:text-white/40 outline-none focus-visible:ring-2 focus-visible:ring-primary-light";

const Required = () => (
  <span aria-hidden="true" className="text-[#ff8080]">
    *
  </span>
);

/** Counts digits, not characters: "+91 98765 43210" is 12 digits but 15
 *  characters, so maxLength would reject a valid number. */
const capPhoneDigits = (event: FormEvent<HTMLInputElement>) => {
  const input = event.currentTarget;
  let digits = 0;

  for (let index = 0; index < input.value.length; index += 1) {
    if (/\d/.test(input.value.charAt(index))) {
      digits += 1;

      if (digits > MAX_PHONE_DIGITS) {
        input.value = input.value.slice(0, index);
        return;
      }
    }
  }
};

const FieldError = ({ message }: { message?: string }) =>
  message ? (
    <p className="font-dm-sans mt-1.5 text-[13px] text-[#ff8080]">{message}</p>
  ) : null;

const AppointmentFormSection = () => {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    CONTACT_FORM_INITIAL_STATE,
  );

  return (
    <section className={`bg-[#e0f2f9] pt-4 pb-16 lg:pb-24 ${GUTTER}`}>
      <form
        action={formAction}
        className="mx-auto mt-9 max-w-4xl rounded-2xl border border-[#002238] bg-[linear-gradient(135deg,rgb(0_62_104),rgb(0_26_44))] p-7 sm:p-10"
      >
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div>
            <label htmlFor="contact-name" className={LABEL}>
              Name <Required />
            </label>
            <input
              id="contact-name"
              name="fullName"
              type="text"
              required
              placeholder="Full Name"
              autoComplete="name"
              defaultValue={state.values?.fullName ?? ""}
              aria-invalid={state.fieldErrors?.fullName ? true : undefined}
              className={FIELD}
            />
            <FieldError message={state.fieldErrors?.fullName} />
          </div>

          <div>
            <label htmlFor="contact-phone" className={LABEL}>
              Phone <Required />
            </label>
            <input
              id="contact-phone"
              name="phone"
              type="tel"
              required
              placeholder="Phone Number"
              autoComplete="tel"
              onInput={capPhoneDigits}
              defaultValue={state.values?.phone ?? ""}
              aria-invalid={state.fieldErrors?.phone ? true : undefined}
              className={FIELD}
            />
            <FieldError message={state.fieldErrors?.phone} />
          </div>

          <div>
            <label htmlFor="contact-email" className={LABEL}>
              Email <Required />
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              placeholder="Email Address"
              autoComplete="email"
              defaultValue={state.values?.email ?? ""}
              aria-invalid={state.fieldErrors?.email ? true : undefined}
              className={FIELD}
            />
            <FieldError message={state.fieldErrors?.email} />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div>
            <label htmlFor="contact-city" className={LABEL}>
              City <Required />
            </label>
            <input
              id="contact-city"
              name="city"
              type="text"
              required
              placeholder="City"
              autoComplete="address-level2"
              defaultValue={state.values?.city ?? ""}
              aria-invalid={state.fieldErrors?.city ? true : undefined}
              className={FIELD}
            />
            <FieldError message={state.fieldErrors?.city} />
          </div>

          <div>
            <label htmlFor="contact-query" className={LABEL}>
              Query
            </label>
            {/* The select's white text would otherwise cascade into the
                native option list, making it unreadable on its own white
                background until the browser's hover highlight kicks in. */}
            {/* Keyed so a rejection remounts it: React applies a select's
                defaultValue on mount only, so the choice would silently
                revert to the first option. */}
            <select
              key={state.values?.message ?? QUERY_OPTIONS[0]}
              id="contact-query"
              name="message"
              defaultValue={state.values?.message ?? QUERY_OPTIONS[0]}
              className={cn(FIELD, "[&>option]:text-black")}
            >
              {QUERY_OPTIONS.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <FieldError message={state.fieldErrors?.message} />
          </div>
        </div>

        <div className="mt-6">
          <span className={LABEL}>
            Verification <Required />
          </span>
          <Recaptcha resetOn={state} />
          <FieldError message={state.fieldErrors?.recaptcha} />
        </div>

        {state.status === "success" && (
          <p
            role="status"
            className="font-dm-sans mt-6 text-[14px] text-[#7fd8a4]"
          >
            Thanks — we&apos;ve received your request and will be in touch
            shortly.
          </p>
        )}

        {state.status === "error" && !state.fieldErrors && (
          <p
            role="alert"
            className="font-dm-sans mt-6 text-[14px] text-[#ff8080]"
          >
            Something went wrong on our end and your request wasn&apos;t sent.
            Please try again, or call us on the number above.
          </p>
        )}

        <div className="mt-8">
          <button
            type="submit"
            disabled={pending}
            className="font-dm-sans cursor-pointer rounded-sm bg-primary-light px-8 py-3 text-sm font-bold tracking-[0.04em] text-secondary hover:bg-primary active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Sending…" : "Send"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AppointmentFormSection;
