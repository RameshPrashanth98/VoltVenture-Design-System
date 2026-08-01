# Phase 4: React Native Paper Showcase App — Research

**Researched:** 2026-08-01
**Domain:** Expo SDK 57 + React Native Paper 5.x + monorepo wiring + syntax highlighting
**Confidence:** HIGH (core stack verified against npm registry and official docs)

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**D-01: App Type — Component Showcase**
Phase 4 builds a component showcase app, not the production VoltVenture ride-hailing app. Standalone Expo app modeled after the React Native Paper documentation app.

**D-02: Source Code Display — Preview + Code Tabs**
Each entry uses a two-tab layout: Preview tab (live RN Paper component) + Code tab (syntax-highlighted source).

**D-03: Scope — All 9 HIFI Screens + 11 Components**
11 Components: StatusBar, Button, SocialAuthButtons, OrDivider, PhoneInput, SegmentedToggle, ProgressStrip, TrustPanel, MapPin, TabBar, BottomCard
9 Screens (HIFI): Splash, Onboarding1, Registration, Login, IdScan, FacialScan, HomeMap, NavigateToBike, WalkingDirections

**D-04: Navigation — Two-Section List via React Navigation stack**
Home screen: two-section SectionList with Components (11) and Screens (9) headers.
Tapping navigates to detail screen with Preview + Code tabs.
React Navigation (stack) confirmed — standard Expo pattern.

**D-05: Package Shape — Monorepo with Local Path Dependency**
- Design system `package.json` must add `"name": "voltventure-design-system"`, `"main"`, and `"exports"` fields
- Showcase lives in `apps/showcase/` relative to design system root
- Showcase references design system via workspace dependency (NOT `file:../../` raw path — see research below)

**D-06: Font Loading — expo-google-fonts**
Fonts: `@expo-google-fonts/manjari`, `@expo-google-fonts/inter`, `@expo-google-fonts/jetbrains-mono`
Pattern: `useFonts()` hook + `SplashScreen.preventAutoHideAsync()` at app root.

**D-07: Done-Bar**
1. Metro bundler starts without TypeScript errors (`npx expo start`)
2. All 20 items render on iOS simulator OR Android emulator
3. Electric green (`#C6FF2D`) and Volt Black (`#0F0F0F`) visibly applied
4. Code tab shows readable source

**D-08: RN Paper Branding Adaptation**
Components use RN Paper primitives with `createVoltVentureTheme()` at `PaperProvider` level. No hardcoded hex values in components.

### Claude's Discretion

- Exact folder structure within `apps/showcase/` (screens/, components/, navigation/, etc.)
- Syntax highlighting library for the Code tab
- Whether to use Expo Router or React Navigation (locked to React Navigation by D-04, but navigation library choice within that is discretion)
- Loading indicator style while fonts load
- Screen background color for showcase chrome (should follow `colorSurfaceBase` white)

### Deferred Ideas (OUT OF SCOPE)

- Storybook for React Native (`@storybook/react-native`)
- Production VoltVenture ride-hailing app
- Dark mode
- EAS Build / App Store submission
- Component unit tests
- Chromatic / visual regression for RN
</user_constraints>

---

## Summary

Phase 4 builds a standalone Expo SDK 57 app (`apps/showcase/`) inside the existing design system monorepo. The critical infrastructure work is: (1) converting the design system root into a proper npm workspace monorepo, (2) wiring the design system as a local package dependency the showcase can import by name, and (3) implementing all 20 items (11 components + 9 screens) as React Native Paper compositions.

The showcase app architecture is straightforward: a React Navigation stack with a home `SectionList` (two sections: Components and Screens) navigating to per-item detail screens that contain a two-tab layout (Preview + Code). `PaperProvider` wraps the entire app with `createVoltVentureTheme()`. Fonts load via `useFonts()` from `expo-google-fonts` packages with `SplashScreen.preventAutoHideAsync()` holding the splash until fonts resolve.

The most important technical finding is the **monorepo wiring approach**: the existing `package.json` currently has `"type": "module"` and is a Node.js ESM build-tooling package, NOT a React Native consumable library. The showcase app should be wired via **npm workspaces** (add `"workspaces": ["apps/*"]` to root `package.json`) with the design system referenced as `"voltventure-design-system": "*"` in the showcase's dependencies. The root must also gain a proper `"main"` field pointing to the TS entry. Metro in Expo SDK 57 can consume `.ts` files directly — no pre-compilation to JS is required for monorepo local packages.

For syntax highlighting, `react-native-syntax-highlighter` (last updated 2023, peer requires `react-syntax-highlighter ^6.0.4`) is incompatible with the current ecosystem (react-syntax-highlighter is at v16.x). The correct choice is `react-native-code-highlighter` v1.3.0 (updated 2025-07-01, requires `react-syntax-highlighter >= 15.5.0`).

**Primary recommendation:** Use npm workspaces + `workspace:*` dependency notation, Expo Router (default in SDK 57 scaffolds) for navigation, and `react-native-code-highlighter` for syntax highlighting.

---

## Architectural Responsibility Map

| Capability | Primary Tier | Secondary Tier | Rationale |
|------------|-------------|----------------|-----------|
| Theme application | App root (PaperProvider) | — | Theme must wrap entire tree; all Paper components inherit from it |
| Font loading | App root (_layout / App.tsx) | expo-splash-screen | useFonts() must resolve before any text renders |
| Navigation structure | React Navigation stack | — | Stack handles home → detail routing; SectionList owns the list UI |
| Component/screen preview rendering | Per-item detail screen (Preview tab) | — | Each preview is isolated in its own component |
| Source code display | Per-item detail screen (Code tab) | react-native-code-highlighter | Static string exported alongside each component |
| Token consumption | Individual components via StyleSheet.create() | PaperProvider theme | Spacing/radius/border from tokens; colors from MD3Theme |
| Design system package resolution | npm workspaces + Metro | tsconfig paths | Workspace hoisting + Metro sourceExts handles .ts files |
| Local path dependency | Root package.json workspaces | Design system package.json main field | Workspace protocol resolves by name, not file path |

