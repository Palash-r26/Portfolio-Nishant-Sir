# Dr. Nishant Jain | Academic Portfolio & Research Archive

[![Framework](https://img.shields.io/badge/Framework-TanStack%20Start-0ea5e9?style=flat-square)](https://tanstack.com/start)
[![React](https://img.shields.io/badge/React-v19.2.0-61dafb?style=flat-square&logo=react)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-v5.8-3178c6?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-v4.2-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)](LICENSE)

A modern, high-performance academic portfolio and scientific archive engineered for **Dr. Nishant Jain**, Assistant Professor in the Department of Computer Science & Design at **Madhav Institute of Technology & Science (MITS), Gwalior**, and Ph.D. alumnus of **IIT (ISM) Dhanbad**.

Built with **TanStack Start**, **React 19**, **TypeScript**, **Tailwind CSS v4**, and **Lenis Smooth Scroll**, this portfolio balances scholarly prestige with contemporary digital craftsmanship.

---

## Key Features

- **Prestigious Academic Editorial Design**: Custom-crafted warm museum paper (`#FAFAF7`) and burnished brass (`#9A6E24`) design system with editorial typography (Fraunces serif display, Inter sans-serif, and JetBrains Mono).
- **Interactive Preloader**: Refined loading screen with numerical progression and keyboard skip capability (`[Esc]`).
- **Smooth Momentum Scrolling**: Integrated Lenis scroll engine with zero-jank anchor offset navigation.
- **Filterable Publications Archive (`/publications`)**: Real-time category filtering (Journals, Conferences, Under Review) with direct DOI links and citation badges.
- **Student Mentorship Portal (`/students`)**: Dedicated research opportunities section covering B.Tech/M.Tech capstones, doctoral guidance, and inquiry criteria.
- **Production SEO & Structured Data**: Complete OpenGraph, Twitter Cards, canonical tags, `sitemap.xml`, `robots.txt`, and Google JSON-LD `Person` schema markup.
- **Accessible & Responsive**: Fully responsive layout optimized for desktop, tablet, and mobile with portrait-first hierarchy.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Fullstack Framework** | [TanStack Start](https://tanstack.com/start) (SSR & Server Functions via Nitro) |
| **Routing** | [TanStack Router](https://tanstack.com/router) (Strictly typed file-based routing) |
| **State & Data Fetching** | [TanStack Query](https://tanstack.com/query) |
| **UI & Core** | React 19, TypeScript, Radix UI Primitives |
| **Styling** | Vanilla CSS Design System + Tailwind CSS v4 |
| **Motion & Scroll** | Lenis Momentum Scroll + CSS Keyframe Light Sweeps |
| **Icons** | [Lucide React](https://lucide.dev) |
| **Build Tooling** | Vite 8, Nitro, ESLint 9, Prettier |

---

## Project Structure

```
├── public/
│   ├── cv.pdf               # Curriculum Vitae PDF download
│   ├── favicon.svg          # Minimalist "NJ" vector favicon
│   ├── robots.txt           # Search crawler directives
│   └── sitemap.xml          # XML sitemap for SEO indexing
├── src/
│   ├── assets/              # Local images and portrait assets
│   ├── components/
│   │   ├── site/            # Site layout (Header, Footer, Preloader, HeroPortrait, etc.)
│   │   └── ui/              # Reusable UI primitives (Button, Card, Dialog, etc.)
│   ├── content/
│   │   └── portfolio.ts     # Single source of truth for all profile, publications, & CV data
│   ├── routes/
│   │   ├── __root.tsx       # Root layout shell with HTML head, metadata, and providers
│   │   ├── index.tsx        # Homepage (Hero, About, Research, Publications, CV, Contact)
│   │   ├── publications.tsx # Full publication archive with filter tabs
│   │   └── students.tsx     # Student mentorship and supervision tracks
│   ├── styles.css           # Global typography, color variables, and animation system
│   ├── router.tsx           # Router instance configuration
│   └── server.ts            # SSR entry point and server-side error capture
├── tsconfig.json            # Strict TypeScript configuration
├── vite.config.ts           # Vite + TanStack Start configuration
└── package.json             # Dependencies and build scripts
```

---

## Getting Started

### Prerequisites

- **Node.js** (v18.18.0 or newer) or **Bun** (v1.1.0 or newer)
- **npm**, **pnpm**, or **bun**

### Installation

Clone the repository and install dependencies:

```bash
# Using npm
npm install

# Or using bun
bun install
```

### Running Locally (Development)

Start the local development server:

```bash
# Using npm
npm run dev

# Or using bun
bun run dev
```

Open [http://localhost:8080](http://localhost:8080) in your browser.

---

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the local development server on port 8080 |
| `npm run build` | Compiles client and SSR bundles into `.output/` |
| `npm run preview` | Runs local production preview of built assets |
| `npm run lint` | Analyzes code for syntax and style violations with ESLint |
| `npm run format` | Automatically formats codebase using Prettier |

---

## Content Customization Guide

All personal and academic information is centralized in **`src/content/portfolio.ts`**:

1. **Profile & Contact**:
   Edit the `profile` object to update email, phone, affiliation, department, and bio.

2. **Publications**:
   Add or update items in the `publications` array with `title`, `authors`, `year`, `venue`, `doi`, `type`, and `featured` status.

3. **Academic Qualifications & Experience**:
   Modify the `qualifications`, `experience`, `recognition`, and `development` arrays.

4. **Curriculum Vitae**:
   Replace `public/cv.pdf` with the latest CV document.

5. **Portrait Photo**:
   Replace `src/assets/professor-portrait.png` with a high-resolution portrait.

---

## Production Deployment

### 1. Deploy on Vercel (Recommended)

This project has native support for Vercel Serverless and Static hosting via Nitro.

#### Steps to Deploy:
1. **Push your code to GitHub**:
   Ensure your latest changes are pushed to your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy update"
   git push origin main
   ```
2. **Import to Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new) and log in with your GitHub account.
   - Select your repository: `Palash-r26/Portfolio-Nishant-Sir`.
3. **Configure Project Settings**:
   - **Framework Preset**: Select **`Vite`** or **`Other`**
   - **Root Directory**: `./` (leave default)
   - **Build Command**: `npm run build`
   - **Output Directory**: Leave empty or `.vercel/output` (Nitro handles output automatically)
4. **Environment Variables** (Under *Environment Variables* section in Vercel):
   - **Key**: `NITRO_PRESET`
   - **Value**: `vercel`
5. **Click Deploy**:
   Vercel will build and serve your site globally on a high-speed CDN with serverless SSR execution.

---

### 2. Deploy on Cloudflare Pages / Workers
The project also supports Cloudflare Pages / Workers:
```bash
npm run build
npx wrangler pages deploy .output/public
```

---

### 3. Node.js Standalone Server
To run in a containerized environment (Docker / VPS):
```bash
npm run build
node .output/server/index.mjs
```

---

## License

This project is licensed under the [MIT License](LICENSE).
