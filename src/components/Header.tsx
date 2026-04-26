"use client";

import Link from "next/link";
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
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const setLang = (next: "fr" | "en") => {
    document.cookie = `karl_locale=${next}; path=/; max-age=31536000; samesite=lax`;
    window.location.reload();
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "";
      return;
    }
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

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

          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-50 transition hover:bg-white/10 md:hidden"
          >
            <span className="block h-4 w-4">
              <span
                className={cn(
                  "block h-[2px] w-4 bg-current transition",
                  open ? "translate-y-[6px] rotate-45" : "translate-y-0"
                )}
              />
              <span
                className={cn(
                  "mt-[5px] block h-[2px] w-4 bg-current transition",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "mt-[5px] block h-[2px] w-4 bg-current transition",
                  open ? "-translate-y-[6px] -rotate-45" : "translate-y-0"
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <div className={cn("md:hidden", open ? "" : "pointer-events-none")}>
        <div
          className={cn(
            "fixed inset-0 z-50 transition",
            open ? "opacity-100" : "opacity-0"
          )}
          aria-hidden={!open}
        >
          <div
            className={cn(
              "absolute inset-0 bg-black/70 backdrop-blur-sm transition",
              open ? "opacity-100" : "opacity-0"
            )}
            onClick={() => setOpen(false)}
          />

          <div
            className={cn(
              "absolute right-0 top-0 h-full w-[86%] max-w-sm border-l border-white/10 bg-black/95 shadow-2xl transition duration-300",
              open ? "translate-x-0" : "translate-x-full"
            )}
          >
            <div className="flex h-16 items-center justify-between px-4">
              <p className="text-xs font-semibold tracking-[0.3em] text-zinc-50">
                MENU
              </p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-50 transition hover:bg-white/10"
                aria-label="Close menu"
              >
                <span className="text-lg leading-none">×</span>
              </button>
            </div>

            <div className="px-4 pb-6">
              <div className="flex flex-col gap-3">
                {navItems.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-base font-semibold text-zinc-50"
                  >
                    {labelFor(dict, i.href)}
                  </Link>
                ))}
                <Link
                  href="/booking"
                  onClick={() => setOpen(false)}
                  className="mt-1 inline-flex h-12 items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black"
                >
                  {dict.actions.bookKARL}
                </Link>

                <div className="mt-3 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setLang("fr")}
                    className={cn(
                      "inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-white/10 px-4 text-xs font-semibold transition",
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
                      "inline-flex h-11 flex-1 items-center justify-center rounded-2xl border border-white/10 px-4 text-xs font-semibold transition",
                      locale === "en"
                        ? "bg-white/10 text-zinc-50"
                        : "bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-zinc-50"
                    )}
                  >
                    EN
                  </button>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold text-zinc-200">KARL</p>
                <p className="mt-2 text-sm leading-6 text-zinc-300">
                  {dict.footer.officialLine}
                </p>
              </div>
            </div>
          </div>
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
