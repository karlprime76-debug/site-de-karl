export type Show = {
  id: string;
  date: string;
  city: string;
  venue: string;
  country?: string;
  status: "Available" | "Sold Out" | "Announced";
  ticketsUrl?: string;
};

export const shows: Show[] = [
  {
    id: "cotonou-2026",
    date: "2026-06-21",
    city: "Cotonou",
    venue: "Main Stage",
    country: "BJ",
    status: "Announced",
    ticketsUrl: "https://example.com",
  },
  {
    id: "paris-2026",
    date: "2026-09-05",
    city: "Paris",
    venue: "Club Night",
    country: "FR",
    status: "Available",
    ticketsUrl: "https://example.com",
  },
];
