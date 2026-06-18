# Qahwah Drip — Website

A 4-page marketing website for **Qahwah Drip**, a modern Yemeni coffee house
("Coffee · Teas & Desserts"). Built as a fast, responsive, accessible static site
using the café's real photography and a custom heritage design system.

## Pages
- `site/public/index.html` — Home (hero, signature drinks, heritage teaser, space gallery)
- `site/public/menu.html` — Menu (qahwah, espresso, teas, cold, desserts)
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
Spares not currently placed: `arches-day.jpg`, `interior-wide.jpg`, `hallway.jpg`.

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
- **Hours** — ⚠️ SAMPLE/ESTIMATED (Google has none published). Currently Mon–Thu 8am–11pm,
  Fri–Sat 8am–12am, Sun 9am–11pm. Send me your real hours and I'll drop them in everywhere.
- **Menu items & prices** — authentic Yemeni items with *sample* prices; confirm final menu.
- **Other socials** — only Instagram is wired (the one you promote). Send Facebook/TikTok
  URLs to add them.
- **Contact form** — front-end only; wire it to an email service/Formspree to receive messages.
- For a more reliable map, swap the `output=embed` iframe for the official
  [Maps Embed API](https://developers.google.com/maps/documentation/embed/get-started) with a key.

## Stitch
A Stitch project (`projects/9884155938146638313`) and a matching design system
(`assets/4599896844612736105`, "Qahwah Drip — Heritage") were created. Stitch's
screen generator was timing out without producing screens, so the site was hand-built
to the same design system. Project metadata is in `.stitch/`.
