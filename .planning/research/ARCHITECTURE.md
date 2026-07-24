# Architecture Patterns: VoltVenture Design System Token Infrastructure

**Domain:** Design token pipeline — Style Dictionary → TypeScript + React Native Paper
**Researched:** 2026-07-24
**Updated:** 2026-07-25 — Platform changed from Flutter to React Native Paper.
**Overall confidence:** HIGH for Style Dictionary v4 pipeline patterns and three-tier architecture; MEDIUM for RN Paper-specific output (TS formatter, MD3 theme mapping).

> **PLATFORM MIGRATION NOTE (updated 2026-07-25)**
> This document was originally authored for React Native / Expo / NativeWind, then updated for Flutter (2026-07-24), then updated again for **React Native Paper** (2026-07-25).
>
> **What stays the same:** W3C DTCG JSON source structure, Style Dictionary v4 pipeline, three-tier token architecture, token naming convention, WCAG validation, Storybook Web for token documentation, npm package shape.
>
> **What changes from Flutter:** All platform outputs. Instead of Dart constants + Flutter ThemeData factory, the pipeline emits **TypeScript constants** (`voltventure_tokens.ts`) and a **React Native Paper MD3 theme factory** (`voltventure_theme.ts`). No `pubspec.yaml`, no `dart analyze`, no `google_fonts` Flutter package.
>
> **Key RN Paper architecture questions to resolve:**
> 1. SD v4 TypeScript formatter — use built-in `javascript/es6` or write a typed custom formatter
> 2. RN Paper MD3 color role mapping — ensure semantic tokens map to the correct `MD3LightTheme.colors` keys
> 3. `configureFonts()` usage for type scale in RN Paper theme
> 4. RN shadow props for elevation tokens (iOS `shadow*` + Android `elevation`)
> 5. `tsc --noEmit` replaces `dart analyze lib/` as the done-bar validation step

---

## Style Dictionary v4 vs v3 — Which to Use

**Recommendation: Style Dictionary v4.**

Confidence: HIGH.

Style Dictionary v3 was the long-running stable release. v4 (released 2024) introduced native W3C DTCG support. The distinction matters here:

| Concern | v3 | v4 |
|---------|----|----|
| W3C DTCG JSON (`$type`, `$value`) | Requires a preprocessor plugin | Parsed natively — no adapter needed |
| Token references (`{color.green.500}`) | Proprietary `{color.green.500}` syntax | Same syntax, now spec-compliant |
| Config format | JSON or JS, `platforms` key | JS/ESM config, same `platforms` key with expanded API |
| Transform API | `transform` functions returning strings | Same plus async support, `filter` replaces `matcher` |
| Built-in transform groups | `react-native` group available | `react-native` group updated; `js/module` format updated |
| Breaking changes | — | `matcher` renamed to `filter`; `value` renamed to `$value` in output; format APIs updated |

The foundations spec already writes tokens in DTCG format (`"$type": "color"`, `"$value": "#C6FF2D"`). Use v4 so the source files are valid without a preprocessing step. Any tutorial or blog post written before 2024 will show v3 APIs — treat them as references only, verify against the v4 docs.

---

## Token Source File Organisation

### One File Per Category (Recommended)

Do not put all tokens in a single JSON file. Style Dictionary v4 accepts a glob of source files and deep-merges them. Use one file per token category:

```
tokens/
  primitive/
    color.json        # color.green.*, color.grey.*, color.black, color.white
    spacing.json      # space.050 through space.1600
    radius.json       # radius.xs through radius.full, radius.icon
    typography.json   # font.family.*, font.size.*, font.weight.*, font.lineHeight.*
    elevation.json    # elevation.flat, elevation.raised, elevation.floating, elevation.overlay
    border.json       # border.width.*
    grid.json         # grid.columns, grid.margin, grid.gutter, grid.contentWidth
    iconography.json  # icon.size.*, icon.canvas, icon.liveArea
  semantic/
    color.json        # color.surface.*, color.text.*, color.action.*, color.border.*, color.status.*
    typography.json   # type scale styles bundled from primitives
  component/          # Empty in v1 — placeholder for future component tokens
    .gitkeep
```

Rationale for this split:
- Primitive tier and semantic tier live in separate directories — Style Dictionary resolves references (`{color.green.500}`) across files, so the split is purely organisational.
- Per-category files make PR reviews human-readable. A change to `primitive/color.json` is immediately recognisable.
- The `component/` directory is stubbed now so the build config does not need structural changes when component tokens arrive.

