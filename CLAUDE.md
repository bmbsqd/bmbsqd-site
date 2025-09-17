# bmbsqd-site

Modern Astro site with Tailwind CSS v4 and CloudFlare Pages deployment.

## Tech Stack

- **Astro** - Static site generator with modern web standards
- **Tailwind CSS v4** - Utility-first CSS framework with oklch color system
- **CloudFlare Pages** - Edge deployment platform
- **TypeScript** - Type-safe development
- **Sharp** - High-performance image optimization

## Development Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment

```bash
# Deploy to CloudFlare Pages
npm run deploy
```

## Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro    # Base page layout
├── pages/
│   └── index.astro         # Homepage
└── styles/
    └── global.css          # Global styles with Tailwind v4
public/                     # Static assets
astro.config.ts            # Astro configuration
wrangler.toml              # CloudFlare deployment config
```

## Code Style Preferences

- Use **tabs** for indentation (not spaces)
- Prefer **camelCase** for JavaScript/TypeScript
- Use **kebab-case** for file names and directories
- Prefer **functional style** with ternary operators and `.map()`
- Use **real functions** instead of arrow functions where applicable
- Use **oklch colors** for better color consistency
- Avoid unnecessary comments, use descriptive names instead

## CloudFlare Pages Notes

- Static output optimized for edge deployment
- Automatic compression and sitemap generation
- Image optimization with responsive styles
- Prefetch strategy for improved performance