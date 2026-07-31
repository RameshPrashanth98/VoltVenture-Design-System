# Roadmap

**Project:** VoltVenture Design System
**Current milestone:** v1 — Token Infrastructure

---

## Active Phases

### Phase 1 — Token Pipeline & RN Paper Output
**Goal:** Scaffold the Style Dictionary v4 pipeline, author all 12 token categories in W3C DTCG JSON, and emit typed TypeScript constants + React Native Paper MD3 theme factory. WCAG contrast validation enforced at build time.

**Delivers:**
- `tokens/primitive/` and `tokens/semantic/` — W3C DTCG JSON source for all 12 categories
- `style-dictionary.config.mjs` — SD v4 config with custom TS formatter, dimension transform, color/hex transform, shadow transform
- `lib/voltventure_tokens.ts` — generated TypeScript constants (semantic exports only)
- `lib/voltventure_theme.ts` — generated RN Paper MD3 theme factory (createVoltVentureTheme)
- WCAG AA contrast validation as a build-breaking check
- Electric green foreground guard
- 4pt grid validator for spacing/radius tokens
- `generated/tokens.js` — JS reference output for Storybook

**Status:** COMPLETE (2026-07-30)

**Plans:** 7 plans

Plans:
- [x] 01-01-PLAN.md — Project scaffold (package.json, SD config stub, directory structure)
- [x] 01-02-PLAN.md — SD TS formatter + 4 type conversion transforms with unit tests
- [x] 01-03-PLAN.md — Primitive token authoring (all 8 categories in DTCG JSON)
- [x] 01-04-PLAN.md — Semantic token authoring (color aliases + 14 typography composites)
- [x] 01-05-PLAN.md — Build validators (WCAG contrast, electric green guard, 4pt grid, DTCG format)
- [x] 01-06-PLAN.md — SD pipeline integration + JS/TS constants output
- [x] 01-07-PLAN.md — RN Paper theme factory + done-bar verification (tsc --noEmit + 42 tests)

---

### Phase 2 — Storybook Documentation
**Goal:** Configure Storybook 10 with @storybook/html-vite and author 8 token documentation stories (Color, Typography, Spacing, Radius, Elevation, Border, Grid, Iconography) using generated/tokens.js as the data source. Stories are plain HTML template functions. Add a GitHub Actions CI job that runs build-storybook on every push/PR.

**Delivers:**
- Storybook 10 + @storybook/html-vite configured (.storybook/main.js, .storybook/preview-head.html)
- 8 story files in stories/ (one per token category)
- Color story: semantic swatch grid + primitive grey/green ramps
- Typography story: all 14 type styles as rendered specimens with VoltVenture copy
- Spacing (bars), Radius (boxes), Elevation (box-shadow cards), Border (stripe demo), Grid (column overlay), Iconography (placeholder boxes) visual stories
- GitHub Actions CI at .github/workflows/storybook.yml

**Status:** COMPLETE (2026-07-30)

**Plans:** 5 plans

Plans:

Wave 1:
- [x] 02-01-PLAN.md — Storybook install + .storybook config + package.json scripts + .gitignore

Wave 2:
- [x] 02-02-PLAN.md — Color + Typography stories
- [x] 02-03-PLAN.md — Spacing + Radius + Border stories
- [x] 02-04-PLAN.md — Elevation + Grid + Iconography stories

Wave 3:
- [x] 02-05-PLAN.md — GitHub Actions CI workflow + done-bar verification (human approved)

Cross-cutting constraints:
- `generated/tokens.js` must be built before any story runs or builds
- All story named exports must be PascalCase (Storybook 10 silently ignores lowercase)
- `.storybook/main.js` must use ESM `export default` (Storybook 10 is ESM-only)

---

### Phase 3 — Component Library + App Screen Stories in Storybook
**Goal:** Extend the existing Storybook (@storybook/html-vite 10.5.5) with Components/ and Screens/ sections, sourced from Hi-Fi wireframes in voltventure_wireframes.pen. Build HTML/CSS stories for 11 repeating components and 9 Hi-Fi screens.

**Delivers:**
- `stories/components/` directory — 11 component story files
  - status-bar.stories.js, button.stories.js, social-auth-buttons.stories.js, or-divider.stories.js, phone-input.stories.js
  - segmented-toggle.stories.js, progress-strip.stories.js, trust-panel.stories.js, map-pin.stories.js
  - tab-bar.stories.js, bottom-card.stories.js
- `stories/screens/` directory — 9 screen story files
  - splash.stories.js, onboarding-1.stories.js, registration.stories.js, login.stories.js
  - id-scan.stories.js, facial-scan.stories.js
  - home-map.stories.js, navigate-to-bike.stories.js, walking-directions.stories.js
- Done-bar: `npm run build-storybook` exits 0 with storybook-static/ produced; all 20 story files exist

**Status:** In Progress — planning

**Plans:** 8 plans

Plans:

Wave 1:
- [ ] 03-01-PLAN.md — Setup: verify glob coverage, create directories, update ROADMAP.md

Wave 2 (parallel):
- [ ] 03-02-PLAN.md — Simple components: StatusBar, Button, OrDivider, SocialAuthButtons, PhoneInput
- [ ] 03-03-PLAN.md — Pattern components: SegmentedToggle, ProgressStrip, TrustPanel, MapPin
- [ ] 03-04-PLAN.md — Complex components: TabBar, BottomCard

Wave 3 (parallel):
- [ ] 03-05-PLAN.md — Auth screens: Splash, Onboarding1, Registration, Login
- [ ] 03-06-PLAN.md — KYC screens: IdScan, FacialScan
- [ ] 03-07-PLAN.md — Map/ride screens: HomeMap, NavigateToBike, WalkingDirections

Wave 4:
- [ ] 03-08-PLAN.md — Done-bar: build:tokens + build-storybook, verify 20 story files, CI

---

### Phase 4 — React Native Paper App Integration
**Goal:** Integrate the token package into the VoltVenture React Native app as a local path dependency. Validate createVoltVentureTheme() applies correctly end-to-end on device.

**Delivers:**
- Local package dependency wired in the RN app
- PaperProvider with createVoltVentureTheme() applied
- Visual smoke test on iOS simulator and Android emulator
- Font loading verified (expo-google-fonts or bundled .ttf assets)

**Status:** Ready to plan — Phase 3 must complete first

---

## Backlog

| Item | Why Deferred |
|------|-------------|
| Dark mode token layer | Semantic values need validated dark screen designs first |
| Status colors (error, warning, info) | Awaiting brand color decision |
| Motion tokens | Prototype video inaccessible; values are speculative |
| Component tokens (Tier 3) | Requires actual component designs |
| Storybook RN widget documentation | Out of scope until component phase |
| Figma Variables sync | Requires Figma file access |
| Tablet grid (8-column) | Explicitly deferred in v0.1 spec |
| npm registry publication | Validate locally first; publishing is a later milestone |

---

*Last updated: 2026-07-31 — Phase 3 planning in progress (8 plans, 4 waves)*
