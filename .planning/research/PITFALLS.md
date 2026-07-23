# Domain Pitfalls

**Domain:** Flutter Design System — Token Infrastructure (Style Dictionary + Flutter ThemeData)
**Project:** VoltVenture Design System v1
**Researched:** 2026-07-24
**Updated:** 2026-07-24 — Platform changed from React Native/Expo/NativeWind to Flutter.
**Confidence:** MEDIUM (training data through August 2025; web fetch unavailable — flag items marked LOW for field verification)

> **PLATFORM MIGRATION NOTE**
> This document was originally authored for React Native / Expo / NativeWind. The platform has changed to **Flutter**.
> Pitfalls that are **Flutter-relevant** are marked `[FLUTTER]`.
> Pitfalls that were **RN-specific and now obsolete** are marked `[RN OBSOLETE]` — retained for reference only.
> New Flutter-specific pitfalls are added at the bottom of each section.

---

## Critical Pitfalls

Mistakes that cause rewrites, silent runtime failures, or accessibility regressions.

---

### Pitfall 1: Style Dictionary v3 vs v4 Format Confusion

**What goes wrong:** Style Dictionary v3 uses `value` as the token value key and a flat `attributes` schema. v4 adopts the W3C DTCG format which uses `$value`, `$type`, and `$description`. If you author tokens in v3 format but run them through a v4 pipeline (or vice versa), the resolver silently treats references as literal strings — no error thrown, wrong output shipped.

**Why it happens:** Many tutorials, blog posts, and StackOverflow answers are written for v3. The DTCG `$` prefix looks like a minor cosmetic difference, but it changes how the transformer resolves references and how formatters emit output. Projects that start from copied examples without checking which version they target fall into this trap immediately.

**Consequences:**
- Token references like `{color.green.500}` are emitted as literal strings in TypeScript output instead of resolved hex values
- NativeWind config contains unresolved reference strings, breaking all Tailwind classes at runtime with no obvious error
- Build succeeds — the failure is silent and visual

**Prevention:**
- Pin Style Dictionary version explicitly in package.json: `"style-dictionary": "^4.x.x"` — never leave it unpinned
- Author all source tokens in DTCG format from day one: `$value`, `$type`, `$description` only
- Add a smoke-test assertion in the build script: check that no output file contains the string `{color.` — any unresolved reference leaks through as the raw curly-brace syntax
- Never copy token examples from articles older than 2023 without verifying which SD version they target

**Warning signs:**
- Output TS file contains strings like `"color.green.500"` where hex values are expected
- Tailwind config has values that are not valid CSS color strings
- `console.log` of a token constant in RN shows `undefined` or a curly-brace string

**Phase:** Token source authoring (Phase 1) — catch before first pipeline run

**Confidence:** HIGH (both v3 and v4 behavior well-documented in training data)

---

### Pitfall 2: Alias Resolution Chain Breaks at Tier-Skip

**What goes wrong:** The three-tier architecture (Primitive → Semantic → Component) depends on each tier referencing only the tier directly above it. When a component token skips Semantic and references a Primitive directly — or when Semantic tokens reference each other laterally — the alias resolution graph becomes difficult to trace and dark-mode migration becomes impossible without a rewrite.

**Why it happens:** Developers in a hurry add `button.primary.bg: {color.green.500}` instead of `button.primary.bg: {color.action.primary}`. Style Dictionary resolves it correctly, so no build error. The mistake is invisible until someone needs to swap semantic meanings (e.g., `action.primary` changes to a different hue), at which point all the tier-skipped references must be hunted down manually.

**Consequences:**
- Dark mode theming requires touching component tokens rather than just semantic tokens
- One brand color change requires updating N component tokens rather than 1 semantic token
- The "single source of truth" promise breaks silently

**Prevention:**
- Write a custom Style Dictionary validator (a `preprocessor` or post-build script) that reads the source JSON and asserts: any token in the `component.*` namespace must reference only `semantic.*` namespace; any token in the `semantic.*` namespace must reference only `primitive.*` namespace. Fail the build on violation.
- Code review checklist item: "Does this token reference cross two tiers?"
- Document the enforcement rule in the source token file headers as a comment

