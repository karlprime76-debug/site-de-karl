import { createClient } from "@supabase/supabase-js";

const WINDOW_MS = 60_000;
const MAX_REQ_PER_WINDOW = 5;
const ipHits = new Map<string, { count: number; resetAt: number }>();

function getEnv(name: string) {
  const v = process.env[name];
  if (!v) throw new Error(`Missing environment variable: ${name}`);
  return v;
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  try {
    const now = Date.now();
    const ip =
      req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      req.headers.get("x-real-ip") ||
      "unknown";

    const hit = ipHits.get(ip);
    if (!hit || hit.resetAt <= now) {
      ipHits.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    } else {
      hit.count += 1;
      if (hit.count > MAX_REQ_PER_WINDOW) {
        return Response.json({ ok: false, error: "rate_limited" }, { status: 429 });
      }
    }

    const supabaseUrl = getEnv("SUPABASE_URL");
    const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const body = (await req.json()) as {
      email?: string;
      country?: string;
      city?: string;
      consent?: boolean;
      website?: string;
    };

    const email = (body.email ?? "").trim();
    const country = (body.country ?? "").trim();
    const city = (body.city ?? "").trim();
    const consent = body.consent === true;
    const website = (body.website ?? "").trim();

    if (website) {
      return Response.json({ ok: true });
    }

    if (!email || !isValidEmail(email)) {
      return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    if (!consent) {
      return Response.json(
        { ok: false, error: "consent_required" },
        { status: 400 },
      );
    }

    const supabase = createClient(supabaseUrl, serviceRoleKey, {
      auth: { persistSession: false },
    });

    const { error } = await supabase.from("fan_signups").insert({
      email,
      country: country || null,
      city: city || null,
    });

    if (error) {
      if ((error as { code?: string }).code === "23505") {
        return Response.json(
          { ok: false, error: "already_subscribed" },
          { status: 409 },
        );
      }
      return Response.json(
        { ok: false, error: "db_error" },
        { status: 500 },
      );
    }

    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false, error: "server_error" }, { status: 500 });
  }
}
