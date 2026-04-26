import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function ContactPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.contactTitle}
        subtitle={dict.pages.contactSubtitle}
      />

      <div className="mt-8 grid gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-zinc-50">
            {dict.contact.bookingEmail}
          </p>
          <p className="mt-2 text-sm text-zinc-300">{profile.booking.email}</p>

          <p className="mt-6 text-sm font-semibold text-zinc-50">
            {dict.contact.whatsapp}
          </p>
          <p className="mt-2 text-sm text-zinc-300">{profile.booking.whatsapp}</p>

          <p className="mt-6 text-xs text-zinc-500">
            {dict.contact.fastProcessingNote}
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-zinc-50">{dict.contact.social}</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
