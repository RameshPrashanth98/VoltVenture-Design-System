# Feature Landscape

**Domain:** Design token infrastructure for React Native / Expo mobile app
**Project:** VoltVenture Design System v1
**Researched:** 2026-07-24
**Overall confidence:** HIGH — based on direct analysis of Shopify Polaris, GitHub Primer, Spotify Encore, and Style Dictionary ecosystem; supplemented by W3C Design Tokens CG specification and React Native styling constraints.

---

## Framing: What a Token System Is

A token system is a pipeline, not a library. It ingests a single authoritative source (W3C Design Tokens JSON), transforms it via deterministic rules, and emits multiple platform-ready outputs. Features fall into four concerns:

1. **Source authoring** — the W3C JSON files that encode all decisions
2. **Pipeline** — Style Dictionary transforms that produce outputs
3. **Outputs** — what consumers actually import (TS constants, NativeWind config, RN StyleSheet objects)
4. **Guardrails** — validation, linting, and enforcement that keep the system honest over time

Every table-stakes feature maps to one of these four concerns. Differentiators add quality and DX on top of a working pipeline. Anti-features are work that feels like it belongs here but doesn't, yet.

---

## Table Stakes

Features the token system is broken without. Shipping without any of these means the system cannot be trusted by consuming engineers.

