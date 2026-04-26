import type { Show } from "@/data/shows";

export function ShowCard({ show }: { show: Show }) {
  const hasTickets = Boolean(show.ticketsUrl);

  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <p className="text-xs font-medium text-zinc-300">{show.date}</p>
        <p className="mt-1 text-base font-semibold text-zinc-50">
          {show.city} — {show.venue}
        </p>
        <p className="mt-1 text-xs text-zinc-300">
          Status: <span className="text-zinc-100">{show.status}</span>
        </p>
      </div>
      <div className="flex items-center gap-3">
        {hasTickets ? (
          <a
            href={show.ticketsUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-full bg-zinc-50 px-5 text-sm font-semibold text-black transition hover:bg-white"
          >
            Get Tickets
          </a>
        ) : (
          <a
            href="/booking"
            className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-black/25 px-5 text-sm font-semibold text-zinc-50 transition hover:bg-white/10"
          >
            Book Event
          </a>
        )}
      </div>
    </div>
  );
}
