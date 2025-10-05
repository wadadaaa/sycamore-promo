# Sycamore Promo (Next.js 14 + Tailwind, RTL)

Minimal promo site template (Hebrew, RTL) with lead form using server actions.

## Quick Start
```bash
pnpm i # or npm install / yarn
cp .env.example .env
# for local development you can leave TURNSTILE empty — form will work in dev
pnpm dev # or npm run dev
```

Open: http://localhost:3000

## Stack
- Next.js 14 (App Router)
- TypeScript, Tailwind
- RTL (dir="rtl"), Heebo font
- Server Actions + Zod
- Turnstile verify (dev mock), Resend (optional)

## Production
1. Fill `.env` (RESEND, TURNSTILE).
2. Deploy to Vercel.
3. Enable Analytics/OG/SEO as needed.
