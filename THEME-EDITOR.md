# Theme Editor

A client-side theme testing tool for the BMBSQD site.

## Usage

1. **Open Theme Editor**: Press `CTRL-B` (or `CMD-B` on Mac) while browsing the site
2. **Toggle Dark Mode**: Use the switch in the top-right corner to instantly switch between light and dark modes
3. **View Current Theme**: The editor will display the current theme variables in CSS format
4. **Edit Theme**: Modify the CSS values to test different color schemes, including oklch colors
5. **Apply Changes**: Click "Apply Theme" to see changes instantly
6. **Reset**: Click "Reset" to revert to current theme
7. **Close**: Press `Escape` or click "Cancel" to close the editor

## Theme Variables

The theme editor manages these CSS custom properties:

- `background` - Main background color
- `foreground` - Main text color
- `primary` / `primary-foreground` - Primary colors
- `secondary` / `secondary-foreground` - Secondary colors
- `card` / `card-foreground` - Card background/text
- `muted` / `muted-foreground` - Muted colors
- `accent` / `accent-foreground` - Accent colors
- `destructive` / `destructive-foreground` - Error/warning colors
- `border` - Border color
- `input` - Input field background
- `ring` - Focus ring color

## Example Theme

```css
:root {
  --background: oklch(0.9399 0.0203 345.6985);
  --foreground: oklch(0.4712 0 0);
  --primary: oklch(0.6209 0.1801 348.1385);
  --primary-foreground: oklch(1.0000 0 0);
  --secondary: oklch(0.8095 0.0694 198.1863);
  --secondary-foreground: oklch(0.3211 0 0);
}

.dark {
  --background: oklch(0.2497 0.0305 234.1628);
  --foreground: oklch(0.9306 0.0197 349.0785);
  --primary: oklch(0.9195 0.0801 87.6670);
  --primary-foreground: oklch(0.2497 0.0305 234.1628);
}
```

## Features

- **Dark Mode Toggle**: Instantly switch between light and dark modes with persistent localStorage storage
- **CSS Support**: Direct CSS editing with full support for :root, .dark selectors, and @theme blocks
- **Live Preview**: Changes apply instantly without page refresh
- **OKLCH Colors**: Full support for modern OKLCH color format
- **Persistent State**: Dark mode preference saved to localStorage

## Notes

- Changes are temporary and only affect the current browser session
- Dark mode toggle preference is saved to localStorage
- Use this for testing themes before implementing them in CSS
- The editor is only available in development/testing environments