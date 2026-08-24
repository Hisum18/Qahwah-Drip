# Qahwah Drip — Website

A 4-page marketing website for **Qahwah Drip**, a modern Yemeni coffee house
("Coffee · Teas & Desserts"). Built as a fast, responsive, accessible static site
using the café's real photography and a custom heritage design system.

## Pages
- `site/public/index.html` — Home (hero, signature drinks, heritage teaser, space gallery)
- `site/public/menu.html` — Menu (espresso, specialty, coffee, matcha, tea, refreshers, caffeine-free, sweets, add-ons)
- `site/public/story.html` — Our Story (Yemeni coffee heritage)
- `site/public/visit.html` — Visit (hours, location, contact form)

## Run it locally
From a terminal:

```bash
cd "site/public"
python3 -m http.server 8000
# then open http://localhost:8000
```

(Any static server works — it's plain HTML/CSS/JS, no build step.)

## Design system
Defined in `site/public/css/styles.css` (`:root`) and mirrored in `.stitch/DESIGN.md`:
- **Colors:** Qahwah Red `#C4202C`, Brass Gold `#B8924A` (darker `--brass-text #7A6326`
  for accessible text), Highland Green `#2E6B43`, Marble Cream `#F6F1E8`, Walnut `#4A3220`.
- **Type:** Playfair Display (headings), Nunito Sans (body), Montserrat (labels), Amiri (Arabic).
- **Motifs:** pointed Islamic arch (SVG clip-path), brass arabesque divider, mashrabiya.

## Photos
Real café photos live in `site/public/images/` with content-accurate names
(e.g. `iced-latte.jpg`, `qahwah-cups.jpg`, `mountain-mural.jpg`, `exterior-mural.jpg`).
Social share crops (1200×630) are `og-cover/og-menu/og-story/og-visit.jpg`.
Spares not currently placed: `interior-wide.jpg`, `hallway.jpg`, and extra drink/dessert variants.

## Real business details (from the Google Business Profile)
- **Qahwah Drip** — authentic Yemeni coffee, Falls Church, VA (serving the greater DMV)
- **Address:** 6315 Leesburg Pike, Ste A, Falls Church, VA 22044
- **Phone:** (703) 763-2111
- **Instagram:** [@qahwahdrip](https://www.instagram.com/qahwahdrip/)
- **Status:** Now open (soft opening — Dine-in & Takeout, 5.0★ on Google). The site presents
  the café as open; a real Google-reviews section is on the home page.
- **New photos:** a second pro photo batch (`new photos/`) was processed into `images/`
  (drinks, desserts, gold-dallah heritage, Sana'a shelf, lit storefront sign).
- **Map:** Visit page embeds a live Google Map (keyless `output=embed`) with a
  clickable "Open in Google Maps" fallback if the embed is blocked.

## Still to finalize before/at launch
- **Hours** — ⚠️ SAMPLE/ESTIMATED (Google has none published). Currently Mon–Thu 9am–11pm,
  Fri–Sat 9am–12am, Sun 9am–11pm. Send me your real hours and I'll drop them in everywhere.
- **Menu items & prices** — authentic Yemeni items with *sample* prices; confirm final menu.
- **Other socials** — only Instagram is wired (the one you promote). Send Facebook/TikTok
  URLs to add them.
- **Contact form** — front-end only; wire it to an email service/Formspree to receive messages.
- For a more reliable map, swap the `output=embed` iframe for the official
  [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) with a key.

## SEO & AI discoverability
Live domain: **https://qahwahdrip.com** — baked into every canonical / Open Graph / sitemap /
JSON-LD URL. If the domain changes, find-and-replace `qahwahdrip.com` across `site/public/`.
- **Per page:** unique title + meta description, `<link rel="canonical">`, Open Graph + Twitter
  cards (1200×630 share images `og-cover/og-menu/og-story/og-visit.jpg`), `theme-color`, geo meta.
- **JSON-LD** `CafeOrCoffeeShop` on every page (one consistent `@id`) with address, geo, phone,
  opening hours, cuisine, price range, `hasMenu`, Instagram; **5.0 aggregateRating + the 3 visible
  reviews on Home**; `BreadcrumbList` on inner pages.
- `sitemap.xml` (with image entries), `robots.txt` that welcomes search engines **and** AI crawlers
  (GPTBot, ClaudeBot, anthropic-ai, PerplexityBot, Google-Extended, OAI-SearchBot, CCBot,
  Applebot-Extended…), `llms.txt` (LLM-readable summary), `site.webmanifest` + app icons.
- Validated by a multi-agent SEO audit; 8 findings fixed (review-text parity, boolean
  `acceptsReservations`, one consistent business entity, midnight `24:00` hours, OG image
  dimensions, `twitter:image:alt`, non-future sitemap dates).
- **After launch:** verify the domain in Google Search Console & Bing Webmaster Tools and submit
  `sitemap.xml`. (Hours in the structured data mirror the *sample* hours — update with real ones.)

## Stitch
A Stitch project (`projects/9884155938146638313`) and a matching design system
(`assets/4599896844612736105`, "Qahwah Drip — Heritage") were created. Stitch's generator
initially timed out on long desktop prompts, so the site was hand-built to the same design
system. It now works with model `GEMINI_3_1_PRO` + a concise prompt — a sample mobile concept
is saved in `.stitch/designs/`. Project metadata is in `.stitch/`.
