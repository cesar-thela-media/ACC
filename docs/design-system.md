# Austin Clinician Circle — Design System

> **Version:** 2.1  
> **Date:** April 2026  
> **Direction:** Sage-led public brand, orange-coded admin shell, yellow micro-highlights

---

## 1. North star

ACC should feel like a professional sanctuary for therapists: calm, editorial, grounded, and serious without drifting into cold SaaS energy.

Three rules anchor the visual system:

1. **Sage leads the brand.** Public-facing emphasis, primary CTAs, and most text accents should stay in the sage family.
2. **Orange is structural, not shouty.** Use orange for the admin sidebar/drawer, warm callout fills, and selected surfaces — not as the default text color for public marketing pages.
3. **Yellow is a small bright note.** Use it for stars, tiny highlights, chips, and selective emphasis inside dark sections.

---

## 2. Color architecture

All colors live in `app/app/globals.css` as CSS custom properties.

### 2.1 Foundational palette

#### Sage palette — primary brand

| Token | Value | Usage |
|---|---|---|
| `--color-sage-900` | `#1B1B1B` | Hero background, footer, deep sections, dark overlays |
| `--color-sage-800` | `#3B4D3F` | Dark section variants, darker interactive states |
| `--color-sage-700` | `#4A5D4E` | Primary brand color for buttons, links, and anchored accents |
| `--color-sage-600` | `#5A7060` | Eyebrow labels, supportive accents, lighter emphasis |
| `--color-sage-500` | `#6B8572` | Green hero emphasis, decorative accents, softer text emphasis |
| `--color-sage-100` | `#E4EBE6` | Soft sage washes, subtle fills |
| `--color-sage-50` | `#F3F6F4` | Barely-there tint |

#### Surface palette — breathable neutrals

| Token | Value | Alias | Usage |
|---|---|---|---|
| `--color-cream-100` | `#F8FAF3` | `--color-surface` | Main page background |
| `--color-cream-200` | `#ECEFE8` | `--color-surface-low` | Nested sections, alternating panels |
| `--color-cream-300` | `#DFE3DA` | — | Ghost borders, dividers, subtle strokes |
| `--color-cream-400` | `#C5C8BE` | — | Disabled states, quiet separators |
| `#FFFFFF` | `#FFFFFF` | `--color-surface-card` | Cards, floating modules |

#### Warm accents

| Token | Value | Usage |
|---|---|---|
| `--color-accent-secondary` | `#DC673B` | Admin sidebar/drawer, founder quote fills, warm surface accents |
| `--color-accent-highlight` | `#F9D251` | Small highlight moments, stars, chips, soft glow accents |
| `--color-accent-surface-warm` | `rgba(220, 103, 59, 0.14)` | Warm translucent surface tint |
| `--color-accent-surface-soft` | `rgba(220, 103, 59, 0.08)` | Softer orange wash |
| `--color-accent-surface-highlight` | `rgba(249, 210, 81, 0.18)` | Yellow micro-highlight background |

### 2.2 Semantic role tokens

Use these when the role matters more than the raw hue.

| Token | Resolves to | Purpose |
|---|---|---|
| `--color-admin-sidebar` | `--color-accent-secondary` | Orange admin navigation shell |
| `--color-admin-sidebar-rgb` | `--color-accent-secondary-rgb` | Admin overlays and translucent states |
| `--color-hero-tagline` | `--color-sage-500` | Green emphasis for `Find your community.` |
| `--color-text-accent-primary` | `--color-sage-600` | Preferred green text emphasis in light UI |
| `--color-text-accent-highlight` | `--color-accent-highlight` | Small warm highlight text moments |

### 2.3 Text colors

| Token | Value | Usage |
|---|---|---|
| `--color-text-primary` | `#1B1B1B` | Headings and body text on light surfaces |
| `--color-text-secondary` | `#444841` | Secondary copy |
| `--color-text-tertiary` | `#75796E` | Fine print, labels, placeholders |
| `--color-text-inverse` | `#FFFFFF` | Text on dark/orange surfaces |
| `--color-text-inverse-muted` | `rgba(255,255,255,0.65)` | Muted text on dark surfaces |

### 2.4 Functional colors

| Token | Value | Usage |
|---|---|---|
| `--color-success` | `#4A7C59` | Success states |
| `--color-warning` | `#C4932A` | Warning and pending states |
| `--color-error` | `#B54B4B` | Errors and destructive actions |
| `--color-info` | `#4A6F8C` | Informational UI |

---

## 3. Color hierarchy rules

### 3.1 Public marketing pages

