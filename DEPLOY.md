# Deploying to GitHub Pages

This project is already configured to work correctly on GitHub Pages
(relative asset paths + hash-based routing, so it works at any repo URL and
survives page refreshes/deep links). Pick **one** of the two options below.

## Option A — GitHub Actions (recommended, fully automatic)

A workflow is already included at `.github/workflows/deploy.yml`. It builds
the site and deploys it every time you push to `main`.

1. Push this project to a new GitHub repo (or unzip it into an existing one).
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **GitHub Actions**.
4. Push to `main` (or run the workflow manually from the **Actions** tab).
5. After it finishes, your site is live at
   `https://<your-username>.github.io/<repo-name>/`.

Nothing else to configure — no need to set a `base` path, no need to touch
`gh-pages` branches.

## Option B — Manual deploy with `gh-pages` (no GitHub Actions needed)

```bash
npm install
npm run deploy
```

This builds the site and pushes the `dist/` folder to a `gh-pages` branch
using the `gh-pages` npm package (already listed as a dev dependency).

Then in the repo, go to **Settings → Pages → Source** and choose the
`gh-pages` branch (`/root`).

## Why this works on any repo name / sub-path

- `vite.config.ts` uses `base: './'` (relative), so built CSS/JS/image URLs
  are always relative to `index.html`, whatever folder it's served from.
- The app uses `HashRouter` (react-router), so page URLs look like
  `.../#/catalogue` instead of `.../catalogue`. GitHub Pages has no
  server-side rewrite rule for a single-page app, so a "real" URL path like
  `/catalogue` 404s on refresh — the hash avoids that entirely, since every
  route is really just `/index.html` with a different hash.

If you'd rather have clean URLs (no `#`) and are comfortable adding a
server-side rewrite (e.g. deploying to Netlify/Vercel instead of GitHub
Pages), swap `HashRouter` for `BrowserRouter` in `src/main.tsx`.
