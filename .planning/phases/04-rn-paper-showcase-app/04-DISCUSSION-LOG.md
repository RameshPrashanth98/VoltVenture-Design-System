# Phase 4: React Native Paper Showcase App — Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-08-01
**Phase:** 04-rn-paper-showcase-app
**Areas discussed:** App type, Source code display, Screen scope, Package wiring, Font loading, Navigation structure, Done-bar

---

## App Type — Create or Connect

| Option | Description | Selected |
|--------|-------------|----------|
| Component showcase app | Standalone Expo app rendering VoltVenture RN Paper components with Preview + Code tabs — like the RN Paper docs app | ✓ |
| Production app scaffold | Real VoltVenture ride-hailing app with working navigation flows | |

**User's choice:** Component showcase app
**Notes:** User specified wanting to show source codes in react-native-paper and adapt https://oss.callstack.com/react-native-paper/ design system for VoltVenture branding. This confirmed a showcase/documentation app, not a production app.

---

## Source Code Display

| Option | Description | Selected |
|--------|-------------|----------|
| Code tab on each screen | Preview tab + Code tab per component/screen — same pattern as RN Paper docs site | ✓ |
| Fullscreen code modal | 'View Code' button opens modal overlay with full source | |
| Static text block below preview | Styled text block below component preview on same screen | |

**User's choice:** Code tab on each screen (Recommended)
**Notes:** Matches the React Native Paper documentation site pattern the user referenced.

---

## Screen Scope

| Option | Description | Selected |
|--------|-------------|----------|
| All HIFI screens + components | All 9 HIFI screens + 11 components — same set as Phase 3 Storybook | ✓ |
| Components only | 11 reusable components only, skip full-screen compositions | |
| Key screens only | Auth flow + HomeMap only (4 screens) | |

**User's choice:** All HIFI screens + components (Recommended)
**Notes:** Same 20 items from Phase 3 — full coverage.

---

## Package Wiring

| Option | Description | Selected |
|--------|-------------|----------|
| Local path dep in monorepo | Add main/exports to design system package.json; showcase references via file: path | ✓ |
| Copy generated files into app | Copy lib/*.ts directly into showcase — breaks single source of truth | |
| Separate git repo | Separate repo for showcase app; design system published to local registry | |

**User's choice:** Local path dep in monorepo (Recommended)
**Notes:** Design system package.json currently has no main/exports field — needs updating as part of Phase 4 setup.

---

## Font Loading

| Option | Description | Selected |
|--------|-------------|----------|
| expo-google-fonts | @expo-google-fonts/manjari + /inter + /jetbrains-mono; useFonts() hook; CDN at startup | ✓ |
| Bundled .ttf assets | Bundle font files directly via expo-font; offline capable | |

**User's choice:** expo-google-fonts (Recommended)
**Notes:** Acceptable for a developer showcase app where internet is assumed.

---

## Navigation Structure

| Option | Description | Selected |
|--------|-------------|----------|
| Two-section list | Home with Components (11) + Screens (9) sections; tap to detail with Preview + Code tabs | ✓ |
| Bottom tab bar | Two tabs (Components / Screens) always accessible | |
| Flat alphabetical list | Single flat list of all 20 items | |

**User's choice:** Two-section list (Recommended)
**Notes:** Mirrors the React Native Paper docs app navigation pattern.

---

## Done-Bar

| Option | Description | Selected |
|--------|-------------|----------|
| Metro bundler + device render | No TS errors, all 20 items render on iOS sim OR Android emulator, green visible | ✓ |
| Both iOS + Android verified | Smoke test on both platforms | |
| Metro bundler only | TypeScript + Metro only; no simulator required | |

**User's choice:** Metro bundler + device render (Recommended)
**Notes:** One platform (iOS OR Android) is sufficient. Electric green + Volt Black must be visibly applied.

---

## Claude's Discretion

- Folder structure within `apps/showcase/` (screens/, components/, navigation/, etc.)
- Syntax highlighting library for the Code tab
- Navigation library choice (Expo Router vs React Navigation — lean toward simpler option)
- Loading indicator style while fonts load

## Deferred Ideas

- Storybook for React Native (`@storybook/react-native`) — future phase
- Production VoltVenture ride-hailing app — separate project
- Dark mode — needs validated dark screen designs first
- EAS Build / App Store submission — future milestone
- Component unit tests — future phase
