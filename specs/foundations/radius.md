# Border Radius

**Category:** Foundation
**Status:** Stable — v0.1
**Token source:** `tokens/primitive/radius.json`
**CSS layer:** L1 `--ds-radius-*`, L2 `--vv-radius-*`

---

## Overview

**Nothing in VoltVenture has a square corner.** There is no `radius.none` token. The minimum corner radius is `xs` (8px). This is a hard brand constraint encoded in the token system — omitting it must be treated as a bug.

---

## Scale

| Token | Value | Typical use |
|-------|-------|------------|
| `--vv-radius-xs` | `8px` | Badges, small chips, progress tracks |
| `--vv-radius-sm` | `12px` | Inline tags, thumbnails, inputs, QR viewfinder corners |
| `--vv-radius-md` | `16px` | List rows, secondary cards |
| `--vv-radius-lg` | `20px` | Standard content card (the default "card" radius) |
| `--vv-radius-xl` | `28px` | Feature cards, stat blocks, map containers |
| `--vv-radius-2xl` | `36px` | Bottom sheets, full-width hero surfaces |
| `--vv-radius-full` | `999px` | Buttons, pills, avatars, tab-bar circles, status dots |

### App icon only

| Token | Value | Usage |
|-------|-------|-------|
| `--ds-radius-icon` | `22.37%` | iOS continuous corner mask (squircle). Proportional — multiply by container size. **Do not use as an absolute dp value.** |

---

## Usage Guidelines

### Choosing the right step

- **Pill / circular** anything → `--vv-radius-full`
- **Buttons** (all sizes) → `--vv-radius-full`
- **Bottom sheets** → `--vv-radius-2xl` on top corners only (`border-radius: var(--vv-radius-2xl) var(--vv-radius-2xl) 0 0`)
- **Feature / hero cards** → `--vv-radius-xl`
- **Standard cards** → `--vv-radius-lg`
- **List rows / settings rows** → `--vv-radius-md`
- **Inputs, tags, chips** → `--vv-radius-sm`
- **Badges, dots, progress bars** → `--vv-radius-xs`

### Audit findings

The audit found off-scale values in stories: `1px`, `2px`, `3px`, `4px`, `5px`, `6px`, `10px`, `14px`, `34px`, `38px`, `40px`, `44px`. These should be migrated to the nearest token:

| Hardcoded | Replace with |
|-----------|-------------|
| `1–6px` | `--vv-radius-xs` (8px) |
| `10px` | `--vv-radius-xs` (8px) |
| `14px` | `--vv-radius-sm` (12px) |
| `34–38px` | `--vv-radius-xl` (28px) or `--vv-radius-2xl` (36px) |
| `40–44px` | `--vv-radius-2xl` (36px) or `--vv-radius-full` |

---

## Rules

1. **Minimum is `--vv-radius-xs` (8px).** Zero radius is a bug.
2. **`border-radius: 0`** — not allowed anywhere.
3. **`border-radius: var(--vv-radius-full)`** for all pill/circular shapes — use 999px not 50% (50% distorts non-square elements).
4. **Bottom sheets use top-only radius:** `border-radius: var(--vv-radius-2xl) var(--vv-radius-2xl) 0 0`.
5. Skip steps rather than interpolate — e.g. jump from `lg` to `2xl`, not from `lg` to `xl` to `2xl` within the same component.

---

## Code Example

```css
/* Card */
.card { border-radius: var(--vv-radius-lg); }

/* Button */
.button { border-radius: var(--vv-radius-full); }

/* Badge */
.badge { border-radius: var(--vv-radius-xs); }

/* Bottom sheet */
.bottom-sheet {
  border-radius: var(--vv-radius-2xl) var(--vv-radius-2xl) 0 0;
}
```

---

## Cross-references

- [components/button.md](../components/button.md)
- [components/card.md](../components/card.md)
- [components/bottom-sheet.md](../components/bottom-sheet.md)
- [components/input.md](../components/input.md)
