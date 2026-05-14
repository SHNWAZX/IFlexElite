<div align="center">

# ✦ IFlexElite ✦

### *Crafting interfaces that feel inevitable.*

[![Made with TanStack Start](https://img.shields.io/badge/TanStack-Start-FF4154?style=for-the-badge&logo=react)](https://tanstack.com/start)
[![React 19](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind v4](https://img.shields.io/badge/Tailwind-v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev)

**[ Repo ↗](https://github.com/IFlexElite/IFlexElite)** · **[Twitter ↗](https://x.com/IFlexElite)** · **[Instagram ↗](https://instagram.com/iflexelite)**

![Repo](https://img.shields.io/badge/repo-IFlexElite%2FIFlexElite-181717?style=flat-square&logo=github)
![Stars](https://img.shields.io/github/stars/IFlexElite/IFlexElite?style=flat-square&logo=github)
![License](https://img.shields.io/badge/license-MIT-22c55e?style=flat-square)

</div>

---

## ◆ About

A high-end personal portfolio for **IFlexElite** — independent web developer & UX strategist.
Built around editorial typography, liquid-glass surfaces, motion-rich storytelling, and
ambient audio that fades in as you scroll.

> *"Conversions up 4x. The design just works differently when it's built on real data."*

---

## ✧ Features

| | |
|---|---|
| 🎬 **Cinematic hero** | Auto-playing video background with blur-in headline animation |
| 🪟 **Liquid glass UI** | Custom backdrop-blur surfaces with gradient borders |
| 🎧 **Scroll audio** | Ambient track fades in/out via IntersectionObserver |
| 🖱️ **Custom cursor** | Pixel-art cursor — desktop only, never mobile |
| 🎥 **Lazy HLS video** | Hls.js streams load only when near viewport |
| ⚡ **Edge-deployed** | Cloudflare Workers SSR with `nodejs_compat` |
| 📱 **Responsive** | Mobile-first, fluid breakpoints, no layout shift |
| 🎨 **Design tokens** | OKLCH semantic colors, Instrument Serif + Barlow |

---

## ⚡ Quick start

```bash
# clone
git clone https://github.com/IFlexElite/IFlexElite.git
cd IFlexElite

# install
bun install

# dev
bun run dev

# production build
bun run build
```

Open **http://localhost:5173** — you're flying.

---

## 🧱 Stack

```text
┌──────────────────────────────────────────────┐
│  Framework   →  TanStack Start v1 (SSR)      │
│  Bundler     →  Vite 7                       │
│  Runtime     →  Cloudflare Workers           │
│  UI          →  React 19 + shadcn/ui         │
│  Styling     →  Tailwind CSS v4 (OKLCH)      │
│  Motion      →  motion/react                 │
│  Video       →  hls.js                       │
│  Type system →  TypeScript (strict)          │
└──────────────────────────────────────────────┘
```

---

## 🚀 Deploy anywhere

This project ships as a standard TanStack Start app — drop it on any modern host.

### Cloudflare Pages / Workers *(recommended — already configured)*
```bash
bun run build
bunx wrangler deploy
```

### Vercel
```bash
bunx vercel
```
TanStack Start auto-detects the Vercel adapter.

### Netlify
```bash
bunx netlify deploy --build
```

### Self-host (Node)
```bash
bun run build
bun run start   # serves the SSR output
```

### Lovable (one-click)
Click **Publish** in the Lovable editor → instant `*.lovable.app` URL.
Connect a custom domain from **Project Settings → Domains**.

---

## 📂 Structure

```text
src/
├─ routes/              → file-based routes (TanStack)
│  ├─ __root.tsx        → SSR shell, fonts, preconnects
│  └─ index.tsx         → home page
├─ components/
│  ├─ Portfolio.tsx     → all sections (Hero, Work, Services…)
│  ├─ HlsVideo.tsx      → lazy HLS player
│  ├─ ScrollAudio.tsx   → in-view audio with fade
│  ├─ AnimatedCursor.tsx→ desktop-only custom cursor
│  └─ BlurText.tsx      → blur-in word reveal
├─ styles.css           → design tokens + liquid-glass
└─ router.tsx           → router config
```

---

## 📜 License

MIT © **[IFlexElite](https://github.com/IFlexElite/IFlexElite)**

<div align="center">

— *built with care, shipped with speed* —

</div>
