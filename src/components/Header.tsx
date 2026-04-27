"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

import { useI18n } from "@/i18n/client";
import { cn } from "@/lib/utils";

const nav = [
  { label: "Home", href: "/" },
  { label: "Music", href: "/music" },
  { label: "Videos", href: "/videos" },
  { label: "Booking", href: "/booking" },
];

export function Header() {
  const { dict, locale } = useI18n();
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  const setLang = (next: "fr" | "en") => {
    const secure = window.location.protocol === "https:" ? "; Secure" : "";
    document.cookie = `karl_locale=${next}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`;
    router.replace(pathname || "/");
    router.refresh();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navItems = useMemo(() => nav, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition",
        scrolled
          ? "border-b border-white/10 bg-black/80 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="text-sm font-semibold tracking-[0.3em] text-zinc-50"
        >
          KARL
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navItems
            .filter((i) => i.href !== "/")
            .map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-zinc-300 transition hover:text-zinc-50"
              >
                {labelFor(dict, i.href)}
              </Link>
            ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden items-center gap-2 md:flex">
            <button
              type="button"
              onClick={() => setLang("fr")}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-semibold transition",
                locale === "fr"
                  ? "bg-white/10 text-zinc-50"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50"
              )}
            >
              FR
            </button>
            <button
              type="button"
              onClick={() => setLang("en")}
              className={cn(
                "inline-flex h-10 items-center justify-center rounded-full border border-white/10 px-4 text-xs font-semibold transition",
                locale === "en"
                  ? "bg-white/10 text-zinc-50"
                  : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50"
              )}
            >
              EN
            </button>
          </div>

          <Link
            href="/booking"
            className="hidden h-10 items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-black transition hover:bg-white md:inline-flex"
          >
            {dict.actions.bookKARL}
          </Link>
        </div>
      </div>
    </header>
  );
}

function labelFor(dict: ReturnType<typeof useI18n>["dict"], href: string) {
  switch (href) {
    case "/":
      return dict.nav.home;
    case "/music":
      return dict.nav.music;
    case "/videos":
      return dict.nav.videos;
    case "/booking":
      return dict.nav.booking;
    default:
      return href;
  }
}
