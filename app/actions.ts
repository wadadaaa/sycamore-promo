"use server";

import { z } from "zod";
import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";

const LeadSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  city: z.string().optional(),
  requestType: z.enum(["permit","form4","rezoning","sanitary"]),
  message: z.string().max(1000).optional(),
  token: z.string().optional(),
});

export async function submitLead(formData: FormData) {
  const raw = Object.fromEntries(formData.entries());
  const parsed = LeadSchema.safeParse(raw);
  if (!parsed.success) {
    return { ok: false, errors: parsed.error.flatten().fieldErrors };
  }

  const token = parsed.data.token;
  const human = await verifyTurnstile(token);
  if (!human) {
    return { ok: false, errors: { token: ["captcha failed"] } };
  }

  // Email notification (optional)
  if (process.env.RESEND_API_KEY) {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "leads@sycamore.co.il",
      to: [process.env.LEADS_TO || "owner@example.com"],
      subject: `Lead from ${parsed.data.name} — ${parsed.data.requestType}`,
      text: JSON.stringify(parsed.data, null, 2),
    });
  }

  // TODO: save to DB/CRM here
  return { ok: true };
}
