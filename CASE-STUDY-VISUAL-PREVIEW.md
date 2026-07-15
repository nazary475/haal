# Case Study Section - Visual Preview

## Section Header

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  SELECTED ENGINEERING CASE STUDIES                              │
│                                                                 │
│  Practical AI Systems for Complex Challenges                    │
│                                                                 │
│  Representative engagements demonstrating approaches to         │
│  solving complex AI engineering problems for organizations,     │
│  research groups, and technical teams.                          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Example Case Study Card Preview

### Case Study 1: Knowledge Discovery

```
╔═══════════════════════════════════════════════════════════════════╗
║                                                                   ║
║  🔵 RESEARCH ENGINEERING                           [📚 Icon]     ║
║                                                                   ║
║  Accelerating Knowledge Discovery Across Research Archives       ║
║                                                                   ║
║  Engineering a semantic search architecture to enable            ║
║  researchers to efficiently locate relevant information          ║
║  across distributed document repositories.                       ║
║                                                                   ║
║  [Document Processing]  [Semantic Search]  [Knowledge Org]      ║
║                                                                   ║
╠═══════════════╤═══════════════╤═══════════════════════════════════╣
║               │               │                                   ║
║  🔍 Context   │  💾 Challenge │  ⚡ Engineering Approach          ║
║               │               │                                   ║
║  • Research   │  • Distributed│  • Document processing            ║
║    archives   │    systems    │    workflows                      ║
║  • Papers &   │  • Keyword    │  • Semantic retrieval             ║
║    reports    │    limits     │    architecture                   ║
║  • Time spent │  • Lost       │  • Source-aware access            ║
║    searching  │    knowledge  │  • Research-focused UI            ║
║               │               │                                   ║
╠═══════════════╧═══════════════╧═══════════════════════════════════╣
║                                                                   ║
║  👥 Technical Considerations         ✓ Outcome                   ║
║                                                                   ║
║  • Large document collections        • Faster knowledge access   ║
║  • Multilingual support              • Better discovery          ║
║  • Source traceability               • Improved reuse            ║
║  • Data ownership policies           • Efficient onboarding      ║
║                                                                   ║
╚═══════════════════════════════════════════════════════════════════╝
```

## All Four Case Studies

### 1️⃣ Accelerating Knowledge Discovery
- **Domain:** Research Engineering
- **Icon:** 📚 BookOpen
- **Accent:** Cyan gradient
- **Focus:** Semantic search across research archives

### 2️⃣ Supporting Research Operations
- **Domain:** Operational Engineering  
- **Icon:** 🔄 Workflow
- **Accent:** Blue gradient
- **Focus:** Intelligent workflow assistance

### 3️⃣ Establishing Secure AI Infrastructure
- **Domain:** Infrastructure Engineering
- **Icon:** 🎯 Target
- **Accent:** Teal gradient
- **Focus:** Private AI deployment

### 4️⃣ Improving Specialized Document Understanding
- **Domain:** Model Engineering
- **Icon:** 🛡️ ShieldCheck
- **Accent:** Aqua gradient
- **Focus:** Custom task-specific models

## Bottom CTA

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Facing a Complex AI Engineering Challenge?                     │
│                                                                 │
│  Describe your technical requirements, constraints, and         │
│  objectives. Our engineering team will evaluate potential       │
│  approaches and provide a practical assessment.                 │
│                                                                 │
│                [Discuss Your Requirements →]                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

## Layout Breakpoints

### Mobile (< 768px)
```
┌──────────────┐
│   Context    │
├──────────────┤
│   Challenge  │
├──────────────┤
│   Approach   │
├──────────────┤
│ Considerations│
├──────────────┤
│   Outcome    │
└──────────────┘
```

### Tablet (768px - 1024px)
```
┌──────────┬──────────┐
│ Context  │Challenge │
├──────────┼──────────┤
│  Approach (spans)   │
├─────────────────────┤
│Considerations(spans)│
├──────────┬──────────┤
│          │ Outcome  │
└──────────┴──────────┘
```

### Desktop (1024px+)
```
┌─────────┬─────────┬─────────┐
│ Context │Challenge│ Approach│
├─────────┴─────────┼─────────┤
│  Considerations   │ Outcome │
│   (2 columns)     │         │
└───────────────────┴─────────┘
```

## Color Scheme

### Accent Gradients
- **Study 1:** Cyan (`from-hl-cyan/20`)
- **Study 2:** Blue (`from-[#6EA8FF]/20`)
- **Study 3:** Teal (`from-[#29C4F8]/20`)
- **Study 4:** Aqua (`from-[#4AF3F8]/20`)

### Text Hierarchy
- **Eyebrow:** `text-hl-muted` (uppercase, small, tracked)
- **Title:** `text-2xl md:text-3xl font-bold text-foreground`
- **Description:** `text-base text-hl-muted`
- **Section Headers:** `text-base font-bold text-foreground`
- **Content:** `text-sm text-hl-muted`

### Interactive Elements
- **Tags:** Pill-shaped, bordered, muted
- **Icons:** Circle background, cyan accent
- **CTA Button:** Cyan background, glow on hover
- **Cards:** Hover border color change

## Visual Effects

### Card Hover
- Border color shifts to cyan
- Subtle glow effect
- Smooth transition

### Reveal Animations
- Staggered entrance (delay: 0.1s per card)
- Fade in + slide up
- Respects `prefers-reduced-motion`

### Background Effects
- Grid pattern overlay (fine)
- Gradient accent glow (top-right)
- Subtle blur effect

## Typography

### Font Stack
```
Headings: Inter (tracking-tight)
Body: Inter (leading-relaxed)
Tags: Mono (uppercase, tracked)
```

### Sizes
```
Section Title: 2xl-3xl
Card Title: 2xl-3xl
Section Headers: base
Content: sm
Tags: xs
Eyebrows: [11px]
```

## Accessibility

### Semantic Structure
```html
<section id="case-studies">
  <header>
    <h2>Practical AI Systems...</h2>
  </header>
  <article> <!-- Case Study 1 -->
    <header>
      <h3>Title...</h3>
    </header>
    <div> <!-- Content sections -->
      <div>
        <h4>Context</h4>
        <ul>...</ul>
      </div>
    </div>
  </article>
</section>
```

### ARIA & Focus
- All interactive elements keyboard accessible
- Visible focus indicators
- Descriptive link text
- Proper heading hierarchy
- List semantics for bullet points

## Performance

### Bundle Impact
- No new dependencies
- Uses existing icons (lucide-react)
- Client component (~5KB gzipped)
- Lazy loads with page

### Rendering
- Static content (no API calls)
- Fast initial paint
- Smooth animations (GPU-accelerated)
- Progressive enhancement

---

**Visual Style:** Premium consulting, technical, trustworthy
**Content Tone:** Professional engineering, problem-focused, honest
**User Impression:** "This team understands complex challenges"
