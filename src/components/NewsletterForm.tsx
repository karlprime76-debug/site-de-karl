"use client";

import { useMemo, useState } from "react";

import { useI18n } from "@/i18n/client";

export function NewsletterForm() {
  const { dict } = useI18n();
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const canSubmit = useMemo(() => {
    return email.trim().length > 3;
  }, [email]);

  if (submitted) {
    return (
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm font-semibold text-zinc-50">
          {dict.forms.joinConfirmTitle}
        </p>
        <p className="mt-2 text-sm leading-6 text-zinc-300">
          {dict.forms.joinConfirmBody}
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
      <p className="text-sm font-semibold text-zinc-50">
        {dict.forms.fanClubTitle}
      </p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">
        {dict.forms.fanClubBody}
      </p>

      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder={dict.forms.email}
          inputMode="email"
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none focus:border-white/25"
        />
        <input
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder={dict.forms.country}
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none focus:border-white/25"
        />
        <input
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder={dict.forms.city}
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 placeholder:text-zinc-500 outline-none focus:border-white/25"
        />
      </div>

      <button
        type="submit"
        disabled={!canSubmit}
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {dict.actions.join}
      </button>

      <p className="mt-3 text-xs text-zinc-500">
        {dict.forms.noBackendNote}
      </p>
    </form>
  );
}
