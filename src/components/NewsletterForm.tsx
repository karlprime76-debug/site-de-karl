"use client";

import { useMemo, useState } from "react";

import { City, Country } from "country-state-city";

import { useI18n } from "@/i18n/client";

export function NewsletterForm() {
  const { dict } = useI18n();
  const [email, setEmail] = useState("");
  const [countryIso, setCountryIso] = useState("");
  const [cityName, setCityName] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const countries = useMemo(() => Country.getAllCountries(), []);
  const selectedCountry = useMemo(() => {
    return countries.find((c) => c.isoCode === countryIso) ?? null;
  }, [countries, countryIso]);
  const cities = useMemo(() => {
    if (!countryIso) return [];
    return City.getCitiesOfCountry(countryIso) ?? [];
  }, [countryIso]);

  const canSubmit = useMemo(() => {
    return email.trim().length > 3 && consent;
  }, [email, consent]);

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
      onSubmit={async (e) => {
        e.preventDefault();
        if (!canSubmit) return;

        setSubmitting(true);
        setError(null);

        try {
          const res = await fetch("/api/fan-club", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify({
              email,
              country: selectedCountry?.name ?? "",
              city: cityName,
              consent,
              website,
            }),
          });

          if (!res.ok) {
            const body = (await res.json().catch(() => null)) as
              | { error?: string }
              | null;
            if (body?.error === "invalid_email") {
              setError(dict.forms.joinErrorInvalidEmail);
            } else if (body?.error === "consent_required") {
              setError(dict.forms.joinErrorConsentRequired);
            } else if (body?.error === "already_subscribed") {
              setError(dict.forms.joinErrorAlreadySubscribed);
            } else if (body?.error === "rate_limited") {
              setError(dict.forms.joinErrorRateLimited);
            } else {
              setError(dict.forms.joinErrorGeneric);
            }
            return;
          }

          setSubmitted(true);
        } catch {
          setError(dict.forms.joinErrorGeneric);
        } finally {
          setSubmitting(false);
        }
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
        <select
          value={countryIso}
          onChange={(e) => {
            setCountryIso(e.target.value);
            setCityName("");
          }}
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 outline-none focus:border-white/25"
        >
          <option value="" disabled>
            {dict.forms.country}
          </option>
          {countries.map((c) => (
            <option key={c.isoCode} value={c.isoCode}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          value={cityName}
          onChange={(e) => setCityName(e.target.value)}
          disabled={!countryIso}
          className="h-11 w-full rounded-xl border border-white/10 bg-black/30 px-4 text-sm text-zinc-50 outline-none focus:border-white/25 disabled:opacity-50"
        >
          <option value="" disabled>
            {dict.forms.city}
          </option>
          {cities.map((c) => (
            <option key={`${c.name}:${c.stateCode ?? ""}`} value={c.name}>
              {c.name}
            </option>
          ))}
        </select>
      </div>

      <input
        value={website}
        onChange={(e) => setWebsite(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      <label className="mt-4 flex items-start gap-3 text-xs leading-5 text-zinc-300">
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          className="mt-[2px] h-4 w-4 rounded border border-white/20 bg-black/30"
        />
        <span>{dict.forms.consentLabel}</span>
      </label>

      <button
        type="submit"
        disabled={!canSubmit || submitting}
        className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        {submitting ? dict.forms.submitting : dict.actions.join}
      </button>

      {error ? (
        <p className="mt-3 text-xs text-red-200">{error}</p>
      ) : null}
    </form>
  );
}