- Keep the visual voice **sage-first**.
- Use green/sage for visible text emphasis, especially in hero moments.
- Avoid orange as the primary text color in headlines or value statements.
- Use yellow for micro-emphasis only.

### 3.2 Dashboard/member product

- Continue using the sage shell and cream content surfaces.
- Keep hierarchy calm, readable, and low-noise.
- Use orange sparingly for warm callouts or filled moments, not as the shell default.

### 3.3 Admin product

- The **admin sidebar and mobile drawer are intentionally orange**.
- Admin content surfaces remain cream/white so the orange shell feels intentional rather than overwhelming.
- Admin nav text stays white with soft translucent active states.

### 3.4 Quick yes/no guide

| Do | Don’t |
|---|---|
| Use sage for headline emphasis | Turn public hero text orange by default |
| Use orange for admin shell structure | Spread orange across all public typography |
| Use yellow for stars, chips, tiny highlights | Make yellow the main field color |
| Keep content surfaces cream/white | Fill whole pages with heavy accent colors |

---

## 4. Typography

### 4.1 Font pairing

| Role | Font | Variable | Fallback |
|---|---|---|---|
| Headings / display | Cormorant Garamond | `var(--font-serif)` | Georgia, serif |
| Body / UI | Plus Jakarta Sans | `var(--font-sans)` | Segoe UI, Helvetica, sans-serif |

### 4.2 Type behavior

- Headings use serif and stay in **sentence case**.
- Body UI stays clean and unobtrusive.
- Prefer weight `400` for serif display and `500–600` for labels/actions.

### 4.3 Key usage notes

- The homepage line **“Find your community.”** should remain green via `--color-hero-tagline`.
- Dark sections use white or yellow for support, but green can carry the emotional emphasis.
- Avoid harsh black; use `--color-text-primary` instead.

---

## 5. Surface architecture

Think in layers rather than boxed sections.

| Layer | Token | Use |
|---|---|---|
| Base | `--color-surface` | Page background |
| Nest | `--color-surface-low` | Alternating sections, grouped content |
| Card | `--color-surface-card` | Raised modules |
| Deep | `--color-sage-900` | Hero, footer, dark CTA blocks |
| Admin shell | `--color-admin-sidebar` | Admin-only navigation shell |

### Rules

- Separate major sections with **background changes**, not heavy borders.
- Use ghost borders only when needed.
- Keep floating surfaces soft and breathable.

---

## 6. Components

### 6.1 Buttons

| Variant | Background | Text | Notes |
|---|---|---|---|
| Primary | `--color-sage-700` | white | Default CTA |
| Secondary | transparent / outlined | `--color-sage-700` | Supportive action |
| Inverse | white | `--color-sage-700` | For dark sections |
| Warm fill | `--color-accent-secondary` | white | Use selectively, not as the default public CTA |

### 6.2 Hero treatment

- Background: `--color-sage-900` with image/overlay support.
- Main headline: white.
- Emotional emphasis line: green via `--color-hero-tagline`.
- Supporting highlight moments: yellow if needed, sparingly.

### 6.3 Navigation

#### Public nav
- Transparent over hero.
- Glassmorphism on scroll.
- Sage-led actions.

#### Dashboard nav
- Sage shell.
- Cream main panel.

#### Admin nav
- Orange sidebar and mobile drawer.
- White text.
- Active states use translucent white, not darker orange text.
- Footer action label is **Log out**.

### 6.4 Cards and callouts

- Standard cards stay white/cream with soft shadows.
- Founder/testimonial/callout moments may use warm orange fills.
- Yellow should stay inside details, chips, stars, small badges, and highlight spans.

---

## 7. Motion and shape

### Shape

| Token | Value | Usage |
|---|---|---|
| `--radius-md` | `10px` | Compact controls |
| `--radius-lg` | `16px` | Standard cards |
| `--radius-xl` | `24px` | Main cards and large containers |
| `--radius-full` | `9999px` | Buttons and pills |

### Motion

- Use `300–400ms` eased transitions.
- Prefer fades, slight lifts, and soft background shifts.
- No snappy, flashy, or hyperactive motion.

---

## 8. Implementation notes

- Always use CSS variables in JSX.
- Prefer semantic role tokens when they exist.
- If a design choice conflicts with this file, update the tokens and docs together.
- Keep `docs/PRD.md`, `docs/DESIGN.md`, and `.github/copilot-instructions.md` aligned with this file.

---

## 9. One-sentence summary

**ACC is a sage-first therapist brand with cream breathing room, an intentionally orange admin shell, and yellow used only as a small bright accent.**
