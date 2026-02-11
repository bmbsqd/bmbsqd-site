# bmbsqd-site

Modern Astro site with Tailwind CSS v4, Biome, and CloudFlare Pages deployment.

## Tech Stack

- **Astro** - Static site generator with modern web standards
- **Tailwind CSS v4** - Utility-first CSS framework with oklch color system
- **Biome** - Fast linter and formatter (replaces ESLint + Prettier)
- **Bun** - Fast JS runtime and package manager
- **CloudFlare Pages** - Edge deployment platform
- **TypeScript** - Type-safe development
- **Sharp** - High-performance image optimization

## Development Setup

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

```bash
# Deploy to CloudFlare Pages
bun run deploy
```

## Linting & Formatting

```bash
# Lint
bun run lint

# Lint + auto-fix
bun run lint:fix

# Format
bun run format
```

Biome handles both linting and formatting. Config in `biome.json`.
Note: `.astro` files are excluded from Biome (it can't parse Astro template syntax).

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro    # Base page layout
├── pages/
│   └── index.astro         # Homepage
├── components/
│   ├── ui/                 # shadcn/ui components
│   └── *.astro             # Page section components
├── styles/
│   └── global.css          # Global styles with Tailwind v4
└── lib/
    └── utils.ts            # Utility functions
public/                     # Static assets
astro.config.ts             # Astro configuration
biome.json                  # Biome linter/formatter config
wrangler.toml               # CloudFlare deployment config
```

## Code Style

- Use **2-space indentation** (not tabs)
- Prefer **camelCase** for JavaScript/TypeScript
- Use **kebab-case** for file names and directories
- Prefer **functional style** with ternary operators and `.map()`
- Use **real functions** instead of arrow functions where applicable
- Use **single quotes**, no semicolons, trailing commas
- Use **oklch colors** for better color consistency
- Avoid unnecessary comments, use descriptive names instead

## CloudFlare Pages Notes

- Static output optimized for edge deployment
- Automatic compression and sitemap generation
- Image optimization with responsive styles
- Prefetch strategy for improved performance
