# Ammar Khan — Portfolio Site

Static multi-page portfolio, deployed on Cloudflare Pages. No framework, no build step — plain HTML, one shared `styles.css`, one small `main.js`.

## Structure

```
index.html                 Homepage
work/index.html            Work history (all projects, filterable)
work/<project>.html        Six case-study pages
contact.html               Contact ("Let's catch up")
styles.css                 Shared design system (tokens documented at the top)
main.js                    Email obfuscation, footer year, work filters
fonts/                     Self-hosted woff2 (Barlow Condensed, IBM Plex Sans)
favicon.svg  og-image.png  robots.txt  sitemap.xml  _headers
```

## How to edit copy

Every page is plain HTML — edit text directly. The header and footer are duplicated on all 9 pages; if you change nav or footer, apply the same change to every page (they are intentionally identical).

The contact email never appears in the HTML. It is assembled at runtime in `main.js` (top of the file) — change it there only.

## How to add a new project page

1. Copy an existing page from `work/` (e.g. `land-data-stack.html`) and rename it.
2. Update: `<title>`, meta description, canonical + OG URLs, heading, prose sections, the architecture SVG, tags, and the prev/next links at the bottom (also fix the prev/next links of the two neighbouring pages).
3. Add a card for it in `work/index.html` (set `data-tags` for the filters).
4. Add the URL to `sitemap.xml`.

## How to deploy

Every push to `main` auto-deploys via Cloudflare Pages. Branches get preview URLs.

```
git add -A
git commit -m "Update copy"
git push
```

Local preview: any static server from the repo root, e.g. `python -m http.server 8788`, then open `http://localhost:8788`. (Pages use root-relative URLs, so open via a server, not as `file://`.)

## Before every commit

Run the confidentiality grep from the private handover notes (kept outside this repo, in the parent folder). It must return nothing — no client names may ever appear in this repository, including in commit messages.
