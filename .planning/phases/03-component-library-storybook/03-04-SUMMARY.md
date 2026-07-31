---
phase: 03-component-library-storybook
plan: 04
subsystem: ui
tags: [storybook, html-vite, component-stories, tabbar, bottom-card, elevation-shadow]

# Dependency graph
requires:
  - phase: 03-component-library-storybook
    plan: 01
    provides: "stories/components/ directory tracked by git; Storybook glob confirmed"
provides:
  - "stories/components/tab-bar.stories.js with 4 active-state exports (RideActive, DiscoverActive, WalletActive, AccountActive)"
  - "stories/components/bottom-card.stories.js with 2 structural layout exports (BikeSelection, WalkProgress)"
  - "hexToRgba + shadowFromToken helper pattern established in both files for reuse in screen stories"
affects: [03-07, 03-08]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "array-map pattern for dynamic tab rendering (TABS.map().join(''))"
    - "hexToRgba + shadowFromToken helpers copied (not imported) from elevation.stories.js"
    - "elevationFloating applied to tab bar; elevationRaised applied to bottom card"
    - "composite token access: typeLabelSm.fontSize, typeHeadingMd.fontFamily, typeHeadingSm.fontWeight, typeBodySm.fontSize"

key-files:
  created:
    - stories/components/tab-bar.stories.js
    - stories/components/bottom-card.stories.js
  modified: []

key-decisions:
  - "hexToRgba + shadowFromToken helpers copied verbatim into both files (not imported) — elevation.stories.js does not export these helpers"
  - "TABS array-map pattern used in TabBar for DRY rendering across 4 active-tab variants"
  - "BottomCard uses two separate named export functions (BikeSelection, WalkProgress) rather than a helper function — layouts are structurally distinct enough to not share a common function"

# Metrics
duration: ~2min
completed: 2026-07-31
---

# Phase 3 Plan 04: TabBar + BottomCard Component Stories Summary

**Two most complex component stories authored: TabBar (4 active-state variants, elevation shadow, array-map pattern) and BottomCard (2 structurally distinct layouts, elevation shadow) — both with hexToRgba + shadowFromToken helpers inlined and elevation tokens applied**

## Performance

- **Duration:** ~2 min
- **Started:** 2026-07-31T10:56:39Z
- **Completed:** 2026-07-31T10:58:26Z
- **Tasks:** 2 completed
- **Files created:** 2

## Accomplishments

- Created `stories/components/tab-bar.stories.js` with 4 PascalCase exports (RideActive, DiscoverActive, WalletActive, AccountActive) using array-map pattern over TABS constant; elevationFloating shadow via shadowFromToken; composite typeLabelSm token access for labels
- Created `stories/components/bottom-card.stories.js` with 2 PascalCase exports (BikeSelection, WalkProgress) as structurally distinct card layouts; elevationRaised shadow via shadowFromToken; composite typeHeadingMd/typeHeadingSm/typeBodySm/typeLabelSm token access; colorGreen100/colorGreen700 for bike chip
- Both files contain inlined hexToRgba + shadowFromToken helpers (verbatim copy from elevation.stories.js which does not export them)
- All 5 post-task verification checks passed (2 helpers in each file, elevationFloating in tab-bar, elevationRaised in bottom-card, correct import path in both)
- Node ESM import tests passed for both files

## Task Commits

1. **Task 1: TabBar story** — `83881ed`
2. **Task 2: BottomCard story** — `f17c745`

## Files Created

- `stories/components/tab-bar.stories.js` — TabBar with 4 active-tab variants; elevationFloating shadow; TABS array-map; composite typeLabelSm
- `stories/components/bottom-card.stories.js` — BottomCard BikeSelection (thumbnail + badge + CTA) and WalkProgress (Distance/ETA data + bike chip + CTA); elevationRaised shadow

## Decisions Made

- **Helper inlining over import:** hexToRgba and shadowFromToken must be copied (not imported) because elevation.stories.js does not export them. Pattern established here will be followed by screen story plans (03-07, 03-08).
- **BottomCard as two separate exports:** BikeSelection and WalkProgress are structurally different enough (top-row with thumbnail vs. data-block row with bike chip) that a shared helper function would add complexity without clarity benefit. Each export is a self-contained template literal.
- **TABS array-map for TabBar:** The 4 tab variants differ only by which tab is active, making an array-map pattern ideal. The `tabBar(activeTab)` helper generates each variant.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None. All token references resolve to real values from generated/tokens.js. Placeholder text (VoltBike VV-042, 120m away, 350m, 4 min) is intentional design documentation content, not data stubs.

## Threat Flags

None. Both files are static HTML template literal strings with no user input, no network calls, no auth paths, and no PII. Consistent with threat model disposition T-03-04-01 (accept).

## Self-Check: PASSED

- stories/components/tab-bar.stories.js: FOUND
- stories/components/bottom-card.stories.js: FOUND
- Commit 83881ed: FOUND
- Commit f17c745: FOUND
- hexToRgba function in tab-bar: 1 match
- shadowFromToken function in tab-bar: 1 match
- hexToRgba function in bottom-card: 1 match
- shadowFromToken function in bottom-card: 1 match
- elevationFloating in tab-bar: 1 match
- elevationRaised in bottom-card: 2 matches (one per export)
- import path '../../generated/tokens.js' in both files: confirmed
- Node ESM import test tab-bar: PASSED
- Node ESM import test bottom-card: PASSED
