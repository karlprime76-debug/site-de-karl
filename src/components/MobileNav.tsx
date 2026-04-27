"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

const items = [
  { href: "/", key: "home" as const },
  { href: "/music", key: "music" as const },
  { href: "/videos", key: "videos" as const },
  { href: "/booking", key: "booking" as const },
];

export function MobileNav() {
  const { dict } = useI18n();
  const pathname = usePathname();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-black/80 backdrop-blur md:hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-4 gap-1 px-3 py-2">
        {items.map((i) => {
          const active = pathname === i.href;
          const label =
            i.key === "home"
              ? dict.nav.home
              : i.key === "music"
                ? dict.nav.music
                : i.key === "videos"
                  ? dict.nav.videos
                  : dict.nav.booking;

          return (
            <Link
              key={i.href}
              href={i.href}
              className={cn(
                "flex h-11 items-center justify-center rounded-2xl px-2 text-xs font-semibold transition",
                active
                  ? "bg-white/10 text-zinc-50"
                  : "text-zinc-300 hover:bg-white/5 hover:text-zinc-50",
              )}
            >
              {label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
