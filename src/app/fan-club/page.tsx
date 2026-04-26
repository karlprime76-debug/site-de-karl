import { InstallApp } from "@/components/InstallApp";
import { NewsletterForm } from "@/components/NewsletterForm";
import { SectionTitle } from "@/components/SectionTitle";
import { getDictionary, getLocale } from "@/i18n/server";

export default async function FanClubPage() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <div className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
      <SectionTitle
        title={dict.pages.fanClubTitle}
        subtitle={dict.pages.fanClubSubtitle}
      />

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <NewsletterForm />
        <InstallApp />
      </div>
    </div>
  );
}
