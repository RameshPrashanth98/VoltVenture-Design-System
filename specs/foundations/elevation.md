# Elevation

**Category:** Foundation
**Status:** Stable — v0.1
**Token source:** `tokens/primitive/elevation.json`
**CSS layer:** L1 `--ds-elevation-*`, L2 `--vv-elevation-*`

---

## Overview

VoltVenture uses two parallel elevation systems depending on surface mode:

- **Light surfaces** — shadow-based (drop shadows communicate physical lift)
- **Dark surfaces** — lightness-based (progressively lighter fills replace shadows, which are invisible on dark)

---

## Model A — Light Surface Shadows

| Level | Token | Shadow | Usage |
|-------|-------|--------|-------|
| 0 | `--vv-elevation-flat` | `none` | List rows, inline chips, anything inside a card |
| 1 | `--vv-elevation-raised` | `0 2px 8px 0 rgba(15,15,15,0.06)` | Cards resting on the screen |
| 2 | `--vv-elevation-floating` | `0 8px 24px 0 rgba(15,15,15,0.10)` | Tab bar, FAB, sticky CTAs |
| 3 | `--vv-elevation-overlay` | `0 16px 48px 0 rgba(15,15,15,0.16)` | Bottom sheets, modals, dropped panels |

Shadow color is always Volt Black (`rgba(15,15,15,α)`) — never pure black (`rgba(0,0,0,α)`) — so shadows read naturally against the slightly-warm white backgrounds.

### Hex alpha equivalents

| Opacity | Hex suffix | Used on |
|---------|-----------|---------|
| 0.06 (6%) | `0F` | `elevation.raised` |
| 0.10 (10%) | `1A` | `elevation.floating` |
| 0.16 (16%) | `29` | `elevation.overlay` |

---

## Model B — Dark Surface Lightness Steps

On dark canvases (`--vv-color-surface-inverse`), elevation is expressed by making the surface lighter, not by adding shadows (which are invisible on dark).

| Elevation level | Background color | Token reference |
|-----------------|-----------------|----------------|
| Base (0) | `#0F0F0F` | `--ds-color-grey-950` |
| Raised (1) | `#1A1A1A` | `--ds-color-grey-900` |
| Floating (2) | `#2F2F2F` | `--ds-color-grey-800` |
| Overlay (3) | `#4A4A4A` | `--ds-color-grey-700` |

Dark-mode token layer (v0.2 candidate) will formalize these as `--vv-elevation-dark-*` tokens.

---

## Usage Guidelines

### When to use each level

**Flat (`none`)** — for elements that are visually part of a surface, not floating above it: list row text, inline icon, content inside a card.

**Raised** — the default card level. Any surface that needs to visually separate from the base canvas.

**Floating** — persistent navigation (tab bar), sticky actions, FABs. Used when an element stays fixed above content during scroll.

**Overlay** — transient UI that covers screen content: bottom sheets, modals, contextual menus.

### Rules

1. **Never assign elevation 2 or 3 to static content cards.** Floating/overlay levels are reserved for navigation and transient surfaces.
2. **Do not use shadows on dark surfaces.** Use lightness steps (Model B) instead.
3. **Elevation is additive.** A card at level 1 inside a bottom sheet at level 3 should not re-apply shadow — it inherits the surface context.
4. **One overlay layer at a time.** Do not stack elevation-3 elements unless intentional (e.g. sheet → modal chain).

---

## Code Example

```css
/* Card on light background */
.card {
  background: var(--vv-color-surface-raised);
  box-shadow: var(--vv-elevation-raised);
}

/* Tab bar */
.tab-bar {
  background: var(--vv-color-surface-base);
  box-shadow: var(--vv-elevation-floating);
}

/* Bottom sheet */
.bottom-sheet {
  background: var(--vv-color-surface-base);
  box-shadow: var(--vv-elevation-overlay);
}

/* Dark canvas raised card — lightness model, no shadow */
.dark-card {
  background: #1A1A1A; /* grey.900 — raised on dark */
}
```

---

## Cross-references

- [Color](./color.md) — dark surface lightness model primitives
- [components/card.md](../components/card.md)
- [components/bottom-sheet.md](../components/bottom-sheet.md)
- [components/tab-bar.md](../components/tab-bar.md)
