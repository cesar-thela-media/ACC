# ACC change request direct report

Source: `delete-donotpush/change-request.md`

## Implemented

- Removed the top `24/40` announcement banner.
- Removed the homepage testimonials section.
- Removed the extra homepage founder section.
- Removed the homepage founder video section.
- Removed the homepage member directory preview.
- Removed the footer CTA box.
- Updated pricing from `$129/month` to `$79/month`.
- Replaced the fake `Find a Clinician` directory with a branded coming-soon state.
- Updated `Who We Are` with the requested heading, reordered sections, and replaced the origin/founder copy.
- Updated `What We Offer` copy, FAQ wording, pricing card usage, and consultation/referral language.
- Removed em-dashes from the app-facing marketing/runtime copy.
- Replaced public-facing `ACC` wording with `The Circle` and extended that cleanup into auth, dashboard, admin, metadata, and shared app UI.
- Reduced repetitive CTA language by removing extra homepage CTA density and softening repeated `Apply for membership` labels into calmer alternatives like `Join the circle`, `Explore membership`, and `Start your application`.

## Judgment-call updates applied

- Replaced the old homepage hero photo with a custom branded SVG illustration (`public/hero-community.svg`) to keep the same calm tone without relying on the original literal session photo.
- Made the `Why The Circle exists` section materially larger and more prominent with a stronger editorial layout and larger type.

## Verification

- `bun run build` passes.
- Production runtime verification is clean on key routes: `/`, `/what-we-offer`, `/sign-in`, `/dashboard/profile`, and `/admin`.
- Browser console checks showed zero console errors, zero uncaught page errors, and zero failed network requests during the final verification pass.

## Note

- The homepage hero image update uses a generated branded illustration because there was no stronger alternate photo asset available in the local repo.
