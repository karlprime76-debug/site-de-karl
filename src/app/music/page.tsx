import { MusicCard } from "@/components/MusicCard";
import { SectionTitle } from "@/components/SectionTitle";
import { music } from "@/data/music";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function MusicPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.musicTitle}
        subtitle={dict.pages.musicSubtitle}
      />

      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {music.map((t) => (
          <MusicCard key={t.id} track={t} />
        ))}
      </div>
    </div>
  );
}
