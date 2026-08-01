---
phase: 4
plan: 6
title: "Screen Implementations — FacialScan, HomeMap, NavigateToBike, WalkingDirections"
subsystem: showcase-screen-previews
tags: [react-native-paper, expo, screens, map-placeholder, facial-scan, bottom-card, tab-bar, position-absolute]
dependency_graph:
  requires: [04-03 — Batch A components, 04-04 — Batch B components (TabBarPreview, BottomCardPreview, MapPinPreview)]
  provides: [4 screen preview files in apps/showcase/src/screens/ (Batch B)]
  affects: [04-07 — Registry Merge will wire all Batch B screen entries into REGISTRY, 04-08 — done-bar verifies all items render]
tech_stack:
  added: []
  patterns:
    - Grey rectangle map placeholder (backgroundColor '#e8e8e8') with position:absolute overlays for map screens
    - FacialScan: dark surface (colorSurfaceInverse) with oval borderRadius:999 face guide in colorActionPrimary
    - ProgressBar with color={tokens.colorActionPrimary} for scanning progress
    - TabBarPreview and BottomCardPreview reused as composed overlay elements in HomeMapPreview
    - MapPinPreview and BottomCardPreview reused as composed overlay elements in NavigateToBikePreview
    - Literal font-size values (11/13/15) where composite typography tokens not re-exported from lib/index.ts
key_files:
  created:
    - apps/showcase/src/screens/FacialScanPreview.tsx
    - apps/showcase/src/screens/HomeMapPreview.tsx
    - apps/showcase/src/screens/NavigateToBikePreview.tsx
    - apps/showcase/src/screens/WalkingDirectionsPreview.tsx
  modified: []
decisions:
  - "FacialScan uses colorSurfaceInverse (Volt Black) as background with colorActionPrimary oval face guide border — matching the Phase 3 story pattern"
  - "Map screens use '#e8e8e8' as static grey placeholder with inline comment 'Static map placeholder — not a brand token' — not a brand color, purely a map simulation placeholder"
  - "HomeMapPreview renders TabBarPreview below the map View (not as absolute overlay) and BottomCardPreview as absolute overlay at bottom of mapPlaceholder — matches plan's composition intent"
  - "NavigateToBikePreview reuses MapPinPreview as absolute overlay at top 30% center — composition of existing component"
  - "WalkingDirections top instruction card uses colorSurfaceInverse (dark) background matching Phase 3 story's colorGrey900 dark card pattern"
  - "Typography font-size values continued as literals (11/13/15pt) — same pattern as Plans 03 and 04; composite tokens not re-exported from lib/index.ts"
  - "REGISTRY not modified — intentionally deferred to Plan 07 (Registry Merge)"
metrics:
  duration: "4 minutes"
  completed: "2026-08-02"
  tasks_completed: 2
  files_changed: 4
---

# Phase 4 Plan 6: Screen Implementations — FacialScan, HomeMap, NavigateToBike, WalkingDirections Summary

**One-liner:** Four React Native Paper HIFI screen preview files (Screen Batch B) with Preview+SourceCode exports; FacialScan with Volt Black dark surface and electric green oval face guide; three map screens with grey placeholder and position:absolute overlays reusing TabBarPreview, BottomCardPreview, and MapPinPreview — zero hardcoded brand hex.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Implement FacialScan and HomeMap screen previews | 31b2f9d | apps/showcase/src/screens/FacialScanPreview.tsx, HomeMapPreview.tsx |
| 2 | Implement NavigateToBike and WalkingDirections screen previews | 59ca9cb | apps/showcase/src/screens/NavigateToBikePreview.tsx, WalkingDirectionsPreview.tsx |

## What Was Built

