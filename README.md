# VirelioCreator Landing Page

Professionele landing page voor VirelioCreator — de AI-powered website generator voor Nederlandse bedrijven. Deze pagina laat potentiele klanten zien wat VirelioCreator doet en biedt een contactformulier voor vragen en preview-aanvragen.

## Quick Start

```bash
cd virelio-landing

# Install dependencies
npm install

# Run development server
npm run dev
```

Open **http://localhost:3000** in je browser.

## Features

- **Three.js 3D Hero** — Interactieve 3D scene met floating geometrische objecten, deeltjes en muis-parallax
- **5 Talen** — Nederlands, English, Español, Deutsch, Français met auto-detectie van browsertaal
- **Dark / Light Theme** — Toggle in de navbar, slaat voorkeur op in localStorage
- **Pricing Sectie** — 3 pakketten (Preview/Starter/Professional) met maandelijks/jaarlijks toggle
- **Testimonials Carousel** — Auto-sliding klantverhalen met navigatie-dots
- **FAQ Accordion** — Klik om open/dicht te klappen
- **Typing Effect** — Roterende value propositions in de hero sectie
- **Counter Animaties** — Statistieken tellen op wanneer zichtbaar
- **Scroll Progress Bar** — Gradiënt voortgangsbalk bovenaan de pagina
- **Floating CTA** — Verschijnt na het scrollen voorbij de hero
- **Responsive Design** — Tailwind CSS, geoptimaliseerd voor elk scherm
- **3D Device Mockups** — CSS perspective browser- en telefoonmockups
- **Contactformulier** — Met lokale opslag (`contacts.json`)

## Projectstructuur

```
virelio-landing/
├── package.json           # Dependencies en scripts
├── server.js              # Express server + contact API
├── public/
│   └── index.html         # Volledige landing page (HTML + CSS + Three.js + i18n + JS)
├── contacts.json          # Contactformulier inzendingen (automatisch aangemaakt)
└── README.md
```

## Pagina Secties

1. **Hero** — Three.js 3D scene + typing effect + animated counters
2. **Trust Bar** — Steden waar klanten zitten
3. **Zo Werkt Het** — 3-stappen uitleg (Scannen, Ontwerpen, Lanceren)
4. **Features** — 6 features met hover effects
5. **Voorbeelden** — Browser- en telefoonmockups
6. **Prijzen** — 3 pakketten met maandelijks/jaarlijks toggle
7. **Testimonials** — Auto-sliding klantreviews
8. **FAQ** — Accordion met 5 veelgestelde vragen
9. **CTA Banner** — Call-to-action met links naar virelio.nl
10. **Contact** — Formulier + contactgegevens
11. **Footer** — Navigatie en copyright

## API Endpoints

| Methode | Pad | Beschrijving |
|---------|-----|-------------|
| GET | `/` | Landing page |
| GET | `/health` | Health check |
| POST | `/api/contact` | Contactformulier verwerking |

## Ondersteunde Talen

| Taal | Code | Vertalingen |
|------|------|-------------|
| Nederlands | `nl` | 133 keys (standaard) |
| English | `en` | 133 keys |
| Español | `es` | 133 keys |
| Deutsch | `de` | 133 keys |
| Français | `fr` | 133 keys |

De taal wordt automatisch gedetecteerd op basis van de browser-instelling. De voorkeur wordt opgeslagen in localStorage.
