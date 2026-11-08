# Personal website — Matteo Giacomo Prina

Live at **https://matteoprina.com** (Render static site, auto-deploys on every push to `main`).

Plain static HTML site (no build step). Open `index.html` in a browser to preview.

## Pages
- `index.html` — about, highlights, experience, education, publications, contact
- `projects.html` — research projects (cards)
- `portfolio.html` — code and web apps (cards)

## Add a card (portfolio or project)
Edit `assets/data.js`: copy one `{ ... }` block in `PORTFOLIO` or `PROJECTS`, paste it and change the text.

```js
{
  title: "My new web app",
  description: "One or two sentences on what it does.",
  image: "images/my-app.png",   // optional — omit to show a coloured cover with `icon`
  icon: "🚀",
  tags: ["Python", "Dash"],
  links: [
    { label: "Open app", url: "https://..." },
    { label: "Code", url: "https://github.com/matpri/..." },
  ],
},
```
Projects also accept `period`, `role` and `status` (`"ongoing"` or `"completed"`).

Images go in `images/` (16:9 works best, e.g. 1200×675).

## Deploy on Render
Render → New → **Static Site** → connect this repo, then:
- Branch: `main`
- Build command: *(leave empty)*
- Publish directory: `.`

(Or New → Blueprint, which reads `render.yaml`.) Every push to `main` redeploys automatically.
