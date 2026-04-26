export type Social = {
  label: string;
  href: string;
};

import { profile } from "@/data/profile";

export const socials: Social[] = [
  { label: "Instagram", href: profile.socials.instagram ?? "#" },
  { label: "TikTok", href: profile.socials.tiktok ?? "#" },
  { label: "Facebook", href: profile.socials.facebook ?? "#" },
  { label: "YouTube", href: profile.socials.youtube ?? "#" },
];