### How Aliases Are Handled Across Tiers

Style Dictionary resolves references at build time. In `semantic/color.json`:

```json
{
  "color": {
    "action": {
      "primary": {
        "$type": "color",
        "$value": "{color.green.500}"
      },
      "primary.fg": {
        "$type": "color",
        "$value": "{color.grey.950}"
      }
    },
    "surface": {
      "base": {
        "$type": "color",
        "$value": "{color.white}"
      }
    }
  }
}
```

Style Dictionary v4 resolves `{color.green.500}` by walking the merged token tree — the reference path matches the JSON key path. Both files are listed in the `source` glob and merged before transform runs. No special configuration is needed for cross-file references.

**Dot-in-key vs nested object — important decision.** The foundations spec shows `"color.action.primary.fg"` as a token name. In DTCG JSON this must be expressed as nested objects, not a flat key with dots. The dot notation is only the resolved name after Style Dictionary transforms the nested structure:

```json
{
  "color": {
    "action": {
      "primary": {
        "fg": {
          "$type": "color",
          "$value": "{color.grey.950}"
        }
      }
    }
  }
}
```

Style Dictionary joins the key path with a configurable separator (default `.`) to produce the token name `color.action.primary.fg`. This is already the correct convention; no extra naming transform is needed.

---

## Build Pipeline Architecture

> Platform outputs below have been updated to reflect Flutter. The pipeline structure (SD v4 config, three platforms, async build) remains the same.

### When Style Dictionary Runs

Run at **publish time** (pre-built outputs committed to or included in the package), not at consumer install time.

Rationale:
- Consumer apps (especially Expo managed workflow) must not run a Node build tool during `metro bundler` startup. Tailwind config files are `require()`-ed synchronously.
- Generated TypeScript constants are pre-typed — the consumer's `tsc` should never need to trigger Style Dictionary.
- The package ships its outputs as static files; consumers import them directly.

During **development** of the design system package itself, Style Dictionary runs in watch mode (`style-dictionary build --watch`) to regenerate outputs as source JSON changes.

The build pipeline therefore has two phases:

| Phase | Trigger | Command |
|-------|---------|---------|
| Dev iteration | Source token change | `style-dictionary build --watch` |
| Pre-publish | `npm run build` | `style-dictionary build` then `tsc` |
| Consumer install | `npm install voltventure-design-system` | Nothing — outputs already present |

### Style Dictionary Config (`style-dictionary.config.mjs`)

Style Dictionary v4 prefers an ESM config file. Three platforms are needed:

1. **`ts/constants`** — typed TypeScript constants (`voltventure_tokens.ts`) consumed by RN Paper components
2. **`rn/theme`** — React Native Paper MD3 theme factory (`voltventure_theme.ts`) wiring tokens to RN Paper's theming API
3. **`js/reference`** — plain JS object for Storybook stories (HTML/CSS token documentation)

```
style-dictionary.config.mjs
```

Platform outputs:

```
lib/
  voltventure_tokens.ts     # TypeScript typed constants (hex strings, numbers)
  voltventure_theme.ts      # React Native Paper MD3 theme factory
generated/
  tokens.js                 # JS reference object for Storybook stories
```

---

## Component Boundaries

```
┌─────────────────────────────────────────────────────────────┐
│  Token Source (tokens/)                                      │
│  DTCG JSON — human-authored, primitive + semantic tiers      │
└────────────────────────┬────────────────────────────────────┘
                         │ style-dictionary build (Node.js)
                         ▼
┌─────────────────────────────────────────────────────────────┐
│  Style Dictionary v4 (build tool, not a runtime dep)         │
│  Transforms: value resolution → platform format → file write │
└──────┬──────────────────┬──────────────────┬───────────────┘
       │                  │                  │
       ▼                  ▼                  ▼
┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ lib/         │  │ lib/             │  │ generated/       │
│ voltventure  │  │ voltventure      │  │ tokens.js        │
│ _tokens.ts   │  │ _theme.ts        │  │ (JS ref object)  │
│ typed hex    │  │ RN Paper MD3     │  │                  │
│ strings,     │  │ theme factory    │  │                  │
│ numbers      │  │ MD3LightTheme    │  │                  │
└──────┬───────┘  └──────┬───────────┘  └────────┬─────────┘
       │                  │                       │
       ▼                  ▼                       ▼
┌──────────────┐  ┌──────────────────┐  ┌──────────────────┐
│ RN Paper     │  │ VoltVenture RN   │  │ Storybook Web    │
│ components   │  │ app              │  │ (token docs)     │
│ (raw consts) │  │ PaperProvider(   │  │ HTML/CSS stories │
│              │  │  theme=          │  │                  │
│              │  │  createVolt      │  │                  │
│              │  │  VentureTheme()) │  │                  │
└──────────────┘  └──────────────────┘  └──────────────────┘
```

