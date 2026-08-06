---
phase: 7
plan: "07-06"
subsystem: stories/screens
tags: [hi-fi, screens, ride-complete, cafe-detail, interactive, storybook]
dependency_graph:
  requires: ["07-01"]
  provides: ["Screens/RideCompleteSummary", "Screens/CafeDetail"]
  affects: []
tech_stack:
  added: []
  patterns:
    - makePhoneFrame inline per-file (402x874 Volt Black bezel, 44px radius)
    - Dark stats card with rgba(255,255,255,0.13) dividers on colorSurfaceInverse bg
    - Hero photo section with absolutely positioned nav buttons + VIP tag
    - Tab bar with Discover active (colorSurfaceInverse pill)
    - Category E interactive: CTA press state only (pointerdown/up/leave)
key_files:
  created:
    - stories/screens/ride-complete-summary.stories.js
    - stories/screens/cafe-detail.stories.js
  modified: []
decisions:
  - "VIP gold crown color hardcoded as #F5C518 per plan (no token)"
  - "Hero section height in Interactive = 266px (320 - 54px frame status bar) to fit phone frame"
  - "Cafe Detail tab bar uses Discover as active tab per plan spec"
  - "Done button press state uses colorGreen600 (#a8de1a) per plan"
metrics:
  duration_minutes: 20
  completed: "2026-08-06T04:54:45Z"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 0
---

# Phase 7 Plan 06: Ride Complete Summary + Cafe Detail Summary

**One-liner:** Two Hi-Fi screen stories — post-ride summary with dark stats card + VoltCoins banner (frame seIX4), and VIP cafe detail with 320px hero photo and barcode CTA (frame dSxRO).

## What Was Built

### T-01: ride-complete-summary.stories.js (frame seIX4)

Post-ride summary screen with light background (colorSurfaceBase).

**Default export** (static HTML):
- Status bar (62px, light — colorSurfaceBase bg)
- Check circle: 72px outer ring (colorGreen100), 52px inner circle (colorActionPrimary) with ✓ checkmark
- Header title "Ride Complete!" (Manjari, typeHeadingLg) + subtitle (colorTextSecondary)
- Dark stats card (colorSurfaceInverse bg, radiusXl): 3 blocks (Distance/Duration/VoltCoins) separated by `rgba(255,255,255,0.13)` 40px dividers; VoltCoins value in colorActionPrimary
- Billing Summary label + billing card (colorSurfaceBase, border colorGrey100): Base Rental + Electricity Charge rows with dot indicators, 1px divider, Total row (fontWeight:700)
- Deposit note row (colorGreen100 bg, radiusMd, shield icon, colorTextAccent text)
- VoltCoins Banner (colorSurfaceInverse bg, 36px coin badge in colorActionPrimary, "You earned 12 VoltCoins!" white, chevron)
- CTA wrap (margin-top:auto): Done button (56px, colorActionPrimary, radiusFull) + "View Receipt" link

**Interactive export:**
- makePhoneFrame() inline (402x874, #0f0f0f bezel)
- Scroll area with all sections assembled via document.createElement
- Done button: pointerdown → colorGreen600 + scale(0.97); pointerup/leave → reset

**SourceCode export:** React Native Paper JSX with token values as string literals

### T-02: cafe-detail.stories.js (frame dSxRO)

VIP cafe detail screen with hero photo, light content area, and tab bar.

**Default export** (static HTML):
- Hero section (320px, #e8e8e8 placeholder): photo gradient overlay (rgba(0,0,0,0.40)), status bar overlaid with white text, back/share buttons (36px circles, rgba(255,255,255,0.87)), carousel dots (active 16x5px, inactive 5x5px), VIP tag (#F5C518 crown icon — hardcoded, no token)
- Content area (flex:1, padding 16px 20px): Title block ("The Grind — VIP Hub", Manjari typeHeadingMd + meta), Battery status card (colorGreen100 bg, 44px ⚡ chip, "8 charging slots / All available" in colorTextAccent), About text (colorGrey700), 3 perk chips (colorGrey100 bg, radiusFull), "Show VIP Barcode" CTA (56px, colorActionPrimary, fontWeight:600)
- Tab bar (flex row): Discover active (colorSurfaceInverse pill, colorTextPrimary label); others inactive (colorGrey200 pill, colorTextSecondary label)

**Interactive export:**
- makePhoneFrame() inline
- Hero section height = 266px in phone frame (320px viewport minus 54px frame status bar)
- Back/share buttons: opacity press feedback
- Barcode CTA: pointerdown → colorGreen600 + scale(0.97); pointerup/leave → reset

**SourceCode export:** React Native Paper JSX with VIP_GOLD = '#F5C518' documented

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Removed malformed dead code from Default perks row**
- **Found during:** T-02 post-write review
- **Issue:** A leftover `${['&#9749; ...'].map(() => '').join('')}` expression produced no output but was syntactically valid noise
- **Fix:** Removed the dead map call; perk chips already rendered individually below it
- **Files modified:** stories/screens/cafe-detail.stories.js
- **Commit:** 7907e07 (included in T-02 commit)

**2. [Rule 3 - Blocking] Hero section height adjustment for phone frame**
- **Found during:** T-02 Interactive design
- **Issue:** 320px hero inside 874px phone frame with 54px frame status bar would overflow; absolute hero within flex-column needed adjustment
- **Fix:** Hero section in Interactive set to 266px (320-54) to fit properly within the 820px inner viewport (874-54)
- **Files modified:** stories/screens/cafe-detail.stories.js

## Verification

Node import check:
```
node --input-type=module --eval "import './stories/screens/ride-complete-summary.stories.js'; import './stories/screens/cafe-detail.stories.js'" 2>&1
# EXIT:0
```

Acceptance criteria:
- [x] ride-complete-summary.stories.js exists with Default, Interactive, SourceCode exports
- [x] cafe-detail.stories.js exists with Default, Interactive, SourceCode exports
- [x] `rgba(255,255,255,0.13)` present in ride-complete (dark card dividers)
- [x] `72` and `52` present (check circle dimensions)
- [x] `colorGreen100` token referenced in ride-complete
- [x] `VoltCoins` text present in ride-complete
- [x] `#F5C518` present in cafe-detail (VIP crown gold, hardcoded)
- [x] `320` present in cafe-detail (hero photo height)
- [x] `Discover` referenced as active tab in cafe-detail
- [x] Tab labels Ride, Discover, Wallet, Account present in cafe-detail
- [x] No parse errors on import
- [x] Pre-existing foundation stories NOT staged (border/color/elevation/grid/iconography/radius/spacing/typography)

## Known Stubs

None — both screens display representative data values appropriate for Hi-Fi story display.

## Commits

| Hash | Task | Description |
|------|------|-------------|
| 8365cd2 | T-01 | feat(07-06): add Ride Complete Summary screen story (frame seIX4) |
| 7907e07 | T-02 | feat(07-06): add Cafe Detail screen story (frame dSxRO) |

## Self-Check: PASSED

- [x] stories/screens/ride-complete-summary.stories.js exists
- [x] stories/screens/cafe-detail.stories.js exists
- [x] Commit 8365cd2 exists in git log
- [x] Commit 7907e07 exists in git log
