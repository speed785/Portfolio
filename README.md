# Portfolio

Personal portfolio site for **James Dumitru** — showcasing AI tooling, game development, systems programming, and hardware projects.

**Live:** [speed785.github.io/portfolio](https://speed785.github.io/portfolio/)

## Tech Stack

- **Vite** — dev server and production bundler
- **TypeScript** — strict mode, all interactivity in `src/main.ts`
- **SCSS** — styles in `src/style.scss`, compiled via Vite's built-in Sass support
- **GitHub Pages** — deployed to `gh-pages` branch via `gh-pages` package

## Featured Projects

| Project                                                                               | Stack              | Description                                                                                       |
| ------------------------------------------------------------------------------------- | ------------------ | ------------------------------------------------------------------------------------------------- |
| [AI Agent DevTools Suite](https://github.com/speed785/agentlens)                      | Python, TypeScript | Five libraries for AI agent pipelines: observability, memory, security, orchestration, evaluation |
| [Drift Crank](https://github.com/speed785/Drift_Crank)                                | Lua, Playdate SDK  | Arcade racer for the Panic Playdate — crank-driven drifting with pseudo-3D road effects           |
| [Linux Fingerprint Driver](https://github.com/speed785/validity-vfs0090-linux-driver) | C, libfprint       | Patched driver for Validity VFS0090 sensors on ThinkPad X1 Carbon (Ubuntu 24.04, kernel 6.17)     |
| [CAD-Works](https://github.com/speed785/CAD-Works)                                    | G-code, STL        | 3D printing projects for Ender 3 Pro — custom keycaps, printer upgrades, test towers              |
| [OSINT Tools](https://github.com/speed785/OSINT)                                      | Python, Scrapy     | Twitter hashtag crawler, Alibaba scraper, and data analysis dashboard                             |
| [AI Agents Starter Kit](https://github.com/speed785/ai-agents-starter-kit)            | Shell, Markdown    | Beginner-friendly template for building AI-assisted projects                                      |

## Getting Started

```bash
npm install       # install dependencies
npm run dev       # start dev server at localhost:5173
npm run build     # type-check + production build to dist/
npm run deploy    # build and deploy to GitHub Pages
```

## Project Structure

```
portfolio/
  index.html           # root HTML (Vite entry point)
  vite.config.ts       # Vite config (base: /portfolio/)
  tsconfig.json        # strict TypeScript config
  src/
    main.ts            # scroll reveals, card tilt, stat counters, parallax
    style.scss         # full styles with SCSS variables, nesting, responsive
  .skills/
    taste-skill.md     # high-agency frontend design rules
    output-skill.md    # full-output enforcement rules
  AGENTS.md            # AI agent guidance for maintaining this project
```

## License

MIT
