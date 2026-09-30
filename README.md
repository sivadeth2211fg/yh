# MANET Starter — Next.js maritime college site

A redesigned, SEO-optimized starter for a merchant-navy / maritime college site.
Built with **Next.js (App Router, JavaScript)**, **Tailwind CSS**, **Recharts**,
**lucide-react**, and **framer-motion**. Server-rendered for strong SEO.

## Run locally

Requires **Node.js 20+** installed on your computer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit

- **All content + branding:** `src/data/site.js` (name, domain, phone, courses, stats…)
- **Colors:** `tailwind.config.js`
- **Per-page SEO:** each page's `metadata` / the helper in `src/lib/seo.js`
- **Form backend:** `src/app/api/enquiry/route.js` (currently logs to console — wire to
  a database, email, or headless CMS)

## Add your assets

Drop these into `/public`: `favicon.ico`, `logo192.png`, `logo512.png`, `og-image.jpg`.

## SEO built in

Server rendering · per-page metadata + canonical + Open Graph/Twitter ·
JSON-LD (CollegeOrUniversity, FAQPage, Course) · auto `sitemap.xml` & `robots.txt` ·
PWA manifest.

## Deploy

Recommended: [Vercel](https://vercel.com) (connect the repo → auto-deploy).
Then submit `https://YOUR-DOMAIN/sitemap.xml` in Google Search Console.