**Warning signs:**
- A `component.*` token JSON value contains `{color.green.` (a primitive path) rather than `{color.action.`
- Grep for `component` tokens with references not starting with `semantic` or the known semantic namespace

**Phase:** Token source authoring (Phase 1); validator must exist before any component tokens are authored

**Confidence:** HIGH (this is a well-understood architectural failure mode for multi-tier token systems)

---

### Pitfall 3: Electric Green Contrast Enforcement Is Documentation-Only

**What goes wrong:** The rule "Electric Green (#C6FF2D) may not be used as a text foreground on light surfaces" is written in a README or design spec but not enforced in the pipeline. A future developer uses `text-action-primary` (which maps to green) on a white background — the WCAG check does not catch it because WCAG checks validate token pairs at definition time, not at usage time in components.

**Why it happens:** WCAG automation tools (Style Dictionary validators, color-contrast packages) check whether the token pair is defined as a valid text/background pairing. They cannot see that a component consumed `color.action.primary` as text color on a `color.surface.default` background unless the tool is given that pair to check. The failure mode is that enforcement lives in docs, not in build artifacts.

**Consequences:**
- Electric Green text on white ships to production: 1.36:1 contrast, fails WCAG A (minimum 3:1 for large text, 4.5:1 for body)
- Accessibility audit failure post-launch
- Cannot use automated CI to catch this at component build time without additional tooling

**Prevention:**
- In the Style Dictionary pipeline, add a custom `action` that generates a machine-readable `contrast-matrix.json` listing every semantic color pair with their computed contrast ratio and a PASS/FAIL flag. This becomes the build artifact that CI checks.
- Create a dedicated semantic token `color.text.onGreen` with value `#0F0F0F` and `color.text.onLight` that explicitly excludes green. Make the green token type `background-only` in a custom `$extensions` field, and write a validator that fails the build if a token with `background-only` extension appears in any `text.*` semantic token's reference chain.
- Explicitly define `color.action.primary.foreground: {color.primitive.black}` as a paired token — whenever `action.primary` is a background, the pairing makes the correct foreground discoverable.
- Document: "if you need green text, it must be on `surface.dark` or `surface.overlay` — use `color.text.accent` which references `color.green.500`" and create that semantic token so green-on-dark is explicitly supported.

**Warning signs:**
- A `text.*` semantic token references `green.500` or `action.primary` without a corresponding surface constraint
- `contrast-matrix.json` is missing from build outputs (means the check was never built)
- Storybook story for color palette shows green swatches without a "background only" label

**Phase:** Phase 1 token authoring; WCAG validator must be built as part of the pipeline, not as a post-hoc audit

**Confidence:** HIGH (the contrast ratio math is fixed; the enforcement gap is a known pattern in token system design)

---

### Pitfall 4: [RN OBSOLETE] NativeWind v4 CSS Variable Resolution Fails on RN Targets

**What goes wrong:** NativeWind v4 uses CSS custom properties (CSS variables) as its runtime theming mechanism. On web (via react-native-web), CSS variables work correctly. On native RN targets, CSS variables are resolved at build time by the Babel/Metro transform. If the `tailwind.config.js` references tokens using the `var(--token-name)` pattern directly in the Tailwind theme extension, the native transform may not resolve them correctly — resulting in `undefined` style values on device while appearing correct in Storybook (web).

**Why it happens:** NativeWind v4 is architecturally different from v3. The v4 compiler generates platform-specific style objects. If you map a Tailwind theme color to a CSS variable string (`"var(--color-action-primary)"`) in the config, it works in web environments where CSS variables are natively supported but fails or produces `undefined` on native because RN has no CSS variable runtime.

**Consequences:**
- Colors display correctly in Storybook (web) but are missing on iOS/Android device
- The failure is platform-specific and invisible in CI unless native renders are tested
- If discovered late, the tailwind.config.js must be restructured to use resolved hex values instead of variable references