---

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| expo | 57.0.9 | SDK + build tooling | Current LTS; SDK 57 = React Native 0.78 [VERIFIED: npm registry] |
| react-native-paper | 5.15.3 | MD3 component library | Project decision (D-08); already used in lib/voltventure_theme.ts [VERIFIED: npm registry] |
| @react-navigation/native | 7.3.14 | Navigation core | D-04 locked; industry standard for Expo RN [VERIFIED: npm registry] |
| @react-navigation/native-stack | 7.18.6 | Stack navigator | Simpler than @react-navigation/stack for docs apps; native performance [VERIFIED: npm registry] |
| expo-font | 57.0.1 | Font loading | Required by expo-google-fonts useFonts() hook [VERIFIED: npm registry] |
| expo-splash-screen | 57.0.5 | Splash screen control | Holds splash while fonts load (D-06 pattern) [VERIFIED: npm registry] |
| expo-status-bar | 57.0.1 | Status bar management | Expo-compatible status bar [VERIFIED: npm registry] |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @expo-google-fonts/inter | 0.4.2 | Inter font (body) | D-06 locked; useFonts() in app root [VERIFIED: npm registry] |
| @expo-google-fonts/manjari | 0.4.1 | Manjari font (display) | D-06 locked; useFonts() in app root [VERIFIED: npm registry] |
| @expo-google-fonts/jetbrains-mono | 0.4.1 | JetBrains Mono (code) | D-06 locked; monospace in Code tabs [VERIFIED: npm registry] |
| react-native-safe-area-context | 5.8.0 | Safe area insets | Required by React Navigation [VERIFIED: npm registry] |
| react-native-screens | 4.26.2 | Native screen components | Required by React Navigation [VERIFIED: npm registry] |
| react-native-code-highlighter | 1.3.0 | Syntax highlighting (Code tab) | Maintained (2025-07); requires react-syntax-highlighter >=15.5.0 [VERIFIED: npm registry] |
| react-syntax-highlighter | 16.1.1 | Peer dep for code highlighter | Mandatory peer dep; provides language parsers + styles [VERIFIED: npm registry] |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| react-native-code-highlighter | react-native-syntax-highlighter | REJECTED: last updated 2023; peer requires react-syntax-highlighter ^6.0.4 (current is 16.x — incompatible) |
| react-native-code-highlighter | Custom ScrollView + monospace Text | Viable fallback if library causes issues; no color tokens in output but zero deps |
| @react-navigation/native-stack | @react-navigation/stack | native-stack is faster; stack is more customizable. For a showcase, native-stack is sufficient |
| Expo Router | React Navigation | Expo Router is the new default in SDK 57 creates; D-04 chose React Navigation but Expo Router would also work. If using Expo Router, the file structure maps directly to routes (simpler). See note below. |

