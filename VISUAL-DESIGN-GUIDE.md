# HAAL Lab Website - Visual Design Guide

## Design Philosophy

HAAL Lab's website embodies a **deep-tech, enterprise-grade aesthetic** that communicates reliability, technical excellence, and professional maturity. The design avoids startup-style hype in favor of measured confidence and engineering precision.

---

## Color System

### Primary Colors
- **Cyan Accent** (`hl-cyan`): `#00E0FF`
  - Usage: CTAs, highlights, interactive elements, technical accents
  - Represents: Technology, intelligence, clarity
  
- **Background** (`hl-surface`): Dark with opacity variations
  - Primary surface: `hl-surface/60` - Main card backgrounds
  - Secondary surface: `hl-surface-2` - Nested elements
  - Tertiary surface: `hl-surface/30` - Section backgrounds

### Text Hierarchy
- **Foreground** (Primary text): High contrast white
- **HL-Muted** (Secondary text): `text-hl-muted` - Descriptions, captions
- **HL-Muted/80** (Tertiary text): Subtle labels, metadata

### Borders & Accents
- **HL-Border**: `border-hl-border` - Subtle card borders
- **HL-Cyan/40**: Semi-transparent cyan for hover states
- **Gradient glows**: Radial gradients for depth

---

## Typography System

### Font Families
1. **Display Font** (`font-display`)
   - Headlines, hero titles
   - Bold, attention-grabbing
   
2. **Base Font** (system default)
   - Body copy, paragraphs
   - Medium weight for readability
   
3. **Mono Font** (`font-mono`)
   - Technical labels, metadata, eyebrows
   - Uppercase with wide tracking

### Type Scale
- **Eyebrows**: `text-[11px] uppercase tracking-[0.18em]`
- **H1 (Hero)**: `text-4xl md:text-6xl lg:text-[64px]`
- **H2 (Section)**: `text-3xl md:text-4xl`
- **H3 (Card)**: `text-xl md:text-2xl`
- **Body Large**: `text-lg leading-relaxed`
- **Body**: `text-base leading-relaxed`
- **Body Small**: `text-sm leading-relaxed`
- **Caption**: `text-xs`

### Typography Patterns
```tsx
// Eyebrow
<span className="font-mono text-[11px] uppercase tracking-[0.18em] text-hl-muted">
  Eyebrow Text
</span>

// Section Heading
<h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
  Section Heading
</h2>

// Lead Paragraph
<p className="text-lg leading-relaxed text-hl-muted">
  Lead paragraph with generous spacing
</p>
```

---

## Spacing System

### Container Patterns
- **hl-container**: Horizontal padding with max-width constraint
- **hl-section-pad**: Standard section padding (responsive)
- **SectionShell**: Wrapper with consistent spacing

### Spacing Scale
- Gap between cards: `gap-4` (1rem)
- Gap in grids: `gap-6` to `gap-12` based on size
- Section vertical padding: `py-14` to `py-20`
- Card internal padding: `p-6` to `p-10`

---

## Component Patterns

### 1. Premium Card
```tsx
<article className="hl-card-hover group relative overflow-hidden rounded-2xl border border-hl-border bg-hl-surface/60 p-8 hl-card-glow">
  {/* Gradient glow on hover */}
  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br from-hl-cyan/10 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
  
  {/* Content */}
  <div className="relative">
    {/* Card content */}
  </div>
</article>
```

### 2. Icon Container
```tsx
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-hl-border bg-hl-surface-2 text-hl-cyan">
  <Icon className="h-5 w-5" />
</div>
```

### 3. Primary CTA Button
```tsx
<Link
  href="/contact"
  className="group inline-flex items-center gap-2 rounded-full bg-hl-cyan px-6 py-3.5 text-sm font-semibold text-[#04141A] transition-all hover:bg-hl-cyan/90 hover:shadow-[0_0_40px_-8px_rgba(0,224,255,0.6)]"
>
  Button Text
  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
</Link>
```

