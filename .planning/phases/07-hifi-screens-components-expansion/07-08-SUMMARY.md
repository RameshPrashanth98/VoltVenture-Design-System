---
phase: 7
plan: "07-08"
subsystem: component-stories
tags: [settings-row, faq-row, component, interactive, storybook]
dependency_graph:
  requires: ["07-01"]
  provides: ["stories/components/settings-row.stories.js", "stories/components/faq-row.stories.js"]
  affects: ["07-09", "07-10", "07-11", "07-17", "07-18", "07-19", "07-20", "07-21", "07-22", "07-23"]
tech_stack:
  added: []
  patterns: ["makePhoneFrame inline helper", "DOM element Interactive export", "toggle pill state via .style.*", "expand/collapse per-row state"]
key_files:
  created:
    - stories/components/settings-row.stories.js
    - stories/components/faq-row.stories.js
  modified: []
decisions:
  - "Toggle pill uses left:26px (ON) / left:4px (OFF) with transition:150ms ease — no CSS class toggling"
  - "FAQ rows have independent per-row expanded state (let expanded = startExpanded) — not a single accordion"
  - "Chevron is › text character rotated via style.transform (not an SVG or icon font)"
  - "Press highlight uses colorGrey050 (#fafafa) for settings rows — matches tokens constant"
metrics:
  duration_minutes: 15
  completed: "2026-08-06"
  tasks_completed: 2
  files_created: 2
  files_modified: 0
---

# Phase 7 Plan 08: SettingsRow + FaqRow Component Stories Summary

**One-liner:** SettingsRow (C-01) with chevron/toggle/value variants and FaqRow (C-12) with independent per-row expand/collapse, both phone-framed with live JS interactions.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| T-01 | SettingsRow component story (C-01) | f4c2be7 | stories/components/settings-row.stories.js |
| T-02 | FaqRow component story (C-12) | 253a566 | stories/components/faq-row.stories.js |

## Artifacts Created

### stories/components/settings-row.stories.js
- **Default** — chevron variant: 34×34px icon chip (colorGrey100), text column (title + sub), `›` chevron in colorGrey300
- **WithToggle** — 50×29px pill toggle (ON: colorActionPrimary, knob left:26px)
- **WithValue** — value string "English" + chevron
- **Interactive** — makePhoneFrame(), 3 rows: (1) chevron with pointerdown press highlight, (2) live toggle cycling colorActionPrimary / colorGrey200, (3) value row with press feedback
- **SourceCode** — RN Paper JSX for all 3 variants using List.Item + Switch

### stories/components/faq-row.stories.js
- **Collapsed** — question row, chevron at rotate(0deg) colorGrey300, answer hidden
- **Expanded** — chevron at rotate(90deg) colorTextPrimary, answer block visible
- **Interactive** — makePhoneFrame(), 4 independent FAQ rows (row 1 pre-expanded); pointerdown toggles display:block/none + chevron transform per row
- **SourceCode** — RN Paper JSX with useState expand/collapse pattern

## Verification

```
node --input-type=module --eval "import './stories/components/settings-row.stories.js'; import './stories/components/faq-row.stories.js'"
```
Exit: 0 (both files parse without errors)

Acceptance criteria checks:
- [x] settings-row.stories.js exists, parses clean
- [x] faq-row.stories.js exists, parses clean
- [x] settings-row exports: Default, WithToggle, WithValue, Interactive, SourceCode (PascalCase)
- [x] faq-row exports: Collapsed, Expanded, Interactive, SourceCode (PascalCase)
- [x] Toggle pill dimensions: 50px x 29px, knob 21px
- [x] colorGrey050 used for press highlight in settings rows
- [x] Interactive is a function (returns DOM element, not string)
- [x] rotate(90deg) for expanded chevron, rotate(0deg) for collapsed
- [x] 4 FAQ question strings in faq-row.stories.js
- [x] display:block / display:none toggled on answer elements
- [x] Pre-existing foundation stories NOT staged

## Deviations from Plan

None — plan executed exactly as written.

## Known Stubs

None — all interactive states are wired with real token values and live DOM mutations.

## Threat Flags

None — no new network endpoints, auth paths, or trust boundary changes.

## Self-Check: PASSED

- [x] stories/components/settings-row.stories.js exists
- [x] stories/components/faq-row.stories.js exists
- [x] Commit f4c2be7 exists (settings-row)
- [x] Commit 253a566 exists (faq-row)
