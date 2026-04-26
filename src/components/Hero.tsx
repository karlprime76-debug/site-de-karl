import Link from "next/link";
import Image from "next/image";

import { getDictionary, getLocale } from "@/i18n/server";

export async function Hero() {
  const locale = await getLocale();
  const dict = getDictionary(locale);
  const heroBackgroundSrc = "/press/photos/hero.jpg";

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={heroBackgroundSrc}
          alt="KARL"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-110 contrast-110"
        />
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.10),transparent_55%),radial-gradient(circle_at_10%_80%,rgba(255,215,0,0.06),transparent_55%),radial-gradient(circle_at_90%_25%,rgba(255,255,255,0.06),transparent_45%),linear-gradient(to_bottom,rgba(0,0,0,0.20),rgba(0,0,0,0.85))]" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-overlay [background-image:repeating-linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06)_1px,transparent_1px,transparent_3px)]" />
      <div className="relative mx-auto flex min-h-[92vh] max-w-6xl flex-col justify-center px-4 pb-20 pt-28 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="mt-6 text-6xl font-semibold tracking-[-0.04em] text-zinc-50 sm:text-7xl lg:text-8xl">
            KARL
          </h1>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/music"
              className="inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-7 text-sm font-semibold text-black transition hover:bg-white"
            >
              {dict.actions.listenNow}
            </Link>
            <Link
              href="/videos"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
            >
              {dict.actions.watchVideos}
            </Link>
            <Link
              href="/booking"
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/15 bg-black/40 px-7 text-sm font-semibold text-zinc-50 transition hover:bg-black/55"
            >
              {dict.actions.bookKARL}
            </Link>
          </div>
        </div>

        <div className="mt-14 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-medium text-zinc-300">Latest Release</p>
            <p className="mt-2 text-sm font-semibold text-zinc-50">Night Drive — Single</p>
            <p className="mt-1 text-xs text-zinc-300">Available on major platforms</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-medium text-zinc-300">Visuals</p>
            <p className="mt-2 text-sm font-semibold text-zinc-50">New clips + sessions</p>
            <p className="mt-1 text-xs text-zinc-300">High-end direction, minimal noise</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
            <p className="text-xs font-medium text-zinc-300">Live</p>
            <p className="mt-2 text-sm font-semibold text-zinc-50">Shows & bookings</p>
            <p className="mt-1 text-xs text-zinc-300">Clubs, festivals, brands</p>
          </div>
        </div>
      </div>
    </section>
  );
}