### 4. Secondary Button
```tsx
<Link
  href="/projects"
  className="inline-flex items-center gap-2 rounded-full border border-hl-border bg-hl-surface/40 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:border-hl-cyan/40 hover:text-hl-cyan"
>
  Button Text
</Link>
```

### 5. Tag Component
```tsx
<span className="inline-flex rounded-full border border-hl-border bg-hl-surface-2 px-3 py-1 text-xs font-medium text-hl-muted">
  Tag Label
</span>
```

---

## Animation Guidelines

### Principles
1. **Subtle and purposeful** - No distracting motion
2. **Smooth transitions** - Ease curves for natural feel
3. **Progressive enhancement** - Works without animations
4. **Performance-conscious** - GPU-accelerated properties

### Common Animations

#### Reveal on Scroll
```tsx
<Reveal delay={0.1}>
  <Component />
</Reveal>
```

#### Hover Effects
```tsx
// Card hover
className="transition-colors hover:bg-hl-surface-2"

// CTA glow
className="hover:shadow-[0_0_40px_-8px_rgba(0,224,255,0.6)]"

// Arrow shift
className="transition-transform group-hover:translate-x-0.5"
```

#### Flowing Elements
```tsx
<motion.div
  animate={{ x: [0, 40, 0] }}
  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
  className="h-1 w-1 rounded-full bg-hl-cyan"
/>
```

---

## Section Templates

### 1. Standard Section
```tsx
<SectionShell id="section-id">
  <SectionHeader
    eyebrow="Category"
    heading="Section Title"
    lead="Supporting description that provides context."
  />
  
  <div className="mt-14">
    {/* Section content */}
  </div>
</SectionShell>
```

### 2. Alternating Section (with background)
```tsx
<SectionShell id="section-id" className="border-y border-hl-border bg-hl-surface/30">
  {/* Content */}
</SectionShell>
```

### 3. Timeline/Process Section
- Vertical connector line
- Phase numbers and icons
- Arrow indicators between phases
- CTA at the end

### 4. Grid Section
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`
- Consistent gap spacing
- Staggered reveal animations

---

## Responsive Design

### Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: `md:` (640px+)
- **Desktop**: `lg:` (1024px+)
- **Large**: `xl:` (1280px+)

### Mobile-First Patterns
```tsx
// Stack on mobile, grid on desktop
className="grid grid-cols-1 lg:grid-cols-3"

// Smaller text on mobile
className="text-2xl md:text-4xl"

// Hide on mobile, show on desktop
className="hidden lg:flex"

