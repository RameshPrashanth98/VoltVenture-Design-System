# Technology Stack

**Project:** VoltVenture Design System — Token Infrastructure
**Researched:** 2026-07-24
**Updated:** 2026-07-25 — Platform changed from Flutter to React Native Paper.
**Confidence note:** External network access (WebSearch, WebFetch) was unavailable during this research session. All version data and recommendations are drawn from training knowledge (cutoff August 2025). Versions marked with * should be verified against npm before locking a `package.json`.

---

## Recommended Stack

### Token Pipeline

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `style-dictionary` | `^4.3` * | W3C DTCG JSON → TypeScript, Tailwind config, RN StyleSheet | v4 is the first version with native `$type`/`$value` DTCG support; v3 required a custom parser. ESM-first, async transforms, built-in `ts` formatter. The industry standard with no serious competitor. |
| Node.js | `>=20 LTS` | Build environment for Style Dictionary | Style Dictionary v4 requires Node 18+; use 20 LTS for long-term stability. |

### React Native Runtime

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| React Native | `>=0.73` * | Cross-platform UI runtime (iOS/Android) | Stable LTS channel. Components in future phases are React Native Paper widgets. |
| `react-native-paper` | `^5.x` * | MD3 component library and theming API | Provides `MD3LightTheme`, `configureFonts()`, and `<PaperProvider theme={...}>` — the integration point for generated token constants. |
| `expo-google-fonts` | per-font pkg * | Declarative loading of Inter, Manjari, JetBrains Mono | `@expo-google-fonts/inter`, `@expo-google-fonts/manjari` — handles font loading in Expo/RN. Fallback: bundle `.ttf` files via `expo-font` if a font package is unavailable. |

**Note on Manjari:** Verify `@expo-google-fonts/manjari` exists in the expo-google-fonts monorepo — Manjari is less common. OFL license permits bundling the `.ttf` as a fallback via `expo-font`.

**Note on token package shape:** The Style Dictionary pipeline runs on Node.js and outputs TypeScript source files. The consuming React Native app imports the generated TypeScript package as a local npm dependency. The token package is an npm package (not a Dart/pub package).

### Package Build

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `style-dictionary` | `^4.3` * | Node.js build tool that transforms W3C DTCG JSON → TypeScript source files | Runs at design system build time. Outputs `voltventure_tokens.ts` (typed TS constants) and `voltventure_theme.ts` (RN Paper theme factory). |
| TypeScript | `^5.4` * | Token output format and typing for SD config and build scripts | Generated token constants and theme file are TypeScript. `tsc --noEmit` validates the output instead of `dart analyze`. |

### Documentation

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `@storybook/react` | `^8.2` * | Storybook core for web renderer | Token documentation (color swatches, spacing rulers, type specimens) is purely visual HTML/CSS — no Flutter or RN renderer needed. Storybook Web is easier to host and share than device-based tools. |
| `@storybook/addon-docs` | `^8.2` * | MDX-based token docs | Included in Storybook 8 defaults. |

**Note:** `react-native-web` is not required for token documentation. Token stories use plain HTML/CSS (`div`, `span`, `p`) with inline styles sourced from the generated token JS reference output. No RN renderer runs in Storybook for Phase 1. For future component documentation, consider Storybook RN or Chromatic as a React Native component documentation tool — out of scope for the token infrastructure phase.

### Accessibility / Validation

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `wcag-contrast` | `^3.0` * | WCAG 2.1 contrast ratio calculation | Lightweight (< 1 kB), no dependencies, direct `contrast(hex, hex)` API. Used in the Style Dictionary Node.js build step to assert all text/bg token pairs meet AA at build time. Fails the build rather than producing a warning. Platform-agnostic — works regardless of Flutter/RN target. |

---

## Alternatives Considered

