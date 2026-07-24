---
phase: 01-token-pipeline-dart-output
plan: 06
name: SD Config Wiring and Dart Constants Output
status: complete
completed: 2026-07-24
---

# Plan 01-06 SUMMARY — SD Config Wiring and Dart Constants Output

## What Was Done

Fixed the Style Dictionary pipeline wiring so the dart platform generates valid Dart code instead of JavaScript. The `dart-constants.format.mjs` formatter was already committed from a previous WIP session but was not connected to the SD config. Three bugs were found and fixed during integration.

### Bugs Fixed

**Bug 1: Wrong format in SD config dart platform (the original blocker)**
- `style-dictionary.config.mjs` had `format: 'javascript/es6'` for the `dart` platform
- Fixed: imports all 4 custom transforms + `dartConstantsFormat`, registers them, sets `format: 'voltventure/dart/constants'`
- Removed `dart/theme` platform from SD config (Plan 07 adds it with the proper ThemeData formatter)

**Bug 2: `token.value` vs `token.$value` in DTCG mode**
- The formatter read `token.value` but in SD v4 with `usesDtcg: true`, the resolved/transformed value lives in `token.$value`
- Fixed: `dart-constants.format.mjs` now reads `token.$value`

**Bug 3: `lineHeightMultiplierTransform` had no `filter`**
- The transform ran on ALL tokens, destructuring `{ lineHeight, fontSize }` from non-composite values (e.g., a color hex string), producing `NaN` for every token
- Fixed: added a filter that checks `typeof $value === 'object' && 'lineHeight' in $value && 'fontSize' in $value`
- Also removed `voltventure/lineHeight/multiplier` from dart platform transforms (not needed for the constants file; Plan 07 will use it for the ThemeData formatter)

**Bug 4: `shadow/boxShadow` transform had no "none" guard**
- `elevation.flat.$value = "none"` was passed directly to `shadowToBoxShadow("none")`, causing `"none".color = undefined` crash
- Fixed: added `if (value === 'none' || value === '' || value == null) return 'none';` before processing

**Minor: unnecessary `const []` in formatter**
- Changed `dartValue: 'const []'` to `dartValue: '[]'` — the `const List<BoxShadow>` declaration already provides a const context, making the inner `const` redundant (`unnecessary_const` lint)

### V1 Validator Activated
Updated `scripts/validate-tokens.mjs` `runV1UnresolvedRefCheck()` from a no-op stub to an active check. It reads `lib/voltventure_tokens.dart` after the file exists and fails if any `{...}` reference strings are present. Skips silently on first build when the file doesn't yet exist.

## Artifacts Produced

| File | Status | Note |
|------|--------|------|
| `lib/voltventure_tokens.dart` | ✅ Generated | Valid Dart — AUTO-GENERATED header, Color(0xFF...), const double, const List<BoxShadow> |
| `generated/tokens.js` | ✅ Generated | JS reference for Phase 2 Storybook |
| `style-dictionary.config.mjs` | ✅ Fixed | Imports/registers 4 transforms + dart formatter; dart platform uses `voltventure/dart/constants` |
| `sd-transforms/dart-constants.format.mjs` | ✅ Fixed | Reads `token.$value` (DTCG mode); const [] → [] |
| `sd-transforms/shadow.boxShadow.mjs` | ✅ Fixed | "none" guard added |
| `sd-transforms/lineHeight.multiplier.mjs` | ✅ Fixed | Filter added |
| `scripts/validate-tokens.mjs` | ✅ Updated | V1 check active |

## Verification Results

| Check | Result |
|-------|--------|
| `npm run build` exits 0 | ✅ PASS |
| `npm test` (42 unit tests) | ✅ PASS — 42/42 |
| `head -1 lib/voltventure_tokens.dart` | ✅ `// AUTO-GENERATED — DO NOT EDIT` |
| `Color(0xFF` count ≥ 5 | ✅ 31 matches |
| `const double` count ≥ 11 | ✅ 34 matches |
| `List<BoxShadow>` count ≥ 4 | ✅ 5 matches |
| `///` doc comment count ≥ 20 | ✅ 70 matches |
| No raw hex strings (`"#` in dart file) | ✅ 0 matches |
| No unresolved references (`{color.` etc.) | ✅ PASS — V1 confirms |
| `const Color _` (private primitives) | ✅ 16 matches |
| `const Color colorAction` (public semantics) | ✅ 2 matches |
| `dart analyze lib/` | ⚠️ BLOCKED — dart/flutter not installed in shell environment |

## Known Issue: `dart analyze` Not Run

`dart analyze lib/` could not be run — the `dart` command is not found in the shell PATH (Git Bash on Windows). Flutter/Dart does not appear to be installed at standard locations.

The generated Dart file was visually reviewed for correctness:
- `import 'package:flutter/material.dart';` is present
- `Color(0xFFRRGGBB)` format used for all colors
- `const double` for all dimension values (including `1.5` for hairline border)
- `const List<BoxShadow>` with `BoxShadow(color:, offset:, blurRadius:, spreadRadius:)` syntax
- `const int` for unitless integer tokens (grid.columns)
- Triple-slash doc comments on every exported constant
- `ignore_for_file: lines_longer_than_80_chars` suppresses line-length warnings

**Required user action before Plan 07**: Run `dart analyze lib/voltventure_tokens.dart` in an environment with Flutter/Dart installed and confirm zero issues. If there are errors, fix the formatter before proceeding to Plan 07.

## Decisions Made

- `token.$value` is the correct accessor in SD v4 DTCG mode (not `token.value`)
- `voltventure/lineHeight/multiplier` excluded from dart platform transforms (not needed for constants file)
- `dart/theme` platform removed from SD config until Plan 07 adds it with a proper formatter
- `lib/voltventure_theme.dart` is a placeholder comment file until Plan 07 generates it
- V1 post-build check is now active (reads lib/voltventure_tokens.dart if it exists)

## Open Items for Plan 07

- Create `sd-transforms/dart-theme.format.mjs` and wire `dart/theme` platform
- Task 0 checkpoint: verify `GoogleFonts.manjari()` availability in `google_fonts ^6.2.0`
- Generate `lib/voltventure_theme.dart` with `ThemeData` factory using `ColorScheme.fromSeed()`
- Final done-bar: `npm run build:validate` + `npm run build:tokens` + `dart analyze lib/` (0 issues) + `npm test` (42 tests pass)
