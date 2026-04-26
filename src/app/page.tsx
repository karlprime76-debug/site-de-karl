import Link from "next/link";

import { Hero } from "@/components/Hero";
import { MusicCard } from "@/components/MusicCard";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionTitle } from "@/components/SectionTitle";
import { VideoCard } from "@/components/VideoCard";
import { music } from "@/data/music";
import { profile } from "@/data/profile";
import { videos } from "@/data/videos";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function Home() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const shortBio = locale === "en" ? profile.shortBioEn : profile.shortBio;

  return (
    <div className="flex flex-1 flex-col">
      <Hero />

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle
            title={dict.home.latestReleaseTitle}
            subtitle={dict.home.latestReleaseSubtitle}
          />
          <Link
            href="/music"
            className="hidden h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10 sm:inline-flex"
          >
            {dict.actions.viewAll}
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {music.slice(0, 3).map((t) => (
            <MusicCard key={t.id} track={t} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <SectionTitle
            title={dict.home.recentVideosTitle}
            subtitle={dict.home.recentVideosSubtitle}
          />
          <Link
            href="/videos"
            className="hidden h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10 sm:inline-flex"
          >
            {dict.actions.watchAll}
          </Link>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {videos.slice(0, 3).map((v) => (
            <VideoCard key={v.id} video={v} />
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        <SectionTitle
          title={dict.home.fanClubTitle}
          subtitle={dict.home.fanClubSubtitle}
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <NewsletterForm />
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-zinc-50">
              {dict.home.bookingCardTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {dict.home.bookingCardBody}
            </p>
            <Link
              href="/booking"
              className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black transition hover:bg-white sm:w-auto"
            >
              {dict.actions.bookKARL}
            </Link>
            <p className="mt-3 text-xs text-zinc-500">
              {dict.home.bookingCardFoot}
            </p>
            <p className="mt-3 text-xs text-zinc-400">{shortBio}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
