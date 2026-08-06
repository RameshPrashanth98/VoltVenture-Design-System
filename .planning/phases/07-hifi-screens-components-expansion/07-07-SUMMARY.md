---
phase: 7
plan: "07-07"
subsystem: storybook-screens
tags: [screens, legal, terms-of-service, privacy-policy, hi-fi, interactive, scrollable]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/screens/terms-of-service.stories.js", "stories/screens/privacy-policy.stories.js"]
  affects: []
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline copy", "scrollable body with flex:1+overflow-y:auto", "sticky footer with flex-shrink:0"]
key_files:
  created:
    - stories/screens/terms-of-service.stories.js
    - stories/screens/privacy-policy.stories.js
  modified: []
decisions:
  - "No tab bar on ToS/Privacy screens — pre-auth flow, confirmed by phase_7_critical_decisions"
  - "Sticky I Agree footer: flex-shrink:0 with border-top, sits outside scrollable body"
  - "Inner screen white (#ffffff) background matching light legal document convention"
  - "TOS_SECTIONS / PRIVACY_SECTIONS arrays drive both Default (inline HTML) and Interactive (DOM nodes)"
metrics:
  duration: "8 minutes"
  completed: "2026-08-06"
  tasks_completed: 2
  tasks_total: 2
  files_created: 2
  files_modified: 0
---

# Phase 7 Plan 07: Terms of Service + Privacy Policy Hi-Fi Stories Summary

**One-liner:** Scrollable legal document screens (5 sections each) with sticky I Agree CTA, both in 402x874 iPhone 16 Pro phone frame with overflow-y:auto body area.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Terms of Service story (frame XffXP) — 5 ToS sections, scrollable body, sticky I Agree | 4eb6669 | stories/screens/terms-of-service.stories.js |
| T-02 | Privacy Policy story (frame nlrUb) — 5 Privacy sections, same template, no ToS content | 351b94d | stories/screens/privacy-policy.stories.js |

## What Was Built

Both screen stories implement an identical structural template:

- **Status Bar** (62px, light/white surface) — "9:41" time + WiFi/battery icons
- **Header Row** (44px) — circular back button (colorGrey100) + screen title in typeHeadingMd
- **Meta Row** (flex-shrink:0) — "Last updated: 1 January 2025" in typeLabelSm, separated by colorGrey100 border-bottom
- **Scrollable Body** (flex:1, overflow-y:auto, padding:20px) — 5 sections (heading in typeBodyMd bold + body text in 13px/1.6 colorGrey700)
- **Footer note** inside body — copyright in typeLabelSm centered
- **Sticky Footer** (flex-shrink:0) — "I Agree" button: 56px height, full-width, colorActionPrimary, radiusFull, 600 weight

### Terms of Service sections
1. Acceptance of Terms
2. Eligibility & Rental Agreement
3. Payment, Fees & Deposits
4. Rider Responsibilities & Safety
5. Governing Law & Contact

### Privacy Policy sections
1. Information We Collect
2. How We Use Your Data
3. Location & Ride Data
4. Data Sharing & Third Parties
5. Your Rights & Contact

### Interactive export pattern
- `makePhoneFrame()` copied inline — 402x874px, #0f0f0f bezel, 44px radius, white inner screen
- Container: `flex:1; display:flex; flex-direction:column; overflow:hidden` (clips body scroll to frame)
- Body area: `flex:1; overflow-y:auto` — user can scroll text within the phone frame
- I Agree press state: `pointerdown` → colorGreen600 + scale(0.97); `pointerup`/`pointerleave` → reset

### SourceCode export
Static RN Paper JSX showing `ScrollView` body + sticky `Button` footer with VoltVenture token references. Built as DOM element (not HTML string) per D-05.

## Verification

Both files pass node import check (exit 0):
```
node --input-type=module --eval "import './stories/screens/terms-of-service.stories.js'; import './stories/screens/privacy-policy.stories.js'"
```

Content checks passed:
- ToS: contains "Acceptance of Terms", "Governing Law", "overflow-y:auto", "I Agree"
- Privacy: contains "Information We Collect", "Your Rights", "Privacy Policy"; does NOT contain "Acceptance of Terms"
- Both: PascalCase exports Default, Interactive, SourceCode

## Deviations from Plan

None — plan executed exactly as written.

Pre-existing modified files (border/color/elevation/grid/iconography/radius/spacing/typography stories) were NOT staged per phase_7_critical_decisions rule #7.

## Known Stubs

None. Both screens are fully self-contained with real section content from the plan specification.

## Threat Flags

None. These are static read-only legal document screens with no network endpoints, auth paths, or schema changes.

## Self-Check: PASSED

- [x] stories/screens/terms-of-service.stories.js exists
- [x] stories/screens/privacy-policy.stories.js exists
- [x] Commit 4eb6669 exists (T-01)
- [x] Commit 351b94d exists (T-02)
- [x] No parse errors on import
- [x] Pre-existing modified foundation stories not staged
