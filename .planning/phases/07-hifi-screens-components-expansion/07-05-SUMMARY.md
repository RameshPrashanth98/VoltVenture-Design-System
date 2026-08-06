---
phase: 7
plan: "07-05"
subsystem: stories/screens
tags: [screen-story, qr-unlock, safety-mount, dark-screen, interactive, storybook]
dependency_graph:
  requires: ["07-01"]
  provides: ["qr-unlock-scan story (pE4ag)", "safety-mount story (L3K2a)"]
  affects: ["stories/screens/"]
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline", "CSS keyframe animation", "pointerdown events", "slider thumb interaction"]
key_files:
  created:
    - stories/screens/qr-unlock-scan.stories.js
    - stories/screens/safety-mount.stories.js
  modified: []
decisions:
  - "QR Unlock Scan: dark inner screen (#0f0f0f) via screen.style.background override after makePhoneFrame()"
  - "QR corner accents: 32x4 H + 4x32 V per corner (larger than ID Scan's 28x3)"
  - "Scan line uses rgba(198,255,45,0.80) animated with qrScan @keyframes (0%-100% top:10px, 50% top:190px)"
  - "Pulsing green dot uses dotPulse @keyframes on opacity (1.0 <-> 0.3)"
  - "Safety Mount inner screen stays #ffffff (light modal-style flow step)"
  - "No tab bar on Safety Mount (modal flow step, not main nav screen)"
  - "Slider thumb uses calc(100% - 48px) for confirmed right position"
  - "CTA button opacity 0.5 until slider confirmed; opacity transitions to 1 on confirm"
metrics:
  duration: "~20 minutes"
  completed: "2026-08-06"
  tasks_completed: 2
  files_created: 2
---

# Phase 7 Plan 05: QR Unlock Scan + Safety Mount Summary

**One-liner:** Dark QR camera screen with animated scan line and animated dot, plus light-mode safety mount screen with geometric CSS illustration, checkbox toggle, and swipe-to-confirm slider.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | QR Unlock Scan screen story (frame pE4ag) | acf388e | stories/screens/qr-unlock-scan.stories.js |
| T-02 | Safety Mount screen story (frame L3K2a) | 0464808 | stories/screens/safety-mount.stories.js |

## Key Implementation Details

### QR Unlock Scan (qr-unlock-scan.stories.js)
- Title: `Screens/QrUnlockScan`
- Dark screen: `screen.style.background = '#0f0f0f'` after `makePhoneFrame()`
- QR frame: 210x210px, positioned `top:50%; left:50%; transform:translate(-50%,-55%)`
- Corner accents: 32x4px (H) + 4x32px (V) per corner using `tokens.colorActionPrimary` (#C6FF2D)
- Scan line: 178px wide, `rgba(198,255,45,0.80)`, animated via `@keyframes qrScan`
- Green dot: 8x8px circle animated via `@keyframes dotPulse` (opacity 1.0 <-> 0.3)
- Bottom panel: bike chip (rgba white/7%), divider (rgba white/9.4%), enter code button
- Interactive: CSS keyframes injected once into `document.head` with guard `gsd-qrscan-anim`

### Safety Mount (safety-mount.stories.js)
- Title: `Screens/SafetyMount`
- Light screen: default #ffffff from makePhoneFrame(), no override
- No tab bar (modal-style safety flow step)
- Geometric illustration: BG circle 148px, handlebar 285x22, grips 42x42, clamp 47x36, phone body 59x100, phone screen 49x74
- Checkbox: `pointerdown` toggles `colorActionPrimary` <-> `colorGrey200` and checkmark "✓" <-> ""
- Slider: `pointerdown` sets `sliderThumb.style.left = 'calc(100% - 48px)'`, track label -> "✓ Confirmed", CTA opacity -> 1
- CTA: `pointerdown` -> `scale(0.97)`, `pointerup`/`pointerleave` -> `scale(1)`

## Verification

Both files verified clean:
```
node --input-type=module --eval "import './stories/screens/qr-unlock-scan.stories.js'; import './stories/screens/safety-mount.stories.js'" 2>&1
# → exit 0 (no output)
```

All acceptance criteria met:
- `rgba(198,255,45,0.80)` present in QR scan story (4 occurrences)
- `rgba(255,255,255,0.07)` present in QR scan story (7 occurrences)
- `210` (QR frame dimension) present
- `32` and `4` (corner accent H/V dimensions) present
- `qrScan` keyframe animation present
- `285px` (handlebar width) present in safety mount
- `59px` / `100px` (phone body dimensions) present
- `Slide to confirm` text present
- `pointerdown` event handlers present (3 occurrences)
- `calc(100%` for slider thumb confirmed position present
- All PascalCase exports: `Default`, `Interactive`, `SourceCode`

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — both screens are fully illustrated with all specified elements.

## Threat Flags

None — these are static Storybook story files with no network endpoints, auth paths, or schema changes.

## Self-Check: PASSED

- [x] stories/screens/qr-unlock-scan.stories.js exists (526 lines)
- [x] stories/screens/safety-mount.stories.js exists (679 lines)
- [x] Commit acf388e exists: `feat(07-05): add QR Unlock Scan screen story (frame pE4ag)`
- [x] Commit 0464808 exists: `feat(07-05): add Safety Mount screen story (frame L3K2a)`
- [x] Pre-existing foundation stories NOT staged (border, color, elevation, grid, iconography, radius, spacing, typography)
