"use client";

import { useMemo, useState } from "react";

import { useI18n } from "@/i18n/client";

type BookingValues = {
  fullName: string;
  email: string;
  phone: string;
  eventType: string;
  location: string;
  date: string;
  budget: string;
  message: string;
};

const initialValues: BookingValues = {
  fullName: "",
  email: "",
  phone: "",
  eventType: "",
  location: "",
  date: "",
  budget: "",
  message: "",
};

export function BookingForm() {
  const { dict } = useI18n();
  const [values, setValues] = useState<BookingValues>(initialValues);
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return values.fullName.trim() && values.email.trim();
  }, [values]);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm font-semibold text-zinc-50">
          {dict.forms.bookingConfirmTitle}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {dict.forms.bookingConfirmBody}
        </p>
      </div>
    );
  }

  return (
    <form
      className="rounded-2xl border border-white/10 bg-white/5 p-6"
      onSubmit={(e) => {
        e.preventDefault();
        if (!canSubmit) return;
        setSubmitted(true);
      }}
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Field
          value={values.fullName}
          onChange={(v) => setValues((s) => ({ ...s, fullName: v }))}
          placeholder={dict.forms.fullName}
        />
        <Field
          value={values.email}
          onChange={(v) => setValues((s) => ({ ...s, email: v }))}
          placeholder={dict.forms.email}
          inputMode="email"
        />
        <Field
          value={values.phone}
          onChange={(v) => setValues((s) => ({ ...s, phone: v }))}
          placeholder={dict.forms.phoneWhatsapp}
        />
        <Field
          value={values.eventType}
          onChange={(v) => setValues((s) => ({ ...s, eventType: v }))}
          placeholder={dict.forms.eventType}
        />
        <Field
          value={values.location}
          onChange={(v) => setValues((s) => ({ ...s, location: v }))}
          placeholder={dict.forms.cityCountry}
        />
        <Field
          value={values.date}
          onChange={(v) => setValues((s) => ({ ...s, date: v }))}
          placeholder={dict.forms.preferredDate}
        />
        <Field
          value={values.budget}
          onChange={(v) => setValues((s) => ({ ...s, budget: v }))}
          placeholder={dict.forms.estimatedBudget}
        />
      </div>

      <textarea
        value={values.message}
        onChange={(e) => setValues((s) => ({ ...s, message: e.target.value }))}
        placeholder={dict.forms.message}
        rows={5}
        className="mt-3 w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none focus:border-white/25"
      />

      <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          disabled={!canSubmit}
          className="inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          {dict.actions.submitBooking}
        </button>
        <p className="text-xs text-zinc-500">
          {dict.forms.bookingNote}
        </p>
      </div>
    </form>
  );
}

function Field({
  value,
  onChange,
  placeholder,
  inputMode,
}: {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
}) {
  return (
    <input
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
      inputMode={inputMode}
      className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none focus:border-white/25"
    />
  );
}
