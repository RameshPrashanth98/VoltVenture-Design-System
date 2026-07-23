# Technology Stack

**Project:** VoltVenture Design System — Token Infrastructure
**Researched:** 2026-07-24
**Confidence note:** External network access (WebSearch, WebFetch) was unavailable during this research session. All version data and recommendations are drawn from training knowledge (cutoff August 2025). Versions marked with * should be verified against npm before locking a `package.json`.

---

## Recommended Stack

### Token Pipeline

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `style-dictionary` | `^4.3` * | W3C DTCG JSON → TypeScript, Tailwind config, RN StyleSheet | v4 is the first version with native `$type`/`$value` DTCG support; v3 required a custom parser. ESM-first, async transforms, built-in `ts` formatter. The industry standard with no serious competitor. |
| Node.js | `>=20 LTS` | Build environment for Style Dictionary | Style Dictionary v4 requires Node 18+; use 20 LTS for long-term stability. |

### Flutter Runtime

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| Flutter SDK | `>=3.19` * | Cross-platform UI runtime (iOS/Android) | Stable channel; Flutter 3.19+ includes Material 3 ThemeData stabilisation. Components in future phases are Flutter widgets. |
| Dart SDK | `>=3.3` * | Language for generated token constants and consuming widgets | Dart 3.x records and patterns simplify typed token objects. Generated output from Style Dictionary targets Dart 3. |
| `google_fonts` | `^6.2` * | Declarative loading of Inter, JetBrains Mono (and Manjari if available) | Flutter pub package; handles font manifest registration. Preferred over manual `pubspec.yaml` asset bundling for Google Fonts. If Manjari is unavailable via `google_fonts`, fall back to bundling `.ttf` files in `assets/fonts/` and declaring them in `pubspec.yaml`. |

**Note on Manjari:** Verify `GoogleFonts.manjari()` resolves in the current `google_fonts` package version — Manjari is less common than Inter/JetBrains Mono. OFL license permits bundling the `.ttf` as a fallback.

**Note on token package shape:** The Style Dictionary pipeline runs on Node.js and outputs Dart source files. The consuming Flutter app imports the generated Dart package as a local path dependency in `pubspec.yaml`. The token package is a Dart package, not an npm package.

### Package Build

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `style-dictionary` | `^4.3` * | Node.js build tool that transforms W3C DTCG JSON → Dart source files | Runs at design system build time (not at Flutter build time). Custom Dart formatter outputs `voltventure_tokens.dart` with `const` Color, double, and TextStyle values. |
| Dart / `dart pub` | SDK-bundled | Dart package tooling for the consuming Flutter app | The generated token files are published as a Dart package. Consumed via `path:` dependency in the Flutter app's `pubspec.yaml` during development. |
| TypeScript | `^5.4` * | Typing for the Style Dictionary config and any Node.js build scripts | The SD config (`style-dictionary.config.mjs`) and custom Dart formatters are TypeScript. |

### Documentation

| Technology | Version | Purpose | Why |
|------------|---------|---------|-----|
| `@storybook/react` | `^8.2` * | Storybook core for web renderer | Token documentation (color swatches, spacing rulers, type specimens) is purely visual HTML/CSS — no Flutter or RN renderer needed. Storybook Web is easier to host and share than device-based tools. |
| `@storybook/addon-docs` | `^8.2` * | MDX-based token docs | Included in Storybook 8 defaults. |

