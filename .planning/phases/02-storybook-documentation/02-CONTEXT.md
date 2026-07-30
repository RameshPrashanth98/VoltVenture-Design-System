# Phase 2: Storybook Documentation — Context

**Gathered:** 2026-07-30
**Status:** Ready for planning

<domain>
## Phase Boundary

Configure Storybook 8 with `@storybook/html-vite` and author 8 token documentation stories (Color, Typography, Spacing, Radius, Elevation, Border, Grid, Iconography) using `generated/tokens.js` as the data source. Stories are plain HTML template functions — no component framework. Add a GitHub Actions CI job that runs `build-storybook` on every push/PR.

Phase 2 is complete when `npm run build-storybook` exits 0, all 8 story files exist in `stories/`, and the GitHub Actions workflow passes.

NOT in Phase 2 scope:
- Deploying Storybook to GitHub Pages or Chromatic
- Storybook interaction tests / play functions
- Dark mode story variants
- Real icon SVGs in the Iconography story (placeholder boxes only)

</domain>

<decisions>
## Implementation Decisions

### D-01: Storybook Framework — @storybook/html-vite
Use `@storybook/html-vite` (pure HTML template stories). No React or other component framework. PROJECT.md intent ("plain HTML/CSS stories — no RN renderer needed") is preserved. Stories export functions that return HTML template literal strings.

```js
// Pattern for every story
export default { title: 'Foundation/Color' };
export const Palette = () => `<div>...</div>`;
```

### D-02: Story File Format and Location
- **Format:** `.js` files (plain ES modules — consistent with `sd-transforms/*.mjs` and `generated/tokens.js`)
- **Location:** `stories/` at project root (e.g., `stories/color.stories.js`)
- **Storybook glob:** `stories/**/*.stories.js`
- **Title pattern:** `'Foundation/Color'`, `'Foundation/Typography'`, etc.

### D-03: 8 Required Story Files
All 8 must exist for the done-bar to pass:
1. `stories/color.stories.js`
2. `stories/typography.stories.js`
3. `stories/spacing.stories.js`
4. `stories/radius.stories.js`
5. `stories/elevation.stories.js`
6. `stories/border.stories.js`
7. `stories/grid.stories.js`
8. `stories/iconography.stories.js`

### D-04: Token Data Source
Stories import from `generated/tokens.js` (the SD `javascript/es6` output — all primitives + semantics as camelCase ES6 exports, including 14 typography composite objects). Run `npm run build:tokens` before `storybook dev` to ensure this file is fresh.

```js
import * as tokens from '../generated/tokens.js';
```

### D-05: Typography Font Loading — Google Fonts CDN
Load Manjari, Inter, and JetBrains Mono via Google Fonts in `.storybook/preview-head.html`. Type specimens render accurately in the browser. Internet connection required during dev.

```html
<!-- .storybook/preview-head.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### D-06: Typography Specimen Copy — Real VoltVenture Copy
Each of the 14 type style specimens uses contextual text from the app's real UI scenarios (not lorem ipsum). Claude's discretion for the exact copy — examples:
- `display.xl` → "Good morning, Arjun"
- `heading.lg` → "My Rewards"
- `body.md` → "Estimated arrival in 4 minutes"
- `overline` → "SAFETY STATUS" (uppercase per spec)
- `numeric.lg` → "1,247" (tabular-nums)

Each specimen row should show: rendered text + token name + size/weight/lineHeight metadata.

### D-07: Spacing and Radius — Scaled Visual Bars / Boxes
- **Spacing story:** Rows of horizontal colored bars, bar width = token value in px. Token name + value below each. Space scale from space050 (2px) to space1600 (64px).
- **Radius story:** Grid of squares with border-radius applied per token. Token name + value below each. All 7 radius tokens (xs → 2xl + full).

### D-08: Elevation — Live CSS Shadow Demo
4 cards on a light grey canvas (`#f5f5f5` background), each with `box-shadow` derived from the elevation token object values:
- flat: no shadow
- raised: `0 2px 8px rgba(15,15,15,0.06)`
- floating: `0 8px 24px rgba(15,15,15,0.10)`
- overlay: `0 16px 48px rgba(15,15,15,0.16)`

The shadow color in `generated/tokens.js` uses `#0F0F0FXX` 8-char hex where XX is the alpha byte — convert to `rgba()` for CSS.

### D-09: Border — Width Stripe Demo
4 horizontal lines showing each border-width token as a visible border:
- none (0px) — labeled but not visible
- hairline (1px)
- strong (1.5px)
- focus (2px, colored Electric Green `#c6ff2d` with a black bg swatch to show it)

### D-10: Grid — Column Overlay Demo
Visual showing the 4-column grid on a 393px-wide container:
- 16px margins on each side
- 4 fluid columns separated by 16px gutters
- 361px total content width labeled
- Annotations: gridMargin, gridGutter, gridContentWidth, gridColumns, gridTouchTarget values

### D-11: Iconography — Placeholder Boxes (No Real Icons)
The icon library is TBD per PROJECT.md. Show the size hierarchy using placeholder squares:
- 4 boxes at sizes: 16px (xs), 20px (sm), 24px (md/default), 32px (lg)
- For the 24px (md) box: show the outer canvas (24px) with an inner live-area rectangle (20px) to illustrate the 2px padding rule
- Token values: iconCanvas, iconLiveArea, iconPadding, iconSizeXs/Sm/Md/Lg

### D-12: CI — GitHub Actions Build Check
Add `.github/workflows/storybook.yml`:
- Triggers: `push` and `pull_request` on `main`
- Job: `npm ci` → `npm run build:tokens` → `npm run build-storybook`
- No deployment — CI artifacts only
- `build-storybook` added to `package.json` scripts