### apps/showcase/src/screens/FacialScanPreview.tsx
KYC facial scan screen on Volt Black surface (colorSurfaceInverse). Layout: step indicator "Step 2 of 2" (colorTextSecondary), two-segment progress strip (colorSurfaceBase). Camera viewport: dark (#111111 static placeholder) with outer dashed ring (colorTextOnInverse/30% opacity) and oval face guide (200×250, borderRadius:999, borderColor:colorActionPrimary). Instructions pill (rgba(0,0,0,0.53) dark overlay). Trust panel: shield badge (rgba(255,255,255,0.09) alpha fill), "Facial Recognition" heading, body text, ProgressBar (color=colorActionPrimary, progress=0.5), "Scanning..." label, and "Start Face Scan" Button (contained, backgroundColor:colorSurfaceBase, labelStyle:colorTextPrimary).

### apps/showcase/src/screens/HomeMapPreview.tsx
Home map screen with outer View height 600. Grey map placeholder (flex:1, '#e8e8e8' with comment). Absolute overlays: top search bar Surface (elevation=2, margin=space400, borderRadius=radiusLg, "Where to?" in colorTextSecondary), "6 bikes nearby" badge (colorActionPrimary background, full radius), and user location pulse (rgba(198,255,45,0.20) outer ring, colorActionPrimary 12px inner dot). Bottom: BottomCardPreview as absolute overlay. TabBarPreview rendered below the map view.

### apps/showcase/src/screens/NavigateToBikePreview.tsx
Navigate-to-bike map screen with grey placeholder. Absolute overlays: top instruction card Surface (elevation=2, "Walk to your bike" heading, "3 min · 200m" subtext), ETA dark pill ("4 min · 350m" in colorSurfaceInverse), dashed route line (borderStyle='dashed', colorTextSecondary), electric green pulse ring (rgba(198,255,45,0.20)), MapPinPreview reused as center overlay at top 30%, user location pulse, BottomCardPreview at bottom.

### apps/showcase/src/screens/WalkingDirectionsPreview.tsx
Walking directions map screen with grey placeholder. Absolute overlays: dark top instruction card Surface (colorSurfaceInverse background, "Walking" heading + "Head north on Main St" row), bike destination pin (32px circle, colorActionPrimary, 🚲 icon), remaining route line (dashed, colorTextDisabled), walked route line (solid 3px colorActionPrimary), walking path indicator (horizontal dashed colorActionPrimary line), user location pulse (rgba(198,255,45,0.20)), BottomCardPreview at bottom.

## Deviations from Plan

### Auto-fixed Issues

None — plan executed exactly as written. The component reuse pattern (TabBarPreview, BottomCardPreview, MapPinPreview), map placeholder approach, and typography literal pattern all followed plan specifications and established conventions from Plans 03 and 04.

## Known Stubs

None — all 4 files render real components with token-driven styling. Grey '#e8e8e8' placeholder is the intended map representation (per plan spec and Phase 3 story convention), not a stub preventing the plan goal. REGISTRY entries for these 4 screens are intentionally deferred to Plan 07 (Registry Merge) per plan specification.

## Threat Flags

None — no network endpoints, auth paths, or trust boundary changes. All map content is static placeholder with no real location data (T-04-06: Information Disclosure — accepted per plan threat register).

## Self-Check: PASSED

- [x] apps/showcase/src/screens/FacialScanPreview.tsx exists: FOUND — colorActionPrimary (4 matches), colorSurfaceInverse, ProgressBar, exports FacialScanPreview + FacialScanSourceCode
- [x] apps/showcase/src/screens/HomeMapPreview.tsx exists: FOUND — '#e8e8e8' with comment (2 matches), TabBarPreview imported and rendered, BottomCardPreview imported, exports HomeMapPreview + HomeMapSourceCode
- [x] apps/showcase/src/screens/NavigateToBikePreview.tsx exists: FOUND — MapPinPreview imported, BottomCardPreview imported (4 matches), '#e8e8e8' with comment, exports NavigateToBikePreview + NavigateToBikeSourceCode
- [x] apps/showcase/src/screens/WalkingDirectionsPreview.tsx exists: FOUND — BottomCardPreview imported (4 matches), colorActionPrimary walking path, '#e8e8e8' with comment, exports WalkingDirectionsPreview + WalkingDirectionsSourceCode
- [x] Zero hardcoded brand hex values across all 4 files: VERIFIED (grep for hex excluding '#111111', '#e8e8e8', rgba, and comments returned no matches — exit code 1)
- [x] All 4 files have both Preview function and SourceCode string exports: VERIFIED
- [x] registry.ts NOT modified: VERIFIED — deferred to Plan 07
- [x] Commit 31b2f9d exists: VERIFIED
- [x] Commit 59ca9cb exists: VERIFIED
