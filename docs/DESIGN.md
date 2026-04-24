# ACC Design Strategy

## Direction

The ACC interface should feel calm, premium, and therapist-centered — never loud, never generic SaaS, and never visually scattered.

The current system is organized around a simple role split:

- **Sage** is the brand voice.
- **Orange** is the admin shell and warm-surface accent.
- **Yellow** is a restrained highlight.
- **Cream + white** keep the product breathable.

---

## Experience goals

### Public experience

The public site should feel editorial and grounded.

- Dark hero and closing CTA sections use the near-black anchor.
- Serif headlines carry warmth and seriousness.
- The emotional line `Find your community.` is green, not orange.
- Orange should support the page through fills and callouts, not dominate typography.

### Member experience

The member dashboard should remain sage-led and practical.

- Sidebar shell stays in the sage family.
- Content area stays light and highly readable.
- Warm accents appear sparingly in callouts, badges, and supportive moments.

### Admin experience

The admin shell should be visually distinct from the public/member product.

- Sidebar and mobile drawer are orange.
- Text stays white for clarity and contrast.
- Main admin content remains on cream/white surfaces.
- The footer action reads `Log out`.

---

## Color role summary

| Role | Color family | Why |
|---|---|---|
| Primary brand | Sage | Feels grounded, clinical, and calm |
| Deep anchor | Near-black | Gives the site editorial gravity |
| Structural warm accent | Orange | Adds warmth and gives admin a distinct shell |
| Micro-highlight | Yellow | Adds lift without overpowering the palette |

---

## Usage rules

### Use green when

- highlighting key public-facing phrases
- styling brand-led buttons and links
- setting the emotional tone of hero sections

### Use orange when

- styling the admin sidebar/drawer
- filling founder quotes or warm callout surfaces
- creating selective emphasis that should feel warmer than sage

### Use yellow when

- accenting a word or short phrase
- rendering stars, chips, dots, and tiny celebratory moments
- supporting dark sections without taking them over

### Avoid

- orange body copy on marketing pages
- yellow-led sections
- raw hex values in JSX
- competing accents in the same focal area

---

## Component cues

- **Hero:** dark image-backed stage, white serif headline, green emotional emphasis, restrained yellow support.
- **Public nav:** glassy and quiet.
- **Dashboard nav:** sage shell.
- **Admin nav:** orange shell.
- **Cards:** white or cream, rounded, softly shadowed.
- **Buttons:** sage by default; orange only when the moment benefits from warmth or admin coding.

---

## Working principle

When in doubt, ask:

> Does this choice keep ACC sage-first, keep orange purposeful, and keep yellow small?

If yes, it probably belongs.
