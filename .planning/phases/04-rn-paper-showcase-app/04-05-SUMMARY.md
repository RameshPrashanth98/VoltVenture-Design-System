---
phase: 4
plan: 5
title: "Screen Implementations — Splash, Onboarding1, Registration, Login, IdScan"
subsystem: showcase-screen-previews
tags: [react-native-paper, screens, splash, onboarding, registration, login, id-scan, token-colors]
dependency_graph:
  requires: [04-03 — PhoneInputPreview, OrDividerPreview, SocialAuthButtonsPreview components, 04-04 — Batch B components]
  provides: [5 screen preview files in apps/showcase/src/screens/]
  affects: [04-07 — Registry Merge will wire all 5 screen entries into REGISTRY, 04-08 — done-bar verifies all items render]
tech_stack:
  added: []
  patterns:
    - Preview component + SourceCode string export pattern (named exports per file)
    - import * as tokens from voltventure-design-system for all spacing/radius/color values
    - Screen composition from component preview building blocks (PhoneInputPreview, OrDividerPreview, SocialAuthButtonsPreview)
    - Literal font-size values (11/13/14/15/16/28/48pt) — composite typography tokens not re-exported from lib/index.ts
    - colorSurfaceInverse (Volt Black) for dark screens (Splash, IdScan); colorSurfaceBase (white) for light screens
key_files:
  created:
    - apps/showcase/src/screens/SplashPreview.tsx
    - apps/showcase/src/screens/Onboarding1Preview.tsx
    - apps/showcase/src/screens/IdScanPreview.tsx
    - apps/showcase/src/screens/RegistrationPreview.tsx
    - apps/showcase/src/screens/LoginPreview.tsx
  modified: []
decisions:
  - "SplashPreview uses colorSurfaceInverse (Volt Black) background with colorActionPrimary (electric green) wordmark — the Storybook reference used colorSurfaceBase (white) but the plan spec is explicit: dark background with electric green accent"
  - "SplashPreview logo badge uses colorActionPrimary background with colorTextPrimary 'V' letter — matches brand rule: Volt Black text on electric green"
  - "Onboarding1Preview illustration placeholder uses colorSurfaceInverse (dark) for visual contrast on white screen background"
  - "IdScanPreview uses colorGrey800 for nav buttons instead of alpha rgba fill (no alpha token) — closest semantic token to the design's rgba(255,255,255,0.13)"
  - "IdScanPreview id frame uses borderStyle: 'dashed' and colorActionPrimary border — matches visual reference camera guide frame"
  - "RegistrationPreview and LoginPreview reuse PhoneInputPreview, OrDividerPreview, SocialAuthButtonsPreview directly as composed components"
  - "Typography font-size literals used throughout (11/13/14/15/16/28/48pt) — composite tokens (typeBodySm, typeDisplayMd, etc.) not re-exported from lib; same pattern as Plan 04-04"
  - "REGISTRY not modified — intentionally deferred to Plan 07 (Registry Merge) consistent with Batch B screens"
metrics:
  duration: "15 minutes"
  completed: "2026-08-02"
  tasks_completed: 2
  files_changed: 5
---

# Phase 4 Plan 5: Screen Implementations — Batch A Summary

**One-liner:** Five React Native Paper screen preview files (Splash, Onboarding1, IdScan, Registration, Login) assembled from VoltVenture component building blocks; Splash on Volt Black with electric green wordmark, Registration/Login reuse PhoneInput/OrDivider/SocialAuthButtons, zero hardcoded hex values across all files.

## Tasks Completed

| Task | Name | Commit | Files |
|------|------|--------|-------|
| 1 | Implement Splash, Onboarding1, IdScan screen previews | cfe746d | apps/showcase/src/screens/SplashPreview.tsx, Onboarding1Preview.tsx, IdScanPreview.tsx |
| 2 | Implement Registration and Login screen previews | f968ffd | apps/showcase/src/screens/RegistrationPreview.tsx, LoginPreview.tsx |

## What Was Built

