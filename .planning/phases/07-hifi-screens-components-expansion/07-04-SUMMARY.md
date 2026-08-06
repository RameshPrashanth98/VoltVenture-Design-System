---
phase: "07"
plan: "07-04"
subsystem: stories/screens
tags: [dark-screen, kyc, camera, animation, hi-fi]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/screens/id-scan.stories.js", "stories/screens/facial-scan.stories.js"]
  affects: []
tech_stack:
  added: []
  patterns:
    - CSS keyframe injection via document.head.appendChild (scanLineMove, scanOval)
    - Dark screen override: screen.style.background = '#0f0f0f' after makePhoneFrame()
    - 4-corner accent bar pattern (position:absolute, 8 divs per frame)
    - Face oval with animated rotating arc (border-top-color cycling via keyframes)
key_files:
  created: []
  modified:
    - stories/screens/id-scan.stories.js
    - stories/screens/facial-scan.stories.js
decisions:
  - "Dark inner screen override applied after makePhoneFrame() call — screen.style.background = '#0f0f0f'"
  - "ID Scan: 290x190px card frame with 4-corner C6FF2D accent bars; scan line animated with scanLineMove keyframe"
  - "Facial Scan: 200x250px face oval (border-radius:50%) + 216x266px scan arc animated with scanOval keyframe"
  - "Progress strip: ID Scan step 1 of 2 (one white + one rgba(255,255,255,0.20)); Facial Scan step 2 of 2 (both white)"
  - "RN Paper JSX SourceCode replaces old HTML SourceCode pattern; uses Animated.Value for scan animation in JSX code snippet"
  - "Semi-transparent fills: rgba(255,255,255,0.13), rgba(198,255,45,0.73), rgba(0,0,0,0.53), rgba(255,255,255,0.094) all hardcoded — no tokens"
metrics:
  duration: "~15 minutes"
  completed: "2026-08-06"
  tasks_completed: 2
  tasks_total: 2
  files_changed: 2
---

# Phase 7 Plan 04: ID Scan & Facial Scan Hi-Fi Stories Summary

**One-liner:** Rebuilt two dark KYC camera screens with animated scan overlays — ID card frame with 4-corner green accent bars + scanLineMove, face oval with rotating scanOval arc — both using #0f0f0f dark background override.

## Tasks Completed

| Task | Description | Commit |
|------|-------------|--------|
| T-01 | Rebuild id-scan.stories.js (Hi-Fi frame f6zx5) | 1116935 |
| T-02 | Rebuild facial-scan.stories.js (Hi-Fi frame llnIt) | 1116935 |

## What Was Built

### stories/screens/id-scan.stories.js
- **Default export:** Full-width 393px dark screen with status bar, top nav (close + flashlight), progress strip (step 1 of 2), camera viewport with 290x190px ID card frame (4-corner C6FF2D accent bars, photo slot, scan line, MRZ lines, lock badge, instructions banner), bottom trust panel with shield row and "Scan ID" CTA
- **Interactive export:** makePhoneFrame() with dark screen override, scanLineMove CSS keyframe injected, scan line animated top:20px↔160px over 2s, CTA press state (scale 0.97)
- **SourceCode export:** React Native Paper JSX with Animated.Value for scan line animation

### stories/screens/facial-scan.stories.js
- **Default export:** Same dark structure but flip camera nav button, both progress segments white (step 2 of 2), face oval (200x250px, border-radius:50%) + scan arc (216x266px), "Start Face Scan" CTA
- **Interactive export:** makePhoneFrame() with dark screen override, scanOval CSS keyframe injected (cycling border-top/right/bottom/left-color), scan arc animated 2s linear infinite, CTA press state
- **SourceCode export:** React Native Paper JSX with rotating Animated.Value

## Acceptance Criteria Verification

| Criterion | Status |
|-----------|--------|
| id-scan.stories.js exists | PASS |
| facial-scan.stories.js exists | PASS |
| Node import check exits 0 (both files) | PASS |
| id-scan contains rgba(255,255,255,0.13) for nav buttons | PASS (6 matches) |
| id-scan contains rgba(198,255,45,0.73) for scan line | PASS (4 matches) |
| id-scan contains rgba(0,0,0,0.53) for instructions banner | PASS (4 matches) |
| id-scan contains scanLineMove keyframe | PASS (2 matches) |
| id-scan contains #0f0f0f for screen background | PASS (9 matches) |
| facial-scan contains border-radius:50% for face oval | PASS (4 matches) |
| facial-scan contains #0f0f0f for screen background | PASS (9 matches) |
| facial-scan contains scanOval keyframe | PASS (2 matches) |
| facial-scan does NOT contain rgba(255,255,255,0.20) (both segments white) | PASS (0 matches) |
| PascalCase exports: Default, Interactive, SourceCode | PASS (both files) |
| Pre-existing foundation stories NOT staged | PASS |

## Deviations from Plan

None — plan executed exactly as written.

Both T-01 and T-02 committed in a single atomic commit (1116935) since they are co-dependent KYC screen pair that share the same pattern — separate staging was not needed as they were completed back-to-back without intermediary verification gates.

## Known Stubs

None. Both screens render their full visual content with working animations.

## Threat Flags

None. Story files are static HTML/JS display code — no network endpoints, auth paths, or file access patterns introduced.

## Self-Check: PASSED

- [x] stories/screens/id-scan.stories.js exists and verified
- [x] stories/screens/facial-scan.stories.js exists and verified
- [x] Commit 1116935 verified in git log
- [x] No pre-existing foundation stories staged
