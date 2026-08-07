# Card

**Name:** Card
**Category:** Container
**Status:** Stable — v0.1
**Stories:** `stories/components/hub-card.stories.js`, `stories/components/ride-summary-card.stories.js`, `stories/components/station-info-card.stories.js`, `stories/components/route-card.stories.js`

---

## Overview

**When to use:**
- Grouping related information that needs to visually separate from the canvas
- Hub info, ride summaries, station details, route options
- Any content surface that floats above the base background

**When not to use:**
- Inside another card (avoid nesting elevation)
- As a full-screen background — that is the canvas (`--vv-color-surface-base`)
- When content doesn't benefit from grouping (prefer a flat list row)

---

## Anatomy

```
┌─────────────────────────────────┐  ← border-radius: lg (20px)
│  [Header / title area]          │
│  ─────────────────────────────  │
│  [Content rows / body]          │
│                                 │
│  [Footer / CTA area?]           │
└─────────────────────────────────┘
   ↑ box-shadow: elevation-raised
```

Parts:
1. **Surface** — raised background, drop shadow, rounded corners
2. **Header** (optional) — title, subtitle, or icon row
3. **Body** — primary content; padding inside surface
4. **Footer** (optional) — actions or meta information
5. **Border** (optional) — 1px subtle border for cards on `surface-raised` when shadow is insufficient

---

## Variants

| Variant | Background | Shadow | Use |
|---------|-----------|--------|-----|
| Default | `--card-bg` (white) | `--card-shadow` (raised) | Standard content card |
| Inverse | `--card-bg-inverse` (black) | none (use lightness) | Dark stat blocks, feature hero cards |
| Outlined | `--card-bg` + border | none | Cards requiring crisp edge without shadow |

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--card-bg` → `--vv-color-surface-raised` (`#FFFFFF`) |
| Background (inverse) | `--card-bg-inverse` → `--vv-color-surface-inverse` (`#0F0F0F`) |
| Border radius | `--card-radius` → `--vv-radius-lg` (`20px`) |
| Padding | `--card-padding` → `--vv-space-card-padding` (`20px`) |
| Box shadow | `--card-shadow` → `--vv-elevation-raised` |
| Border color | `--card-border-color` → `--vv-color-border-subtle` (`#EBEBEB`) |
| Border width | `--card-border-width` → `1px` |
| Text primary | `--card-text-primary` → `--vv-color-text-primary` |
| Text secondary | `--card-text-secondary` → `--vv-color-text-secondary` |

---

## States

| State | Visual |
|-------|--------|
| **Default** | White surface, raised shadow |
| **Hover** (interactive cards) | `--vv-elevation-floating` shadow, slight upward translate |
| **Pressed** (interactive cards) | Shadow returns to `--vv-elevation-raised`, slight scale-down |
| **Selected** | `--card-border-color` → `--vv-color-border-strong` (1.5px Volt Black border) |
| **Disabled** | Reduced opacity (0.5), no pointer events |

---

## Code Example

```css
.card {
  background:    var(--card-bg);
  border-radius: var(--card-radius);
  padding:       var(--card-padding);
  box-shadow:    var(--card-shadow);
}

/* Outlined variant */
.card--outlined {
  background:    var(--card-bg);
  border:        var(--card-border-width) solid var(--card-border-color);
  border-radius: var(--card-radius);
  padding:       var(--card-padding);
  box-shadow:    none;
}

/* Inverse / dark variant */
.card--inverse {
  background:    var(--card-bg-inverse);
  border-radius: var(--card-radius);
  padding:       var(--card-padding);
  color:         var(--vv-color-text-on-inverse);
}

/* Interactive hover */
.card--interactive {
  cursor:     pointer;
  transition: box-shadow var(--vv-motion-standard),
              transform  var(--vv-motion-standard);
}
.card--interactive:hover {
  box-shadow: var(--vv-elevation-floating);
  transform:  translateY(-2px);
}
```

---

## Cross-references

- [foundations/elevation.md](../foundations/elevation.md) — shadow levels and dark lightness model
- [foundations/radius.md](../foundations/radius.md) — `--vv-radius-lg` default
- [components/bottom-sheet.md](./bottom-sheet.md) — fullwidth card variant
- [components/list-row.md](./list-row.md) — flat content rows inside a card
