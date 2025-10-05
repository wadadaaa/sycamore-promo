# Sycamore Promo (Next.js 14 + Tailwind, RTL)

Минимальный шаблон промо-сайта (иврит, RTL) с формой лида на server actions.

## Быстрый старт
```bash
pnpm i # или npm install / yarn
cp .env.example .env
# при локальной разработке можно оставить TURNSTILE пустым — форма будет работать в dev
pnpm dev # или npm run dev
```

Открой: http://localhost:3000

## Стек
- Next.js 14 (App Router)
- TypeScript, Tailwind
- RTL (dir="rtl"), шрифт Heebo
- Server Actions + Zod
- Turnstile verify (dev-мок), Resend (опционально)

## Продакшен
1. Заполни `.env` (RESEND, TURNSTILE).
2. Деплой на Vercel.
3. Включи Analytics/OG/SEO по желанию.
# sycamore-promo
