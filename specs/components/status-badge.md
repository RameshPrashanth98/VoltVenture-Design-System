# Status Badge

**Name:** Status Badge / Status Dot
**Category:** Feedback
**Status:** Stable — v0.1
**Stories:** `stories/components/status-bar.stories.js`

---

## Overview

**When to use:**
- Communicating a real-time system or entity state: Live, Available, Charging, Offline
- Numeric notification count on a tab or icon
- Category label inside a card (e.g. "VIP", "New")

**When not to use:**
- As a sole state indicator — always pair a colored dot with a text label (accessibility requirement)
- Error or warning states — reserved for status color tokens (v0.2)
- Progress — use the Progress Strip component

---

## Anatomy

### Status Dot
```
● LIVE   ← dot (8px) + label (overline, uppercase)
```

### Badge Chip
```
┌─────────┐
│  Label  │  ← pill shape (full-radius), colored bg
└─────────┘
```

### Numeric Badge
```
  ┌───┐
  │ 3 │  ← small circle, overlaid on icon/tab
  └───┘
```

Parts:
1. **Dot** — 8px circle, `--status-live-color` fill
2. **Label** — `overline` style (10px/500, uppercase, +0.12em tracking)
3. **Chip container** (chip variant) — pill-shaped, colored background, horizontal padding
4. **Number** (numeric variant) — `label.sm` (11px/500), white on colored bg

---

## Tokens Used

| Property | Token |
|----------|-------|
| Dot color | `--status-live-color` → `--vv-color-status-live` (`#C6FF2D`) |
| Dot size | `--status-live-size` → `--vv-space-3` (`8px`) |
| Dot radius | `--status-live-radius` → `--vv-radius-full` (`999px`) |
| Badge radius | `--badge-radius` → `--vv-radius-xs` (`8px`) |
| Badge padding-h | `--badge-padding-h` → `--vv-space-2` (`4px`) |
| Badge font size | `--badge-font-size` → `--vv-text-label-sm-size` (`11px`) |
| Badge font weight | `--badge-font-weight` → `--vv-text-label-sm-weight` (`500`) |

---

## Variants

| Variant | Shape | Background | Text |
|---------|-------|-----------|------|
| Live dot | Circle 8px | `--vv-color-status-live` | — |
| Live label | Dot + text | — | `--vv-color-text-primary` (label beside dot) |
| Category chip | Pill | `--vv-color-surface-sunken` | `--vv-color-text-primary` |
| Accent chip | Pill | `--vv-color-action-primary` | `--vv-color-action-primary-fg` |
| Numeric (count) | Circle | `#FF3B30` (v0.2 error token) | White |

---

## States

| State | Visual |
|-------|--------|
| **Live** | Solid Electric Green dot, optional pulse animation |
| **Offline** | `--vv-color-text-disabled` dot |
| **Count = 0** | Hidden |
| **Count > 99** | Display "99+" |

---

## Code Example

```css
/* Status dot */
.status-dot {
  width:         var(--status-live-size);
  height:        var(--status-live-size);
  border-radius: var(--status-live-radius);
  background:    var(--status-live-color);
  flex-shrink:   0;
}

/* Dot with pulse */
@keyframes dotPulse {
  0%, 100% { opacity: 1; transform: scale(1); }
  50%      { opacity: 0.5; transform: scale(1.3); }
}
.status-dot--live {
  animation: dotPulse var(--vv-duration-loop) var(--vv-easing-loop) infinite;
}

/* Badge chip */
.badge {
  display:         inline-flex;
  align-items:     center;
  padding:         var(--vv-space-1) var(--badge-padding-h);
  border-radius:   var(--badge-radius);
  font-size:       var(--badge-font-size);
  font-weight:     var(--badge-font-weight);
  line-height:     var(--vv-text-label-sm-line-height);
  background:      var(--vv-color-surface-sunken);
  color:           var(--vv-color-text-primary);
}

.badge--accent {
  background: var(--vv-color-action-primary);
  color:      var(--vv-color-action-primary-fg);
}

/* Numeric badge (overlaid) */
.badge--numeric {
  position:      absolute;
  top:           -4px;
  right:         -4px;
  min-width:     16px;
  height:        16px;
  border-radius: var(--vv-radius-full);
  background:    #FF3B30; /* TODO: replace with --vv-color-status-error in v0.2 */
  color:         #FFFFFF;
  font-size:     10px;
  font-weight:   600;
  text-align:    center;
  line-height:   16px;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — Electric Green status rule
- [foundations/motion.md](../foundations/motion.md) — dot pulse animation
- [components/tab-bar.md](./tab-bar.md) — numeric badge on navigation
- [components/map-pin.md](./map-pin.md) — cluster count badge
