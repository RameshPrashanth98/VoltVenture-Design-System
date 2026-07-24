# Phase 1 Research: Token Pipeline & Dart Output

**Phase:** 1 — Token Pipeline & Dart Output
**Researched:** 2026-07-24
**Source:** Synthesized from `.planning/research/` (STACK.md, ARCHITECTURE.md, PITFALLS.md, FEATURES.md) + discuss-phase decisions
**Confidence note:** Training knowledge (cutoff August 2025). `npm info` and `flutter --version` must be run at implementation start to pin exact versions.

---

## Key Questions Answered

### Q1: Community SD Dart Formatter — Does One Exist?

**Finding: No official SD v4 Dart formatter exists. Community options are marginal.**

From training knowledge and the existing ARCHITECTURE.md research (which was authored specifically for this question):

- Style Dictionary does **not** ship a Dart platform or Dart formatter in its core package (v3 or v4).
- There are a small number of community gists and GitHub repos for SD v3 Dart output, but they use the v3 API (`transform.value`, not `$value`) and lack Flutter-specific type handling (especially `BoxShadow` and `height` multiplier).
- No pub.dev package provides a Style Dictionary Dart formatter — the transformer lives on the Node.js side (npm), not Dart.

**Decision from discuss-phase (D-01):** Search pub.dev + GitHub as the first implementation task. If a viable v4-compatible community formatter is found, adapt it; otherwise build from scratch. The search is a 30-minute task before any code is written.

**Custom formatter scope** (4 transforms required per D-02):
1. `voltventure/color/flutter` — `#RRGGBB` → `Color(0xFFRRGGBB)`
2. `voltventure/dimension/double` — `"16pt"` or `16` → `16.0` Dart double
3. `voltventure/shadow/boxShadow` — DTCG `$type: shadow` object → `List<BoxShadow>` Dart literal
4. `voltventure/lineHeight/multiplier` — absolute pt lineHeight + fontSize → `height = lineHeight / fontSize`

Each transform needs a unit test before the pipeline is wired up.

---

### Q2: Exact Technical Implementation

#### Style Dictionary v4 Config

```
style-dictionary.config.mjs (ESM, async)
  usesDtcg: true                 ← critical for $type/$value
  source: ['tokens/**/*.json']
  platforms:
    dart:                        ← voltventure_tokens.dart
      transforms: [name/snake, voltventure/color/flutter, voltventure/dimension/double,
                   voltventure/shadow/boxShadow, voltventure/lineHeight/multiplier]
      format: custom Dart formatter (emits const Color, double, TextStyle)
    dart/theme:                  ← voltventure_theme.dart
      same transforms + custom ThemeData formatter
    js/reference:                ← generated/tokens.js for Storybook
      transforms: [name/camel, color/hex]
      format: javascript/es6
```

**SD v4 breaking changes vs v3** (pitfalls to avoid):
- Constructor: `new StyleDictionary(config)` not `StyleDictionary.extend(config)`
- `buildAllPlatforms()` is async — must `await`
- `matcher` renamed to `filter`
- Source token key is `$value` / `$type` — any v3 blog post using `value` / `type` is wrong

#### Dart Output Format

**`lib/voltventure_tokens.dart`:**
```dart
// AUTO-GENERATED — DO NOT EDIT. Run 'npm run build:tokens' to regenerate.
import 'package:flutter/material.dart';

// Primitive (private — enforce three-tier architecture)
const Color _colorGreen500 = Color(0xFFC6FF2D);
const Color _colorBlack = Color(0xFF0F0F0F);

// Semantic (public API)
/// color.action.primary — primary CTA background; always paired with colorActionPrimaryFg
const Color colorActionPrimary = _colorGreen500;

// Elevation
const List<BoxShadow> elevationRaised = [ BoxShadow(...) ];
```

**`lib/voltventure_theme.dart`:**
```dart
// AUTO-GENERATED — DO NOT EDIT.
import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'voltventure_tokens.dart';

ThemeData voltVentureTheme() => ThemeData(
  colorScheme: ColorScheme.fromSeed(
    seedColor: colorActionPrimary,
    brightness: Brightness.light,
  ).copyWith(
    primary: colorActionPrimary,
    onPrimary: colorActionPrimaryFg,
    surface: colorSurfaceBase,
    onSurface: colorTextPrimary,
  ),
  textTheme: TextTheme(
    displayLarge: GoogleFonts.manjari(fontSize: 40.0, fontWeight: FontWeight.w700, height: 1.1),
    // ... all 14 styles
  ),
);
```

**ColorScheme strategy (D-07 decision):** Use `ColorScheme.fromSeed()` for the base (auto-fills all required fields), then `.copyWith()` to override fields where explicit tokens exist. This resolves the required-fields problem (Pitfall F2) without red placeholders.

