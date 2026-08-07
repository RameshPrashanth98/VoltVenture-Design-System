# VoltVenture Design System

## What This Is

A standalone package providing the foundational token layer for the VoltVenture ride-hailing app. The design system extracts and codifies all design decisions from the Foundations v0.1 spec into a React Native Paper-ready token infrastructure — consumed by a React Native Paper MD3 theme and typed TypeScript constants, transformed by Style Dictionary from a W3C Design Tokens JSON source.

Components (Button, Card, Input, etc.) are a separate future phase built with React Native Paper. This project is the layer that makes them possible.

## Current State

**Shipped:** v0.1 — Token Infrastructure (2026-08-06)

- Token pipeline fully operational: `npm run build:tokens` → `lib/voltventure_tokens.ts` + `lib/voltventure_theme.ts`
- 12 token categories in W3C DTCG JSON, WCAG AA enforced at build time
- Storybook with 34 Hi-Fi screen stories + 23 component stories (all with Interactive + SourceCode exports)
- GitHub Actions CI (storybook build on push/PR)
- 35 Hi-Fi screen PNGs in `images/hifi/`
- 30/32 requirements satisfied (94%); 1 deferred (icon library selection)

**Tech debt accepted from v0.1:**
- Icon set not selected — iconography story uses placeholder boxes (token sizing constants exist)
- 4 missing SUMMARY.md files (06-07, 07-20, 07-21, 07-22) — delivery verified via done-bars

## Core Value

One change to a primitive propagates through every VoltVenture UI surface — past and future. The token pipeline is the single source of truth.

## Next Milestone Goals

Candidates for v0.2 (to be defined via `/gsd-new-milestone`):

| Candidate | Notes |
|-----------|-------|
| Dark mode token layer | Second token set alongside light; needs validated dark screen designs |
| npm registry publication | Prep package.json, peer deps, publish CI |
| Icon set selection + Storybook integration | Replace placeholder boxes in iconography story |
| Status color tokens (error, warning, info) | Needs brand color decision |

## Requirements

### Validated (v0.1)

**Token Infrastructure**
- [x] W3C Design Tokens JSON source files authored for all 12 foundation categories
- [x] Style Dictionary pipeline transforms tokens to: typed TypeScript constants, React Native Paper MD3 theme object
- [x] All output files are generated (not hand-written) — single source of truth enforced

