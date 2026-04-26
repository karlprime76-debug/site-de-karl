import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function AboutPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  const bioTitle = locale === "en" ? profile.officialBioTitleEn : profile.officialBioTitle;
  const bio = locale === "en" ? profile.officialBioEn : profile.officialBio;

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.aboutTitle}
        subtitle={dict.pages.aboutSubtitle}
      />

      <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6">
        <p className="text-sm font-semibold text-zinc-50">{bioTitle}</p>
        <div className="mt-4 space-y-4 text-sm leading-7 text-zinc-300">
          {bio.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
