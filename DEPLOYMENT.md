# Deploying the Company Website

The website is a standalone Next.js app in `company-website/`. It is deployed
independently of the ERP and fetches its content from the ERP backend's public
API (`GET /public/site`).

## Architecture recap

| Piece | Where |
|---|---|
| Website frontend (this app) | Vercel (recommended) |
| Website content API (`/public/*`) | existing ERP backend on Railway |
| Database | existing ERP Postgres on Railway |
| CMS (edit content) | ERP admin → Settings → Website CMS (Phase 3) |

## Prerequisites (already done)

- `npx prisma db push` created the `website_*` tables.
- `npx tsx prisma/seeds/website.ts` loaded placeholder content.
- The ERP backend is deployed and reachable over HTTPS.

## Deploy to Vercel

1. **New Project → import the repo.**
2. **Root Directory: `company-website`** (important — it's a subfolder of the monorepo).
   Vercel auto-detects Next.js; no build config needed.
3. **Environment Variables:**
   | Name | Value |
   |---|---|
   | `NEXT_PUBLIC_API_BASE_URL` | your Railway backend URL, e.g. `https://your-app.up.railway.app` |
   | `NEXT_PUBLIC_SITE_URL` | the website's public URL, e.g. `https://valorpharma.com` |
4. **Deploy.** Add the custom domain and Vercel provisions TLS.

Content is fetched at build and revalidated every 60s (ISR). After editing content
in the CMS, changes appear within ~60s (or trigger a redeploy for instant refresh).

## Backend notes

- CORS: the backend currently reflects all origins, so the website can call it as-is.
  Tighten this per `erp_backend_url_protection_plan.md` before/after go-live.
- The only write endpoint the public site uses is `POST /public/contact`
  (contact form). Everything else is read-only.

## Local development

```bash
# Terminal 1 — ERP backend (serves /public/site)
cd backend-pharma-fastify && npm run start:dev

# Terminal 2 — website
cd company-website
cp .env.example .env.local   # set NEXT_PUBLIC_API_BASE_URL=http://localhost:4001
npm run dev                  # http://localhost:3100
```

Without `NEXT_PUBLIC_API_BASE_URL`, the site renders the bundled placeholder
content (`src/data/site.ts`) so it always works offline.
