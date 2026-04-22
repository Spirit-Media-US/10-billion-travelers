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

---

## Stitch MCP — AI Design Tool

Google Stitch 2.0 is an MCP server available in this project for AI-powered design work. It generates full page designs and auto-creates design systems (colors, typography, component rules). The MCP config is already symlinked into this repo (`.mcp.json`).

**When to use:** When Kevin asks for design work, new page layouts, or visual redesigns. Use Stitch first to get 80–90% of the design done visually, then implement in Astro/Tailwind.

**Available tools (prefixed `mcp__stitch__`):**
`create_project`, `generate_screen_from_text`, `create_design_system`, `apply_design_system`, `edit_screens`, `generate_variants`, `list_projects`, `list_screens`, `get_screen`, `get_project`, `list_design_systems`, `update_design_system`

**Workflow:**
1. Screenshot or paste URL into Stitch as style reference
2. Stitch generates full design + auto-creates design system
3. Export design.md / design system from Stitch
4. Hand off to Claude Code for Astro/Tailwind implementation

**Rules:**
- Use Gemini 3.1 Pro in Stitch (not 3.0 Flash)
- Stitch auto-generates a `design.md` — keep it in the project root for consistency
- This is the standard SMP workflow for all new site builds and major redesigns
<!--
100 Club commitments template — copy this block verbatim into a site's CLAUDE.md
during Phase 2H of the execute plan. Substitute 10-billion-travelers with the actual R2 path slug.
The guardrails script (/home/deploy/bin/100club-lint.sh) self-skips any site whose
CLAUDE.md lacks the heading "## 100 Club commitments", so installing this block
activates the pre-commit lint on the site.
-->

---

## 100 Club commitments (locked — do not regress)

**100 Club bar (all pages, current and future — anything less is not acceptable):**
- **Homepage**: desktop 100/100/100/100, mobile 100/100/100 + Perf ≥ 95 (flagship, median-of-5)
- **Every other page**: mobile ≥ 90, desktop ≥ 95 (Google's "Good" zone, median-of-3)
- v4 execute plan brings the homepage into the 100 Club; inner pages are enforced by this site-wide tiered bar.

Every commitment below is a LOAD-BEARING structural decision. Do not "re-add" any of them without understanding the consequences.

### Hero image(s) are R2-only, NOT Sanity
- **URL pattern**: `https://assets.spiritmediapublishing.com/10-billion-travelers/hero-*.webp` (plus any other LCP images moved to R2 per this site's hero structure)
- **Why**: same origin as fonts (one TLS handshake), stable URL enables 103 Early Hints, hardcoded URL survives Sanity edits without rebuild
- **To change a hero**: upload a new WebP (matching sizes at matching quality) to the same R2 path. Any Sanity fields for the hero image have been removed from the schema — editors cannot change the hero via the CMS.

### CSS must stay wrapped in @layer base
- `Layout.astro`'s `<style is:inline>` wraps everything in `@layer base` except `@font-face` and `@keyframes`.
- **Why**: unlayered rules beat every `@layer` rule regardless of specificity. Tailwind v4 ships utilities in `@layer utilities`. If critical CSS is unlayered, `.grid-cols-1` overrides external `.lg:grid-cols-4` and grids collapse site-wide.

### ClientRouter is OFF
- No `<ClientRouter />`, no `import { ClientRouter }` in Layout.astro.
- **Why**: static marketing sites don't need SPA nav. Saves ~125ms forced reflow + ~100ms script eval on mobile.
- All page JS uses `DOMContentLoaded` with readyState guard.

### GA loads on first user interaction
- Events: scroll, mousemove, touchstart, keydown, click. 8s fallback timeout.
- **Why**: Lighthouse never interacts, so GA doesn't load in audits. Real users get GA after they engage (post-LCP).

### `<a>` elements on dark backgrounds MUST have an explicit default-state color class
- Base `a { color: var(--color-red|primary) }` rule in `global.css` otherwise applies → brand color on dark bg fails WCAG.
- Any new `<a href="tel:">`, `<a href="mailto:">`, or link in a dark section needs `text-stone-400` / `text-stone-100` / similar. `hover:text-*` doesn't protect the default state.

### `[data-animate]` transitions are transform-only, no opacity
- `global.css`: `transition: transform 0.65s cubic-bezier(...)`. **Do NOT add `opacity` back to the transition.**
- **Why**: Lighthouse captures frames mid-transition; a 0.65s opacity fade catches text at ~50% opacity → 40+ false color-contrast failures. Transform-only gives the same visual slide-in without the a11y artifact.
- If the site doesn't use `data-animate` at all, this commitment is preventive only.

### Early Hints, CSP, X-Robots-Tag in public/_headers
- `X-Robots-Tag: index, follow` overrides CF Pages' default `noindex` on `*.pages.dev`
- CSP allows CF Insights (`static.cloudflareinsights.com` in `script-src`, `cloudflareinsights.com` in `connect-src`) + all origins actually used by this site
- `Link:` headers for 2 critical fonts on `/*` + hero image on `/` → CF Pages promotes to HTTP/2 103 Early Hints

### Images: width/height attrs match urlFor dimensions
- Every below-fold `<img>` has both attrs. Any urlFor resize change must update the attrs in the same commit.
- `sizes` attribute = actual display width in px, NOT `100vw` (the latter forces over-delivery at DPR 2).

### Build pipeline
- `inlineStylesheets: 'auto'` (NOT `'always'`)
- `scripts/async-css.mjs` postbuild rewrites external CSS to `media="print" onload` swap (invoked from `package.json` build script)
- `scripts/100club-verify.mjs` post-build Playwright asserts grids + h-N images + console errors — blocks bad builds
- `/home/deploy/bin/100club-lint.sh` is wired into `lefthook.yml` pre-commit
- No `@playform/inline` / Beasties — incompatible with TW v4 utility-heavy markup
