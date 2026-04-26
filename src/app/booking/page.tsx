import { BookingForm } from "@/components/BookingForm";
import { SectionTitle } from "@/components/SectionTitle";
import { profile } from "@/data/profile";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function BookingPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.bookingTitle}
        subtitle={dict.pages.bookingSubtitle}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm font-semibold text-zinc-50">
            {dict.bookingPage.officialBookingTitle}
          </p>
          <p className="mt-2 text-sm leading-6 text-zinc-300">
            {dict.bookingPage.officialBookingBody}
          </p>

          <div className="mt-5 grid gap-3 text-sm text-zinc-300">
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="font-semibold text-zinc-50">
                {dict.bookingPage.whatToIncludeTitle}
              </p>
              <p className="mt-1">{dict.bookingPage.whatToIncludeBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="font-semibold text-zinc-50">
                {dict.bookingPage.responseWindowTitle}
              </p>
              <p className="mt-1">{dict.bookingPage.responseWindowBody}</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-black/20 p-4">
              <p className="font-semibold text-zinc-50">
                {dict.bookingPage.directContactsTitle}
              </p>
              <p className="mt-1">
                {dict.contact.bookingEmail}: {profile.booking.email}
              </p>
              <p className="mt-1">
                {dict.contact.whatsapp}: {profile.booking.whatsapp}
              </p>
            </div>
          </div>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}
