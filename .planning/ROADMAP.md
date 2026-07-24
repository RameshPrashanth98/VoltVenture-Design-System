# Roadmap

**Project:** VoltVenture Design System
**Current milestone:** v1 — Token Infrastructure

---

## Active Phases

### Phase 1 — Token Pipeline & Dart Output
**Goal:** Scaffold the Style Dictionary v4 pipeline, author all 12 token categories in W3C DTCG JSON, and emit typed Dart constants + Flutter ThemeData factory. WCAG contrast validation enforced at build time.

**Delivers:**
- `tokens/primitive/` and `tokens/semantic/` — W3C DTCG JSON source for all 12 categories
- `style-dictionary.config.mjs` — SD v4 config with custom Dart formatter, dimension/double transform, color/flutter transform, shadow/BoxShadow transform
- `lib/voltventure_tokens.dart` — generated Dart constants (Color, double, TextStyle)
- `lib/voltventure_theme.dart` — generated Flutter ThemeData factory
- WCAG AA contrast validation as a build-breaking check
- Electric green foreground guard
- 4pt grid validator for spacing/radius tokens
- `generated/tokens.js` — JS reference output for Storybook

**Status:** In planning

**Plans:** 7 plans

Plans:
- [ ] 01-01-PLAN.md — Project scaffold (package.json, pubspec.yaml, SD config stub, directory structure)
- [ ] 01-02-PLAN.md — SD Dart formatter + 4 type conversion transforms with unit tests
- [ ] 01-03-PLAN.md — Primitive token authoring (all 8 categories in DTCG JSON)
- [ ] 01-04-PLAN.md — Semantic token authoring (color aliases + 14 typography composites)
- [ ] 01-05-PLAN.md — Build validators (WCAG contrast, electric green guard, 4pt grid, DTCG format)
- [ ] 01-06-PLAN.md — SD pipeline integration + Dart constants output (dart analyze clean)
- [ ] 01-07-PLAN.md — ThemeData factory (ColorScheme.fromSeed + 14-style TextTheme + done-bar verification)

---

### Phase 2 — Storybook Documentation
**Goal:** Visual documentation of all 12 token categories in Storybook Web (plain HTML/CSS stories — no Flutter renderer needed).

**Delivers:**
- Storybook 8 + Vite configured
- One story per token category (Color, Typography, Spacing, Radius, Elevation, Border, Grid, Iconography)
- Color story: swatch grid with token name + hex
- Typography story: all 14 type styles as rendered specimens
- Spacing/Radius/Elevation/Border visual stories
- CI build-storybook check

**Status:** Blocked on Phase 1 (stories import from `generated/tokens.js`)

---

### Phase 3 — Flutter App Integration
**Goal:** Integrate the token package into the VoltVenture Flutter app as a local path dependency. Validate ThemeData applies correctly end-to-end on device.

**Delivers:**
- `pubspec.yaml` path dependency wired in the Flutter app
- `MaterialApp(theme: voltVentureTheme())` applied
- Visual smoke test on iOS simulator and Android emulator
- Font loading verified (`google_fonts` or bundled `.ttf`)
- Dart lint rule blocking raw `Color(0xFF...)` literals in widget files

**Status:** Blocked on Phase 1

---

## Backlog

| Item | Why Deferred |
|------|-------------|
| Dark mode token layer | Semantic values need validated dark screen designs first |
| Status colors (error, warning, info) | Awaiting brand color decision |
| Motion tokens | Prototype video inaccessible; values are speculative |
| Component tokens (Tier 3) | Requires actual component designs |
| Widgetbook widget documentation | Out of scope until component phase |
| Figma Variables sync | Requires Figma file access |
| Tablet grid (8-column) | Explicitly deferred in v0.1 spec |
| pub.dev package publication | Validate locally first |

---

*Last updated: 2026-07-24 — Phase 1 planning complete (7 plans, 4 waves)*
