---
phase: 4
plan: 2
title: "Expo App Scaffold — apps/showcase/ with metro config, navigation skeleton, PaperProvider, fonts"
subsystem: showcase-app-scaffold
tags: [expo, react-native-paper, expo-router, fonts, monorepo, navigation]
dependency_graph:
  requires: [04-01 — voltventure-design-system package, lib/index.ts barrel export]
  provides: [apps/showcase/ Expo app scaffold, PaperProvider root, SectionList home, detail screen with Preview+Code tabs, REGISTRY skeleton]
  affects: [04-03 through 04-08 — all component and screen plans write into src/ and are registered in REGISTRY]
tech_stack:
  added:
    - expo ~57.0.9
    - react-native-paper ^5.15.3
    - expo-router ~4.0.0
    - expo-font ~57.0.1
    - expo-splash-screen ~57.0.5
    - "@expo-google-fonts/manjari ^0.4.1"
    - "@expo-google-fonts/inter ^0.4.2"
    - "@expo-google-fonts/jetbrains-mono ^0.4.1"
    - react-native-safe-area-context ^5.8.0
    - react-native-screens ^4.26.2
    - react-native-code-highlighter ^1.3.0
    - react-syntax-highlighter ^16.1.1
  patterns:
    - Expo Router file-based routing (app/ directory)
    - PaperProvider at app root wrapping Stack navigator
    - useFonts + SplashScreen.preventAutoHideAsync splash hold pattern
    - REGISTRY map pattern for dynamic item lookup in [item].tsx
    - workspace:* dependency protocol for local monorepo package
key_files:
  created:
    - apps/showcase/package.json
    - apps/showcase/tsconfig.json
    - apps/showcase/metro.config.js
    - apps/showcase/app.json
    - apps/showcase/app/_layout.tsx
    - apps/showcase/app/index.tsx
    - apps/showcase/app/[item].tsx
    - apps/showcase/src/data/registry.ts
  modified: []
decisions:
  - "apps/showcase/package.json uses workspace:* (not file: path) for voltventure-design-system — prevents npm registry 404 on npm install"
  - "metro.config.js is CommonJS (require, not import) — Metro config must not use ESM syntax regardless of root package.json type:module"
  - "theme constant created at module level in _layout.tsx (const theme = createVoltVentureTheme()) — not inside component body to avoid recreation on re-render"
  - "REGISTRY starts as empty object; Wave 2/3 plans populate it without modifying navigation or app root files"
  - "[item].tsx uses state-based tab switcher (not a library) for Preview/Code tabs — minimal deps, full control"
  - "All colors in index.tsx and [item].tsx sourced from tokens.* — no hardcoded hex values"
metrics:
  duration: "8 minutes"
  completed: "2026-08-02"
  tasks_completed: 3
  files_changed: 8
---

# Phase 4 Plan 2: Expo App Scaffold Summary

**One-liner:** Complete Expo Router app scaffold with PaperProvider + useFonts + SplashScreen root, two-section SectionList home screen, and dynamic [item].tsx detail screen with Preview/Code tabs backed by an empty REGISTRY skeleton.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Create package.json, tsconfig.json, metro.config.js, app.json | a2e4b26 | apps/showcase/package.json, tsconfig.json, metro.config.js, app.json |
| 2 | Create app root _layout.tsx with PaperProvider + useFonts + SplashScreen | b133fe0 | apps/showcase/app/_layout.tsx |
| 3 | Create home screen, detail screen, and item registry skeleton | c2ebcd0 | apps/showcase/app/index.tsx, app/[item].tsx, src/data/registry.ts |

## What Was Built

### apps/showcase/package.json
Showcase app manifest with `"main": "expo-router/entry"` for Expo Router entry, `"voltventure-design-system": "workspace:*"` workspace protocol dependency, and all showcase runtime dependencies: expo, react-native-paper, expo-router, expo-font, expo-splash-screen, three @expo-google-fonts packages, react-native-safe-area-context, react-native-screens, react-native-code-highlighter, and react-syntax-highlighter.

### apps/showcase/tsconfig.json
Extends `expo/tsconfig.base` with `strict: true` and a `paths` entry mapping `voltventure-design-system` to `../../lib/index.ts` so `npx tsc --noEmit` resolves the package correctly without needing node_modules.

