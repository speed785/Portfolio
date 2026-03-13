# AGENTS.md — Portfolio Site

## Project Overview
Personal portfolio website for **James Dumitru** (GitHub: speed785). Built with **Vite + TypeScript + SCSS**, deployed via GitHub Pages.

## Repository
- **GitHub:** `speed785/portfolio`
- **Live URL:** `https://speed785.github.io/portfolio/`
- **Deploy:** GitHub Pages via `gh-pages` branch (built from `npm run deploy`)

## Architecture
```
portfolio/
  index.html              # Root HTML (Vite entry point)
  vite.config.ts          # Vite config (base: /portfolio/)
  tsconfig.json           # TypeScript strict config
  package.json            # Scripts: dev, build, preview, deploy
  src/
    main.ts               # TypeScript entry — animations, scroll effects, interactivity
    style.scss            # All styles (SCSS with variables, nesting, mixins)
  .skills/                # AI skill files for design and output quality
    taste-skill.md        # High-agency frontend design rules
    output-skill.md       # Full-output enforcement rules
  AGENTS.md               # This file
```

## Tech Stack
- **Vite** — dev server + build tool
- **TypeScript** — strict mode, all code in `src/main.ts`
- **SCSS** — all styles in `src/style.scss`, compiled by Vite's built-in Sass support
- **gh-pages** — deployment to GitHub Pages

## Commands
```bash
npm install         # Install dependencies
npm run dev         # Start dev server (localhost:5173)
npm run build       # Type-check + production build to dist/
npm run preview     # Preview production build locally
npm run deploy      # Build and deploy to GitHub Pages
```

## Design Direction
This is NOT a dark hacker terminal aesthetic. The design is:
- **Light, airy, and modern** — off-white backgrounds (#fafaf9), clean typography
- **Asymmetric layouts** — split-screen hero, zig-zag project grid
- **Tasteful motion** — scroll-triggered reveals, 3D card tilt on hover, staggered animations
- **Premium typography** — Outfit for headlines and body, JetBrains Mono for code/labels
- **Single accent color** — emerald-600 (#059669), desaturated and elegant
- **No emojis anywhere**

## Content: Featured Projects (6 cards)
1. **AI Agent DevTools Suite** — agentlens, neuromem, sentinel-inject, synapse-orchestrator, evalforge. Python + TypeScript. 5 tools, 100% test coverage, CI/CD, dual SDK.
2. **Drift Crank** — Playdate arcade racer. Crank-driven drifting, Lua, CI pipeline.
3. **Linux Fingerprint Driver** — C driver for Validity VFS0090. Fixed upstream libfprint API breakage. Ubuntu 24.04.
4. **CAD-Works** — 3D printing projects. G-code, STL, custom keycaps, Ender 3 Pro.
5. **OSINT Tools** — Python/Scrapy web crawlers. Twitter hashtag crawler, Alibaba scraper.
6. **AI Agents Starter Kit** — Beginner-friendly template for AI-assisted projects.

## Agent Roles

### Design Agent
- Enforces taste-skill rules (see `.skills/taste-skill.md`)
- Ensures asymmetric layouts, proper typography scale, desaturated palette
- Blocks AI-slop patterns: no centered heroes (variance > 4), no 3-equal-cards, no neon glows, no pure black, no Inter font
- Mobile-first: every layout must collapse cleanly to single-column under 768px

### Code Agent
- TypeScript: strict mode, proper typing on all functions and variables
- SCSS: use variables, nesting, and `@each` loops — no raw CSS values repeated
- HTML: semantic elements (header, nav, section, article, footer)
- Performance: hardware-accelerated transforms only, requestAnimationFrame for continuous effects, passive event listeners

### Content Agent
- All copy must be concrete and specific (no "elevate", "seamless", "unleash", "next-gen")
- Project descriptions should highlight the *what* and *why*, not marketing fluff
- GitHub links must point to actual repos under `github.com/speed785/`

### QA Agent
- Run `npm run build` — must pass with zero errors
- Verify all links resolve (GitHub repos, docs pages)
- Test responsive breakpoints: 320px, 768px, 1024px, 1440px
- Validate HTML (no unclosed tags, proper nesting)
- Check contrast ratios for accessibility (WCAG AA minimum)
- Ensure animations respect `prefers-reduced-motion`

## Key Links
| Resource | URL |
|----------|-----|
| GitHub Profile | https://github.com/speed785 |
| AI Suite - agentlens | https://github.com/speed785/agentlens |
| AI Suite - neuromem | https://github.com/speed785/neuromem |
| AI Suite - sentinel-inject | https://github.com/speed785/sentinel-inject |
| AI Suite - synapse-orchestrator | https://github.com/speed785/synapse-orchestrator |
| AI Suite - evalforge | https://github.com/speed785/evalforge |
| Drift Crank | https://github.com/speed785/Drift_Crank |
| Linux Driver | https://github.com/speed785/validity-vfs0090-linux-driver |
| CAD-Works | https://github.com/speed785/CAD-Works |
| OSINT | https://github.com/speed785/OSINT |
| AI Starter Kit | https://github.com/speed785/ai-agents-starter-kit |
| Linux Driver YouTube Demo | https://www.youtube.com/watch?v=dYe8eKaoUSE |

## Rules for AI Agents
1. Always read `.skills/taste-skill.md` before generating or modifying any frontend code.
2. Always read `.skills/output-skill.md` before any code generation task.
3. Only add dependencies via `package.json` — no CDN scripts, no inline `<script>` tags for libraries.
4. Never use placeholder images from Unsplash. Use `picsum.photos` with seeds or inline SVGs.
5. Never generate partial code. Every edit must be complete and runnable.
6. Test changes with `npm run build` — must compile with zero TypeScript errors.
7. All interactivity goes in `src/main.ts`. All styles go in `src/style.scss`. Keep it simple.
