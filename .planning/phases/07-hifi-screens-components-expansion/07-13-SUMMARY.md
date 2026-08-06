---
phase: 7
plan: "07-13"
subsystem: stories/screens
tags: [screens, payment, hi-fi, interactive]
dependency_graph:
  requires: ["07-01", "07-09"]
  provides: ["add-payment-method screen", "select-payment-method screen", "payment-methods screen"]
  affects: ["stories/screens/"]
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline helper", "radio row selection via pointerdown", "tab bar active state switching", "colorGreen100 selected row", "colorGrey050 trust card"]
key_files:
  created:
    - stories/screens/add-payment-method.stories.js
    - stories/screens/select-payment-method.stories.js
    - stories/screens/payment-methods.stories.js
  modified: []
decisions:
  - "Add Payment and Select Payment screens: NO tab bar (modal flow, not tab-rooted screens)"
  - "Payment Methods screen: Tab Wallet (index 2) active with colorSurfaceInverse circle + colorTextAccent label"
  - "Ride Summary Card: rgba(198,255,45,0.13) lime chip on colorSurfaceInverse background — no token for alpha fill"
  - "Trust Card on payment-methods uses colorGrey050 background per plan spec"
metrics:
  duration: "~18 minutes"
  completed: "2026-08-06"
  tasks_completed: 2
  files_created: 3
---

# Phase 7 Plan 13: Payment Screens (Add Payment, Select Payment, Payment Methods) Summary

Three payment flow screen stories from Hi-Fi frames WFeNt, w3CgWF, d2ytQb — radio selection, saved card list, and payment management with dark credit card visual and Wallet tab active.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Add Payment Method screen (frame WFeNt) | 7d409db | stories/screens/add-payment-method.stories.js |
| T-02 | Select Payment Method + Payment Methods screens (frames w3CgWF, d2ytQb) | 7cccd7e | stories/screens/select-payment-method.stories.js, stories/screens/payment-methods.stories.js |

## What Was Built

### add-payment-method.stories.js (frame WFeNt)
- Status bar (dark) + header with back button + "Add Payment" title
- Ride Summary Card: `colorSurfaceInverse` background, `rgba(198,255,45,0.13)` bike icon chip, white rate text
- 3 payment rows in an outlined list: Apple Pay (unselected), Google Wallet (unselected), Credit/Debit Card (`colorGreen100` pre-selected with `colorActionPrimary` radio checkmark)
- Trust Row: lock icon + "Secured by Stripe" in `colorTextSecondary`
- Confirm CTA: 56px full-width `colorActionPrimary` button "Confirm Start Ride"
- **Interactive:** row `pointerdown` toggles `colorGreen100`/radio states across all 3 rows; CTA `colorGreen600` press state

### select-payment-method.stories.js (frame w3CgWF)
- Same structure as Add Payment but titled "Select Payment"
- Saved methods list: Visa (pre-selected, `colorGreen100`), Mastercard (unselected), Apple Pay (unselected)
- Add New row (4th row): `colorGreen100` chip with "+" icon, no radio, chevron, press feedback only
- **Interactive:** rows A/B/C are selectable; row D shows press feedback without radio toggle

### payment-methods.stories.js (frame d2ytQb)
- Payment management screen with Tab Wallet active
- Visual dark credit card: `colorSurfaceInverse` background, "Visa" white chip, masked number `•••• •••• •••• 4829`, 4px letter spacing
- Add New primary CTA: full-width `colorActionPrimary` 56px button
- Options list (reference, no radio): Apple Pay, Google Wallet, Credit/Debit Card — press feedback via `pointerdown`
- Trust Card: `colorGrey050` background, `colorGreen100` lock chip, "Bank-grade security" + "Payments secured by Stripe"
- View Billing History link with opacity press feedback
- Tab bar: `['Ride','Discover','Wallet','Account']`, Wallet (index 2) active — `colorSurfaceInverse` circle, `colorTextAccent` label
- **Interactive:** tab switching updates all 4 tabs; Add New press → `colorGreen600` + scale(0.97)

## Verification

```
node --input-type=module --eval "import './stories/screens/add-payment-method.stories.js'; import './stories/screens/select-payment-method.stories.js'; import './stories/screens/payment-methods.stories.js'"
EXIT: 0
```

All three files parse without errors.

## Exports Per File

All three files export `Default` (HTML string), `Interactive` (DOM element via `makePhoneFrame()`), and `SourceCode` (RN Paper JSX in dark code panel). All exports are PascalCase per Phase 7 convention.

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None. All token values are wired from `generated/tokens.js`. Color values used as string literals match token hex values. No placeholder or hardcoded empty states that block the screens' goals.

## Threat Flags

None. These are static Storybook story files — no network endpoints, auth paths, or file access patterns introduced.

## Self-Check

- [x] `stories/screens/add-payment-method.stories.js` — exists and verified
- [x] `stories/screens/select-payment-method.stories.js` — exists and verified
- [x] `stories/screens/payment-methods.stories.js` — exists and verified
- [x] T-01 commit `7d409db` — confirmed
- [x] T-02 commit `7cccd7e` — confirmed
- [x] Pre-existing foundation stories (border/color/elevation/grid/iconography/radius/spacing/typography) NOT staged or committed

## Self-Check: PASSED
