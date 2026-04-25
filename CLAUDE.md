# 10 Billion Travelers

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: 10 Billion Travelers | Repo: github.com/Spirit-Media-US/10-billion-travelers | Domain: 10btravelers.com | Sanity ID: 2voldnur | Registry ID: 051de8cc

---

## 100 CLUB — FROZEN

This site is in the 100 Club. As of 2026-04-22: **mobile 97 / 100 / 100 / 100, desktop 100 / 100 / 100 / 100** on PSI. Registry: `/home/deploy/etc/100club-sites.json`.

**Before making any performance-framed edit, do these steps in order. No exceptions.**

1. **Measure first.** Run `psi-median.sh https://10btravelers.com mobile` and record all four scores. If you're about to edit CSS, fonts, images, the hero, `_headers`, preload links, critical CSS, `astro.config.mjs`, or anything labeled "perf" — that's a performance-framed edit.
2. **Identify the specific failing audit.** Open PSI, find the audit that's actually failing. If nothing is failing and all four scores already clear the bar, **stop — there is no edit to make.** Do not "improve" a passing site.
3. **Make only the edit that targets that audit.** No scope creep, no "while I'm here" cleanups.
4. **Re-measure after.** Run `psi-median.sh` again. If *any* score drops versus step 1's baseline, **revert immediately** — even if the intended score went up.

