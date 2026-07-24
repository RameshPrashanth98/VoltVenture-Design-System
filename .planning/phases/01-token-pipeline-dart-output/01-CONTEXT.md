# Phase 1: Token Pipeline & Dart Output — Context

**Gathered:** 2026-07-24
**Status:** Ready for planning
**Source:** discuss-phase (4 of 4 areas complete)

<domain>
## Phase Boundary

Build the Style Dictionary v4 pipeline that transforms W3C DTCG JSON token sources into:
- `lib/voltventure_tokens.dart` — typed Dart constants (Color, double, TextStyle)
- `lib/voltventure_theme.dart` — Flutter ThemeData factory
- `generated/tokens.js` — JS reference output for Storybook (Phase 2 input)
- WCAG AA contrast validation as a build-breaking check at pipeline run time
- 4pt grid and electric green foreground guards enforced at build time

Phase 1 is complete when `dart analyze lib/` returns zero issues and all pipeline checks pass. Device/simulator integration is Phase 3 scope.

</domain>

<decisions>
## Implementation Decisions

### D-01: SD Dart Formatter — Community Search First
Search pub.dev and GitHub for an existing Style Dictionary Dart formatter before building a custom one. Only build from scratch if no viable community formatter is found. The search result (found / not found) must be documented before implementation begins.

### D-02: Unit Tests Required — All 4 Type Conversions
The custom Dart formatter (or adapted community formatter) must have unit tests for all four type conversions. Silent failures in these conversions are load-bearing bugs:
1. Color: `#RRGGBB` hex string → `Color(0xFFRRGGBB)` Dart literal
2. Dimension: `"16pt"` string → `16.0` Dart double (no unit suffix)
3. Shadow: W3C DTCG `$type: shadow` object → `List<BoxShadow>`
4. LineHeight: absolute pt value → Flutter height multiplier (`lineHeight / fontSize`)

### D-03: Formatter Code Location
Custom/adapted formatter code lives in `sd-transforms/` at the project root — separate from token source JSON (`tokens/`) and generated output (`lib/`, `generated/`).

### D-04: Dart Output — Single File, Not Barrel
Generated Dart output is a single `lib/voltventure_tokens.dart` file (not per-category barrel files). Simplest import pattern for a token-only scope.

### D-05: Doc Comments Included
The generated `voltventure_tokens.dart` includes Dart doc comments on each constant. IDE tooltips then surface token purpose without requiring a Storybook lookup.

### D-06: Primitive Tokens Private
Tier 1 primitive tokens are generated as private Dart variables (`_colorGreen500`). Only Tier 2 semantic tokens are exported publicly. This enforces the three-tier architecture at the Dart level — widgets cannot reach primitives directly.

### D-07: ColorScheme Placeholder Strategy — fromSeed()
For `ColorScheme` fields where brand tokens are deferred (error, secondary, tertiary), use `ColorScheme.fromSeed(seedColor: tokenColors.actionPrimary, brightness: Brightness.light)`. Flutter auto-derives all 20+ required ColorScheme fields from the seed. Individual fields are overridden one-by-one as brand decisions land. No manual placeholder values needed.

### D-08: Phase 1 Done Bar
Phase 1 is complete when:
- `style-dictionary build` exits 0
- `dart analyze lib/` returns 0 issues
- WCAG contrast check passes (build-breaking — pipeline must not exit 0 with contrast failures)
- All 4 type-conversion unit tests pass

NOT required for Phase 1 completion:
- Flutter app import (`pubspec.yaml` path dependency)
- Device or simulator smoke test (those are Phase 3 deliverables)

### Claude's Discretion
- Exact Style Dictionary config file name and format (`style-dictionary.config.mjs` is the ROADMAP convention — use it)
- Token source directory structure within `tokens/primitive/` and `tokens/semantic/`
- Node.js tooling for WCAG contrast check (use `wcag-contrast` npm package per STACK.md)
- Electric green guard implementation detail (enforce at build step, not token authoring time)
- 4pt grid validator implementation (build step, not token authoring time)
- JS reference output format for Storybook (`generated/tokens.js` — camelCase per naming convention)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Source of Truth
- `voltventure-foundations (1).html` — comprehensive foundations spec (v0.1); exact token values, semantic mappings, naming architecture, W3C JSON export format, brand rules for all 12 categories. Primary reference for token authoring.

