import { cookies, headers } from "next/headers";

import { dictionaries, type Dictionary, type Locale } from "@/i18n/dictionaries";

export async function getLocale(): Promise<Locale> {
  const cookieLocale = (await cookies()).get("karl_locale")?.value;
  if (cookieLocale === "fr" || cookieLocale === "en") return cookieLocale;

  const h = await headers();
  const accept = h.get("accept-language") ?? "";

  const normalized = accept.toLowerCase();

  const hasFr = normalized.includes("fr");
  const hasEn = normalized.includes("en");

  if (hasEn && !hasFr) return "en";

  const frIndex = normalized.indexOf("fr");
  const enIndex = normalized.indexOf("en");
  if (hasEn && hasFr && enIndex !== -1 && frIndex !== -1 && enIndex < frIndex) return "en";

  return "fr";
}

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
