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

### Still Pending — Phase 2 (Content + CSS Extraction)
- Crawl https://10btravelers.com and extract all content + computed CSS
- Note: Previous extraction found WordPress + Astra + Elementor on Cloudways
- Note: Services and Contact pages have placeholder content (lorem ipsum, fake emails)

### Notes
- **Domain is `10btravelers.com`** (NOT 10billiontravelers.com — that domain expired in 2023)
- Old site is WordPress + Astra + Elementor on Cloudways (IP: 161.35.131.217)
- Old site is LIVE — do not touch DNS until Kevin approves cutover
- GoDaddy API creds are in /home/deploy/.secrets if domain DNS work is needed later
- Sanity project (2voldnur) still has previous content/schemas — may need cleanup before Phase 4

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
