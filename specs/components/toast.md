# Toast

**Name:** Toast / Snackbar
**Category:** Feedback
**Status:** Stable — v0.1

---

## Overview

**When to use:**
- Brief, non-blocking feedback: "Ride ended", "Payment failed", "Copied to clipboard"
- System-level messages that don't require user action
- Confirmation of a completed background action

**When not to use:**
- Messages that require a user decision — use a dialog or bottom sheet
- Persistent state warnings — use an inline alert instead
- More than one toast at a time — queue them

---

## Anatomy

```
┌──────────────────────────────────────┐  ← radius: sm (12px)
│  Message text              [Action?] │  ← dark bg, white text
└──────────────────────────────────────┘
         ↑ positioned above tab bar, centered
```

Parts:
1. **Container** — inverse (dark) surface, rounded, floating shadow
2. **Message** — `body.md` (15px/400), `--toast-fg` (white)
3. **Action** (optional) — short text button, Electric Green, right-aligned
4. **Close** (optional) — × icon, right-aligned

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--toast-bg` → `--vv-color-surface-inverse` (`#0F0F0F`) |
| Foreground | `--toast-fg` → `--vv-color-text-on-inverse` (`#FFFFFF`) |
| Border radius | `--toast-radius` → `--vv-radius-sm` (`12px`) |
| Box shadow | `--toast-shadow` → `--vv-elevation-overlay` |
| Z-index | `--toast-z-index` → `--vv-z-toast` (`6`) |
| Padding | `--toast-padding` → `12px 20px` |

---

## States

| State | Visual |
|-------|--------|
| **Hidden** | Not rendered (or `opacity: 0; pointer-events: none`) |
| **Entering** | Fade + slide up: `opacity: 0 → 1`, `translateY(8px → 0)` |
| **Visible** | Fully opaque, auto-dismiss after 3–5s |
| **Dismissing** | Fade out: `opacity: 1 → 0` |
| **Action available** | Electric Green action label, right-aligned |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `message` | `string` | — | Toast body text |
| `action` | `{label, onPress}` | — | Optional inline action |
| `duration` | `number` | `3000` | Auto-dismiss delay in ms |
| `visible` | `boolean` | `false` | Controls render |

---

## Code Example

```css
.toast {
  position:       fixed;
  bottom:         calc(var(--tab-bar-height) + var(--vv-space-5));
  left:           var(--vv-space-screen-margin);
  right:          var(--vv-space-screen-margin);
  display:        flex;
  align-items:    center;
  justify-content: space-between;
  gap:            var(--vv-space-4);
  padding:        var(--toast-padding);
  background:     var(--toast-bg);
  color:          var(--toast-fg);
  border-radius:  var(--toast-radius);
  box-shadow:     var(--toast-shadow);
  z-index:        var(--toast-z-index);
  font-size:      var(--vv-text-body-md-size);
  line-height:    var(--vv-text-body-md-line-height);
  opacity:        0;
  transform:      translateY(8px);
  transition:     opacity var(--vv-motion-standard),
                  transform var(--vv-motion-standard);
}

.toast--visible {
  opacity:   1;
  transform: translateY(0);
}

.toast__action {
  color:       var(--vv-color-action-primary);
  font-size:   var(--vv-text-label-md-size);
  font-weight: var(--vv-text-label-md-weight);
  white-space: nowrap;
  cursor:      pointer;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — inverse surface, Electric Green action
- [foundations/elevation.md](../foundations/elevation.md) — overlay shadow
- [foundations/motion.md](../foundations/motion.md) — enter/exit animation
- [components/bottom-sheet.md](./bottom-sheet.md) — when action requires user input
