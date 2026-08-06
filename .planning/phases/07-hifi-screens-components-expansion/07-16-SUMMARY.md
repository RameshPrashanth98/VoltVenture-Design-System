---
phase: 7
plan: "07-16"
subsystem: stories/screens
tags: [screen, form, edit-profile, interactive, hi-fi]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/screens/edit-profile.stories.js"]
  affects: []
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline", "hidden input overlay for keyboard capture", "VerifiedChip pattern", "Category A form interactions"]
key_files:
  created:
    - stories/screens/edit-profile.stories.js
  modified: []
decisions:
  - "Used hidden <input> opacity:0 overlay on each form field for native keyboard capture (Category A form pattern)"
  - "Camera button uses position:absolute inside position:relative 88x88 avatar wrap to ensure correct overlap"
  - "No tab bar — Edit Profile is a modal-style screen navigated from Profile (no bottom navigation)"
  - "colorGrey050 (#fafafa) for input backgrounds; border changes from colorGrey200 to colorSurfaceInverse on focus"
metrics:
  duration: "31 minutes"
  completed: "2026-08-06T05:58:22Z"
  tasks_completed: 1
  files_created: 1
---

# Phase 7 Plan 16: Edit Profile Screen (frame amAsI) Summary

Edit Profile form screen with 76px black avatar circle, 28px colorActionPrimary camera button (absolute-positioned), three form fields with colorGrey050 backgrounds, VerifiedChip on email and phone, and Save Changes CTA — all three exports (Default, Interactive, SourceCode) with hidden native input keyboard capture interactions.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | Create edit-profile.stories.js from Hi-Fi frame amAsI | b57d380 | stories/screens/edit-profile.stories.js |

## Deviations from Plan

None — plan executed exactly as written.

## Acceptance Criteria Verification

- [x] `stories/screens/edit-profile.stories.js` created (695 lines, 28KB)
- [x] `node --input-type=module --eval "import './stories/screens/edit-profile.stories.js'"` exits 0 (no parse errors)
- [x] File contains `76` (avatar circle size — 5 occurrences)
- [x] File contains `28` (camera button size — 17 occurrences)
- [x] File contains `colorGrey050` for input field backgrounds (6 occurrences)
- [x] File contains `Verified` text in email/phone rows (17 occurrences)
- [x] File contains `colorActionPrimary` for camera button and Save CTA (8 occurrences)
- [x] Interactive contains hidden input elements with `opacity:0;position:absolute` overlay (2 occurrences)
- [x] PascalCase exports: `Default`, `Interactive`, `SourceCode`
- [x] Pre-existing foundation stories NOT staged (border/color/elevation/grid/iconography/radius/spacing/typography remain unstaged)

## Key Design Decisions

1. **Avatar wrap sizing**: Used 88x88 wrapper (`position:relative`) containing a 76x76 circle and a 28x28 camera button (`position:absolute; bottom:0; right:0`). The 88px outer container provides space for the camera button to sit at the bottom-right without clipping.

2. **Hidden input pattern**: Each form field's visible `inputRow` div has `position:relative`, and the hidden `<input>` is `position:absolute; top:0; left:0; width:100%; height:100%; opacity:0`. This captures keyboard input while the visible styled row shows the current value. `input` event listener syncs `valueSpan.textContent` in real time.

3. **Focus border change**: On `focus`, `inputRow.style.border` changes to `1px solid #0f0f0f` (colorSurfaceInverse). On `blur`, it reverts to `1px solid #ebebeb` (colorGrey200).

4. **No tab bar**: This screen has no bottom navigation — it is navigated modally from the Profile screen. The header has a back button (36x36 colorGrey100 circle with arrow).

5. **VerifiedChip**: Implemented as an inline-flex div with `colorGreen100` background, `radiusFull` border-radius, `colorTextAccent` text — used on email and phone label rows only (not on Full Name).

## Known Stubs

None — all fields show realistic placeholder data consistent with the Hi-Fi design frame.

## Threat Flags

None — this is a static Storybook story file with no network endpoints, auth paths, or server-side logic.

## Self-Check: PASSED

- [x] `stories/screens/edit-profile.stories.js` — FOUND (695 lines)
- [x] Commit `b57d380` — FOUND (`git log --oneline -1` confirms)
- [x] No pre-existing files accidentally staged
