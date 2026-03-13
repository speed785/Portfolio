---
name: design-taste-frontend
description: Senior UI/UX Engineer. Architect digital interfaces overriding default LLM biases. Enforces metric-based rules, strict component architecture, CSS hardware acceleration, and balanced design engineering.
---

# High-Agency Frontend Skill

## 1. ACTIVE BASELINE CONFIGURATION
* DESIGN_VARIANCE: 8 (1=Perfect Symmetry, 10=Artsy Chaos)
* MOTION_INTENSITY: 6 (1=Static/No movement, 10=Cinematic/Magic Physics)
* VISUAL_DENSITY: 4 (1=Art Gallery/Airy, 10=Pilot Cockpit/Packed Data)

**AI Instruction:** The standard baseline for all generations is strictly set to these values (8, 6, 4). Do not ask the user to edit this file. Otherwise, ALWAYS listen to the user: adapt these values dynamically based on what they explicitly request in their chat prompts. Use these baseline (or user-overridden) values as your global variables to drive the specific logic in Sections 3 through 7.

## 2. DEFAULT ARCHITECTURE & CONVENTIONS
This is a vanilla HTML/CSS/JS project (no React, no Tailwind, no build step). Adapt rules accordingly:

* **No Framework:** Pure semantic HTML5, CSS custom properties, vanilla ES6+ JavaScript.
* **No Build Step:** No npm, no bundler. Files are served directly via GitHub Pages.
* **ANTI-EMOJI POLICY [CRITICAL]:** NEVER use emojis in code, markup, text content, or alt text. Use clean SVG primitives or icon paths instead. Emojis are BANNED.
* **Responsiveness & Spacing:**
  * Use CSS Grid for layout. NEVER use complex flexbox percentage math.
  * Contain page layouts using `max-width: 1400px; margin: 0 auto`.
  * NEVER use `height: 100vh` for full-height sections. ALWAYS use `min-height: 100dvh`.
  * Mobile-first: stack to single column below 768px.
* **Icons:** Inline SVG only. No icon libraries (no npm).

## 3. DESIGN ENGINEERING DIRECTIVES (Bias Correction)

**Rule 1: Deterministic Typography**
* Headlines: Large, tight tracking, heavy weight. Use `Satoshi` or `Cabinet Grotesk`.
* Body: Clean sans-serif. Use `Geist` or `IBM Plex Sans`. Max line width ~65ch.
* BANNED: Inter font. Serif fonts for this project.

**Rule 2: Color Calibration**
* Max 1 Accent Color. Saturation < 80%.
* BANNED: Purple/blue "AI aesthetic", neon gradients, outer glows.
* Use neutral bases (Zinc/Slate/Stone) with one high-contrast accent (e.g., Emerald, Electric Blue, Deep Rose).
* Stick to one palette across the entire site.

**Rule 3: Layout Diversification**
* BANNED: Centered Hero sections (DESIGN_VARIANCE is 8).
* Use split-screen (text left, visual right), asymmetric whitespace, or left-aligned content.
* BANNED: 3-equal-cards-in-a-row layout. Use zig-zag, asymmetric grid, or 2-column offset patterns.

**Rule 4: Materiality & Shadows**
* Use cards ONLY when elevation communicates hierarchy.
* Shadows should be tinted to the background hue, wide-spreading, and subtle.
* No generic `box-shadow: 0 2px 4px rgba(0,0,0,0.1)`.

**Rule 5: Interactive States**
* Hover: subtle lift (`translateY(-2px)`) with shadow transition.
* Active: press down (`scale(0.98)` or `translateY(1px)`).
* Focus: visible outline for accessibility.

**Rule 6: Data & Content**
* No filler words: "Elevate", "Seamless", "Unleash", "Next-Gen" are BANNED.
* No generic placeholder names. Use real project names and concrete descriptions.

## 4. CREATIVE PROACTIVITY
* Scroll-triggered fade-in/slide-in using IntersectionObserver.
* Staggered reveals for lists/grids (CSS `animation-delay` cascade).
* Smooth anchor scrolling via CSS `scroll-behavior: smooth`.
* Subtle parallax or scale effects on scroll for hero section.
* Hardware-accelerated: animate ONLY `transform` and `opacity`. Never `top`, `left`, `width`, `height`.

## 5. AI TELLS (Forbidden Patterns)
* NO pure black (#000000). Use off-black (e.g., #0f172a, #1a1a2e).
* NO oversaturated accents.
* NO neon/outer glows.
* NO excessive gradient text on large headers.
* NO generic "3 cards in a row" feature sections.
* NO centered hero when variance > 4.
* NO Inter font.
* NO Unsplash images. Use inline SVGs or picsum.photos with seeds.
* NO marketing cliches in copy.

## 6. PERFORMANCE GUARDRAILS
* Canvas effects on `pointer-events: none` fixed layers only.
* Z-index used sparingly and systematically.
* Respect `prefers-reduced-motion` — disable all animations when set.
* Lazy-load fonts with `font-display: swap`.
