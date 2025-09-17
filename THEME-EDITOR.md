# Theme Editor

A client-side theme testing tool for the BMBSQD site.

## Usage

1. **Open Theme Editor**: Press `CTRL-B` (or `CMD-B` on Mac) while browsing the site
2. **View Current Theme**: The editor will display the current theme variables in JSON format
3. **Edit Theme**: Modify the JSON values to test different color schemes
4. **Apply Changes**: Click "Apply Theme" to see changes instantly
5. **Reset**: Click "Reset" to revert to current theme
6. **Close**: Press `Escape` or click "Cancel" to close the editor

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

```json
{
  "background": "hsl(240 10% 3.9%)",
  "foreground": "hsl(0 0% 98%)",
  "primary": "hsl(142 86% 28%)",
  "primary-foreground": "hsl(0 0% 98%)",
  "secondary": "hsl(240 4% 16%)",
  "secondary-foreground": "hsl(0 0% 98%)"
}
```

## Notes

- Changes are temporary and only affect the current browser session
- Use this for testing themes before implementing them in CSS
- The editor is only available in development/testing environments