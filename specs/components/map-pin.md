# Map Pin

**Name:** Map Pin
**Category:** Map / Overlay
**Status:** Stable — v0.1
**Story:** `stories/components/map-pin.stories.js`

---

## Overview

**When to use:**
- Marking a bike, scooter, hub, or station location on the map canvas
- The user's current location indicator
- Drop-point / end-ride pin

**When not to use:**
- Informational markers without interaction — use a static icon instead
- More than one "primary" pin type per screen — the Electric Green pin is reserved for the featured/selected item

---

## Anatomy

```
     ╭──╮
    │    │  ← circular body (full radius)
     ╰──╯
      ▼      ← tail / drop shadow
```

Parts:
1. **Body** — circular, Electric Green fill, Volt Black icon inside
2. **Icon** — 20px, always `--map-pin-fg` (Volt Black)
3. **Tail** (optional) — teardrop or pointer indicating exact location
4. **Shadow** — floating elevation to lift above the map surface
5. **Pulse ring** (optional) — animated ring for live / selected state

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--map-pin-bg` → `--vv-color-action-primary` (`#C6FF2D`) |
| Foreground (icon) | `--map-pin-fg` → `--vv-color-action-primary-fg` (`#0F0F0F`) |
| Box shadow | `--map-pin-shadow` → `--vv-elevation-floating` |
| Border radius | `--map-pin-radius` → `--vv-radius-full` (`999px`) |
| Z-index | `--map-pin-z-index` → `--vv-z-overlay` (`3`) |

Pulse animation: `--vv-duration-loop` (2000ms) + `--vv-easing-loop` (`ease-in-out`)

---

## Variants

| Variant | Color | Use |
|---------|-------|-----|
| Primary (Electric) | `#C6FF2D` bg / `#0F0F0F` icon | Selected bike, featured hub |
| Inactive | `#0F0F0F` bg / `#FFFFFF` icon | Unselected stations |
| User location | `#FFFFFF` bg / `#0F0F0F` icon + blue pulse | Current position |
| Cluster | `#2F2F2F` bg / `#FFFFFF` count | Multiple pins grouped |

---

## States

| State | Visual |
|-------|--------|
| **Default** | Static, `--map-pin-shadow` |
| **Selected** | Enlarged (scale 1.15), stronger shadow (`--vv-elevation-overlay`) |
| **Live / Active** | Pulse ring animation on the body |
| **Pressed** | scale(0.92), `--vv-motion-micro` |

---

## Code Example

```css
.map-pin {
  position:      absolute;
  display:       flex;
  align-items:   center;
  justify-content: center;
  width:         40px;
  height:        40px;
  border-radius: var(--map-pin-radius);
  background:    var(--map-pin-bg);
  color:         var(--map-pin-fg);
  box-shadow:    var(--map-pin-shadow);
  z-index:       var(--map-pin-z-index);
  cursor:        pointer;
  transition:    transform var(--vv-motion-micro),
                 box-shadow var(--vv-motion-micro);
}

.map-pin--selected {
  transform:  scale(1.15);
  box-shadow: var(--vv-elevation-overlay);
}

.map-pin:active { transform: scale(0.92); }

/* Pulse ring for live state */
@keyframes locationPulse {
  0%   { transform: scale(1);   opacity: 0.6; }
  100% { transform: scale(2.5); opacity: 0; }
}

.map-pin__pulse {
  position:      absolute;
  inset:         0;
  border-radius: var(--map-pin-radius);
  background:    var(--map-pin-bg);
  animation:     locationPulse var(--vv-duration-loop) var(--vv-easing-loop) infinite;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — Electric Green rules
- [foundations/elevation.md](../foundations/elevation.md) — floating shadow
- [foundations/motion.md](../foundations/motion.md) — pulse animation
- [components/status-badge.md](./status-badge.md) — count badge on cluster pin
