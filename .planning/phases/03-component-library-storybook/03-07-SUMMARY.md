---
phase: 03-component-library-storybook
plan: "07"
subsystem: storybook-screen-stories
tags: [storybook, screens, map, absolute-positioning, elevation, tokens]
dependency_graph:
  requires:
    - "03-02"
    - "03-03"
    - "03-04"
  provides:
    - HomeMap screen story (Screens/HomeMap)
    - NavigateToBike screen story (Screens/NavigateToBike)
    - WalkingDirections screen story (Screens/WalkingDirections)
  affects:
    - stories/screens/ (3 new files)
    - Storybook Screens/ section (now 9 total screen stories)
tech_stack:
  added: []
  patterns:
    - absolute-positioned overlay pattern for map screens
    - hexToRgba + shadowFromToken inlined per file (verbatim copy)
    - TABS array-map pattern for tab bar (copied from tab-bar.stories.js)
key_files:
  created:
    - stories/screens/home-map.stories.js
    - stories/screens/navigate-to-bike.stories.js
    - stories/screens/walking-directions.stories.js
  modified: []
decisions:
  - "Cancel button placed at top:60px left:space400 (overlaps turn instruction card in WalkingDirections) — intentional: cancel is fixed overlay, card slides in from below"
  - "3 representative RangePins in HomeMap (not all 6) — plan explicitly allows this for brevity"
  - "BikeSelection card uses bottom:80px to sit above TabBar; WalkProgress uses bottom:0 (card replaces tab bar in that state)"
metrics:
  duration: "18 minutes"
  completed: "2026-07-31T13:18:18Z"
  tasks_completed: 2
  tasks_total: 2
  files_created: 3
  files_modified: 0
---

# Phase 03 Plan 07: Map Screen Stories Summary

**One-liner:** Three map/ride screen stories (HomeMap, NavigateToBike, WalkingDirections) using full-bleed #e8e8e8 map background with absolute-positioned overlays and elevation tokens via inlined hexToRgba/shadowFromToken helpers.

## What Was Built

Created 3 Storybook screen stories in `stories/screens/`:

**HomeMap** (`stories/screens/home-map.stories.js`):
- Full-bleed `#e8e8e8` map background (static div)
- StatusBar overlay (semi-transparent white, `typeLabelMd` time + `typeLabelSm` icons)
- Search bar with `elevationRaised` shadow, `typeBodyMd` placeholder
- Nearby badge in `colorActionPrimary` pill
- 3 representative RangePins (`colorGrey900` dark pill, `colorActionPrimary` lightning bolt)
- Location pulse (outer ring `rgba(198,255,45,0.20)` + inner `colorActionPrimary` dot)
- My Location FAB + Filters FAB with `elevationFloating` shadow
- Scan CTA card with `elevationFloating` shadow, bike count text, "Scan QR" button
- TabBar (RideActive state) with `elevationFloating` shadow via TABS array-map pattern

**NavigateToBike** (`stories/screens/navigate-to-bike.stories.js`):
- Full-bleed `#e8e8e8` map background
- Dashed route line (`colorGrey700`, `border-left: 2px dashed`)
- User location pulse (same pattern as HomeMap)
- Selected bike pin with `rgba(198,255,45,0.20)` pulse ring + white pill badge
- StatusBar overlay
- Cancel button (40x40 white circle, `elevationRaised` shadow)
- ETA badge (dark pill `colorSurfaceInverse`, `typeBodyMd`, "4 min · 350m")
- BikeSelection card: thumbnail placeholder, bike name, distance badge, "Get Directions" CTA
- TabBar (RideActive) with `elevationFloating` shadow

**WalkingDirections** (`stories/screens/walking-directions.stories.js`):
- Full-bleed `#e8e8e8` map background
- Walked route line (`colorActionPrimary`, solid) + remaining route line (`colorGrey300`, dashed)
- User location pulse + bike destination pin (`colorActionPrimary` circle)
- StatusBar overlay
- Cancel button (white circle, `elevationRaised` shadow)
- Turn instruction card (`colorGrey900` dark surface, turn arrow chip with `rgba(255,255,255,0.09)` alpha fill, `colorTextOnInverse` text)
- Recenter FAB with `elevationFloating` shadow
- WalkProgress card: Distance/ETA data blocks, bike chip (`colorGreen100`/`colorGreen700`), "I've Arrived" CTA

## Commits

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | HomeMap screen story | d9cbfe4 | stories/screens/home-map.stories.js |
| 2 | NavigateToBike + WalkingDirections screen stories | e265c3b | stories/screens/navigate-to-bike.stories.js, stories/screens/walking-directions.stories.js |

## Deviations from Plan

None — plan executed exactly as written.

All 10 acceptance criteria for Task 1 passed. All 14 acceptance criteria for Task 2 passed. Plan verification checks (grep for hexToRgba, elevationFloating/Raised, FFFFFF18/rgba alpha, import path) all returned expected matches.

## Known Stubs

None. All content is token-driven; no hardcoded placeholder values flow to rendered output. The `#e8e8e8` map background is intentional (documented as the static map placeholder approach for this plan).

## Threat Flags

No new security-relevant surface introduced. All 3 files are static HTML template literal functions with no network requests, no user data, no GPS access. Threat register T-03-07-01 (static story files, accepted) covers the full scope.

## Self-Check

- [x] `stories/screens/home-map.stories.js` exists and verified via `node -e import(...)` — returns "home-map OK"
- [x] `stories/screens/navigate-to-bike.stories.js` exists and verified — "Get Directions" in output
- [x] `stories/screens/walking-directions.stories.js` exists and verified — `rgba(255,255,255,0.09)` with `#FFFFFF18` comment present
- [x] Commit d9cbfe4 exists (Task 1)
- [x] Commit e265c3b exists (Task 2)

## Self-Check: PASSED
