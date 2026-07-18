import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const allowedMatters = new Set([
  "Family Law",
  "Construction Law",
  "Complex Commercial Litigation",
  "Trusts & Estates",
  "Probate or Estate Administration",
  "Business Planning",
  "Other",
]);

function clean(value: unknown, maxLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maxLength) : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

async function sendEmail(payload: Record<string, unknown>) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new Error("Email service is not configured.");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const detail = await response.text();
    console.error("Resend error:", response.status, detail);
    throw new Error("Email delivery failed.");
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const name = clean(body.name, 120);
    const email = clean(body.email, 254).toLowerCase();
    const phone = clean(body.phone, 40);
    const preferred = clean(body.preferred, 30);
    const matter = clean(body.matter, 100);
    const message = clean(body.message, 4000);
    const website = clean(body.website, 200);

    // Hidden honeypot field: bots often fill this, people never see it.
    if (website) return NextResponse.json({ ok: true });

    if (!name || !email || !matter || !message) {
      return NextResponse.json({ error: "Please complete each required field." }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
    }

    if (!allowedMatters.has(matter)) {
      return NextResponse.json({ error: "Please select a valid matter type." }, { status: 400 });
    }

    const safe = {
      name: escapeHtml(name),
      email: escapeHtml(email),
      phone: escapeHtml(phone || "Not provided"),
      preferred: escapeHtml(preferred || "Not specified"),
      matter: escapeHtml(matter),
      message: escapeHtml(message).replaceAll("\n", "<br />"),
    };

    const from = process.env.CONTACT_FROM_EMAIL || "Aronson Law Website <website@contact.aronsonlaw.com>";
    const recipient = process.env.CONTACT_TO_EMAIL || "jba@aronsonlaw.com";

    await sendEmail({
      from,
      to: [recipient],
      reply_to: email,
      subject: `Website consultation request — ${matter} — ${name}`,
      html: `
        <h1>New website consultation request</h1>
        <p><strong>Name:</strong> ${safe.name}</p>
        <p><strong>Email:</strong> ${safe.email}</p>
        <p><strong>Telephone:</strong> ${safe.phone}</p>
        <p><strong>Preferred contact method:</strong> ${safe.preferred}</p>
        <p><strong>Matter type:</strong> ${safe.matter}</p>
        <h2>Brief description</h2>
        <p>${safe.message}</p>
        <hr />
        <p><small>Submitted through aronsonlaw.com. An inquiry does not create an attorney-client relationship.</small></p>
      `,
    });

    // Confirmation is helpful, but its failure should not hide a successfully delivered inquiry.
    try {
      await sendEmail({
        from,
        to: [email],
        reply_to: recipient,
        subject: "We received your inquiry — Aronson Law",
        html: `
          <p>Dear ${safe.name},</p>
          <p>Thank you for contacting Aronson Law. We have received your inquiry and will follow up to discuss the nature of your matter and our availability.</p>
          <p>Please do not send confidential or time-sensitive information until the firm confirms representation.</p>
          <p>Aronson Law, LLC<br />127 N. West Street, Suite D<br />Easton, Maryland 21601<br />(410) 822-5240</p>
          <p><small>This automated confirmation does not create an attorney-client relationship.</small></p>
        `,
      });
    } catch (confirmationError) {
      console.error("Confirmation email failed:", confirmationError);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "We could not send your inquiry. Please call (410) 822-5240 or email jba@aronsonlaw.com." },
      { status: 500 },
    );
  }
}
