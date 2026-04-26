import Image from "next/image";

import type { Video } from "@/data/videos";

export function VideoCard({ video }: { video: Video }) {
  const thumbnail = `https://i.ytimg.com/vi/${video.youtubeId}/hqdefault.jpg`;
  const href = `https://www.youtube.com/watch?v=${video.youtubeId}`;

  return (
    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div className="relative aspect-video">
        <Image
          src={thumbnail}
          alt={video.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-sm font-semibold text-zinc-50">{video.title}</p>
          <p className="mt-1 text-xs text-zinc-300">{video.publishedAt}</p>
        </div>
      </div>
      <div className="p-4">
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="inline-flex h-10 w-full items-center justify-center rounded-full border border-white/10 bg-black/25 px-4 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
        >
          Watch
        </a>
      </div>
    </div>
  );
}