| Category | Recommended | Alternative | Why Not |
|----------|-------------|-------------|---------|
| Token pipeline | Style Dictionary v4 | Theo (Salesforce), Supernova, Amazon Ion | Style Dictionary is the only open-source tool with native W3C DTCG `$type`/`$value` support in v4. Others require proprietary formats or paid platforms. |
| Token pipeline version | Style Dictionary v4 | Style Dictionary v3 | v3 requires a custom `parser` to understand `$type`/`$value` syntax. The spec already uses DTCG format — using v3 would mean writing and maintaining a custom parser from day one. |
| RN component platform | React Native Paper | Flutter, Tamagui, Gluestack | React Native Paper provides a first-class Material Design 3 theming API (`MD3LightTheme`, `configureFonts`) that maps directly to VoltVenture token categories. Eliminates need for custom styling layers. |
| RN theming | React Native Paper MD3 theme | NativeWind, Tamagui, custom StyleSheet | RN Paper's MD3 theme is the native theming API for this stack. Tokens map directly to MD3 color roles and type scale — no extra styling layer needed. |
| Token package shape | npm package (local path dep) | Dart package (pub.dev) | The consuming app is React Native. Generated TypeScript files are distributed as an npm package. |
| Storybook renderer | Storybook Web (plain HTML/CSS) | Storybook RN, Chromatic | For token documentation (swatches, rulers, specimens) plain HTML/CSS is sufficient. Storybook RN is the right tool for component documentation in future phases. |
| Font loading | `expo-google-fonts` packages | Bundled `.ttf` via `expo-font` | `expo-google-fonts` handles font loading automatically in Expo/RN. Bundle `.ttf` directly only if a font package is unavailable. |
| Contrast validation | `wcag-contrast` (Node.js, build-time) | `color2k`, `chroma-js`, manual formula | Platform-agnostic — runs in the Style Dictionary Node.js pipeline regardless of the Flutter target. Same rationale as before. |

---

## Package Shape

The design system has two layers:

1. **Node.js build layer** — Style Dictionary pipeline (runs at token build time, not shipped)
2. **npm package** — generated TypeScript source files consumed by the React Native Paper app

```
voltventure_design_system/
  tokens/                        # Source W3C DTCG JSON (input to SD pipeline)
    primitive/
      color.json
      typography.json
      spacing.json
      elevation.json
      radius.json
      border.json
      grid.json
      iconography.json
    semantic/
      color.json
      typography.json
  style-dictionary.config.mjs    # SD v4 ESM config (Node.js)
  package.json                   # Node.js deps (style-dictionary, wcag-contrast, typescript, etc.)
  lib/                           # Generated TypeScript output (from SD pipeline)
    voltventure_tokens.ts        # All token constants (typed hex strings, numbers)
    voltventure_theme.ts         # React Native Paper MD3 theme factory
  .storybook/                    # Storybook Web for token documentation
  stories/                       # HTML/CSS token stories (no RN renderer needed)
```

**Consuming React Native app `package.json`:**

```json
{
  "dependencies": {
    "voltventure_design_system": "file:../voltventure_design_system",
    "react-native-paper": "^5.x"
  }
}
```

**Node.js `package.json` scripts (for the SD pipeline):**

```json
{
  "scripts": {
    "build:tokens": "node style-dictionary.config.mjs",
    "validate": "node scripts/validate-contrast.mjs",
    "build": "npm run validate && npm run build:tokens",
    "storybook": "storybook dev -p 6006",
    "build-storybook": "storybook build"
  }
}
```

---

## Style Dictionary v4 Configuration

Style Dictionary v4 changed significantly from v3. Key points for this project:

**W3C DTCG format**: Enable with `usesDtcg: true` in the config. This tells SD to read `$type` and `$value` keys instead of `category`/`value`.

**ESM config file**: SD v4 defaults to `style-dictionary.config.mjs` (ESM). Do not use CommonJS `style-dictionary.config.js` unless `"type": "commonjs"` in package.json.

**Dimension transform for React Native**: The spec uses `"16pt"` format (e.g. `"$value":"16pt"`). SD v4's built-in `size/pxToRem` transform does not apply here. Write a custom transform that strips `"pt"` and returns a number — React Native StyleSheet expects numeric values, not strings with units.

**Shadow type**: The `$type: "shadow"` tokens (elevation) are an object value in DTCG. SD v4 supports this natively but needs a custom formatter to produce RN-compatible shadow style objects (iOS `shadow*` props, Android `elevation`).

**TypeScript output**: SD v4 has a built-in `javascript/es6` formatter. For typed exports, use the `typescript/es6-declarations` formatter (added in v4) or write a custom formatter that produces `export const colorActionPrimary = "#C6FF2D" as const`.

