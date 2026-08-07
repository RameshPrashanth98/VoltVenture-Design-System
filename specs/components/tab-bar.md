# Tab Bar

**Name:** Tab Bar
**Category:** Navigation
**Status:** Stable — v0.1
**Story:** `stories/components/tab-bar.stories.js`

---

## Overview

**When to use:**
- Primary navigation between the top-level sections of the app: Home, Explore, Ride, Rewards, Profile
- Persistent across all primary screens

**When not to use:**
- In-flow navigation within a task (use a back button / screen header instead)
- On full-screen immersive views like the active ride map (hide it temporarily)
- Switching between content within a single screen (use `SegmentedToggle`)

---

## Anatomy

```
┌────────────────────────────────────────────────────┐
│  [icon]     [icon]     [icon]     [icon]     [icon] │  ← height: 48px
│  Label      Label      ●Label     Label      Label  │  ← active: dot indicator
└────────────────────────────────────────────────────┘
         ↑ box-shadow: floating (above content)
```

Parts:
1. **Container** — full-width, white background, floating shadow, z-sticky
2. **Tab items** — equally spaced, each with an icon (24px) and optional label (11px)
3. **Active indicator** — Electric Green dot or filled icon color on active tab
4. **Safe area spacer** — padding-bottom equals device home indicator clearance

---

## Tokens Used

| Property | Token |
|----------|-------|
| Background | `--tab-bar-bg` → `--vv-color-surface-base` (`#FFFFFF`) |
| Shadow | `--tab-bar-shadow` → `--vv-elevation-floating` |
| Z-index | `--tab-bar-z-index` → `--vv-z-sticky` (`2`) |
| Height | `--tab-bar-height` → `--vv-space-10` (`48px`) |
| Icon (active) | `--tab-bar-icon-active` → `--vv-color-text-primary` (`#0F0F0F`) |
| Icon (rest) | `--tab-bar-icon-rest` → `--vv-color-text-secondary` (`#808080`) |
| Label font size | `--tab-bar-label-size` → `--vv-text-label-sm-size` (`11px`) |
| Label font weight | `--tab-bar-label-weight` → `--vv-text-label-sm-weight` (`500`) |

Active tab indicator color: `--vv-color-action-primary` (`#C6FF2D`)

---

## States

| State | Icon color | Label | Indicator |
|-------|-----------|-------|-----------|
| **Rest** | `--tab-bar-icon-rest` | `--vv-color-text-secondary` | None |
| **Active** | `--tab-bar-icon-active` | `--vv-color-text-primary` | Electric Green dot |
| **Pressed** | Darkens (opacity 0.7) | — | — |
| **Badge** | Active icon color | — | Numeric badge (red, v0.2) |

---

## Props / API

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `tabs` | `Tab[]` | — | Array of `{icon, label, route}` |
| `activeTab` | `string` | — | Key of the currently active tab |
| `onTabChange` | `function` | — | Called with tab key on press |
| `showLabels` | `boolean` | `true` | Show/hide text labels |

---

## Code Example

```css
.tab-bar {
  position:       fixed;
  bottom:         0;
  left:           0;
  right:          0;
  display:        flex;
  align-items:    center;
  height:         var(--tab-bar-height);
  background:     var(--tab-bar-bg);
  box-shadow:     var(--tab-bar-shadow);
  z-index:        var(--tab-bar-z-index);
  padding-bottom: env(safe-area-inset-bottom, 0);
}

.tab-bar__item {
  flex:           1;
  display:        flex;
  flex-direction: column;
  align-items:    center;
  justify-content: center;
  gap:            var(--vv-space-1);
  cursor:         pointer;
}

.tab-bar__icon { color: var(--tab-bar-icon-rest); }
.tab-bar__item--active .tab-bar__icon { color: var(--tab-bar-icon-active); }

.tab-bar__label {
  font-size:   var(--tab-bar-label-size);
  font-weight: var(--tab-bar-label-weight);
  color:       var(--vv-color-text-secondary);
}
.tab-bar__item--active .tab-bar__label { color: var(--vv-color-text-primary); }

/* Active dot */
.tab-bar__item--active::after {
  content:       '';
  width:         4px;
  height:        4px;
  border-radius: var(--vv-radius-full);
  background:    var(--vv-color-action-primary);
  position:      absolute;
  bottom:        6px;
}
```

---

## Cross-references

- [foundations/elevation.md](../foundations/elevation.md) — floating shadow
- [foundations/color.md](../foundations/color.md) — Electric Green active indicator
- [components/status-badge.md](./status-badge.md) — notification badge on tab