**Prevention:**
- In `tailwind.config.js`, always provide resolved hex/numeric values sourced from the Style Dictionary TypeScript output — not CSS variable references. Example: `colors: { 'action-primary': tokens.color.action.primary }` where `tokens` is the generated TS constants file.
- The Style Dictionary pipeline should emit a `tailwind-tokens.js` formatter that exports a ready-to-use Tailwind theme extension object with all values pre-resolved. Consume that file in `tailwind.config.js` rather than hand-mapping.
- Test on a physical device or simulator in CI — not just Storybook web — before each milestone

**Warning signs:**
- `tailwind.config.js` contains strings like `"var(--color-..."` in the `theme.extend.colors` section
- Styles appear correct in browser but missing (transparent or default RN style) on device

**Phase:** Phase 1 pipeline build and Phase 2 Storybook setup (must verify on native before declaring pipeline complete)

**Confidence:** MEDIUM (NativeWind v4 behavior is derived from its architecture documentation; specific edge cases need field verification — LOW confidence on the exact CSS variable behavior in v4 native transform)

---

### Pitfall 5: [FLUTTER] Style Dictionary Formatter Emits String Units — Flutter Requires `double`

**What goes wrong:** Style Dictionary's built-in CSS formatters emit values like `16px`, `1.5rem`, etc. Flutter requires `double` values for all dimension properties — string values like `"16px"` or `"16pt"` cause Dart compile errors or silent `0.0` fallbacks.

**Why it happens:** No official Style Dictionary Dart formatter exists. The custom Dart formatter must explicitly strip unit strings and cast to `double`. If the custom formatter is incomplete or falls back to a built-in format, string units appear in the `.dart` output and fail `dart analyze`.

**Consequences:**
- Dart analyzer reports type errors: `"16pt"` is a `String`, not a `double`
- If a dynamic cast is used, runtime `0.0` fallbacks cause invisible layout failures
- Storybook (JS reference output) may look correct while the Dart output is broken

**Prevention:**
- Write a custom transform `voltventure/dimension/double` that parses `"16pt"` → `16.0`. Register it on the `dart` platform only.
- Define tokens in DTCG format with plain numeric `$value` (no unit suffix) — then the Dart formatter emits `16.0` directly. A pre-build validator asserts that all `$type: dimension` tokens have numeric `$value`.
- Write a formatter unit test: given a spacing token of `$value: 16`, assert the Dart output is `const double space400 = 16.0;` not `const String space400 = "16pt";`.

**Warning signs:**
- Generated `.dart` file contains strings like `"16pt"` for spacing constants
- `dart analyze` reports type errors in generated file
- Flutter widget renders with zero padding despite token being applied

**Phase:** Phase 1 pipeline configuration — must be correct before any token is consumed

**Confidence:** HIGH (Flutter double-only dimension constraint is definitive; the formatter misconfiguration pattern is the same regardless of target platform)

---

### Pitfall 6: Circular Alias Reference — Silent Build Failure or Infinite Loop

**What goes wrong:** A Semantic token references another Semantic token that references back to the first one (directly or transitively). Style Dictionary v4 detects some circular references but may not catch all multi-hop cycles. The build either hangs or emits the raw reference string instead of the resolved value.

**Why it happens:** During iterative token development, a developer creates `color.semantic.A → {color.semantic.B}` and separately creates `color.semantic.B → {color.semantic.A}` without realizing the cycle. In a large token file, this is hard to spot visually.

**Consequences:**
- Build hangs indefinitely (or times out in CI)
- In permissive configs, the output contains unresolved `{color.semantic.A}` strings

**Prevention:**
- Keep Primitive and Semantic tokens in separate JSON files. Style Dictionary loads files in order; if primitives are loaded first, semantic tokens can only reference what already exists — cross-references between semantic tokens become visible as "reference not found" errors rather than cycles.
- Add a pre-build step that constructs the reference graph and runs a cycle-detection check (topological sort). A simple Node.js script can parse the JSON, build an adjacency list, and DFS for back-edges. Fail the build if any cycle is found.
- Token file naming convention: `00-primitive.json`, `01-semantic.json`, `02-component.json` — the numbered prefix communicates loading order and tier ownership.

**Warning signs:**
- Build process hangs at "resolving references" step
- Style Dictionary emits a warning about circular references (v4 logs these; v3 may not)

