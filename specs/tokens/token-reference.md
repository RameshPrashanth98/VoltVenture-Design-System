# Token Reference

Master map of all CSS custom properties in `tokens.css`.
Three layers: L1 `--ds-*` (primitives) → L2 `--vv-*` (aliases) → L3 `--<comp>-*` (components).

---

## Layer 1 — Design System Primitives (`--ds-*`)

### Colors — Primitives

| Token | Value |
|-------|-------|
| `--ds-color-black` | `#0F0F0F` |
| `--ds-color-white` | `#FFFFFF` |
| `--ds-color-grey-050` | `#FAFAFA` |
| `--ds-color-grey-100` | `#F5F5F5` |
| `--ds-color-grey-200` | `#EBEBEB` |
| `--ds-color-grey-300` | `#C9C9C9` |
| `--ds-color-grey-500` | `#808080` |
| `--ds-color-grey-700` | `#4A4A4A` |
| `--ds-color-grey-800` | `#2F2F2F` |
| `--ds-color-grey-900` | `#1A1A1A` |
| `--ds-color-grey-950` | `#0F0F0F` |
| `--ds-color-green-100` | `#F4FFD9` |
| `--ds-color-green-300` | `#DDFF7A` |
| `--ds-color-green-500` | `#C6FF2D` |
| `--ds-color-green-600` | `#A8DE1A` |
| `--ds-color-green-700` | `#7D9220` |

### Colors — Semantic

| Token | Resolves to |
|-------|------------|
| `--ds-color-surface-base` | `--ds-color-white` |
| `--ds-color-surface-sunken` | `--ds-color-grey-100` |
| `--ds-color-surface-raised` | `--ds-color-white` |
| `--ds-color-surface-inverse` | `--ds-color-grey-950` |
| `--ds-color-text-primary` | `--ds-color-grey-950` |
| `--ds-color-text-secondary` | `--ds-color-grey-500` |
| `--ds-color-text-disabled` | `--ds-color-grey-300` |
| `--ds-color-text-accent` | `--ds-color-green-700` |
| `--ds-color-text-on-inverse` | `--ds-color-white` |
| `--ds-color-action-primary` | `--ds-color-green-500` |
| `--ds-color-action-primary-fg` | `--ds-color-grey-950` |
| `--ds-color-action-primary-hover` | `--ds-color-green-300` |
| `--ds-color-action-primary-pressed` | `--ds-color-green-600` |
| `--ds-color-action-secondary` | `--ds-color-grey-950` |
| `--ds-color-action-secondary-fg` | `--ds-color-white` |
| `--ds-color-border-subtle` | `--ds-color-grey-200` |
| `--ds-color-border-strong` | `--ds-color-grey-950` |
| `--ds-color-border-focus` | `--ds-color-green-500` |
| `--ds-color-status-live` | `--ds-color-green-500` |

### Spacing

| Token | Value |
|-------|-------|
| `--ds-space-050` | `2px` |
| `--ds-space-100` | `4px` |
| `--ds-space-200` | `8px` |
| `--ds-space-300` | `12px` |
| `--ds-space-400` | `16px` |
| `--ds-space-500` | `20px` |
| `--ds-space-600` | `24px` |
| `--ds-space-800` | `32px` |
| `--ds-space-1000` | `40px` |
| `--ds-space-1200` | `48px` |
| `--ds-space-1600` | `64px` |

### Typography — Families

| Token | Value |
|-------|-------|
| `--ds-font-family-display` | `'Manjari', sans-serif` |
| `--ds-font-family-body` | `'Inter', sans-serif` |
| `--ds-font-family-mono` | `'JetBrains Mono', monospace` |

### Typography — Sizes

| Token | Value |
|-------|-------|
| `--ds-font-size-display-xl` | `40px` |
| `--ds-font-size-display-lg` | `32px` |
| `--ds-font-size-display-md` | `28px` |
| `--ds-font-size-numeric-lg` | `28px` |
| `--ds-font-size-numeric-md` | `22px` |
| `--ds-font-size-heading-lg` | `20px` |
| `--ds-font-size-heading-md` | `17px` |
| `--ds-font-size-heading-sm` | `15px` |
| `--ds-font-size-body-lg` | `17px` |
| `--ds-font-size-body-md` | `15px` |
| `--ds-font-size-body-sm` | `13px` |
| `--ds-font-size-label-md` | `13px` |
| `--ds-font-size-label-sm` | `11px` |
| `--ds-font-size-overline` | `10px` |

