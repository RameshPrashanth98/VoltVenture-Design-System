---
phase: 4
plan: 4
title: "Component Implementations — ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard"
subsystem: showcase-component-previews
tags: [react-native-paper, expo-vector-icons, bottom-navigation, progress-bar, surface, components]
dependency_graph:
  requires: [04-02 — apps/showcase/ scaffold, REGISTRY skeleton, lib/index.ts barrel export]
  provides: [5 component preview files in apps/showcase/src/components/ (Batch B)]
  affects: [04-07 — Registry Merge will wire all Batch B entries into REGISTRY, 04-08 — done-bar verifies all items render]
tech_stack:
  added: []
  patterns:
    - Preview component + SourceCode string export pattern (named exports per file)
    - import * as tokens from voltventure-design-system for all spacing/radius/color values
    - BottomNavigation.Bar (not deprecated createMaterialBottomTabNavigator) for TabBar
    - Ionicons from @expo/vector-icons for MapPin location icon and TabBar tab icons
    - React.useState for TabBarPreview interactive index state
    - Literal font-size values (13/15/11) where composite typography tokens not re-exported
key_files:
  created:
    - apps/showcase/src/components/ProgressStripPreview.tsx
    - apps/showcase/src/components/TrustPanelPreview.tsx
    - apps/showcase/src/components/MapPinPreview.tsx
    - apps/showcase/src/components/TabBarPreview.tsx
    - apps/showcase/src/components/BottomCardPreview.tsx
  modified: []
decisions:
  - "TabBarPreview uses BottomNavigation.Bar (not BottomNavigation wrapper) with shifting=false — matches plan requirement to avoid deprecated createMaterialBottomTabNavigator"
  - "MapPinPreview circular badge is width/height tokens.space1200 (48pt) — meets 48dp touch-target floor even as a decorative element"
  - "BottomCardPreview Button contained uses labelStyle={{ color: tokens.colorTextPrimary }} — required brand rule: Volt Black text on electric green background"
  - "Typography font-size values replaced with literals (13/15/11pt) — composite tokens (typeBodySm, typeHeadingSm, typeLabelSm) exist in generated/tokens.js but are NOT re-exported from lib/index.ts; runtime resolution would be undefined"
  - "REGISTRY not modified — intentionally deferred to Plan 07 (Registry Merge) to avoid conflicts with Plan 03 registry writes"
metrics:
  duration: "12 minutes"
  completed: "2026-08-02"
  tasks_completed: 2
  files_changed: 5
---

# Phase 4 Plan 4: Component Implementations — Batch B Summary

**One-liner:** Five React Native Paper component preview files (ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard) with Preview+SourceCode exports; ProgressBar electric green fill, BottomNavigation.Bar tab bar, circular Ionicons map pin, and rounded-top Surface bottom card — all using token values, zero hardcoded hex.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Implement ProgressStrip, TrustPanel, MapPin preview components | 998fd4a | apps/showcase/src/components/ProgressStripPreview.tsx, TrustPanelPreview.tsx, MapPinPreview.tsx |
| 2 | Implement TabBar and BottomCard preview components; fix composite token refs | b27d95c | apps/showcase/src/components/TabBarPreview.tsx, BottomCardPreview.tsx (+ fixes to Task 1 files) |

## What Was Built

### apps/showcase/src/components/ProgressStripPreview.tsx
Renders a `View` with `tokens.space400` padding containing a Text label "Step 1 of 3" (fontSize 13, colorTextPrimary) and a `ProgressBar` with `progress={0.33}`, `color={tokens.colorActionPrimary}` (electric green), and `borderRadius tokens.radiusXs`. Shows the VoltVenture step indicator pattern with the electric green progress fill.

### apps/showcase/src/components/TrustPanelPreview.tsx
Renders a `Surface` with `elevation={1}`, `borderRadius tokens.radiusLg`, `padding tokens.space500`, `margin tokens.space400`. Contains a heading "Why VoltVenture?" in fontSize 15 / fontWeight '600' / colorTextPrimary, and three trust bullet Text rows in colorTextSecondary: "✓ Verified drivers with background checks", "✓ Real-time trip sharing", "✓ 24/7 rider support".

### apps/showcase/src/components/MapPinPreview.tsx
Renders a centered `View` (alignItems: 'center') with a circular badge — `width/height tokens.space1200 (48pt)`, `borderRadius tokens.radiusFull`, `backgroundColor tokens.colorActionPrimary` — containing an `Ionicons name="location" size={tokens.iconSizeLg} color={tokens.colorTextPrimary}`. Below: Text "Home" in colorTextPrimary with marginTop tokens.space100.

