# Button

**Name:** Button
**Category:** Action
**Status:** Stable — v0.1
**Story:** `stories/components/button.stories.js`

---

## Overview

**When to use:**
- The single primary action on a screen (e.g. "Start Ride", "Confirm Payment")
- Secondary actions that need to feel substantial but not compete with the primary

**When not to use:**
- Inline text links — use a styled anchor with `--vv-color-text-accent`
- Destructive actions — use a secondary button with warning context
- More than one primary button per screen — Electric Green marks *one* verb

---

## Anatomy

```
┌────────────────────────────────────┐
│  [icon?]  Label text               │   ← button-height (48px)
└────────────────────────────────────┘
│←── padding-h (24px) ──────────────→│
```

Parts:
1. **Container** — pill-shaped, full-radius, height = touch target
2. **Label** — `heading.sm` size (15px/600), centered
3. **Leading icon** (optional) — 20px, same color as label
4. **Focus ring** — 2px Electric Green, 2px offset, visible on keyboard nav

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background (primary) | `--button-primary-bg` → `--vv-color-action-primary` (`#C6FF2D`) |
| Background hover | `--button-primary-bg-hover` → `--vv-color-action-primary-hover` (`#DDFF7A`) |
| Background pressed | `--button-primary-bg-pressed` → `--vv-color-action-primary-pressed` (`#A8DE1A`) |
| Foreground (primary) | `--button-primary-fg` → `--vv-color-action-primary-fg` (`#0F0F0F`) |
| Background (secondary) | `--button-secondary-bg` → `--vv-color-action-secondary` (`#0F0F0F`) |
| Foreground (secondary) | `--button-secondary-fg` → `--vv-color-action-secondary-fg` (`#FFFFFF`) |
| Border radius | `--button-radius` → `--vv-radius-full` (`999px`) |
| Height | `--button-height` → `--vv-space-touch-target` (`48px`) |
| Horizontal padding | `--button-padding-h` → `--vv-space-button-h` (`24px`) |
| Font size | `--button-font-size` → `--vv-text-heading-sm-size` (`15px`) |
| Font weight | `--button-font-weight` → `--vv-text-heading-sm-weight` (`600`) |
| Line height | `--button-line-height` → `--vv-text-heading-sm-line-height` (`20px`) |
| Transition | `--button-transition` → `background/transform var(--vv-motion-micro)` |
| Focus outline | `--button-focus-outline` → `2px solid --vv-color-border-focus` |
| Focus outline offset | `--button-focus-outline-offset` → `2px` |

---

## Variants

| Variant | Background | Foreground | Use |
|---------|-----------|-----------|-----|
| Primary | Electric Green | Volt Black | Main CTA — one per screen |
| Secondary | Volt Black | White | Supporting actions |
| Ghost | Transparent | Volt Black | Tertiary, inline actions |

---

## States

| State | Visual |
|-------|--------|
| **Default** | `--button-primary-bg` fill, `--button-primary-fg` text |
| **Hover** | `--button-primary-bg-hover` fill, slight scale(1.01) |
| **Active / Pressed** | `--button-primary-bg-pressed` fill, scale(0.98) |
| **Focus** | Default fill + `--button-focus-outline` (2px Electric Green) |
| **Disabled** | `--vv-color-text-disabled` fill, `--vv-color-surface-sunken` text, no pointer events |
| **Loading** | Spinner replaces label, background unchanged, no pointer events |

---

## Code Example

```css
.button {
  display:          inline-flex;
  align-items:      center;
  justify-content:  center;
  height:           var(--button-height);
  padding:          0 var(--button-padding-h);
  border-radius:    var(--button-radius);
  border:           none;
  font-size:        var(--button-font-size);
  font-weight:      var(--button-font-weight);
  line-height:      var(--button-line-height);
  cursor:           pointer;
  transition:       var(--button-transition);
}

.button--primary {
  background: var(--button-primary-bg);
  color:      var(--button-primary-fg);
}

.button--primary:hover  { background: var(--button-primary-bg-hover); }
.button--primary:active { background: var(--button-primary-bg-pressed); transform: scale(0.98); }
.button--primary:focus-visible {
  outline:        var(--button-focus-outline);
  outline-offset: var(--button-focus-outline-offset);
}

.button--secondary {
  background: var(--button-secondary-bg);
  color:      var(--button-secondary-fg);
}

.button:disabled {
  background:     var(--vv-color-surface-sunken);
  color:          var(--vv-color-text-disabled);
  cursor:         not-allowed;
  pointer-events: none;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — Electric Green rules
- [foundations/radius.md](../foundations/radius.md) — full-radius pill
- [foundations/motion.md](../foundations/motion.md) — micro transition
- [components/progress-strip.md](./progress-strip.md) — loading state context
