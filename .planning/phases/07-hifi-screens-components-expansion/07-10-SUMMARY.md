---
phase: 7
plan: "07-10"
subsystem: storybook-components
tags: [component, voltcoins, station-info, storybook, html-css]
dependency_graph:
  requires: ["07-01"]
  provides: ["C-09-voltcoins-balance", "C-11-station-info-card"]
  affects: ["07-18-voltcoins-rewards", "07-24-end-ride-find-charging"]
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline copy", "DOM element Interactive return", "pointerdown/pointerup press states", "RN Paper JSX SourceCode panel"]
key_files:
  created:
    - stories/components/voltcoins-balance.stories.js
    - stories/components/station-info-card.stories.js
  modified: []
decisions:
  - "VoltCoins Balance Interactive is static display only — counter animation deferred per D-11 + CONTEXT.md"
  - "Navigate button stopPropagation on press to prevent card press feedback from firing simultaneously"
  - "shadowFromToken + hexToRgba helpers copied inline into station-info-card per project conventions"
metrics:
  duration_seconds: 191
  completed_date: "2026-08-06"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Phase 7 Plan 10: VoltCoinsBalance + StationInfoCard Component Stories Summary

**One-liner:** Dark balance card with 48px coin badge + white charging station card with colorGreen100 slots badge and colorActionPrimary navigate CTA.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Create voltcoins-balance.stories.js (C-09) | 08fef27 | stories/components/voltcoins-balance.stories.js |
| T-02 | Create station-info-card.stories.js (C-11) | 89abd3a | stories/components/station-info-card.stories.js |

## What Was Built

### VoltCoinsBalance (C-09) — `stories/components/voltcoins-balance.stories.js`

- **Default:** Full-width dark card (`colorSurfaceInverse` = `#0f0f0f`), `borderRadius:28px` (`radiusXl`), 24px padding. Contains a row with a 48×48px circular coin badge (`colorActionPrimary` = `#c6ff2d`, ⚡ glyph in `colorTextPrimary`), balance value "1,240" at 40px/700 in white, and "VoltCoins" label in `colorGrey500`. Level badge pill uses `rgba(255,255,255,0.13)` background with 🏆 + "Level 3 — Explorer" text.
- **Interactive:** Phone-framed (402×874px, #0f0f0f bezel, 38px inner screen radius). Static display — no animation per D-11 (counter animation deferred). Card centered in white content area.
- **SourceCode:** RN Paper JSX with `Surface`, `View`, `Text`, full `StyleSheet` including token hex annotations.

### StationInfoCard (C-11) — `stories/components/station-info-card.stories.js`

- **Default:** White card (`colorSurfaceBase`) with `radiusLg` (20px) and `elevationRaised` shadow. Top row: 34×34px icon chip (`colorGrey100`), station name ("VoltHub Central", 600 weight), type chip ("Charging Station" in `colorGrey100` pill). Slots badge: `colorGreen100` (`#f4ffd9`) pill with `colorTextAccent` check + "6 slots available". 1px `colorGrey100` divider. Fee note row with ℹ icon. 48px Navigate button (`colorActionPrimary`, full-width, `radiusFull`). "Resume Ride" underlined text link.
- **Interactive:** Phone-framed. Navigate button `pointerdown` → `colorGreen600` + `scale(0.97)`, restores on `pointerup`/`pointerleave`. Card background `pointerdown` → `colorGrey050`, restores on release. `stopPropagation` on Navigate button events prevents card feedback from firing simultaneously.
- **SourceCode:** RN Paper JSX with `Surface`, `TouchableOpacity`, full `StyleSheet` with token annotations.

## Deviations from Plan

None — plan executed exactly as written.

## Threat Flags

None — these are pure Storybook HTML/CSS story files with no network endpoints, auth paths, or schema changes.

## Known Stubs

None — both components display realistic static data (balance "1,240", "VoltHub Central", "6 slots available"). No data source wiring is required at this phase; data is passed as props in the RN Paper SourceCode.

## Self-Check: PASSED

- [x] `stories/components/voltcoins-balance.stories.js` exists (319 lines)
- [x] `stories/components/station-info-card.stories.js` exists (549 lines)
- [x] Both files: `node --input-type=module` import exits 0
- [x] voltcoins-balance: exports Default, Interactive, SourceCode (PascalCase)
- [x] station-info-card: exports Default, Interactive, SourceCode (PascalCase)
- [x] voltcoins-balance: contains '48' (coin badge), 'rgba(255,255,255,0.13)' (level badge), 'VoltCoins', 'colorSurfaceInverse'
- [x] station-info-card: contains 'colorGreen100' (slots badge), 'Navigate' (button), 'Resume Ride' (link), 'pointerdown' (press handler)
- [x] Commits 08fef27 and 89abd3a exist in git log
- [x] Pre-existing foundation stories NOT staged (border, color, elevation, grid, iconography, radius, spacing, typography remain unstaged)
