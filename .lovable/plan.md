## Premium Healthcare Blog — Build Plan

A new React/Tailwind site built from scratch with a premium-SaaS healthcare aesthetic, compact spacing, and clear conversion paths toward booking a consultation.

### Design system

- **Palette (Cloud White):**
  - Background `#fafbfc`, surface `#ffffff`, border `#e8ecf1`
  - Muted text `#94a3b8`, body `#0f172a`
  - Primary clinical blue `#3b82f6`, primary-foreground white
  - Soft accent gradient: `#e0f2fe → #fafbfc` for hero/section washes
- **Typography:** Instrument Serif for hero/section headings, Inter for body, UI, buttons, and cards. Tight tracking on display sizes, generous line-height on paragraphs.
- **Radius & shadow:** `rounded-2xl` cards, `shadow-sm` baseline, soft elevation on hover.
- **Spacing scale (compact-premium):** Sections `py-14 md:py-20` (not py-24/32). Card padding `p-5 md:p-6`. Grid gaps `gap-6`. Tightened heading→paragraph rhythm.

### Sections to build

1. **Sticky nav** — minimal: logo, 4 links, "Book consultation" pill CTA.
2. **Split-screen hero** — Left: eyebrow chip, serif headline, sub, dual CTA ("Book consultation" + "Browse articles"), trust chips (avg rating, doctors count, response time). Right: rounded image with floating stat card overlay + subtle gradient halo.
3. **Trust strip** — thin row of partner/clinic logos in muted gray.
4. **Services / How it works** — 3-step compact cards (Describe symptoms → Match with doctor → Get treatment plan) with numbered badges.
5. **Doctors / Credibility** — 4-card grid with photo, name, specialty, credentials, verified badge, hover elevation.
6. **Blog grid** — Featured article (large) + 6 standard cards. Category badge, title, excerpt (2-line clamp), author + read time. Image zoom on hover, soft shadow lift.
7. **Conversion band** — Compact CTA band with reassuring copy, "Book consultation" button, secondary text link.
8. **Footer** — 4 columns, minimal, newsletter inline.
9. **Article page (`/blog/:slug`)** — Magazine layout: breadcrumb, category, serif H1, author meta, hero image, prose body (`max-w-prose`), sticky share rail on desktop, related articles, end-of-article CTA.
10. **Mobile sticky CTA** — Fixed bottom "Book consultation" bar on mobile only.

### Micro-interactions

- Hover: card elevation + image `scale-105` zoom, animated underline on links.
- Scroll reveal: subtle fade/translate on section enter (Intersection Observer, lightweight, no heavy lib).
- Buttons: soft press, gradient hover on primary.

### Technical structure

```text
src/
  pages/
    Index.tsx          # Home: nav, hero, trust strip, services, doctors, blog, CTA, footer
    BlogPost.tsx       # Article detail
    NotFound.tsx
  components/
    Navbar.tsx
    Hero.tsx
    TrustStrip.tsx
    HowItWorks.tsx
    Doctors.tsx
    BlogGrid.tsx
    BlogCard.tsx
    CTASection.tsx
    Footer.tsx
    MobileStickyCTA.tsx
    ui/ ...            # shadcn primitives as needed (button, badge, card)
  data/
    posts.ts           # Mock blog data
    doctors.ts
  hooks/
    useReveal.ts       # Scroll reveal
  index.css            # Design tokens (HSL), font imports, utilities
  App.tsx              # Routes
```

- Tokens defined as HSL CSS variables in `index.css`; mapped in `tailwind.config.ts` (no hard-coded colors in components).
- Images: hero + article images generated via image gen; blog thumbs use consistent treatment.
- React Router for `/` and `/blog/:slug`.
- Accessibility: semantic landmarks, `alt` text, focus rings on interactive elements, color-contrast verified.

### Spacing/density rules (enforced)

- No `py-24`/`py-32` on sections — default `py-14 md:py-20`.
- Heading → body gap: `mt-3` (not `mt-6`).
- Card internal: `p-5 md:p-6`, image aspect `4/3` or `16/10`, no oversized empty rows.
- Hero vertical: `pt-10 md:pt-16 pb-14 md:pb-20`.

### Out of scope (v1)

- Real auth, booking backend, CMS — mock data only. Can be added in a follow-up using Lovable Cloud.

Once you approve, I'll scaffold the web app, generate hero/doctor/blog imagery, and build all components in one pass.