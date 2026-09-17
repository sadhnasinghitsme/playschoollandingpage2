# SKS World School — Admissions Landing Page

Single-page admissions landing page for SKS World School, Noida (Playgroup–Class 5),
built with Next.js App Router, TypeScript and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

- `app/page.tsx` — composes the page from `/components` in section order.
- `app/api/enquiry/route.ts` — enquiry form API route. Currently logs submissions
  and returns success; see the `TODO` comment inside for wiring it to your
  existing Node/Express + MongoDB Atlas backend (either proxy to your Express
  API, or query MongoDB directly from the route).
- `config/constants.ts` — single source of truth for all brand facts (phone,
  email, address, socials, affiliation, program stages). Edit here to update
  them site-wide.
- `components/` — one component per section (Header, Hero, EnquiryForm,
  Features, Programs, Gallery, Testimonials, FAQ, CTASection, Footer, plus
  WhatsAppButton and StickyMobileCTA). Only the components that need
  interactivity (Header nav toggle, EnquiryForm, Testimonials carousel, FAQ
  accordion) are client components; the rest are server components.
- `public/images/` — placeholder SVG illustrations with descriptive alt text.
  Swap these for real campus photography — same filenames, `.jpg`/`.png`/`.webp`
  all work with `next/image`.

## Before going live

1. Replace the placeholder images in `public/images/` with real photos.
2. Fill in real social media URLs in `config/constants.ts` (`SOCIAL_LINKS`) —
   only the Instagram handle was provided, so the others are placeholders.
3. Wire `app/api/enquiry/route.ts` to your backend (see the `TODO` inside).
4. Update `SITE_URL` in `config/constants.ts` to the real production domain.
