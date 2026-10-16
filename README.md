# mohssin.space

Personal site of Mohssin Abdalla — React 19 + Vite + Tailwind, English/Arabic (RTL), light/dark mode.

## Develop

```bash
npm install
npm run dev
```

## Content

- Text lives in `src/i18n/en.json` and `src/i18n/ar.json` (keep both in sync).
- Projects are listed at the top of `src/components/Projects.jsx`.

## Deploy (Vercel)

Vercel detects Vite automatically (build `npm run build`, output `dist`).
The contact form posts to the serverless function `api/send-email.js`, which sends mail through Resend.

Environment variables:

| Name | Value |
|---|---|
| `RESEND_API_KEY` | API key from resend.com |
| `CONTACT_FROM_EMAIL` | `Mohssin Abdalla <contact@mohssin.space>` (once the domain is verified in Resend) |
| `CONTACT_TO_EMAIL` | optional, defaults to `mohssinabdalla1@gmail.com` |
