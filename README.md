# Matcha Mithai — Website

A whimsical, editorial website for **Matcha Mithai** ("too meetha to handle") —
a matcha-fusion mithai brand pre-incubated at the InfoEdge Centre for
Entrepreneurship, Ashoka University.

Built with React + TypeScript + Vite, Tailwind CSS v4, Framer Motion and
React Router.

## Pages

- **Home** — animated matcha-mixing hero, vision/mission/motto, brand story,
  featured sweets, process, founder + quiz teasers, and a full Contact Us
  section (clickable phone/email).
- **Meet the Founders** (`/founders`) — tap a folder to open a founder's
  profile.
- **Catalogue** (`/catalogue`) — all 20 recipes from *The Recipe Book*,
  grouped into Signature Line / Bites & Bakes / Mithai Remix / Next Drops.
- **Order Now** (`/order`) — on-brand "coming soon" ordering state.
- **Pick Your Sweet** (`/pick-your-sweet`) — a playful personality quiz that
  reveals a matching sweet from the catalogue.
- **Testimonials** (`/testimonials`) — night-bakery themed page with the real
  customer testimonial video.
- **Gallery** (`/gallery`) — editorial masonry of 9 placeholder shots.

## Deploying

See **[DEPLOY.md](./DEPLOY.md)** — a GitHub Actions workflow
(`.github/workflows/deploy.yml`) is already included and will deploy to
GitHub Pages automatically on every push to `main` (just flip one setting in
the repo). A manual `npm run deploy` fallback is also available.

## Content sources

- `src/data/recipes.ts` — transcribed verbatim from the supplied recipe book
  PDF (names, servings, ingredients in grams).
- `src/data/founders.ts` — founder bios transcribed from the website brief
  (Manya Jindal uses a placeholder, as no bio was supplied), pointing at the
  real photos in `public/founders/`.
- `src/data/contact.ts` — phone numbers, emails and address from the brief.
- `public/media/testimonial.mp4` — the real testimonial video, with a poster
  frame (`testimonial-real-poster.jpg`) generated from it.
- Sweet/gallery placeholder imagery is generated in-app
  (`src/components/Placeholder.tsx`, `src/components/Doodles.tsx`) rather
  than stock photography, so it can be swapped for real food photography
  later without touching layout.

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # type-check + production build
npm run lint     # oxlint
npm run preview  # preview the production build
npm run deploy   # manual deploy to GitHub Pages (gh-pages branch)
```

## Notes

- Fonts (Fraunces, Caveat, Work Sans, Poppins) load from Google Fonts — an
  internet connection is required for them to render; otherwise the browser
  falls back to system serif/sans fonts.
- Framer Motion respects the visitor's OS-level "reduce motion" setting via
  `MotionConfig`; decorative CSS animations also pause under
  `prefers-reduced-motion`.
- Routing uses `HashRouter` and Vite's `base: './'` specifically so the site
  works unmodified on GitHub Pages, at any repo name/sub-path, including on
  refresh/deep-link. See DEPLOY.md for the reasoning.
