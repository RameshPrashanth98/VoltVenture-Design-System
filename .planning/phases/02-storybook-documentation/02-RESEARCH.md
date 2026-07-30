# Phase 2: Storybook Documentation — Research

**Researched:** 2026-07-30
**Domain:** Storybook 10 + @storybook/html-vite, HTML template stories, GitHub Actions CI
**Confidence:** HIGH

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

- **D-01:** Use `@storybook/html-vite` (pure HTML template stories, no React or other framework). Stories export functions that return HTML template literal strings.
- **D-02:** Story files are `.js` (plain ES modules) in `stories/` at project root. Glob: `stories/**/*.stories.js`. Title pattern: `'Foundation/Color'`, etc.
- **D-03:** 8 required story files: color, typography, spacing, radius, elevation, border, grid, iconography.
- **D-04:** Import token data from `../generated/tokens.js` (ES6 exports, camelCase). Run `npm run build:tokens` before storybook dev/build.
- **D-05:** Google Fonts CDN via `.storybook/preview-head.html` — Manjari, Inter, JetBrains Mono.
- **D-06:** Real VoltVenture copy for typography specimens (not lorem ipsum).
- **D-07:** Spacing bars (width = px value) and Radius boxes (border-radius applied).
- **D-08:** Elevation — 4 cards with box-shadow from elevation token objects. Shadow color in 8-char RRGGBBAA hex, must convert to `rgba()`.
- **D-09:** Border — 4 stripe demo lines for the 4 border-width tokens.
- **D-10:** Grid — 4-column column overlay on 393px container with annotations.
- **D-11:** Iconography — placeholder boxes at 4 sizes (16/20/24/32px), 24px box shows canvas + live-area.
- **D-12:** GitHub Actions CI at `.github/workflows/storybook.yml` — push and PR on main, runs `npm ci` → `npm run build:tokens` → `npm run build-storybook`.
- **D-13:** Done-bar: `npm run build-storybook` exits 0, all 8 story files exist, `.github/workflows/storybook.yml` exists.

### Claude's Discretion

- Storybook version pinning (use latest Storybook 10.x — current: 10.5.5).
- CSS styling approach for stories (inline styles from token values, or a minimal `preview.css`).
- Color story layout (swatch grid vs list; semantics-first is recommended in CONTEXT.md specifics).
- Exact `.storybook/main.js` addon selection (minimal addons — no controls required).
- `storybook` and `build-storybook` script names in package.json.

### Deferred Ideas (OUT OF SCOPE)

- GitHub Pages / Chromatic deployment
- Storybook interaction tests / play functions
- Dark mode story variants
- Real icon SVGs in Iconography story
- ROADMAP.md Phase 3 update (do before Phase 3 discuss-phase, not now)
</user_constraints>

---

## Summary

Storybook has reached version 10 (current: 10.5.5) as of mid-2025, not v8 as originally assumed in the phase description. The upgrade from v8 to v10 is significant: Storybook 10 is ESM-only, drops all CommonJS support, and requires Node 20.16+ or 22.12+ or 24+. This project runs Node v24.14.0, which satisfies the requirement. Storybook 10 also drops the separately-installed `@storybook/addon-essentials` package (now empty since Storybook 9); essentials are built into the core.

The `@storybook/html-vite` framework renders stories that return either HTML strings (template literals) or DOM elements — both are accepted by the `@storybook/html` renderer, which uses `innerHTML` for strings and `appendChild` for DOM nodes. The CONTEXT.md pattern (`export const Palette = () => \`<div>...</div>\``) is the correct CSF2 function-style approach, which remains fully supported in Storybook 10 alongside CSF3 objects. For pure documentation stories (no args/controls needed), the CSF2 function-return-string pattern is the simplest and most appropriate choice.

The project's `"type": "module"` in package.json is handled correctly by Storybook 10 since its config files (`.storybook/main.js`) are now required to be valid ESM — no `.cjs` workarounds needed. The Vite builder supports `"type": "module"` without additional configuration.

