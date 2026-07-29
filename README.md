# Muhammad Rashid Khan — Developer Portfolio

A premium, animated developer portfolio built with React 19, Vite, Tailwind CSS v4, Framer Motion, and React Three Fiber.

## Tech Stack

- **React 19** + **Vite** — build tooling
- **Tailwind CSS v4** — styling, via `@tailwindcss/vite`
- **Framer Motion** — scroll reveals, hover/tilt interactions, page motion
- **React Three Fiber** + **drei** — the floating 3D distorted sphere in the hero
- **lucide-react** — icon set (GitHub/LinkedIn use custom inline SVGs in `src/components/icons.jsx`, since lucide-react no longer ships brand marks)

## Project Structure

```
src/
  components/     UI sections (Hero, About, Skills, Journey, Projects, Services, Contact, Footer, Navbar…)
  data/           projects.js and skills.js — edit these to update content without touching components
  index.css       design tokens (colors, fonts, animations) via Tailwind's @theme
  App.jsx         page composition
public/
  favicon.svg
  Muhammad_Rashid_Khan_CV.pdf   ← add your real CV here; the "Download CV" button already links to it
```

## Getting Started

```bash
npm install
npm run dev       # local dev server, usually http://localhost:5173
npm run build     # production build -> dist/
npm run preview   # preview the production build locally
```

## Before you deploy

1. Drop your real CV PDF at `public/Muhammad_Rashid_Khan_CV.pdf` (the hero's "Download CV" button already points here).
2. Double check the email/phone/LinkedIn in `src/components/Contact.jsx` and `src/components/Footer.jsx`.
3. The contact form currently shows a success state locally but doesn't send anywhere yet — wire it to EmailJS, Formspree, or your own API route before relying on it.
4. Optional: replace `public/favicon.svg` with your own mark.

## Deploying

### Vercel (recommended, zero-config)
1. Push this project to a GitHub repo.
2. Go to vercel.com/new and import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`, output directory `dist` — defaults are already correct.
4. Deploy — you get a live URL in under a minute, plus a preview URL on every push.

### Netlify
1. Push to GitHub for a connected deploy, **or** run `npm run build` and drag the `dist/` folder into app.netlify.com/drop for a quick one-off deploy.
2. For a connected repo: build command `npm run build`, publish directory `dist`.

### GitHub Pages
1. `npm install -D gh-pages`
2. Add to `package.json` scripts: `"predeploy": "npm run build", "deploy": "gh-pages -d dist"`
3. In `vite.config.js`, set `base: "/<your-repo-name>/"` inside `defineConfig`.
4. Run `npm run deploy`.

## Notes

- Reduced motion is respected (`prefers-reduced-motion`) — animations shorten automatically for users who need that.
- The command palette opens with **⌘K** / **Ctrl+K**.
- Content lives in `src/data/projects.js` and `src/data/skills.js` — update those files rather than editing JSX when your project list or stack changes.
