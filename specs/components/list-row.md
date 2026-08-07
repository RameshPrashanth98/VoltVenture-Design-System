# List Row

**Name:** List Row
**Category:** Data Display
**Status:** Stable — v0.1
**Stories:** `stories/components/settings-row.stories.js`, `stories/components/faq-row.stories.js`, `stories/components/payment-card-row.stories.js`

---

## Overview

**When to use:**
- Repeating content items in a vertical list: settings, payment methods, FAQ entries, notification preferences
- Any scannable, tappable item that leads to a detail view or toggles a value

**When not to use:**
- Grouped content that benefits from a card container — wrap rows in a `Card` with `--card-padding: 0`
- Tabular data with multiple aligned columns — use a data table pattern
- Navigation items — use the Tab Bar for primary nav

---

## Anatomy

```
┌─────────────────────────────────────────────────────┐  ← height: min 64px
│  [leading icon/avatar]  Primary text                │
│                         Secondary / meta text  [›]  │
│                                                     │
└─────────────────────────────────────────────────────┘
│←── padding-h: 16px ───────────────────────────────→│
                       ↓ 1px divider (bottom, optional)
```

Parts:
1. **Container** — min-height 64px, horizontal screen-margin padding
2. **Leading area** (optional) — icon (24px), avatar, or category icon
3. **Label** — primary text at `body.md` (15px/400) or `heading.sm` (15px/600)
4. **Sublabel** (optional) — secondary text at `body.sm` (13px/400), `--list-row-text-meta`
5. **Trailing area** (optional) — disclosure chevron, toggle switch, badge, or value
6. **Divider** — 1px `--list-row-divider` on bottom edge (omit on last row)

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--list-row-bg` → `--vv-color-surface-base` (`#FFFFFF`) |
| Background (hover) | `--list-row-bg-hover` → `--vv-color-surface-sunken` (`#F5F5F5`) |
| Divider color | `--list-row-divider` → `--vv-color-border-subtle` (`#EBEBEB`) |
| Min height | `--list-row-height` → `--vv-space-11` (`64px`) |
| Horizontal padding | `--list-row-padding-h` → `--vv-space-screen-margin` (`16px`) |
| Border radius (grouped) | `--list-row-radius` → `--vv-radius-md` (`16px`) |
| Text primary | `--list-row-text-primary` → `--vv-color-text-primary` |
| Text secondary | `--list-row-text-meta` → `--vv-color-text-secondary` |

---

## States

| State | Background | Text |
|-------|-----------|------|
| **Default** | `--list-row-bg` | `--list-row-text-primary` |
| **Hover** | `--list-row-bg-hover` | unchanged |
| **Pressed** | `--vv-color-border-subtle` | unchanged |
| **Disabled** | `--list-row-bg` | `--vv-color-text-disabled` |
| **Destructive** | `--list-row-bg` | error color (v0.2) |

---

## Code Example

```css
.list-row {
  display:         flex;
  align-items:     center;
  min-height:      var(--list-row-height);
  padding:         0 var(--list-row-padding-h);
  background:      var(--list-row-bg);
  border-bottom:   1px solid var(--list-row-divider);
  gap:             var(--vv-space-4);
  cursor:          pointer;
  transition:      background var(--vv-motion-micro);
}

.list-row:hover   { background: var(--list-row-bg-hover); }
.list-row:active  { background: var(--vv-color-border-subtle); }

.list-row__label {
  font-size:   var(--vv-text-body-md-size);
  font-weight: var(--vv-text-body-md-weight);
  color:       var(--list-row-text-primary);
  flex: 1;
}

.list-row__meta {
  font-size: var(--vv-text-body-sm-size);
  color:     var(--list-row-text-meta);
}

/* Grouped style — first/last rows get radius */
.list-group .list-row:first-child { border-radius: var(--list-row-radius) var(--list-row-radius) 0 0; }
.list-group .list-row:last-child  {
  border-radius: 0 0 var(--list-row-radius) var(--list-row-radius);
  border-bottom: none;
}
```

---

## Cross-references

- [components/card.md](./card.md) — wrap list groups in a card container
- [components/settings-row.md](./settings-row.md) — settings-specific row variant
- [components/payment-card-row.md](./payment-card-row.md) — payment row variant
- [foundations/spacing.md](../foundations/spacing.md) — touch target floor (48px min)