**Primary recommendation:** Install Storybook 10 via `npm create storybook@latest --type html`, configure `.storybook/main.js` as ESM with `framework: '@storybook/html-vite'`, write all 8 story files as CSF2 function exports returning template literal strings, and add the GitHub Actions workflow with `npm ci` → `npm run build:tokens` → `npm run build-storybook`.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Token data source | Build pipeline (generated/tokens.js) | — | Phase 1 output; stories import, do not regenerate |
| Story rendering | Browser (Storybook preview iframe) | — | Storybook's Vite dev server serves HTML string output |
| Font loading | CDN (Google Fonts) | Browser cache | preview-head.html injects link tags; no server-side font serving needed |
| Shadow conversion (hex→rgba) | Story JS logic | — | Inline helper in elevation story; pure string manipulation |
| Build verification | CI runner (GitHub Actions) | — | build-storybook emits storybook-static/, exit code is the gate |
| Static output | File system (storybook-static/) | — | Vite bundles everything to static directory; no server needed |

---

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| storybook | 10.5.5 | Core orchestration, CLI, dev server | Current major version; ESM-only, required for Node 24 |
| @storybook/html-vite | 10.5.5 | Framework adapter: HTML template stories + Vite builder | The only first-party framework for plain HTML stories with Vite |
| @storybook/html | 10.5.5 | HTML renderer (peer dep of html-vite) | Bundled via html-vite; handles string and DOM element story returns |
| @storybook/builder-vite | 10.5.5 | Vite-based bundler for Storybook | Bundled via html-vite; required peer dep |
| vite | 8.1.5 (installed) | Module bundler / dev server | Already installed; html-vite peer dep accepts ^5.0.0–^8.0.0 |

**[VERIFIED: npm registry]** — all versions confirmed via `npm view` on 2026-07-30.

### Not Needed (Storybook 10 Change)

| Package | Why Not Needed |
|---------|---------------|
| @storybook/addon-essentials | **Empty since Storybook 9, not published in Storybook 10.** Essentials are built into core. DO NOT install. |
| @storybook/addon-interactions | Empty since Storybook 9. DO NOT install. |
| @storybook/addon-links | Empty since Storybook 9. DO NOT install. |
| @storybook/blocks | Empty since Storybook 9 (aliased to addon-docs/blocks). DO NOT install separately. |

### Optional Addons

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @storybook/addon-docs | 8.6.14 | Auto-generated docs pages from stories | Only if MDX documentation pages are wanted — NOT required for Phase 2 (pure visual token stories, no DocsPage needed) |

For Phase 2 (static visual token docs, no interactive controls, no MDX), the `addons: []` array in `main.js` can be empty or omitted. The core essentials (backgrounds, viewport, toolbar) are built-in.

**Installation:**

```bash
npm create storybook@latest --type html
```

This installs `storybook`, `@storybook/html-vite`, and scaffolds `.storybook/main.js` and `package.json` scripts.

For a manual install (no wizard):

```bash
npm install --save-dev storybook @storybook/html-vite
```

**Version verification (run before executing the plan):**

```bash
npm view storybook version           # should be 10.5.5+
npm view @storybook/html-vite version # should match storybook
npm view vite version               # should be ^5 through ^8
```

---

## Package Legitimacy Audit

> slopcheck was unavailable at research time. All packages are tagged [ASSUMED] and the planner must gate each install behind a checkpoint:human-verify task OR confirm via the steps below before automated install.

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| storybook | npm | 11+ yrs | 10M+/wk | github.com/storybookjs/storybook | [ASSUMED] | Approved — flagship package, unambiguous identity |
| @storybook/html-vite | npm | 3+ yrs | 100K+/wk | github.com/storybookjs/storybook | [ASSUMED] | Approved — official scoped package under storybookjs org |
| @storybook/builder-vite | npm | 3+ yrs | 5M+/wk | github.com/storybookjs/storybook | [ASSUMED] | Approved — official; bundled with html-vite |
| vite | npm | 5+ yrs | 30M+/wk | github.com/vitejs/vite | [ASSUMED] | Already installed in project (v8.1.5) |

**Packages removed due to slopcheck [SLOP] verdict:** none

**Packages flagged as suspicious [SUS]:** none identified

*slopcheck was unavailable at research time. Planner should add a `checkpoint:human-verify` task before the install wave if policy requires it. These packages are well-established ecosystem staples; risk of hallucination is near-zero.*

**Manual legitimacy verification (run if checkpoint needed):**

```bash
npm view storybook version homepage
npm view @storybook/html-vite version homepage
# Confirm homepage is storybook.js.org and version is 10.x
```

---

## Architecture Patterns

### System Architecture Diagram