### D-13: Phase 2 Done-Bar
Phase 2 is complete when:
1. `npm run build-storybook` exits 0 (storybook-static/ produced)
2. All 8 story files exist in `stories/`
3. GitHub Actions workflow file exists at `.github/workflows/storybook.yml`

NOT required for Phase 2:
- Deployed URL
- Visual regression tests
- Storybook interaction tests

### Claude's Discretion
- Storybook version pinning (use latest Storybook 8.x)
- CSS styling approach for stories (inline styles from token values, or a minimal `preview.css` with design-system-consistent defaults)
- Color story layout (swatch grid vs list; how many columns; whether to separate primitives from semantics visually — reasonable default: semantics first, primitives collapsed or below)
- Exact `.storybook/main.js` addon selection (minimal addons — no controls required for static token docs)
- `storybook` and `build-storybook` script names in package.json

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Token Data
- `generated/tokens.js` — Primary token data source for all stories. Contains: all primitive + semantic tokens as camelCase ES6 exports; 14 typography composite objects (`typeDisplayXl`, `typeBodyMd`, etc.); elevation objects with `{ color, offsetX, offsetY, blur, spread }`; flat dimension numbers.
- `tokens/semantic/color.json` — Semantic color token source (13 color tokens with descriptions).
- `tokens/semantic/typography.json` — 14 semantic typography composites with `$description` strings used for specimen copy context.
- `tokens/primitive/` — Primitive token sources for all 8 categories.

### Project Context
- `.planning/PROJECT.md` — Requirements, constraints, three-tier architecture, out-of-scope items.
- `.planning/ROADMAP.md` — Phase 2 deliverables list, scope boundary.
- `.planning/phases/01-token-pipeline-dart-output/01-CONTEXT.md` — Phase 1 decisions (token naming, SD pipeline, WCAG rules).

### Phase 1 Output (what Phase 2 consumes)
- `generated/tokens.js` — built by `npm run build:tokens` (must be current before running Storybook)
- `lib/voltventure_tokens.ts` — TS version (not used by stories, but confirms semantic token names)
- `style-dictionary.config.mjs` — SD build config (understand before adding any SD changes)

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `generated/tokens.js` — all token values already resolved and exported; stories can import directly. No need to import from `tokens/**/*.json` or parse DTCG format in stories.
- `package.json` `"type": "module"` — project is ESM. Storybook's Vite bundler handles this correctly; story imports use `import * as tokens from '../generated/tokens.js'` with explicit `.js` extensions.
- `npm run build:tokens` — run before `storybook dev` or `build-storybook` to ensure tokens.js is current.

### Established Patterns
- **Naming convention:** camelCase in JS — `colorActionPrimary`, `typeDisplayXl`, `space400`, `radiusFull`. Stories reference these names directly.
- **Shadow format in tokens.js:** elevation objects have `{ color: "#0F0F0F1A", offsetX: 0, offsetY: 8, blur: 24, spread: 0 }`. The color is 8-char RRGGBBAA hex — stories must convert to CSS `rgba()` for `box-shadow`.
- **Typography composites in tokens.js:** `typeDisplayXl = { fontFamily: "Manjari", fontSize: 40, fontWeight: 700, lineHeight: 42, letterSpacing: 0 }`. Map to CSS: `font-family`, `font-size: 40px`, `font-weight`, `line-height: 42px`, `letter-spacing: 0em`.
- **Color format:** lowercase `#rrggbb` hex strings (from `color/hex` transform). Valid CSS.

### Integration Points
- Storybook Vite config uses the existing `vite.config.js` if present (none exists — Storybook will generate a default; that's fine).
- `npm run build:tokens` must run before `npm run build-storybook` in CI (tokens.js must be generated first).
- `.github/workflows/storybook.yml` integrates with the main branch protection checks.

</code_context>

<specifics>
## Specific Ideas

**Color story:** semantics-first layout — show semantic color groups (surface, text, action, border, status) as labeled swatch rows. Below that, show the primitive palette (grey ramp, green ramp, black/white). Each swatch: colored square + token name + hex value. Background of the swatch section should be `colorSurfaceBase` (#ffffff) to test contrast in context.

**Shadow conversion helper:** The `elevationRaised.color` value `#0F0F0F0F` is in RRGGBBAA format. CSS `box-shadow` needs `rgba(15,15,15,alpha)`. The AA byte (last 2 chars) divided by 255 gives the alpha. Write a small inline helper in the elevation story.

**Overline specimen:** must render as uppercase (CSS `text-transform: uppercase`) and with `letter-spacing: 0.12em` (from `typeOverline.letterSpacing` = 0.12 — already in em units in tokens.js).

**Numeric specimens:** should use `font-variant-numeric: tabular-nums` (per PROJECT.md typography rules).

</specifics>

<deferred>
## Deferred Ideas

- **GitHub Pages deployment** — deploy Storybook to a live URL. Out of Phase 2 scope; can be a follow-up once Phase 2 CI check is stable.
- **Chromatic visual regression testing** — add Chromatic integration for screenshot diffing. Future enhancement.
- **Dark mode story variants** — semantic dark surface tokens aren't authored yet (ROADMAP backlog).
- **Real icon SVGs in Iconography story** — deferred until icon library is decided (PROJECT.md: "existing icon library TBD").
- **ROADMAP.md Phase 3 update** — Phase 3 still says "Flutter App Integration." Needs updating to "React Native Paper App Integration" before Phase 3 planning. Note this before Phase 3 discuss-phase.

</deferred>

---

*Phase: 02-storybook-documentation*
*Context gathered: 2026-07-30 (discuss-phase, all 4 areas)*