**Color Tokens**
- [x] Brand primitives: Volt Black (#0F0F0F), Electric Green (#C6FF2D), Pure White, Charcoal, Mid Gray
- [x] Neutral grey ramp: grey.050–grey.950 (9 steps)
- [x] Green ramp: green.100–green.700 (5 steps)
- [x] Semantic color mapping: surface.*, text.*, action.*, border.*, status.live

**Typography Tokens**
- [x] Font families: Manjari (display), Inter (body), JetBrains Mono (mono)
- [x] Type scale: 14 styles (display.xl → overline)
- [x] Typography rules enforced: tabular-nums for data, negative tracking only 28pt+, sentence case

**Spacing Tokens**
- [x] 11-step 4pt-base scale: space.050 (2pt) through space.1600 (64pt)
- [x] Applied default constants: screen margin, card padding, button padding, etc.

**Elevation Tokens**
- [x] Light surface shadow model: flat / raised / floating / overlay (4 levels)
- [x] Dark surface lightness model: #0F0F0F → #1A1A1A → #2F2F2F → #4A4A4A

**Radius Tokens**
- [x] 7-step scale: xs (8pt) through 2xl (36pt) plus full (999pt)
- [x] No radius.none — minimum is xs (8pt)
- [x] Squircle constant for app icon (22.37% iOS continuous corner)

**Border Tokens**
- [x] 4 width tokens: none / hairline (1pt) / strong (1.5pt) / focus (2pt)
- [x] Focus ring: always green (color.action.primary), 2pt offset

**Grid Constants**
- [x] 4-column grid: 393pt reference, 16pt margin, 16pt gutter, 361pt content width
- [x] Minimum touch target constant: 48pt

**Iconography Constants**
- [x] Icon canvas: 24pt, live area 20pt, 2pt padding
- [x] Size variants: 16 / 20 / 24 / 32pt
- [~] Icon set: existing icon library integrated *(DEFERRED — token sizing constants exist; library selection deferred to v0.2)*

**Storybook Documentation**
- [x] Storybook Web (pure HTML/CSS stories) configured
- [x] Token story for each of the 12 foundation categories
- [x] Color story: palette swatches with token names + hex values
- [x] Typography story: all 14 type styles rendered as specimens
- [x] Spacing / Radius / Elevation / Border visual stories

**Accessibility**
- [x] WCAG 2.1 AA contrast validation integrated into token pipeline (build-breaking)
- [x] Automated contrast checks: all text/bg token pairs verified at build time
- [x] Electric green (#C6FF2D) usage enforced: background only on light surfaces, foreground always #0F0F0F

### Active (v0.2 — TBD)

*No active requirements — run `/gsd-new-milestone` to define v0.2 scope.*

### Out of Scope

| Feature | Reason |
|---------|--------|
| UI Components (Button, Card, Input, etc.) | Future phases — tokens must ship first |
| Dark mode | Semantic mapping defined but not validated against real screens; separate workstream |
| Status colors (error, warning, info) | Needs brand decision — no color defined in foundations spec |
| Motion tokens | Prototype video not accessible; separate future workstream |
| Custom icon SVG components | Using existing icon library instead |
| Tablet grid (8-column) | v0.1 spec explicitly defers this |
| Figma Variables / Tokens Studio sync | Not in initial workflow; can be added when Figma file is accessible |
| Published npm registry release | Build and validate locally first; publishing is a later milestone |
| React Native app consuming design system | Lives in a separate repository |
| EAS Build / App Store submission | Out of scope for design system repo |

## Context

**VoltVenture** is a ride-hailing app targeting mobile (iOS/Android). The product aesthetic: dark canvas with electric green as the single active verb per screen, generous rounding (nothing square), large touch targets for in-vehicle one-handed use.

**Source of truth**: `voltventure-foundations.html` — a comprehensive foundations spec (v0.1) covering all 12 token categories with exact values, semantic mappings, naming architecture, W3C JSON export format, and brand rules.

**Token naming convention**: `[category].[concept].[variant].[state]` — dot-separated, transforms to `camelCase` (TypeScript/JS). No token named after its raw value.

**Three-tier token architecture**:
- Tier 1 Primitive: raw values — nobody consumes directly
- Tier 2 Semantic: `color.action.primary → green.500` — what designers and engineers reach for
- Tier 3 Component: `button.primary.bg → action.primary` — owned by the component (future phases)

**Key accessibility rule**: Electric green (#C6FF2D) has 1.36:1 contrast against white — unusable as text. It is always a background; foreground on green is always Volt Black.

## Constraints

- **Platform**: React Native (iOS/Android) — logical pixels (dp), values stored as unitless numbers
- **Base unit**: 4dp — all spacing, sizing, radius are multiples of 4
- **Touch target floor**: 48dp minimum
- **Token consumption**: React Native Paper MD3 theme + typed TypeScript constants
- **No hardcoded values**: every component consumes a token
- **WCAG 2.1 AA**: required for all text/background combinations
- **Package shape**: standalone npm package imported by the VoltVenture React Native app

## Key Decisions

| Decision | Rationale | Milestone |
|----------|-----------|-----------|
| Style Dictionary v4 as token pipeline | Industry standard; W3C JSON in, multiple outputs out | v0.1 |
| React Native Paper for component phases | Cross-platform iOS/Android; MD3 theming aligns with token architecture | v0.1 |
| Storybook Web (HTML/CSS only) | Token docs are purely visual — no RN renderer needed; easier to host | v0.1 |
| No radius.none token | Brand principle: nothing in VoltVenture has a square corner | v0.1 |
| Electric green = background only on light | 1.36:1 contrast against white fails every WCAG threshold | v0.1 |
| apps/showcase/ removed in Ph5 | Design system repo stays focused on token package; app in separate repo | v0.1 |
| lib/ mutation guard (git restore after build:tokens) | SD regeneration drops manual overrides — always restore after build | v0.1 |
| makePhoneFrame() copied inline per story file | No shared import needed; keeps stories self-contained | v0.1 |

## Evolution

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-08-07 — v0.1 archived; requirements moved to Validated*
