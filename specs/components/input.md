# Input

**Name:** Input (Text Field)
**Category:** Form
**Status:** Stable — v0.1
**Stories:** `stories/components/phone-input.stories.js`

---

## Overview

**When to use:**
- Single-line text entry: phone number, OTP, search, name, email
- Any user-entered value that must be submitted or acted upon

**When not to use:**
- Multi-line text (use a `Textarea` variant with the same token set)
- Selecting from a fixed list (use a `Select` or `SegmentedToggle`)
- A value the user cannot change (use a display row instead)

---

## Anatomy

```
┌─────────────────────────────────────┐  ← height: 48px, radius: sm (12px)
│  [leading icon?]  Placeholder...    │  ← bg: surface-sunken
└─────────────────────────────────────┘
   Label (above, optional)
   Helper / error text (below, optional)
```

Parts:
1. **Container** — sunken background, 1px subtle border, 12px radius
2. **Label** (optional, above) — `label.md` (13px/600), `--vv-color-text-primary`
3. **Leading icon** (optional) — 20px, `--vv-color-text-secondary`
4. **Placeholder text** — `body.md` (15px/400), `--vv-color-text-disabled`
5. **Input text** — `body.md` (15px/400), `--vv-color-text-primary`
6. **Trailing icon / clear** (optional) — 20px action icon
7. **Helper text** (below, optional) — `body.sm` (13px/400), `--vv-color-text-secondary`
8. **Error text** (below, replaces helper) — `body.sm` (13px/400), error color (v0.2 — status tokens)
9. **Focus ring** — 2px Electric Green border replaces the 1px subtle border

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--input-bg` → `--vv-color-surface-sunken` (`#F5F5F5`) |
| Border color (rest) | `--input-border-color` → `--vv-color-border-subtle` (`#EBEBEB`) |
| Border width (rest) | `--input-border-width` → `1px` |
| Border radius | `--input-border-radius` → `--vv-radius-sm` (`12px`) |
| Focus border | `--input-focus-border` → `2px solid --vv-color-border-focus` (`#C6FF2D`) |
| Text color | `--input-text-color` → `--vv-color-text-primary` (`#0F0F0F`) |
| Placeholder color | `--input-placeholder` → `--vv-color-text-disabled` (`#C9C9C9`) |
| Font size | `--input-font-size` → `--vv-text-body-md-size` (`15px`) |
| Line height | `--input-line-height` → `--vv-text-body-md-line-height` (`22px`) |
| Horizontal padding | `--input-padding-h` → `--vv-space-5` (`16px`) |
| Vertical padding | `--input-padding-v` → `--vv-space-4` (`12px`) |
| Height | `--input-height` → `--vv-space-touch-target` (`48px`) |
| Transition | `--input-transition` → `border-color var(--vv-motion-quick)` |

---

## States

| State | Border | Background | Text |
|-------|--------|-----------|------|
| **Default** | 1px `--vv-color-border-subtle` | `--input-bg` | Placeholder color |
| **Focused** | `--input-focus-border` (2px Electric Green) | `--input-bg` | `--input-text-color` |
| **Filled** | 1px `--vv-color-border-subtle` | `--input-bg` | `--input-text-color` |
| **Error** | 2px error color (v0.2 status token) | `--input-bg` | `--input-text-color` |
| **Disabled** | 1px `--vv-color-border-subtle` | `--vv-color-surface-sunken` | `--vv-color-text-disabled` |
| **Read-only** | none | transparent | `--vv-color-text-secondary` |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `type` | `string` | `'text'` | Input type: `text`, `tel`, `email`, `number`, `password` |
| `placeholder` | `string` | — | Placeholder text |
| `label` | `string` | — | Visible label above the field |
| `helperText` | `string` | — | Instructional copy below |
| `errorText` | `string` | — | Error message; triggers error state |
| `disabled` | `boolean` | `false` | Disables interaction |
| `leadingIcon` | `ReactNode` | — | Icon before input text |
| `trailingIcon` | `ReactNode` | — | Icon after input text |

---

## Code Example

```css
.input-wrapper { display: flex; flex-direction: column; gap: var(--vv-space-2); }

.input-label {
  font-size:   var(--vv-text-label-md-size);
  font-weight: var(--vv-text-label-md-weight);
  color:       var(--vv-color-text-primary);
}

.input {
  height:        var(--input-height);
  padding:       var(--input-padding-v) var(--input-padding-h);
  background:    var(--input-bg);
  border:        var(--input-border-width) solid var(--input-border-color);
  border-radius: var(--input-border-radius);
  font-size:     var(--input-font-size);
  line-height:   var(--input-line-height);
  color:         var(--input-text-color);
  transition:    var(--input-transition);
  outline:       none;
}

.input::placeholder { color: var(--input-placeholder); }

.input:focus { border: var(--input-focus-border); }

.input:disabled {
  color:          var(--vv-color-text-disabled);
  cursor:         not-allowed;
  pointer-events: none;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — surface-sunken, focus ring
- [foundations/motion.md](../foundations/motion.md) — focus transition
- [components/phone-input.md](./phone-input.md) — phone-specific variant
- [components/segmented-toggle.md](./segmented-toggle.md) — selection alternative
