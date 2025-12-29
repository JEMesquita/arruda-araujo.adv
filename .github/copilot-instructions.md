# Copilot Instructions - Arruda & Araújo Law Firm Website

## Project Overview
This is a luxury law firm website built with React, TypeScript, Vite, and shadcn/ui. The site emphasizes premium aesthetics with a dark theme and gold accents, targeting a professional legal clientele in Ceará, Brazil.

## Architecture & Structure

### Single-Page Application Pattern
- **Main entry**: `src/App.tsx` configures routing, providers (QueryClient, TooltipProvider), and global toasters
- **Primary route**: `src/pages/Index.tsx` orchestrates all section components in sequence
- **Sections as components**: Each major content area (Hero, About, Practice Areas, etc.) is a standalone component in `src/components/`
- No backend or API calls - this is a static presentation site with contact forms that link to external services (WhatsApp)

### Component Organization
- **Section components** (`src/components/`): Full-width sections like `HeroSection.tsx`, `AboutSection.tsx`, etc.
- **UI primitives** (`src/components/ui/`): shadcn/ui components with custom variants (see Button variants: `gold`, `goldOutline`)
- **Utility helpers** (`src/lib/utils.ts`): Standard `cn()` utility for className merging with tailwind-merge

## Styling System

### Theme Foundation
- **Dark-first design**: Background `hsl(0 0% 0%)`, all styles assume dark mode
- **Gold accent system**: Two custom CSS variables define the brand:
  - `--gold-light: 48 65% 77%` (lighter gold)
  - `--gold-dark: 30 52% 44%` (richer gold)
- **Typography hierarchy**:
  - Headings: `Cormorant Garamond` serif (via `font-heading`)
  - Body: `Montserrat` sans-serif (via `font-body`)

### Custom Utility Classes (defined in `src/index.css`)
```css
.gold-gradient-text       /* Gold gradient text effect with bg-clip-text */
.gold-gradient-bg         /* Gold gradient background */
.gold-border              /* Gold border with 30% opacity */
.section-padding          /* Responsive py-20 md:py-32 px-4 md:px-8 */
.container-custom         /* max-w-7xl mx-auto */
```

### Animation System
- **Staggered entrance animations**: Components use `animate-fade-up` with `delay-{100-500}` classes
- Initial state: `opacity-0` on elements with animation classes
- Custom keyframes: `fadeUp`, `fadeIn`, `goldGlow`, `slideUp` (see `src/index.css` @keyframes)
- **Available animation utilities**:
  - `.animate-fade-up`: Fades in while sliding up 30px
  - `.animate-fade-in`: Simple fade-in effect
  - `.animate-glow`: Pulsing gold glow effect (infinite loop)
  - `.animate-slide-up`: Quick slide-up animation
  - Delay classes: `.delay-100` through `.delay-500` (100ms increments)

### Button Variants
When using `Button` component, prefer custom law firm variants:
- `variant="gold"`: Primary CTA with gradient and glow effect on hover
- `variant="goldOutline"`: Secondary CTA with transparent bg and gold border

## Development Workflow

### Commands
- **Dev server**: `npm run dev` (runs on `http://[::]:8080` with Vite + SWC hot reload)
- **Build**: `npm run build` (production) or `npm run build:dev` (development mode)
- **Preview**: `npm run preview` (preview production build locally)
- **Lint**: `npm run lint` (ESLint flat config with TypeScript parser)
- **Package manager**: Use `npm` (standard commands) - bun.lockb exists but npm is the primary package manager

### Path Aliases
All imports use `@/` alias pointing to `src/`:
```typescript
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
```

### TypeScript Configuration
- **Relaxed strict checks**: `noImplicitAny`, `strictNullChecks`, `noUnusedLocals` are disabled
- **Reason**: Lovable.dev project optimized for rapid prototyping over strict type safety

## Content & Localization
- **Language**: All content is in Brazilian Portuguese (pt-BR)
- **Legal context**: Text emphasizes 20+ years of experience, specific practice areas (Criminal, Civil, Social Security, Military Law, Real Estate)
- **Location**: Fortaleza, Ceará, Brazil with metropolitan area coverage
- **Contact**: WhatsApp integration via `https://wa.me/5585989198911`

## Lovable.dev Integration
- **Component tagging**: `lovable-tagger` plugin active in dev mode (see `vite.config.ts`)
- **Live sync**: Changes pushed to repo sync with Lovable platform
- **README context**: Project managed via Lovable.dev platform (URL in README)

## Key Conventions

1. **No CSS modules or styled-components**: Use Tailwind utilities and custom classes from `index.css`
2. **Responsive breakpoints**: Default to mobile-first, use `md:` and `lg:` prefixes for larger screens
3. **Asset handling**: Images imported directly (e.g., `import logo from "@/assets/logo.png"`) and used with Vite's asset handling
4. **Section IDs**: Navigation targets use hash IDs (e.g., `#sobre`, `#contato`) matching section elements
5. **Icons**: Use `lucide-react` for all iconography
6. **Forms**: No backend integration - forms link to external services (WhatsApp) or are styled for future integration

## Common Patterns

### Section Component Structure
```tsx
const SectionName = () => {
  return (
    <section id="section-id" className="section-padding bg-background">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-heading gold-gradient-text mb-8">
          Section Title
        </h2>
        {/* Content with animate-fade-up and delay classes */}
      </div>
    </section>
  );
};
```

### Adding New Sections
1. Create component in `src/components/NewSection.tsx`
2. Import and place in `src/pages/Index.tsx` in desired order
3. Use `section-padding`, `container-custom`, and animation utilities
4. Ensure proper `id` attribute for navigation

## Performance Notes
- Vite dev server uses SWC for fast React refresh
- No code splitting configured - single bundle approach
- Images should be optimized before import (handled by Vite)