**Note:** `react-native-web` is no longer required. Token stories use plain HTML/CSS (`div`, `span`, `p`) with inline styles sourced from the generated token JS reference output. No Flutter widget renderer runs in Storybook. For future component documentation, consider [Widgetbook](https://widgetbook.io) as a Flutter-native Storybook alternative — but that is out of scope for the token infrastructure phase.

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
| Flutter component platform | Flutter | React Native / Expo | Flutter provides a single, consistent widget model across iOS/Android. Eliminates NativeWind, Metro bundler, and RN-specific token output complexity. ThemeData maps directly to token categories. |
| Flutter theming | Flutter ThemeData / ColorScheme | Third-party (Tamagui, Gluestack, NativeWind) | ThemeData is Flutter's native theming API. No third-party styling layer needed — tokens map directly to `ColorScheme`, `TextTheme`, and decoration properties. |
| Token package shape | Dart package (pub.dev / path dep) | npm package | The consuming app is Flutter. Generated Dart files are distributed as a Dart package, not an npm package. The Style Dictionary pipeline still runs on Node.js at build time. |
| Storybook renderer | Storybook Web (plain HTML/CSS) | Widgetbook (Flutter-native), `@storybook/react-native` | For token documentation (swatches, rulers, specimens) plain HTML/CSS is sufficient. Widgetbook is the right tool for Flutter component documentation in future phases. |
| Font loading | `google_fonts` Flutter package | Bundled `.ttf` in `pubspec.yaml` | `google_fonts` handles font download and caching automatically. Bundle `.ttf` directly only if Manjari is unavailable in the package. |
| Contrast validation | `wcag-contrast` (Node.js, build-time) | `color2k`, `chroma-js`, manual formula | Platform-agnostic — runs in the Style Dictionary Node.js pipeline regardless of the Flutter target. Same rationale as before. |

---

## Package Shape

The design system has two layers:

1. **Node.js build layer** — Style Dictionary pipeline (runs at token build time, not shipped)
2. **Dart package** — generated Dart source files consumed by the Flutter app

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
  package.json                   # Node.js dev deps (style-dictionary, wcag-contrast, etc.)
  lib/                           # Generated Dart package (output from SD pipeline)
    voltventure_tokens.dart      # All token constants (Color, double, TextStyle)
    voltventure_theme.dart       # Flutter ThemeData factory using the token constants
  pubspec.yaml                   # Dart package manifest
  .storybook/                    # Storybook Web for token documentation
  stories/                       # HTML/CSS token stories (no Flutter renderer)
```

**Key `pubspec.yaml` fields:**

```yaml
name: voltventure_design_system
version: 0.1.0
description: VoltVenture design token infrastructure for Flutter.

environment:
  sdk: '>=3.3.0 <4.0.0'
  flutter: '>=3.19.0'

dependencies:
  flutter:
    sdk: flutter
  google_fonts: ^6.2.0

dev_dependencies:
  flutter_test:
    sdk: flutter
```

**Consuming Flutter app `pubspec.yaml`:**

```yaml
dependencies:
  voltventure_design_system:
    path: ../voltventure_design_system
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

## Flutter ThemeData Integration

The generated Dart output from Style Dictionary provides two files:

**`voltventure_tokens.dart`** — raw `const` values:

```dart
// AUTO-GENERATED — DO NOT EDIT. Run 'npm run build:tokens' to regenerate.

import 'package:flutter/material.dart';

// Primitive: Color
const Color colorGreen500 = Color(0xFFC6FF2D);
const Color colorGrey050 = Color(0xFFFAFAFA);
const Color colorBlack = Color(0xFF0F0F0F);
const Color colorWhite = Color(0xFFFFFFFF);

// Semantic: Color
const Color colorActionPrimary = colorGreen500;
const Color colorActionPrimaryFg = colorBlack;
const Color colorSurfaceBase = colorWhite;
const Color colorTextPrimary = colorBlack;

// Semantic: Spacing (logical pixels)
const double space400 = 16.0;
const double space500 = 20.0;

// Semantic: Radius
const double radiusXl = 28.0;
const double radiusFull = 999.0;
```

**`voltventure_theme.dart`** — Flutter ThemeData factory:

```dart
// AUTO-GENERATED — DO NOT EDIT.

import 'package:flutter/material.dart';
import 'voltventure_tokens.dart';

ThemeData voltVentureTheme() {
  return ThemeData(
    colorScheme: ColorScheme(
      brightness: Brightness.light,
      primary: colorActionPrimary,
      onPrimary: colorActionPrimaryFg,
      surface: colorSurfaceBase,
      onSurface: colorTextPrimary,
      // ... all required ColorScheme fields
    ),
    textTheme: TextTheme(
      displayLarge: TextStyle(
        fontFamily: 'Manjari',
        fontSize: 40.0,
        fontWeight: FontWeight.w700,
        height: 1.1,
        letterSpacing: -0.5,
        color: colorTextPrimary,
      ),
      // ... all 14 type styles
    ),
  );
}
```

**Consuming Flutter app:**

```dart
import 'package:voltventure_design_system/voltventure_theme.dart';

MaterialApp(
  theme: voltVentureTheme(),
  home: const MyHomePage(),
);
```

Tokens are also available as raw constants for one-off widget use: `Container(color: colorActionPrimary)`.

---

## Dart Output Notes

- All color values use `Color(0xFFRRGGBB)` format (Flutter's `Color` constructor requires ARGB hex with full alpha prefix)
- All dimension values are `double` (Flutter uses `double` for all layout values, not `int`)
- Typography token `height` (line height) is a multiplier in Flutter (`height = lineHeight / fontSize`), not an absolute value — the SD formatter must compute this ratio
- `letterSpacing` in Flutter is in logical pixels, not em — the SD formatter must convert from the spec's em values if needed

---

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

## Flutter Font Loading — Manjari Note

**Verify `GoogleFonts.manjari()` availability** in the current `google_fonts` package version before Phase 1 implementation.

**Fallback**: Bundle `.ttf` directly in the Flutter app's `pubspec.yaml`:

```yaml
flutter:
  fonts:
    - family: Manjari
      fonts:
        - asset: assets/fonts/Manjari-Regular.ttf
          weight: 400
        - asset: assets/fonts/Manjari-Bold.ttf
          weight: 700
        - asset: assets/fonts/Manjari-Thin.ttf
          weight: 100
```

OFL license permits bundling. Confirm Manjari licensing for any wordmark/commercial use per the spec's open item.

---

## Known Compatibility Issues

| Issue | Severity | Detail |
|-------|----------|--------|
| Style Dictionary v4 `$type: "shadow"` → Flutter | MEDIUM | SD v4 parses shadow objects natively but built-in formats output CSS `box-shadow`. Flutter needs `BoxShadow(color:, offset:, blurRadius:, spreadRadius:)`. Write a custom Dart formatter for elevation tokens. |
| Style Dictionary v4 `$type: "dimension"` with `"pt"` suffix | MEDIUM | The spec uses `"16pt"` as the `$value`. SD's built-in transforms strip `px`, not `pt`. Write a custom transform `voltventure/dimension/stripPt` that returns a raw number. Flutter uses `double` for all dimension values. |
| Flutter `Color` constructor requires ARGB hex | MEDIUM | Flutter's `Color(0xFFRRGGBB)` requires the `0xFF` alpha prefix. The Dart formatter must convert `#C6FF2D` → `Color(0xFFC6FF2D)`, not emit a raw hex string. |
| Flutter `height` (line height) is a multiplier | MEDIUM | Flutter `TextStyle.height` is `lineHeight / fontSize`, not an absolute pt value. The Dart formatter must compute this ratio from the spec's absolute values. |
| `GoogleFonts.manjari()` availability | LOW | Verify in current `google_fonts` package. Fallback: bundle `.ttf` in `pubspec.yaml`. |
| Style Dictionary v4 — Dart formatter availability | LOW | No official SD v4 Dart/Flutter formatter exists. A custom formatter must be written. This is a first-time implementation — plan for iteration. |

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

**Dart/Flutter side** (consuming app):

```yaml
# In the VoltVenture Flutter app's pubspec.yaml:
dependencies:
  voltventure_design_system:
    path: ../voltventure_design_system  # local during development
  google_fonts: ^6.2.0
```

```bash
# In the VoltVenture Flutter app:
flutter pub get
```

**First action for Phase 1 implementation:** Run `npm info style-dictionary version` to confirm current SD v4 version, then verify `GoogleFonts.manjari()` availability in the `google_fonts` Flutter package.

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
