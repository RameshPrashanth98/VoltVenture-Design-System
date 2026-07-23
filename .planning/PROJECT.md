# VoltVenture Design System

## What This Is

A standalone npm package providing the foundational token layer for the VoltVenture ride-hailing app. v1 extracts and codifies all design decisions from the Foundations v0.1 spec into a React Native-ready token infrastructure — consumed by NativeWind and typed TypeScript constants, transformed by Style Dictionary from a W3C Design Tokens JSON source.

Components (Button, Card, Input, etc.) are a separate future phase. This project is the layer that makes them possible.

## Core Value

One change to a primitive propagates through every VoltVenture UI surface — past and future. The token pipeline is the single source of truth.

## Requirements

### Validated

(None yet — ship to validate)

### Active

**Token Infrastructure**
- [ ] W3C Design Tokens JSON source files authored for all 12 foundation categories
- [ ] Style Dictionary pipeline transforms tokens to: typed TypeScript constants, NativeWind/Tailwind config, React Native StyleSheet values
- [ ] All output files are generated (not hand-written) — single source of truth enforced

**Color Tokens**
- [ ] Brand primitives: Volt Black (#0F0F0F), Electric Green (#C6FF2D), Pure White, Charcoal, Mid Gray
- [ ] Neutral grey ramp: grey.050–grey.950 (9 steps sampled from mockups)
- [ ] Green ramp: green.100–green.700 (5 steps for interaction states)
- [ ] Semantic color mapping: surface.*, text.*, action.*, border.*, status.live

**Typography Tokens**
- [ ] Font families: Manjari (display), Inter (body), JetBrains Mono (mono) — loaded via Expo Google Fonts
- [ ] Type scale: 14 styles (display.xl → overline) with correct size, line-height, weight, tracking
- [ ] Typography rules enforced: tabular-nums for data, negative tracking only 28pt+, sentence case

**Spacing Tokens**
- [ ] 11-step 4pt-base scale: space.050 (2pt) through space.1600 (64pt)
- [ ] Applied default constants: screen margin (space.400), card padding (space.500), button padding (space.600), etc.

**Elevation Tokens**
- [ ] Light surface shadow model: flat / raised / floating / overlay (4 levels)
- [ ] Dark surface lightness model: #0F0F0F → #1A1A1A → #2F2F2F → #4A4A4A

**Radius Tokens**
- [ ] 7-step scale: xs (8pt) through 2xl (36pt) plus full (999pt)
- [ ] No radius.none — minimum is xs (8pt)
- [ ] Squircle constant for app icon (22.37% iOS continuous corner)

**Border Tokens**
- [ ] 4 width tokens: none / hairline (1pt) / strong (1.5pt) / focus (2pt)
- [ ] Focus ring: always green (color.action.primary), 2pt offset

**Grid Constants**
- [ ] 4-column grid: 393pt reference, 16pt margin, 16pt gutter, 361pt content width
- [ ] Minimum touch target constant: 48pt (above iOS 44pt / Android 48dp platform floor)

**Iconography Constants**
- [ ] Icon canvas: 24pt, live area 20pt, 2pt padding
- [ ] Size variants: 16 / 20 / 24 / 32pt
- [ ] Icon set: existing icon library integrated (exact library TBD during implementation)

**Storybook Documentation**
- [ ] Storybook Web with React Native Web renderer configured
- [ ] Token story for each of the 12 foundation categories
- [ ] Color story: palette swatches with token names + hex values
- [ ] Typography story: all 14 type styles rendered as specimens
- [ ] Spacing / Radius / Elevation / Border visual stories

**Accessibility**
- [ ] WCAG 2.1 AA contrast validation integrated into token pipeline
- [ ] Automated contrast checks: all text/bg token pairs verified at build time
- [ ] Electric green (#C6FF2D) usage enforced: background only on light surfaces, foreground always #0F0F0F

### Out of Scope

| Feature | Reason |
|---------|--------|
| UI Components (Button, Card, Input, etc.) | Future phases — tokens must ship first |
| Dark mode | Semantic mapping defined in spec but not validated against real screens; separate workstream |
| Status colors (error, warning, info) | Needs brand decision — no color defined in foundations spec |
| Motion tokens | Prototype video not accessible; separate future workstream |
| Custom icon SVG components | Using existing icon library instead |
| Tablet grid (8-column) | v0.1 spec explicitly defers this |
| Figma Variables / Tokens Studio sync | Not in initial workflow; can be added when Figma file is accessible |
| Published npm registry release | Build and validate locally first; publishing is a later milestone |

## Context

**VoltVenture** is a ride-hailing app targeting mobile (iOS/Android). The product aesthetic: dark canvas with electric green as the single active verb per screen, generous rounding (nothing square), large touch targets for in-vehicle one-handed use.

**Source of truth**: `voltventure-foundations.html` — a comprehensive foundations spec (v0.1) covering all 12 token categories with exact values, semantic mappings, naming architecture, W3C JSON export format, and brand rules. This file is the canonical reference for Phase 1 implementation.

**Token naming convention**: `[category].[concept].[variant].[state]` — dot-separated, transforms to camelCase (JS), snake_case (Dart/XML), `--kebab-case` (CSS). No token named after its raw value.

**Three-tier token architecture**:
- Tier 1 Primitive: raw values — nobody consumes directly
- Tier 2 Semantic: `color.action.primary → green.500` — what designers and engineers reach for
- Tier 3 Component: `button.primary.bg → action.primary` — owned by the component (future phases)

**Key accessibility rule**: Electric green (#C6FF2D) has 1.36:1 contrast against white — unusable as text. It is always a background; foreground on green is always Volt Black. Green text is permitted only on black/charcoal surfaces (15.4:1, AAA).

## Constraints

- **Platform**: Expo (managed/bare) + React Native — density-independent points (pt/dp), never px in tokens
- **Base unit**: 4pt — all spacing, sizing, radius are multiples of 4
- **Touch target floor**: 48pt minimum — above platform minimums, tuned for in-vehicle use
- **Token consumption**: NativeWind (Tailwind class names) + typed TS constants — no inline raw values in components
- **No hardcoded values**: every component consumes a token; Style Dictionary enforces this via generated output
- **WCAG 2.1 AA**: required for all text/background combinations
- **Light mode**: default appearance; dark surfaces are emphasis blocks, not a theme
- **Package shape**: standalone npm package imported by the VoltVenture app

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Style Dictionary as token pipeline | Industry standard; W3C JSON in, multiple outputs (RN, Tailwind, TS) out | — Pending |
| NativeWind for Tailwind-in-RN | De-facto standard; avoids managing two styling systems | — Pending |
| Storybook Web + RN Web renderer | Easier setup and sharing than native Storybook; tokens are visual not interactive | — Pending |
| Existing icon library (not custom SVGs) | Custom icon component system is a separate concern from token foundations | — Pending |
| No radius.none token | Brand principle: nothing in VoltVenture has a square corner | — Pending |
| Electric green = background only on light | 1.36:1 contrast against white fails every WCAG threshold | — Pending |
| Expo runtime | Simpler font loading (Expo Google Fonts), easier Storybook config | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd:complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-07-24 after initialization*
