# Design Tokens — 10 Billion Travelers

Extracted from https://10btravelers.com on 2026-04-13

Platform: WordPress 6.3+ / Astra Theme 4.3.1 / Elementor 3.20.1 / Elementor Pro 3.20.0

Note: The original site has two parallel color systems (Astra CSS vars + Elementor kit vars). This extraction merges both into a single unified token set. Elementor kit also loads Roboto/Roboto Slab but Astra overrides with Lato/Montserrat — we use the Astra fonts (which are what actually render).

## Colors
| Token | Hex | Used on |
|-------|-----|---------|
| primary | #30C7B5 | Links, buttons, CTA borders, accents, entry meta, copyright text, selection bg |
| primary-hover | #00AC97 | Link hover/focus, button hover bg, footer link default |
| heading-dark | #14261C | Dark headings variant, transparent header menu text |
| text-primary | #4F5655 | Body text, paragraph gray, blockquote, widget titles |
| bg-main | #F3F6F3 | Site background, light greenish gray |
| bg-white | #FFFFFF | Header bg, footer bg, button default bg |
| black | #000000 | Black text, nav links, card bottom border |
| text-secondary | #4B4F58 | Secondary gray |
| bg-light | #F6F7F8 | Lightest gray |
| elementor-primary | #BEDB89 | Elementor headings, hero heading, CTA button bg (light green) |
| elementor-secondary | #0DCDC2 | Hero heading accent, hamburger menu bg (bright cyan) |
| elementor-text | #BBDECD | Muted green text variant |
| elementor-accent | #BBDCE8 | Pale blue subheadings/accents |
| elementor-indigo | #4054B2 | Accent indigo |
| elementor-green | #23A455 | Green accent |
| elementor-dark-teal | #1A6C7A | Dark teal |
| border | #DDDDDD | Default borders, dividers |
| footer-border | #DBE8EB | Footer top border |
| submenu-border | #EAEAEA | Submenu item borders |
| card-shadow | rgba(0,0,0,0.5) | Card box shadow color |
| hero-overlay | #000000 to #30C7B5 | Radial gradient overlay on hero bg image, opacity 0.5 |
| page-transition | #FFBC7D | Amber/orange page transition |

## Typography — Desktop (1280px)
| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---------|------------|------|--------|-------------|---------------|
| h1 | Montserrat, sans-serif | 50px | 600 | 1 | 0 |
| h2 | Montserrat, sans-serif | 28px | 600 | 1 | 0 |
| h3 | Montserrat, sans-serif | 22px | 600 | 1 | 0 |
| h4 | Montserrat, sans-serif | 23px | 700 | 1.5em | 0 |
| h5 | Montserrat, sans-serif | 18px | 700 | 1.5em | 0 |
| h6 | Montserrat, sans-serif | 15px | 700 | 1.5em | 0 |
| body | Lato, sans-serif | 17px | 400 | 1.5em | 0 |
| nav link | — | 16px | — | 70px (line-height match header) | 0 |
| button | Montserrat, sans-serif | 12px | 500 | 1em | 2px |
| small/meta | — | 14px | — | 1.5em | 0 |
| site title | Montserrat, sans-serif | 31px | 700 | — | 0 |
| entry title | Montserrat, sans-serif | 30px | — | — | 0 |
| hero heading (Elementor) | — | 70px | — | 1 | 1.8px |

## Typography — Mobile (375px)
| Element | Font Family | Size | Weight | Line Height | Letter Spacing |
|---------|------------|------|--------|-------------|---------------|
| h1 | Montserrat, sans-serif | 34px | 600 | 1 | 0 |
| h2 | Montserrat, sans-serif | 24px | 600 | 1 | 0 |
| h3 | Montserrat, sans-serif | 22px | 600 | 1 | 0 |
| h4 | Montserrat, sans-serif | 20px | 700 | 1.5em | 0 |
| h5 | Montserrat, sans-serif | 18px | 700 | 1.5em | 0 |
| h6 | Montserrat, sans-serif | 16px | 700 | 1.5em | 0 |
| body | Lato, sans-serif | 17px | 400 | 1.5em | 0 |
| button | Montserrat, sans-serif | 12px | 500 | 1em | 2px |

## Spacing — Desktop
| Element | Padding | Margin | Max Width |
|---------|---------|--------|-----------|
| container (Elementor) | 0 | 0 auto | 1140px |
| container (Astra) | 0 | 0 auto | 1240px |
| section | 100px 50px / 150px 20px (varies) | 0 | — |
| hero | 150px 20px 50px 20px | 0 | 700px (inner) |
| card | 20px | 0 0 20px | — |
| header | 1em 0 | 0 | — |
| footer (primary) | 45px 0 / 40px 30px | 0 | 1200px (grid) |
| footer (below) | 20px | 0 | 1200px (grid) |
| button | 16px 40px | 0 | — |
| article | 1.5em 2.14em | 0 | — |

## Spacing — Mobile
| Element | Padding | Margin | Max Width |
|---------|---------|--------|-----------|
| container | 0 | 0 auto | 100% |
| section | varies (reduced) | 0 | — |
| hero | reduced | 0 | — |
| card | 20px | 0 0 20px | — |
| header | 0 20px | 0 | — |
| footer (primary) | 25px 30px | 0 | 100% |
| button | 16px 40px | 0 | — |
| article | 1.5em 1em | 0 | — |

## Decorations
| Element | Border Radius | Box Shadow | Transition |
|---------|--------------|------------|------------|
| button (Astra default) | 0px | none | — |
| button (Elementor CTA) | 9px | none | — |
| card | 20px (with 10px solid #000 bottom border) | 0px 4px 10px -1px rgba(0,0,0,0.5) | — |
| section | 0 | none | background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s |
| overlay | 0 | none | background 0.3s, border-radius 0.3s, opacity 0.3s |
| popup modal | — | 2px 8px 23px 3px rgba(0,0,0,0.2) | animation 1.2s |
| image (gallery) | 0 | none | opacity hover 0.8→1.0 |
| portrait/avatar | 71px (pill/circle) | none | — |
| logo | — | none | all 0.2s linear |
| social icons | — | none | all 0.01s |

## Animations
| Type | Details |
|------|---------|
| fadeInLeft | Feature cards, content sections |
| zoomInUp | Image galleries |
| slideInLeft | Individual images |
| zoomIn | Individual elements |
| Mobile | Animations disabled |
| Carousel (Swiper) | Autoplay 5000ms, transition 500ms, infinite loop, pause on hover |

## Navigation
| Viewport | Type | Details |
|----------|------|---------|
| Desktop | Horizontal links | Logo left (max 120px), 2 nav links (Home, About) right-aligned, underline hover effect with fade animation |
| Mobile | Hamburger | Teal (#0DCDC2) bg hamburger button with white icon, dropdown/drawer panel |

## Breakpoints
| Name | Value |
|------|-------|
| Mobile | max-width: 544px |
| Tablet | max-width: 921px (Astra) / 1024px (Elementor) |
| Desktop | min-width: 922px |

## Google Fonts URL
```
https://fonts.googleapis.com/css?family=Lato:400|Montserrat:700,400,600,500&display=swap
```
Note: Roboto and Roboto Slab are also loaded by Elementor kit but not used visually (Astra overrides).