### Typography — Line Heights

| Token | Value |
|-------|-------|
| `--ds-line-height-display-xl` | `42px` |
| `--ds-line-height-display-lg` | `36px` |
| `--ds-line-height-display-md` | `32px` |
| `--ds-line-height-numeric-lg` | `30px` |
| `--ds-line-height-numeric-md` | `26px` |
| `--ds-line-height-heading-lg` | `26px` |
| `--ds-line-height-heading-md` | `24px` |
| `--ds-line-height-heading-sm` | `20px` |
| `--ds-line-height-body-lg` | `26px` |
| `--ds-line-height-body-md` | `22px` |
| `--ds-line-height-body-sm` | `18px` |
| `--ds-line-height-label-md` | `16px` |
| `--ds-line-height-label-sm` | `14px` |
| `--ds-line-height-overline` | `14px` |

### Typography — Weights & Tracking

| Token | Value |
|-------|-------|
| `--ds-font-weight-display` | `700` |
| `--ds-font-weight-numeric` | `700` |
| `--ds-font-weight-heading` | `600` |
| `--ds-font-weight-body` | `400` |
| `--ds-font-weight-label-md` | `600` |
| `--ds-font-weight-label-sm` | `500` |
| `--ds-font-weight-overline` | `500` |
| `--ds-letter-spacing-tighter` | `-0.02em` |
| `--ds-letter-spacing-tight` | `-0.01em` |
| `--ds-letter-spacing-normal` | `0em` |
| `--ds-letter-spacing-wide` | `0.12em` |

### Border Radius

| Token | Value |
|-------|-------|
| `--ds-radius-xs` | `8px` |
| `--ds-radius-sm` | `12px` |
| `--ds-radius-md` | `16px` |
| `--ds-radius-lg` | `20px` |
| `--ds-radius-xl` | `28px` |
| `--ds-radius-2xl` | `36px` |
| `--ds-radius-full` | `999px` |

### Elevation

| Token | Value |
|-------|-------|
| `--ds-elevation-flat` | `none` |
| `--ds-elevation-raised` | `0 2px 8px 0 rgba(15,15,15,0.06)` |
| `--ds-elevation-floating` | `0 8px 24px 0 rgba(15,15,15,0.10)` |
| `--ds-elevation-overlay` | `0 16px 48px 0 rgba(15,15,15,0.16)` |

### Z-Index

| Token | Value |
|-------|-------|
| `--ds-z-base` | `0` |
| `--ds-z-raised` | `1` |
| `--ds-z-sticky` | `2` |
| `--ds-z-overlay` | `3` |
| `--ds-z-drawer` | `4` |
| `--ds-z-modal` | `5` |
| `--ds-z-toast` | `6` |

### Motion

| Token | Value |
|-------|-------|
| `--ds-duration-instant` | `0ms` |
| `--ds-duration-fast` | `100ms` |
| `--ds-duration-quick` | `150ms` |
| `--ds-duration-standard` | `200ms` |
| `--ds-duration-deliberate` | `300ms` |
| `--ds-duration-loop` | `2000ms` |
| `--ds-easing-standard` | `ease` |
| `--ds-easing-decelerate` | `ease-out` |
| `--ds-easing-accelerate` | `ease-in` |
| `--ds-easing-loop` | `ease-in-out` |

---

## Layer 2 — Project Aliases (`--vv-*`)

All L2 tokens reference L1 with a raw-value fallback.

### Colors