#### Type Conversion Rules (CRITICAL — get wrong = silent failures)

| Token type | Source format | Dart output | Formula |
|---|---|---|---|
| `$type: color` | `"#C6FF2D"` | `Color(0xFFC6FF2D)` | strip `#`, prepend `FF`, wrap in `Color(0x...)` |
| `$type: dimension` | `16` (or `"16pt"`) | `16.0` | parse as number, emit as double |
| `$type: shadow` | DTCG shadow object | `[BoxShadow(color:, offset: Offset(x,y), blurRadius:, spreadRadius:)]` | map each DTCG shadow field |
| lineHeight (on typography) | `20` (absolute pt) paired with `fontSize: 16` | `height: 1.25` | `height = lineHeight / fontSize` |

**Unit test assertions (required per D-02):**
- `#C6FF2D` → `const Color colorGreen500 = Color(0xFFC6FF2D);`
- `16` (or `"16pt"`) → `const double space400 = 16.0;`
- `{x:0, y:2, blur:8, spread:0, color:'#0F0F0F'}` → `BoxShadow(color: Color(0xFF0F0F0F), offset: Offset(0,2), blurRadius: 8.0, spreadRadius: 0.0)`
- `{lineHeight:20, fontSize:16}` → `height: 1.25`

#### Font Loading (google_fonts)

The ThemeData formatter must call `google_fonts` methods, NOT use string fontFamily tokens:

```dart
// CORRECT
GoogleFonts.manjari(fontSize: 40.0, ...)

// WRONG — system font silently falls back
TextStyle(fontFamily: "Manjari", ...)
```

**Verify at implementation start:** `GoogleFonts.manjari()` exists in current `google_fonts` ^6.2. Fallback: bundle `.ttf` in `assets/fonts/` and declare in `pubspec.yaml`. OFL license permits bundling.

---

### Q3: Token Source Structure

```
tokens/
  primitive/
    color.json          # grey ramp (9 steps), green ramp (5 steps), black, white
    spacing.json        # space.050–space.1600 (11 steps, 4pt base)
    radius.json         # radius.xs–radius.2xl (7 steps) + radius.full + radius.squircle
    typography.json     # font families, 14 type scale sizes/weights/lineHeights/tracking
    elevation.json      # 4 elevation levels (flat/raised/floating/overlay)
    border.json         # 4 width tokens (none/hairline/strong/focus)
    grid.json           # 4-col grid constants (columns, margin, gutter, contentWidth)
    iconography.json    # icon canvas (24pt), live area (20pt), size variants
  semantic/
    color.json          # surface.*, text.*, action.*, border.*, status.*
    typography.json     # 14 complete type style objects (composite of primitives)
  component/
    .gitkeep            # empty placeholder — component tokens are Phase 3+
```

**DTCG JSON format (must use `$type`/`$value`, never `type`/`value`):**
```json
{
  "color": {
    "green": {
      "500": { "$type": "color", "$value": "#C6FF2D", "$description": "Electric Green — primary brand accent" }
    }
  }
}
```

**Reference syntax** (semantic referencing primitive):
```json
{
  "color": {
    "action": {
      "primary": { "$type": "color", "$value": "{color.green.500}" }
    }
  }
}
```

---

### Q4: WCAG Validation Implementation

**Approach:** Custom Style Dictionary `action` (post-format hook) that:
1. Reads a `contrast-pairs.json` config listing all semantic text/bg pairs with minimum ratios
2. Computes WCAG 2.1 relative luminance contrast for each pair using the `wcag-contrast` npm package
3. Fails the build (`process.exit(1)`) if any pair is below threshold
4. Writes a human-readable `contrast-report.md` as a build artifact

**`contrast-pairs.json` structure:**
```json
[
  { "fg": "color.text.primary", "bg": "color.surface.base", "minRatio": 4.5, "level": "AA" },
  { "fg": "color.text.onAction", "bg": "color.action.primary", "minRatio": 4.5, "level": "AA" }
]
```

**Electric green guard (separate from WCAG check):**
- Custom validator: if any `color.text.*` or `color.border.*` semantic token resolves to `#C6FF2D` on a light surface → build error
- `#C6FF2D` is 1.36:1 against white — fails WCAG A (minimum 3:1 for large text, 4.5:1 for normal text)

**4pt grid guard:**
- Custom validator: for all `$type: dimension` tokens in `spacing.*` and `radius.*` → assert `value % 4 === 0`

---

### Q5: Build Script Structure

```json
{
  "scripts": {
    "build:validate": "node scripts/validate-tokens.mjs",
    "build:tokens": "node style-dictionary.config.mjs",
    "build": "npm run build:validate && npm run build:tokens",
    "test": "node --test sd-transforms/**/*.test.mjs"
  }
}
```