### Planning Context
- `.planning/PROJECT.md` — requirements, constraints, key decisions, three-tier architecture definition
- `.planning/ROADMAP.md` — Phase 1 deliverables list, phase scope boundary

### Research
- `.planning/research/STACK.md` — Flutter/SD v4 stack decisions, exact package choices
- `.planning/research/ARCHITECTURE.md` — pipeline architecture, Dart output patterns, Flutter ThemeData integration patterns
- `.planning/research/PITFALLS.md` — Flutter-specific pitfalls (Color ARGB format, ColorScheme required fields, google_fonts API, line-height multiplier)
- `.planning/research/FEATURES.md` — table stakes, differentiators, anti-features

</canonical_refs>

<specifics>
## Specific Ideas

**Token naming convention** (from PROJECT.md): `[category].[concept].[variant].[state]` dot-separated → `snake_case` in Dart, `camelCase` in JS reference, `--kebab-case` in CSS.

**Color format** (CRITICAL — from PITFALLS.md): Flutter requires ARGB order. `#RRGGBB` must become `Color(0xFFRRGGBB)` — the `FF` alpha prefix is mandatory. `Color(0xRRGGBB)` is a silent wrong-color bug.

**Font loading** (from STACK.md): Use `google_fonts` Flutter package with method API — `GoogleFonts.manjari()`, `GoogleFonts.inter()`, `GoogleFonts.jetBrainsMono()`. Do NOT use string `fontFamily` property.

**Line height** (from PITFALLS.md): Flutter `TextStyle.height` is a multiplier, not absolute. `height = lineHeight_pt / fontSize_pt`. Example: 20pt line height on 16pt text → `height: 1.25`.

**Shadow** (from PITFALLS.md): DTCG shadow object maps to `BoxShadow(color:, blurRadius:, spreadRadius:, offset: Offset(x, y))` inside a `List<BoxShadow>`. Not RN shadow props.

**ColorScheme.fromSeed()** (D-07 decision): Use `seedColor: tokenColors.actionPrimary` (Electric Green `#C6FF2D` mapped to `Color(0xFFC6FF2D)`). Override `primary`, `onPrimary`, `surface`, `onSurface` with explicit token values; let fromSeed fill the rest.

**Electric green accessibility rule** (from PROJECT.md): `#C6FF2D` is background-only on light surfaces. Foreground on green must always be Volt Black (`#0F0F0F`). Green text permitted only on black/charcoal surfaces (15.4:1 contrast, AAA). The build-time guard must enforce this.

**12 token categories** that must be authored:
Color, Typography, Spacing, Elevation, Radius, Border, Grid, Iconography, Motion (deferred values OK with TODO comments), Status (deferred), Dark surface (deferred semantic values), Component aliases (Phase 3 — do not author in Phase 1)

</specifics>

<deferred>
## Deferred Ideas

- **Dark mode token layer** — semantic values need validated dark screen designs first (ROADMAP backlog)
- **Status colors** (error, warning, info) — awaiting brand color decision; Phase 1 ThemeData uses `ColorScheme.fromSeed()` as placeholder (D-07)
- **Motion tokens** — prototype video inaccessible; values are speculative (ROADMAP backlog)
- **Component tokens (Tier 3)** — future phases only (out of scope per PROJECT.md)
- **Flutter app import + device smoke test** — Phase 3 scope (D-08 done-bar decision)
- **pub.dev package publication** — validate locally first
- **Widgetbook widget documentation** — out of scope v1

</deferred>

---

*Phase: 01-token-pipeline-dart-output*
*Context gathered: 2026-07-24 (discuss-phase, all 4 areas)*
