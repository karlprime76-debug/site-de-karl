import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { MobileNav } from "@/components/MobileNav";
import { ServiceWorker } from "@/components/ServiceWorker";
import { profile } from "@/data/profile";
import { I18nProvider } from "@/i18n/client";
import { getDictionary, getLocale } from "@/i18n/server";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();

  const titleDefault = `${profile.name} — Official`;
  const description =
    locale === "en"
      ? "Official artist platform for KARL — music, visuals, shows and booking."
      : "Plateforme officielle de KARL — musique, visuels, shows et booking.";

  return {
    title: {
      default: titleDefault,
      template: `%s — ${profile.name}`,
    },
    description,
    metadataBase: new URL("https://karl.music"),
    alternates: {
      canonical: "/",
      languages: {
        fr: "/",
        en: "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: profile.name,
      title: titleDefault,
      description,
      locale: locale === "fr" ? "fr_FR" : "en_US",
      images: [{ url: "/og.svg", width: 1200, height: 630, alt: titleDefault }],
    },
    twitter: {
      card: "summary_large_image",
      title: titleDefault,
      description,
      images: ["/og.svg"],
    },
    manifest: "/manifest.json",
    applicationName: "KARL Official",
    appleWebApp: {
      capable: true,
      statusBarStyle: "black-translucent",
      title: profile.name,
    },
    icons: {
      icon: [
        { url: "/icons/icon-192.svg", sizes: "192x192", type: "image/svg+xml" },
        { url: "/icons/icon-512.svg", sizes: "512x512", type: "image/svg+xml" },
      ],
      apple: [{ url: "/icons/icon-192.svg" }],
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#050505",
  colorScheme: "dark",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <html
      lang={locale}
      className="h-full antialiased"
    >
      <body className="min-h-full bg-black text-zinc-50">
        <div className="min-h-full bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%),linear-gradient(to_bottom,rgba(0,0,0,0.2),rgba(0,0,0,1))]">
          <I18nProvider value={{ locale, dict }}>
            <ServiceWorker />
            <Header />
            <main className="flex min-h-[calc(100vh-4rem)] flex-col pt-16 pb-16 md:pb-0">
              {children}
            </main>
            <MobileNav />
            <Footer />
          </I18nProvider>
        </div>
      </body>
    </html>
  );
}
