<div align="center">

# मध्यप्रदेश — MP Explorer

### A cinematic digital journey through the Heart of India

[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38BDF8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-11-FF0055?style=flat-square&logo=framer)](https://framer.com/motion)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)](https://vitejs.dev)

<br/>

> *"Madhya Pradesh is not a destination. It is an interior journey."*

<br/>

![MP Explorer Banner](https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/India_-_Madhya_Pradesh_-_01_%283081014886%29.jpg/1280px-India_-_Madhya_Pradesh_-_01_%283081014886%29.jpg)

</div>

---

## 📖 About

**MP Explorer** is a full-featured, visually immersive tourism and culture platform built for Madhya Pradesh — India's largest state by area and its geographical heart. The project covers everything from 785+ wild tigers to 4,500-year-old bronze casting, from the world's largest human gathering to a Dravidian language surviving in the Hindi belt.

This is not a typical travel guide. Every page is built with editorial depth — real cultural history, ecological data, precise geographical detail, and photography — packaged in a production-grade React application.

---

## ✨ Features

- 🗺️ **10 fully detailed feature pages** — each with deeply researched content, image galleries, and interactive components
- 🐯 **Wildlife** — 10 species, 6 national parks, seasonal safari guide, conservation stats
- 🎨 **Tribal Art** — 8 living art forms, GI-tagged crafts, endangered tradition documentation
- 🎭 **Festivals** — 8 festivals with real image galleries, 3-tab detail panels, full cultural history
- 🍽️ **Food** — 14 iconic dishes, city food guides, ingredient breakdowns, historical context
- 🌊 **Rivers** — 6 rivers with geological history, mythology, ecology, and threat documentation
- 🗣️ **Languages** — 7 languages including Gondi (Dravidian), Bhili (tribal), Urdu (Nawabi) with phrase samples
- 🏛️ **Cities** — Detailed city profiles with accent-color theming
- 🛕 **Temples** — Sacred sites with pilgrimage routes and ritual context
- 📅 **Plan Trip** — Wishlist system, suggested itineraries, practical travel tips

---

## 🗂️ Project Structure

```
src/
├── features/
│   ├── home/           # Landing page with parallax hero
│   ├── cities/         # City listing + detail pages
│   │   └── data/       # cities.ts — all city data with accent colors
│   ├── wildlife/       # Wildlife page
│   │   └── data/       # wildlife_data_enhanced.ts
│   ├── festivals/      # Festivals page
│   │   └── data/       # festivals_enhanced.ts
│   ├── food/           # Food page
│   │   └── data/       # food_enhanced.ts
│   ├── art/            # Tribal art page
│   │   └── data/       # art_enhanced.ts
│   ├── rivers/         # Rivers page
│   │   └── data/       # rivers_data.ts
│   ├── languages/      # Languages page
│   │   └── data/       # languages_data.ts
│   └── plan/           # Trip planner
├── components/
│   ├── ui/             # PageHero, SectionHeader, Badge, GoldDivider
│   ├── layout/
│   │   ├── Navbar.tsx  # Glass navbar with More dropdown + back button
│   │   └── Footer.tsx  # Stats bar + 3-column footer
├── router/
│   └── index.ts        # All routes + NAV_ITEMS
├── hooks/
│   └── index.ts        # useScrolled, useWishlist, useMouseParallax, etc.
└── types/              # Shared TypeScript interfaces
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn or pnpm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mp-explorer.git
cd mp-explorer

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🛣️ Routes

| Path | Page | Description |
|------|------|-------------|
| `/` | Home | Parallax hero, feature highlights |
| `/cities` | Cities | All major MP cities with profiles |
| `/cities/:id` | City Detail | Individual city deep-dive |
| `/wildlife` | Wildlife | Species, parks, safari guide |
| `/festivals` | Festivals | 8 festivals with galleries |
| `/food` | Food | 14 dishes, city food guides |
| `/art` | Tribal Art | 8 art forms, GI tags, endangered status |
| `/rivers` | Rivers | 6 rivers — history, ecology, mythology |
| `/languages` | Languages | 7 languages with phrase samples |
| `/plan` | Plan Trip | Wishlist + itineraries + tips |

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 18 with TypeScript |
| Build Tool | Vite 5 |
| Styling | Tailwind CSS 3 |
| Animation | Framer Motion 11 |
| Routing | React Router v6 |
| Icons | Lucide React |
| State | React hooks + localStorage (wishlist) |
| Fonts | Custom display + mono-mp font variables |

---

## 🎨 Design System

### Color Palette

Each feature section has its own accent color — the entire application is dark-themed with per-route color identity:

| Section | Color | Hex |
|---------|-------|-----|
| Global / Plan | Gold | `#C9A84C` |
| Cities | Warm Orange | `#F4A261` |
| Wildlife | Forest Green | `#52B788` |
| Temples | Purple | `#C77DFF` |
| Festivals | Pink | `#FF6B9D` |
| Art | Violet | `#A78BFA` |
| Rivers | Cyan | `#00B4D8` |
| Languages | Rose | `#E879A0` |

### Typography Variables

```css
--font-display:   /* Serif display font for headings */
--font-sans:      /* Clean sans-serif for body */
--font-mono-mp:   /* Monospace for data labels and tags */
```

### Component Library (`src/components/ui/`)

```tsx
<PageHero badge="..." title="..." titleAccent="..." subtitle="..." gradient="..." accent="..." />
<SectionHeader badge="..." title="..." titleAccent="..." />
<Badge label="..." color="..." />
<GoldDivider />
```

---

## 🪝 Custom Hooks

```ts
// Scroll detection
useScrolled(threshold: number): boolean
useScrollProgress(): number  // 0–100

// Intersection observer
useInView(threshold: number): { ref, inView }

// Wishlist with localStorage persistence
useWishlist(): { wishlist: string[], toggle(id: string): void }

// Interval timer
useInterval(callback, delay)

// Mouse parallax position
useMouseParallax(): { x: number, y: number }
```

---

## 📦 Data Architecture

Every feature has a typed data file in `features/<name>/data/`. All data is static TypeScript — no API calls, no database.

### Example — Language type

```ts
interface LanguageDetail {
  id: string;
  name: string;
  nativeName: string;
  family: string;           // "Indo-European" | "Dravidian" | "Austro-Asiatic"
  speakers: string;
  history: string;          // 300–500 word cultural history
  literature: string;
  distinctFeatures: string[];
  phrases: PhraseSample[];  // native script + romanised + meaning
  images: LangImage[];      // 3 images with captions
  vitality: "Thriving" | "Stable" | "Declining" | "Endangered" | "Critical";
  // ... more fields
}
```

### Example — River type

```ts
interface RiverDetail {
  id: string;
  name: string;
  nameEtymology: string;
  length: number;           // total km
  lengthInMP: number;       // km through MP
  history: string;          // geological + cultural history
  mythology: string;        // sacred significance
  ecology: string;          // wildlife, endemic species
  threats: string;
  tributaries: RiverTribute[];
  images: RiverImage[];     // 3 images with captions
  sacredRank: "National Sacred River" | "Ecologically Critical" | ...
  damsCount: number;
  // ... more fields
}
```

---

## 🌟 Highlights by Section

### 🐯 Wildlife
- 10 species documented (Bengal Tiger, Gharial, Dhole, Baiga Godna, etc.)
- 6 national parks with zone-level detail
- Seasonal safari guide (Oct–Jun, with specific month-by-month breakdown)
- Conservation stats: 785+ tigers, 90% of world's gharials in Chambal

### 🎨 Tribal Art
- 8 living art forms: Gond, Bhil Pithora, Bagh Block Print, Dhokra, Korku, Baiga Godna, Chanderi, Maheshwar
- GI-tagged arts clearly marked
- Endangered status tracking (Baiga Godna: critically endangered)
- Gunjala Gondi script — added to Unicode in 2019

### 🎭 Festivals
- 8 festivals including Bhagoria Haat (tribal elopement festival) and Kalidas Samaroh
- Real image galleries (3 images per festival)
- 3-tab content: Story / Highlights / Visit info
- Simhastha Kumbh 2028 countdown context

### 🍽️ Food
- 14 dishes with ingredient breakdowns
- Where-to-eat city guide (Indore / Bhopal / Gwalior / Ujjain)
- Spice level meter, veg/non-veg badges
- Historical context (e.g. Nawabi kebab, tribal mahua ladoo)

### 🌊 Rivers
- Narmada: 150 million years old, pre-dates the Himalayas
- Chambal: North India's cleanest river — saved by its own 2,000-year "curse"
- Shipra: Hosted 75 million people (Simhastha 2016)
- Betwa: Most archaeologically dense river valley in India (Sanchi, Orchha, Heliodorus Column)

### 🗣️ Languages
- Gondi — a Dravidian language in the Hindi heartland
- Bhili — ancestors painted Bhimbetka 30,000 years ago
- Cross-language phrase comparison (same word across all 6 languages)
- Vitality tracking: Thriving → Critical scale

---

## 🗺️ Navbar Design

The Navbar solves the "too many routes" overflow problem with a **"More" dropdown** on desktop:

```
[मध्यप्रदेश]  [Home] [Cities] [Wildlife] [Festivals] [Food] [Plan Trip] [More ▾]  [♡ Plan]
                                                                         └── Temples
                                                                         └── Art
                                                                         └── Rivers ◆
                                                                         └── Languages ◆
```

- **Back button** — replaces logo on `/rivers` and `/languages` (secondary routes)
- **Per-route accent** — each active route highlights in its own section color
- **Mobile drawer** — all routes visible in full list with color dots

---

## 📸 Image Strategy

All images use a graceful fallback pattern:

```tsx
// Image loads → shows image
// Image fails → shows gradient placeholder with section icon
// While loading → shows "Loading…" text

const [loaded, setLoaded] = useState(false);
const [errored, setErrored] = useState(false);

<img onLoad={() => setLoaded(true)} onError={() => setErrored(true)} />
{(!loaded || errored) && <FallbackGradient />}
```

Image galleries support:
- 3 images per entity
- Thumbnail strip with active indicator
- Arrow navigation with `AnimatePresence` cross-fade
- Caption overlay on loaded images

---

## 🏕️ Trip Planner (`/plan`)

- **Wishlist** — heart any city, saved to `localStorage`, persists across sessions
- **Route visualiser** — animated chain of saved cities with arrows
- **4 itineraries** — 3 Day / 5 Day / 7 Day / 10 Day with accordion expand
- **6 travel tips** — expandable with detailed secondary content
- **MP Tourism CTA** — links out to official MP Tourism

---

## 🌐 Deployment

```bash
# Build
npm run build

# Deploy to Vercel
npx vercel --prod

# Deploy to Netlify
netlify deploy --prod --dir=dist

# Deploy to GitHub Pages
npm run build && gh-pages -d dist
```

---

## 📝 Adding New Content

### Add a new city

```ts
// src/features/cities/data/cities.ts
{
  id: "maheshwar",
  name: "Maheshwar",
  emoji: "🛕",
  accent: "#D4A017",
  tagline: "The queen's city on the Narmada",
  // ...
}
```

### Add a new route

```ts
// src/router/index.ts
{ path: "/heritage", Component: lazy(() => import("../features/heritage/HeritagePage.tsx")) }

// Add to NAV_ITEMS:
{ label: "Heritage", path: "/heritage", icon: "◈" }

// Add accent in Navbar:
"/heritage": "#D4A017"
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-page`
3. Follow the existing data structure patterns in `features/<name>/data/`
4. Match the design system — dark background, accent colors, Framer Motion transitions
5. Submit a pull request with a description of content added

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

---

## 🙏 Acknowledgements

- **Madhya Pradesh Tourism** — for the living cultural heritage this project documents
- **Wikimedia Commons** — photography used under Creative Commons licenses
- **Anthropic Claude** — AI assistance in content research and development
- Every tribal artist, naturalist, river ecologist, and food stall owner in MP whose work this project tries to honour

---

<div align="center">

**Built with ❤️ for Madhya Pradesh**

*785 tigers · 6 sacred rivers · 46 tribal communities · 1 heart of India*

</div>