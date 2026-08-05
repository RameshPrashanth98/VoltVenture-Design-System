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

**Status:** COMPLETE (2026-07-31)

**Plans:** 8 plans

Plans:

Wave 1:
- [x] 03-01-PLAN.md — Setup: verify glob coverage, create directories, update ROADMAP.md

Wave 2 (parallel):
- [x] 03-02-PLAN.md — Simple components: StatusBar, Button, OrDivider, SocialAuthButtons, PhoneInput
- [x] 03-03-PLAN.md — Pattern components: SegmentedToggle, ProgressStrip, TrustPanel, MapPin
- [x] 03-04-PLAN.md — Complex components: TabBar, BottomCard

Wave 3 (parallel):
- [x] 03-05-PLAN.md — Auth screens: Splash, Onboarding1, Registration, Login
- [x] 03-06-PLAN.md — KYC screens: IdScan, FacialScan
- [x] 03-07-PLAN.md — Map/ride screens: HomeMap, NavigateToBike, WalkingDirections

Wave 4:
- [x] 03-08-PLAN.md — Done-bar: build:tokens + build-storybook, verify 20 story files, CI

---

### Phase 4 — React Native Paper Showcase App
**Goal:** Build a component showcase app (standalone Expo app) that renders all VoltVenture components and screens implemented in React Native Paper, styled with VoltVenture tokens, and displays the source code for each. Modeled after https://oss.callstack.com/react-native-paper/

**Delivers:**
- `lib/index.ts` — barrel export entry point for voltventure-design-system package
- Root `package.json` — updated with name, main, exports, workspaces
- `lib/voltventure_theme.ts` — onPrimary override (Volt Black on electric green)
- `lib/voltventure_tokens.ts` — all token constants exported (including primitives)
- `apps/showcase/` — standalone Expo SDK 57 app
  - PaperProvider with createVoltVentureTheme() at app root
  - Fonts: Manjari, Inter, JetBrains Mono via expo-google-fonts
  - Home screen: SectionList with Components (11) + Screens (9) sections
  - Detail screen: Preview tab + Code tab for every item
  - 11 component implementations in React Native Paper
  - 9 HIFI screen compositions in React Native Paper

**Done-bar (D-07):**
1. Metro bundler starts without TypeScript errors
2. All 20 items render on iOS simulator OR Android emulator
3. Electric green (#C6FF2D) and Volt Black (#0F0F0F) visibly applied
4. Code tab shows readable source for each item

**Status:** ABANDONED (2026-08-04) — showcase app removed in Phase 5; automated checks (Task 1) passed but human device verification was not completed before direction change

**Plans:** 8 plans

Plans:

Wave 1:
- [x] 04-01-PLAN.md — Design system package fixes: onPrimary override, token exports, lib/index.ts, package.json

Wave 2:
- [x] 04-02-PLAN.md — Expo app scaffold: package.json, tsconfig, metro.config.js, _layout.tsx, home + detail screens, registry skeleton

Wave 3 (parallel):
- [x] 04-03-PLAN.md — Component batch A: StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput, SegmentedToggle
- [x] 04-04-PLAN.md — Component batch B: ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard

Wave 4 (parallel):
- [x] 04-05-PLAN.md — Screen batch A: Splash, Onboarding1, Registration, Login, IdScan
- [x] 04-06-PLAN.md — Screen batch B: FacialScan, HomeMap, NavigateToBike, WalkingDirections

Wave 5 (abandoned — Phase 4 direction change):
- [-] 04-07-PLAN.md — Registry merge: add all 20 entries to REGISTRY
- [-] 04-08-PLAN.md — Done-bar: npm install, tsc --noEmit, Metro start, human device verification

---

### Phase 5 — Design System Cleanup
**Goal:** Remove `apps/showcase/` from the repository. This repo focuses exclusively on the design system package (token pipeline, generated TypeScript constants, RN Paper theme factory, Storybook documentation). Frontend app development moves to a separate repository.

**Delivers:**
- `apps/showcase/` deleted (all Expo app code, Preview components, registry)
- `apps/.gitkeep` added (keeps apps/ directory for future packages per D-02)
- Root `package.json` workspaces shape retained (`workspaces: ["apps/*"]`)
- `package-lock.json` regenerated (589 showcase deps removed)
- README.md updated to reflect repo scope (design system only)
- Phase 4 closed as abandoned in STATE.md and ROADMAP.md

**Status:** COMPLETE (2026-08-05)

**Plans:** 3 plans

Plans:
- [x] 05-01-PLAN.md — Stage showcase deletions + add apps/.gitkeep
- [x] 05-02-PLAN.md — Regenerate lockfile via npm install
- [x] 05-03-PLAN.md — Update README + planning docs + done-bar + push

---

---

### Phase 6 — Interactive Components (iPhone 16 Pro)
**Goal:** Upgrade all 11 component stories in `stories/components/` to render inside a 402×874pt iPhone 16 Pro phone frame (Volt Black bezel + status bar) and add real JS interactivity — clicks and taps change component state live in the Storybook canvas.

**Delivers:**
- `Interactive` named export added to all 11 component story files — phone-framed, event-wired
- 402×874px phone frame wrapper (Volt Black bezel, 44px radius, "9:41" status bar)
- Per-component interactions: Button press states, SegmentedToggle live switching, TabBar tab switching, PhoneInput focus + typing, ProgressStrip step navigation, BottomCard expand/collapse, MapPin pulse, SocialAuthButtons press effects
- Existing static state exports retained alongside new `Interactive` exports
- `SourceCode` exports retained

**Status:** Ready for planning

**Plans:** TBD

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
| React Native app (consuming design system) | Lives in a separate repository |
| EAS Build / App Store submission | Out of scope for design system repo |

---

*Last updated: 2026-08-05 — Phase 5 complete; design system cleanup done*