**Conceptual config skeleton** (not final — implementation will refine):

```javascript
// style-dictionary.config.mjs
import StyleDictionary from 'style-dictionary';

const sd = new StyleDictionary({
  usesDtcg: true,               // <-- critical for $type/$value
  source: ['tokens/**/*.json'],
  platforms: {
    ts: {
      transformGroup: 'js',
      transforms: ['name/camel', 'voltventure/dimension/number'],
      buildPath: 'generated/',
      files: [/* per-category files */],
    },
    tailwind: {
      transformGroup: 'js',
      buildPath: 'generated/',
      files: [{ destination: 'tailwind-tokens.js', format: 'javascript/es6' }],
    },
    reactNative: {
      transformGroup: 'react-native',  // SD v4 has a built-in RN group
      buildPath: 'generated/',
      files: [/* stylesheet-compatible output */],
    },
  },
});

await sd.buildAllPlatforms();
```

**Breaking change from v3**: The `StyleDictionary` class is now instantiated with `new StyleDictionary(config)` and `buildAllPlatforms()` is async. The v3 pattern of `StyleDictionary.extend(config).buildAllPlatforms()` still works in v4 but is deprecated. Use the new class pattern.

---

## React Native Paper Theme Integration

The generated TypeScript output from Style Dictionary provides two files:

**`voltventure_tokens.ts`** — typed constants:

```ts
// AUTO-GENERATED — DO NOT EDIT. Run 'npm run build:tokens' to regenerate.

// Primitive: Color
export const colorGreen500 = '#C6FF2D';
export const colorBlack = '#0F0F0F';
export const colorWhite = '#FFFFFF';

// Semantic: Color
export const colorActionPrimary = colorGreen500;
export const colorActionPrimaryFg = colorBlack;
export const colorSurfaceBase = colorWhite;
export const colorTextPrimary = colorBlack;

// Semantic: Spacing (logical pixels)
export const space400 = 16;
export const space500 = 20;

// Semantic: Radius
export const radiusXl = 28;
export const radiusFull = 999;
```

**`voltventure_theme.ts`** — React Native Paper MD3 theme factory:

```ts
// AUTO-GENERATED — DO NOT EDIT.

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
      background: tokens.colorSurfaceBase,
      onBackground: tokens.colorTextPrimary,
      surface: tokens.colorSurfaceBase,
      onSurface: tokens.colorTextPrimary,
      secondary: tokens.colorActionSecondary,
      onSecondary: tokens.colorActionSecondaryFg,
      outline: tokens.colorBorderSubtle,
    },
  };
}
```

**Consuming React Native app:**

```tsx
import { PaperProvider } from 'react-native-paper';
import { createVoltVentureTheme } from 'voltventure_design_system/voltventure_theme';

const theme = createVoltVentureTheme();

<PaperProvider theme={theme}>
  <App />
</PaperProvider>
```

Tokens are also available as raw constants: `<View style={{ backgroundColor: tokens.colorActionPrimary }} />`.

---

## TypeScript Output Notes

- Color values are hex strings: `'#C6FF2D'` (RN Paper MD3 theme uses hex color strings)
- Dimension values are plain JS numbers: `16` not `"16pt"` (RN StyleSheet uses unitless numbers)
- Line height is absolute pt value (RN uses absolute lineHeight, not a multiplier like Flutter)
- `letterSpacing` in RN is in logical pixels — same unit as Flutter but different from CSS em; SD formatter converts from spec em values if needed

---

## Storybook Web Setup (Token Documentation)

Token documentation uses Storybook Web with plain HTML/CSS — no Flutter or RN renderer required.

**.storybook/main.ts**:

```typescript
import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  framework: '@storybook/react-vite',
  stories: ['../stories/**/*.stories.@(ts|tsx|mdx)'],
  addons: ['@storybook/addon-docs', '@storybook/addon-essentials'],
};

export default config;
```

Stories import from a JS reference output that Style Dictionary generates alongside the Dart output (same token values, JS format for use in Storybook). No `react-native-web` alias needed.