| Token | L1 source | Fallback |
|-------|-----------|---------|
| `--vv-color-surface-base` | `--ds-color-surface-base` | `#FFFFFF` |
| `--vv-color-surface-sunken` | `--ds-color-surface-sunken` | `#F5F5F5` |
| `--vv-color-surface-raised` | `--ds-color-surface-raised` | `#FFFFFF` |
| `--vv-color-surface-inverse` | `--ds-color-surface-inverse` | `#0F0F0F` |
| `--vv-color-text-primary` | `--ds-color-text-primary` | `#0F0F0F` |
| `--vv-color-text-secondary` | `--ds-color-text-secondary` | `#808080` |
| `--vv-color-text-disabled` | `--ds-color-text-disabled` | `#C9C9C9` |
| `--vv-color-text-accent` | `--ds-color-text-accent` | `#7D9220` |
| `--vv-color-text-on-inverse` | `--ds-color-text-on-inverse` | `#FFFFFF` |
| `--vv-color-action-primary` | `--ds-color-action-primary` | `#C6FF2D` |
| `--vv-color-action-primary-fg` | `--ds-color-action-primary-fg` | `#0F0F0F` |
| `--vv-color-action-primary-hover` | `--ds-color-action-primary-hover` | `#DDFF7A` |
| `--vv-color-action-primary-pressed` | `--ds-color-action-primary-pressed` | `#A8DE1A` |
| `--vv-color-action-secondary` | `--ds-color-action-secondary` | `#0F0F0F` |
| `--vv-color-action-secondary-fg` | `--ds-color-action-secondary-fg` | `#FFFFFF` |
| `--vv-color-border-subtle` | `--ds-color-border-subtle` | `#EBEBEB` |
| `--vv-color-border-strong` | `--ds-color-border-strong` | `#0F0F0F` |
| `--vv-color-border-focus` | `--ds-color-border-focus` | `#C6FF2D` |
| `--vv-color-status-live` | `--ds-color-status-live` | `#C6FF2D` |

### Spacing

| Token | L1 source | Value |
|-------|-----------|-------|
| `--vv-space-1` | `--ds-space-050` | `2px` |
| `--vv-space-2` | `--ds-space-100` | `4px` |
| `--vv-space-3` | `--ds-space-200` | `8px` |
| `--vv-space-4` | `--ds-space-300` | `12px` |
| `--vv-space-5` | `--ds-space-400` | `16px` |
| `--vv-space-6` | `--ds-space-500` | `20px` |
| `--vv-space-7` | `--ds-space-600` | `24px` |
| `--vv-space-8` | `--ds-space-800` | `32px` |
| `--vv-space-9` | `--ds-space-1000` | `40px` |
| `--vv-space-10` | `--ds-space-1200` | `48px` |
| `--vv-space-11` | `--ds-space-1600` | `64px` |
| `--vv-space-screen-margin` | `--ds-space-400` | `16px` |
| `--vv-space-card-padding` | `--ds-space-500` | `20px` |
| `--vv-space-button-h` | `--ds-space-600` | `24px` |
| `--vv-space-touch-target` | `--ds-space-1200` | `48px` |
| `--vv-space-section-gap` | `--ds-space-800` | `32px` |

### Typography

| Token | Value |
|-------|-------|
| `--vv-font-display` | `'Manjari', sans-serif` |
| `--vv-font-body` | `'Inter', sans-serif` |
| `--vv-font-mono` | `'JetBrains Mono', monospace` |
| `--vv-text-display-xl-size` | `40px` |
| `--vv-text-display-xl-line-height` | `42px` |
| `--vv-text-display-xl-weight` | `700` |
| `--vv-text-display-lg-size` | `32px` |
| `--vv-text-display-lg-line-height` | `36px` |
| `--vv-text-display-lg-weight` | `700` |
| `--vv-text-display-md-size` | `28px` |
| `--vv-text-display-md-line-height` | `32px` |
| `--vv-text-display-md-weight` | `700` |
| `--vv-text-numeric-lg-size` | `28px` |
| `--vv-text-numeric-lg-line-height` | `30px` |
| `--vv-text-numeric-lg-weight` | `700` |
| `--vv-text-numeric-lg-tracking` | `-0.02em` |
| `--vv-text-numeric-md-size` | `22px` |
| `--vv-text-numeric-md-line-height` | `26px` |
| `--vv-text-numeric-md-weight` | `700` |
| `--vv-text-numeric-md-tracking` | `-0.02em` |
| `--vv-text-heading-lg-size` | `20px` |
| `--vv-text-heading-lg-line-height` | `26px` |
| `--vv-text-heading-lg-weight` | `600` |
| `--vv-text-heading-lg-tracking` | `-0.01em` |
| `--vv-text-heading-md-size` | `17px` |
| `--vv-text-heading-md-line-height` | `24px` |
| `--vv-text-heading-md-weight` | `600` |
| `--vv-text-heading-sm-size` | `15px` |
| `--vv-text-heading-sm-line-height` | `20px` |
| `--vv-text-heading-sm-weight` | `600` |
| `--vv-text-body-lg-size` | `17px` |
| `--vv-text-body-lg-line-height` | `26px` |
| `--vv-text-body-lg-weight` | `400` |
| `--vv-text-body-md-size` | `15px` |
| `--vv-text-body-md-line-height` | `22px` |
| `--vv-text-body-md-weight` | `400` |
| `--vv-text-body-sm-size` | `13px` |
| `--vv-text-body-sm-line-height` | `18px` |
| `--vv-text-body-sm-weight` | `400` |
| `--vv-text-label-md-size` | `13px` |
| `--vv-text-label-md-line-height` | `16px` |
| `--vv-text-label-md-weight` | `600` |
| `--vv-text-label-sm-size` | `11px` |
| `--vv-text-label-sm-line-height` | `14px` |
| `--vv-text-label-sm-weight` | `500` |
| `--vv-text-overline-size` | `10px` |
| `--vv-text-overline-line-height` | `14px` |
| `--vv-text-overline-weight` | `500` |
| `--vv-text-overline-tracking` | `0.12em` |

