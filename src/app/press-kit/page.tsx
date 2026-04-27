import Image from "next/image";
import path from "node:path";
import { readdir } from "node:fs/promises";

import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { getDictionary, getLocale } from "@/i18n/server";

type AssetItem = {
  id: string;
  src: string;
  label: string;
};

function encodePublicPath(p: string) {
  return p
    .split("/")
    .map((part) => encodeURIComponent(part))
    .join("/")
    .replace(/^%2F/, "/");
}

async function readPublicAssets(dirFromPublicRoot: string): Promise<AssetItem[]> {
  try {
    const abs = path.join(process.cwd(), "public", dirFromPublicRoot);
    const entries = await readdir(abs, { withFileTypes: true });

    return entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => /\.(png|jpe?g|webp|svg)$/i.test(name))
      .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
      .map((name) => {
        const base = name.replace(/\.[^.]+$/, "");
        const label = base
          .replace(/[-_]+/g, " ")
          .replace(/\b\w/g, (c) => c.toUpperCase());

        return {
          id: base,
          src: encodePublicPath(`/${dirFromPublicRoot}/${name}`),
          label,
        };
      });
  } catch {
    return [];
  }
}

export default async function PressKitPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  const [pressPhotos, logos] = await Promise.all([
    readPublicAssets("press/photos"),
    readPublicAssets("press/logos"),
  ]);

  const pk = {
    title: locale === "en" ? profile.pressKitTitleEn : profile.pressKitTitle,
    presentationTitle:
      locale === "en"
        ? profile.pressKitPresentationTitleEn
        : profile.pressKitPresentationTitle,
    presentation:
      locale === "en" ? profile.pressKitPresentationEn : profile.pressKitPresentation,
    officialBioTitle:
      locale === "en" ? profile.officialBioTitleEn : profile.officialBioTitle,
    officialBio: locale === "en" ? profile.officialBioEn : profile.officialBio,
    mediaBioTitle: dict.pressKit.shortMediaBioTitle,
    mediaBio: locale === "en" ? profile.mediaBioEn : profile.mediaBio,
    veryShortBioTitle: dict.pressKit.veryShortBioTitle,
    veryShortBio: locale === "en" ? profile.veryShortBioEn : profile.veryShortBio,
    keyInfoTitle: locale === "en" ? profile.keyInfoTitleEn : profile.keyInfoTitle,
    keyInfo: locale === "en" ? profile.keyInfoEn : profile.keyInfo,
    musicalUniverseTitle:
      locale === "en"
        ? profile.musicalUniverseTitleEn
        : profile.musicalUniverseTitle,
    musicalUniverse:
      locale === "en" ? profile.musicalUniverseEn : profile.musicalUniverse,
    albumTitle: locale === "en" ? profile.albumSectionTitleEn : profile.albumSectionTitle,
    album: locale === "en" ? profile.albumSectionEn : profile.albumSection,
    performanceTitle:
      locale === "en" ? profile.performanceTitleEn : profile.performanceTitle,
    performance: locale === "en" ? profile.performanceEn : profile.performance,
    forMediaTitle: locale === "en" ? profile.forMediaTitleEn : profile.forMediaTitle,
    forMedia: locale === "en" ? profile.forMediaEn : profile.forMedia,
    forPromotersTitle:
      locale === "en" ? profile.forPromotersTitleEn : profile.forPromotersTitle,
    forPromoters: locale === "en" ? profile.forPromotersEn : profile.forPromoters,
    pressElementsTitle:
      locale === "en" ? profile.pressElementsTitleEn : profile.pressElementsTitle,
    pressElements: locale === "en" ? profile.pressElementsEn : profile.pressElements,
  };

  const kit = [
    {
      key: "officialBio",
      title: dict.pressKit.kitOfficialBioTitle,
      description: dict.pressKit.kitOfficialBioDesc,
      action: dict.pressKit.preview,
    },
    {
      key: "pressPhotos",
      title: dict.pressKit.kitPressPhotosTitle,
      description: dict.pressKit.kitPressPhotosDesc,
      action: dict.pressKit.addFiles,
    },
    {
      key: "logos",
      title: dict.pressKit.kitLogosTitle,
      description: dict.pressKit.kitLogosDesc,
      action: dict.pressKit.addFiles,
    },
    {
      key: "musicLinks",
      title: dict.pressKit.kitMusicLinksTitle,
      description: dict.pressKit.kitMusicLinksDesc,
      action: dict.pressKit.open,
    },
    {
      key: "booking",
      title: dict.pressKit.kitBookingTitle,
      description: dict.pressKit.kitBookingDesc,
      action: dict.pressKit.contact,
    },
  ] as const;

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.pressKitTitle}
        subtitle={dict.pages.pressKitSubtitle}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 lg:col-span-1">
          <p className="text-sm font-semibold text-zinc-50">{dict.pressKit.artist}</p>
          <p className="mt-2 text-2xl font-semibold tracking-tight text-zinc-50">
            {profile.name}
          </p>
          <p className="mt-3 text-sm leading-6 text-zinc-300">
            {locale === "en" ? profile.locationLineEn : profile.locationLine}
          </p>

          <div className="mt-6 grid gap-3">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold text-zinc-200">{dict.pressKit.booking}</p>
              <p className="mt-2 text-sm text-zinc-300">{profile.booking.email}</p>
              <p className="mt-1 text-sm text-zinc-300">
                WhatsApp: {profile.booking.whatsapp}
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="text-xs font-semibold text-zinc-200">
                {dict.pressKit.officialLinks}
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {profile.platforms.spotify ? (
                  <a
                    href={profile.platforms.spotify}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-black/25 px-4 text-xs font-semibold text-zinc-50 transition hover:bg-white/10"
                  >
                    Spotify
                  </a>
                ) : null}
                {profile.platforms.appleMusic ? (
                  <a
                    href={profile.platforms.appleMusic}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-black/25 px-4 text-xs font-semibold text-zinc-50 transition hover:bg-white/10"
                  >
                    Apple Music
                  </a>
                ) : null}
                {profile.platforms.youtube ? (
                  <a
                    href={profile.platforms.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-black/25 px-4 text-xs font-semibold text-zinc-50 transition hover:bg-white/10"
                  >
                    YouTube
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="grid gap-4 md:grid-cols-2">
            {kit.map((item) => (
              <div
                key={item.key}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <p className="text-sm font-semibold text-zinc-50">{item.title}</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {item.description}
                </p>

                {item.key === "musicLinks" ? (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {profile.platforms.spotify ? (
                      <a
                        href={profile.platforms.spotify}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
                      >
                        Spotify
                      </a>
                    ) : null}
                    {profile.platforms.appleMusic ? (
                      <a
                        href={profile.platforms.appleMusic}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
                      >
                        Apple Music
                      </a>
                    ) : null}
                    {profile.platforms.youtube ? (
                      <a
                        href={profile.platforms.youtube}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
                      >
                        YouTube
                      </a>
                    ) : null}
                  </div>
                ) : item.key === "pressPhotos" ? (
                  <div className="mt-4 grid gap-3">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {pressPhotos.map((p) => (
                        <a
                          key={p.id}
                          href={p.src}
                          target="_blank"
                          rel="noreferrer"
                          className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/25"
                          aria-label={p.label}
                          title={p.label}
                        >
                          <div className="relative aspect-[4/5]">
                            <Image
                              src={p.src}
                              alt={p.label}
                              fill
                              sizes="(max-width: 768px) 50vw, 200px"
                              className="object-cover transition duration-500 group-hover:scale-[1.03]"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : item.key === "logos" ? (
                  <div className="mt-4 grid gap-3">
                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                      {logos.map((l) => (
                        <a
                          key={l.id}
                          href={l.src}
                          target="_blank"
                          rel="noreferrer"
                          className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/25"
                          aria-label={l.label}
                          title={l.label}
                        >
                          <div className="relative aspect-[4/3]">
                            <Image
                              src={l.src}
                              alt={l.label}
                              fill
                              sizes="(max-width: 768px) 50vw, 200px"
                              className="object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
                            />
                          </div>
                        </a>
                      ))}
                    </div>
                  </div>
                ) : item.key === "booking" ? (
                  <div className="mt-4">
                    <a
                      href="/booking"
                      className="inline-flex h-10 items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-black transition hover:bg-white"
                    >
                      {dict.actions.bookKARL}
                    </a>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="mt-4 inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
                  >
                    {item.action}
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-zinc-50">{pk.title}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {locale === "en" ? profile.locationLineEn : profile.locationLine}
            </p>

            <div className="mt-6 grid gap-4">
              <SectionBlock title={pk.presentationTitle} paragraphs={pk.presentation} />
              <SectionBlock title={pk.officialBioTitle} paragraphs={pk.officialBio} />
              <SectionBlock title={pk.mediaBioTitle} paragraphs={[pk.mediaBio]} />
              <SectionBlock title={pk.veryShortBioTitle} paragraphs={[pk.veryShortBio]} />

              <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
                <p className="text-sm font-semibold text-zinc-50">{pk.keyInfoTitle}</p>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {pk.keyInfo.map((item) => (
                    <div
                      key={`${item.label}:${item.value}`}
                      className="rounded-xl border border-white/10 bg-black/25 p-4"
                    >
                      <p className="text-xs font-semibold text-zinc-200">{item.label}</p>
                      <p className="mt-1 text-sm text-zinc-300">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <SectionBlock title={pk.musicalUniverseTitle} paragraphs={pk.musicalUniverse} />
              <SectionBlock title={pk.albumTitle} paragraphs={pk.album} />
              <SectionBlock title={pk.performanceTitle} paragraphs={pk.performance} />

              <ListBlock title={pk.forMediaTitle} items={pk.forMedia} />
              <ListBlock title={pk.forPromotersTitle} items={pk.forPromoters} />
              <ListBlock title={pk.pressElementsTitle} items={pk.pressElements} />
            </div>
          </div>

          <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-semibold text-zinc-50">
              {dict.pressKit.howToUseTitle}
            </p>
            <p className="mt-2 text-sm leading-6 text-zinc-300">
              {dict.pressKit.howToUseBody}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionBlock({
  title,
  paragraphs,
}: {
  title: string;
  paragraphs: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-sm font-semibold text-zinc-50">{title}</p>
      <div className="mt-3 grid gap-3">
        {paragraphs.map((p) => (
          <p key={p} className="text-sm leading-6 text-zinc-300">
            {p}
          </p>
        ))}
      </div>
    </div>
  );
}

function ListBlock({
  title,
  items,
}: {
  title: string;
  items: string[];
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
      <p className="text-sm font-semibold text-zinc-50">{title}</p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2">
        {items.map((i) => (
          <div key={i} className="rounded-xl border border-white/10 bg-black/25 p-4">
            <p className="text-sm text-zinc-300">{i}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
