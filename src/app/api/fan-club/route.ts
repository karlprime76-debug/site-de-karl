import { createClient } from "@supabase/supabase-js";

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
    const supabaseUrl = getEnv("SUPABASE_URL");
    const serviceRoleKey = getEnv("SUPABASE_SERVICE_ROLE_KEY");

    const body = (await req.json()) as {
      email?: string;
      country?: string;
      city?: string;
    };

    const email = (body.email ?? "").trim();
    const country = (body.country ?? "").trim();
    const city = (body.city ?? "").trim();

    if (!email || !isValidEmail(email)) {
      return Response.json({ ok: false, error: "invalid_email" }, { status: 400 });
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