**Note on future component docs:** For Flutter widget documentation in future phases, evaluate [Widgetbook](https://widgetbook.io) — it is the established Flutter-native alternative to Storybook. This is out of scope for the token infrastructure phase.

---

## React Native Font Loading — Manjari Note

**Verify `@expo-google-fonts/manjari` availability** in the expo-google-fonts monorepo before Phase 1 implementation.

**Fallback**: Bundle `.ttf` directly via `expo-font`:

```ts
import * as Font from 'expo-font';

await Font.loadAsync({
  'Manjari-Regular': require('./assets/fonts/Manjari-Regular.ttf'),
  'Manjari-Bold': require('./assets/fonts/Manjari-Bold.ttf'),
});
```

OFL license permits bundling. Confirm Manjari licensing for any wordmark/commercial use per the spec's open item.

---

## Known Compatibility Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| Style Dictionary v4 `$type: "shadow"` → RN Paper | MEDIUM | SD v4 parses shadow objects natively but built-in formats output CSS `box-shadow`. RN Paper needs `shadowColor`, `shadowOffset`, `shadowOpacity`, `shadowRadius` (iOS) + `elevation` (Android). Write a custom TS formatter for elevation tokens. |
| Style Dictionary v4 `$type: "dimension"` with `"pt"` suffix | MEDIUM | The spec uses `"16pt"` as the `$value`. SD's built-in transforms strip `px`, not `pt`. Custom transform `voltventure/dimension/stripPt` returns a raw number. RN uses unitless numbers in StyleSheet. |
| RN Paper MD3 color role mapping | MEDIUM | RN Paper `MD3LightTheme.colors` uses specific MD3 role names (`primary`, `onPrimary`, `surface`, etc.). Ensure semantic token names map correctly to MD3 roles in the theme factory. |
| `@expo-google-fonts/manjari` availability | LOW | Verify in expo-google-fonts monorepo. Fallback: bundle `.ttf` via `expo-font`. |
| Style Dictionary v4 — TypeScript formatter | LOW | SD v4 has a built-in `javascript/es6` formatter. A typed TS output may need a custom formatter for strict typing. Plan for iteration. |

---

## Installation

**Node.js side** (Style Dictionary pipeline — runs the token build):

```bash
# In the design system root (Node.js tooling):
npm install

# Build tokens (generates lib/*.dart + stories JS reference)
npm run build
```

Node.js `package.json` dev dependencies (simplified):

```bash
# Token pipeline (build-time, never shipped to Flutter)
npm install -D style-dictionary typescript

# Documentation (Storybook Web, build-time)
npm install -D @storybook/react-vite @storybook/addon-docs @storybook/addon-essentials

# Validation (WCAG contrast check, build-time)
npm install -D wcag-contrast
```

**React Native app side** (consuming app):

```json
// In the VoltVenture RN app's package.json:
{
  "dependencies": {
    "voltventure_design_system": "file:../voltventure_design_system",
    "react-native-paper": "^5.x",
    "@expo-google-fonts/inter": "*",
    "@expo-google-fonts/manjari": "*"
  }
}
```

```bash
# In the VoltVenture RN app:
npm install
```

**First action for Phase 1 implementation:** Run `npm info style-dictionary version` to confirm current SD v4 version, then verify `@expo-google-fonts/manjari` availability in the expo-google-fonts monorepo.

---

## Sources

All findings based on training knowledge through August 2025. No live documentation was accessible during this research session due to tool restrictions.

| Source | Confidence | Note |
|--------|------------|------|
| Style Dictionary v4 docs (styledictionary.com) | MEDIUM | V4 release and DTCG support confirmed; exact patch version unverified |
| Flutter docs (docs.flutter.dev) | MEDIUM | ThemeData / ColorScheme / TextTheme API confirmed stable; verify current Flutter SDK version |
| `google_fonts` Flutter package | MEDIUM | Method-based API confirmed; Manjari availability LOW confidence |
| Storybook 8 docs (storybook.js.org) | MEDIUM | Storybook 8 stable release confirmed |
| npm / pub.dev package versions | LOW | All versions marked with * must be verified before locking |

**First actions for Phase 1 implementation:**
1. `npm info style-dictionary version` — confirm SD v4 current version
2. `flutter --version` — confirm Flutter SDK version in target environment
3. Verify `GoogleFonts.manjari()` availability: create a minimal Flutter test project and call `GoogleFonts.manjari()`
4. Confirm no existing SD community Dart formatter before writing from scratch (search pub.dev and GitHub)