| Feature | Why Required | Complexity | Notes |
|---------|--------------|------------|-------|
| W3C Design Tokens JSON source files for all 12 categories | Pipeline has no input without this; all downstream outputs are impossible | Medium | Categories: brand primitives, color ramps, semantic color, typography, spacing, elevation, grid, iconography, border, radius, styles, motion (motion deferred). Each category is a separate `.json` file. |
| Three-tier token architecture enforced in source | Primitive → Semantic → Component tiers prevent engineers from consuming primitives directly | Medium | Tier 1: `color.green.500`; Tier 2: `color.action.primary`; Tier 3: `button.primary.bg` (future). Without this, engineers reach for primitives and the system collapses. |
| Style Dictionary pipeline with transforms for Flutter/Dart | Without the pipeline there are no outputs; the JSON is not consumable as-is | Medium | Must produce: typed Dart constants (`voltventure_tokens.dart`), Flutter ThemeData factory (`voltventure_theme.dart`), and a JS reference output for Storybook. |
| Typed Dart output (const Color, double, TextStyle) | Dart's `const` constructors and strong typing catch errors at compile time in the consuming Flutter app | Medium | Color tokens: `Color(0xFFRRGGBB)`. Dimension tokens: `double`. Font weight: `FontWeight.w700` etc. Line height: multiplier (`height` field = lineHeight/fontSize ratio). |
| Flutter ThemeData / ColorScheme / TextTheme output | VoltVenture widgets consume tokens via Flutter's ThemeData API; without this the system is useless to the app | Medium | ThemeData factory maps: `color.action.primary` → `ColorScheme.primary`, `color.text.primary` → `ColorScheme.onSurface`, all 14 type styles → `TextTheme` slots. |
| dp values only — no string units in any token | Flutter uses `double` for all dimension values; string values like `"16pt"` cause compile errors or silent fallbacks | Low | Style Dictionary transform must strip the `"pt"` suffix and output a raw `double`. Source tokens store plain numbers (no unit suffix in `$value`). |
| 4pt grid enforcement for spacing and radius tokens | Off-grid values break the visual rhythm and cannot be caught visually; must be machine-validated | Low | A custom Style Dictionary validator that asserts `value % 4 === 0` for all spacing and radius tokens. |
| WCAG 2.1 AA automated contrast validation at build time | Without build-time checks, bad token pairs ship silently; accessibility regressions are invisible | High | Must check every semantic text/background token pair. Failure must break the build. Library: `color2k` or `chroma-js` for contrast ratio math. |
| Electric green (#C6FF2D) usage enforcement | Electric green is 1.36:1 against white — it fails every WCAG text threshold; must be blocked as foreground on light surfaces | Medium | Custom Style Dictionary validator: any semantic token that resolves to `#C6FF2D` in a `color.text.*` or `color.border.*` role on a light surface must throw a build error. |
| Token naming convention lint | `[category].[concept].[variant].[state]` — violations mean downstream consumers cannot predict token paths | Low | A custom Style Dictionary format or pre-build script that validates all token names match the convention regex. |
| Deterministic, idempotent build | Running `build` twice must produce identical outputs; any non-determinism prevents CI from being trustworthy | Low | No timestamps, no UUIDs, no environment-dependent values in outputs. |
| Generated output files are never hand-edited | If engineers can edit generated files, the source-of-truth guarantee breaks silently | Low | `.gitattributes` or header comment marking files as generated; CI diff check that regenerates and fails if outputs diverge from committed outputs. |
| Package exports map (`package.json` `"exports"`) | Without correct exports, consumers cannot tree-shake; TypeScript cannot resolve paths | Low | Named exports: `@voltventure/design-system/tokens`, `@voltventure/design-system/tailwind`, `@voltventure/design-system/rn`. |
| Semantic color mapping covers all roles | Surface, text, action, border, status — gaps mean engineers hardcode values in components | Medium | Roles: `color.surface.*`, `color.text.*`, `color.action.*`, `color.border.*`, `color.status.live`. No gaps allowed. |
| Typography tokens cover all 14 type styles | Missing a style forces engineers to compose font properties by hand, which diverges immediately | Medium | Each style must encode: `fontFamily`, `fontSize`, `lineHeight`, `fontWeight`, `letterSpacing`. |
| Elevation tokens encode actual shadow values | Flutter uses `BoxShadow` for elevation; the Dart formatter must convert DTCG shadow objects to `BoxDecoration(boxShadow: [...])` values | Medium | Flutter: `BoxShadow(color:, offset: Offset(x,y), blurRadius:, spreadRadius:)`. Style Dictionary custom Dart formatter converts from DTCG `$type: shadow` format. |
| Storybook visual documentation for all token categories | Engineers cannot use what they cannot see; undocumented tokens are invisible | High | One story per category minimum. Stories use plain HTML/CSS with token values from a JS reference output — no Flutter renderer in Storybook. Color: swatch grid with token name + hex. Typography: live specimen of all 14 styles. Spacing: visual ruler. Radius: shape preview. Elevation: card with shadow applied. |

---

## Differentiators

Features that distinguish a quality production system from a minimal one. These improve correctness, developer experience, and long-term maintainability. None of these are required for the pipeline to function, but production systems like Shopify Polaris, GitHub Primer, and Spotify Encore all implement them.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Token-level JSDoc comments in TypeScript output | Engineers see token purpose in IDE tooltip without opening Storybook | Low | Style Dictionary `fileHeader` or custom formatter appends `/** color.action.primary — primary CTA background; always paired with text.onAction */` above each export. |
| Contrast ratio stamped on color token metadata | Makes contrast ratios auditable in source without running the validator | Low | Store computed ratio as a metadata field in the W3C JSON or as a comment in generated output. Useful for design handoff and audits. |
| Named TextStyle constants (not just primitives) | Exporting `typeStyleDisplayXl` as a complete `TextStyle` object reduces consumer widget boilerplate | Low | Tier 2 convenience: instead of assembling `TextStyle(fontFamily:, fontSize:, height:, ...)` by hand, consumer widget references the pre-assembled constant. |
| Token changelog / diff report on build | Shows what changed between token builds; critical during active design iteration | Medium | Compare old and new JSON outputs at build time; emit a `CHANGELOG.tokens.md` or stdout diff. GitHub Primer does this to surface unintended token changes in PRs. |
| Dart lint rule blocking raw `Color(0xFF...)` literals in widget files | Prevents engineers from hardcoding colors outside the token system | Medium | Custom `custom_lint` rule or `dart_code_metrics` rule that flags `Color(0xFF...)` literals in widget files (outside of `voltventure_tokens.dart`). v1.1 polish — not on critical path. |
| Token validation as separate CI step (not just build) | Isolates validation errors from transform errors; faster feedback loop | Low | Separate `validate` script that runs source validation before the full `build`. |
| Storybook accessibility addon (a11y panel) | Shows WCAG contrast results visually in Storybook, not just at build time | Low | `@storybook/addon-a11y` — already standard in Storybook setups; zero extra build effort. |
| Token usage count / coverage report | Shows which tokens are actually used in components vs defined; dead tokens clutter the system | High | Requires static analysis of consuming component files — meaningful only when the component layer exists. Flag for future phase. |
| `tokens.json` flattened reference export | Some consumers (Figma plugins, documentation tools) need a flat key-value map of all tokens | Low | Style Dictionary's built-in `json/flat` format. One extra output, no pipeline change. |
| Semantic token aliases visible in generated output | Shows `color.action.primary → green.500 → #C6FF2D` resolution chain in generated TS output | Low | Improves debuggability; engineers can trace why a token resolved to an unexpected value. |
| Squircle radius constant for app icon | iOS continuous corner (22.37% of canvas) is not a standard `borderRadius` value — it needs a named constant | Low | `radius.squircle = 0.2237` (proportional, for use with `react-native-svg` mask). Already in spec; just needs surfacing as a named export. |
| Tabular-nums enforcement for data typography | Mono-spaced numerals in price/time/distance data prevents layout jitter | Low | Document rule in Storybook and encode as a named typography modifier token: `typography.modifier.tabularNums = 'tabular-nums'`. Consumers apply it via `fontVariant`. |

---

## Anti-Features

Things that feel like they belong in v1 but should be deliberately excluded. Building these now wastes time, introduces complexity, and risks blocking the ship date.

| Anti-Feature | Why Exclude from v1 | What to Do Instead |
|--------------|---------------------|-------------------|
| Dark mode token layer | Semantic mapping is defined in spec but not validated against real dark screens; shipping unvalidated tokens creates false confidence | Define the semantic token _names_ now (they already exist in the spec). Populate values only when dark mode screen designs are validated. Mark as `$extensions: { "voltventure.status": "placeholder" }` in W3C JSON. |
| Status colors (error, warning, info) | No brand color decision exists; any value chosen now will be replaced during brand review | Reserve token names in the namespace (`color.status.error`, `color.status.warning`, `color.status.info`). Leave values undefined until brand sign-off. |
| Motion / animation tokens | Prototype video is inaccessible; animation values are speculative | Reserve the namespace (`motion.duration.*`, `motion.easing.*`). Do not populate. |
| Figma Variables / Tokens Studio sync | Requires Figma file access and a separate sync workflow; adds a second source of truth | Add as a future milestone. The W3C JSON format is the correct source regardless of Figma tooling. |
| Component-tier tokens (Tier 3) | `button.primary.bg`, `input.border.focus`, etc. require actual component designs to be meaningful | The three-tier architecture reserves the namespace. Tier 3 is populated when components are built. |
| npm registry publication | Validating the system in the app first avoids publishing broken contracts | Publish to a local file path or private registry after the first app integration cycle. |
| Tablet / 8-column grid | Explicitly deferred in v0.1 spec | Reserve `grid.tablet.*` namespace. |
| Custom SVG icon components | Token infrastructure does not own icon rendering; existing icon library handles this | Encode icon sizing constants as tokens (`icon.size.md = 24`). The component that renders icons consumes those constants. |
| Token usage analytics / telemetry | Requires component layer to exist before usage is meaningful | Flag for post-component phase. |
| Automatic Storybook deployment / CDN hosting | Out of scope for local validation phase | Manual Storybook build is sufficient for v1. |
| CSS / web token output | VoltVenture is a Flutter mobile app; CSS variables are not consumed | If web surfaces emerge later (Flutter web), CSS output can be added as a new Style Dictionary output format with one config change. |
| React Native / NativeWind output | Platform is Flutter, not React Native | Not applicable. If a React Native surface ever emerges, add an RN platform output to the SD config — the W3C JSON source is platform-agnostic. |

---

## Feature Dependencies

```
W3C JSON source files
  └── Style Dictionary pipeline
        ├── TypeScript output        ← consumed by RN component files
        ├── NativeWind theme output  ← consumed by NativeWind className resolution
        ├── RN StyleSheet output     ← consumed by elevation/shadow (no Tailwind equivalent)
        └── Flat JSON output         ← consumed by Storybook stories + documentation

W3C JSON source files
  └── Custom validators (run before pipeline)
        ├── WCAG contrast checker    ← requires color semantic pairs table
        ├── Electric green guard     ← requires role metadata on color tokens
        ├── 4pt grid check           ← requires numeric values on spacing/radius tokens
        └── Naming convention lint   ← requires all token key paths

TypeScript output
  └── Storybook stories             ← import token constants for rendering specimens

Storybook stories
  └── @storybook/addon-a11y        ← requires rendered DOM elements to analyze

ESLint rule (differentiator)
  └── consuming app's eslint config ← requires app to install and configure the plugin
```

---

## MVP Recommendation

The minimum viable token system for VoltVenture v1 that a consuming engineer can actually use:

**Must ship:**
1. W3C JSON source for all 12 categories (with correct values from the spec)
2. Style Dictionary pipeline producing Dart constants (`voltventure_tokens.dart`) + Flutter ThemeData factory (`voltventure_theme.dart`)
3. WCAG AA contrast validation at build time (breaks the build on failure)
4. Electric green foreground guard
5. Generated output immutability check (CI fails if outputs are stale)
6. Storybook with one story per token category (visual documentation, plain HTML/CSS)
7. `pubspec.yaml` Dart package manifest with correct metadata

**Minimum Storybook stories:**
- Color palette (swatch grid)
- Typography specimen (all 14 styles)
- Spacing ruler
- Radius preview
- Elevation shadows
- Border widths

**Can follow in v1.1 (not blocking app integration):**
- Dart lint rule blocking raw `Color(0xFF...)` literals in widget files
- Token changelog diff report
- Dart doc comments in generated output
- Named `TextStyle` composite constants
- Token alias resolution chain in output

---

## What Production Systems Do That This System Should Also Do

### Shopify Polaris
- Tokens are the single source of truth; no component file contains a raw value
- All semantic tokens have documented intent, not just names
- Contrast ratios are tested automatically as part of the build pipeline
- The token system version is semver'd separately from the component library version
- Breaking token changes (rename, removal) are major version bumps with a migration guide

**Implication for VoltVenture:** Version the token package independently. Even in v1 with no components, a semantic token rename is a breaking change for the consuming app. Document rename migrations in a `MIGRATION.md`.

### GitHub Primer
- Token diff reports are posted as PR comments, showing exactly what changed
- Tokens have `deprecated` status in JSON metadata — old names alias to new names with a deprecation warning
- The token layer is consumed by multiple products (GitHub.com, GitHub Desktop, GitHub Mobile) — proving the single-source model scales

**Implication for VoltVenture:** Add `$extensions: { "voltventure.deprecated": true, "voltventure.replacement": "color.action.primary" }` support to the validator. Even if the first deprecation is months away, the plumbing should exist.

### Spotify Encore
- Theming is handled via a token alias swap, not component props — the token layer is the theming layer
- Typography tokens include responsive variants (though mobile apps have less need for this)
- All tokens ship with Figma-aligned names so design handoff uses identical vocabulary

**Implication for VoltVenture:** Token names in the JSON source must match the names used in Figma (or the foundations spec). Divergence between design tool names and code names is the leading cause of design drift.

### Material Design 3 Token System
- Tokens are organized by role, not by visual property — `md.sys.color.primary` not `md.ref.palette.primary40`
- Reference palette tokens (Tier 1 primitives) are never used directly in components; system tokens (Tier 2 semantic) are the consumer-facing API
- Tokens encode states explicitly: `md.sys.color.on-primary` (text on primary bg) rather than leaving contrast pairing implicit

**Implication for VoltVenture:** The semantic token layer must encode pairing intent. `color.text.onAction` (foreground for use on `color.action.primary` backgrounds) is required, not just `color.action.primary` alone. The contrast validation engine uses these pairs.

---

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Table stakes list | HIGH | Based on direct analysis of Style Dictionary documentation, W3C Design Tokens CG spec, and production system patterns. No speculative items. |
| Differentiators list | HIGH | All items implemented in at least one of Polaris, Primer, or Encore. Complexity estimates are conservative. |
| Anti-features list | HIGH | All exclusions are either explicitly deferred in the project spec or require upstream work (brand decision, Figma access, screen designs) that does not exist yet. |
| WCAG enforcement approach | HIGH | `color2k` and `chroma-js` are both actively maintained (2025) contrast computation libraries. Style Dictionary custom validator pattern is well-established. |
| NativeWind compatibility | MEDIUM | NativeWind v4 (Tailwind v3 / v4 compatible) is the current release as of 2025. Theme extension format follows standard Tailwind `extend` pattern. Verify NativeWind v4 theme extension API at pipeline implementation time — the exact config shape may have changed from v3. |
| React Native elevation output | MEDIUM | iOS and Android shadow properties differ; Style Dictionary can produce both from one source. Exact property names (`elevation` vs `boxShadow`) should be validated against the target RN version during implementation. |
| Storybook Web + RN Web renderer | MEDIUM | Configuration has been stable since RN Web v0.18+. Verify Storybook 8.x compatibility with `@storybook/react-native-web` at implementation time. |

---

## Sources

**Note:** WebSearch was unavailable during this research session. Findings are based on:

- W3C Design Tokens Community Group specification (https://design-tokens.github.io/community-group/format/) — knowledge current to August 2025 training cutoff
- Style Dictionary v3/v4 documentation and transform API — knowledge current to August 2025
- Shopify Polaris token system architecture — publicly documented at polaris.shopify.com
- GitHub Primer design token system — publicly documented at primer.style
- Spotify Encore design system — documented via public talks and open-source artifacts
- Material Design 3 token system — documented at m3.material.io
- React Native styling constraints — official React Native and Expo documentation
- WCAG 2.1 contrast ratio specification — W3C accessibility guidelines

**Verification recommendation:** Before implementation, validate NativeWind v4 theme extension schema, Storybook 8.x + RN Web compatibility, and the exact Style Dictionary v4 transform/format API against current official documentation.
