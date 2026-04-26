import Link from "next/link";

import { profile } from "@/data/profile";
import { socials } from "@/data/socials";
import { getDictionary, getLocale } from "@/i18n/server";

const links = [
  { label: "About", href: "/about" },
  { label: "Fan Club", href: "/fan-club" },
  { label: "Press Kit", href: "/press-kit" },
  { label: "Contact", href: "/contact" },
];

export async function Footer() {
  const locale = await getLocale();
  const dict = getDictionary(locale);

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-wide text-zinc-50">
              {profile.name}
            </p>
            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-400">
              {dict.footer.officialLine}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-semibold text-zinc-200">{dict.footer.pages}</p>
              <div className="mt-3 flex flex-col gap-2">
                {links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-zinc-400 hover:text-zinc-50"
                  >
                    {labelFor(dict, l.href)}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-200">{dict.footer.social}</p>
              <div className="mt-3 flex flex-col gap-2">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-zinc-400 hover:text-zinc-50"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="text-xs font-semibold text-zinc-200">{dict.footer.booking}</p>
              <p className="mt-3 text-sm text-zinc-400">{profile.booking.email}</p>
              <p className="mt-2 text-sm text-zinc-400">
                WhatsApp: {profile.booking.whatsapp}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. {dict.footer.rights}
          </p>
          <p>{dict.footer.builtFor}</p>
        </div>
      </div>
    </footer>
  );
}

function labelFor(
  dict: ReturnType<typeof getDictionary>,
  href: string
) {
  switch (href) {
    case "/about":
      return dict.footer.about;
    case "/fan-club":
      return dict.footer.fanClub;
    case "/press-kit":
      return dict.footer.pressKit;
    case "/contact":
      return dict.footer.contact;
    default:
      return href;
  }
}
