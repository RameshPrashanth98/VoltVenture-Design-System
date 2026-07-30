# VoltVenture Design System — Contrast Report

Generated: 2026-07-30T03:37:49.005Z

## Status: RAN

| Foreground | Background | Resolved FG | Resolved BG | Ratio | Required | Level | Result |
|------------|------------|-------------|-------------|-------|----------|-------|--------|
| color.text.primary | color.surface.base | #0F0F0F | #FFFFFF | 19.17:1 | 7:1 | AAA | PASS |
| color.text.secondary | color.surface.base | #808080 | #FFFFFF | 3.95:1 | 3.1:1 | AA-large | PASS |
| color.text.disabled | color.surface.base | — | — | — | — | EXEMPT | EXEMPT |
| color.text.accent | color.surface.base | #7D9220 | #FFFFFF | 3.50:1 | 3.1:1 | AA-large | PASS |
| color.text.onInverse | color.surface.inverse | #FFFFFF | #0F0F0F | 19.17:1 | 7:1 | AAA | PASS |
| color.action.primary.fg | color.action.primary | #0F0F0F | #C6FF2D | 16.20:1 | 4.5:1 | AA | PASS |
| color.action.secondary.fg | color.action.secondary | #FFFFFF | #0F0F0F | 19.17:1 | 4.5:1 | AA | PASS |

## Notes

- **color.text.primary / color.surface.base**: Volt Black (#0F0F0F) on white (#FFFFFF) — 21:1. Must clear AAA for all body text.
- **color.text.secondary / color.surface.base**: Mid Gray (#808080) on white (#FFFFFF) — 3.9:1. Passes AA for large text (18pt+ or 14pt bold) only. Use color.text.secondary at body.sm (13pt) only on large-text elements.
- **color.text.disabled / color.surface.base**: Disabled state — WCAG 1.4.3 explicitly exempts text in disabled UI components from contrast requirements.
- **color.text.accent / color.surface.base**: Dark green (#7D9220, green.700) on white (#FFFFFF) — actual 3.5:1. Passes AA for large text (18pt+ or 14pt bold) only. Design spec claimed 4.6:1 but computed value is 3.5:1 — design review recommended for small accent text. Do not substitute green.500 (1.36:1).
- **color.text.onInverse / color.surface.inverse**: White (#FFFFFF) on Volt Black (#0F0F0F) — 21:1. Must clear AAA for inverse/dark-surface text.
- **color.action.primary.fg / color.action.primary**: Volt Black (#0F0F0F) on Electric Green (#C6FF2D) — 15.4:1. CTA button label on brand green background. Well above AA and AAA thresholds.
- **color.action.secondary.fg / color.action.secondary**: White (#FFFFFF) on Volt Black (#0F0F0F) — 21:1. Secondary CTA (dark background variant). Must clear AA.
