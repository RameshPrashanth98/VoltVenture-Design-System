# Typography

**Category:** Foundation
**Status:** Stable — v0.1
**Token source:** `tokens/primitive/typography.json`, `tokens/semantic/typography.json`
**CSS layer:** L1 `--ds-font-*`, L2 `--vv-text-*`, `--vv-font-*`

---

## Overview

VoltVenture uses three typefaces serving distinct roles. All type decisions are encoded as composite tokens (size + line-height + weight + tracking). Components consume composite aliases — never raw numbers.

---

## Typefaces

| Token | Family | Use |
|-------|--------|-----|
| `--vv-font-display` | **Manjari** | Headlines, hero statements, large numerals — display only |
| `--vv-font-body` | **Inter** | Everything functional: labels, rows, buttons, captions, data |
| `--vv-font-mono` | **JetBrains Mono** | Code, token names, technical readouts |

---

## Type Scale

14 named styles. Each row shows the full composite.

### Display — Manjari 700

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `display.xl` | 40px | 42px | 700 | 0 | Greetings, hero headlines |
| `display.lg` | 32px | 36px | 700 | 0 | Names, section heroes |
| `display.md` | 28px | 32px | 700 | 0 | Primary booking CTAs |

### Numeric — Inter 700

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `numeric.lg` | 28px | 30px | 700 | −0.02em | Large data values (points, distances) |
| `numeric.md` | 22px | 26px | 700 | −0.02em | Medium data values |

> Numeric styles use tabular-nums (`font-variant-numeric: tabular-nums`) to prevent layout shift as values update.

### Heading — Inter 600

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `heading.lg` | 20px | 26px | 600 | −0.01em | Section headings (Rewards, Trips) |
| `heading.md` | 17px | 24px | 600 | 0 | Screen titles (Settings) |
| `heading.sm` | 15px | 20px | 600 | 0 | Subsection headings (Payment Methods) |

### Body — Inter 400

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `body.lg` | 17px | 26px | 400 | 0 | Primary body copy |
| `body.md` | 15px | 22px | 400 | 0 | Standard body copy |
| `body.sm` | 13px | 18px | 400 | 0 | Secondary / supplemental copy |

### Label — Inter 600/500

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `label.md` | 13px | 16px | 600 | 0 | Tags, status labels, member badges |
| `label.sm` | 11px | 14px | 500 | 0 | Metadata, counts |

### Overline — Inter 500, uppercase

| Style | Size | Line Height | Weight | Tracking | Usage |
|-------|------|-------------|--------|----------|-------|
| `overline` | 10px | 14px | 500 | +0.12em | Section meta labels (e.g. SAFETY STATUS) |

---

## CSS Custom Properties

### Font families
```css
font-family: var(--vv-font-display);  /* Manjari */
font-family: var(--vv-font-body);     /* Inter */
font-family: var(--vv-font-mono);     /* JetBrains Mono */
```

### Composite usage pattern
```css
.heading-lg {
  font-family:    var(--vv-font-body);
  font-size:      var(--vv-text-heading-lg-size);
  line-height:    var(--vv-text-heading-lg-line-height);
  font-weight:    var(--vv-text-heading-lg-weight);
  letter-spacing: var(--ds-letter-spacing-tight);
}

.display-xl {
  font-family:  var(--vv-font-display);
  font-size:    var(--vv-text-display-xl-size);
  line-height:  var(--vv-text-display-xl-line-height);
  font-weight:  var(--vv-text-display-xl-weight);
}

.overline {
  font-family:    var(--vv-font-body);
  font-size:      var(--vv-text-overline-size);
  line-height:    var(--vv-text-overline-line-height);
  font-weight:    var(--vv-text-overline-weight);
  letter-spacing: var(--vv-text-overline-tracking);
  text-transform: uppercase;
}
```

---

## Tracking Rules

| Condition | Value | Applies to |
|-----------|-------|------------|
| Negative tracking | −0.02em | Numeric sizes (tight, dense data) |
| Slight negative tracking | −0.01em | `heading.lg` (20px) |
| Zero tracking | 0em | Display, heading.md/sm, all body and label styles |
| Positive tracking | +0.12em | `overline` (uppercase, uppercase text always needs more space) |

**Rule:** Negative tracking only applies at 22px and above. Never apply negative tracking below that size.

---

## Rules

1. **Sentence case** everywhere except `overline` (uppercase) and proper nouns.
2. **Tabular numerals** (`font-variant-numeric: tabular-nums`) required for all numeric data to prevent layout reflow.
3. **Manjari for display only.** Functional UI text — buttons, labels, rows, inputs — always uses Inter.
4. **Do not create intermediate sizes.** 16px, 18px, 19px, 21px, etc. are not in the scale. Use the nearest defined step.
5. **Never apply `font-weight: 800`** — not part of the type system even though the audit shows it hardcoded in some stories.

---

## Cross-references

- [Color](./color.md) — text color semantic roles
- [components/button.md](../components/button.md) — font-size and weight on CTAs
- [components/input.md](../components/input.md) — input and placeholder typography
