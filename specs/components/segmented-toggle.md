# Segmented Toggle

**Name:** Segmented Toggle
**Category:** Form / Selection
**Status:** Stable — v0.1
**Story:** `stories/components/segmented-toggle.stories.js`

---

## Overview

**When to use:**
- Switching between 2–4 mutually exclusive views or filter modes on a single screen
- "Passenger / Driver", "Map / List", "Week / Month / Year"
- A compact alternative to full tab navigation within a section

**When not to use:**
- More than 4 options — use a dropdown or full tabs
- Primary screen navigation — use Tab Bar
- On/off toggles — use a Switch component

---

## Anatomy

```
┌──────────────────────────────────┐  ← outer: bg surface-sunken, 8px radius
│ ┌──────────┐                     │
│ │  Option  │   Option   Option   │  ← active: white + raised shadow
│ └──────────┘                     │
└──────────────────────────────────┘
```

Parts:
1. **Track** — full-width sunken container, `--toggle-bg`, `xs` radius, 2px inner padding
2. **Segment items** — equally wide, `label.md` (13px/600) text
3. **Active indicator** — white raised pill that slides under the active label

---

## Tokens Used

| Property | Token |
|----------|-------|
| Track background | `--toggle-bg` → `--vv-color-surface-sunken` (`#F5F5F5`) |
| Active background | `--toggle-active-bg` → `--vv-color-surface-raised` (`#FFFFFF`) |
| Active shadow | `--toggle-active-shadow` → `--vv-elevation-raised` |
| Track radius | `--toggle-radius` → `--vv-radius-xs` (`8px`) |
| Inner padding | `--toggle-padding` → `--vv-space-1` (`2px`) |
| Label font size | `--toggle-font-size` → `--vv-text-label-md-size` (`13px`) |
| Label font weight | `--toggle-font-weight` → `--vv-text-label-md-weight` (`600`) |
| Transition | `--toggle-transition` → `background/box-shadow var(--vv-motion-quick)` |

---

## States

| State | Track | Active segment | Inactive segments |
|-------|-------|----------------|------------------|
| **Default** | `--toggle-bg` | White + shadow | Transparent |
| **Hover (inactive)** | — | — | Slight darken (opacity 0.85) |
| **Pressed** | — | scale(0.97) | — |
| **Disabled** | `--toggle-bg` opacity 0.5 | White opacity 0.5 | Transparent |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `options` | `{value, label}[]` | — | Available segments |
| `value` | `string` | — | Currently selected value |
| `onChange` | `function` | — | Called with new value |
| `disabled` | `boolean` | `false` | Disables all interaction |

---

## Code Example

```css
.segmented-toggle {
  display:       flex;
  background:    var(--toggle-bg);
  border-radius: var(--toggle-radius);
  padding:       var(--toggle-padding);
  gap:           var(--toggle-padding);
}

.segmented-toggle__option {
  flex:            1;
  display:         flex;
  align-items:     center;
  justify-content: center;
  height:          36px;
  border-radius:   calc(var(--toggle-radius) - var(--toggle-padding));
  font-size:       var(--toggle-font-size);
  font-weight:     var(--toggle-font-weight);
  color:           var(--vv-color-text-secondary);
  cursor:          pointer;
  transition:      var(--toggle-transition);
}

.segmented-toggle__option--active {
  background:  var(--toggle-active-bg);
  box-shadow:  var(--toggle-active-shadow);
  color:       var(--vv-color-text-primary);
}

.segmented-toggle__option:not(.segmented-toggle__option--active):hover {
  color: var(--vv-color-text-primary);
}
```

---

## Cross-references

- [foundations/elevation.md](../foundations/elevation.md) — raised shadow on active segment
- [foundations/motion.md](../foundations/motion.md) — quick transition
- [components/tab-bar.md](./tab-bar.md) — for primary-level navigation (not inline)
- [components/input.md](./input.md) — alternative for value selection with search
