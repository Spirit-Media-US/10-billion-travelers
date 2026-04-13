# Site Inventory — 10 Billion Travelers

Extracted from https://10btravelers.com on 2026-04-13

## Platform
- WordPress + Astra theme + Elementor page builder
- Hosted on Cloudways (staging: wordpress-1227270-5947629.cloudwaysapps.com)
- Rank Math PRO SEO plugin
- WP Rocket performance optimization
- Google Analytics tracking

## URL Map

| # | Page | URL | Migrate? | Notes |
|---|------|-----|----------|-------|
| 1 | Home | https://10btravelers.com/ | Yes | Main landing — hero, features, travel photos |
| 2 | About | https://10btravelers.com/about/ | Yes | Kevin White bio, story, "Email Us" CTA |
| 3 | Services | https://10btravelers.com/services/ | Yes | 3 services + FAQ — all placeholder lorem ipsum text |
| 4 | Contact | https://10btravelers.com/contact/ | Yes | Contact form, phone, email, hours, Google Maps embed |
| 5 | Thank You | https://10btravelers.com/thank-you/ | Yes | Form submission confirmation — simple utility page |
| 6 | Unsubscribe | https://10btravelers.com/unsubscribe/ | No | Unsubscribe confirmation — not needed in migration |
| 7 | Sample Page | https://10btravelers.com/sample-page/ | No | WordPress default — not real content |
| 8 | Hello World | https://10btravelers.com/2023/10/03/hello-world/ | No | WordPress default blog post — not real content |

## Pages to Build: 5
1. Home (/)
2. About (/about/)
3. Services (/services/)
4. Contact (/contact/)
5. Thank You (/thank-you/)

## Navigation Structure

### Main Nav (header)
- Home → /
- About → /about/

### Missing from Nav (orphan pages)
- Services → /services/ (not linked from main nav)
- Contact → /contact/ (not linked from main nav)

### Recommended Nav for New Site
- Home → /
- About → /about/
- Services → /services/
- Contact → /contact/

## Key Observations
- Very small site — only 4 real content pages
- Services page has 100% placeholder text (lorem ipsum) — client will need to provide real content
- Contact page has placeholder phone/email (123-456-7890, info@example.com) — client will need real contact info
- About page mentions "Vlogs, Blogs, Reviews, and Travel Services" but none of those sections exist
- Sitemap URLs misconfigured — still reference Cloudways staging domain
- Only Home and About are in the main nav — Services and Contact are orphaned
- Founded by Kevin White — travel consultant, 1M+ miles, 26 countries
