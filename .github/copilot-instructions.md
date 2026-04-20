# Austin Clinician Circle — Copilot Instructions

## Project

ACC is a subscription-based virtual support network for licensed therapists.
Founded by Sarah Arnold, LPC-S (Restored Family Counseling, Austin TX).
Not a client-facing therapy platform — it serves therapists.

Stack: Next.js App Router, TypeScript, Tailwind CSS v4, BetterAuth, Drizzle ORM, PostgreSQL (Railway), Stripe, Cloudflare R2, Resend, Vercel.

App lives at: `app/` (Next.js project root)
Docs live at: `PRD.md`, `design-system.md`, `system-design.md` in repo root
Diagrams: `notes/diagrams/*.png`

---

## Design System

Always refer to `design-system.md` for the full spec. Summary:

Fonts: Cormorant Garamond (serif, headings) + Plus Jakarta Sans (sans, body)
Loaded via next/font/google as CSS variables: --font-serif, --font-sans

Colors (always use CSS variables, never raw hex):
- --color-sage-900: #2F3E33  (dark nav, footer)
- --color-sage-800: #3B4D3F
- --color-sage-700: #4A5D4E  (primary brand, buttons, links)
- --color-sage-600: #5A7060
- --color-sage-500: #6B8572
- --color-sage-100: #E8EDE9
- --color-sage-50:  #F3F6F4
- --color-cream-100: #FAF8F5  (page background)
- --color-cream-200: #F2EDE4  (section alt background)
- --color-cream-300: #E8E0D4  (borders, dividers)
- --color-cream-400: #D4C9B9
- --color-text-primary: #2D2D2D
- --color-text-secondary: #5C5C5C
- --color-text-tertiary: #8A8A8A
- --color-text-inverse: #FFFFFF
- --color-error: #B54B4B
- --color-success: #4A7C59
- --color-gold: #C9A96E

Borders: rounded-full for buttons/pills, rounded-2xl for cards
Shadows: soft warm — shadow-md for cards, shadow-lg for modals

---

## Code Conventions

- Use CSS variables (var(--color-...)) for all colors, never raw hex in JSX
- Tailwind utility classes for layout/spacing, CSS vars for brand colors
- All pages are in app/app/ using Next.js App Router file-based routing
- "use client" only when the component needs useState/useEffect
- No unnecessary comments, no docstrings on unchanged code
- Keep components co-located in the route folder unless shared across 3+ places
- Shared components go in app/components/
- Server components by default; opt into client only when needed

---

## Site Structure

Public (no auth):
- / — Home (Coming Soon now, full marketing page later)
- /who-we-are
- /what-we-offer
- /join
- /find-a-clinician

Auth:
- /sign-in
- /sign-up

Member dashboard (/dashboard):
- /dashboard — overview
- /dashboard/resources
- /dashboard/events
- /dashboard/network
- /dashboard/profile
- /dashboard/billing

Admin (/admin):
- /admin — overview
- /admin/members
- /admin/resources
- /admin/applications
- /admin/events

---

## Tone & Copy

Professional, warm, grounded. Sentence case always — never ALL CAPS headings.
Write for therapists, not for the general public. Assume licensure, clinical vocabulary.
Sarah's tagline: "Deepen your work. Find your community."
