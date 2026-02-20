# Bmbsqd - Premium Showroom Design System

## Brand Identity
**Company:** Bombsquad (bmbsqd) - Elite technology consulting firm
**Positioning:** Premium, calm, high-trust
**Direction:** Material-Minimalism showroom aesthetic. Stone tones, tactile quality, human-centric.

## Color Palette

### Primary Colors
- **Stone-50:** #FAF7F5 - Primary background
- **Stone-100:** #F5F5F4 - Secondary background, card fills
- **Stone-200:** #E7E5E4 - Borders, dividers
- **Stone-300:** #D6D3D1 - Hover borders
- **Stone-900:** #1C1917 - Primary text, dark sections
- **Warm Wood:** #A67B5B - Accent (warm)
- **Cool Aluminum:** #E2E8F0 - Accent (cool)

### Functional
- **Success/Stock:** #22C55E
- **Interactive border (active):** #1C1917 (2px)
- **Interactive border (hover):** #D6D3D1

## Typography

### Fonts
- **Display/Headings:** Cabinet Grotesk (800, 700, 500) - tracking: -0.05em
- **Body:** Satoshi (400, 500, 700) - modern, readable

### Scale
- Hero headline: 72px, weight 800, tracking-tight (-0.05em)
- Section headline: 48px, weight 800
- Card title: 24px, weight 700
- Body: 16-20px, weight 400/500, generous line-height (1.6-1.75)
- Label: 10px, bold, uppercase, tracking-widest
- Nav links: 14px, medium weight

## Spacing & Layout
- Border radius: 24-32px for cards, rounded-full for buttons
- Card padding: 32px
- Section padding: generous vertical (120-160px)
- Max-width: 80rem (1280px)
- Interactive borders: 2px

## Component Patterns

### Cards
- White background, 32px padding, 24px rounded corners
- Transparent 2px borders
- Active: 2px Stone-900 border, scale(1.02), shadow-xl
- Hover (non-active): #D6D3D1 border

### Glassmorphism (sticky elements only)
- backdrop-filter: blur(12px)
- White/90 or #FAF7F5/80 background

### Buttons
- Primary: #1C1917 bg, white text, rounded-full, 16px padding
- Secondary: transparent, Stone-900 text, underline or border

### Material Highlight Badge
- 24px padding, white/90 bg, backdrop-blur, rounded-2xl
- Top: 10px bold uppercase tracking-widest label
- Bottom: 14px medium description

## Animation
- Entry: fade-in-up (0.8s ease-out)
- Hover: cubic-bezier(0.4, 0, 0.2, 1), scale 1.02-1.05x
- Transitions: subtle, calm, no flashiness
- Image hover: grayscale-to-color filter

## Visual Motifs
- Stone/neutral tones throughout
- Material textures: anodized metal, grain-heavy wood, leather references
- Generous whitespace
- Horizontal dividers (#E7E5E4), no vertical borders
- mix-blend-multiply on images over stone backgrounds