### apps/showcase/src/screens/SplashPreview.tsx
Renders a full-screen `View` with `backgroundColor: tokens.colorSurfaceInverse` (Volt Black). Contains:
- Circular logo badge (64pt, `colorActionPrimary` background, Volt Black "V" letter at 32pt Manjari_700Bold)
- "VoltVenture" wordmark in `colorActionPrimary` (electric green), 48pt Manjari_700Bold
- Tagline "Ride. Discover. Sustain." in `colorTextOnInverse` (white)
- Progress track (120pt wide, 4pt tall) with `colorBorderSubtle` track and 40% `colorActionPrimary` fill
- Version label "v1.0.0" in `colorTextSecondary` at bottom

### apps/showcase/src/screens/Onboarding1Preview.tsx
Renders a `ScrollView` with `backgroundColor: tokens.colorSurfaceBase` (white). Contains:
- Illustration placeholder: 320pt tall `View` with `colorSurfaceInverse` background and white placeholder text
- Pagination dots row: active dot (24x8pt pill, `colorActionPrimary`), two inactive dots (8x8pt, `colorBorderSubtle`)
- Heading "Ride green, explore more" in `colorTextPrimary`, 28pt Manjari_700Bold
- Subtext in `colorTextSecondary`, 16pt
- "Next" CTA `Button mode="contained"` with `labelStyle={{ color: tokens.colorTextPrimary }}`, pill shape, 48pt height

### apps/showcase/src/screens/IdScanPreview.tsx
Renders a `View` with `backgroundColor: tokens.colorSurfaceInverse` (Volt Black full screen). Contains:
- Dark top nav row with close (✕) and flashlight (⚡) buttons in `colorGrey800` circular badges
- Step label ("Step 1 of 2") + two-segment progress strip (active: `colorSurfaceBase`, inactive: `colorGrey700`)
- Camera viewport (`colorGrey900` background, flex:1): centered dashed ID frame (280x180pt, `colorActionPrimary` 2pt dashed border), instructions banner pill at bottom
- Trust panel (rounded-top `colorGrey900` surface, `radiusXl` top corners): shield emoji, "Secure Identity Scan" heading, reassurance body text, "Scan My ID" Button with `colorSurfaceBase` background

### apps/showcase/src/screens/RegistrationPreview.tsx
Renders a `ScrollView` with `colorSurfaceBase` background and `space400` padding. Heading "Create Account" (28pt Manjari_700Bold, `colorTextPrimary`), subtext "Enter your phone number to get started." (`colorTextSecondary`). Composed from:
- `PhoneInputPreview` — phone number outlined input
- `Button mode="contained"` — "Continue" CTA with `labelStyle={{ color: tokens.colorTextPrimary }}`, pill shape
- `OrDividerPreview` — horizontal "or" divider
- `SocialAuthButtonsPreview` — Google + Apple outlined buttons
- Terms text ("By continuing, you agree to our Terms and Privacy Policy.") in `colorTextSecondary`, 12pt, center-aligned

### apps/showcase/src/screens/LoginPreview.tsx
Identical structure to `RegistrationPreview` with heading "Welcome Back" and subtext "Sign in to continue your journey." All component building blocks (PhoneInput, Continue button, OrDivider, SocialAuthButtons, terms text) are the same.

## Verification Results