**Build order:**
1. `build:validate` — source token validation (WCAG contrast, green guard, 4pt grid, naming convention)
2. `build:tokens` — Style Dictionary build (all 3 platforms)
3. `dart analyze lib/` — verify generated Dart is valid (Phase 1 done bar per D-08)

---

### Q6: Phase 1 Done Bar

Per D-08 decision — Phase 1 is complete when:

| Check | Command | Required |
|---|---|---|
| SD build exits 0 | `npm run build` | YES |
| Dart analyzer clean | `dart analyze lib/` → 0 issues | YES |
| WCAG contrast passes | included in `npm run build` | YES (build-breaking) |
| 4 type conversion unit tests pass | `npm test` | YES |
| Flutter app import | n/a | NO — Phase 3 |
| Device/simulator test | n/a | NO — Phase 3 |

---

## Open Questions (require action at implementation start)

1. **SD Dart formatter search** — 30 min task: search `pub.dev` for "style dictionary dart", search GitHub for `style-dictionary dart flutter formatter`. Document result; adapt or build from scratch.
2. **`npm info style-dictionary version`** — pin the exact SD v4 version before authoring any code.
3. **`GoogleFonts.manjari()` check** — create a 2-line Flutter test script. If unavailable, bundle `.ttf` instead.
4. **VoltVenture Foundations spec** — `voltventure-foundations (1).html` is the canonical token value source. Read it as the first step of token authoring. All exact values come from there.
5. **`flutter --version`** — confirm SDK ≥ 3.19 in the local environment.

---

## Validation Architecture

The following validation checks must be implemented as build steps. All are blocking — pipeline must not exit 0 with failures.

### V1: Unresolved Reference Check
**Tool:** Post-build grep on `lib/voltventure_tokens.dart`
**Check:** No output file contains `{color.` or `{space.` — unresolved references emit as curly-brace strings
**Severity:** BLOCKER — silent wrong output

### V2: WCAG AA Contrast Validation
**Tool:** Custom SD action + `wcag-contrast` npm package
**Check:** All pairs in `contrast-pairs.json` meet their `minRatio` threshold
**Severity:** BLOCKER — accessibility regression

### V3: Electric Green Foreground Guard
**Tool:** Custom SD validator
**Check:** No `color.text.*` or `color.border.*` semantic token resolves to `#C6FF2D` on a light surface
**Severity:** BLOCKER — 1.36:1 contrast, fails every WCAG threshold

### V4: 4pt Grid Validator
**Tool:** Custom SD validator
**Check:** All `$type: dimension` tokens in `spacing.*` and `radius.*` have `value % 4 === 0`
**Severity:** BLOCKER — off-grid values break visual rhythm

### V5: Dart Analyzer
**Tool:** `dart analyze lib/`
**Check:** Zero errors or warnings in generated Dart files
**Severity:** BLOCKER — generated code with type errors is unusable

### V6: Type Conversion Unit Tests
**Tool:** `npm test` (Node.js test runner)
**Check:** 4 unit tests pass (Color, Dimension, Shadow, LineHeight transforms)
**Severity:** BLOCKER — formatter correctness is load-bearing

### V7: Three-Tier Architecture Enforcement
**Tool:** Custom SD validator
**Check:** No `component.*` token references `color.green.*` or any other primitive path directly
**Severity:** WARNING for v1 (no component tokens yet); BLOCKER once Phase 3 starts

### V8: DTCG Format Compliance
**Tool:** Pre-build source validator
**Check:** All source JSON uses `$value`/`$type` keys; no v3-style `value`/`type` keys present
**Severity:** BLOCKER — v3/v4 format confusion produces silent wrong output

---

## Risk Summary

| Risk | Likelihood | Impact | Mitigation |
|---|---|---|---|
| No community Dart SD formatter → must build from scratch | HIGH (expected) | Medium | 4 focused transforms; unit tests first |
| `GoogleFonts.manjari()` unavailable | LOW-MEDIUM | Low | `.ttf` bundling fallback is documented |
| SD v4 breaking change in patch | LOW | High | Pin exact version; test suite catches regressions |
| DTCG `$type: shadow` → BoxShadow edge cases | MEDIUM | Medium | Unit test with all 4 elevation levels before wiring |
| Flutter line-height multiplier formula | LOW | Medium | Unit test: 20pt/16pt = 1.25; verify against spec values |
| `ColorScheme.fromSeed()` derived colors clash with brand | MEDIUM | Low | `copyWith()` overrides explicit semantic tokens; deferred fields are auto-derived |

## RESEARCH COMPLETE
