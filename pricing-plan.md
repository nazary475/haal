# Pricing Page for Haal Lab

## Business Context

Haal Lab is a **deep-tech AI engineering company** building private, intelligent, and reliable AI systems. Core capabilities:
- **Local AI Systems** — on-prem/air-gapped inference (GGUF, llama.cpp, vLLM)
- **LLM Applications** — custom assistants, agents, automation
- **Knowledge Intelligence** — RAG, semantic search, document intelligence
- **AI Infrastructure** — model serving, GPU scheduling, observability, CI/CD

Target customers: European organizations needing **private, owned AI** without cloud lock-in.

---

## Proposed Packages (4 Tiers)

Based on the business and real-world customer segments:

### 1. 🔬 Explorer — €4,900 one-time
**For**: Startup founders, indie hackers, small website owners, solo CEOs
**What they need**: Validate whether AI can solve a specific problem before committing budget

| Includes | Details |
|----------|---------|
| Discovery workshop | 2-hour focused session to map the use case |
| Feasibility report | Written assessment with architecture sketch |
| Proof-of-concept | Working demo on sample data (1 use case) |
| Duration | 2 weeks |
| Delivery | Cloud-hosted demo + report |

---

### 2. 🏢 Professional — €14,900 /project
**For**: Businesses, agencies, growing companies, website platforms
**What they need**: A production-ready AI system (assistant, RAG search, or automation)

| Includes | Details |
|----------|---------|
| Everything in Explorer | Plus full production build |
| Custom AI system | 1 complete system (assistant, search, or automation) |
| Integration | Connected to your existing tools/APIs |
| Evaluation harness | Quality metrics + monitoring |
| Deployment | Cloud or self-hosted |
| Support | 30 days post-launch support |
| Duration | 6–8 weeks |

---

### 3. 🏛️ Enterprise — €39,900+ /engagement
**For**: Large enterprises, government, regulated industries, hospital systems
**What they need**: Private, air-gapped AI infrastructure with compliance, multi-system orchestration

| Includes | Details |
|----------|---------|
| Everything in Professional | Plus scale & compliance |
| Multiple AI systems | Up to 3 interconnected capabilities |
| On-prem / air-gapped | Deployed in your environment, your hardware |
| Compliance & sovereignty | GDPR, EU AI Act, data sovereignty by design |
| GPU optimization | Hardware-aware quantization, batching, scheduling |
| Observability | Full traces, metrics, eval drift monitoring |
| Training | Team handoff + documentation + runbooks |
| Support | 90 days post-launch + SLA |
| Duration | 12–16 weeks |

---

### 4. 🎓 Research & Academic — Custom pricing
**For**: University labs, research institutions (Fraunhofer, INRIA-style), PhD students
**What they need**: Specialized retrieval systems, experiment infrastructure, reproducible pipelines — at academic-friendly pricing

| Includes | Details |
|----------|---------|
| Scoped engagement | Tailored to research budget & grant cycles |
| RAG / retrieval systems | Built for research corpora (papers, patents, legal) |
| Experiment infrastructure | Reproducible eval pipelines, model comparison |
| Open-weight models | Full ownership, publishable results |
| Co-authorship option | Joint publication on system design (optional) |
| Academic discount | 30–40% below commercial rates |
| Duration | Flexible, aligned with academic timelines |

---

## User Review Required

> [!IMPORTANT]
> **Pricing decisions**: The exact prices listed (€4,900 / €14,900 / €39,900) are realistic market-rate starting points for an EU-based deep-tech AI company. Please adjust these to match your actual pricing strategy.

> [!IMPORTANT]
> **Currency**: Prices are shown in EUR (€) since Haal Lab targets European organizations. Should I use USD ($) instead, or show both?

> [!WARNING]
> **New route needed**: This will create a new `/pricing` page. Currently the site has no pricing page. The navbar does NOT need a pricing link by default (pricing pages are often accessed from solutions/contact pages), but I can add one if you want.

## Open Questions

1. **Monthly retainers**: Do you want to offer ongoing retainer options (e.g., "€X,000/month for Y hours") in addition to project-based pricing?
2. **Add-ons**: Should I include an "Add-ons" section (e.g., extra support hours, additional integrations, training workshops)?
3. **"Book a call" vs "Get a quote"**: What CTA should each tier have? Currently I plan: Explorer → "Start now", Professional → "Get a proposal", Enterprise → "Book a call", Research → "Discuss your project"
4. **Comparison table**: Do you want a full feature comparison table below the cards (✓/✗ grid)?

---

## Proposed Changes

### Pricing Page Component

#### [NEW] [pricing-page.tsx](file:///c:/Users/MY-PC/Desktop/haal-lab/src/components/pages/pricing-page.tsx)
- New page component with 4 pricing tiers displayed as premium cards
- Animated tier cards with the existing `hl-card-hover` / `hl-card-glow` design system
- "Most Popular" badge on the Professional tier
- CTA buttons linking to `/contact`
- FAQ section specific to pricing
- Uses existing design primitives (`SectionShell`, `SectionHeader`, `Reveal`, `Eyebrow`, etc.)

---

### Route & Metadata

#### [NEW] [page.tsx](file:///c:/Users/MY-PC/Desktop/haal-lab/src/app/[locale]/pricing/page.tsx)
- Next.js page route at `/pricing`
- Full SEO metadata (title, description, OpenGraph, keywords)
- Breadcrumbs, FAQ section, related links
- JSON-LD structured data

---

### i18n Strings

#### [MODIFY] [en.json](file:///c:/Users/MY-PC/Desktop/haal-lab/src/messages/en.json)
- Add `pageHeaders.pricing` translations (eyebrow, title, lead, meta)
- Add `pricing` namespace for section labels

#### [MODIFY] [de.json](file:///c:/Users/MY-PC/Desktop/haal-lab/src/messages/de.json), [fr.json](file:///c:/Users/MY-PC/Desktop/haal-lab/src/messages/fr.json), [es.json](file:///c:/Users/MY-PC/Desktop/haal-lab/src/messages/es.json), [it.json](file:///c:/Users/MY-PC/Desktop/haal-lab/src/messages/it.json)
- Add equivalent translated strings for all supported locales

---

### SEO Integration

#### [MODIFY] [seo.ts](file:///c:/Users/MY-PC/Desktop/haal-lab/src/lib/seo.ts)
- Add pricing FAQs to the `FAQS` object
- Add pricing to the `NAV` array

---

### Navigation (Optional)

#### [MODIFY] [related-links.tsx](file:///c:/Users/MY-PC/Desktop/haal-lab/src/components/site/related-links.tsx)
- Add `/pricing` to the `ALL_PAGES` list so it appears in related links

---

## Verification Plan

### Manual Verification
- Run `npm run dev` and navigate to `/en/pricing`
- Verify all 4 tier cards render correctly with responsive layout
- Check mobile responsiveness (cards stack on mobile)
- Verify CTA buttons link correctly to `/contact`
- Check all 5 locale versions render without missing translation errors
- Verify related links and breadcrumbs work