```
tokens/primitive/*.json + tokens/semantic/*.json
            |
     [npm run build:tokens]
            |
            v
   generated/tokens.js  ←── stories/*.stories.js import from here
            |                        |
            |                [storybook dev / build-storybook]
            |                        |
            v                        v
   (not consumed by SB)     .storybook/
                             ├── main.js      (framework config + stories glob)
                             └── preview-head.html (Google Fonts CDN link tags)
                                      |
                                      v
                            Vite dev server / build
                                      |
                                      v
                              Browser preview iframe
                              (renders HTML strings via innerHTML)
                                      |
                              [npm run build-storybook]
                                      |
                                      v
                            storybook-static/   ← CI artifact, done-bar gate
```

**Data flow for a single story:**

```
import * as tokens from '../generated/tokens.js'
         |
         v
export const Palette = () => `
  <div style="background:${tokens.colorActionPrimary}">...</div>
`
         |
         v
@storybook/html renderer → sets root element innerHTML = returned string
         |
         v
Browser renders swatch in preview iframe
```

### Recommended Project Structure

```
.storybook/
├── main.js              # Framework config (ESM, must NOT use require())
└── preview-head.html    # Google Fonts CDN link tags only
stories/
├── color.stories.js
├── typography.stories.js
├── spacing.stories.js
├── radius.stories.js
├── elevation.stories.js
├── border.stories.js
├── grid.stories.js
└── iconography.stories.js
generated/
└── tokens.js            # Phase 1 output — DO NOT edit manually
.github/
└── workflows/
    └── storybook.yml
```

### Pattern 1: Storybook 10 main.js Config (ESM)

**What:** The required `.storybook/main.js` configuration for `@storybook/html-vite`. Must be valid ESM — `require()` and `__dirname` are not available in Storybook 10 config.

**When to use:** Always — this is the mandatory config file.

```javascript
// Source: storybook.js.org/docs/api/main-config/main-config + npm registry verification
/** @type {import('@storybook/html-vite').StorybookConfig} */
const config = {
  framework: '@storybook/html-vite',
  stories: ['../stories/**/*.stories.js'],
  addons: [],   // empty — essentials are built-in in Storybook 10
};

export default config;
```

**Notes:**
- `addons: []` is correct for Phase 2. Essential panels (backgrounds, viewport) are built into Storybook 10 core — no `@storybook/addon-essentials` needed.
- `stories` glob uses explicit `.js` extension to match the project's plain JS story files.
- TypeScript type annotation via JSDoc comment enables IDE hints without requiring `tsconfig.json` changes.

### Pattern 2: HTML Story File (CSF2 Function Style)

**What:** The story format for all 8 token doc stories. Named exports are functions that return HTML strings (template literals). The `@storybook/html` renderer detects string return values and sets them as `innerHTML` on the story root.

**When to use:** For all 8 Phase 2 stories. CSF2 function style is simpler and more appropriate than CSF3 objects when there are no args/controls.

```javascript
// Source: @storybook/html renderer source (render.ts) + CONTEXT.md D-01 decision
import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Color',
};

export const Palette = () => `
  <div style="padding: 24px; font-family: Inter, sans-serif;">
    <h2 style="font-size: 15px; font-weight: 600; margin-bottom: 16px;">Semantic Colors</h2>
    <!-- swatch rows here -->
  </div>
`;
```

**Key facts:**
- The renderer accepts both HTML strings and DOM elements (HTMLElement). Template literals are confirmed valid.
- `{{key}}` placeholder syntax is NOT used here — args interpolation is a CSF3 args feature. For static token docs without args, just embed token values directly in the template.
- Named exports MUST use PascalCase (Storybook convention: `export const Palette`, not `export const palette`).
- Default export must have `title` — the slash creates sidebar hierarchy (`'Foundation/Color'` → Foundation group, Color item).

### Pattern 3: Shadow (RRGGBBAA hex) → CSS rgba() Conversion

**What:** The `elevationRaised.color` value in `tokens.js` is `"#0F0F0F0F"` — 8-char RRGGBBAA hex. CSS `box-shadow` requires `rgba()`. The last 2 hex chars are the alpha byte.

**When to use:** In `elevation.stories.js` only.

