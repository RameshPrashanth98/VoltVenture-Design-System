---
phase: 7
plan: "07-02"
subsystem: storybook-screens
tags: [screen, splash, hi-fi, interactive, source-code, phase-7]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/screens/splash.stories.js — Hi-Fi rebuild"]
  affects: []
tech_stack:
  added: []
  patterns:
    - makePhoneFrame() inline helper (402x874px, Volt Black bezel, 44px radius)
    - CSS @keyframes loaderFill injected via document.head.appendChild(style)
    - DOM createElement pattern for Interactive export (no innerHTML rebuild)
    - React Native Paper JSX as static SourceCode string
key_files:
  created: []
  modified:
    - stories/screens/splash.stories.js
decisions:
  - "Splash is a light-variant screen — inner screen background stays #ffffff (no dark override)"
  - "loaderFill keyframe injected once with document.getElementById guard to avoid duplicate style injection on re-render"
  - "Background pattern: 8 angled 3x40px rects + 6 dot circles at opacity:0.08 — approximates SVG route path in frame O94n2"
  - "SourceCode shows React Native Paper JSX with Animated.Value for loader animation — token values as string literals"
metrics:
  duration: "15 minutes"
  completed: "2026-08-06"
  tasks_completed: 1
  files_modified: 1
---

# Phase 7 Plan 02: Splash Screen Hi-Fi Story Summary

Rebuilt `stories/screens/splash.stories.js` from Hi-Fi frame O94n2 with Default, Interactive, and SourceCode exports, replacing the Phase 3 wireframe version with the full Hi-Fi design: white background, 96px green V-badge, brand name, divider, tagline, and CSS keyframe loader animation.

## Tasks Completed

| Task | Description | Commit |
|------|-------------|--------|
| T-01 | Rebuild splash.stories.js from frame O94n2 | 2ef0d70 |

## What Was Built

### stories/screens/splash.stories.js

**Default export (HTML string):**
- White background (`colorSurfaceBase`)
- Background pattern layer at opacity:0.08: 8 thin angled decorative rectangles (3x40px, `colorGrey200` fill) at various rotations + 6 small grey dots (6x6px circles, `colorGrey300`)
- Center content: 96x96px green circle badge (`colorActionPrimary`) with "V" lettermark (48px/700), "VoltVenture" brand name (28px/700), 48x2px divider (`colorGrey200`), tagline "Ride. Explore. Repeat." (`colorTextSecondary`)
- Loader area at bottom:120px: 180x4px track (`colorGrey200`) with 108px fill (`colorActionPrimary`)
- Version text "v1.0.0" (`colorGrey300`) at bottom:24px
- No tab bar, no status bar (pre-auth splash)

**Interactive export (DOM element):**
- `makePhoneFrame()` helper copied inline (402x874px, Volt Black bezel, 44px radius, "9:41" status bar)
- CSS keyframe `loaderFill` injected once via `document.head.appendChild(style)` with ID guard
- Same visual layout via `document.createElement` and `style.*` assignments
- Animated loader fill: `width:0px` to `width:108px` over 2s ease-out

**SourceCode export (HTML string with pre/code block):**
- `_esc()` and `_blk()` helpers copied inline from button.stories.js pattern
- React Native Paper JSX snippet with `Animated.Value` for loader, `StyleSheet.create`, token values as string literals
- Covers full screen structure: badge, brand name, divider, tagline, animated loader, version text

## Acceptance Criteria Verification

- [x] `node --input-type=module --eval "import './stories/screens/splash.stories.js'"` exits 0
- [x] Exports: `Default` (function returning string), `Interactive` (function returning DOM element), `SourceCode` (function returning string containing 'pre')
- [x] Default return value contains `width:393px` and `colorActionPrimary` reference
- [x] Interactive function does not call innerHTML after initial construction
- [x] File contains `loaderFill` keyframe animation string
- [x] File does not contain lowercase export names
- [x] No import statements other than tokens import
- [x] Pre-existing foundation stories NOT staged (border, color, elevation, grid, iconography, radius, spacing, typography)

## Deviations from Plan

None — plan executed exactly as written.

## Self-Check: PASSED

- [x] `stories/screens/splash.stories.js` exists and is 371 lines (net change from 57 → 371 insertions)
- [x] Commit `2ef0d70` confirmed via `git log --oneline -1`
- [x] All named exports PascalCase: Default, Interactive, SourceCode
- [x] Token import: `import * as tokens from '../../generated/tokens.js'`