### What Talks to What

| Component | Inputs | Outputs | Runtime? |
|-----------|--------|---------|----------|
| Token JSON source files | Human authoring | Style Dictionary input | No |
| Style Dictionary v4 (Node.js) | Token JSON | `lib/*.ts`, `generated/tokens.js` | Build only |
| `lib/voltventure_tokens.ts` | — | Typed TS constants (hex strings, numbers) | Yes (RN component import) |
| `lib/voltventure_theme.ts` | — | RN Paper MD3 theme factory | Yes (`PaperProvider` theme prop) |
| `generated/tokens.js` | — | JS reference object | Dev/docs only (Storybook) |
| Storybook Web | `generated/tokens.js` | Token documentation UI (HTML/CSS) | Dev/docs only |
| Consumer RN app | `voltventure_tokens.ts`, `voltventure_theme.ts` | Styled RN Paper components | Yes |

---

## Data Flow: Source JSON to Consumer Flutter App

```
1. Author edits tokens/primitive/color.json
   └── Adds color.grey.600 = #6B6B6B

2. Style Dictionary build runs (Node.js)
   ├── Reads: tokens/**/*.json (glob)
   ├── Merges: primitive + semantic into one token tree
   ├── Resolves: {color.green.500} → #C6FF2D everywhere it appears
   └── Runs each platform transform chain:

   Platform: ts/constants
   ├── Transform: name/camel (color.action.primary → colorActionPrimary)
   ├── Transform: voltventure/color/hex (hex string passthrough)
   ├── Transform: voltventure/dimension/number ("16pt" → 16)
   ├── Transform: voltventure/shadow/rn (DTCG shadow → RN shadow props)
   └── Format: custom TS formatter → lib/voltventure_tokens.ts

   Platform: rn/theme
   ├── (same transforms)
   └── Format: custom RN Paper theme formatter → lib/voltventure_theme.ts

   Platform: js/reference
   ├── Transform: name/camel
   ├── Transform: color/hex
   └── Format: javascript/es6 → generated/tokens.js (for Storybook)

3. WCAG contrast validation (runs before/alongside SD build)
   └── Checks all semantic text/bg pairs → fails build on violation

4. npm publish / local path dependency
   └── lib/*.ts included; tokens/ excluded from published package

5. Consumer: VoltVenture React Native app
   ├── package.json: "voltventure_design_system": "file:../voltventure_design_system"
   ├── import { colorActionPrimary } from 'voltventure_design_system/voltventure_tokens';
   ├── import { createVoltVentureTheme } from 'voltventure_design_system/voltventure_theme';
   └── <PaperProvider theme={createVoltVentureTheme()}>...</PaperProvider>

6. RN Paper component consumes tokens
   ├── <View style={{ backgroundColor: colorActionPrimary }} />  // raw constant
   └── theme.colors.primary  // via PaperProvider theme context
```

---

## Package Structure and Exports

### Directory Layout

```
voltventure_design_system/
├── tokens/                    # Source — DTCG JSON (not shipped)
│   ├── primitive/
│   └── semantic/
├── lib/                       # Generated TypeScript output — included in npm package
│   ├── voltventure_tokens.ts     # typed hex strings, numbers
│   └── voltventure_theme.ts      # RN Paper MD3 theme factory
├── generated/                 # Generated JS reference — excluded from npm package
│   └── tokens.js              # For Storybook stories
├── .storybook/                # Storybook config for Web
│   ├── main.ts
│   └── preview.ts
├── stories/                   # Token documentation stories (HTML/CSS)
│   ├── Color.stories.tsx
│   ├── Typography.stories.tsx
│   ├── Spacing.stories.tsx
│   └── ...
├── style-dictionary.config.mjs
├── package.json               # Node.js tooling (SD, Storybook, wcag-contrast, typescript)
└── tsconfig.json              # TypeScript config (for SD config, lib output, Storybook)
```

