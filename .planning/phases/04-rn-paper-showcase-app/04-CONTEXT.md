# Phase 4: React Native Paper Showcase App — Context

**Gathered:** 2026-08-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Build a **component showcase app** (standalone Expo app) that renders all VoltVenture components and screens implemented in React Native Paper, styled with VoltVenture tokens, and displays the source code for each.

The showcase app is the primary deliverable — a native "kitchen sink" inspired by the React Native Paper docs app (https://oss.callstack.com/react-native-paper/), adapted and branded for VoltVenture.

**The showcase app delivers:**
- Expo app (`apps/showcase/`) in a monorepo alongside the design-system package
- Home screen: two-section list — "Components" (11 items) + "Screens" (9 items)
- Each component/screen: **Preview tab** (live RN Paper component) + **Code tab** (syntax-highlighted source)
- All 11 components from Phase 3 implemented in React Native Paper with VoltVenture tokens
- All 9 HIFI screens from Phase 3 reconstructed as React Native Paper screen compositions
- `createVoltVentureTheme()` applied via `PaperProvider` at app root
- Fonts loaded via `expo-google-fonts` (Manjari, Inter, JetBrains Mono)

**Done when:**
- Metro bundler starts without TypeScript errors
- All 20 items (11 components + 9 screens) render on iOS simulator OR Android emulator
- Electric green (`#C6FF2D`) and Volt Black (`#0F0F0F`) brand palette visibly applied
- Code tab shows readable source for each item

**NOT in Phase 4 scope:**
- Publishing to App Store / Play Store
- Production-grade navigation or routing (auth flows, deep links)
- Dark mode
- Component unit tests
- Storybook for React Native (`@storybook/react-native`)
- The actual VoltVenture production ride-hailing app

</domain>

<decisions>
## Implementation Decisions

### D-01: App Type — Component Showcase
Phase 4 builds a **component showcase app**, not the production VoltVenture ride-hailing app. The showcase is a standalone Expo app modeled after the React Native Paper documentation app. It exists to demonstrate and document VoltVenture's RN Paper component library with live previews and source code.

### D-02: Source Code Display — Preview + Code Tabs
Each component and screen entry uses a **two-tab layout**:
- **Preview tab** — live rendered React Native Paper component with VoltVenture theming
- **Code tab** — scrollable, syntax-highlighted source code block showing the exact RN Paper implementation

This pattern matches the React Native Paper docs site reference (https://oss.callstack.com/react-native-paper/).

### D-03: Scope — All 9 HIFI Screens + 11 Components
The showcase covers the same 20 items built as HTML/CSS stories in Phase 3:

**11 Components:**
- StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput
- SegmentedToggle, ProgressStrip, TrustPanel, MapPin
- TabBar, BottomCard

**9 Screens (HIFI only):**
- Splash, Onboarding1, Registration, Login
- IdScan, FacialScan
- HomeMap, NavigateToBike, WalkingDirections

Each item is implemented in React Native Paper (not HTML/CSS) and includes source code display.

### D-04: Navigation — Two-Section List
The showcase home screen uses a flat two-section list:
```
Components (11)         ← section header
  StatusBar
  Button
  ...
Screens (9)             ← section header
  Splash
  Onboarding1
  ...
```
Tapping any item navigates to a detail screen with Preview + Code tabs.
Navigation: React Navigation (stack) — standard Expo pattern.

### D-05: Package Shape — Monorepo with Local Path Dependency
The design system package (`6. Design System/`) must be restructured as an importable library before the showcase app can consume it:
- Add `"main": "lib/voltventure_theme.ts"` (or a compiled JS entry) and `"exports"` field to the design system `package.json`
- Add `"name": "voltventure-design-system"` (importable name, separate from the build-tooling name)
- Showcase app lives in `apps/showcase/` relative to the design system root
- Showcase app `package.json` references design system via `"voltventure-design-system": "file:../../"` (relative path)
- This is a local monorepo — no npm publish required

### D-06: Font Loading — expo-google-fonts
Fonts loaded via `expo-google-fonts` packages:
- `@expo-google-fonts/manjari` — display typeface
- `@expo-google-fonts/inter` — body typeface
- `@expo-google-fonts/jetbrains-mono` — monospace / code blocks

Use `useFonts()` hook at app root; show a loading screen (or `SplashScreen.preventAutoHideAsync()`) while fonts load. Requires internet connection — acceptable for a developer showcase app.

### D-07: Done-Bar
Phase 4 is complete when:
1. Metro bundler starts without TypeScript errors (`npx expo start`)
2. All 20 showcase items render on **iOS simulator OR Android emulator** (one platform sufficient)
3. Electric green (`#C6FF2D`) and Volt Black (`#0F0F0F`) visibly applied via `createVoltVentureTheme()`
4. Each item's Code tab displays readable source code

NOT required for done-bar:
- Both iOS + Android verified
- Visual design sign-off
- Production build (`eas build`)

### D-08: RN Paper Branding Adaptation
Components use React Native Paper primitives (`Button`, `Card`, `TextInput`, `Surface`, `Divider`, `BottomNavigation`, etc.) with `createVoltVentureTheme()` applied at the `PaperProvider` level. VoltVenture-specific styling (electric green as primary, Volt Black surface overlays, custom radius values) flows through the theme — components do NOT hardcode color hex values.

### Claude's Discretion
- Exact folder structure within `apps/showcase/` (screens/, components/, navigation/, etc.)
- Syntax highlighting library for the Code tab (e.g., `react-native-syntax-highlighter`, `react-native-code-highlight`, or a custom ScrollView with styled Text)
- Whether to use Expo Router or React Navigation for the showcase navigation (either works; lean toward whichever is simpler for a documentation-style app)
- Loading indicator style while fonts load
- Screen background color for the showcase chrome (should follow VoltVenture tokens — `colorSurfaceBase` white)

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Design System Package (source of truth for tokens + theme)
- `lib/voltventure_theme.ts` — `createVoltVentureTheme()` factory. Spread strategy on `MD3LightTheme`. 6 color roles overridden. Must be imported via local path dep.
- `lib/voltventure_tokens.ts` — Typed TypeScript constants for all semantic tokens. Used directly in component implementations for spacing, radius, border, typography values.
- `generated/tokens.js` — JS reference (for builds). TypeScript components use `voltventure_tokens.ts` instead.
- `package.json` — Currently named `voltventure-design-system-tools`. **Must be updated** in Phase 4 to add `main`/`exports` and a library-suitable `name` field before the showcase app can import it.

### HIFI Reference (component + screen source designs)
- `voltventure_wireframes.pen` — All wireframes and Hi-Fi screens. Use Pencil MCP tools ONLY (file is encrypted). The planner MUST use this to match Phase 4 RN implementations against the HIFI visual specs.

### Phase 3 Patterns (what each component looks like in HTML/CSS — use as visual reference)
- `.planning/phases/03-component-library-storybook/03-CONTEXT.md` — Component list, screen list, visual descriptions, story patterns. Phase 4 re-implements these as RN Paper instead of HTML/CSS.
- `stories/components/` — 11 HTML/CSS component story files. Reference for visual behavior before converting to RN Paper.
- `stories/screens/` — 9 HTML/CSS screen story files. Reference for screen compositions.

### React Native Paper Documentation (adaptation reference)
- https://oss.callstack.com/react-native-paper/ — The showcase app is modeled after this documentation app. Component API, theming docs, and code examples are the primary reference for RN Paper usage.

### Project Context
- `.planning/PROJECT.md` — VoltVenture brand rules (electric green, Volt Black, 4pt grid, touch target floor 48dp), three-tier token architecture, constraints.
- `.planning/ROADMAP.md` — Phase 4 deliverables and done-bar.

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `lib/voltventure_theme.ts` — `createVoltVentureTheme()` is ready to be passed to `<PaperProvider theme={createVoltVentureTheme()}>`. No changes needed to the theme factory itself.
- `lib/voltventure_tokens.ts` — All spacing, radius, border, typography tokens available as typed TS constants. Use these in component `StyleSheet.create()` calls instead of hardcoded values.
- `generated/tokens.js` — JS reference for any tooling that needs it (not for RN components).

### Established Patterns (from prior phases)
- **Token consumption rule**: No inline raw hex values in components. Every color, spacing, and radius value must come from a token or the `MD3Theme` object. Enforced by design.
- **Electric green rule**: `colorActionPrimary` (`#C6FF2D`) is background only on light surfaces. Foreground on green is always `colorTextPrimary` (`#0F0F0F`). This constraint applies to all RN Paper `Button` and CTA implementations.
- **Typography token shape**: `tokens.typeHeadingSm.fontSize`, `.lineHeight`, `.fontFamily` — composite objects, not flat values.
- **4pt grid**: All spacing values are multiples of 4dp. Use `tokens.space{N}` constants.
- **Touch target floor**: 48dp minimum for all interactive elements (`tokens.sizeMinTapTarget`).

### Integration Points
- `PaperProvider` wraps the entire showcase app root with `theme={createVoltVentureTheme()}`
- `useFonts()` from `expo-font` (used by expo-google-fonts) must resolve before app renders
- Design system package must have a valid `main` entry for the showcase app's `import { createVoltVentureTheme } from 'voltventure-design-system'` to resolve

</code_context>

<specifics>
## Specific Ideas

**Reference app**: React Native Paper documentation app (https://oss.callstack.com/react-native-paper/) is the explicit UX model. The planner should study its two-panel navigation (component list → detail with tabs) as the pattern to follow.

**Component showcase entry pattern:**
```tsx
// apps/showcase/src/screens/ButtonScreen.tsx
import { Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ButtonPreview() {
  return (
    <Button mode="contained" onPress={() => {}}>
      Book a Ride
    </Button>
  );
}

export const ButtonSourceCode = `
<Button mode="contained" onPress={handlePress}>
  Book a Ride
</Button>
`;
```

**Monorepo structure:**
```
6. Design System/           ← existing design system root
  package.json              ← add main/exports, rename to voltventure-design-system
  lib/
    voltventure_tokens.ts
    voltventure_theme.ts
  apps/
    showcase/               ← NEW Expo app
      package.json          ← "voltventure-design-system": "file:../../"
      app/
        _layout.tsx         ← PaperProvider + useFonts root
        index.tsx           ← two-section component/screen list
        [item].tsx          ← Preview + Code tab detail screen
```

</specifics>

<deferred>
## Deferred Ideas

- **Storybook for React Native** (`@storybook/react-native`) — requires Expo integration and is a separate toolchain. Future phase after this showcase exists.
- **Production VoltVenture app** — actual ride-hailing flows with real navigation and backend. This showcase is a documentation artifact, not the production app.
- **Dark mode** — semantic dark token layer needs validated screen designs first (already deferred in PROJECT.md backlog).
- **EAS Build / App Store submission** — out of scope for a developer showcase. Future milestone.
- **Component unit tests** — future phase; not required for showcase done-bar.
- **Chromatic / visual regression for RN** — not yet possible without Storybook RN integration.

</deferred>

---

*Phase: 04-rn-paper-showcase-app*
*Context gathered: 2026-08-01 (discuss-phase, all areas)*
