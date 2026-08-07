# Progress Strip

**Name:** Progress Strip
**Category:** Feedback
**Status:** Stable — v0.1
**Story:** `stories/components/progress-strip.stories.js`

---

## Overview

**When to use:**
- Step progress through a multi-step flow: onboarding (3 dots), verification (4 steps)
- Linear fill showing completion percentage: battery level, ride progress, loading
- Indeterminate loading state when duration is unknown

**When not to use:**
- Circular progress — out of scope; use an animated ring instead
- Navigation context (which tab is active) — use Tab Bar active indicator

---

## Anatomy

### Step dots (discrete)
```
●  ○  ○  ○   ← filled dot = complete, outline = future
```

### Linear fill (continuous)
```
┌────────────────────────────────┐  ← track: grey.200, 4px tall
│█████████████░░░░░░░░░░░░░░░░░░│  ← fill: action.primary
└────────────────────────────────┘
```

Parts:
1. **Track** — full-width background bar, `--progress-track-bg`, 4px height
2. **Fill** — animated width, `--progress-fill-bg` (Electric Green)
3. **Step dots** (discrete variant) — N circles; filled = complete, outline = future

---

## Tokens Used

| Property | Token |
|----------|-------|
| Track background | `--progress-track-bg` → `--vv-color-border-subtle` (`#EBEBEB`) |
| Fill background | `--progress-fill-bg` → `--vv-color-action-primary` (`#C6FF2D`) |
| Border radius | `--progress-radius` → `--vv-radius-xs` (`8px`) |
| Height | `--progress-height` → `--vv-space-2` (`4px`) |

Transition: `width var(--vv-motion-deliberate)` for smooth fill animation

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `value` | `number` | `0` | Completion 0–100 (percentage) |
| `steps` | `number` | — | If set, renders discrete step dots instead of linear fill |
| `currentStep` | `number` | — | Active step index (0-based) |
| `indeterminate` | `boolean` | `false` | Animated shimmer, ignores `value` |

---

## States

| State | Visual |
|-------|--------|
| **Empty** | Track only, fill width 0 |
| **In progress** | Fill width = `value%`, smooth transition |
| **Complete** | Fill width = 100%, Electric Green |
| **Indeterminate** | Animated shimmer/sweep across the track |

---

## Code Example

```css
.progress-track {
  width:         100%;
  height:        var(--progress-height);
  border-radius: var(--progress-radius);
  background:    var(--progress-track-bg);
  overflow:      hidden;
}

.progress-fill {
  height:        100%;
  border-radius: var(--progress-radius);
  background:    var(--progress-fill-bg);
  transition:    width var(--vv-motion-deliberate);
}

/* Discrete step dots */
.progress-steps {
  display:     flex;
  gap:         var(--vv-space-3);
  align-items: center;
}

.progress-step {
  width:         8px;
  height:        8px;
  border-radius: var(--vv-radius-full);
  background:    var(--progress-track-bg);
  transition:    background var(--vv-motion-standard),
                 transform  var(--vv-motion-standard);
}

.progress-step--active {
  background: var(--progress-fill-bg);
  transform:  scale(1.25);
}

/* Indeterminate shimmer */
@keyframes loaderFill {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(400%); }
}

.progress-fill--indeterminate {
  width:     25%;
  animation: loaderFill var(--vv-duration-loop) var(--vv-easing-decelerate) infinite;
}
```

---

## Cross-references

- [foundations/color.md](../foundations/color.md) — Electric Green fill
- [foundations/motion.md](../foundations/motion.md) — deliberate transition, loop animation
- [components/button.md](./button.md) — loading state uses progress context
- [components/status-badge.md](./status-badge.md) — step-complete indicator