**Rules in `/home/deploy/claude-config/rules/performance-gate.md` are remediations, not universal upgrades.** Each MANDATORY-labeled rule applies only when its named failure is present. Example: the `inlineStylesheets: 'auto'` + async-css postbuild pattern from performance-gate.md dropped mobile A11y 100 → 96 on this site (async `media="print" onload` swap lands *after* Lighthouse's contrast audit snapshot). Because 10bt's total CSS is ~33 KB, `inlineStylesheets: 'always'` is the correct setting here. That was the trigger for this banner on 2026-04-22.

If you're unsure whether an edit is "performance-framed" — it is. Measure first.

---

**Migration protocol:** /home/deploy/bin/tools-api/pipelines/migration/CLAUDE.md
**Client URL:** https://10btravelers.com (original WordPress site on Cloudways)
**Infrastructure:** Deploy webhook wired | CF Pages: 10-billion-travelers.pages.dev | Dev preview: dev.10-billion-travelers.pages.dev

## Dev Commands

- `npm run dev` — local preview at localhost:4330
- `npm run build` — production build to dist/

## Mandatory — Before Starting Work
Always start Claude sessions from inside this directory:
```
cd /srv/sites/10-billion-travelers && claude
```
Running Claude from ~/ or ~/Sites/ bypasses this project's CLAUDE.md. A pre-edit hook enforces this, but following the workflow prevents warnings and ensures all project rules are loaded.

Then run: `git checkout dev && git pull origin dev`

## Stack

- Astro 5 + Tailwind CSS v4
- Sanity CMS (projectId: 2voldnur, dataset: production)
- Cloudflare Pages (project: 10-billion-travelers, auto-deploys main + dev)
- GHL forms — not yet wired

## Status — as of 2026-04-14

### Completed — Phase 1 (Infrastructure)
- GitHub repo created: github.com/Spirit-Media-US/10-billion-travelers
- Astro 5 + Tailwind v4 scaffold with Lefthook hooks
- Sanity project created (ID: 2voldnur), deploy webhook wired
- Cloudflare Pages project connected (auto-deploys main + dev)
- Portal dashboard card added and live
- Registry entry created (ID: 051de8cc), Phase 1 complete
- Port 4330 assigned in VPS port table
- **2026-04-14: Full reset to Phase 1 scaffold — all Phase 2–7 work cleared, starting fresh**

### Completed — Phase 2 (Content + CSS Extraction)
- Crawled https://10btravelers.com — downloaded raw HTML + Elementor CSS (post-30.css, post-31.css, post-573.css)
- Design tokens: Montserrat/Lato fonts, #30C7B5 teal, #00AC97 hover, #14261C headings
- 25 images downloaded including hero bg (correct URL: /2024/02/bg-homepage.webp)
- Original site has only Home + About pages (Services/Contact have placeholder content)

### Completed — Phase 3 (Design + Build) — Pixel-matched from original HTML/CSS
- **Homepage**: Hero (bg-homepage.webp + radial gradient overlay), 4 feature cards (20px radius, black bottom border, box-shadow, overlapping hero), gallery (2/3 + 1/3 layout with two stacked), 3-col square gallery, Best Travel CTA (bg-beach.jpg, badges), associations slider (3 logos, arrows, dots, autoplay loop), adventure CTA (island-bg.webp)
- **About**: Hero (about.jpeg, fixed attachment), bio section (dot grid accent 12x11 dots behind photo, 50/50 grid), CTA (10-Billion-Travelers-button-pic bg)
- **Footer**: 4 columns (About Us with round avatar, Connect with 4 social SVGs, Gallery 3x3 thumbnails, BIC office image), teal copyright bar ("Design by Spirit Media" → spiritmedia.us)
- **Header**: Logo image + teal title, Home + About nav, underline hover
- Only 2 pages: Home + About (matching original site)

### Completed — Phase 4 (Sanity CMS)
- 6 schema types: siteSettings, teamMember, service, galleryImage, feature, faq
- 25 images uploaded to Sanity, 14 documents created (settings, Kevin White, 4 features, 6 gallery, 3 FAQs)
- Homepage wired: hero bg, features, travel gallery, best gallery all from Sanity queries
- About page wired: Kevin White photo from Sanity
- sanity.config.ts uses modular schemas from studio/schemaTypes/
- Upload script at scripts/upload-to-sanity.mjs
- Sanity Studio embedded at /studio (build: sanity build public/studio --yes && astro build)
- Schema deployed to Sanity cloud
- Sanity → CF Pages auto-rebuild webhook configured (hook: be94898f → main branch)
- CORS origins set: 10btravelers.com, dev preview, CF Pages, localhost

#### Sanity Content Audit
| Content | Type | Sanity? | Rationale |
|---------|------|---------|-----------|
| Hero background image | Image | Yes (siteSettings.heroImage) | Client may change hero photo |
| Feature cards (4) | Repeating list | Yes (feature) | Client adds/removes/reorders features |
| Travel gallery (3 photos) | Repeating list | Yes (galleryImage section:travel) | Client swaps travel photos |
| Best travel gallery (3 photos) | Repeating list | Yes (galleryImage section:best) | Client swaps destination photos |
| Kevin White bio + photo | Team member | Yes (teamMember) | Bio text and photo editable |
| FAQs (3) | Repeating list | Yes (faq) | Client adds/removes/reorders FAQs |
| Site settings (name, location, hours) | Settings | Yes (siteSettings) | Business info changes |
| Best Travel CTA text/badges | Static | No | Structural — unlikely to change |
| Associations logos | Static | No | Rarely changes, developer updates |
| Adventure CTA text/button | Static | No | Structural — unlikely to change |
| Footer social links | Static | No | Structural — developer updates |
| Navigation | Static | No | Only 2 pages, structural |
| JSON-LD | Static | No | Technical SEO |

### Completed — Phase 5 (CAR Gate)
- All 8 automated QA scans PASS
- All 7 migration fidelity items PASS (page count, nav, CTAs, footer, images, Studio)
- Remaining wp-content URLs are fallbacks — functional while original site is live

### Completed — Phase 8 (Launch) — 2026-04-14
- Kevin merged dev → main: commit 04c5ad9
- Production live: https://10-billion-travelers.pages.dev (all pages 200 OK)
- Sanity Studio live: https://10-billion-travelers.pages.dev/studio/
- Sanity → CF Pages webhook active (auto-rebuild on content publish)
- Domain cutover (10btravelers.com → Cloudflare) — Kevin handles DNS when ready

### Notes
- **Domain is `10btravelers.com`** (NOT 10billiontravelers.com — that domain expired in 2023)
- Old site is WordPress + Astra + Elementor on Cloudways (IP: 161.35.131.217)
- Old site is LIVE — do not touch DNS until Kevin approves cutover
- GoDaddy API creds are in /home/deploy/.secrets if domain DNS work is needed later
- Hero bg correct URL: /2024/02/bg-homepage.webp (not /2024/01/ which was 404)

## Rules

- All work goes to the **dev** branch — never push directly to main
- Only merge dev to main when Kevin says "push to main"
- Never push without local preview first
