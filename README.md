# Grow Palm Beach — Website

Built with Next.js 15, deployed on Vercel. Zero-config, modern, fast.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project structure

```
gpb-next/
├── app/
│   ├── layout.tsx          # Root layout, metadata, fonts, structured data
│   ├── page.tsx            # Homepage (composes all section components)
│   ├── globals.css         # Design tokens + shared styles
│   ├── sitemap.ts          # Auto-generated sitemap.xml
│   ├── robots.ts           # Auto-generated robots.txt
│   └── book-call/
│       ├── page.tsx        # Book Call page
│       └── page.module.css # Book Call styles
├── components/             # All section components, each with its own CSS module
│   ├── Header.tsx + .module.css
│   ├── Footer.tsx + .module.css
│   ├── Hero.tsx + .module.css
│   ├── Logos.tsx + .module.css
│   ├── Stats.tsx + .module.css
│   ├── Services.tsx + .module.css
│   ├── Process.tsx + .module.css
│   ├── Testimonials.tsx + .module.css
│   ├── CaseStudy.tsx + .module.css
│   ├── Founder.tsx + .module.css
│   ├── Guarantee.tsx + .module.css
│   ├── FAQ.tsx + .module.css
│   ├── CTA.tsx + .module.css
│   └── BookCallFAQ.tsx + .module.css
└── lib/
    └── content.ts          # ⭐ ALL EDITABLE CONTENT LIVES HERE
```

## Editing content

**One file controls everything: `lib/content.ts`**

That's where all text, image URLs, testimonials, services, FAQs, and contact info live. Open it in VS Code, edit the values, save. You don't need to touch any other file to change copy.

### Changing images

1. Upload your image (Shopify Files, or any image host, or `/public/images/`).
2. Copy the URL.
3. Open `lib/content.ts` and paste it into the matching slot.

```ts
export const images = {
  hero: 'https://cdn.shopify.com/...',
  founder: 'https://cdn.shopify.com/...',
  caseStudy: '',  // paste here
};
```

### Changing testimonials

```ts
export const testimonials = [
  {
    quote: "Your testimonial here",
    result: '+ Result badge',
    name: 'Client Name',
    title: 'Title, Company',
    avatar: 'https://...',
    featured: false,  // true = dark themed card
  },
];
```

### Adding a client logo

```ts
export const clientLogos = [
  { name: 'Hector\'s Car Wash', url: 'https://...' },
  { name: 'New Client', url: 'https://...' },  // add here
];
```

## Deploying to Vercel

### One-time setup

1. Push this project to a new GitHub repository.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub.
3. Click "Add New" → "Project" → import your repo.
4. Vercel auto-detects Next.js. Click Deploy.
5. Done. You'll get a `*.vercel.app` URL immediately.

### Custom domain

In your Vercel project: Settings → Domains → Add `growpalmbeach.com`. Vercel walks you through updating your DNS records. HTTPS is automatic.

### Every future change

```bash
git add .
git commit -m "Update hero copy"
git push
```

Vercel automatically rebuilds and deploys. Every commit gets a preview URL so you can test before pushing to production.

## SEO features included

- Per-page meta titles + descriptions
- Open Graph tags for social shares
- Twitter card metadata
- Structured data (LocalBusiness schema for Google rich results)
- Auto-generated sitemap.xml
- Auto-generated robots.txt
- Canonical URLs
- Optimized image loading (Next.js Image)
- Font optimization (Google Fonts preloading)

## What's NOT included (yet)

- Analytics (recommend: Vercel Analytics — one click in dashboard, or GA4)
- Meta Pixel for ad conversion tracking
- Privacy policy + Terms pages (referenced in footer, need to be added)
- Additional pages (services, blog, individual case studies)

## Tech stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** CSS Modules (scoped, no conflicts)
- **Fonts:** Inter + Fraunces via `next/font/google`
- **Images:** `next/image` (auto WebP, lazy loading)
- **Hosting:** Vercel (free tier is plenty for marketing sites)

## Color tokens

Defined in `app/globals.css` under `:root`. Change once, applies everywhere.

```css
--coral-500: #E2693C;  /* primary action color */
--palm-500: #1D9E75;   /* trust/success */
--ink-900: #0B1F2D;    /* dark surfaces */
--sand-50: #FBF7F0;    /* warm background */
--gold-500: #D9A24A;   /* accent */
```
