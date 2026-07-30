# Phase 2: Storybook Documentation — Discussion Log

**Date:** 2026-07-30
**Areas discussed:** 4 of 4 selected
**Outcome:** CONTEXT.md written, ready for planning

---

## Area 1: Storybook Framework

**Q1: Which Storybook framework?**
Options: `@storybook/html-vite` (pure HTML) / `@storybook/react-vite` (React JSX)
**Selected:** `@storybook/html-vite` — preserves PROJECT.md "plain HTML/CSS" intent; no React in this repo.

**Q2: Story file format?**
Options: `.js` / `.ts`
**Selected:** `.js` — consistent with existing `sd-transforms/*.mjs` and `generated/tokens.js` patterns. No TS overhead for HTML templates.

**Q3: Story file location?**
Options: `stories/` at root / `.storybook/stories/` / `src/stories/`
**Selected:** `stories/` at project root. Storybook's default glob, clean separation from build tools.

---

## Area 2: Typography Font Loading

**Q1: How to load fonts in Storybook?**
Options: Google Fonts CDN in `preview-head.html` / system font fallbacks / values-only table
**Selected:** Google Fonts CDN — accurate rendering; Manjari 100/400/700, Inter 400/500/600/700, JetBrains Mono 400/500.

**Q2: Typography specimen copy?**
Options: Real VoltVenture copy / lorem ipsum / token name only
**Selected:** Real VoltVenture copy — each specimen uses contextual text from the app's UI scenarios.

---

## Area 3: Dimension Story Format

**Q1: Spacing and Radius story format?**
Options: Scaled bars/boxes / table only / hybrid
**Selected:** Scaled bars/boxes — horizontal bars for spacing, squares with applied corner radii for radius. Visual proportion at a glance.

**Q2: Elevation and Border story format?**
Options: Live CSS shadow demo cards / values table only
**Selected:** Live CSS shadow cards — 4 white cards on grey canvas showing actual shadows. Border: horizontal stripes per width token (focus ring in Electric Green).

**Q3: Grid and Iconography — how to handle TBD icon library?**
Options: Column overlay demo + placeholder boxes / skip stories / table only
**Selected:** Column overlay demo (Grid) + placeholder boxes (Iconography) — no real icons needed; canvas/live-area diagram shows the 24px icon system.

---

## Area 4: CI + Hosting

**Q1: CI system and job type?**
Options: GitHub Actions build check only / GitHub Actions + deploy to Pages / no CI
**Selected:** GitHub Actions build check only — `.github/workflows/storybook.yml` runs `npm run build-storybook` on push/PR. No deployment.

**Q2: Phase 2 done-bar?**
Options: build-storybook exits 0 + all 8 story files / dev server loads / build exits 0 only
**Selected:** `build-storybook exits 0` + all 8 story files in `stories/` + GitHub Actions workflow file exists.

---

## Claude's Discretion Notes

- Storybook version: latest 8.x
- CSS styling in stories: inline styles from token values
- Color story layout: semantics first (grouped by role), primitives below
- Addon selection: minimal (no controls needed for static token docs)
- `package.json` script names for `storybook` and `build-storybook`

## Deferred Ideas

- GitHub Pages deployment — post-Phase-2 follow-up
- Chromatic visual regression — future enhancement
- Dark mode story variants — pending dark token authoring
- Real icons in Iconography story — pending icon library decision
- ROADMAP.md Phase 3 needs updating from "Flutter" to "React Native Paper" before Phase 3 planning
