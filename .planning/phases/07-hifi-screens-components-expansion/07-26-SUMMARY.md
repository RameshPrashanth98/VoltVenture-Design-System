---
phase: 7
plan: "07-26"
subsystem: stories/screens
tags: [screen, curated-routes, list-screen, range-pills, route-cards, tab-bar, interactive]
dependency_graph:
  requires:
    - "07-01"   # preflight build verification
    - "07-11"   # route-card component (visual pattern reference)
  provides:
    - "stories/screens/curated-routes.stories.js"
  affects: []
tech_stack:
  added: []
  patterns:
    - "Range pill active state via plain JS activePill variable + .style.background mutation"
    - "buildRouteCard() factory function for DRY DOM card construction"
    - "Start Route press state: pointerdown sets #a8de1a + scale(0.97), restored on pointerup/pointerleave"
key_files:
  created:
    - "stories/screens/curated-routes.stories.js"
  modified: []
decisions:
  - "Used buildRouteCard() factory (not inline repetition) for the 3 route cards in Interactive export"
  - "Discover tab (index 1) marked active via font-weight:700 + colorTextPrimary on tab label"
  - "Default export HTML uses min-height:852px flex column layout (not absolute positioning)"
metrics:
  duration_minutes: 15
  tasks_completed: 2
  files_created: 1
  files_modified: 0
  completed_date: "2026-08-06"
---

# Phase 7 Plan 26: Curated Routes Screen Summary

**One-liner:** Curated Routes screen with 3 range-filter pills, 3 scrollable route cards (Old Town Loop / Coastal Sunset Ride / Mountain Pass Adventure), and Discover-active tab bar using inline buildRouteCard() factory.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Default + SourceCode exports | 972a2bb | stories/screens/curated-routes.stories.js |
| T-02 | Interactive export (phone frame + DOM interactions) | 972a2bb | stories/screens/curated-routes.stories.js |

Both tasks committed in one atomic commit (no staged changes between T-01 and T-02 as both contributed to the same new file).

## What Was Built

**stories/screens/curated-routes.stories.js** — Curated Routes screen story (frame R1tiK)

### Default export
- Status Bar (height:62px, 9:41 / signal icons)
- Header: "Curated Routes" (typeHeadingLg/700) + "Handpicked rides for every rider" (typeBodyMd/colorTextSecondary)
- Range Pills Row: 3 pills — 100km active (colorActionPrimary bg + "Best range" sub-label), 200km and 300km inactive (#ffffff + colorGrey100 border)
- Header Divider (1px solid colorGrey100, margin 0 16px)
- Route List (flex column, gap:16px, padding:16px): 3 route cards each with:
  - Hero image (180px, #e8e8e8) with photo gradient overlay (rgba(0,0,0,0.50))
  - Range Badge (rgba(255,255,255,0.93)) top-left with lightning + km
  - Time Badge (rgba(15,15,15,0.87)) top-right with clock + duration
  - Title Overlay bottom-left (white, fontWeight:700)
  - Card Body: Meta chips (difficulty + category), Stops label, Stop chips (colorGrey050), Start Route button (colorActionPrimary, radiusFull)
- Tab Bar (height:60px, borderTop colorGrey100): Ride | **Discover** | Wallet | Account — Discover bold + colorTextPrimary

### Interactive export
- makePhoneFrame() inline (402×874px, #0F0F0F bezel, 44px radius)
- Screen content flex column inside phone frame inner screen
- Range Pill state: `let activePill = 0;` + `updateActivePill(idx)` loops pillEls array, sets background/border via `.style.*`
- buildRouteCard() factory builds each card with createElement, wires Start Route button press state (pointerdown → #a8de1a + scale(0.97); pointerup/pointerleave → colorActionPrimary + scale(1))
- Tab bar with Discover tab active (fontWeight:700, colorTextPrimary)

### SourceCode export
- React Native Paper JSX string with `FlatList`, `PressableRangePill`, `RouteCard`, tab bar
- Token constants documented inline as comments
- `_esc()` + `_blk()` helpers for safe HTML embedding

## Verification Results

```
All exports found: Default, Interactive, SourceCode    PASS
Title: Screens/CuratedRoutes                           PASS
rgba(255,255,255,0.93) in Default HTML                 PASS
rgba(15,15,15,0.87) in Default HTML                    PASS
180px hero height                                      PASS
Old Town Loop in Default HTML                          PASS
Coastal Sunset Ride in Default HTML                    PASS
Mountain Pass Adventure in Default HTML                PASS
Discover tab in Default HTML                           PASS
activePill in file                                     PASS
pointerdown in file                                    PASS
#a8de1a in file                                        PASS
makePhoneFrame in file                                 PASS
Interactive() returns DOM element (nodeType===1)       PASS
```

## Deviations from Plan

None — plan executed exactly as written.

The Interactive() DOM check required a `global.document` mock in Node.js (browser API); the function works correctly in the Storybook browser context. This is standard behavior for all `@storybook/html-vite` stories — not a defect.

## Known Stubs

None. All route cards have real content. No placeholders or TODO items in rendered output.

## Threat Surface Scan

No new network endpoints, auth paths, file access patterns, or schema changes introduced. Story file is a static Storybook display artifact in the Storybook iframe sandbox. Matches T-07-26-01 in plan threat register — accepted.

## Self-Check: PASSED

- [x] stories/screens/curated-routes.stories.js exists
- [x] Commit 972a2bb exists in git log
- [x] Default, Interactive, SourceCode exports all present (PascalCase)
- [x] Pre-existing foundation stories NOT staged or committed
