# Personal website — Matteo Giacomo Prina

Live at **https://matteoprina.com** (Render static site, auto-deploys on every push to `main`).

Plain static HTML site (no build step). Open `index.html` in a browser to preview.

## Pages
- `index.html` — about, highlights, experience, education, publications, contact
- `projects.html` — research projects (cards)
- `portfolio.html` — code and web apps (cards)
- `blog.html` + `blog/*.html` — blog posts (plain-language versions of papers and projects)

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

## Add a blog post
1. Copy `blog/_template.html` to `blog/<short-keyword-name>.html` and fill in the `[ ... ]` placeholders
   (remove the `noindex` line). Put images in `images/blog/` — use a 1200×630 PNG/JPG for social previews.
2. Add an entry at the top of the `BLOG` list in `assets/data.js`, with 5–8 `keywords`.
   Reuse existing keywords where they fit: they become the filter buttons on `blog.html`
   (search by text and/or keyword; links like `blog.html?k=smart+charging` open a filtered list).
3. Add the URL to `sitemap.xml` (and optionally to the "From the blog" box in `index.html`).

## SEO
Each page has a title, meta description, canonical URL and Open Graph tags; `index.html` has
schema.org `Person` data, posts have `BlogPosting` data. `sitemap.xml` and `robots.txt` are at the root.
The site is registered in Google Search Console — resubmit the sitemap after adding posts.

## Deploy on Render
Render → New → **Static Site** → connect this repo, then:
- Branch: `main`
- Build command: *(leave empty)*
- Publish directory: `.`

(Or New → Blueprint, which reads `render.yaml`.) Every push to `main` redeploys automatically.