### apps/showcase/src/components/TabBarPreview.tsx
Renders `BottomNavigation.Bar` with `React.useState(0)` for index. Three routes: Home (home/home-outline), Ride (bicycle/bicycle-outline), Profile (person/person-outline). `renderIcon` uses Ionicons with `tokens.iconSizeMd` size and the `color` prop from BottomNavigation (theme-driven). `shifting={false}` for stable label display. Wrapped in `View` with `paddingTop tokens.space400`.

### apps/showcase/src/components/BottomCardPreview.tsx
Renders `Surface elevation={4}` with `borderTopLeftRadius tokens.radiusXl`, `borderTopRightRadius tokens.radiusXl`, `padding tokens.space500`, `backgroundColor tokens.colorSurfaceBase`. Contains: heading "Your ride" (fontSize 15, fontWeight '600', colorTextPrimary), a fare row with "Estimated fare" (colorTextSecondary) and "12 IMP" (colorTextPrimary, fontWeight '600'), and a `Button mode="contained"` with `labelStyle={{ color: tokens.colorTextPrimary }}` and `contentStyle={{ height: tokens.space1200 }}` labeled "Confirm Booking".

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Replaced composite typography token references with literal values**
- **Found during:** Task 2 (while reviewing Task 1 output against what is actually exported from lib/index.ts)
- **Issue:** ProgressStripPreview, TrustPanelPreview, and MapPinPreview used `tokens.typeBodySm.fontSize`, `tokens.typeHeadingSm.fontSize`, `tokens.typeLabelSm.fontWeight` etc. These composite typography tokens (`typeBodySm`, `typeHeadingSm`, `typeLabelSm`) exist in `generated/tokens.js` but are NOT re-exported from `lib/voltventure_tokens.ts` or `lib/index.ts`. At runtime, `tokens.typeBodySm` would be `undefined`, causing a crash on `.fontSize`.
- **Fix:** Replaced all composite token property accesses with literal numeric values derived from `generated/tokens.js` truth: `typeBodySm.fontSize` → `13`, `typeHeadingSm.fontSize` → `15`, `typeLabelSm.fontSize` → `11`, `typeHeadingSm.fontWeight` → `'600'`. Added inline comments identifying the source token.
- **Files modified:** ProgressStripPreview.tsx, TrustPanelPreview.tsx, MapPinPreview.tsx, BottomCardPreview.tsx
- **Commit:** b27d95c

**Note:** The deferred tracking item is: Plan 04-01 (or a future fixup plan) should consider adding typography composite token exports to `lib/voltventure_tokens.ts` so they are available as `tokens.typeBodySm.fontSize` in all component files.

## Known Stubs

None — all 5 files render real components with token-driven styling. No placeholder data or empty states prevent the plan goal. REGISTRY entries for these 5 components are intentionally deferred to Plan 07 (Registry Merge) per plan specification.

## Threat Flags

None — no network endpoints, auth paths, or trust boundary changes. All files are static visual demo components with no real data persistence or user interaction beyond TabBar's local state toggle.

## Self-Check: PASSED

- [x] apps/showcase/src/components/ProgressStripPreview.tsx exists: FOUND — ProgressBar (4 occurrences), colorActionPrimary, no hardcoded hex
- [x] apps/showcase/src/components/TrustPanelPreview.tsx exists: FOUND — Surface (6 occurrences), colorTextPrimary, colorTextSecondary, 3 trust bullets
- [x] apps/showcase/src/components/MapPinPreview.tsx exists: FOUND — Ionicons (4 occurrences), colorActionPrimary, colorTextPrimary
- [x] apps/showcase/src/components/TabBarPreview.tsx exists: FOUND — BottomNavigation.Bar (2 occurrences), shifting={false}, useState
- [x] apps/showcase/src/components/BottomCardPreview.tsx exists: FOUND — borderTopLeftRadius (2), borderTopRightRadius (2), colorTextPrimary on labelStyle
- [x] Zero hardcoded hex values across all 5 files: VERIFIED (grep returned 0 matches)
- [x] registry.ts NOT modified: VERIFIED — only Batch A entries present
- [x] Commit 998fd4a exists: VERIFIED
- [x] Commit b27d95c exists: VERIFIED
