"use client";
import { useState } from "react";
import { submitLead } from "@/app/actions";

export default function LeadForm() {
  const [state, setState] = useState<{ok?:boolean; errors?:Record<string,string[]>}|null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(formData: FormData) {
    setPending(true);
    const res = await submitLead(formData);
    setState(res);
    setPending(false);
    if (res.ok) (document.getElementById("lead-form") as HTMLFormElement)?.reset();
  }

  return (
    <form id="lead-form" action={onSubmit} className="space-y-3">
      <div className="grid md:grid-cols-2 gap-3">
        <input name="name" placeholder="שם מלא" className="rounded-xl border px-4 py-3" required />
        <input name="email" type="email" placeholder="אימייל" className="rounded-xl border px-4 py-3" required />
        <input name="phone" placeholder="טלפון" className="rounded-xl border px-4 py-3 md:col-span-1" required />
        <input name="city" placeholder="עיר/רשות (לא חובה)" className="rounded-xl border px-4 py-3 md:col-span-1" />
      </div>
      <div className="grid md:grid-cols-2 gap-3 items-center">
        <select name="requestType" className="rounded-xl border px-4 py-3" defaultValue="permit">
          <option value="permit">היתר בנייה</option>
          <option value="form4">טופס 4</option>
          <option value="rezoning">שינוי ייעוד</option>
          <option value="sanitary">סניטריה/תשתיות</option>
        </select>
        <input type="hidden" name="token" value="dev-token" />
      </div>
      <textarea name="message" placeholder="כמה מילים על הפרויקט (לא חובה)" className="rounded-xl border px-4 py-3 w-full h-28" />
      <button disabled={pending} className="btn w-full md:w-auto">{pending ? "שולח..." : "שלחו וקבלו שיחה חוזרת"}</button>
      {state?.errors && (
        <p className="text-red-600 text-sm">יש שגיאות בטופס — בדקו את השדות.</p>
      )}
      {state?.ok && (
        <p className="text-green-700 text-sm">תודה! נחזור אליכם בקרוב.</p>
      )}
    </form>
  );
}