```javascript
// Source: CONTEXT.md specifics + tokens.js inspection (2026-07-30)
/**
 * Convert #RRGGBBAA (8-char hex) to CSS rgba().
 * @param {string} hex8 — e.g. "#0F0F0F1A"
 * @returns {string} — e.g. "rgba(15, 15, 15, 0.10)"
 */
function hexToRgba(hex8) {
  const r = parseInt(hex8.slice(1, 3), 16);
  const g = parseInt(hex8.slice(3, 5), 16);
  const b = parseInt(hex8.slice(5, 7), 16);
  const a = (parseInt(hex8.slice(7, 9), 16) / 255).toFixed(2);
  return `rgba(${r}, ${g}, ${b}, ${a})`;
}

// Usage in elevation story:
import * as tokens from '../generated/tokens.js';

function shadowFromToken(token) {
  if (token === 'none') return 'none';
  const rgba = hexToRgba(token.color);
  return `${token.offsetX}px ${token.offsetY}px ${token.blur}px ${token.spread}px ${rgba}`;
}

export const Shadows = () => `
  <div style="background:#f5f5f5; padding:32px; display:flex; gap:24px;">
    <div style="box-shadow:${shadowFromToken(tokens.elevationFlat)}; ...">flat</div>
    <div style="box-shadow:${shadowFromToken(tokens.elevationRaised)}; ...">raised</div>
    <div style="box-shadow:${shadowFromToken(tokens.elevationFloating)}; ...">floating</div>
    <div style="box-shadow:${shadowFromToken(tokens.elevationOverlay)}; ...">overlay</div>
  </div>
`;
```

**Verified token values (from `generated/tokens.js` inspection 2026-07-30):**

| Token | color | offsetY | blur | Expected rgba |
|-------|-------|---------|------|---------------|
| elevationFlat | `"none"` | — | — | no shadow |
| elevationRaised | `"#0F0F0F0F"` | 2 | 8 | `rgba(15,15,15,0.06)` |
| elevationFloating | `"#0F0F0F1A"` | 8 | 24 | `rgba(15,15,15,0.10)` |
| elevationOverlay | `"#0F0F0F29"` | 16 | 48 | `rgba(15,15,15,0.16)` |

### Pattern 4: Typography CSS Mapping

**What:** `typeDisplayXl` composite objects in `tokens.js` map to CSS properties.

```javascript
// Source: tokens.js inspection (2026-07-30) + CONTEXT.md code_context
// tokens.typeDisplayXl = { fontFamily: "Manjari", fontSize: 40, fontWeight: 700, lineHeight: 42, letterSpacing: 0 }
// CSS mapping:
//   font-family: "Manjari"        → string, use in CSS font-family
//   font-size: 40px               → append "px" to the number
//   font-weight: 700              → use directly
//   line-height: 42px             → append "px" (RN uses absolute, CSS accepts absolute too)
//   letter-spacing: 0em           → append "em" (exception: overline = 0.12em, numerics = -0.02em)

function typeStyle(t) {
  return `font-family:'${t.fontFamily}';font-size:${t.fontSize}px;font-weight:${t.fontWeight};line-height:${t.lineHeight}px;letter-spacing:${t.letterSpacing}em`;
}
```

**Special cases:**
- `typeOverline` (`letterSpacing: 0.12`) → must also add `text-transform: uppercase` (CONTEXT.md D-06 specifics).
- Numeric styles (`typeNumericLg`, `typeNumericMd`) → must also add `font-variant-numeric: tabular-nums` (PROJECT.md requirement).

### Pattern 5: Google Fonts in preview-head.html

**What:** `.storybook/preview-head.html` injects HTML into the Storybook preview iframe `<head>` on every story. No HMR — requires server restart to pick up changes.

```html
<!-- Source: storybook.js.org/docs/configure/styling-and-css [CITED] -->
<!-- .storybook/preview-head.html -->
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Manjari:wght@100;400;700&family=Inter:ital,opsz,wght@0,14..32,400..700;1,14..32,400..700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

**Note:** The Storybook manager UI (sidebar) does NOT receive these head injections — `preview-head.html` only affects the preview iframe. This is the correct behavior since fonts are needed in the story canvas, not the Storybook chrome.

### Pattern 6: GitHub Actions Workflow

**What:** The CI workflow that runs `build-storybook` on push/PR to main.

```yaml
# Source: storybook.js.org/docs/sharing/publish-storybook + actions/setup-node docs [CITED]
# .github/workflows/storybook.yml
name: Build Storybook

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '24'
          cache: 'npm'
      - run: npm ci
      - run: npm run build:tokens
      - run: npm run build-storybook