```
grep -l "export.*Preview\|export.*SourceCode" [all 3 Task 1 files] | wc -l → 3 (PASS)
grep -l "export.*Preview\|export.*SourceCode" [all 2 Task 2 files] | wc -l → 2 (PASS — checked via Task 1 pattern)
grep -rn "#[0-9a-fA-F]{6}" [all 5 screen files] | grep -v "//" | wc -l → 0 (PASS — no hardcoded hex)
grep "colorSurfaceInverse" SplashPreview.tsx → 2 matches (background + SourceCode string, PASS)
grep "colorActionPrimary" SplashPreview.tsx → 3 matches (logo badge bg, wordmark color, progress fill, PASS)
grep -c "PhoneInputPreview|SocialAuthButtonsPreview|OrDividerPreview" RegistrationPreview.tsx → 12 (PASS)
grep -c "PhoneInputPreview" LoginPreview.tsx → 4 (PASS)
grep "Create Account" RegistrationPreview.tsx → confirmed (PASS)
grep "Welcome Back" LoginPreview.tsx → confirmed (PASS)
```

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 2 - Missing critical] IdScan uses colorGrey800 for nav button backgrounds instead of alpha fill**
- **Found during:** Task 1 (IdScanPreview implementation)
- **Issue:** The id-scan.stories.js reference uses `rgba(255,255,255,0.13)` for nav button backgrounds. There is no alpha-overlay token in the VoltVenture token system — hardcoding `rgba()` would violate the no-hardcoded-hex rule (which extends to any raw color values).
- **Fix:** Used `tokens.colorGrey800` (`#2f2f2f`) as the closest semantic token for a dark surface container — visually equivalent on the dark `colorSurfaceInverse` background, fully token-compliant.
- **Files modified:** IdScanPreview.tsx
- **Commit:** cfe746d

**2. [Rule 1 - Consistency] Typography literals used instead of composite token property access**
- **Found during:** Task 1 and 2 (same deviation as Plan 04-04)
- **Issue:** Composite typography tokens (`typeBodySm`, `typeDisplayMd`, `typeHeadingLg`, etc.) are not re-exported from `lib/voltventure_tokens.ts` or `lib/index.ts`. Attempting `tokens.typeBodySm.fontSize` would produce `undefined` at runtime, causing a crash.
- **Fix:** Used explicit literal font-size values derived from `generated/tokens.js` source truth: 11pt (typeLabelSm), 12pt (custom terms), 13pt (typeBodySm), 14pt (typeBodySm), 15pt (typeHeadingSm), 16pt (typeBodyMd), 28pt (typeDisplayMd), 48pt (display wordmark). Added inline comments identifying source token.
- **Files modified:** All 5 screen files
- **Commit:** cfe746d, f968ffd

**Deferred tracking:** Plan 04-01 or a future fixup plan should consider adding typography composite token exports to `lib/voltventure_tokens.ts`. Until then, all screen and component files use literal font-size values with comments.

## Known Stubs

None — all 5 screen preview files have complete implementations. The `SourceCode` string in each file is the actual JSX source of the Preview component. Component building blocks (PhoneInputPreview, OrDividerPreview, SocialAuthButtonsPreview) are fully wired and rendered. REGISTRY entries for these 5 screens are intentionally deferred to Plan 07 (Registry Merge) per plan specification.

## Threat Flags

None — all files are static visual demo screen compositions. No network endpoints, auth paths, or user data collection. Registration and Login screens are visual-only: PhoneInput is a static display (no submission), SocialAuthButtons fire empty `onPress={() => {}}` handlers (T-04-05: accepted per threat model — "Static visual demos — no user data is collected, submitted, or stored").

## Self-Check: PASSED

- [x] apps/showcase/src/screens/SplashPreview.tsx exists: FOUND — colorSurfaceInverse background confirmed, colorActionPrimary wordmark confirmed
- [x] apps/showcase/src/screens/Onboarding1Preview.tsx exists: FOUND — illustrationPlaceholder, dotsRow (dotActive/dotInactive), heading, subtext, CTA button all present
- [x] apps/showcase/src/screens/IdScanPreview.tsx exists: FOUND — camera viewport, idFrame with colorActionPrimary border, trust panel with rounded top corners
- [x] apps/showcase/src/screens/RegistrationPreview.tsx exists: FOUND — "Create Account" heading, PhoneInputPreview + OrDividerPreview + SocialAuthButtonsPreview imports confirmed
- [x] apps/showcase/src/screens/LoginPreview.tsx exists: FOUND — "Welcome Back" heading, identical structure to Registration
- [x] Zero hardcoded hex values across all 5 files: VERIFIED (grep returned 0 matches)
- [x] All 5 files export both Preview and SourceCode: VERIFIED
- [x] Commit cfe746d exists: VERIFIED — Task 1 (Splash, Onboarding1, IdScan)
- [x] Commit f968ffd exists: VERIFIED — Task 2 (Registration, Login)
