import { site as fallback, type SiteContent } from "@/data/site";

/**
 * Fetches published website content from the ERP backend (GET /public/site)
 * and merges it over the local fallback so the site never renders empty:
 * any field the API omits, returns null, or returns as an empty array falls
 * back to the placeholder in src/data/site.ts.
 *
 * Called from server components. Uses `no-store` so CMS edits appear on the
 * next page refresh (no ISR delay). The payload is small, so fetching per
 * request is cheap.
 */
export async function getSiteContent(): Promise<SiteContent> {
  const base = process.env.NEXT_PUBLIC_API_BASE_URL;
  if (!base) return fallback;

  try {
    const res = await fetch(`${base.replace(/\/$/, "")}/public/site`, {
      cache: "no-store",
    });
    if (!res.ok) return fallback;
    const data = await res.json();
    return merge(data);
  } catch {
    return fallback;
  }
}

// Prefer API value when present & non-empty, else fallback. `nav` is always local.
function merge(api: Partial<SiteContent> | null): SiteContent {
  if (!api) return fallback;
  const pick = <T>(v: T | null | undefined, fb: T): T => {
    if (v == null) return fb;
    if (Array.isArray(v) && v.length === 0) return fb;
    return v;
  };

  return {
    company: pick(api.company, fallback.company),
    logoUrl: api.logoUrl ?? fallback.logoUrl,
    nav: fallback.nav, // navigation is defined by the frontend, not the CMS
    hero: pick(api.hero, fallback.hero),
    highlights: pick(api.highlights, fallback.highlights),
    values: pick(api.values, fallback.values),
    services: pick(api.services, fallback.services),
    perks: pick(api.perks, fallback.perks),
    process: pick(api.process, fallback.process),
    stats: pick(api.stats, fallback.stats),
    vision: pick(api.vision, fallback.vision),
    mission: pick(api.mission, fallback.mission),
    chairman: pick(api.chairman, fallback.chairman),
    history: pick(api.history, fallback.history),
    productCategories: pick(api.productCategories, fallback.productCategories),
    products: pick(api.products, fallback.products),
    jobs: pick(api.jobs, fallback.jobs),
    leadership: pick(api.leadership, fallback.leadership),
    pages: mergePages(api.pages),
  };
}

// Deep-merge page content per slug so a partially-filled CMS still renders.
function mergePages(api: Partial<SiteContent["pages"]> | null | undefined): SiteContent["pages"] {
  if (!api) return fallback.pages;
  const fb = fallback.pages;
  return {
    global: { ...fb.global, ...(api.global ?? {}) },
    home: { ...fb.home, ...(api.home ?? {}) },
    services: { ...fb.services, ...(api.services ?? {}) },
    products: { ...fb.products, ...(api.products ?? {}) },
    careers: { ...fb.careers, ...(api.careers ?? {}) },
    about: { ...fb.about, ...(api.about ?? {}) },
    contact: { ...fb.contact, ...(api.contact ?? {}) },
  };
}
