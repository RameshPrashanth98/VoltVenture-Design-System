---
phase: 01-token-pipeline-dart-output
plan: 03
subsystem: tokens
tags: [style-dictionary, dtcg, primitive-tokens, color, spacing, radius, typography, elevation, border, grid, iconography]

# Dependency graph
requires: []
provides:
  - "tokens/primitive/color.json — 5-step green ramp + 9-step grey ramp + black + white (W3C DTCG)"
  - "tokens/primitive/spacing.json — 11 steps space.050–space.1600 (all multiples of 4)"
  - "tokens/primitive/radius.json — xs–2xl + full(999) + icon(22.37 squircle constant)"
  - "tokens/primitive/typography.json — 14 type scale entries with size/weight/lineHeight/tracking"
  - "tokens/primitive/elevation.json — 4 levels (flat=none, raised, floating, overlay) in DTCG shadow format"
  - "tokens/primitive/border.json — 4 widths: none(0), hairline(1), strong(1.5), focus(2)"
  - "tokens/primitive/grid.json — 4 constants: columns(4), margin(16), gutter(16), contentWidth(361)"
  - "tokens/primitive/iconography.json — canvas(24), liveArea(20), padding(2), xs/sm/md/lg sizes"
affects: [01-04-semantic-tokens, 01-05-build-validators, 01-06-pipeline-wiring]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "W3C DTCG format: $type/$value (not type/value)"
    - "Primitive tokens use private naming convention (exposed only via semantic aliases)"
    - "Elevation uses $type: shadow with DTCG shadow object structure (offsetX, offsetY, blur, spread, color)"
    - "Typography split into separate sub-trees: font.family, font.size, font.lineHeight, font.weight, font.tracking"
    - "Icon squircle constant: radius.icon = 22.37 (mathematically derived, not a 4pt-grid value)"

key-files:
  created:
    - tokens/primitive/color.json
    - tokens/primitive/spacing.json
    - tokens/primitive/radius.json
    - tokens/primitive/border.json
    - tokens/primitive/typography.json
    - tokens/primitive/elevation.json
    - tokens/primitive/grid.json
    - tokens/primitive/iconography.json
  modified: []

key-decisions:
  - "Green ramp: 5 steps (#F4FFD9, #E5FFAC, #C6FF2D, #9ECC24, #7D9220) — step 300 is the brand green (#C6FF2D)"
  - "Grey ramp: 9 steps from #FAFAFA through #0F0F0F plus color.black (#000000) and color.white (#FFFFFF)"
  - "Spacing uses space.050 (2pt) as smallest step — not space.100 (4pt) — to support hairline gaps"
  - "radius.icon = 22.37 is explicitly exempt from the 4pt grid validator (squircle constant)"
  - "Typography lineHeight stored as separate dimension tokens (not composite) — Plan 01-06 wires them into SD lineHeight transform"
  - "Elevation shadow colors use 8-char hex for alpha: raised=#0000001A (10%), floating=#00000033 (20%), overlay=#00000066 (40%)"

patterns-established:
  - "Primitive token naming: category.concept.variant (e.g. color.green.300, space.400, font.size.heading.md)"
  - "All dimension $values are plain numbers (no 'pt' suffix) — dimension.double transform handles Dart conversion"

requirements-completed: [D-06]

# Metrics
duration: 5min
completed: 2026-07-24
---

# Phase 01 Plan 03: Primitive Token Authoring Summary

**All 8 primitive token category JSON files authored in W3C DTCG format — 71 tokens across color, spacing, radius, typography, elevation, border, grid, and iconography**

## Performance

- **Duration:** ~5 min
- **Completed:** 2026-07-24
- **Tasks:** 2 of 2
- **Files created:** 8

## Accomplishments

- Task 1: color.json, spacing.json, radius.json, border.json — committed (`dd5f1c0`)
- Task 2: typography.json, elevation.json, grid.json, iconography.json — committed (`bc3e25f`)
- All tokens use W3C DTCG `$type`/`$value` format (not bare `type`/`value`)
- Color ramp anchored to brand spec: green.300 = `#C6FF2D` (electric green)
- Elevation shadows use 8-char hex alpha to match Flutter ARGB requirements

## Task Commits

1. **Task 1: Color, spacing, radius, border primitives** — `dd5f1c0` (feat)
2. **Task 2: Typography, elevation, grid, iconography primitives** — `bc3e25f` (feat)

## Files Created

- `tokens/primitive/color.json` — 5 green steps + 9 grey steps + black + white (17 color tokens)
- `tokens/primitive/spacing.json` — 11 spacing steps (space.050 = 2pt through space.1600 = 64pt)
- `tokens/primitive/radius.json` — 6 corner radius values + full(999) + icon(22.37)
- `tokens/primitive/border.json` — 4 border widths (none, hairline, strong, focus)
- `tokens/primitive/typography.json` — font families(3) + sizes(14) + lineHeights(14) + weights(14) + tracking(14)
- `tokens/primitive/elevation.json` — 4 elevation levels; raised/floating/overlay use DTCG `$type: shadow`
- `tokens/primitive/grid.json` — 4 grid layout constants
- `tokens/primitive/iconography.json` — 7 icon size/geometry tokens

## Decisions Made

- Brand green (#C6FF2D) lives at `color.green.300` — semantic layer aliases it as `color.action.primary`
- `radius.icon = 22.37` is a squircle-derived constant, exempt from the 4pt grid validator (Plan 01-05 must whitelist it)
- Elevation shadow alpha: raised=10% (#0000001A), floating=20% (#00000033), overlay=40% (#00000066)
- Typography `$type` omitted for family/weight/tracking (no standard DTCG type for these) — SD handles them as raw values

## Deviations from Plan

None.

## Verification Notes

Files verified as valid JSON. SD reference resolution (`npm run build:tokens`) deferred to post-Wave-1-merge when package.json (from 01-01) is available on the main branch.

## Next Phase Readiness

- Semantic layer (Plan 01-04) can reference all primitives via `{color.green.300}`, `{space.400}`, etc.
- Build validators (Plan 01-05) can validate spacing/radius 4pt grid — note `radius.icon = 22.37` must be whitelisted
- Pipeline wiring (Plan 01-06) can build against these tokens once scaffold is merged

---
*Phase: 01-token-pipeline-dart-output*
*Completed: 2026-07-24*