### Border Radius

| Token | Value |
|-------|-------|
| `--vv-radius-xs` | `8px` |
| `--vv-radius-sm` | `12px` |
| `--vv-radius-md` | `16px` |
| `--vv-radius-lg` | `20px` |
| `--vv-radius-xl` | `28px` |
| `--vv-radius-2xl` | `36px` |
| `--vv-radius-full` | `999px` |

### Elevation

| Token | Value |
|-------|-------|
| `--vv-elevation-flat` | `none` |
| `--vv-elevation-raised` | `0 2px 8px 0 rgba(15,15,15,0.06)` |
| `--vv-elevation-floating` | `0 8px 24px 0 rgba(15,15,15,0.10)` |
| `--vv-elevation-overlay` | `0 16px 48px 0 rgba(15,15,15,0.16)` |

### Z-Index

| Token | Value |
|-------|-------|
| `--vv-z-base` | `0` |
| `--vv-z-raised` | `1` |
| `--vv-z-sticky` | `2` |
| `--vv-z-overlay` | `3` |
| `--vv-z-drawer` | `4` |
| `--vv-z-modal` | `5` |
| `--vv-z-toast` | `6` |

### Motion

| Token | Value |
|-------|-------|
| `--vv-duration-instant` | `0ms` |
| `--vv-duration-fast` | `100ms` |
| `--vv-duration-quick` | `150ms` |
| `--vv-duration-standard` | `200ms` |
| `--vv-duration-deliberate` | `300ms` |
| `--vv-duration-loop` | `2000ms` |
| `--vv-easing-standard` | `ease` |
| `--vv-easing-decelerate` | `ease-out` |
| `--vv-easing-accelerate` | `ease-in` |
| `--vv-easing-loop` | `ease-in-out` |
| `--vv-motion-micro` | `100ms ease` |
| `--vv-motion-quick` | `150ms ease` |
| `--vv-motion-standard` | `200ms ease` |
| `--vv-motion-deliberate` | `300ms ease-out` |

---

## Layer 3 — Component Tokens (`--<comp>-*`)