```

**Notes:**
- `node-version: '24'` matches dev machine (v24.14.0). Use `'20'` for wider compatibility if needed — both are LTS and meet Storybook 10 minimum (20.16+).
- `cache: 'npm'` uses `package-lock.json` hash as cache key — speeds up subsequent runs.
- `npm run build:tokens` is mandatory before `build-storybook` — `generated/tokens.js` is not committed to git (it is generated output).
- No deployment step — D-12 explicitly excludes deployment.
- `actions/upload-artifact` is optional (D-13 only checks exit 0) — omit for simplicity.

### Pattern 7: package.json Scripts to Add

**What:** The Storybook scripts that must be added to `package.json`.

```json
{
  "scripts": {
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

**Notes:**
- `storybook build` is the Storybook 10 CLI command (same as `build-storybook` CLI in older versions).
- Port 6006 is the conventional Storybook dev port.
- `build-storybook` (hyphenated) is the CONTEXT.md D-12 and D-13 convention — matches the script name CI calls.
- Output directory: `storybook-static/` (Storybook default, not configurable without `--output-dir`).

### Anti-Patterns to Avoid

- **Using `require()` in .storybook/main.js:** Storybook 10 is ESM-only. `require()` and `module.exports` throw at startup. Use `import`/`export default` in all `.storybook/*.js` files.
- **Installing @storybook/addon-essentials:** This package is empty in Storybook 10. Installing it wastes a dependency entry and may log confusing warnings. Skip it entirely.
- **Running `storybook dev` before `npm run build:tokens`:** `generated/tokens.js` does not exist until the build step runs. Stories will fail to import it. Always run `build:tokens` first, or add it as a `predev` npm hook if desired.
- **Using `.cjs` for .storybook/main.js:** Not needed in Storybook 10 with `"type": "module"`. In fact, Storybook 10 REQUIRES the main config to be valid ESM — `.cjs` might not be recognized correctly.
- **Returning non-string, non-HTMLElement from story exports:** The HTML renderer only handles strings and DOM elements. Returning `null`, `undefined`, or a number silently renders nothing (no error). Always return a template literal string.
- **Lowercase named story exports:** `export const palette = () => ...` is not recognized as a story (Storybook ignores lowercase exports). Must be `export const Palette = () => ...`.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| RRGGBBAA → rgba conversion | A regex-heavy CSS preprocessor | A 5-line `hexToRgba()` JS function (Pattern 3 above) | Straightforward bit math; no library needed for 4 values |
| Font loading in Storybook | A custom webpack plugin or local font server | Google Fonts CDN via `preview-head.html` | D-05 decision; CDN handles all weights/variants; no local font files to manage |
| CSS variable theming | A CSS custom property system across stories | Inline `style` attributes directly from token values | Stories are static docs, not a component system; inline styles are simpler and self-documenting |
| Story glob discovery | Manual story registration | `stories: ['../stories/**/*.stories.js']` in main.js | Storybook handles glob expansion; adding a new story file auto-appears without config changes |
| Build artifact checking (CI) | A custom file existence validator | `npm run build-storybook` exit code + file existence check | The storybook build exits 0 only if all stories compile; file check is trivially `ls stories/*.stories.js \| wc -l` |

**Key insight:** Token documentation stories are intentionally simple — the hardest part is the 8-char hex → rgba conversion and the DTCG typography composite → CSS property mapping. Both are addressed by small, inline helper functions. No additional libraries beyond Storybook itself.

---

## Common Pitfalls

### Pitfall 1: Storybook Version Confusion (8 vs 10)

**What goes wrong:** Plan references Storybook 8 (the version in the phase description), but `npm create storybook@latest` installs v10 (10.5.5). If the plan specifies `@storybook/addon-essentials`, it installs an empty package and Storybook may log deprecation warnings or fail.

**Why it happens:** The phase description was written when Storybook 8 was current. Storybook had a major version jump: 8 → 9 (May 2024) → 10 (early 2025).

**How to avoid:** Always use `npm create storybook@latest` or `npm install storybook@latest`. Do NOT pin to `@8` in the install command. Verify version after install: `npm list storybook`.

**Warning signs:** If the installed version is 8.x or 9.x, or if `@storybook/addon-essentials` is listed as a non-empty dependency, the install has gone wrong.

### Pitfall 2: ESM Config File Contains CommonJS Syntax

**What goes wrong:** `.storybook/main.js` uses `module.exports = {...}` or `require()` — Storybook 10 fails to load the config with a syntax error.

**Why it happens:** All Storybook tutorial content pre-2024 shows CommonJS config. The migration to ESM-only was a Storybook 10 breaking change.

**How to avoid:** Use `export default config` in `main.js`. Never use `require()` or `__dirname`. Lint the file with `node --input-type=module < .storybook/main.js` to confirm it parses as ESM.

**Warning signs:** Error message: `Cannot use require() in ESM` or `Unexpected token 'export'`.

### Pitfall 3: generated/tokens.js Not Built Before Storybook Starts

**What goes wrong:** Running `npm run storybook` (or `npm run build-storybook`) before `npm run build:tokens` — stories fail to import `../generated/tokens.js` with a module not found error, or they import a stale file from a previous run.

**Why it happens:** `generated/tokens.js` is gitignored (it is generated output). It only exists after `npm run build:tokens` runs.

**How to avoid:** Always run `npm run build:tokens` first. In the CI workflow, `build:tokens` is an explicit step before `build-storybook`. For local dev, optionally add a `"predev"` or `"prestorybook"` script:
```json
"prestorybook": "npm run build:tokens"
```

**Warning signs:** `Error: Cannot find module '../generated/tokens.js'` in Storybook console.

### Pitfall 4: Lowercase Named Story Exports Silently Disappear

**What goes wrong:** Writing `export const palette = () => '<div>...</div>'` — Storybook ignores it and the story doesn't appear in the sidebar.

**Why it happens:** Storybook treats lowercase named exports as non-story exports (same convention as React hook names). CSF requires PascalCase story names.

**How to avoid:** All story named exports must start with an uppercase letter. `Palette`, `TypeScale`, `SpacingRamp`, etc.

**Warning signs:** Story file is listed in Storybook sidebar but shows zero stories under it (not even an error).

### Pitfall 5: preview-head.html Changes Require Storybook Restart

**What goes wrong:** Editing `.storybook/preview-head.html` (e.g., updating the Google Fonts URL) with Storybook dev server running — changes don't appear. Storybook appears to not load the new fonts.

**Why it happens:** `preview-head.html` is not subject to HMR. It is injected once at server start.

**How to avoid:** After any change to `preview-head.html`, stop and restart `npm run storybook`. This is a known Storybook limitation documented on the official styling page.

**Warning signs:** Fonts not rendering after editing the file; HMR notification shows but font still wrong.

### Pitfall 6: 8-Char Hex Alpha Off-By-One (Integer vs Rounded)

**What goes wrong:** Converting `#0F0F0F0F` alpha byte: `0x0F = 15`, `15/255 = 0.0588...` — CSS renders as approximately 6% opacity. If rounded to `0.06` directly, the shadow matches the design spec exactly. But if the developer hardcodes `0.059`, it is technically accurate but harder to match against spec values.

**Why it happens:** Floating-point hex division produces non-round numbers for design-spec shadow alphas.

**How to avoid:** Use `.toFixed(2)` in the `hexToRgba` helper (Pattern 3). For the 4 VoltVenture elevation shadows, the design spec values (`0.06`, `0.10`, `0.16`) round correctly from the hex bytes.

---

## Code Examples

### Complete minimal story file (color)

```javascript
// Source: CONTEXT.md D-01 pattern + @storybook/html renderer docs + tokens.js inspection
// stories/color.stories.js
import * as tokens from '../generated/tokens.js';

export default {
  title: 'Foundation/Color',
};

const swatch = (name, hex, label) => `
  <div style="display:flex;align-items:center;gap:12px;margin-bottom:8px;">
    <div style="width:48px;height:48px;border-radius:8px;background:${hex};border:1px solid #ebebeb;flex-shrink:0;"></div>
    <div>
      <div style="font-family:Inter,sans-serif;font-size:13px;font-weight:600;color:#0f0f0f;">${name}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:11px;color:#808080;">${hex}</div>
      <div style="font-family:Inter,sans-serif;font-size:11px;color:#808080;">${label}</div>
    </div>
  </div>
`;

export const SemanticColors = () => `
  <div style="padding:24px;background:${tokens.colorSurfaceBase};">
    <h2 style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;margin:0 0 16px;">Semantic Colors</h2>
    ${swatch('colorActionPrimary', tokens.colorActionPrimary, 'Primary CTA — Electric Green')}
    ${swatch('colorTextPrimary', tokens.colorTextPrimary, 'Primary text — Volt Black')}
    ${swatch('colorSurfaceBase', tokens.colorSurfaceBase, 'Base surface')}
    ${swatch('colorBorderFocus', tokens.colorBorderFocus, 'Focus ring — always green')}
  </div>
`;

export const PrimitiveGreyRamp = () => `
  <div style="padding:24px;">
    <h2 style="font-family:Inter,sans-serif;font-size:15px;font-weight:600;margin:0 0 16px;">Primitive Grey Ramp</h2>
    ${swatch('colorGrey050', tokens.colorGrey050, 'Grey 050')}
    ${swatch('colorGrey100', tokens.colorGrey100, 'Grey 100')}
    ${swatch('colorGrey200', tokens.colorGrey200, 'Grey 200')}
    ${swatch('colorGrey300', tokens.colorGrey300, 'Grey 300')}
    ${swatch('colorGrey500', tokens.colorGrey500, 'Grey 500 — Mid Gray')}
    ${swatch('colorGrey700', tokens.colorGrey700, 'Grey 700')}
    ${swatch('colorGrey800', tokens.colorGrey800, 'Grey 800 — Charcoal')}
    ${swatch('colorGrey900', tokens.colorGrey900, 'Grey 900')}
    ${swatch('colorGrey950', tokens.colorGrey950, 'Grey 950 — Volt Black alias')}
  </div>
`;
```

### Typography specimen row helper

```javascript
// Source: tokens.js inspection (2026-07-30) + CONTEXT.md D-06 + PROJECT.md typography rules
function specimen(tokenName, t, copy, extra = '') {
  const style = [
    `font-family:'${t.fontFamily}',sans-serif`,
    `font-size:${t.fontSize}px`,
    `font-weight:${t.fontWeight}`,
    `line-height:${t.lineHeight}px`,
    `letter-spacing:${t.letterSpacing}em`,
    `color:#0f0f0f`,
    extra,
  ].filter(Boolean).join(';');
  return `
    <div style="border-bottom:1px solid #ebebeb;padding:16px 0;display:grid;grid-template-columns:200px 1fr 180px;gap:16px;align-items:center;">
      <div style="font-family:Inter,sans-serif;font-size:11px;font-weight:600;color:#808080;">${tokenName}</div>
      <div style="${style}">${copy}</div>
      <div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:#808080;">
        ${t.fontSize}px / ${t.lineHeight}px / ${t.fontWeight}<br>${t.fontFamily}
      </div>
    </div>
  `;
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Storybook 8 + separate addon-essentials | Storybook 10, essentials built-in | Storybook 9 (2024), confirmed in 10 | Remove addon-essentials from install; no config entry needed |
| `npx storybook@8 init` | `npm create storybook@latest --type html` | Storybook 8.3 (mid-2023) | New create command; `--type html` selects html-vite framework |
| `.storybook/main.cjs` for ESM projects | `.storybook/main.js` is required to be valid ESM | Storybook 10 (2025) | No CJS workaround needed; ESM is now required, not optional |
| CSF3 story objects with `render:` | CSF2 function style still valid and preferred for static docs | Both supported in SB 10 | For token docs without args, `export const Story = () => \`<div>...\`` is simpler |

**Deprecated/outdated patterns for this project:**
- `@storybook/addon-essentials`: Empty package, do not install.
- `.storybook/main.cjs`: Not needed in SB10 + `"type":"module"` project — use `.storybook/main.js` with ESM syntax.
- `npx storybook@8 init`: Old init command — use `npm create storybook@latest`.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `npm create storybook@latest --type html` selects `@storybook/html-vite` without additional prompts | Standard Stack / Pattern 1 | If the `--type html` flag is not recognized or selects a different framework, the init will require interactive selection. Impact: low — wizard is interactive fallback. |
| A2 | Storybook 10 essentials (Actions, Backgrounds, Viewport, Controls) are built into core with no `addons` entry needed | Standard Stack | If any essentials require an explicit addon entry, the stories will render but the panel UI may be missing. Workaround: add `@storybook/addon-essentials` if needed (it may install as a thin wrapper). |
| A3 | `generated/tokens.js` is not committed to git (it is gitignored) | Architecture Patterns | If it IS committed, the CI `npm run build:tokens` step is still needed to ensure it is current, but the import won't fail on a fresh checkout. Impact: minor. |
| A4 | `vite@8.1.5` (currently installed) satisfies `@storybook/html-vite` peer dep `^5.0.0 \|\| ^6.0.0 \|\| ^7.0.0 \|\| ^8.0.0` | Standard Stack | Confirmed via `npm view @storybook/html-vite peerDependencies`. Risk: near-zero. |

---

## Open Questions

1. **Does `npm create storybook@latest --type html` work non-interactively?**
   - What we know: The `--type html` flag is documented. The wizard also asks "new to Storybook?" and configuration selection (Recommended vs Minimal).
   - What's unclear: Whether `--type html` bypasses all prompts or only the framework selection prompt.
   - Recommendation: Plan for interactive init (Wave 0 task is human-guided install), or use `npm install --save-dev storybook @storybook/html-vite` for fully scripted install and write `main.js` manually.

2. **Should `.gitignore` exclude `storybook-static/`?**
   - What we know: `storybook-static/` is the build output of `build-storybook`. It is regenerated on every build.
   - What's unclear: Whether Phase 1's `.gitignore` already covers it.
   - Recommendation: Add `storybook-static/` to `.gitignore` in Wave 0 if not already present.

3. **Does the existing `vite.config.js` absence matter?**
   - What we know: CONTEXT.md notes "none exists — Storybook will generate a default; that's fine." Storybook's Vite builder works without a project-level `vite.config.js`.
   - What's unclear: Nothing. The absence is confirmed fine.
   - Recommendation: Do not create a `vite.config.js`. Let Storybook manage its Vite config internally.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Storybook 10 (min 20.16+) | Yes | v24.14.0 | — |
| npm | npm ci in CI | Yes | (with Node 24) | — |
| vite | @storybook/html-vite peer dep | Yes (installed) | 8.1.5 | — |
| Internet (Google Fonts) | Typography story preview-head.html | Required for fonts in dev | — | Fonts fall back to system sans-serif; token values still correct |
| GitHub Actions runner | CI storybook.yml | Yes (ubuntu-latest) | — | — |
| generated/tokens.js | All 8 story files | Must be built first | — | Run `npm run build:tokens` |

**Missing dependencies with no fallback:** None.

**Missing dependencies with fallback:** Google Fonts CDN — stories render correctly with system fonts; only visual font fidelity is reduced during offline dev.

---

## Validation Architecture

> `workflow.nyquist_validation` is `false` in `.planning/config.json` — this section is SKIPPED per config.

---

## Security Domain

> Phase 2 has no authentication, no user input, no API endpoints, and no data persistence. Storybook generates a static site. GitHub Actions workflow uses only official actions (`actions/checkout@v4`, `actions/setup-node@v4`). No ASVS categories apply to a static documentation generator.

**Applicable ASVS categories:** None.

**Supply chain note:** The GitHub Actions workflow uses pinned action versions (`@v4`). The plan should NOT use `@latest` or `@main` for action references to avoid supply chain risk.

---

## Sources

### Primary (HIGH confidence)
- `generated/tokens.js` — direct file inspection (2026-07-30); all token names, shapes, and values verified.
- npm registry (`npm view @storybook/html-vite version peerDependencies`, etc.) — versions verified 2026-07-30.
- `@storybook/html` renderer source (GitHub, `render.ts`) — confirms string and DOM element both accepted; `innerHTML` used for strings.
- storybook.js.org/docs/configure/styling-and-css — confirmed `preview-head.html` usage for CDN fonts, HMR limitation.
- storybook.js.org/docs/sharing/publish-storybook — confirmed `storybook build` command and `storybook-static/` default output dir.

### Secondary (MEDIUM confidence)
- storybook.js.org/docs/api/main-config/main-config — main.js required fields (framework, stories), optional fields list.
- storybook.js.org/docs/addons/addon-migration-guide — confirmed addon-essentials/interactions/links/blocks are empty in SB10.
- storybook.js.org/blog/storybook-10/ — confirmed ESM-only, Node 20.16+/22.12+/24+ requirement, CSF Factories preview status.
- storybook.js.org/docs/releases/migration-guide — confirmed main.js must be valid ESM in SB10, `npx storybook@latest upgrade` path.
- GitHub html-vite template (Button.stories.ts, Button.ts) — confirmed CSF2 with render returning DOM element; string alternative confirmed by renderer source.

### Tertiary (LOW confidence / [ASSUMED])
- Package download counts and ages for the Package Legitimacy Audit table — estimated from general ecosystem knowledge, not verified via npm API directly.

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — package versions verified via npm registry; Storybook 10 ESM requirement confirmed via official blog + migration guide.
- Architecture: HIGH — tokens.js inspected directly; renderer source confirmed string acceptance; main.js config confirmed via official docs.
- Pitfalls: HIGH — version confusion (SB8 vs SB10) and ESM config requirement verified via official migration guide and GitHub issues.
- CI workflow: MEDIUM — YAML structure confirmed from official Storybook publish docs and actions/setup-node docs; exact flag behavior (`--type html` non-interactive) not 100% confirmed.

**Research date:** 2026-07-30
**Valid until:** 2026-08-30 (Storybook releases frequently; verify version before executing)