**Phase:** Phase 1 token authoring; cycle detection must be in place before the file count grows beyond trivial

**Confidence:** HIGH

---

### Pitfall 7: [RN OBSOLETE] Expo Managed Workflow Rejects Native Modules in Token Package

**What goes wrong:** The token package inadvertently imports a dependency that requires native code (a native module). Expo managed workflow does not allow arbitrary native modules — only those in the Expo SDK or explicitly approved by `expo-modules-core`. If the token package's dependency tree includes a native module, the app will crash on startup with `NativeModule not found`.

**Why it happens:** This happens when developers add convenient utility packages (e.g., a color manipulation library that has an optional native binding, or a font loading utility outside the Expo ecosystem) without auditing their native dependencies.

**Consequences:**
- App crashes at startup on Expo Go or in managed builds
- The failure may not appear in Storybook (web) since native modules are not exercised there
- Fixing it requires removing the dependency and potentially refactoring the feature

**Prevention:**
- The token package's `package.json` must have zero native dependencies. Rule: every dependency must be pure JavaScript/TypeScript.
- Approved dependencies for this package: `style-dictionary` (build-time only, not bundled), color manipulation via pure-JS libraries only (e.g., `chroma-js`, `culori` — both pure JS)
- Add a CI check: `npx expo-doctor` or a custom script that audits the dependency tree for native modules. Alternatively, use `react-native-community/cli` `info` command to surface native module linkage.
- The token package should ideally have zero runtime dependencies — all Style Dictionary processing is build-time. The published package output is generated JSON/TS/JS files.

**Warning signs:**
- `package.json` lists a dependency that mentions "native" or has a `./android` or `./ios` directory in its repo
- Storybook works but `expo start` crashes on the importing app

**Phase:** Phase 1 package setup — enforce pure-JS constraint before any dependencies are added

**Confidence:** HIGH

---

## Moderate Pitfalls

Mistakes that cause rework, inconsistency, or future constraint — not immediate crashes.

---

### Pitfall 8: [RN OBSOLETE] Storybook Web + react-native-web Aliasing Gaps

**What goes wrong:** React Native APIs that have no web equivalent cause Storybook to crash or display blank stories. Common offenders: `Animated`, `PanResponder`, `AccessibilityInfo`, `Platform.select` with `native`-only keys, and `useWindowDimensions` in certain contexts. The aliasing provided by `react-native-web` covers most of the core components but leaves gaps for newer or less-common APIs.

**Why it happens:** `react-native-web` is a re-implementation of RN's surface API for browsers. It does not cover 100% of the RN API. When Storybook renders a story that imports a component using an unsupported API, webpack/Metro cannot resolve it, crashing the entire Storybook build or that specific story.

**Consequences:**
- Token stories for typography or color may import a shared component that internally uses an unsupported RN API — story fails, masking the token display
- Storybook iframe shows a white screen with a cryptic module-not-found error
- Harder to debug because the RN API is often several import levels deep

