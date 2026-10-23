const isEmail = (v: unknown) => typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot filled in: pretend success so bots move on
  if (clean(body.company, 200)) return Response.json({ ok: true });

  const kind = body.kind === "referral" ? "referral" : "contact";
  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const message = clean(body.message, 5000);

  if (!name || !isEmail(email) || !message) {
    return Response.json({ error: "Please complete every field" }, { status: 422 });
  }

  const subject = kind === "referral" ? `New referral from ${name}` : `New enquiry from ${name}`;
  const text = `${subject}\n\nName: ${name}\nEmail: ${email}\n\n${message}`;

  // Delivered through Resend when configured; otherwise logged so local dev still works
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.ENQUIRY_TO ?? "gareth.sharp@sharpresources.co.uk";
  const from = process.env.ENQUIRY_FROM ?? "Sharp Resources <website@sharpresources.co.uk>";

  if (!apiKey) {
    console.info("[enquiry]", text);
    return Response.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject, text }),
  });

  if (!res.ok) {
    console.error("[enquiry] send failed", res.status, await res.text());
    return Response.json({ error: "Could not send" }, { status: 502 });
  }
  return Response.json({ ok: true });
}
