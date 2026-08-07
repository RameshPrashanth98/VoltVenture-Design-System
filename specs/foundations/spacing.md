# Spacing

**Category:** Foundation
**Status:** Stable — v0.1
**Token source:** `tokens/primitive/spacing.json`
**CSS layer:** L1 `--ds-space-*`, L2 `--vv-space-*`

---

## Overview

All spacing in VoltVenture is built on a **4px base grid**. Every padding, margin, gap, and dimension value must be a multiple of 4. Spacing tokens encode the canonical steps of that grid so components never guess.

---

## Scale

| Step | CSS (L2) | Value | Description |
|------|----------|-------|-------------|
| 050 | `--vv-space-1` | `2px` | Minimum unit — icon gaps, fine-grain inline spacing |
| 100 | `--vv-space-2` | `4px` | Label-to-value stacked, badge padding |
| 200 | `--vv-space-3` | `8px` | Icon-to-label gap |
| 300 | `--vv-space-4` | `12px` | Gap between sibling cards |
| 400 | `--vv-space-5` | `16px` | Screen horizontal margin, list row vertical padding |
| 500 | `--vv-space-6` | `20px` | Card internal padding, above-tab-bar clearance |
| 600 | `--vv-space-7` | `24px` | Button horizontal padding |
| 800 | `--vv-space-8` | `32px` | Gap between page sections |
| 1000 | `--vv-space-9` | `40px` | Large section spacing |
| 1200 | `--vv-space-10` | `48px` | Minimum touch target dimension |
| 1600 | `--vv-space-11` | `64px` | Minimum two-line list row height |

---

## Named Aliases

Prefer named aliases over numeric steps when the intent is clear:

| Alias | Value | Intent |
|-------|-------|--------|
| `--vv-space-screen-margin` | `16px` | Horizontal padding applied to every full-width screen edge |
| `--vv-space-card-padding` | `20px` | Internal padding for all card surfaces |
| `--vv-space-button-h` | `24px` | Horizontal padding inside buttons |
| `--vv-space-touch-target` | `48px` | Minimum interactive target size (iOS 44pt / Android 48dp) |
| `--vv-space-section-gap` | `32px` | Vertical gap between major page sections |

---

## Rules

1. **Every value is a multiple of 4.** No `5px`, `7px`, `13px`, or other off-grid values.
2. **Touch targets never go below 48px** on either axis. Use `--vv-space-touch-target`.
3. **Screen margins are always `--vv-space-screen-margin` (16px).** Do not vary this per-screen.
4. **Avoid mixing adjacent spacing steps.** Use every-other-step (e.g. 8→16, not 8→12→16) unless the design explicitly requires fine-grain control.

---

## When to Use Which Step

| Step | Typical use |
|------|------------|
| 2–4px | Internal icon gaps, badge padding, hairline offsets |
| 8px | Icon-to-label gaps, chip internal spacing |
| 12px | Gap between a pair of cards, tag group spacing |
| 16px | Screen margin, list row padding, standard gap |
| 20px | Card content padding, modal inner padding |
| 24px | Button horizontal padding, dialog action area |
| 32px | Between form sections, between card groups |
| 40px | Large whitespace between hero and content |
| 48px | Touch target floor, section header height |
| 64px | Two-line list row height minimum |

---

## What Not to Do

- ❌ `padding: 10px` — not on the 4px grid
- ❌ `margin: 15px` — not on the 4px grid
- ❌ `gap: 6px` — use 8px (`--vv-space-3`) instead
- ❌ Hardcoding any pixel value — use a `--vv-space-*` token

---

## Cross-references

- [Grid](./grid.md) — screen columns and content width
- [tokens/token-reference.md](../tokens/token-reference.md) — full variable map
