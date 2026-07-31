---
phase: 03-component-library-storybook
plan: 05
subsystem: storybook-screens
tags: [storybook, screen-stories, auth-flow, html-css]
dependency_graph:
  requires: [03-02, 03-03, 03-04]
  provides: [splash-story, onboarding1-story, registration-story, login-story]
  affects: [storybook-screens-section]
tech_stack:
  added: []
  patterns:
    - helper-fn-multi-export (loginScreen helper with activeTab param)
    - flex-column-screen-layout (393x852 non-map screen pattern)
    - inline-statusbar-markup (no component import — markup inlined per screen)
key_files:
  created:
    - stories/screens/splash.stories.js
    - stories/screens/onboarding-1.stories.js
    - stories/screens/registration.stories.js
    - stories/screens/login.stories.js
  modified: []
decisions:
  - "Login screen maps two Hi-Fi frames (yfZaz Phone tab + TS9Td Email tab) to ONE file with PhoneTab and EmailTab exports via loginScreen() helper function"
  - "StatusBar inlined as HTML markup in each screen story (no component import) — consistent with plan spec"
  - "Registration screen uses padding on root div rather than nested layout wrapper — simpler structure"
metrics:
  duration_minutes: 18
  completed_date: 2026-07-31
  tasks_completed: 2
  tasks_total: 2
  files_created: 4
  files_modified: 0
---

# Phase 03 Plan 05: Auth Screen Stories Summary

**One-liner:** Four auth-flow screen stories (Splash, Onboarding1, Registration, Login) in 393x852px flex-column canvas using inline token styles and a helper-function pattern for the two-export Login file.

## Tasks Completed

| Task | Files | Commit |
|------|-------|--------|
| Task 1: Splash + Onboarding1 screen stories | splash.stories.js, onboarding-1.stories.js | b128fce |
| Task 2: Registration + Login screen stories | registration.stories.js, login.stories.js | 3f7c0c4 |

## What Was Built

**splash.stories.js** — Single `Default` export. Full-screen centered layout: repeating dot background pattern (`colorGrey300` radial-gradient), 64px circular logo badge (`colorTextPrimary`), brand name in `typeDisplayXl` (Manjari 700/40px), tagline in `typeBodyMd`, loader progress track with 40% fill in `colorActionPrimary`, version label in `typeLabelSm`.

**onboarding-1.stories.js** — Single `Default` export. Flex-column layout top-to-bottom: inline StatusBar, right-aligned Skip link, illustration placeholder (`colorGrey200` flex fill), pagination dots (first dot elongated 24×8px in `colorActionPrimary`, two inactive 8×8px in `colorGrey200`), headline in `typeDisplayMd` (Manjari 700/28px), subtext in `typeBodyMd`, Next button (green pill `colorActionPrimary`).

**registration.stories.js** — Single `Default` export. Social-auth registration flow: StatusBar, centered logo badge, page title in `typeHeadingLg`, subtitle in `typeBodyMd`, Apple button (green pill `colorActionPrimary`), Google button (white pill with `colorBorderSubtle` border), OR divider (hairline lines + "OR" label), WhatsApp button (green pill), email ghost button, sign-in anchor, terms checkbox row.

**login.stories.js** — Two named exports `PhoneTab` and `EmailTab` via `loginScreen(activeTab)` helper function. Both screens share identical markup — only the SegmentedToggle active segment and input placeholder differ. StatusBar, header (back arrow + "Sign in"), Apple+Google social buttons, OR divider, SegmentedToggle (`colorGrey100` outer / `colorActionPrimary` active segment), input row (`colorGrey050` sunken bg with +91 prefix for phone or plain hint for email), Continue button, sign-up anchor.

## Acceptance Criteria Verified

- [x] 4 files exist in stories/screens/
- [x] All import `../../generated/tokens.js` with explicit .js extension
- [x] All screens: `width:393px` and `min-height:852px` on root div
- [x] All screens: `colorSurfaceBase` background
- [x] splash.stories.js contains `export const Default`, `title: 'Screens/Splash'`, `typeDisplayXl`, `colorActionPrimary`, `width:393px`, `min-height:852px`
- [x] onboarding-1.stories.js contains `export const Default`, `title: 'Screens/Onboarding1'`, `typeDisplayMd`, `colorActionPrimary`
- [x] login.stories.js contains `export const PhoneTab`, `export const EmailTab`
- [x] login.stories.js does NOT contain `export const Default`
- [x] login.stories.js contains `colorGrey100` (toggle outer bg) and `colorActionPrimary` (active segment) and `colorGrey050` (input bg)
- [x] No `hexToRgba` in any of the 4 files (auth screens have no elevation tokens)
- [x] Named exports are PascalCase

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all token values are wired to real token data from `generated/tokens.js`. No hardcoded placeholder hex values. Illustration placeholder in onboarding-1 is intentional (no illustration asset available at story level).

## Threat Flags

None — all 4 files are static HTML template literal strings. No network endpoints, no auth logic, no user input handling, no PII.

## Self-Check

### Created files exist:

- [x] stories/screens/splash.stories.js — FOUND
- [x] stories/screens/onboarding-1.stories.js — FOUND
- [x] stories/screens/registration.stories.js — FOUND
- [x] stories/screens/login.stories.js — FOUND

### Commits exist:

- [x] b128fce — feat(03-05): add Splash and Onboarding1 screen stories
- [x] 3f7c0c4 — feat(03-05): add Registration and Login screen stories

## Self-Check: PASSED