**Prevention:**
- In `webpack.config.js` (or Storybook's `main.js` framework config), add explicit aliases for any RN API not covered by RNW:
  ```
  resolve.alias['react-native'] = require.resolve('react-native-web')
  resolve.alias['react-native/Libraries/Utilities/Platform'] = require.resolve('./stubs/Platform.web.js')
  ```
- Token stories should not import from the app's component library — they should render raw HTML/RNW primitives with inline token values. Keep stories maximally isolated.
- Test Storybook build (`yarn storybook --ci`) in CI to catch story-breaking import chains early.
- For the token infrastructure phase specifically, stories only need to display primitive values (swatches, type specimens) — avoid importing any RN component that could carry unexpected API dependencies.

**Warning signs:**
- Storybook dev server starts but a story iframe is white/blank
- Browser console shows `Cannot read properties of undefined (reading 'OS')` or `Module not found: react-native/Libraries/...`
- `Platform.OS` returns `undefined` in Storybook context

**Phase:** Phase 2 (Storybook setup) — build the aliasing config before writing any story

**Confidence:** HIGH (react-native-web aliasing gaps are well-documented in the RN and Storybook communities)

---

### Pitfall 9: Dark Mode Future-Proofing — Semantic Tokens That Encode Light-Mode Assumptions

**What goes wrong:** Semantic tokens are named or structured in ways that assume light mode. Examples: `color.surface.default` is defined as `#FFFFFF` with no mechanism to swap it; `color.text.primary` is `#0F0F0F` hardcoded. When dark mode is added, the entire semantic layer must be refactored because the values are hardcoded rather than referenced through a theme-switching mechanism.

**Why it happens:** v1 is light-mode only. The temptation is to hardcode the resolved values into semantic tokens since "dark mode isn't needed yet." But the token file becomes the ceiling for what theming can do.

**Consequences:**
- Adding dark mode in a future phase requires changing every semantic token's value, regenerating all outputs, and updating NativeWind config — equivalent to re-doing Phase 1
- Any component that hardcoded token values (not references) must also be updated

**Prevention:**
- Structure semantic tokens as aliases to primitives, not as hardcoded values. `color.surface.default.$value: "{color.primitive.white}"` not `color.surface.default.$value: "#FFFFFF"`. This is the same resolved value in v1, but the alias means dark mode can be added by introducing a new primitive set and swapping the alias targets.
- Style Dictionary v4 supports `sets` and `modes` (or theme switching via multiple source files with `include`/`source` overrides). Design the config to support a `light` and `dark` set even if only `light` is populated in v1.
- Naming discipline: `color.surface.default` not `color.surface.white`. The name should describe semantic role, not appearance.

**Warning signs:**
- Semantic token `$value` is a hex string (`"#FFFFFF"`) rather than a reference (`"{color.primitive.white}"`)
- Token names contain color words: `color.surface.white`, `color.text.black`

**Phase:** Phase 1 token authoring — semantic structure must be reference-based from the start

**Confidence:** HIGH

---

### Pitfall 10: "No Hardcoded Values" Rule Has No Enforcement Mechanism

**What goes wrong:** The project constraint "no component consumes a raw value — every value comes from a token" is a documentation rule with no technical enforcement. Developers under deadline pressure add `style={{ color: '#C6FF2D' }}` inline. Over time, the token system becomes partially bypassed and the "single source of truth" claim is false.

**Why it happens:** Linting for hardcoded design values requires custom tooling. Standard ESLint rules do not catch `style={{ color: '#C6FF2D' }}` as a violation. Without an automated check, the rule degrades.

**Consequences:**
- Token pipeline updates do not propagate to hardcoded values
- Brand color changes require a codebase search rather than a pipeline re-run
- Electric green hardcoded as text color bypasses the WCAG enforcement entirely

**Prevention:**
- Configure `eslint-plugin-react-native` with a custom rule (or use `eslint-plugin-no-hardcoded-colors` if available) that flags hex literal strings in JSX `style` props.
- Alternatively, write a custom ESLint rule that fails on: any string matching `/#[0-9a-fA-F]{3,8}/` in a `style` prop or StyleSheet definition, with an allowlist for values that are legitimately non-token (e.g., `transparent`, `inherit`).
- Add this lint rule to the CI pipeline before Phase 1 is complete so it is enforced from the first component written.
- The Style Dictionary output TypeScript file is the source of truth — type the token exports as `const` so TypeScript catches attempts to use the wrong token type in a style prop.

**Warning signs:**
- `git grep -n '#[0-9a-fA-F]' -- '*.tsx' '*.ts'` returns results in component files
- StyleSheet.create calls contain raw hex strings

**Phase:** Phase 1 (add lint rule as part of pipeline build) so it is active before components are written in later phases

**Confidence:** HIGH

---

### Pitfall 11: WCAG Validation Is a Manual Post-Hoc Audit, Not a Build Gate

**What goes wrong:** Developers run a contrast checker manually (or in Figma) when a new color is introduced, but the check is not part of the automated build. When a primitive color value is changed later (e.g., `green.500` lightened for aesthetics), the semantic token `action.primary` silently inherits the new value — which may now fail contrast — with no build failure.

**Why it happens:** WCAG validation tools (e.g., `@adobe/leonardo-contrast-colors`, `colorjs.io`, or custom scripts using WCAG 2.1 relative luminance formula) require knowing the foreground/background pair. That pairing information lives in the semantic token definitions — but most teams don't build the bridge from "semantic token pairs" to "contrast check" into their CI.

**Consequences:**
- A primitive color change causes a regression in a semantic pair's contrast ratio
- The regression ships to production
- Fixes require an emergency update to primitives, regenerating all outputs

**Prevention:**
- Define a `contrast-pairs.json` config file that lists all semantic text/background pairs that must be checked: `[{ "fg": "color.text.primary", "bg": "color.surface.default", "minRatio": 4.5 }, ...]`. Include the electric green background case: `{ "fg": "color.text.onGreen", "bg": "color.action.primary", "minRatio": 4.5 }`.
- Write a Style Dictionary action (post-format hook) that reads this config, looks up the resolved values from the transformed tokens, computes WCAG 2.1 relative luminance contrast, and fails the build if any pair is below its threshold.
- Pure-JS WCAG contrast computation is trivial (the formula is in the spec — relative luminance → contrast ratio). No external library is strictly required, though `colorjs.io` or `chroma-js` simplify it.
- Output a human-readable `contrast-report.md` as a build artifact so developers can see all pairs and their ratios, not just the failures.

**Warning signs:**
- No `contrast-pairs.json` or equivalent config exists in the repo
- Build output directory contains no contrast report
- `package.json` has no script for contrast validation

**Phase:** Phase 1 pipeline build — the WCAG action must be built alongside the formatters, not added later

**Confidence:** HIGH

---

### Pitfall 12: [FLUTTER] Font Token Mismatch Between `google_fonts` Package API and Token Constants

**What goes wrong:** The Flutter `google_fonts` package does not use string-based font family names. Instead it exposes typed methods: `GoogleFonts.manjari(fontSize: 16)` returns a `TextStyle` with the correct font family, weight, and metadata. If the generated `voltventure_theme.dart` tries to use a `fontFamily` string token (e.g., `"Manjari"`) in `TextStyle(fontFamily: fontFamilyDisplay)`, it may fall back to the system font silently if the font has not been loaded.

**Why it happens:** The `google_fonts` package API is method-based, not string-based. The ThemeData formatter must call `GoogleFonts.inter(...)`, not `TextStyle(fontFamily: "Inter", ...)`. If the formatter treats `fontFamily` as a string token the same way it would in a CSS or RN context, it produces code that bypasses the `google_fonts` loading mechanism.

**Consequences:**
- Display typography renders in system default (Roboto/San Francisco) instead of Manjari
- The failure is subtle — font weight and size are correct, but the family is wrong
- `dart analyze` passes (no type error); only visual inspection catches it

**Prevention:**
- The generated `voltventure_theme.dart` must import and call `google_fonts` methods: `GoogleFonts.manjari(fontSize: 40.0, fontWeight: FontWeight.w700, ...)`. The ThemeData formatter must be aware of the font family → `google_fonts` method mapping.
- Alternatively, if bundling `.ttf` directly via `pubspec.yaml`, `TextStyle(fontFamily: "Manjari")` will work — but the `google_fonts` package must not also be active for the same family (duplicate loading).
- In Storybook stories, fonts are loaded via CSS `@font-face` — Storybook does not use `google_fonts`. This means font rendering may differ between Storybook and device. Test on a physical device before signing off on typography.

**Warning signs:**
- Generated `voltventure_theme.dart` uses `TextStyle(fontFamily: "Manjari")` string instead of `GoogleFonts.manjari(...)` call
- Typography looks correct in Storybook (CSS font loading) but renders system default on device

**Phase:** Phase 1 token authoring — ThemeData formatter must use `google_fonts` API, not string tokens

**Confidence:** HIGH (`google_fonts` method-based API is well-established; the string fallback behavior is standard Flutter)

---

---

### Pitfall F1: [FLUTTER] Flutter `Color` Constructor Requires ARGB Format — Not Hex String

**What goes wrong:** Style Dictionary emits hex strings like `"#C6FF2D"` in its built-in JS and CSS formatters. The Flutter `Color` constructor requires `Color(0xFFRRGGBB)` — ARGB integer notation with a leading `0xFF` alpha channel. If the custom Dart formatter emits a hex string or the wrong integer format, Dart will not compile.

**Prevention:**
- Custom Dart color transform: strip `#`, prepend `FF` for full opacity, prefix with `0x`. `#C6FF2D` → `Color(0xFFC6FF2D)`.
- For tokens with alpha (future): map alpha percentage to two hex digits.
- Unit test the transform with a known value: `#C6FF2D` → `const Color colorGreen500 = Color(0xFFC6FF2D);`.

**Phase:** Phase 1 — Dart formatter implementation

**Confidence:** HIGH (Flutter Color API is definitive)

---

### Pitfall F2: [FLUTTER] ThemeData `ColorScheme` Has Required Fields — Missing Fields Cause Runtime Assertion

**What goes wrong:** Flutter's `ColorScheme` constructor (Material 3) has many required fields. If the generated `voltventure_theme.dart` ThemeData factory omits any required `ColorScheme` field, Flutter throws a runtime assertion error at app startup, not a compile-time error.

**Prevention:**
- Define a complete semantic color mapping in the token source that covers all required `ColorScheme` fields: `primary`, `onPrimary`, `primaryContainer`, `onPrimaryContainer`, `secondary`, `onSecondary`, `error`, `onError`, `surface`, `onSurface`, `background`, `onBackground`, `outline`.
- Some of these (e.g., `error`, `secondary`) are in the "out of scope" list for v1 (status colors, secondary brand color). Use placeholder values (`Colors.red` for error) with a `TODO` comment until brand decisions are made.
- Write a Flutter widget test that instantiates `voltVentureTheme()` — this catches missing field assertions before the app ships.

**Phase:** Phase 1 — ThemeData formatter implementation

**Confidence:** HIGH (ColorScheme required fields are well-documented)

---

## Minor Pitfalls

Issues that cause confusion or minor rework but not architectural damage.

---

### Pitfall 13: Token File Structure Makes Partial Regeneration Hard

**What goes wrong:** All 12 token categories are in a single large JSON file. When one category changes, the entire file is regenerated, making diffs hard to review in PRs. More dangerously, a syntax error in one category causes the entire build to fail with no indication of which category is broken.

**Prevention:** One JSON file per category (e.g., `tokens/primitive/color.json`, `tokens/semantic/color.json`). Style Dictionary supports multiple source files via the `source` glob array. Numbered prefixes communicate tier order. Smaller files = smaller diffs = faster code review.

**Phase:** Phase 1 project setup (file structure decision, not easily reversible later)

**Confidence:** HIGH

---

### Pitfall 14: Style Dictionary Output Directory Accidentally Committed

**What goes wrong:** Generated output files (`dist/`, `generated/`) are committed to git. When the pipeline runs again with different configuration, git shows hundreds of changed files, obscuring real changes. Worse, developers make manual edits to generated files, which are overwritten on the next build — silent data loss.

**Prevention:** Add `dist/` and `generated/` to `.gitignore`. Add a comment header to every generated file: `// AUTO-GENERATED — DO NOT EDIT. Run 'npm run build:tokens' to regenerate.` CI should run the generator and verify the output matches what is checked in (or simply never check in generated files and always generate fresh in CI).

**Phase:** Phase 1 project setup

**Confidence:** HIGH

---

### Pitfall 15: [RN OBSOLETE] NativeWind `className` Prop Type Error in TypeScript Strict Mode

**What goes wrong:** NativeWind v4 adds a `className` prop to RN components. In TypeScript strict mode, the `className` prop is not in RN's base `ViewProps`/`TextProps` types, causing TypeScript errors when using Tailwind classes on RN components without proper type augmentation.

**Why it happens:** NativeWind provides a type augmentation that must be imported or referenced in the project's `tsconfig.json` `types` array. If this import is missing, TypeScript reports `Property 'className' does not exist on type 'ViewProps'`.

**Prevention:** Follow NativeWind v4's TypeScript setup guide exactly. Add `"nativewind/types"` to the `compilerOptions.types` array in `tsconfig.json`. Verify the project's Storybook TypeScript config also includes this — Storybook may have a separate tsconfig that misses it.

**Warning signs:** TypeScript errors on `className` prop in `.tsx` files despite correct runtime behavior.

**Phase:** Phase 1 package configuration

**Confidence:** MEDIUM (based on NativeWind v4 known setup requirements; verify against current docs)

---

### Pitfall 16: [RN OBSOLETE] Storybook Addon Incompatibility with RN Web Renderer

**What goes wrong:** Common Storybook addons (accessibility addon `@storybook/addon-a11y`, interactions addon) may not work correctly in RN Web mode because they rely on DOM APIs or HTML element selectors that don't map to RNW's synthetic DOM output. The accessibility addon in particular queries DOM `role` attributes — RNW maps RN accessibility props differently, causing the addon to report false positives or false negatives.

**Prevention:** For the token infrastructure phase, use a minimal Storybook addon set: `@storybook/addon-docs` and `@storybook/addon-controls` only. Defer accessibility addon integration until the component phase when interaction testing becomes relevant. Document that the built-in WCAG validation (contrast report from Style Dictionary) is the authoritative accessibility check for tokens, not the Storybook addon.

**Phase:** Phase 2 Storybook setup

**Confidence:** MEDIUM

---

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Token source authoring | v3/v4 format confusion — unresolved references emitted as strings | Pin SD v4, use `$value`/`$type` from day one, smoke-test output |
| Three-tier architecture | Tier-skip: component token references primitive directly | Custom validator in SD pipeline, enforced in CI |
| Electric green usage rule | Rule lives in docs, not enforced by tooling | `background-only` extension field + build-time validator |
| Dart formatter (new) | No official Dart SD formatter — must be written from scratch | Research community formatters first; build unit tests for Color/double/BoxShadow output |
| Flutter Color format | `#RRGGBB` hex string in Dart output instead of `Color(0xFFRRGGBB)` | Custom color transform in Dart formatter; unit test with known hex values |
| Flutter dimension | String `"16pt"` in Dart output instead of `double 16.0` | Custom `voltventure/dimension/double` transform; pre-build validator rejects string dimensions |
| Flutter elevation | DTCG shadow object → CSS `box-shadow` instead of `BoxShadow(...)` | Custom shadow formatter for Dart platform; separate from JS reference output |
| Flutter line height | Absolute pt line height vs Flutter `height` multiplier | Dart formatter computes `height = lineHeight / fontSize`; document the calculation |
| Font loading | `TextStyle(fontFamily: "Manjari")` string vs `GoogleFonts.manjari(...)` method | ThemeData formatter must call `google_fonts` methods, not use string fontFamily tokens |
| WCAG enforcement | Contrast check is manual, not a build gate | `contrast-pairs.json` + SD action + CI failure on ratio breach |
| Dark mode future-proofing | Semantic tokens hardcode values instead of alias to primitives | All semantic `$value`s are references; names are role-based not color-based |
| Generated file hygiene | `lib/*.dart` committed to git; manual edits overwritten on next build | Auto-generated header comment + CI regeneration + diff check |

---

## Sources

Training data (August 2025 cutoff). Web fetch and web search unavailable during this research session.

**HIGH confidence sources in training:**
- Style Dictionary v3 and v4 official documentation and migration guide
- React Native StyleSheet specification (unitless numeric values)
- WCAG 2.1 contrast ratio specification (W3C)
- Expo managed workflow native module restrictions
- react-native-web supported API list
- Expo Google Fonts PostScript naming convention
- NativeWind v4 architecture (CSS variable based theming)

**LOW confidence — field verification recommended:**
- NativeWind v4 exact behavior of CSS variable references on native targets (Pitfall 4) — verify against current NativeWind v4 docs and GitHub issues
- Storybook addon-a11y RNW compatibility (Pitfall 16) — check current Storybook + RNW compatibility matrix
- Style Dictionary v4 cycle detection completeness — verify whether v4 catches all multi-hop cycles or only direct ones
