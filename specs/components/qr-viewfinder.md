# QR Viewfinder

**Name:** QR Viewfinder
**Category:** Utility / Scanner
**Status:** Stable — v0.1
**Story:** `stories/components/qr-viewfinder.stories.js`

---

## Overview

**When to use:**
- Scanning a QR code to unlock a bike or scooter
- Any camera-based scanning interaction

**When not to use:**
- As a decorative frame without an active camera feed
- For barcode or document scanning (different aspect ratio requirements)

---

## Anatomy

```
┌──────────────────────────────┐  ← full screen, dark overlay
│                              │
│   ┌──  ──┐                  │  ← viewfinder cutout (rounded square)
│   │      │                  │
│   │  ~~  │  ← scan line     │
│   │      │                  │
│   └──  ──┘                  │  ← corner accents: Electric Green
│                              │
│   [instruction text]         │
└──────────────────────────────┘
```

Parts:
1. **Overlay** — dark scrim covering the full screen except the viewfinder cutout
2. **Viewfinder frame** — square/rectangular cutout with transparent center
3. **Corner accents** — Electric Green L-shaped corners (`--vv-radius-sm` on the corner turns)
4. **Scan line** — Electric Green horizontal bar sweeping vertically
5. **Instruction text** — `body.sm` (13px/400), white, centered below the frame
6. **Flash toggle** (optional) — torch icon, top-right

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--qr-bg` → `--vv-color-surface-inverse` (`#0F0F0F`) |
| Corner color | `--qr-corner-color` → `--vv-color-action-primary` (`#C6FF2D`) |
| Corner radius | `--qr-corner-radius` → `--vv-radius-sm` (`12px`) |
| Z-index | `--qr-z-index` → `--vv-z-overlay` (`3`) |
| Scan duration | `--qr-scan-duration` → `--vv-duration-loop` (`2000ms`) |
| Scan easing | `--qr-scan-easing` → `--vv-easing-loop` (`ease-in-out`) |

Overlay alpha: `rgba(15,15,15,0.87)` — `#0F0F0F` at 87% matches the dark canvas feel without completely blocking the camera feed.

---

## States

| State | Visual |
|-------|--------|
| **Idle** | Static corners, no scan line |
| **Scanning** | Scan line sweeps top→bottom in a loop |
| **Detected** | Corners pulse Electric Green, scan line stops |
| **Error** | Corners flash error color (v0.2 status token), shake animation |
| **Success** | Full green flash, brief scale up, then dismiss |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `scanning` | `boolean` | `true` | Enables the scan line animation |
| `detected` | `boolean` | `false` | Triggers the success pulse state |
| `error` | `boolean` | `false` | Triggers the error shake state |
| `onDetect` | `function` | — | Called with QR string on successful scan |
| `instructionText` | `string` | `'Point at the QR code on your bike'` | Instruction below viewfinder |

---

## Code Example

```css
.qr-overlay {
  position:        fixed;
  inset:           0;
  background:      rgba(15, 15, 15, 0.87);
  display:         flex;
  align-items:     center;
  justify-content: center;
  z-index:         var(--qr-z-index);
}

.qr-frame {
  position:   relative;
  width:      260px;
  height:     260px;
}

/* Transparent cutout via box-shadow punch */
.qr-frame::before {
  content:    '';
  position:   absolute;
  inset:      0;
  box-shadow: 0 0 0 100vmax rgba(15, 15, 15, 0.87);
}

/* Corner accents — L-shaped via border-{top/right}-{left/right}-radius */
.qr-corner {
  position:      absolute;
  width:         28px;
  height:        28px;
  border-color:  var(--qr-corner-color);
  border-style:  solid;
  border-width:  0;
}
.qr-corner--tl {
  top: 0; left: 0;
  border-top-width:    3px;
  border-left-width:   3px;
  border-top-left-radius: var(--qr-corner-radius);
}
.qr-corner--tr {
  top: 0; right: 0;
  border-top-width:     3px;
  border-right-width:   3px;
  border-top-right-radius: var(--qr-corner-radius);
}
.qr-corner--bl {
  bottom: 0; left: 0;
  border-bottom-width:  3px;
  border-left-width:    3px;
  border-bottom-left-radius: var(--qr-corner-radius);
}
.qr-corner--br {
  bottom: 0; right: 0;
  border-bottom-width:  3px;
  border-right-width:   3px;
  border-bottom-right-radius: var(--qr-corner-radius);
}

/* Scan line */
@keyframes scanLineMove {
  0%   { top: 0; }
  100% { top: calc(100% - 2px); }
}

.qr-scan-line {
  position:   absolute;
  left:       0;
  right:      0;
  height:     2px;
  background: var(--qr-corner-color);
  animation:  scanLineMove var(--qr-scan-duration) var(--qr-scan-easing) infinite alternate;
}

/* Corner pulse on detect */
@keyframes cornerPulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.4; }
}
.qr-frame--detected .qr-corner {
  animation: cornerPulse var(--qr-scan-duration) var(--qr-scan-easing) infinite;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — Electric Green corner accents
- [foundations/motion.md](../foundations/motion.md) — scan line and pulse animations
- [foundations/radius.md](../foundations/radius.md) — `--vv-radius-sm` on corners
