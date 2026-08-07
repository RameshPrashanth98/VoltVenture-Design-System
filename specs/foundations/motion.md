# Motion

**Category:** Foundation
**Status:** Derived — v0.2 candidate (no JSON token file yet; values derived from story audit)
**CSS layer:** L1 `--ds-duration-*`, `--ds-easing-*`, L2 `--vv-duration-*`, `--vv-easing-*`, `--vv-motion-*`

---

## Overview

VoltVenture animations are **functional, not decorative**. Every transition communicates a state change or spatial relationship. Motion should feel snappy and direct — heavy animations slow down a ride-hailing app where users are often in-vehicle, one-handed, under time pressure.

---

## Duration Scale

| Token | Value | Use |
|-------|-------|-----|
| `--vv-duration-instant` | `0ms` | Immediate feedback (no visual delay) |
| `--vv-duration-fast` | `100ms` | Micro-interactions: button press, toggle flick, tap highlight |
| `--vv-duration-quick` | `150ms` | Small element transitions: border-color, opacity changes |
| `--vv-duration-standard` | `200ms` | Default: most state changes, background swaps |
| `--vv-duration-deliberate` | `300ms` | Layout transitions: height change, element appear/disappear |
| `--vv-duration-loop` | `2000ms` | Looping / pulsing animations: QR scan line, station pulse, location ping |

---

## Easing Functions

| Token | Value | Use |
|-------|-------|-----|
| `--vv-easing-standard` | `ease` | Default for most UI transitions |
| `--vv-easing-decelerate` | `ease-out` | Elements entering the screen (fast in, slow to stop) |
| `--vv-easing-accelerate` | `ease-in` | Elements exiting the screen (slow start, fast out) |
| `--vv-easing-loop` | `ease-in-out` | Looping / ping-pong animations |

---

## Composite Shorthands (L2)

Preferred over writing duration + easing separately:

| Token | Value | Use |
|-------|-------|-----|
| `--vv-motion-micro` | `100ms ease` | Button press, tap highlight |
| `--vv-motion-quick` | `150ms ease` | Border, opacity, icon swap |
| `--vv-motion-standard` | `200ms ease` | Background, color, default state change |
| `--vv-motion-deliberate` | `300ms ease-out` | Layout shift, element appearing |

### Usage

```css
.button {
  transition: background var(--vv-motion-micro),
              transform  var(--vv-motion-micro);
}

.input {
  transition: border-color var(--vv-motion-quick);
}

.bottom-sheet {
  transition: transform var(--vv-motion-deliberate);
}
```

---

## Animation Catalogue

Named animations from the audit:

| Name | Duration | Easing | Used on |
|------|----------|--------|---------|
| `scanLineMove` | `2000ms` | `ease-in-out` | QR scanner line sweeping |
| `qrScan` / `qrScanBounce` | `1800–2000ms` | `ease-in-out` | QR viewfinder bounce |
| `scanOval` | `2000ms` | `linear` | Facial scan orbit |
| `locationPulse` | `2000ms` | `ease-in-out` | Map location ping |
| `stationPulse` | `2000ms` | `ease-in-out` | Station availability ring |
| `cornerPulse` | `2000ms` | `ease-in-out` | QR corner active state |
| `dotPulse` | `1500ms` | `ease-in-out` | Status dot live animation |
| `loaderFill` | `2000ms` | `ease-out` | Progress fill on load |

All looping animations use `--vv-duration-loop` (2000ms) as their base cycle.

---

## Rules

1. **Default to `--vv-motion-standard`** for any state change not explicitly specified.
2. **Never animate layout-affecting properties** (width, height, top, left, margin) unless absolutely necessary — use `transform` and `opacity` instead.
3. **Looping animations must use `ease-in-out`** for smooth ping-pong — `ease` or `linear` creates jarring reversals.
4. **No animation > 300ms for direct feedback.** Longer durations are only for looping ambient animations (scanner, pulse).
5. **Respect `prefers-reduced-motion`.** Wrap all non-essential animations:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## v0.2 Plan

Motion tokens currently have no JSON source file in `tokens/primitive/`. A `tokens/primitive/motion.json` token file is a v0.2 candidate, which would allow Style Dictionary to output:
- TypeScript constants (`motionMicro`, `motionStandard`)
- Android duration resources
- iOS `TimeInterval` constants

---

## Cross-references

- [components/button.md](../components/button.md) — transition on press
- [components/input.md](../components/input.md) — focus transition
- [components/segmented-toggle.md](../components/segmented-toggle.md) — active indicator transition
- [components/qr-viewfinder.md](../components/qr-viewfinder.md) — scan line animation
