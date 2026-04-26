import { SectionTitle } from "@/components/SectionTitle";
import { ShowCard } from "@/components/ShowCard";
import { shows } from "@/data/shows";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function LivePage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const hasShows = shows.length > 0;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.liveTitle}
        subtitle={dict.pages.liveSubtitle}
      />

      <div className="mt-8 grid gap-4">
        {hasShows ? (
          shows.map((s) => <ShowCard key={s.id} show={s} />)
        ) : (
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm text-zinc-300">
              {dict.pages.liveEmpty}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
