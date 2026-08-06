---
phase: 7
plan: "07-14"
subsystem: stories/screens
tags: [screen, security-deposit, tracker, tab-bar, wallet]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/screens/security-deposit.stories.js"]
  affects: []
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline", "4-step progress tracker", "Category E interaction"]
key_files:
  created:
    - stories/screens/security-deposit.stories.js
  modified: []
decisions:
  - "Category E interaction: contact support row press feedback only (no text inputs per PLAN.md)"
  - "Track fill 140px of 281px total: steps 0+1 complete, step 2 active, step 3 pending"
  - "Wallet tab active (third position in Ride/Discover/Wallet/Account bar)"
metrics:
  duration: "~15 minutes"
  completed: "2026-08-06T05:46:02Z"
  tasks_completed: 1
  tasks_total: 1
  files_created: 1
  files_modified: 0
---

# Phase 7 Plan 14: Security Deposit Screen Summary

**One-liner:** Security Deposit post-ride informational screen with dark deposit status banner, 4-step progress tracker (281×3px track, 140px colorActionPrimary fill), and Wallet tab active.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Create security-deposit.stories.js from Hi-Fi frame diQjq | 18fc393 | stories/screens/security-deposit.stories.js |

## What Was Built

**stories/screens/security-deposit.stories.js** — Security Deposit screen story with three exports:

### Default Export (static HTML)
- Light screen (393×852px), `colorSurfaceBase` background
- Status bar (62px, light), header row with back button + "Security Deposit" title, subtitle row
- **Deposit Status Banner** (`colorSurfaceInverse` dark card): "Deposit Amount" label + "Under Review" chip (`colorGrey700`), `₹ 200.00` at 32px/700 weight, `≈ 80 VoltCoins value` conversion, rgba divider, info note row
- **Tracker Section**: "DEPOSIT TRACKER" uppercase label
- **Tracker Card** (white card, `colorGrey100` border): 281×3px grey track (`colorGrey200`), 140×3px green fill (`colorActionPrimary`), 4 step circles with labels:
  - Step 0 "Ride Ended": `colorGreen100` bg, `✓` in `colorTextAccent`
  - Step 1 "Hold Confirmed": `colorGreen100` bg, `✓` in `colorTextAccent`
  - Step 2 "Verifying": `#ffffff` bg, `2px solid colorActionPrimary` border (active)
  - Step 3 "Released": `colorGrey100` bg, `·` in `colorGrey300` (pending)
- **Deposit Info Card**: Credit Hold row (`₹ 200.00`) + divider + Actual Charge row (`₹ 18.20` in `colorTextAccent`)
- **Contact Support Row**: `colorGrey050` background, headphone icon chip, "Contact Support" text, chevron
- **Tab Bar**: Ride / Discover / Wallet (ACTIVE — `colorSurfaceInverse` circle, `colorTextAccent` label) / Account

### Interactive Export
- `makePhoneFrame()` inline (402×874px, `#0f0f0f` bezel, 44px radius, `#ffffff` screen)
- Scrollable content area with all screen elements built via `document.createElement`
- **Only interaction**: Contact Support row `pointerdown` → `backgroundColor = colorGrey100`; `pointerup/pointerleave` → restores `colorGrey050`
- Category E screen: no text inputs, no toggles
- Returns DOM element (frame)

### SourceCode Export
- React Native Paper JSX shown in `<pre><code>` dark panel
- `_esc()` / `_blk()` helpers inline
- Token values documented as comments in JSX string

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all data is static display (this is a post-ride informational screen, static content is correct per design).

## Threat Flags

None — no network endpoints, auth paths, or trust-boundary changes. Static display story only.

## Self-Check

### Files exist:
- `stories/screens/security-deposit.stories.js` — FOUND

### Commits exist:
- `18fc393` — FOUND

### Acceptance criteria:
- [x] File exists at stories/screens/security-deposit.stories.js
- [x] `node --input-type=module --eval "import './stories/screens/security-deposit.stories.js'"` exits 0
- [x] File contains '281' (track width) — 9 occurrences
- [x] File contains '140' (track fill width) — 6 occurrences
- [x] File contains 'colorGreen100' — 7 occurrences
- [x] File contains 'Wallet' as active tab — 8 occurrences
- [x] No hidden input elements (grep count: 0)
- [x] PascalCase exports: Default, Interactive, SourceCode — all present
- [x] Pre-existing foundation stories NOT staged

## Self-Check: PASSED