**Note on `lib/` in npm packages:** The `lib/` directory is the public API surface of the npm package. Generated `.ts` files go in `lib/`. The `tokens/` DTCG JSON source and `generated/` JS reference are excluded via `.npmignore`.

---

## React Native Paper Token Output

### TypeScript Constants Output (`lib/voltventure_tokens.ts`)

The primary developer API for accessing tokens in RN Paper components. Generated by a Style Dictionary TS formatter.

```ts
// lib/voltventure_tokens.ts (generated — do not edit)
// AUTO-GENERATED by Style Dictionary. Run 'npm run build:tokens' to regenerate.

// ── Primitive: Color ──────────────────────────────────────────
export const colorGreen500 = '#C6FF2D';
export const colorGrey050  = '#FAFAFA';
export const colorBlack    = '#0F0F0F';
export const colorWhite    = '#FFFFFF';

// ── Semantic: Color ───────────────────────────────────────────
export const colorActionPrimary   = colorGreen500;
export const colorActionPrimaryFg = colorBlack;
export const colorSurfaceBase     = colorWhite;
export const colorTextPrimary     = colorBlack;

// ── Semantic: Spacing ─────────────────────────────────────────
export const space400 = 16;
export const space500 = 20;

// ── Semantic: Radius ──────────────────────────────────────────
export const radiusXl   = 28;
export const radiusFull = 999;

// ── Semantic: Elevation ───────────────────────────────────────
export const elevationRaised = {
  shadowColor: '#0F0F0F',
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.12,
  shadowRadius: 8,
  elevation: 2,
};
```

**Key TS formatting rules (implemented in the custom formatter):**
- Colors: `#RRGGBB` hex string passthrough (RN Paper uses hex strings natively)
- Dimensions: `"16pt"` → `16` (JS number, no unit strings — RN StyleSheet is unitless)
- Elevation: DTCG `$type: shadow` object → RN shadow prop object (iOS `shadow*` + Android `elevation`)
- Line height: absolute pt value (RN `lineHeight` is absolute, not a multiplier)
- Name transform: `color.action.primary` → `colorActionPrimary` (camelCase)

### React Native Paper Theme Factory (`lib/voltventure_theme.ts`)

```ts
// lib/voltventure_theme.ts (generated — do not edit)

import { MD3LightTheme } from 'react-native-paper';
import type { MD3Theme } from 'react-native-paper';
import * as tokens from './voltventure_tokens';

export function createVoltVentureTheme(): MD3Theme {
  return {
    ...MD3LightTheme,
    colors: {
      ...MD3LightTheme.colors,
      primary: tokens.colorActionPrimary,
      onPrimary: tokens.colorActionPrimaryFg,
      surface: tokens.colorSurfaceBase,
      onSurface: tokens.colorTextPrimary,
      secondary: tokens.colorActionSecondary,
      onSecondary: tokens.colorActionSecondaryFg,
      outline: tokens.colorBorderSubtle,
    },
  };
}
```

---

## Storybook Web Setup

### Architecture: Plain HTML/CSS (No Flutter Renderer)

