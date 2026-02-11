# BMBSQD Site

Modern Astro website for Bombsquad - Advanced Technology Leadership company with global presence spanning Los Angeles, Stockholm, and Singapore.

## 🚀 Tech Stack

- **[Astro](https://astro.build/)** - Static site generator with modern web standards
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework with oklch color system
- **[shadcn/ui](https://ui.shadcn.com/)** - Beautiful and accessible React components
- **[Lucide React](https://lucide.dev/)** - Modern SVG icon library
- **[Biome](https://biomejs.dev/)** - Fast linter and formatter
- **[CloudFlare Pages](https://pages.cloudflare.com/)** - Edge deployment platform
- **TypeScript** - Type-safe development

## 🛠️ Development

### Prerequisites

- Node.js 20+
- [Bun](https://bun.sh/)

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd bmbsqd-site

# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview

# Preview with CloudFlare Wrangler (production environment)
bun run preview:wrangler
```

### Available Scripts

- `bun run dev` - Start development server at `http://localhost:4321`
- `bun run build` - Build for production
- `bun run preview` - Preview production build locally
- `bun run preview:wrangler` - Preview with CloudFlare Wrangler at `http://localhost:8788`
- `bun run deploy` - Deploy to CloudFlare Pages
- `bun run lint` - Lint with Biome
- `bun run lint:fix` - Lint and auto-fix with Biome
- `bun run format` - Format with Biome

## 📁 Project Structure

```
src/
├── layouts/
│   └── BaseLayout.astro         # Base page layout with SEO and meta tags
├── pages/
│   └── index.astro              # Homepage
├── components/
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   └── ...
│   ├── ContactSection.astro     # Contact information and methods
│   ├── GlobalPresence.astro     # Three locations (LA, Stockholm, Singapore)
│   ├── HeroSection.astro        # Main hero section
│   ├── ServiceOfferings.astro   # Services and capabilities
│   ├── TechnologyExpertise.astro # Tech stack and expertise
│   └── TrackRecord.astro        # Achievements and client testimonials
├── styles/
│   └── global.css               # Global styles with Tailwind v4 configuration
└── lib/
    └── utils.ts                 # Utility functions for shadcn/ui
public/                          # Static assets
├── logo-white.png              # Company logo
├── favicon.svg                 # Site favicon
└── ...
```

## 🎨 Design System

### Colors

The site uses a professional monochrome color scheme:

- **Primary**: `hsl(0 0% 9%)` - Near black
- **Secondary**: `hsl(0 0% 96.1%)` - Light gray
- **Background**: `hsl(0 0% 100%)` - White
- **Muted**: `hsl(0 0% 45.1%)` - Medium gray

### Typography

- **Sans**: Inter, system fonts
- **Serif**: Crimson Text (for accent text)
- **Mono**: JetBrains Mono, Fira Code

### Components

All UI components follow shadcn/ui patterns with:
- Consistent spacing using CSS variables
- Accessible color contrast ratios
- Responsive design principles
- Clean, professional aesthetics

## 🌍 Global Presence

The site showcases Bombsquad's three strategic locations:

- **Los Angeles** - Silicon Beach headquarters and entertainment tech hub
- **Stockholm** - Nordic innovation center and European gateway
- **Singapore** - Asia-Pacific command center and fintech expertise

## 📱 Features

- **Responsive Design** - Mobile-first approach with breakpoints
- **SEO Optimized** - Meta tags, structured data, sitemap
- **Performance Focused** - Static generation, image optimization
- **Accessibility** - WCAG compliant components and patterns
- **Professional Animations** - Subtle, elegant transitions

## 🚀 Deployment

### CloudFlare Pages

The site is configured for CloudFlare Pages deployment:

```bash
# Deploy to production
bun run deploy
```

Build settings:
- **Build command**: `bun run build`
- **Output directory**: `dist`
- **Node version**: 20+

### Environment Variables

The following environment variables are automatically set:
- `NODE_ENV=production`
- `ENVIRONMENT=production`

## 🔧 Configuration

### Astro Config

Key configurations in `astro.config.ts`:
- Static output for CloudFlare Pages
- Tailwind CSS integration
- React components support
- Sitemap generation
- Image optimization

### Tailwind Config

Tailwind v4 is configured in `src/styles/global.css` with:
- Custom CSS variables for colors
- Professional shadow system
- Responsive breakpoints
- Animation utilities

## 📊 Track Record

The site highlights Bombsquad's achievements:
- 25+ years of technology leadership
- Multiple $100M+ exits
- Award-winning innovations (Sony Music, Paramount Pictures)
- Fortune 500 client portfolio

## 🛡️ Technology Expertise

Featured expertise areas:
- **Web3 & Blockchain** - Smart contracts, DeFi, NFT platforms
- **AI & Machine Learning** - Advanced algorithms and data science
- **Enterprise Development** - Scalable, secure solutions
- **Cloud Architecture** - Modern infrastructure and DevOps

## 📞 Contact

Professional contact methods integrated throughout the site:
- Strategic consultation requests
- Project partnership inquiries
- Technical expertise discussions
- Global presence coordination

## 📄 License

Copyright © 2024 Bombsquad (BMBSQD). All rights reserved.

---

Built with ❤️ using modern web technologies for a global technology leadership company.