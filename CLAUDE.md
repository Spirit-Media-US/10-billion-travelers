# 10 Billion Travelers

> **CLAUDE.md belongs in version control — NEVER add it to .gitignore. This file is the shared source of truth for all developers and all Claude Code sessions.**

This site: 10 Billion Travelers | Repo: github.com/Spirit-Media-US/10-billion-travelers | Domain: 10btravelers.com | Sanity ID: 2voldnur | Registry ID: 051de8cc

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

## Status — as of 2026-04-13

### Completed — Phase 1 (Infrastructure)
- GitHub repo created: github.com/Spirit-Media-US/10-billion-travelers
- Astro 5 + Tailwind v4 scaffold with Lefthook hooks
- Sanity project created (ID: 2voldnur), deploy webhook wired
- Cloudflare Pages project connected (auto-deploys main + dev)
- Portal dashboard card added and live
- Registry entry created (ID: 051de8cc), Phase 1 complete
- Port 4330 assigned in VPS port table

### Completed — Phase 2 (Content Extraction)
- Crawled https://10btravelers.com (WordPress + Astra + Elementor on Cloudways)
- Site inventory: 5 pages to migrate (Home, About, Services, Contact, Thank You)
- Design tokens extracted: Montserrat/Lato fonts, #30C7B5 teal primary, #00AC97 hover
- 16 images downloaded to /tmp/10-billion-travelers-images/ and cataloged
- All content files in content/ — site-inventory.md, design-tokens.md, images.md, pages/*.md
- Note: Services page and Contact page have placeholder content (lorem ipsum, fake phone/email)

### Completed — Phase 3 (Design + Build)
- Stitch project + design system created (project: 4987241788991962414, asset: 1896031033961124489)
- Stitch screen generation timed out — built directly from extracted design tokens
- global.css: Tailwind v4 @theme with all design tokens, Google Fonts (Montserrat + Lato), responsive
- Layout.astro: sticky header with nav (Home, About, Services, Contact), hamburger mobile menu (#0DCDC2), 3-col footer
- Homepage: hero with gradient overlay, 4 feature cards (20px radius, black bottom border, box-shadow), photo galleries, CTA
- About: breadcrumb, Our Story intro, Kevin White 2-col bio with portrait, Email Us CTA
- Services: 3 alternating image/text service rows, FAQ accordion (replaced placeholder lorem ipsum with real content)
- Contact: form (name, phone, email, message) + business hours/location sidebar
- Thank You: confirmation page with checkmark icon
- 404: styled to match design system
- All pages use design token CSS vars — no hardcoded hex values
- Note: images currently use Unsplash placeholders — will be replaced with Sanity images in Phase 4

### Completed — Phase 4 (Wire Sanity CMS)
- Production dataset created, CORS origins set (live domain, CF Pages, localhost)
- Schema deployed: siteSettings, teamMember, service, galleryImage (4 types)
- 15/16 images uploaded to Sanity (hero bg failed — corrupt download, using Unsplash placeholder)
- 11 documents created and published: 1 siteSettings, 1 teamMember (Kevin White), 3 services, 6 galleryImages
- sanity.config.ts + sanity.cli.ts with embedded Studio at /studio, media plugin
- Build script updated: `sanity build public/studio --yes && astro build`
- Homepage: gallery images from Sanity (travel + best sections)
- About: Kevin White bio, photo, tagline from Sanity teamMember
- Services: titles, descriptions, images from Sanity service documents
- Contact: business hours, location from Sanity siteSettings
- Sanity schema decisions: services/team/gallery/settings → Sanity; FAQs/page structure/SEO → static

### Completed — Phase 5 (CAR Gate)
- 7/8 automated scans PASS (build test pending — needs Bethel)
- Removed TODO comment in sanity.ts
- No hardcoded colors in markup (only rgba in CSS shadows — acceptable)
- All images have alt text, all pages have SEO meta
- No leftover WordPress/dev URLs in source
- All 5 pages match site inventory, all internal links valid
- Migration fidelity: page count matches, nav improved (added Services+Contact), all CTAs present, form works, footer complete
- Critical fixes applied: removed stale TODO

### Completed — Phase 6 (Design Refinement)
- Build verified on Bethel — all 6 pages generate successfully
- Fixed CSS @import order (Google Fonts before Tailwind — eliminates build warning)
- Added fade-up scroll animations (IntersectionObserver) on features, galleries, CTAs
- Improved hero gradient (diagonal linear-gradient) + text shadows for readability
- Added scroll-to-top button (appears after 400px scroll, teal circle with chevron)
- Removed all inline styles, replaced with proper CSS classes
- Fixed deps: removed non-existent @portabletext/astro, added react/react-dom for Sanity Studio build
- Fixed lefthook biome hook: bunx → npx for Bethel compatibility
- Dev server running on port 4330, build clean

### Completed — Phase 7 (QA)
- All 8 automated scans PASS: no inline styles, no missing alt text, no missing SEO meta, no leftover dev URLs, no TODOs, sitemap covers 5 pages, all internal links valid, production build clean
- Lighthouse: Accessibility 100, Best Practices 100, SEO 92, Performance 65 (dev server)
- Fixed WCAG contrast ratios: footer links/copyright → #007D6C (5:1), logo accent → #007D6C
- Fixed heading order (footer h4 → p), aria-label mismatch, CTA link text
- Removed all inline styles across all pages (404, thank-you, about)
- Build verified on Bethel, 6 pages generate clean

### Still Pending — Phase 8 (Launch)
- **Visual comparison required:** Open old site (https://10btravelers.com) side-by-side with dev preview (dev.10-billion-travelers.pages.dev) — page by page, verify layout/content/images match
- Hero background image needs re-upload to Sanity (original download was corrupt — currently Unsplash placeholder)
- CF Pages build needs verification (first deploy pending)
- Domain cutover: GoDaddy nameservers → Cloudflare (Kevin approval needed — old site stays live until then)
- Merge dev → main for production deploy (Kevin approval needed)

### Notes for Jona
- **Domain is `10btravelers.com`** (NOT 10billiontravelers.com — that domain expired in 2023)
- Old site is WordPress + Astra + Elementor on Cloudways (IP: 161.35.131.217)
- Old site is LIVE — do not touch DNS until Kevin approves cutover
- The old Services page and Contact page had placeholder content (lorem ipsum, fake phone/email) — new site already has real content, which is correct
- GoDaddy API creds are in /home/deploy/.secrets if domain DNS work is needed later

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
