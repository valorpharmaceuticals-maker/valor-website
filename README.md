# Company Website

Public marketing website for the company. **Separate Next.js frontend** that is
deployed independently, while its content is (eventually) served by the existing
ERP backend (`backend-pharma-fastify`) and managed from a **Website CMS** section
inside the ERP admin.

- **Frontend:** Next.js (App Router) + Ant Design v6 + TypeScript
- **Backend / DB:** the existing `backend-pharma-fastify` and its database (not a new one)
- **Pages:** Home, Services, Products, Careers, About, Contact

## Run

```bash
npm install
npm run dev        # http://localhost:3100
```

Other scripts: `npm run build`, `npm start`, `npm run typecheck`.

## Content

All copy, images, products, jobs, leadership and company details are **placeholder
data** in [`src/data/site.ts`](src/data/site.ts). Its shape mirrors what the Website
CMS will return, so wiring the CMS later is mostly:

1. Build the Website CMS endpoints in `backend-pharma-fastify` (public, read-only).
2. Replace the `site` import in each page with a fetch to those endpoints returning
   the same shape.
3. Set `NEXT_PUBLIC_API_BASE_URL` (see `.env.example`).

The contact form currently logs and shows a success message; point it at a public
contact endpoint when available.

## Deployment

Deployed on its own (e.g. Vercel) at the site root, independent of the ERP UI.