Token documentation stories use plain HTML/CSS in React (Storybook's default). No Flutter renderer, no `react-native-web` alias needed. Stories import from `generated/tokens.js` (the JS reference output from Style Dictionary).

Configuration in `.storybook/main.ts`:

```typescript
// .storybook/main.ts
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
}

export default config
```

### What Token Stories Show

Token stories document values visually. Each story imports from `generated/tokens.js` and renders swatches, type specimens, spacing bars using plain `div`/`span` with inline styles.

```tsx
// stories/Color.stories.tsx
import tokens from '../generated/tokens.js'

export const ColorPalette = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
    {Object.entries(tokens.color.action).map(([name, value]) => (
      <div key={name} style={{ background: value, width: 80, height: 80, borderRadius: 8 }}>
        <span style={{ fontSize: 11 }}>{name}</span>
        <span style={{ fontSize: 11 }}>{value}</span>
      </div>
    ))}
  </div>
)
```

### Future Component Documentation (Out of Scope for v1)

For documenting Flutter widgets in future component phases, evaluate [Widgetbook](https://widgetbook.io) — the Flutter-native Storybook alternative. Widgetbook runs as a Flutter app and renders actual widgets with knobs. This is out of scope for the token infrastructure phase.

Confidence: HIGH — Plain HTML/CSS Storybook stories have no platform dependencies.

---

## Suggested Build Order

Order is driven by dependency chains. Each step must be complete before the next is unblocked.

### Phase 1: Foundation (nothing else can start without this)

1. **Package scaffolding** — `package.json`, `tsconfig.json`, `.gitignore`, dev dependencies installed (`style-dictionary@^4`, `typescript`)
2. **Style Dictionary config** — `style-dictionary.config.mjs` with three platform definitions, even with empty token source files
3. **Token source skeleton** — one file per category under `tokens/primitive/` and `tokens/semantic/`, each with correct DTCG JSON structure (even if values are placeholder)
4. **Verify build runs** — `style-dictionary build` produces output files without errors

### Phase 2: Primitive tokens

5. **Color primitives** — all grey ramp, green ramp, black, white values
6. **Spacing primitives** — all 11 space.* tokens
7. **Radius primitives** — all 7 radius.* tokens plus `radius.full`
8. **Typography primitives** — font families, all 14 type scale values (size, lineHeight, weight, letterSpacing)
9. **Elevation primitives** — 4 elevation tokens with custom RN shadow transform
10. **Border primitives** — 4 border width tokens
11. **Grid/iconography constants** — not aliases, straight value tokens

### Phase 3: Semantic tokens

12. **Semantic color** — all `color.surface.*`, `color.text.*`, `color.action.*`, `color.border.*`, `color.status.*` referencing primitives
13. **Semantic typography** — type scale style bundles (each bundle composes font family + size + weight + lineHeight + tracking from primitives)

### Phase 4: Platform output validation

14. **Verify Dart output compiles** — run `dart analyze lib/voltventure_tokens.dart` in the generated package; confirm no type errors
15. **Verify ThemeData factory** — create a minimal Flutter test app, apply `voltVentureTheme()`, run `flutter build apk --debug` to confirm no runtime errors
16. **Verify JS reference output** — load `generated/tokens.js` in a minimal Node.js script, confirm all token values are resolved (no curly-brace reference strings)

### Phase 5: Storybook

17. **Install Storybook** — `@storybook/react-vite`, `@storybook/addon-docs`, `@storybook/addon-essentials`
18. **Write token stories** — one story per category, importing from `generated/tokens.js` using plain HTML/CSS
19. **WCAG contrast validation** — CI script using `wcag-contrast` package against resolved token values

### Phase 6: Packaging

20. **Verify `pubspec.yaml`** — confirm `dart pub publish --dry-run` succeeds (or local path dep works in test Flutter app)
21. **Confirm no generated files are stale** — CI regenerates tokens and diffs against committed `lib/*.dart`; fails if outputs diverge

---

## Architecture Anti-Patterns to Avoid

### Anti-Pattern 1: Hand-Writing `dist/` Files
**What:** Editing generated output files directly
**Why bad:** Next `style-dictionary build` overwrites them. Silent regressions.
**Prevention:** Add `dist/` to `.gitignore` during development; only include in npm publish via `files` in `package.json`, or commit only on publish. Either way, `dist/` is never hand-edited.

### Anti-Pattern 2: Running Style Dictionary at Consumer Install Time
**What:** Putting `style-dictionary build` in a `postinstall` script
**Why bad:** Consumer app build pipelines (Expo EAS, CI) should not require Style Dictionary as a dependency. It also slows installs and can fail in restricted environments.
**Prevention:** Pre-build before `npm publish`. Ship `dist/` in the package.

### Anti-Pattern 3: Primitive Tokens Consumed Directly by Components
**What:** A component imports `colorGreen500` instead of `colorActionPrimary`
**Why bad:** Bypasses the tier architecture. When the brand green changes, the primitive updates but the component does not follow automatically.
**Prevention:** Enforce via linting rule (ESLint custom rule) that flags direct primitive token imports in component files. Only semantic tokens are public API.

### Anti-Pattern 4: ESM-Only Tailwind Output
**What:** Outputting `dist/tailwind.js` as ES module (`export default`)
**Why bad:** NativeWind v4 / Tailwind v3 config is loaded with `require()`. ESM-only exports fail in CJS context without special loader config that consumer apps should not be required to set up.
**Prevention:** Ensure the Tailwind formatter outputs `module.exports = {...}`. The `exports` map in `package.json` can expose this as `"require": "./dist/tailwind.js"`.

### Anti-Pattern 5: Embedding Unit Strings in RN Tokens
**What:** `dist/tokens.rn.ts` exports `"16pt"` instead of `16`
**Why bad:** `StyleSheet.create({ padding: "16pt" })` throws a runtime error. React Native expects numbers for numeric style properties.
**Prevention:** Apply the `size/unitless` transform (strips `pt`, `px`, `rem` suffixes, returns number) to all dimension tokens in the `react-native` platform.

### Anti-Pattern 6: Dot-Separated Keys in DTCG JSON
**What:** Authoring `"color.action.primary": { "$value": "..." }` as a flat key
**Why bad:** Not valid DTCG — the key must be a plain identifier. Style Dictionary parses nested objects, not dot-separated flat keys.
**Prevention:** Always use nested JSON. The dot-notation name is produced by Style Dictionary's name join transform, not authored directly.

### Anti-Pattern 7: Single Giant Token File
**What:** All tokens in `tokens/tokens.json`
**Why bad:** Merge conflicts, no categorical organisation, impossible to review in PRs, future Figma Variables sync tools expect per-category files.
**Prevention:** One file per category as described above.

---

## Scalability Considerations

| Concern | Now (token-only v1) | Future (with components) | Notes |
|---------|---------------------|--------------------------|-------|
| Build time | <5s (SD JSON transform) | <30s (SD + tsc --noEmit) | Style Dictionary is fast; tsc grows with component count |
| Package size | <10kB (TS source) | Grows with components | Tokens are tiny; `react-native-paper` is the main size contribution |
| Dark mode | Semantic tokens defined but not exported for dark | Separate SD platform output for dark MD3 theme | `createVoltVentureThemeDark()` alongside `createVoltVentureTheme()` |
| Motion tokens | Not in scope v1 | Add `tokens/primitive/motion.json` | No architectural change needed |
| RN Web | Not in scope v1 | Token constants are platform-agnostic; RN Paper has web support via `react-native-web` | No output format change needed |
| Component documentation | Storybook Web (HTML/CSS) | Storybook RN or Chromatic for RN Paper components | Separate tool; does not affect token pipeline |

---

## Open Questions for Phase Research

1. **TypeScript formatter for Style Dictionary v4:** SD v4 has a built-in `javascript/es6` formatter. For fully typed TS output (`export const colorActionPrimary: string = ...`), a custom formatter may be needed. Research `typescript/es6-declarations` and `javascript/module-flat` built-in formats first.

2. **RN Paper MD3 color role mapping:** Verify the complete `MD3LightTheme.colors` key list in the current `react-native-paper` v5 release. Map semantic tokens to the correct MD3 role names (`primary`, `onPrimary`, `primaryContainer`, `secondary`, `surface`, `background`, `outline`, etc.).

3. **`configureFonts()` for type scale in RN Paper:** RN Paper v5 exposes `configureFonts({ config: { displayLarge: { ... } } })`. Investigate whether the theme factory should use `configureFonts()` for font configuration or if font styles are applied per-component. The token type scale has 14 slots that map to MD3 type scale variants.

4. **Squircle/continuous corner for `radius.icon`:** Same question as before — the `22.37%` squircle constant is proportional, not a fixed dp. In RN, `borderRadius` takes absolute values. The squircle constant may need to be a separate named value applied proportionally to widget size.

5. **`lib/` generated file strategy for npm package:** The npm package's `lib/` files are generated TypeScript. Committing generated files to git is a standard pattern for published packages. Confirm this for the team's workflow and add CI regeneration + diff check.

---

## Sources

All findings from training data (cutoff August 2025):

| Source | Confidence | Notes |
|--------|-----------|-------|
| Style Dictionary v4 API (styledictionary.com) | HIGH | Stable release as of training cutoff |
| W3C Design Tokens Community Group spec | HIGH | DTCG format is the basis for SD v4 |
| NativeWind v4 documentation (nativewind.dev) | MEDIUM | Stable but rapidly evolving; verify Tailwind v3/v4 relationship at implementation time |
| Storybook react-native-web pattern | MEDIUM | Long-standing pattern; main.ts alias API is stable |
| Expo package.json `exports` support | MEDIUM | Enabled in Expo SDK 50+ (Metro 0.80+) but requires explicit opt-in |
| VoltVenture Foundations v0.1 spec (`voltventure-foundations.html`) | HIGH | Canonical source for token values, naming, and tier architecture |
