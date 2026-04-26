# Refine Staging — Website

Melbourne property styling business website. Vite + React 19 + TypeScript + Tailwind v4 + Framer Motion.

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # builds to ./dist
pnpm preview      # serves the build locally
```

## Deploy

Pushes to `main` automatically deploy to **GitHub Pages** via `.github/workflows/deploy.yml`.

To enable on a fresh repo:
1. Push the repo to GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment**, set **Source = GitHub Actions**.
4. The first push to `main` will run the workflow and publish.

## Updating site content

| What to edit | Where |
|---|---|
| Phone, email, social links | `src/data/site.ts` (top of file) |
| Service descriptions | `src/data/site.ts` (`SERVICES` array) |
| Stats (200+ homes etc.) | `src/data/site.ts` (`SITE.stats`) |
| Testimonial quotes | `src/data/testimonials.ts` |
| Gallery photos | `public/gallery/` + `src/data/gallery.ts` |
| Contact form recipient email | `src/data/site.ts` (`SITE.email`) |

## Adding new gallery photos

1. Drop photos into `public/uploads/` (or `public/gallery/`).
2. Add an entry to the `PHOTOS` array in `src/data/gallery.ts`:
   ```ts
   { src: "/uploads/my-new-photo.jpg", alt: "Living room in Hawthorn", categories: ["Living", "Vacant"] }
   ```
3. Save. Hot reload picks it up instantly.

## Stack

- **Framework**: React 19 + Vite 7 + TypeScript 5.9
- **Styling**: Tailwind CSS v4 (CSS-first)
- **Animation**: Framer Motion 12
- **Routing**: Wouter (1.5 KB SPA router)
- **Forms**: react-hook-form + Zod, sent via formsubmit.co
- **Icons**: lucide-react

## Design tokens

All colors live in `src/index.css` under `:root`. Accent color is `#B8A99A` (warm taupe).

Fonts: **Fraunces** (serif display) + **Inter** (sans body).