| Token | Resolves to | Component |
|-------|------------|-----------|
| `--button-primary-bg` | `--vv-color-action-primary` | Button |
| `--button-primary-bg-hover` | `--vv-color-action-primary-hover` | Button |
| `--button-primary-bg-pressed` | `--vv-color-action-primary-pressed` | Button |
| `--button-primary-fg` | `--vv-color-action-primary-fg` | Button |
| `--button-secondary-bg` | `--vv-color-action-secondary` | Button |
| `--button-secondary-fg` | `--vv-color-action-secondary-fg` | Button |
| `--button-radius` | `--vv-radius-full` | Button |
| `--button-height` | `--vv-space-touch-target` | Button |
| `--button-padding-h` | `--vv-space-button-h` | Button |
| `--button-font-size` | `--vv-text-heading-sm-size` | Button |
| `--button-font-weight` | `--vv-text-heading-sm-weight` | Button |
| `--button-transition` | `background/transform var(--vv-motion-micro)` | Button |
| `--button-focus-outline` | `2px solid --vv-color-border-focus` | Button |
| `--card-bg` | `--vv-color-surface-raised` | Card |
| `--card-bg-inverse` | `--vv-color-surface-inverse` | Card |
| `--card-radius` | `--vv-radius-lg` | Card |
| `--card-padding` | `--vv-space-card-padding` | Card |
| `--card-shadow` | `--vv-elevation-raised` | Card |
| `--card-border-color` | `--vv-color-border-subtle` | Card |
| `--sheet-bg` | `--vv-color-surface-base` | Bottom Sheet |
| `--sheet-radius` | `--vv-radius-2xl --vv-radius-2xl 0 0` | Bottom Sheet |
| `--sheet-shadow` | `--vv-elevation-overlay` | Bottom Sheet |
| `--sheet-z-index` | `--vv-z-drawer` | Bottom Sheet |
| `--input-bg` | `--vv-color-surface-sunken` | Input |
| `--input-border-color` | `--vv-color-border-subtle` | Input |
| `--input-focus-border` | `2px solid --vv-color-border-focus` | Input |
| `--input-text-color` | `--vv-color-text-primary` | Input |
| `--input-placeholder` | `--vv-color-text-disabled` | Input |
| `--input-border-radius` | `--vv-radius-sm` | Input |
| `--input-height` | `--vv-space-touch-target` | Input |
| `--list-row-bg` | `--vv-color-surface-base` | List Row |
| `--list-row-bg-hover` | `--vv-color-surface-sunken` | List Row |
| `--list-row-divider` | `--vv-color-border-subtle` | List Row |
| `--list-row-height` | `--vv-space-11` | List Row |
| `--list-row-radius` | `--vv-radius-md` | List Row |
| `--tab-bar-bg` | `--vv-color-surface-base` | Tab Bar |
| `--tab-bar-shadow` | `--vv-elevation-floating` | Tab Bar |
| `--tab-bar-z-index` | `--vv-z-sticky` | Tab Bar |
| `--tab-bar-height` | `--vv-space-10` | Tab Bar |
| `--map-pin-bg` | `--vv-color-action-primary` | Map Pin |
| `--map-pin-fg` | `--vv-color-action-primary-fg` | Map Pin |
| `--map-pin-shadow` | `--vv-elevation-floating` | Map Pin |
| `--map-pin-radius` | `--vv-radius-full` | Map Pin |
| `--map-pin-z-index` | `--vv-z-overlay` | Map Pin |
| `--status-live-color` | `--vv-color-status-live` | Status |
| `--badge-radius` | `--vv-radius-xs` | Badge |
| `--toast-bg` | `--vv-color-surface-inverse` | Toast |
| `--toast-fg` | `--vv-color-text-on-inverse` | Toast |
| `--toast-z-index` | `--vv-z-toast` | Toast |
| `--progress-track-bg` | `--vv-color-border-subtle` | Progress |
| `--progress-fill-bg` | `--vv-color-action-primary` | Progress |
| `--toggle-bg` | `--vv-color-surface-sunken` | Segmented Toggle |
| `--toggle-active-bg` | `--vv-color-surface-raised` | Segmented Toggle |
| `--toggle-transition` | `background/box-shadow var(--vv-motion-quick)` | Segmented Toggle |
| `--qr-bg` | `--vv-color-surface-inverse` | QR Viewfinder |
| `--qr-corner-color` | `--vv-color-action-primary` | QR Viewfinder |
| `--qr-corner-radius` | `--vv-radius-sm` | QR Viewfinder |

---

## See Also

- [specs/foundations/color.md](../foundations/color.md)
- [specs/foundations/spacing.md](../foundations/spacing.md)
- [specs/foundations/typography.md](../foundations/typography.md)
- [specs/foundations/radius.md](../foundations/radius.md)
- [specs/foundations/elevation.md](../foundations/elevation.md)
- [specs/foundations/motion.md](../foundations/motion.md)