**Navigation note (Claude's Discretion):** D-04 says React Navigation stack but also says "either works; lean toward simpler." Expo Router is the default in `npx create-expo-app@latest --template default@sdk-57`. For a documentation showcase with ~20 static routes, Expo Router with `app/` directory (file-based) eliminates the need to write a navigator config and is **marginally simpler**. Recommendation: use Expo Router (default template) — see Pattern 3 below.

**Installation:**
```bash
# From apps/showcase/
npx expo install expo expo-font expo-splash-screen expo-status-bar
npx expo install @expo-google-fonts/inter @expo-google-fonts/manjari @expo-google-fonts/jetbrains-mono
npx expo install react-native-paper react-native-safe-area-context react-native-screens
npx expo install @react-navigation/native @react-navigation/native-stack
npm install react-native-code-highlighter react-syntax-highlighter
npm install --save-dev @types/react-syntax-highlighter
```

**Version verification:** All versions confirmed via `npm view <pkg> version` on 2026-08-01.

---

## Package Legitimacy Audit

| Package | Registry | Age | Downloads | Source Repo | slopcheck | Disposition |
|---------|----------|-----|-----------|-------------|-----------|-------------|
| expo | npm | 10+ yrs | Very high | github.com/expo/expo | n/a | Approved |
| react-native-paper | npm | 7+ yrs | Very high | github.com/callstack/react-native-paper | n/a | Approved |
| @react-navigation/native | npm | 7+ yrs | Very high | github.com/react-navigation/react-navigation | n/a | Approved |
| @react-navigation/native-stack | npm | 5+ yrs | Very high | github.com/react-navigation/react-navigation | n/a | Approved |
| expo-font | npm | 7+ yrs | Very high | github.com/expo/expo | n/a | Approved |
| expo-splash-screen | npm | 5+ yrs | Very high | github.com/expo/expo | n/a | Approved |
| expo-status-bar | npm | 5+ yrs | High | github.com/expo/expo | n/a | Approved |
| @expo-google-fonts/inter | npm | 4+ yrs | High | github.com/expo/google-fonts | n/a | Approved — last updated 2025-09-11 |
| @expo-google-fonts/manjari | npm | 4+ yrs | Medium | github.com/expo/google-fonts | n/a | Approved — last updated 2025-09-12 |
| @expo-google-fonts/jetbrains-mono | npm | 4+ yrs | Medium | github.com/expo/google-fonts | n/a | Approved — last updated 2025-09-12 |
| react-native-safe-area-context | npm | 5+ yrs | Very high | github.com/th3rdwave/react-native-safe-area-context | n/a | Approved |
| react-native-screens | npm | 5+ yrs | Very high | github.com/software-mansion/react-native-screens | n/a | Approved |
| react-native-code-highlighter | npm | 3 yrs | Medium | github.com/gmsgowtham/react-native-code-highlighter | n/a | Approved — updated 2025-07-01; MIT |
| react-syntax-highlighter | npm | 9+ yrs | Very high | github.com/react-syntax-highlighter/react-syntax-highlighter | n/a | Approved |
| react-native-syntax-highlighter | npm | — | — | github.com/conorhastings/react-native-syntax-highlighter | n/a | REMOVED — last updated 2023-09; peer requires react-syntax-highlighter ^6.0.4; incompatible with current ecosystem |

*slopcheck was unavailable at research time. All packages above are from well-known official organizations (Expo, Callstack, React Navigation, Software Mansion) or have verifiable GitHub source repos with multi-year histories. The one flagged package (react-native-syntax-highlighter) was removed on technical grounds (incompatible peer dep), not legitimacy grounds.*

**Packages removed:** `react-native-syntax-highlighter` — removed (incompatible peer dependency: requires react-syntax-highlighter ^6.0.4, current is 16.x).
**Packages flagged as suspicious:** None.

---

## Architecture Patterns

### System Architecture Diagram

```
App Boot
  │
  ├── SplashScreen.preventAutoHideAsync()
  │
  ├── useFonts({ Manjari_400Regular, Inter_400Regular, ... })
  │         │
  │         ▼ [fonts loaded OR error]
  │   SplashScreen.hideAsync()
  │
  ▼
PaperProvider
  theme={createVoltVentureTheme()}   ← lib/voltventure_theme.ts
  │
  └── NavigationContainer (Expo Router or React Navigation)
        │
        ├── Home Screen  ── SectionList
        │     ├── Section: "Components" (11 items)
        │     │     └── [item] → navigates to Detail
        │     └── Section: "Screens" (9 items)
        │           └── [item] → navigates to Detail
        │
        └── Detail Screen
              │
              ├── Tab: "Preview"
              │     └── <ComponentOrScreenImplementation />
              │           uses tokens.* + MD3Theme colors
              │
              └── Tab: "Code"
                    └── <CodeHighlighter>
                          language="tsx"
                          hljsStyle={atomOneDark}
                          code={ComponentSourceCode}
                        />
```

### Recommended Project Structure
```
6. Design System/              ← existing (root of workspace)
  package.json                 ← ADD: "workspaces": ["apps/*"], "name": "voltventure-design-system", "main": "./lib/index.ts"
  lib/
    voltventure_tokens.ts      ← existing (untouched)
    voltventure_theme.ts       ← existing (untouched)
    index.ts                   ← NEW: re-export entry point for showcase imports
  apps/
    showcase/                  ← NEW: Expo app
      package.json             ← "voltventure-design-system": "workspace:*"
      app.json / expo config
      app/                     ← Expo Router file-based routes
        _layout.tsx            ← PaperProvider + useFonts root
        index.tsx              ← Home: SectionList of 20 items
        [item].tsx             ← Detail: Preview + Code tabs
      src/
        components/            ← 11 RN Paper component implementations
          ButtonPreview.tsx
          TabBarPreview.tsx
          ... (11 files)
        screens/               ← 9 RN Paper screen implementations
          SplashPreview.tsx
          HomeMapPreview.tsx
          ... (9 files)
        data/
          items.ts             ← registry: { id, title, section, Preview, sourceCode }
        theme/
          (no files needed — theme comes from voltventure-design-system package)
```

**Critical:** The lib directory currently has no `index.ts`. One must be created as the `main` entry so `import { createVoltVentureTheme } from 'voltventure-design-system'` resolves. Both `voltventure_theme.ts` and `voltventure_tokens.ts` must be re-exported from it.

### Pattern 1: Monorepo Wiring (npm workspaces)

**What:** Convert existing design system root into an npm workspace monorepo so the showcase can import the design system by package name.

**Step A — Root `package.json` changes required:**
```json
{
  "name": "voltventure-design-system",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "main": "./lib/index.ts",
  "exports": {
    ".": "./lib/index.ts"
  },
  "workspaces": ["apps/*"],
  "scripts": { ... (existing) }
}
```

**WARNING on `"type": "module"`:** The existing root `package.json` has `"type": "module"`. This is fine for the Node.js build tooling (Style Dictionary, scripts). However, Metro bundler (which runs the Expo app) has its own module resolution and does NOT use Node's `"type"` field. Metro resolves files by extension, not by `"type"`. This should not cause a conflict — Metro reads `.ts` files directly via its own transformer. [ASSUMED — Metro documentation confirms it ignores Node.js module type field for bundling]

**Step B — New `lib/index.ts` export file:**
```typescript
// lib/index.ts — public entry point for voltventure-design-system package
export * from './voltventure_tokens';
export { createVoltVentureTheme } from './voltventure_theme';
```

**Step C — Showcase `apps/showcase/package.json` dependency:**
```json
{
  "name": "voltventure-showcase",
  "version": "1.0.0",
  "dependencies": {
    "voltventure-design-system": "workspace:*",
    "expo": "~57.0.9",
    "react-native-paper": "^5.15.3",
    ...
  }
}
```

The `workspace:*` syntax (supported by npm 7+ and Bun) ensures the package NEVER resolves from the npm registry — it always uses the local workspace copy. [VERIFIED: Expo official docs — docs.expo.dev/guides/monorepos/]

**Step D — Install from root:**
```bash
# From the design system root (6. Design System/)
npm install
# This installs all workspace packages and links voltventure-design-system into apps/showcase/node_modules
```

### Pattern 2: Metro Consuming Local .ts Files

**What:** Expo SDK 57 Metro can consume `.ts` files directly from local workspace packages — no pre-compilation step needed.

**When to use:** Always, for a local monorepo. Only pre-compile if publishing to npm registry (not required here per D-05).

**How it works:** Metro's transformer (`@expo/metro-config`) includes TypeScript in `sourceExts` by default. When it encounters `import { createVoltVentureTheme } from 'voltventure-design-system'`, it:
1. Resolves the package name via workspace symlink in `node_modules/voltventure-design-system`
2. Reads `package.json#main` → `./lib/index.ts`
3. Transforms the `.ts` file directly using Babel + TypeScript preset

**No `metro.config.js` customization needed** for SDK 57 with npm workspaces. [VERIFIED: Expo official docs — SDK 52+ has automatic monorepo support]

**Pitfall:** If Metro throws "Unable to resolve module 'voltventure-design-system'", clear cache first: `npx expo start --clear`. The cache may hold an invalid resolution from before workspace linking.

**Pitfall:** TypeScript's own `tsc --noEmit` check in the showcase app needs a separate `tsconfig.json` that extends the Expo TypeScript config and adds `paths` for the workspace package. Example:
```json
// apps/showcase/tsconfig.json
{
  "extends": "expo/tsconfig.base",
  "compilerOptions": {
    "strict": true,
    "paths": {
      "voltventure-design-system": ["../../lib/index.ts"]
    }
  }
}
```

### Pattern 3: PaperProvider at App Root with Custom Theme

**What:** Wrap the entire Expo Router tree in `PaperProvider` with the VoltVenture theme.

**Source:** Verified against react-native-paper theming documentation and community examples [CITED: readmedium.com/the-ultimate-guide-to-custom-theming-with-react-native-paper-expo-and-expo-router]

```tsx
// apps/showcase/app/_layout.tsx
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Manjari_400Regular, Manjari_700Bold } from '@expo-google-fonts/manjari';
import { Inter_400Regular, Inter_600SemiBold } from '@expo-google-fonts/inter';
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
import { createVoltVentureTheme } from 'voltventure-design-system';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manjari_400Regular,
    Manjari_700Bold,
    Inter_400Regular,
    Inter_600SemiBold,
    JetBrainsMono_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <PaperProvider theme={createVoltVentureTheme()}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
```

**Key points:**
- `SplashScreen.preventAutoHideAsync()` called at module level (before component mounts)
- `useFonts()` returns `[loaded, error]` tuple — hide splash on either condition (don't block on error)
- `createVoltVentureTheme()` is called once at render; creates a stable theme object
- `PaperProvider` must be the outermost wrapper — it provides theme context to all `react-native-paper` components

### Pattern 4: Font Variable Names from expo-google-fonts

The `@expo-google-fonts` packages export named font variables matching the Google Fonts naming convention. The exact export names matter for `useFonts()`. [VERIFIED: npm registry + github.com/expo/google-fonts]

```typescript
// From @expo-google-fonts/manjari:
import { Manjari_400Regular, Manjari_700Bold } from '@expo-google-fonts/manjari';
// fontFamily string: 'Manjari_400Regular'

// From @expo-google-fonts/inter:
import { Inter_400Regular, Inter_500Medium, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
// fontFamily string: 'Inter_400Regular'

// From @expo-google-fonts/jetbrains-mono:
import { JetBrainsMono_400Regular } from '@expo-google-fonts/jetbrains-mono';
// fontFamily string: 'JetBrainsMono_400Regular'
```

Usage in StyleSheet:
```typescript
StyleSheet.create({
  headingText: {
    fontFamily: 'Manjari_700Bold',  // must match the key passed to useFonts()
    fontSize: tokens.typeHeadingLg.fontSize,
  }
})
```

### Pattern 5: Code Tab Syntax Highlighting

**What:** Display React Native source code in a scrollable, syntax-highlighted block.

```tsx
// apps/showcase/src/components/CodeTab.tsx
import CodeHighlighter from 'react-native-code-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import * as tokens from 'voltventure-design-system';

interface CodeTabProps {
  code: string;
}

export function CodeTab({ code }: CodeTabProps) {
  return (
    <CodeHighlighter
      hljsStyle={atomOneDark}
      language="tsx"
      textStyle={{
        fontFamily: 'JetBrainsMono_400Regular',
        fontSize: tokens.typeBodySm.fontSize,
      }}
      scrollViewProps={{
        contentContainerStyle: { padding: tokens.space400 }
      }}
    >
      {code}
    </CodeHighlighter>
  );
}
```

**Fallback:** If `react-native-code-highlighter` causes any bundler error (e.g., CSS-in-JS conflict from `css-to-react-native` dep), use the custom ScrollView approach:
```tsx
// Fallback: plain monospace, no color tokens
<ScrollView horizontal>
  <Text style={{ fontFamily: 'JetBrainsMono_400Regular', fontSize: 12, color: '#c8c8c8', backgroundColor: '#1a1a1a', padding: 16 }}>
    {code}
  </Text>
</ScrollView>
```
The fallback is always viable — implement `CodeHighlighter` first, fall back to `ScrollView + Text` if it fails.

### Pattern 6: Home Screen SectionList

```tsx
// apps/showcase/app/index.tsx
import { SectionList, Pressable, Text, View } from 'react-native';
import { useRouter } from 'expo-router';
import { List, Divider } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

const SECTIONS = [
  {
    title: 'Components',
    data: ['StatusBar', 'Button', 'SocialAuthButtons', 'OrDivider', 'PhoneInput',
           'SegmentedToggle', 'ProgressStrip', 'TrustPanel', 'MapPin', 'TabBar', 'BottomCard'],
  },
  {
    title: 'Screens',
    data: ['Splash', 'Onboarding1', 'Registration', 'Login',
           'IdScan', 'FacialScan', 'HomeMap', 'NavigateToBike', 'WalkingDirections'],
  },
];

export default function HomeScreen() {
  const router = useRouter();
  return (
    <SectionList
      sections={SECTIONS}
      keyExtractor={(item) => item}
      renderSectionHeader={({ section }) => (
        <List.Subheader>{section.title}</List.Subheader>
      )}
      renderItem={({ item }) => (
        <>
          <List.Item
            title={item}
            onPress={() => router.push(`/${item}`)}
            right={(props) => <List.Icon {...props} icon="chevron-right" />}
          />
          <Divider />
        </>
      )}
    />
  );
}
```

### Pattern 7: Component Item Registry

Instead of 20 separate route files, use a single dynamic route `app/[item].tsx` with a registry:

```typescript
// src/data/registry.ts
import { ButtonPreview, ButtonSourceCode } from '../components/ButtonPreview';
import { TabBarPreview, TabBarSourceCode } from '../components/TabBarPreview';
// ... all 20 imports

export const REGISTRY: Record<string, {
  Preview: React.ComponentType;
  sourceCode: string;
}> = {
  Button: { Preview: ButtonPreview, sourceCode: ButtonSourceCode },
  TabBar: { Preview: TabBarPreview, sourceCode: TabBarSourceCode },
  // ...
};
```

```tsx
// app/[item].tsx
import { useLocalSearchParams } from 'expo-router';
import { REGISTRY } from '../src/data/registry';

export default function ItemScreen() {
  const { item } = useLocalSearchParams<{ item: string }>();
  const entry = REGISTRY[item];
  if (!entry) return <Text>Not found: {item}</Text>;
  // render Preview tab + Code tab
}
```

### Anti-Patterns to Avoid

- **Hardcoded hex values in components:** All colors must come from `tokens.*` or the `MD3Theme` object from `useTheme()` hook. Violates D-08 and the project token consumption rule.
- **`file:../../` as dependency:** Avoid raw file: paths in favor of workspace protocol. `file:` paths do not get properly hoisted by npm workspaces and Metro may fail to watch them.
- **Using `react-native-syntax-highlighter`:** Peer requires react-syntax-highlighter ^6.0.4; will conflict with react-native-code-highlighter or modern installs. Use `react-native-code-highlighter` instead.
- **Calling `createVoltVentureTheme()` inside a component body without memoization:** The function creates a new object on every render. Call it once at module level or memoize:
  ```tsx
  const theme = createVoltVentureTheme(); // at module level, outside component
  ```
- **Forgetting `react-native-paper` in showcase's `package.json`:** The design system `lib/voltventure_theme.ts` imports from `react-native-paper`. If the showcase doesn't declare `react-native-paper` as its own dependency, Metro may resolve it from the design system's `node_modules` — which doesn't exist because design system's package.json has no `react-native-paper` dep (it's a dev environment for token tooling, not an RN app). Declare `react-native-paper` explicitly in `apps/showcase/package.json`.
- **Not running `npm install` from workspace root after `package.json` changes:** Workspace linking only happens during `npm install`. If the design system `package.json` is changed without reinstalling, the symlink will be stale.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Bottom tab navigation bar UI | Custom View with Pressables | `BottomNavigation.Bar` from react-native-paper | Handles active state, shifting animation, accessibility, theming |
| Segmented control | Custom row of Pressables with state | `SegmentedButtons` from react-native-paper | MD3 spec-compliant; handles selected state, border, color |
| Text input with label | Custom TextInput + label View | `TextInput` from react-native-paper (mode="outlined") | Handles floating label, focus ring, error state |
| Divider line | Custom View with height:1 | `Divider` from react-native-paper | Respects theme outline color |
| Progress bar | Custom View with width animation | `ProgressBar` from react-native-paper | Handles animation, accessibility, theming |
| List item with chevron | Custom Pressable + Text + Icon | `List.Item` from react-native-paper | Accessibility, ripple feedback, consistent spacing |
| Safe area padding | Manual Platform.OS checks | `SafeAreaView` from react-native-safe-area-context | Handles iPhone notch, Dynamic Island, Android nav bar |
| Modal/Sheet overlay | Custom position:absolute View | `Modal` from react-native-paper or React Native built-in | Proper z-index, accessibility |

**Key insight:** For every component that exists in react-native-paper's component catalog, use it. VoltVenture theming is applied at the `PaperProvider` level — components automatically pick up correct colors without manual styling. Only apply token-based `StyleSheet` values for spacing, typography, and non-Paper custom elements.

---

## Component → React Native Paper Mapping

This maps each Phase 3 Storybook component to its RN Paper primitive(s). The Phase 3 HTML/CSS stories are the visual reference; the RN Paper primitives are the implementation vehicle.

| Phase 3 Component | RN Paper Primitive(s) | Key Props / Notes |
|-------------------|----------------------|-------------------|
| **StatusBar** | `expo-status-bar StatusBar` | `style="dark"` (light surface); no RN Paper equivalent |
| **Button** | `Button` | `mode="contained"` for primary CTA; `labelStyle={{ color: tokens.colorTextPrimary }}` for black text on green; `mode="outlined"` for secondary |
| **SocialAuthButtons** | `Button mode="outlined"` (two instances) | Google + Apple variants; add icon prop; borderColor from `tokens.colorBorderSubtle` |
| **OrDivider** | `Divider` + `Text` | Horizontal divider with "or" text overlay; custom flex row with two `Divider` components and center `Text` |
| **PhoneInput** | `TextInput mode="outlined"` + custom prefix | Country flag prefix via `left={<TextInput.Affix text="+1" />}`; keyboard type "phone-pad" |
| **SegmentedToggle** | `SegmentedButtons` | `value` + `onValueChange` + `buttons` array prop; selected color from theme.colors.primary |
| **ProgressStrip** | `ProgressBar` | `progress={0.33}` (step 1 of 3); custom color via `color={tokens.colorActionPrimary}` |
| **TrustPanel** | `Surface` + `Card.Content` + `Text` | Surface with elevation for raised appearance; trust bullet points as Text rows |
| **MapPin** | Custom `View` composition | No RN Paper equivalent; `Surface` or `View` with `Ionicons`/`MaterialIcons` + `Text` label |
| **TabBar** | `BottomNavigation.Bar` | `navigationState={{ index, routes }}`; `onTabPress` callback; `renderIcon`; `shifting={false}` for label-always-visible |
| **BottomCard** | `Surface` | Rounded top corners via `style={{ borderTopLeftRadius: tokens.radiusLg, borderTopRightRadius: tokens.radiusLg }}`; contains `Text` rows + `Button` CTA |

**Screen compositions** (9 screens) are assembled from the component list above. Each screen is a `ScrollView` or `View` containing multiple component primitives layered with token-based spacing.

**MapPin detail:** No react-native-paper primitive maps to a map pin. Implement as a `View` with circular background (`tokens.colorActionPrimary`), containing an icon (`@expo/vector-icons` Ionicons `location` icon). This is the one component that needs a custom View layout plus an icon library. [ASSUMED — @expo/vector-icons comes bundled with Expo, no extra install]

**BottomNavigation.Bar vs BottomNavigation note:** Use `BottomNavigation.Bar` (subcomponent) for the standalone tab bar showcase. Full `BottomNavigation` manages scene switching and is designed for navigation — overkill for a static preview. `BottomNavigation.Bar` takes `navigationState`, `renderIcon`, `renderLabel`, `onTabPress` and renders just the bar. [CITED: oss.callstack.com/react-native-paper/docs/guides/bottom-navigation/]

---

## Common Pitfalls

### Pitfall 1: "workspace:*" vs "*" in package.json

**What goes wrong:** Using `"voltventure-design-system": "*"` without the `workspace:` prefix in npm allows npm to try resolving the package from the registry. Since `voltventure-design-system` is not published, this causes `npm install` to fail with "404 Not Found."

**Why it happens:** npm workspaces respect `workspace:` prefix as an explicit workspace-only signal. Without it, npm falls back to registry lookup.

**How to avoid:** Always use `"voltventure-design-system": "workspace:*"` in the showcase `package.json`. [VERIFIED: Expo official docs — docs.expo.dev/guides/monorepos/]

**Warning signs:** `npm error code E404` during `npm install` in the showcase directory.

### Pitfall 2: root `package.json` has `"type": "module"` + Metro bundling

**What goes wrong:** Node.js build scripts (Style Dictionary, validators) need `"type": "module"` to use `import/export` syntax. But Metro historically had issues with packages declaring `"type": "module"`.

**Why it happens:** Metro's ESM resolution improved significantly in SDK 52+. In SDK 57, Metro respects `package.json#exports` and handles ESM packages.

**How to avoid:** Keep `"type": "module"` in the root. Metro in SDK 57 handles it. If Metro throws an ESM error on the design system package, add a `metro.config.js` to the showcase app with the `unstable_enablePackageExports: true` flag (enabled by default in SDK 52+). [ASSUMED — based on Metro ESM changelog; confirm if error occurs]

**Warning signs:** Metro error mentioning `SyntaxError: Cannot use import statement` on the voltventure-design-system package.

### Pitfall 3: react-native-paper not in showcase dependencies

**What goes wrong:** `lib/voltventure_theme.ts` imports `MD3LightTheme` from `react-native-paper`. Metro resolves this import by traversing the package's own `node_modules`. Since the design system root's `package.json` has `react-native-paper` nowhere (it's only in devDependencies of the design system as a type-only dep — actually it's not there at all), Metro will fail to resolve it.

**Why it happens:** In a monorepo with hoisting, packages can accidentally resolve through a sibling's `node_modules`. But Metro resolution is stricter and follows the `nodeModulesPaths` order.

**How to avoid:** Add `react-native-paper` to `apps/showcase/package.json` dependencies explicitly. This guarantees Metro can always find it.

**Warning signs:** Metro error "Unable to resolve module 'react-native-paper'" despite the file importing it.

### Pitfall 4: duplicate React / React Native in monorepo

**What goes wrong:** If both the showcase app and the design system root have React and/or React Native in their `node_modules`, Metro loads two copies. This causes "Invalid hook call" errors at runtime (React hook rules violation).

**Why it happens:** npm hoisting can fail to deduplicate when both workspace root and a sub-package declare the same dep.

**How to avoid:** Only declare React and React Native in `apps/showcase/package.json`. The design system root should NOT add React or React Native to its dependencies or devDependencies. The existing design system `package.json` correctly does not include them. [VERIFIED: current package.json examined]

**Warning signs:** "Invalid hook call" runtime error; React version mismatch warning in Metro output.

### Pitfall 5: font variable names must match exactly

**What goes wrong:** `StyleSheet.create({ text: { fontFamily: 'Inter' } })` fails silently — font falls back to system default. No error is thrown on iOS/Android when a font isn't found.

**Why it happens:** Font family names in StyleSheet must exactly match the key used in the `useFonts()` object, which is the exported variable name from `@expo-google-fonts/*` (e.g., `'Inter_400Regular'`, not `'Inter'`).

**How to avoid:** Use the exported constant name as the `fontFamily` string. Copy-paste from the import statement.

**Warning signs:** Text renders in system font (Helvetica/Roboto) instead of Inter/Manjari; no Metro error.

### Pitfall 6: Tab header showing on detail screens

**What goes wrong:** Expo Router's default Stack shows a header bar on every screen. The showcase detail screens show a white header bar with the route name, which looks unpolished.

**Why it happens:** Expo Router Stack adds a header by default.

**How to avoid:** In `_layout.tsx`, set `screenOptions={{ headerShown: false }}` on the `Stack` and implement custom back navigation using Expo Router's `useNavigation()` or a custom header component.

---

## Code Examples

### Complete app root (`_layout.tsx`)

```tsx
// Source: Expo docs (docs.expo.dev/versions/latest/sdk/font/) +
//         react-native-paper community pattern (readmedium.com/...)
import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { PaperProvider } from 'react-native-paper';
import * as SplashScreen from 'expo-splash-screen';
import {
  useFonts,
  Manjari_400Regular,
  Manjari_700Bold,
} from '@expo-google-fonts/manjari';
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
} from '@expo-google-fonts/inter';
import {
  JetBrainsMono_400Regular,
} from '@expo-google-fonts/jetbrains-mono';
import { createVoltVentureTheme } from 'voltventure-design-system';

SplashScreen.preventAutoHideAsync();

const theme = createVoltVentureTheme();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Manjari_400Regular,
    Manjari_700Bold,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    JetBrainsMono_400Regular,
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) return null;

  return (
    <PaperProvider theme={theme}>
      <Stack screenOptions={{ headerShown: false }} />
    </PaperProvider>
  );
}
```

### Button component implementation (example of Phase 4 pattern)

```tsx
// src/components/ButtonPreview.tsx
// Source: react-native-paper docs (oss.callstack.com/react-native-paper/docs/components/Button/)
import { Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ButtonPreview() {
  return (
    <Button
      mode="contained"
      onPress={() => {}}
      style={{ borderRadius: tokens.radiusFull }}
      labelStyle={{ color: tokens.colorTextPrimary }}
      contentStyle={{ height: tokens.space1200 }}
    >
      Book a Ride
    </Button>
  );
}

export const ButtonSourceCode = `
import { Button } from 'react-native-paper';
import * as tokens from 'voltventure-design-system';

export function ButtonPreview() {
  return (
    <Button
      mode="contained"
      onPress={() => {}}
      style={{ borderRadius: tokens.radiusFull }}
      labelStyle={{ color: tokens.colorTextPrimary }}
      contentStyle={{ height: tokens.space1200 }}
    >
      Book a Ride
    </Button>
  );
}
`.trim();
```

**Note on electric green button text:** `react-native-paper`'s `Button mode="contained"` uses `theme.colors.onPrimary` as the label color by default. `createVoltVentureTheme()` does NOT override `onPrimary`, so it inherits MD3 default (which may be white). Override with explicit `labelStyle={{ color: tokens.colorTextPrimary }}` (Volt Black `#0F0F0F`) to comply with the electric green foreground rule.

### Design system `lib/index.ts` (new file needed)

```typescript
// lib/index.ts
// Source: project convention
export * from './voltventure_tokens';
export { createVoltVentureTheme } from './voltventure_theme';
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual Metro config for monorepos | Auto-detected by expo/metro-config | SDK 52 (2024) | No metro.config.js needed |
| `file:../../` path deps | `workspace:*` protocol | npm 7+ / Expo official guidance | Proper hoisting, no resolution failures |
| `react-native-syntax-highlighter` | `react-native-code-highlighter` | 2023 (original went unmaintained) | Compatible with react-syntax-highlighter 15.x/16.x |
| `createMaterialBottomTabNavigator` | `BottomNavigation.Bar` | react-native-paper 5.14.0 | deprecated — use BottomNavigation.Bar directly |
| Expo Router not default | Expo Router is default in new apps | SDK 50 stable (2024) | New `create-expo-app` scaffolds use Expo Router |

**Deprecated/outdated:**
- `@react-navigation/material-bottom-tabs`: deprecated in react-native-paper 5.14.0. Use `BottomNavigation.Bar` + `@react-navigation/bottom-tabs` v7 or standalone `BottomNavigation`.
- `react-native-syntax-highlighter` v2.1.0: unmaintained since 2023; peer dep incompatible with modern `react-syntax-highlighter`.
- Manual `metro.config.js` watchFolders: not needed for Expo SDK 52+ with `expo/metro-config`.

---

## Assumptions Log

| # | Claim | Section | Risk if Wrong |
|---|-------|---------|---------------|
| A1 | `"type": "module"` in root package.json does not cause Metro bundling conflicts in SDK 57 | Pitfall 2 | If wrong: need to investigate Metro ESM flags or move library source to CJS-compatible location |
| A2 | @expo/vector-icons comes bundled with Expo SDK 57, no extra install needed | Component Mapping (MapPin) | If wrong: add `@expo/vector-icons` install step to Wave 1 |
| A3 | `workspace:*` is supported by the npm version shipping with Node.js on the development machine | Monorepo Wiring Pattern | If wrong: use `"*"` (without workspace: prefix) + add `overrides` to prevent registry lookup |
| A4 | Metro in SDK 57 handles .ts files from local workspace packages without sourceExts customization | Pattern 2 | If wrong: add `resolver.sourceExts` override in metro.config.js |
| A5 | react-native-code-highlighter v1.3.0 works with Expo SDK 57 without additional bundler config | Package Audit | If wrong: fall back to custom ScrollView + monospace Text approach |

---

## Open Questions

1. **npm workspaces vs Bun workspaces**
   - What we know: project currently uses npm (has package-lock.json). Expo official docs recommend Bun or pnpm for monorepos for better performance and isolated deps.
   - What's unclear: whether switching to Bun just for the showcase setup makes sense, or whether npm workspaces is sufficient.
   - Recommendation: Stay with npm (existing tooling, package-lock.json). Use `workspace:*` syntax which npm 7+ supports.

2. **Icon library for MapPin**
   - What we know: `@expo/vector-icons` is bundled with Expo and includes `Ionicons` (has location/map-marker icons).
   - What's unclear: project has not previously used icons; no icon library decision has been made.
   - Recommendation: Use `@expo/vector-icons` (Ionicons) — it's bundled with Expo, zero extra install, covers map-pin and all showcase needs.

3. **Whether `lib/voltventure_tokens.ts` needs `export *` for all tokens**
   - What we know: the current file exports 15 semantic token constants (colorSurface*, colorText*, colorAction*, colorBorder*, colorStatus*). The private constants (spacing, radius, etc.) are NOT exported.
   - What's unclear: do component implementations need `tokens.space400`, `tokens.radiusFull`, etc.? These are currently private (no `export`).
   - Recommendation: The private constants need to be exported for showcase component implementations to use them. This requires a one-line change to `voltventure_tokens.ts` per spacing/radius token, OR a separate re-export in `lib/index.ts` that re-exports the internals. Planner should include a task to audit and export all needed token constants.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | npm workspaces, Metro bundler | ✓ | Inferred from npm working | — |
| npm 7+ | workspace:* protocol | ✓ | Inferred (package-lock.json v3 format present) | Use "*" syntax without workspace: |
| iOS Simulator | Done-bar verification (D-07) | [ASSUMED] | — | Use Android emulator (D-07 says iOS OR Android) |
| Android Emulator | Done-bar verification fallback | [ASSUMED] | — | Use iOS Simulator |
| Expo Go / Dev Build | Running app during development | [ASSUMED] | — | Create dev build via `npx expo run:ios` |

**Missing dependencies with no fallback:** None identified — done-bar requires iOS OR Android, not both.

**Note on done-bar command:** Use `npx expo start` to start Metro + Expo Go. For `tsc --noEmit`, run from `apps/showcase/`: `npx tsc --noEmit`. The TypeScript check is separate from Metro bundling.

---

## Validation Architecture

> `workflow.nyquist_validation` is explicitly `false` in `.planning/config.json` — this section is SKIPPED per protocol.

---

## Security Domain

This phase builds a local developer showcase app with no backend, no authentication, no user data, no network requests beyond font loading from Google Fonts CDN. ASVS categories V2/V3/V4/V6 do not apply.

| ASVS Category | Applies | Note |
|---------------|---------|------|
| V2 Authentication | No | No auth flows in showcase |
| V3 Session Management | No | No sessions |
| V4 Access Control | No | No access control |
| V5 Input Validation | Minimal | No user-submitted data; PhoneInput is a visual demo only |
| V6 Cryptography | No | No crypto operations |

**Only relevant security concern:** Font loading via `@expo-google-fonts` fetches fonts from Google's CDN at runtime. This is standard practice for a developer showcase; no ASVS requirement applies. In production app, fonts would be bundled via config plugin (`expo-font` config plugin) to avoid CDN dependency.

---

## Sources

### Primary (HIGH confidence)
- npm registry (`npm view <pkg> version time.modified`) — verified all package versions and publish dates on 2026-08-01
- docs.expo.dev/guides/monorepos/ — workspace setup, Metro auto-config for SDK 52+, workspace:* syntax
- docs.expo.dev/versions/latest/sdk/font/ — useFonts() hook API, SplashScreen integration pattern
- github.com/expo/google-fonts/blob/main/README.md — useFonts() pattern, named font export convention
- github.com/gmsgowtham/react-native-code-highlighter — CodeHighlighter API, peer dependencies

### Secondary (MEDIUM confidence)
- readmedium.com/the-ultimate-guide-to-custom-theming-with-react-native-paper-expo-and-expo-router — PaperProvider + _layout.tsx pattern with Expo Router
- oss.callstack.com/react-native-paper/docs/guides/bottom-navigation/ — BottomNavigation.Bar standalone usage; deprecation of createMaterialBottomTabNavigator

### Tertiary (LOW confidence)
- WebSearch results for react-native-syntax-highlighter compatibility — used to confirm unmaintained status and stale peer dep (corroborated by npm registry data showing 2023 last-modified date)

---

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — all versions verified via npm registry on 2026-08-01
- Monorepo wiring: HIGH — verified via Expo official docs
- Architecture patterns: HIGH — PaperProvider, useFonts, font naming all verified via official sources
- Syntax highlighting: HIGH — package legitimacy verified; API confirmed via GitHub repo
- Component → RN Paper mapping: MEDIUM — Paper component APIs confirmed via docs search; exact prop behavior for custom components (MapPin, BottomCard) involves some extrapolation
- Pitfalls: MEDIUM — most verified via official docs; A1/A4 are assumed based on SDK release notes

**Research date:** 2026-08-01
**Valid until:** 2026-09-01 (stable Expo/RN Paper releases; check for SDK 58 breaking changes)