### apps/showcase/metro.config.js
CommonJS metro config calling `getDefaultConfig(__dirname)` from `expo/metro-config`. No custom watchFolders or sourceExts required — SDK 57 auto-detects monorepos.

### apps/showcase/app.json
Expo config with name "VoltVenture Showcase", slug "voltventure-showcase", version "1.0.0", scheme "voltventureshowcase", platforms ["ios","android"], sdkVersion "57.0.0".

### apps/showcase/app/_layout.tsx
App root with:
- `SplashScreen.preventAutoHideAsync()` at module level
- `const theme = createVoltVentureTheme()` at module level (stable reference, not recreated on render)
- `useFonts()` loading: Manjari_400Regular, Manjari_700Bold, Inter_400Regular, Inter_500Medium, Inter_600SemiBold, JetBrainsMono_400Regular
- `useEffect` calling `SplashScreen.hideAsync()` when `loaded || error`
- Early return `null` while fonts pending
- `<PaperProvider theme={theme}>` wrapping `<Stack screenOptions={{ headerShown: false }} />`

### apps/showcase/app/index.tsx
Home screen `SectionList` with two sections:
- "Components" (11): StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput, SegmentedToggle, ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard
- "Screens" (9): Splash, Onboarding1, Registration, Login, IdScan, FacialScan, HomeMap, NavigateToBike, WalkingDirections

Uses `List.Subheader` for section headers, `List.Item` for rows with chevron-right icon, `Divider` between rows, `router.push(\`/${item}\`)` on press. Container background uses `tokens.colorSurfaceBase` — no hardcoded colors.

### apps/showcase/app/[item].tsx
Dynamic detail screen using `useLocalSearchParams` for item name. Looks up `REGISTRY[item]` and:
- If not found: renders "Coming soon: {item}" text
- If found: renders two-tab UI (state-based, no library) with "Preview" and "Code" tab buttons, showing either `<entry.Preview />` or `<CodeHighlighter>` with `atomOneDark` style and `JetBrainsMono_400Regular` font

All colors from `tokens.*` (colorSurfaceBase, colorBorderSubtle, colorActionPrimary, colorTextPrimary, colorTextSecondary). No hardcoded hex values.

### apps/showcase/src/data/registry.ts
Exports `RegistryEntry` type (`Preview: React.ComponentType; sourceCode: string`) and empty `REGISTRY: Record<string, RegistryEntry> = {}`. Wave 2/3 plans add entries without touching navigation or app root files.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

- `REGISTRY` in `apps/showcase/src/data/registry.ts` is an intentionally empty object. This is not a bug stub — it is the designed skeleton that Wave 2/3 plans populate. The `[item].tsx` "Coming soon" fallback path handles the empty state correctly.

## Threat Flags

None — no network endpoints, auth paths, or trust boundary changes. All new files are local app code with no external data access beyond font loading (already assessed in research).

## Self-Check: PASSED

- [x] apps/showcase/package.json exists: FOUND — contains `"voltventure-design-system": "workspace:*"` and `"expo": "~57.0.9"`
- [x] apps/showcase/tsconfig.json exists: FOUND — paths entry maps voltventure-design-system to ../../lib/index.ts
- [x] apps/showcase/metro.config.js exists: FOUND — CJS, uses getDefaultConfig
- [x] apps/showcase/app.json exists: FOUND — slug voltventure-showcase
- [x] apps/showcase/app/_layout.tsx exists: FOUND — PaperProvider (3 occurrences), SplashScreen.preventAutoHideAsync (1), createVoltVentureTheme (2)
- [x] apps/showcase/app/index.tsx exists: FOUND — SectionList (2), 11 component names + 9 screen names verified
- [x] apps/showcase/app/[item].tsx exists: FOUND — REGISTRY (2), useLocalSearchParams, CodeHighlighter, atomOneDark
- [x] apps/showcase/src/data/registry.ts exists: FOUND — RegistryEntry type (2), REGISTRY export
- [x] Commit a2e4b26 exists: VERIFIED
- [x] Commit b133fe0 exists: VERIFIED
- [x] Commit c2ebcd0 exists: VERIFIED
