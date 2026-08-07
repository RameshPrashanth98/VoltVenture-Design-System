# Bottom Sheet

**Name:** Bottom Sheet
**Category:** Overlay / Container
**Status:** Stable — v0.1
**Stories:** `stories/components/bottom-card.stories.js`

---

## Overview

**When to use:**
- Transient UI that slides up from the bottom edge: ride booking, payment selection, location detail
- When content needs to coexist with the map or background screen
- Replacing a full-screen modal when the action is contextual to the current view

**When not to use:**
- Multi-step flows that need a full screen — use a new screen instead
- Content so tall it would cover >75% of the viewport — that signals a new screen is needed
- Persistent navigation — that is the Tab Bar

---

## Anatomy

```
┌──────────────────────────────────┐  ← top-left: 2xl (36px), top-right: 2xl (36px)
│  ────  (drag handle, optional)   │  ← 4px × 32px pill, grey.300
│                                  │
│  [Header]                        │
│  [Content]                       │
│                                  │
│  [Primary CTA]                   │
└──────────────────────────────────┘  ← bottom corners: 0 (flush to screen edge)
          ↑ box-shadow: overlay
```

Parts:
1. **Surface** — white, top-rounded corners only (`2xl 2xl 0 0`)
2. **Drag handle** (optional) — 4 × 32px `grey.300` pill, centered, 12px from top
3. **Header** — title at `heading.md` (17px/600), optional close icon
4. **Content area** — scrollable if needed; padding via `--sheet-padding`
5. **Action zone** — primary CTA pinned above the safe area inset

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--sheet-bg` → `--vv-color-surface-base` (`#FFFFFF`) |
| Border radius | `--sheet-radius` → `36px 36px 0 0` |
| Box shadow | `--sheet-shadow` → `--vv-elevation-overlay` |
| Z-index | `--sheet-z-index` → `--vv-z-drawer` (`4`) |
| Padding | `--sheet-padding` → `--vv-space-card-padding` (`20px`) |

---

## States

| State | Visual |
|-------|--------|
| **Hidden** | `transform: translateY(100%)` — off-screen below |
| **Entering** | Slide up: `transform: translateY(0)`, `transition: transform var(--vv-motion-deliberate)` |
| **Visible** | Full position, backdrop active |
| **Dismissing** | Slide down: `transform: translateY(100%)` |
| **Expanded** | Sheet fills ~90% of viewport height (optional max-height variant) |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `visible` | `boolean` | `false` | Controls mount/animation |
| `onDismiss` | `function` | — | Called on backdrop tap or drag-down gesture |
| `showHandle` | `boolean` | `true` | Shows drag handle pill |
| `snapPoints` | `number[]` | `[50, 90]` | % of viewport height for snap positions |

---

## Code Example

```css
.bottom-sheet {
  position:      fixed;
  bottom:        0;
  left:          0;
  right:         0;
  background:    var(--sheet-bg);
  border-radius: var(--sheet-radius);
  box-shadow:    var(--sheet-shadow);
  z-index:       var(--sheet-z-index);
  padding:       var(--sheet-padding);
  transform:     translateY(100%);
  transition:    transform var(--vv-motion-deliberate);
}

.bottom-sheet--visible {
  transform: translateY(0);
}

/* Backdrop */
.bottom-sheet-backdrop {
  position:   fixed;
  inset:      0;
  background: rgba(15, 15, 15, 0.40);
  z-index:    calc(var(--sheet-z-index) - 1);
}

/* Drag handle */
.bottom-sheet__handle {
  width:         32px;
  height:        4px;
  border-radius: var(--vv-radius-full);
  background:    var(--vv-color-border-subtle);
  margin:        0 auto var(--vv-space-4);
}
```

---

## Cross-references

- [foundations/elevation.md](../foundations/elevation.md) — overlay shadow level
- [foundations/radius.md](../foundations/radius.md) — `--vv-radius-2xl` on top corners
- [foundations/motion.md](../foundations/motion.md) — deliberate enter/exit timing
- [components/button.md](./button.md) — primary CTA in action zone
- [components/card.md](./card.md) — card variant of contained surface
