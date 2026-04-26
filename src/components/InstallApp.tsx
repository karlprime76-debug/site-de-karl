"use client";

import { useEffect, useState } from "react";

import { useI18n } from "@/i18n/client";

type BeforeInstallPromptEvent = Event & {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: "accepted" | "dismissed"; platform: string }>;
};

export function InstallApp() {
  const { dict } = useI18n();
  const [deferred, setDeferred] = useState<BeforeInstallPromptEvent | null>(null);
  const [isStandalone, setIsStandalone] = useState(false);
  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const standalone =
      window.matchMedia?.("(display-mode: standalone)")?.matches ||
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window.navigator as any).standalone === true;
    setIsStandalone(Boolean(standalone));

    const ua = window.navigator.userAgent.toLowerCase();
    setIsIOS(/iphone|ipad|ipod/.test(ua));

    const handler = (e: Event) => {
      e.preventDefault();
      setDeferred(e as BeforeInstallPromptEvent);
    };

    window.addEventListener("beforeinstallprompt", handler);
    return () => window.removeEventListener("beforeinstallprompt", handler);
  }, []);

  if (isStandalone) return null;

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
      <p className="text-sm font-semibold text-zinc-50">{dict.install.title}</p>
      <p className="mt-2 text-sm leading-6 text-zinc-300">
        {dict.install.body}
      </p>

      {deferred ? (
        <button
          type="button"
          onClick={async () => {
            await deferred.prompt();
            await deferred.userChoice;
            setDeferred(null);
          }}
          className="mt-4 inline-flex h-11 w-full items-center justify-center rounded-full bg-zinc-50 px-6 text-sm font-semibold text-black transition hover:bg-white sm:w-auto"
        >
          {dict.actions.installApp}
        </button>
      ) : isIOS ? (
        <p className="mt-4 text-sm text-zinc-300">
          {dict.install.iosHint}
        </p>
      ) : (
        <p className="mt-4 text-sm text-zinc-300">
          {dict.install.notReady}
        </p>
      )}
    </div>
  );
}
