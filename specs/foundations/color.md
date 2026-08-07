# Color

**Category:** Foundation
**Status:** Stable — v0.1
**Token source:** `tokens/primitive/color.json`, `tokens/semantic/color.json`
**CSS layer:** L1 `--ds-color-*`, L2 `--vv-color-*`

---

## Overview

VoltVenture uses a two-tier color system: **primitive** ramps that hold raw hex values, and **semantic** roles that map primitives to intent. Components always consume semantic roles — never primitives directly.

**Core brand palette:**
- **Volt Black** `#0F0F0F` — canvas and foreground
- **Electric Green** `#C6FF2D` — single active verb per screen; always a background, never text
- **Pure White** `#FFFFFF` — primary light surface

---

## Primitive Ramps

### Grey

| Step | Value | Usage |
|------|-------|-------|
| `grey.050` | `#FAFAFA` | List row fill, resting state |
| `grey.100` | `#F5F5F5` | Settings surface, sunken inputs |
| `grey.200` | `#EBEBEB` | Dividers, inactive nav circles |
| `grey.300` | `#C9C9C9` | Disabled text and decorative elements |
| `grey.500` | `#808080` | Secondary text (AA large text only) |
| `grey.700` | `#4A4A4A` | Dark-surface borders, secondary elements |
| `grey.800` | `#2F2F2F` | Progress tracks, elevated dark surfaces |
| `grey.900` | `#1A1A1A` | Raised dark surface (elevation model B) |
| `grey.950` | `#0F0F0F` | Volt Black alias |

### Green

| Step | Value | Usage |
|------|-------|-------|
| `green.100` | `#F4FFD9` | Tint backgrounds, subtle success wash |
| `green.300` | `#DDFF7A` | Hover / focus wash on interactive elements |
| `green.500` | `#C6FF2D` | **Electric Green** — CTA background, focus ring, live status |
| `green.600` | `#A8DE1A` | Pressed state on primary actions |
| `green.700` | `#7D9220` | Only accessible green for text on white (4.6:1, AA) |

---

## Semantic Roles

### Surface

| Token | Primitive | Value | Usage |
|-------|-----------|-------|-------|
| `--vv-color-surface-base` | `color.white` | `#FFFFFF` | Default screen background |
| `--vv-color-surface-sunken` | `color.grey.100` | `#F5F5F5` | Input fields, content wells, below base |
| `--vv-color-surface-raised` | `color.white` | `#FFFFFF` | Cards — semantically elevated even when hex matches base |
| `--vv-color-surface-inverse` | `color.grey.950` | `#0F0F0F` | Dark surfaces: tooltips, toasts |

### Text

| Token | Primitive | Value | Contrast on base | WCAG |
|-------|-----------|-------|-----------------|------|
| `--vv-color-text-primary` | `grey.950` | `#0F0F0F` | 19.6:1 | AAA |
| `--vv-color-text-secondary` | `grey.500` | `#808080` | 3.9:1 | AA (large text only) |
| `--vv-color-text-disabled` | `grey.300` | `#C9C9C9` | 1.6:1 | Below AA by design |
| `--vv-color-text-accent` | `green.700` | `#7D9220` | 4.6:1 | AA |
| `--vv-color-text-on-inverse` | `color.white` | `#FFFFFF` | 19.6:1 on `#0F0F0F` | AAA |

### Action

| Token | Value | Usage |
|-------|-------|-------|
| `--vv-color-action-primary` | `#C6FF2D` | CTA background — **never use as text** |
| `--vv-color-action-primary-fg` | `#0F0F0F` | Text/icon on green CTA (15.4:1 — AAA) |
| `--vv-color-action-primary-hover` | `#DDFF7A` | Hover state on primary buttons |
| `--vv-color-action-primary-pressed` | `#A8DE1A` | Pressed state on primary buttons |
| `--vv-color-action-secondary` | `#0F0F0F` | Secondary CTA background |
| `--vv-color-action-secondary-fg` | `#FFFFFF` | Text/icon on secondary CTA |

### Border

| Token | Value | Usage |
|-------|-------|-------|
| `--vv-color-border-subtle` | `#EBEBEB` | Row separators, section edges |
| `--vv-color-border-strong` | `#0F0F0F` | Selected states, focused inputs |
| `--vv-color-border-focus` | `#C6FF2D` | Focus ring — always Electric Green |

### Status

| Token | Value | Usage |
|-------|-------|-------|
| `--vv-color-status-live` | `#C6FF2D` | Live indicator dot or badge |

---

## Accessibility Rules

1. **Electric Green is a background, never foreground.** `green.500` (#C6FF2D) achieves only 1.36:1 on white — fails every WCAG threshold as text. Always pair with `action.primary.fg` (#0F0F0F).
2. **Accent text must use `green.700`.** `green.700` (#7D9220) achieves 4.6:1 on white and passes AA. `green.500` does not.
3. **Secondary text (`grey.500`) passes AA for large text only** (≥ 18px regular or ≥ 14px bold). Do not use for fine print or captions.
4. **Disabled text is intentionally inaccessible.** `grey.300` is below AA threshold by design — disabled states communicate unavailability, not content.

---

## Usage Rules

- One Electric Green element per screen — it marks the single primary action.
- Dark surfaces use **surface lightness steps** for elevation, not shadows: `grey.950` → `grey.900` → `grey.800` → `grey.700`.
- Never hardcode hex values in components. Always reference a semantic `--vv-color-*` token.

---

## Cross-references

- [Elevation](./elevation.md) — dark-surface lightness model
- [tokens/token-reference.md](../tokens/token-reference.md) — full variable map
