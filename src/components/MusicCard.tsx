import Image from "next/image";

import type { Track } from "@/data/music";

export function MusicCard({ track }: { track: Track }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-[16/11]">
        <Image
          src={track.coverUrl}
          alt={track.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-xs font-medium text-zinc-300">{track.kind}</p>
          <p className="mt-1 text-base font-semibold text-zinc-50">{track.title}</p>
          <p className="mt-1 text-xs text-zinc-300">{track.releaseDate}</p>
        </div>
      </div>
      <div className="p-4">
        <div className="flex flex-wrap gap-2">
          {track.platforms.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-9 items-center justify-center rounded-full border border-white/10 bg-black/20 px-4 text-xs font-semibold text-zinc-100 transition hover:bg-white/10"
            >
              {p.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