// Show on mobile, hide on desktop
className="flex lg:hidden"
```

---

## Visual Effects

### 1. Grid Background
```tsx
<div className="pointer-events-none absolute inset-0 hl-grid-bg opacity-60" />
```

### 2. Radial Glow
```tsx
<div className="pointer-events-none absolute inset-0 hl-radial-glow" />
```

### 3. Card Glow (on hover)
```tsx
className="hl-card-glow"
```

### 4. Gradient Accent Line
```tsx
<div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-[#4AF3F8]/20 to-transparent" />
```

### 5. Blurred Background Orb
```tsx
<div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-hl-cyan/20 to-transparent blur-3xl" />
```

---

## Icon Usage

### Size Standards
- **Large** (section headers): `h-6 w-6` or `h-7 w-7`
- **Medium** (cards): `h-5 w-5`
- **Small** (inline, bullets): `h-4 w-4`
- **Tiny** (micro-indicators): `h-3 w-3`

### Icon Colors
- Primary: `text-hl-cyan`
- Muted: `text-hl-muted`
- Foreground: `text-foreground`

### Icon Sources
- Lucide React icons library
- Consistent style across all icons
- Outline style preferred over filled

---

## CTA Strategy

### CTA Hierarchy
1. **Primary CTA**: Cyan button with glow
   - "Discuss Your AI Project"
   - "Request Technical Discussion"
   
2. **Secondary CTA**: Border button with hover
   - "Explore Our Work"
   - "Learn More"
   
3. **Tertiary CTA**: Text link with arrow
   - "Read more →"
   - "View all →"

### CTA Placement
- Hero section (primary + secondary)
- After service cards
- End of process section
- Within case study
- Footer section
- Header navigation

---

## Content Patterns

### Value Proposition Format
```
[Eyebrow: Category]
[Heading: Clear benefit or capability]
[Lead: Supporting detail that adds context]
[CTA: Action to take]
```

### Feature Card Format
```
[Icon: Visual identifier]
[Title: Feature name]
[Description: What it does]
[Optional: Bullets or metrics]
```

### Case Study Format
```
[Eyebrow + Badge]
[Headline: Project name]
[Description: Overview]
[Tags: Technology/approach]

Three columns:
- Challenge (problem)
- Solution (approach)
- Outcome (results)

[Metrics bar]
[CTA]
```

---

## Accessibility Considerations

### Focus States
- All interactive elements have visible focus rings
- Keyboard navigation supported
- Focus visible on tab

### Color Contrast
- Text meets WCAG AA standards
- Interactive elements have sufficient contrast
- Hover states are perceivable

### Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Meaningful link text
- ARIA labels on icon buttons
- Proper form labels

### Screen Readers
- Alt text on images
- ARIA labels where needed
- Semantic landmarks (nav, main, footer)

---

## Design Don'ts

❌ **Avoid:**
- Excessive animations or motion
- Startup-style hype language ("revolutionary", "game-changing")
- Generic stock imagery
- Cluttered layouts
- Inconsistent spacing
- Poor contrast
- Tiny text
- Too many CTAs competing for attention
- Bright, aggressive colors
- Playful or casual tone

✅ **Instead:**
- Subtle, purposeful animations
- Measured, confident language
- Technical diagrams and architecture visuals
- Generous white space
- Consistent spacing system
- High contrast for readability
- Proper type scale
- Strategic CTA placement
- Professional color palette
- Serious, engineering-focused tone

---

## Maintenance Guidelines

### Adding New Sections
1. Use `SectionShell` wrapper
2. Start with `SectionHeader` (eyebrow + heading + lead)
3. Apply consistent spacing (`mt-14` for content)
4. Use `Reveal` for animations
5. Include CTA if conversion-focused

### Creating New Components
1. Follow existing component patterns
2. Use design system variables (hl-*)
3. Ensure responsive design
4. Add hover states for interactive elements
5. Test with keyboard navigation

### Color Customization
- All colors defined in Tailwind config
- Use `hl-*` prefixed utilities
- Maintain contrast ratios
- Test in dark mode (primary theme)

---

## Performance Optimization

### Image Guidelines
- Use Next.js Image component
- Provide width and height
- Use appropriate formats (WebP, SVG)
- Lazy load below fold

### Animation Performance
- Use `transform` and `opacity` (GPU-accelerated)
- Avoid animating `width`, `height`, `left`, `top`
- Use `will-change` sparingly
- Respect `prefers-reduced-motion`

### Code Splitting
- Components lazy-loaded where appropriate
- Dynamic imports for heavy components
- Framer Motion loaded only where needed

---

## Design System Checklist

When creating new pages or sections:

- [ ] Uses consistent spacing scale
- [ ] Follows typography hierarchy
- [ ] Includes proper responsive breakpoints
- [ ] Has appropriate hover/focus states
- [ ] Uses design system colors (hl-*)
- [ ] Includes Reveal animations
- [ ] Has clear CTAs
- [ ] Maintains accessibility standards
- [ ] Follows semantic HTML
- [ ] Includes proper meta data
- [ ] Tested on mobile, tablet, desktop
- [ ] No TypeScript errors
- [ ] Follows naming conventions

---

**Last Updated:** 2026-07-15  
**Version:** 1.0  
**Maintained by:** HAAL Lab Design System
