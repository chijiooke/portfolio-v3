# Chijioke Michael — Portfolio

A modern, minimal Next.js 14 portfolio built with Tailwind CSS and Yarn.  
Soft custom cursor · scroll-reveal animations · dark projects section · fully responsive.

## Stack

| | |
|---|---|
| Framework | Next.js 14 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Package manager | Yarn 1.x (classic) |
| Fonts | DM Serif Display + DM Sans |

## Quick Start

```bash
# 1. Install dependencies
yarn install

# 2. Start dev server
yarn dev
# → http://localhost:3000

# 3. Production build
yarn build
yarn start
```

## Deploy to Vercel

```bash
yarn global add vercel
vercel
```

Or push to GitHub and connect at vercel.com — Vercel auto-detects Next.js + Yarn, zero config needed.

## Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx            # Root layout, metadata, fonts
│   ├── page.tsx              # Main page — assembles all sections
│   └── globals.css           # Cursor, animations, marquee, scroll-reveal
├── components/
│   ├── Cursor.tsx             # Custom cursor: dot + lagging ring
│   ├── Nav.tsx                # Fixed nav with frosted-glass scroll effect
│   ├── Hero.tsx               # Staggered typewriter headline
│   ├── Marquee.tsx            # Infinite skill ticker strip
│   ├── About.tsx              # Bio + skills grid
│   ├── Experience.tsx         # Timeline with achievement callouts
│   ├── Projects.tsx           # Dark grid with per-card mouse glow
│   ├── Contact.tsx            # CTA + social links
│   ├── Footer.tsx             # Simple footer
│   └── ScrollRevealInit.tsx   # Boots IntersectionObserver on mount
├── data.ts                   # ← All content lives here
├── tailwind.config.ts
├── postcss.config.js
├── next.config.js
├── tsconfig.json
└── yarn.lock
```

## Customising Content

All portfolio content lives in **`data.ts`** — edit experience, projects, skills and marquee items there without touching any component.

To update the hero copy, edit the `lines` array at the top of **`components/Hero.tsx`**.

## Tailwind Theme

Custom tokens defined in `tailwind.config.ts`:

```ts
colors: {
  cream:    '#f5f4f0',  // page background
  'grey-1': '#e8e7e3', // borders
  'grey-2': '#c4c2bc', // subtle / cursor ring
  'grey-3': '#8a8880', // muted text
  'grey-4': '#4a4946', // secondary text
  ink:      '#0a0a0a', // primary text + dark backgrounds
}
fontFamily: {
  serif: ['DM Serif Display', 'Georgia', 'serif'],
  sans:  ['DM Sans', 'system-ui', 'sans-serif'],
}
```
# portfolio-v3
